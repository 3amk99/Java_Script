let Values = ["C1" ,"C2" ,"C3" ,"C4" ,"C5" ,"C6" ,"C7","C8"];


let values_members = {

  C1 : "Concevoir avec UX/UI" , C2 : "Structurer le HTML", C3 : "JavaScript : Premiers pas", C4 : "Démarrer avec WordPress" , C5 : "Concevoir une base relationnelle",C6 : " Connecter une application à une base de données", C7 : "Bases et logique PHP",
  C8 : "Découvrir React",
};

  let i = 0 ;
  let score = 0 ;
  let container = 0 ;
  let Values_length =  Values.length ;

  function facebook()
  {
  let number = Math.floor( Math.random() * Values.length ); 
  let X = Values[number];
  Values.splice( number , 1 );
  return X ;
  }


while(i < Values_length ) 
{
  container = facebook() ;
  let name = prompt("Enter what is "+values_members[container]+ " pls: ");
  
  if( name === container )
  {
     score++;
  }
  i++;
}
alert("the finnal score : "+score+"/"+Values_length);
console.log("the finnal score : "+score+"/"+Values_length);