DELETE `t1` FROM `chuck_joke` `t1`
INNER JOIN `chuck_joke` `t2` 
WHERE 
    `t1`.`chuck_joke_id` < `t2`.`chuck_joke_id`
    AND 
    `t1`.`joke` = `t2`.`joke`;