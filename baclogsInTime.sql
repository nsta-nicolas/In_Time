DROP TABLE IF EXISTS users_items;
DROP TABLE IF EXISTS users ;
DROP TABLE IF EXISTS search;
DROP TABLE IF EXISTS items;

CREATE TABLE items
(
  id SERIAL PRIMARY KEY,
  name VARCHAR(255)
);

CREATE TABLE search
(
  ID SERIAL PRIMARY KEY,
  Name VARCHAR(255)
);

CREATE TABLE users 
(
  id SERIAL PRIMARY KEY,
  lastname varchar(255),
  firstname varchar(255),
  addressmail varchar(255) UNIQUE,
  Password varchar(90) UNIQUE
);

CREATE TABLE users_items
(
  User_ID integer REFERENCES users  ON DELETE CASCADE,
  Item_ID integer REFERENCES items ON DELETE CASCADE,
  PRIMARY KEY (User_ID, Item_ID)
);

INSERT INTO search
  (name) VALUES
  (''),
  (''),
  (''),
  ('');

INSERT INTO items(name) VALUES
  (''),
  (''),
  (''),
  (''),
  ('');

INSERT INTO users 
  (firstname, lastname, addressmail) VALUES
  ('José', 'Saint-albin', 'J@gmail.com'),
  ('Marie-Louise', 'Nuiro','ML@gmail.com'),
  ('Cedric', 'Nsta','C@gmail.com'),
  ('Audrey', 'Nsta', 'A@gmail.com'),
  ('Nicolas', 'Nsta','N@gmail.com');

INSERT INTO users_items
  (User_ID, Item_ID) VALUES
  (1, 3),
  (1, 2),
  (1, 4),
  (2, 1),
  (2, 2),
  (2, 5),
  (3, 4),
  (3, 5),
  (3, 3),
  (4, 4),
  (4, 1),
  (4, 3),
  (5, 2),
  (5, 5),
  (5, 4);
