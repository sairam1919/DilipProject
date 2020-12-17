CREATE TABLE `time_activity` (
  `customer_name` varchar(50) NOT NULL,
  `name` varchar(45) NOT NULL,
  `date` varchar(50) NOT NULL,
  `service_name` varchar(45) NOT NULL,
  `billable` tinyint NOT NULL,
  `time` time NOT NULL,
  `description` varchar(250) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
