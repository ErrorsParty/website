create table public.todos (
	id serial not null primary key,
	title text not null,
	content text,
	at timestamp default now() not null
);

alter table public.todos
enable row level security;

create policy "Anyone can do anything"
on public.todos
as permissive
using (true);
