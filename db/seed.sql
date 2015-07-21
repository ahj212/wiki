--USERS DB
INSERT INTO users (user_name, password, email) VALUES ('admin', '12345', 'ahj212@gmail.com');

--CATEGORIES DB
INSERT INTO categories (category_name, category_author) VALUES ('Central Texas', 'admin');
INSERT INTO categories (category_name, category_author) VALUES ('East Texas', 'admin');
INSERT INTO categories (category_name, category_author) VALUES ('South Texas', 'admin');

--ARTICLES DB
INSERT INTO articles (article_name, article_content, parent_category, article_author) VALUES ('Brisket', 'This is an article about brisket.', 'Central Texas', 'admin');
INSERT INTO articles (article_name, article_content, parent_category, article_author) VALUES ('Central Texas dry rub', 'This is an article about central Texas dry rub.', 'Central Texas', 'admin');
INSERT INTO articles (article_name, article_content, parent_category, article_author) VALUES ('Pulled Pork', 'This is an article about pulled pork.', 'East Texas', 'admin');
INSERT INTO articles (article_name, article_content, parent_category, article_author) VALUES ('East Texas BBQ sauce', 'This is an article about East Texas barbecue sauce.', 'East Texas', 'admin');
INSERT INTO articles (article_name, article_content, parent_category, article_author) VALUES ('Barbacoa', 'This is an article about brisket', 'South Texas', 'admin');

