DROP TABLE IF EXISTS users CASCADE;
DROP TABLE IF EXISTS activity CASCADE;
DROP TABLE IF EXISTS exercise CASCADE;
DROP TABLE IF EXISTS user_activity_join;
DROP TABLE IF EXISTS exercise_activity_join;

CREATE TABLE IF NOT EXISTS users(
	user_id SERIAL PRIMARY KEY,
	user_name VARCHAR(30),
	email VARCHAR,
	password VARCHAR
);

CREATE TABLE IF NOT EXISTS activity(
	activity_id SERIAL PRIMARY KEY,
	name VARCHAR,
	date VARCHAR,
	place VARCHAR,
    leader VARCHAR,
	activity_date DATE,
    start_time TIME,
    end_time TIME
);

CREATE TABLE IF NOT EXISTS exercise(
	exercise_id SERIAL PRIMARY KEY,
	exercise_name VARCHAR,
	exercise_type VARCHAR,
	vid_link VARCHAR,
	exercise_description TEXT
);

CREATE TABLE IF NOT EXISTS user_activity_join (
	item_id SERIAL PRIMARY KEY,
	user_id INTEGER REFERENCES users(user_id),
	activity_id INTEGER REFERENCES activity(activity_id),
    attendance BOOLEAN
);


CREATE TABLE IF NOT EXISTS exercise_activity_join (
	item_id SERIAL PRIMARY KEY,
	user_id INTEGER REFERENCES users(user_id),
	exercise_id INTEGER REFERENCES exercise(exercise_id),
	exercise_qty INTEGER,
	count_type VARCHAR
);
