DROP DATABASE IF EXISTS eugescha_db;
CREATE DATABASE IF NOT EXISTS eugescha_db;

USE eugescha_db;

DROP TABLE IF EXISTS T_Photo;
CREATE TABLE IF NOT EXISTS T_Photo (
  id INT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
  thumb_path VARCHAR(255) NOT NULL,
  thumb_w SMALLINT UNSIGNED NOT NULL,
  thumb_h SMALLINT UNSIGNED NOT NULL,
  photo_path VARCHAR(255) NOT NULL,
  photo_w SMALLINT UNSIGNED NOT NULL,
  photo_h SMALLINT UNSIGNED NOT NULL,
  upload_date DATE NOT NULL,
  photo_date DATE NOT NULL
)
ENGINE = InnoDB;

INSERT INTO T_Photo
(thumb_path, thumb_w, thumb_h, photo_path, photo_w, photo_h, upload_date, photo_date)
VALUES
("1.jpg", 300, 199, "1.jpg", 300, 199, '2015-07-07', '2015-04-19'),
("2.jpg", 300, 199, "2.jpg", 300, 199, '2015-07-06', '2015-04-25'),
("3.jpg", 300, 199, "3.jpg", 300, 199, '2015-07-05', '2015-04-26'),
("4.jpg", 300, 199, "4.jpg", 300, 199, '2015-07-04', '2015-06-13'),
("5.jpg", 300, 199, "5.jpg", 300, 199, '2015-07-03', '2015-06-13'),
("6.jpg", 300, 169, "6.jpg", 300, 169, '2015-07-02', '2014-05-24'),
("7.jpg", 300, 169, "7.jpg", 300, 169, '2015-07-01', '2014-05-24'),
("8.jpg", 300, 169, "8.jpg", 300, 169, '2015-06-30', '2014-05-24'),
("9.jpg", 300, 169, "9.jpg", 300, 169, '2015-05-29', '2014-05-25'),
("10.jpg", 300, 169, "10.jpg", 300, 169, '2015-05-29', '2014-06-01');