-- Average score 
-- Write a SQL script that creates a stored procedure ComputeAverageScoreForUser that computes and store the average score for a student.
DELIMITER //
CREATE PROCEDURE ComputeAverageScoreForUser(IN user_id INT)
BEGIN
    DECLARE average FLOAT;
    SELECT AVG(score) FROM corrections WHERE user_id = user_id INTO average;
    /* IF project_id IS NULL THEN
        INSERT INTO projects (name) VALUES (project_name);
        SELECT id FROM projects WHERE name = project_name INTO project_id;
    END IF; */
    UPDATE users SET average_score = average WHERE id = user_id;
END//
DELIMITER ;
