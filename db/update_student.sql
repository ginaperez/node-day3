UPDATE students SET cohort = $1
WHERE student_id = $2;

SELECT * FROM students;