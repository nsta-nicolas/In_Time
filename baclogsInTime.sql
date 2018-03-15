DROP TABLE IF EXISTS Users_Items;
DROP TABLE IF EXISTS Users;
DROP TABLE IF EXISTS Search;
DROP TABLE IF EXISTS Items;
CREATE TABLE Items
(
  id SERIAL PRIMARY KEY,
  name VARCHAR(255)
);

CREATE TABLE Search
(
  ID SERIAL PRIMARY KEY,
  Name VARCHAR(255)
);

CREATE TABLE Users
(
  id SERIAL PRIMARY KEY,
  Lastname varchar(255),
  Firstname varchar(255),
  Addressmail varchar(255),
  Password varchar(255)
);

CREATE TABLE Users_Items
(
  User_ID integer REFERENCES Users ON DELETE CASCADE,
  Item_ID integer REFERENCES Items ON DELETE CASCADE,
  PRIMARY KEY (User_ID, Item_ID)
);

INSERT INTO Search
  (name) VALUES
  ('Backlogs'),
  ('A faire'),
  ('En cours'),
  ('Fait');

INSERT INTO Items(name) VALUES
  ('Faire une requête SQL'),
  ('Faire une appli NodeJS'),
  ('Connecter l''appli à la BDD'),
  ('Créer des routes d''API'),
  ('Créer la web pour interroger l''API');

INSERT INTO Users
  (firstname, lastname) VALUES
  ('papa', 'Nsta'),
  ('Maman', 'Nsta'),
  ('Cedric', 'Nsta'),
  ('Audrey', 'Nsta'),
  ('Nicolas', 'Nsta');

INSERT INTO Users_Items
  (User_ID, Item_ID) VALUES
  (1, 3),
  (1, 2),
  (1, 4),
  (2, 1),
  (2, 2),
  (2, 5),
  (3, 4),
  (3, 5),
  (3, 3);

