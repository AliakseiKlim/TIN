//recursive approach
function factorialREC(x) 
{ 
  if (x === 0)
 {
    return 1;
 }
  return x * factorialREC(x-1);
         
}
//example of use
console.log(factorialREC(4));
console.log(factorialREC(5));

//itterative approach
function factorialIT(n){
    let sum = 1;
    if (n == 0 || n == 1){
      return sum;
    }else{
      for(var i = n; i >= 1; i--){
        sum = sum * i;
      }
      return sum;
    }  
  }
  let n = 5;
  answer = factorialIT(n)
  console.log("factorial of " + n + " is " + answer);