
var billAmount = 86.32; 

function gratuity()
{ 
return billAmount * .2;
};

function totalWithGrat(amount)
{
	return gratuity() + amount;
}

console.log("your total, including gratuity is: $" + totalWithGrat(billAmount).toFixed(2));

