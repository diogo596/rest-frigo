
CREATE TABLE `ingredients` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  `type` varchar(100) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

CREATE TABLE `recettes` (
  `id` int NOT NULL AUTO_INCREMENT,
  `type` varchar(100) NOT NULL,
  `name` varchar(100) NOT NULL,
  `genre` varchar(100) NOT NULL,
  `photo` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;


CREATE TABLE `compositions` (
  `id` int NOT NULL AUTO_INCREMENT,
  `ingredients_id` int NOT NULL,
  `recettes_id` int NOT NULL,
  PRIMARY KEY (`id`),
  KEY `ingredients_FK` (`ingredients_id`),
  KEY `recettes_FK` (`recettes_id`),
  CONSTRAINT `ingredients_FK` FOREIGN KEY (`ingredients_id`) REFERENCES `ingredients` (`id`),
  CONSTRAINT `recettes_FK` FOREIGN KEY (`recettes_id`) REFERENCES `recettes` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

CREATE TABLE `user` (
  `id` int NOT NULL AUTO_INCREMENT,
  `pseudo` tinytext NOT NULL,
  `email` varchar(100) NOT NULL,
  `password` varchar(100) NOT NULL,
  `avatar` varchar(255) DEFAULT NULL,
  `recettes_id` int NOT NULL,
  PRIMARY KEY (`id`),
  KEY `user_FK` (`recettes_id`),
  CONSTRAINT `user_FK` FOREIGN KEY (`recettes_id`) REFERENCES `recettes` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
