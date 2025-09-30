-- 0) SAFETY: make required extensions available (already on in most projects)
create extension if not exists "pgcrypto";
create extension if not exists "uuid-ossp";

-- 1) ADMINS TABLE (who can write announcements)
create table if not exists public.admins (
  user_id uuid primary key references auth.users(id) on delete cascade
);

-- (Optional) RLS off on admins (it’s an internal allow-list)
alter table public.admins disable row level security;

-- 2) ANNOUNCEMENTS TABLE
create table if not exists public.announcements (
  id          uuid primary key default gen_random_uuid(),
  title       text not null,
  body        text not null,
  created_by  uuid not null references auth.users(id) on delete set null,
  created_at  timestamptz not null default now()
);

-- 3) TURN ON RLS FOR ANNOUNCEMENTS
alter table public.announcements enable row level security;

-- 4) (Re)CREATE POLICIES
-- Clear existing policies if you re-run this script
drop policy if exists "Announcements are viewable by everyone" on public.announcements;
drop policy if exists "Only admins can write announcements"   on public.announcements;

-- Read: anyone (even logged out) can view
create policy "Announcements are viewable by everyone"
on public.announcements
for select
to public
using (true);

-- Write: only users in admins can insert/update/delete
create policy "Only admins can write announcements"
on public.announcements
for all
using (
  exists (
    select 1 from public.admins a
    where a.user_id = auth.uid()
  )
)
with check (
  exists (
    select 1 from public.admins a
    where a.user_id = auth.uid()
  )
);

-- 5) ENSURE YOUR ACCOUNT IS AN ADMIN (change email if needed)
insert into public.admins (user_id)
select id
from auth.users
where email = 'denniskipruto64@gmail.com'
on conflict (user_id) do nothing;
