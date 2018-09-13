CREATE DATABASE eatBurger_db;
USE eatBurger_db;

CREATE TABLE burgers
(
    id int NOT NULL
    AUTO_INCREMENT,
    burger varchar
    (255) NOT NULL,
    devoured boolean,
    PRIMARY KEY
    (id)
);

    CREATE TABLE eaten
    (
        id int NOT NULL
        AUTO_INCREMENT,
    burger varchar
        (255) NOT NULL,
    PRIMARY KEY
        (id)
);