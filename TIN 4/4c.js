function check_of_palindrome( str )
{
  let m = str.length -1;
  for( let i = 0 ; i < m/2 ;i++)
  {
    let x = str[i] ;
    let y = str[m-i];
    if( x != y)
    {
      
      return false;
    }
  }
  return true;
   
}

function palindrometekst(str)
{
  let ans = check_of_palindrome(str);
  if(ans == true)
  {
    console.log("string is palindrome ");
  }
  else
  {
    console.log("string not a palindrome");
  }
}
let test = "aba";
palindrometekst(test);
let test1 = "abac";
palindrometekst(test1);