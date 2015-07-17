DROP TABLE IF EXISTS users CASCADE;
DROP TABLE IF EXISTS categories CASCADE;
DROP TABLE IF EXISTS articles CASCADE;
DROP TABLE IF EXISTS comments CASCADE;

CREATE TABLE users(
	id SERIAL PRIMARY KEY,
	user_name VARCHAR(255),
	password VARCHAR(255),
	email VARCHAR(255),
	mod BOOLEAN
);

CREATE TABLE categories(
	id SERIAL PRIMARY KEY,
	category_name VARCHAR(255),
	user_id INTEGER references users
);

CREATE TABLE articles(
	id SERIAL PRIMARY KEY,
	article_name VARCHAR(255),
	article_content TEXT,
	article_posting_date DATE,
	article_posting_updated DATE,
	category_id INTEGER references categories,
	user_id INTEGER references users
);

CREATE TABLE comments(
	id SERIAL PRIMARY KEY,
	comment_name VARCHAR(255),
	comment_content TEXT,
	comment_posting_date DATE,
	comment_posting_updated DATE,
	article_id INTEGER references articles,
	user_id INTEGER references users
);