INSERT INTO posts p (img, title, content, author_id)
VALUES ( ${img}, ${title}, ${content}, ${author_id})
RETURNING *;