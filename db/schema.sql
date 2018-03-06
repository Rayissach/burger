DROP DATABASE burgers_db;

CREATE DATABASE burgers_db; 

USE burgers_db;

CREATE TABLE burgers {
	id INT(45) AUTO_INCREMENT NOT NULL,
	burger_name VARCHAR(100),
	devoured boolean NOT NULL deafault 0;

	}