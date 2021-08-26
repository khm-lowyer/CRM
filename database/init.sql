BEGIN;
DROP TABLE IF EXISTS admin,
lead,
lead_comment CASCADE;
CREATE TABLE admin(
    id SERIAL PRIMARY KEY,
    username VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL,
    count_convert INTEGER,
    lead_count INTEGER NOT NULL,
    signup_date DATE NOT NULL DEFAULT CURRENT_DATE
);

CREATE TABLE lead(
    id SERIAL PRIMARY KEY,
    fullname VARCHAR(255) NOT NULL,
    phone VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    country VARCHAR(255) NOT NULL,
    manager INTEGER REFERENCES admin(id),
    status VARCHAR(255) NOT NULL,
    website VARCHAR(255) NOT NULL,
    story TEXT,
    submit DATE NOT NULL DEFAULT CURRENT_DATE
);

CREATE TABLE lead_comment(
    id SERIAL PRIMARY KEY,
    userid INTEGER REFERENCES lead(id),
    story TEXT,
    submit DATE NOT NULL DEFAULT CURRENT_DATE
);

INSERT INTO lead(
        fullname,
        phone,
        email,
        country,
        status,
        website,
        story
    )
VALUES (
        'nora abo homad',
        '0505846021',
        'mnmn@gmail.com',
        'sa',
        'new',
        'khm',
        ''
    ),
(
        'khaled',
        '05058222333',
        'haha.112@gmail.com',
        'HA',
        'New',
        'khm',
        ''
    ); 
    COMMIT;