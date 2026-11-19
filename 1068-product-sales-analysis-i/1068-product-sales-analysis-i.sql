# Write your MySQL query statement below
select product.product_name,sales.year,sales.price
from sales
inner join product
on sales.product_Id = product.product_Id