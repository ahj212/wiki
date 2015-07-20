INSERT INTO users (user_name, password, email, create_date) VALUES ();

INSERT INTO categories (category_name, user_id) VALUES ();

INSERT INTO articles (article_name, article_content, article_posting_date, article_posting_updated, category_id, user_id) VALUES ();

INSERT INTO comments (comment_name, comment_content, comment_posting_date, comment_posting_updated, article_id, user_id) VALUES ();

CREATE TABLE users(
	id SERIAL PRIMARY KEY,
	user_name VARCHAR(255),
	password VARCHAR(255),
	email VARCHAR(255),
	create_date DATE,
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