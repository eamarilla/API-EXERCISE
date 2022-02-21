# ************************************************************
# Sequel Pro SQL dump
# Version 5446
#
# https://www.sequelpro.com/
# https://github.com/sequelpro/sequelpro
#
# Host: 127.0.0.1 (MySQL 5.7.34)
# Database: edge-test
# Generation Time: 2022-02-21 19:46:05 +0000
# ************************************************************


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
SET NAMES utf8mb4;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


# Dump of table bands
# ------------------------------------------------------------

DROP TABLE IF EXISTS `bands`;

CREATE TABLE `bands` (
  `band_id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `band_name` varchar(120) NOT NULL DEFAULT '',
  `band_genre` varchar(60) DEFAULT NULL,
  `band_year` int(11) DEFAULT NULL,
  `band_create` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `band_status` tinyint(1) NOT NULL DEFAULT '1',
  PRIMARY KEY (`band_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

LOCK TABLES `bands` WRITE;
/*!40000 ALTER TABLE `bands` DISABLE KEYS */;

INSERT INTO `bands` (`band_id`, `band_name`, `band_genre`, `band_year`, `band_create`, `band_status`)
VALUES
	(2,'Incubus','Alternative Rock',1991,'2022-02-18 16:40:03',1),
	(3,'311','Alternative Rock',1989,'2022-02-18 16:45:08',1),
	(4,'Green Day','Punk Rock',1986,'2022-02-18 16:46:28',1),
	(5,'Metallica','Trash Metal',1983,'2022-02-21 11:40:30',1),
	(6,'Jamiroquai','Funk, Acid Jazz',1992,'2022-02-21 16:26:15',1),
	(7,'Bob Marley','Reggae',1964,'2022-02-21 16:37:47',1),
	(9,'Eddie Vedder','Rock',1979,'2022-02-21 16:41:23',1);

/*!40000 ALTER TABLE `bands` ENABLE KEYS */;
UNLOCK TABLES;


# Dump of table users
# ------------------------------------------------------------

DROP TABLE IF EXISTS `users`;

CREATE TABLE `users` (
  `user_id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `user_name` varchar(120) NOT NULL DEFAULT '',
  `user_email` varchar(120) NOT NULL DEFAULT '',
  `user_password` varchar(60) NOT NULL DEFAULT '',
  `user_create` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `user_status` tinyint(1) DEFAULT '1',
  PRIMARY KEY (`user_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;

INSERT INTO `users` (`user_id`, `user_name`, `user_email`, `user_password`, `user_create`, `user_status`)
VALUES
	(1,'Emilio Amarilla','eamarilla@mail.com','$2b$10$xZ08.ZEsMcqg52m3M9oUDuIPDJAtnKhU.Lfxt5kM1Gu7hze25D6hi','2022-02-20 17:55:34',1),
	(2,'Administrator','admin@admin.com','$2b$10$tY1VBqFZk5ePGD3OSsoxl.d9RtqL.Tl7tGco0HkcKsSjvB99znN0O','2022-02-20 17:56:08',1);

/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;



--
-- Dumping routines (PROCEDURE) for database 'edge-test'
--
DELIMITER ;;

# Dump of PROCEDURE sp_band_add
# ------------------------------------------------------------

/*!50003 DROP PROCEDURE IF EXISTS `sp_band_add` */;;
/*!50003 SET SESSION SQL_MODE="ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION"*/;;
/*!50003 CREATE*/ /*!50020 DEFINER=`root`@`localhost`*/ /*!50003 PROCEDURE `sp_band_add`(
	IN v_band_name VARCHAR(120),
	IN v_band_genre VARCHAR(60),
	IN v_band_year INT
)
BEGIN
	    
    INSERT INTO bands(
		band_name,
        band_genre,
        band_year
    ) VALUES (
		v_band_name,
        v_band_genre,
        v_band_year
    );
    
    SELECT LAST_INSERT_ID() AS band_id;
    
END */;;

/*!50003 SET SESSION SQL_MODE=@OLD_SQL_MODE */;;
# Dump of PROCEDURE sp_band_edit
# ------------------------------------------------------------

/*!50003 DROP PROCEDURE IF EXISTS `sp_band_edit` */;;
/*!50003 SET SESSION SQL_MODE="ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION"*/;;
/*!50003 CREATE*/ /*!50020 DEFINER=`root`@`localhost`*/ /*!50003 PROCEDURE `sp_band_edit`(
	IN v_band_id INT,
	IN v_band_name VARCHAR(120),
	IN v_band_genre VARCHAR(60),
	IN v_band_year INT
)
BEGIN
	UPDATE bands
    SET 
		band_name = v_band_name,
        band_genre = v_band_genre,
        band_year = v_band_year
	WHERE band_id = v_band_id;
END */;;

/*!50003 SET SESSION SQL_MODE=@OLD_SQL_MODE */;;
DELIMITER ;

/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
