-- Best band ever!
-- Write a SQL script that ranks country origins of bands by their numbers of fans.
SELECT DISTINCT origin, 
    SUM(fans) AS nb_fans
FROM metal_bands
GROUP BY origin
ORDER BY nb_fans DESC;
