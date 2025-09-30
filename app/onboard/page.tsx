'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';

type ProfileForm = {
  full_name: string;
  phone: string;
  neighborhood: string;
  postal_code: string;
};

export default function OnboardPage() {
  const supabase = createClientComponentClient();
  const router = useRouter();

  const [form, setForm] = useState<ProfileForm>({
    full_name: '',
    phone: '',
    neighborhood: '',
    postal_code: '',
  });

  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  // If user already has a profile, you can optionally prefill / skip
  useEffect(() => {
    (async () => {
      const { data: userRes } = await supabase.auth.getUser();
      const user = userRes?.user;
      if (!user) return; // not logged in; let the submit handle redirect

      const { data: existing } = await supabase
        .from('profiles')
        .select('full_name, phone, neighborhood, postal_code')
        .eq('id', user.id)
        .maybeSingle();

      if (existing) {
        setForm({
          full_name: existing.full_name ?? '',
          phone: existing.phone ?? '',
          neighborhood: existing.neighborhood ?? '',
          postal_code: existing.postal_code ?? '',
        });
      }
    })();
  }, [supabase]);

  const handleChange = (key: keyof ProfileForm) => 
    (e: React.ChangeEvent<HTMLInputElement>) =>
      setForm(prev => ({ ...prev, [key]: e.target.value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg(null);
    setLoading(true);

    try {
      const { data: userRes, error: userErr } = await supabase.auth.getUser();
      if (userErr) throw userErr;
      const user = userRes?.user;
      if (!user) {
        router.replace('/login');
        return;
      }

      // Basic validation (tweak as you like)
      if (!form.full_name.trim()) throw new Error('Please enter your full name.');
      if (!form.phone.trim()) throw new Error('Please enter your phone.');
      if (!form.neighborhood.trim()) throw new Error('Please enter your neighborhood.');
      if (!form.postal_code.trim()) throw new Error('Please enter your postal code.');

      // Upsert profile (requires RLS policy allowing owner to insert/update)
      const { error } = await supabase
        .from('profiles')
        .upsert(
          {
            id: user.id,
            full_name: form.full_name.trim(),
            phone: form.phone.trim(),
            neighborhood: form.neighborhood.trim(),
            postal_code: form.postal_code.trim(),
          },
          { onConflict: 'id' }
        );

      if (error) throw error;

      router.replace('/dashboard');
    } catch (err: any) {
      setErrorMsg(err?.message ?? 'Something went wrong.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="w-full max-w-xl bg-white shadow rounded-lg p-6">
        <h1 className="text-2xl font-semibold mb-6">Complete your profile</h1>

        {errorMsg && (
          <div className="mb-4 rounded-md border border-red-200 bg-red-50 px-3 py-2 text-sm text-red-700">
            {errorMsg}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm mb-1">Full name</label>
            <input
              className="w-full rounded-md border px-3 py-2 outline-none focus:ring focus:ring-gray-200"
              value={form.full_name}
              onChange={handleChange('full_name')}
              placeholder="Jane Doe"
            />
          </div>

          <div>
            <label className="block text-sm mb-1">Phone</label>
            <input
              className="w-full rounded-md border px-3 py-2 outline-none focus:ring focus:ring-gray-200"
              value={form.phone}
              onChange={handleChange('phone')}
              placeholder="+1 403 555 0123"
            />
          </div>

          <div>
            <label className="block text-sm mb-1">Neighborhood</label>
            <input
              className="w-full rounded-md border px-3 py-2 outline-none focus:ring focus:ring-gray-200"
              value={form.neighborhood}
              onChange={handleChange('neighborhood')}
              placeholder="Clearview, Sunnybrook, etc."
            />
          </div>

          <div>
            <label className="block text-sm mb-1">Postal code</label>
            <input
              className="w-full rounded-md border px-3 py-2 outline-none focus:ring focus:ring-gray-200"
              value={form.postal_code}
              onChange={handleChange('postal_code')}
              placeholder="T4N 5E2"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="mt-2 w-full rounded-md bg-black px-4 py-2 font-semibold text-white hover:opacity-90 disabled:opacity-60"
          >
            {loading ? 'Saving…' : 'Save & Continue'}
          </button>
        </form>
      </div>
    </div>
  );
}
