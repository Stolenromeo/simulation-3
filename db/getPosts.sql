SELECT p.*, u.username FROM posts p
JOIN users u ON p.author_id = u.id