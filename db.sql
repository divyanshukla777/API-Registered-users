CREATE DATABASE `register`;
USE register;

DROP TABLE IF EXISTS `users`;
CREATE TABLE IF NOT EXISTS `users`(
    `id` BIGINT NOT NULL AUTO_INCREMENT,
    `username` VARCHAR(50) NOT NULL,
    `email` VARCHAR(50) NOT NULL,
    `password` VARCHAR(20) NOT NULL,
    `registeredAt` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (`id`),
    UNIQUE INDEX `uq_email` (`email` ASC)
);