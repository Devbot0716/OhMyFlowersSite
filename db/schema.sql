CREATE TABLE arrangements (
   images varchar(255), --varchar is for strings
   type varchar(255),
   description varchar(255),
   name varchar(255),
   price varchar(255),
   id SERIAL PRIMARY KEY
)

INSERT INTO arrangements (images, type, description, name, price)
VALUES ('./images/Veteran.jpg', 'everydayFlowers', 'This is a veteran arrangement', 'everydayFlowers', '$49.99'),

('./images/BridalBouquet.jpg', 'bridalBouquet', 'This is a Bridal Bouquet', 'Bridal Bouquet', '$129.99'),

('./images/boutonniere.jpg', 'boutonniere', 'This is a boutonniere', 'boutonniere', '$14.99'),

('./images/corsage.png', 'corsage', 'This is a corsage',
  'corsage', '$19.99'),

('./images/FuneralPiece.jpg', 'funeralArrangement', 'This is a funeral arrangment', 'Funeral Arrangement', '$89.99'),

('./images/bouquet1.jpeg', 'bridalBouquet', 'This is a bouquet', 'bouquet', '$49.99', '6'),

('./images/bouquet2.jpeg', 'bridalBouquet', 'This is a bouquet', 'bouquet', '$59.99', '7'),

('./images/bouquet3.jpeg', 'bridalBouquet', 'This is a bouquet', 'bouquet', '$39.99', '8'),

('./images/bouquet4.jpeg', 'bridalBouquet', 'This is a bouquet', 'bouquet', '$29.99', '9'),

('./images/bouquet5.jpeg', 'bridalBouquet', 'This is a bouquet', 'bouquet', '$69.99', '10')
