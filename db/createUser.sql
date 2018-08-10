INSERT INTO users (author, username, profile_pic)
VALUES (${sub} ${name}, ${picture})
RETURNING *;