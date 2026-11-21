# Write your MySQL query statement below
select prices.product_id ,coalesce(round(sum(prices.price*unitsSold.units)/sum(unitsSold.units),2),0) as average_price
from prices
left join unitsSold
on prices.product_id = unitsSold.product_Id
and unitsSold.purchase_date between prices.start_date and prices.end_Date
group by prices.product_id