\c logindb;

CREATE TABLE sign_up(
    id serial PRIMARY KEY ,
    name VARCHAR(20) NOT NULL UNIQUE,
    email VARCHAR(100) NOT NULL UNIQUE,
    pass VARCHAR(30) NOT NULL,
    Created TIMESTAMP DEFAULT CURRENT_TIMESTAMP

);

ALTER TABLE sign_up
ALTER COLUMN pass TYPE VARCHAR(200),
ALTER COLUMN pass SET NOT NULL;

SELECT * from sign_up

DELETE from sign_UP
where id<6

DROP TABLE sign_up

SELECT inet_server_port();