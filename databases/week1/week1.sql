
select count(*) from task;

select count(*) from task where due_date is null;

select * from task join status on task.status_id = status.id where status.name = 'Done';

select * from task join status on task.status_id = status.id where status.name <> 'Done';

select * from task order by created desc;

/*Get the single most recently created task*/
select * from task where created = (select max(created) from task);

/*Get the title and due date of all tasks where the title or description contains database*/
select title, due_date from task where title like '%database%'  or description like '%database%';

/*Get the title and status (as text) of all tasks*/
select title, name from task join status on status_id = status.id;


 



