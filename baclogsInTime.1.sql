DROP TABLE IF EXISTS users_series;
DROP TABLE IF EXISTS users ;
DROP TABLE IF EXISTS series;

CREATE TABLE series
(
  id SERIAL PRIMARY KEY,
  name VARCHAR(255),
  description VARCHAR(255)
);

CREATE TABLE users 
(
  id SERIAL PRIMARY KEY,
  lastname varchar(255),
  firstname varchar(255),
  addressmail varchar(255) UNIQUE,
  pseudo varchar(255) UNIQUE,
  Password varchar(90) 
);

CREATE TABLE users_series
(
  User_ID integer REFERENCES users  ON DELETE CASCADE,
  Serie_ID integer REFERENCES series ON DELETE CASCADE,
  PRIMARY KEY (User_ID, Serie_ID)
);

INSERT INTO series(name) VALUES
  (''),
  (''),
  (''),
  (''),
  ('');

INSERT INTO users 
  (firstname, lastname, addressmail,pseudo) VALUES
  ('José', 'Saint-albin', 'J@gmail.com','ElPadre'),
  ('Marie-Louise', 'Nuiro','ML@gmail.com','MaMa'),
  ('Cedric', 'Nsta','C@gmail.com','CDK'),
  ('Audrey', 'Nsta', 'A@gmail.com','Sistadey'),
  ('Nicolas', 'Nsta','N@gmail.com','Nini');

INSERT INTO users_series
  (User_ID, Serie_ID) VALUES
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
