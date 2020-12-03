CREATE TABLE `customer` (
  `customer_name` varchar(50) NOT NULL,
  PRIMARY KEY (`customer_name`),
  UNIQUE KEY `customer_name_UNIQUE` (`customer_name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
