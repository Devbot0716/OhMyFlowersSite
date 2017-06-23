CREATE TABLE Arrangements (
   Images varchar(255), --varchar is for strings
   Type varchar(255),
   Description varchar(255),
   Name varchar(255),
   Price varchar(255),
   ID SERIAL PRIMARY KEY
)

INSERT INTO Arrangements (Images, Type, Description, Name, Price)
VALUES ('./images/Veteran.jpg', 'everydayFlowers', 'This is a veteran arrangement', 'everydayFlowers', '$49.99'),

('./images/BridalBouquet.jpg', 'bridalBouquet', 'This is a Bridal Bouquet', 'Bridal Bouquet', '$129.99'),

('./images/boutonniere.jpg', 'boutonniere', 'This is a boutonniere', 'boutonniere', '$10.99'),

('./images/corsage.png', 'corsage', 'This is a corsage', 'corsage', '$10.99'),

('./images/FuneralPiece.jpg', 'funeralArrangement', 'This is a funeral arrangment', 'Funeral Arrangement', '$18.99')
