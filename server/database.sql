
create TABLE users(
    id SERIAL PRIMARY KEY,
    name VARCHAR(255),
    surname VARCHAR(255),
    birthday DATE,
    isActivated BOOLEAN,
    activationLink VARCHAR(255),
    password VARCHAR(255),
    email VARCHAR(255)
);

ALTER TABLE users ALTER COLUMN isActivated SET DEFAULT false;
ALTER TABLE users ALTER COLUMN activationLink TYPE TEXT;
ALTER TABLE users ADD COLUMN avatar text;

create TABLE chats(
    id SERIAL PRIMARY KEY,
    title VARCHAR(255),
    img VARCHAR(255),
    isDialog BOOLEAN
);

create TABLE chat_users(
    id SERIAL PRIMARY KEY,
    user_id INTEGER,
    FOREIGN KEY (user_id) REFERENCES users (id),
    chat_id INTEGER,
    FOREIGN KEY (chat_id) REFERENCES chats (id),
    isAdmin BOOLEAN
);

create TABLE messages(
    id SERIAL PRIMARY KEY,
    user_id INTEGER,
    FOREIGN KEY (user_id) REFERENCES users (id),
    chat_id INTEGER,
    FOREIGN KEY (chat_id) REFERENCES chats (id),
    time TIMESTAMP,
    text TEXT
);

create TABLE tokens(
    user_id INTEGER,
    FOREIGN KEY (user_id) REFERENCES users (id),
    refreshToken TEXT
);


SELECT * FROM users;
DELETE FROM tokens WHERE user_id = 12;

DELETE FROM users WHERE name = 'sdf';

