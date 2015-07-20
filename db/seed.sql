--USERS DB
INSERT INTO users (user_name, password, email) VALUES ('admin', '12345', 'ahj212@gmail.com');

--CATEGORIES DB
INSERT INTO categories (category_name, user_id) VALUES ('Central Texas', 1);
INSERT INTO categories (category_name, user_id) VALUES ('East Texas', 1);
INSERT INTO categories (category_name, user_id) VALUES ('South Texas', 1);

--ARTICLES DB
INSERT INTO articles (article_name, article_content, category_id, user_id) VALUES ('Brisket', 'This is an article about brisket.', 1, 1);
INSERT INTO articles (article_name, article_content, category_id, user_id) VALUES ('Central Texas dry rub', 'This is an article about central Texas dry rub.', 1, 1);
INSERT INTO articles (article_name, article_content, category_id, user_id) VALUES ('Pulled Pork', 'This is an article about pulled pork.', 2, 1);
INSERT INTO articles (article_name, article_content, category_id, user_id) VALUES ('East Texas BBQ sauce', 'This is an article about East Texas barbecue sauce.', 2, 1);
INSERT INTO articles (article_name, article_content, category_id, user_id) VALUES ('Barbacoa', 'This is an article about brisket', 3, 1);

--COMMENTS DB
INSERT INTO comments (comment_content, article_id, user_id) VALUES ('First!', 1, 1);
