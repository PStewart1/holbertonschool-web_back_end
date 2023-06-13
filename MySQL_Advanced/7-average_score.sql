-- Average score 
-- Write a SQL script that creates a stored procedure ComputeAverageScoreForUser that computes and store the average score for a student.
DELIMITER //
CREATE PROCEDURE ComputeAverageScoreForUser(IN user_id INT)
BEGIN
    DECLARE average FLOAT;
    SELECT AVG(score) FROM corrections as c WHERE c.user_id = user_id INTO average;
    UPDATE users SET average_score = average WHERE id = user_id;
END//
DELIMITER ;
