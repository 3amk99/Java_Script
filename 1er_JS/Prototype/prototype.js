let Values = [ "C1" , "C1" , "C2" , "C3" , "C2" ] ;


let things =["C1", "C2" , "C3"] ;

let count = 0 ;

let i = 0 ;
while ( i < things.length ) 
{
  let j = 0 ;
  while( j < Values.length )
  {
     if(things[i] === Values[j] )
     {
       count++;
     }
     j++;
  }
   console.log( things[i] +" has repeated for " + count + " times " );
   console.log("\n");
   count = 0 ;
  i++; 
}