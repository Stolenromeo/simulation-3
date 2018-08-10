CREATE TABLE Users (
	id SERIAL PRIMARY KEY,
	username VARCHAR(20),
	password VARCHAR(20),
	profile_pic TEXT
);

CREATE TABLE posts (
	id SERIAL PRIMARY KEY,
	img TEXT,
	title VARCHAR(45),
	content TEXT,
	author_id integer references Users
);

ALTER TABLE users
ADD COLUMN author TEXT;

CREATE UNIQUE INDEX on users (username);

