CREATE TABLE timesheetmanagement.`tickets` (
  `user_name` varchar(250) NOT NULL,
  `email` varchar(250) NOT NULL,
  `ticket_id` varchar(250) NOT NULL,
  `ticket_content` text NOT NULL,
  `ticket_area` varchar(250) NOT NULL,
  `ticket_attachments` text,
  `comments` text,
  `ticket_createddate` varchar(250) NOT NULL,
  `ticket_updateddate` varchar(250),
  `ticket_status` varchar(50) NOT NULL,
  `ticket_resolution` text,
  `ticket_assignedto` varchar(50),
  
  PRIMARY KEY (`ticket_id`),
  UNIQUE KEY `ticket_id_UNIQUE` (`ticket_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;