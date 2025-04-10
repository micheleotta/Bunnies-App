-- MySQL dump 10.13  Distrib 8.0.41, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: expo_criativa5
-- ------------------------------------------------------
-- Server version	8.0.41

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `bunnies`
--

DROP TABLE IF EXISTS `bunnies`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `bunnies` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(45) NOT NULL,
  `species` varchar(45) NOT NULL,
  `age` int NOT NULL,
  `owner` varchar(100) NOT NULL,
  `entry_year` int NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id_UNIQUE` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=35 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `bunnies`
--

LOCK TABLES `bunnies` WRITE;
/*!40000 ALTER TABLE `bunnies` DISABLE KEYS */;
INSERT INTO `bunnies` VALUES (3,'Blaire','Polish',5,'Angela Walsh DVM',2017),(6,'Bacon','Lionhead',5,'Boyd Hane',2005),(9,'Baron','Argente Brun',4,'Rudolph Kassulkee',2020),(10,'Malvine','American Chinchilla',5,'Jean Champline',2017),(12,'Edwardo','American Chinchilla',2,'Isaac Sauer',2024),(13,'Tania','Rhinelander',4,'Mr. Saul Schmidt',2008),(14,'Brendon','Lionhead',9,'Franklin Wehner',2019),(15,'Deborah','Satin Angora',7,'Dr. Sally Becker I',2015),(16,'Jeremie','Rex',8,'Dr. Rachael Schaden',2000),(17,'Emie','Giant Chinchilla',3,'Dr. Levi Gerhold III',2019),(18,'Demond','French Angora',8,'Dr. Janice Lynch V',2025),(19,'Mandy','Belgian Hare',8,'Rosemary Dicki',2011),(20,'Cory','Holland Lop',1,'Charles Russel DVM',2024),(21,'Abel','Thrianta',3,'Dr. Earnest Mayert',2023),(22,'Colin','American Fuzzy Lop',10,'Daisy Mills',2024),(23,'Kaylin','Rhinelander',10,'Mary Yost III',2018),(24,'Vidal','Rex',10,'Jared Frami DDS',2014),(25,'Braeden','American Chinchilla',6,'Ms. Michele Rice-Jast',2023),(28,'Ana','Mini Lop',3,'Flavia',2025),(29,'Leonardo','Min Xun',6,'Chung',2017),(30,'Felipe','Polish',88,'Tchay Na',1990),(31,'Isa','Mini Lop',1,'Bella',2017);
/*!40000 ALTER TABLE `bunnies` ENABLE KEYS */;
UNLOCK TABLES;