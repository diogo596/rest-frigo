CREATE TABLE `ingredients` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` text CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `type` text CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

CREATE TABLE `recettes` (
  `id` int NOT NULL AUTO_INCREMENT,
  `type` text CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci,
  `name` text CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci,
  `genre` text CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci,
  `photo` text CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

CREATE TABLE `user` (
  `id` int NOT NULL AUTO_INCREMENT,
  `pseudo` tinytext CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `email` text CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `password` text CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `avatar` text CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci,
  `recette_id` int,  -- Ajout de la colonne recette_id
  PRIMARY KEY (`id`),
  CONSTRAINT `user_FK` FOREIGN KEY (`recette_id`) REFERENCES `recettes` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

CREATE TABLE `compositions` (
  `id` int NOT NULL AUTO_INCREMENT,
  `ingredient_id` int,  -- Remplacez `id` par `ingredient_id`
  `recette_id` int,     -- Remplacez `id` par `recette_id`
  PRIMARY KEY (`id`),
  CONSTRAINT `ingredients_FK` FOREIGN KEY (`ingredient_id`) REFERENCES `ingredients` (`id`),
  CONSTRAINT `recettes_FK` FOREIGN KEY (`recette_id`) REFERENCES `recettes` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;


