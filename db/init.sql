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
 --I don't know if this is technically an alter table statement, but I did alter the table with it.
CREATE UNIQUE INDEX on users (username)
--I think you can also use ALTER TABLE users ADD UNIQUE (username) to get it to function if that is better.
