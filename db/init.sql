CREATE TABLE campus_data (
    campus_id SERIAL PRIMARY KEY,
    campus TEXT NOT NULL,
    program VARCHAR(64),
    campus_phone TEXT NOT NULL
);

INSERT INTO campus_data (campus, program, campus_phone)
VALUES 
('Phoenix', 'web', '867-5309'),
('Lehi', 'web', '666-6666'),
('Dallas', 'ios', '555-5555');

CREATE TABLE students (
    student_id SERIAL PRIMARY KEY,
    student TEXT NOT NULL,
    cohort INTEGER NOT NULL,
    campus_id INTEGER NOT NULL REFERENCES campus_data(campus_id)
);

INSERT INTO students (student_name, cohort, campus_id)
VALUES
('Spencer', 3, 1),
('Rebecca', 3, 1),
('Ryan', 7, 1),
('Gary', 7, 1),
('Gina', 4, 1),
('John', 3, 2),
('Sarah', 5, 3),
('Sam', 5, 3)