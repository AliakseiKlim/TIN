function to_Coins(number, coin)
{
	if (number === 0) 
  	{
   		return [];
    } 
 	else
    {
    	if (number >= coin[0]) 
        {
        	left = (number - coin[0]);
        	return [coin[0]].concat( to_Coins(left, coin) );
        } 
        else
        {
        	coin.shift();
        	return to_Coins(number, coin);
        }
    }
}
//example of usage

console.log(to_Coins(46, [25, 10, 5, 2, 1]));