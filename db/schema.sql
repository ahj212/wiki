DROP TABLE IF EXISTS users CASCADE;
DROP TABLE IF EXISTS categories CASCADE;
DROP TABLE IF EXISTS articles CASCADE;
DROP TABLE IF EXISTS comments CASCADE;

CREATE TABLE users (
	id SERIAL PRIMARY KEY,
	user_name VARCHAR(255),
	password VARCHAR(255),
	email VARCHAR(255),
	timestamp timestamp default current_timestamp
);

CREATE TABLE categories (
	id SERIAL PRIMARY KEY,
	category_name VARCHAR(255),
	user_id INTEGER references users
);

CREATE TABLE articles (
	id SERIAL PRIMARY KEY,
	article_name VARCHAR(255),
	article_content TEXT,
	timestamp timestamp default current_timestamp,
	category_id INTEGER references categories,
	user_id INTEGER references users
);

CREATE TABLE comments (
	id SERIAL PRIMARY KEY,
	comment_content TEXT,
	timestamp timestamp default current_timestamp,
	article_id INTEGER references articles,
	user_id INTEGER references users
);