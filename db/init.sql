CREATE TABLE Users (
	id SERIAL PRIMARY KEY,
	username VARCHAR(20),
	password VARCHAR(20),
	profile_pic TEXT
);

CREATE TABLE posts (
	id SERIAL PRIMARY KEY,
	img TEXT,
	content TEXT,
	author_id integer references Users
);

ALTER TABLE posts
ADD COLUMN title VARCHAR(45)