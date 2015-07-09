DROP DATABASE IF EXISTS eugescha_db;
CREATE DATABASE IF NOT EXISTS eugescha_db;

USE eugescha_db;

DROP TABLE IF EXISTS T_Photo;
CREATE TABLE IF NOT EXISTS T_Photo (
  id INT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
  thumbnail_path VARCHAR(255) NOT NULL,
  thumbnail_width SMALLINT UNSIGNED NOT NULL,
  thumbnail_height SMALLINT UNSIGNED NOT NULL,
  upload_date DATE NOT NULL,
  photo_date DATE NOT NULL
)
ENGINE = InnoDB;

INSERT INTO T_Photo
(thumbnail_path, thumbnail_width, thumbnail_height, upload_date, photo_date)
VALUES
("1.jpg", 300, 199, '2015-07-07', '2015-04-19'),
("2.jpg", 300, 199, '2015-07-06', '2015-04-25'),
("3.jpg", 300, 199, '2015-07-05', '2015-04-26'),
("4.jpg", 300, 199, '2015-07-04', '2015-06-13'),
("5.jpg", 300, 199, '2015-07-03', '2015-06-13'),
("6.jpg", 300, 169, '2015-07-02', '2014-05-24'),
("7.jpg", 300, 169, '2015-07-01', '2014-05-24'),
("8.jpg", 300, 169, '2015-06-30', '2014-05-24'),
("9.jpg", 300, 169, '2015-05-29', '2014-05-25'),
("10.jpg", 300, 169, '2015-05-29', '2014-06-01');