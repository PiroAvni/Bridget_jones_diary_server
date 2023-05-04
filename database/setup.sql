DROP TABLE IF EXISTS post;
DROP TABLE IF EXISTS token;
DROP TABLE IF EXISTS user_account;

CREATE TABLE post (
    post_id INT GENERATED ALWAYS AS IDENTITY,
    title VARCHAR (100) NOT NULL,
    content VARCHAR (500) NOT NULL,
    created_at  timestamptz null default now(),
    PRIMARY KEY (post_id)
);

CREATE TABLE user_account (
    user_id INT GENERATED ALWAYS AS IDENTITY,
    username VARCHAR(30) UNIQUE NOT NULL,
    password CHAR(60) NOT NULL,
    Admin Boolean DEFAULT FALSE,
    created_at  timestamptz null default now(),
    PRIMARY KEY (user_id)
);

CREATE TABLE token (
    token_id INT GENERATED ALWAYS AS IDENTITY,
    user_id INT NOT NULL,
    token CHAR(36) UNIQUE NOT NULL,
   created_at  timestamptz null default now(),
    PRIMARY KEY (token_id),
    FOREIGN KEY (user_id) REFERENCES user_account("user_id")
);

INSERT INTO user_account ( username, password, Admin) VALUES ('tom', 123, true);
INSERT INTO user_account ( username, password, Admin) VALUES ('ajay', 1234, true);

INSERT INTO Post (title, content) VALUES ('Hello', 'This is a test ');
INSERT INTO Post (title, content) VALUES ('TEST','HELLO THE WEATHER IS NICE TODAY ');