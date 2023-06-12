-- Add bonus 
-- Write a SQL script that creates a stored procedure AddBonus that adds a new correction for a student.
DELIMITER //
CREATE PROCEDURE AddBonus(IN user_id INT, IN project_name VARCHAR(255), IN score INT)
BEGIN
    DECLARE project_id INT;
    SELECT id FROM projects WHERE name = project_name INTO project_id;
    IF project_id IS NULL THEN
        INSERT INTO projects (name) VALUES (project_name);
        SELECT id FROM projects WHERE name = project_name INTO project_id;
    END IF;
    INSERT INTO corrections (user_id, project_id, score) VALUES (user_id, project_id, score);
END//
DELIMITER ;
