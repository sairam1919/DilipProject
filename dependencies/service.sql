CREATE TABLE `service` (
  `service_name` int NOT NULL,
  PRIMARY KEY (`service_name`),
  UNIQUE KEY `service_name_UNIQUE` (`service_name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
