# event-list
Event List demo with Vue.js and Suprabase

# Database Model

This project uses a relational database with the following schema:

## Events Table
```sql
create table events (
  id uuid default uuid_generate_v4() primary key,
  name varchar not null,
  date date not null,
  time time not null,
  location varchar not null,
  city varchar not null,
  venue varchar not null,
  description text,
  event_type varchar not null,
  price decimal(10,2),
  organizer_id uuid references auth.users(id),
  image_url text,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);