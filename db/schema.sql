DROP TABLE IF EXISTS users CASCADE;
DROP TABLE IF EXISTS categories CASCADE;
DROP TABLE IF EXISTS articles CASCADE;

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
	category_author VARCHAR(255)
);

CREATE TABLE articles (
	id SERIAL PRIMARY KEY,
	article_name VARCHAR(255),
	article_content TEXT,
	timestamp timestamp default current_timestamp,
	parent_category VARCHAR(255),
	article_author VARCHAR(255)
);
