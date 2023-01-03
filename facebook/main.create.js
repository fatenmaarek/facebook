//function myFunction(){
//var first =document.getElementById("inp1").value;

//var sec =document.getElementById("inp2").value;

//var email =document.getElementById("email").value;

//var pass =document.getElementById("password").value;
//var error =document.getElementById("error");
//var text="";

//if (first.length<4){
//text="please Enter Valid Name";
//error.innerHTML=text;
//return false;
//}else if (sec.length<4){
  //  text="please Enter Valid last name";
   // error.innerHTML=text;
   // return false;}
   // else if(email.length< 7 || email.indexOf ("@") == -1){
     //   text="please Enter Valid email";
       // error.innerHTML=text;
       // return false;}
      //  else if(pass.length<10){
        //    text="please Enter Valid Password";
          //  error.innerHTML=text;
           // return false;}
           // else{return true;}
//}

function myFunction() {
 
 
    var pass = document.getElementById("pass").value;

    var email  = document.getElementById("email").value;
    var p1 = document.getElementById("inp1").value;

    var p2  = document.getElementById("inp2").value;
    var error = document.getElementById("error");
    var text="";

if (p1.length <4 )
     {//error
        text="please Enter Valid Name";
    error.innerHTML=text;
        return false;}
  
        else if (p2.length <4)
        {//error
           text="please Enter Valid last Name";
           error.innerHTML=text;
           return false;}
           
        else if (email.length <11 || email.indexOf("@")== -1)
        {//error
           text="please Enter Valid Email";
           error.innerHTML=text;
           return false;}

  
           else if (pass.length <8)
           {//error
              text="please Enter Valid password";
              error.innerHTML=text;
              return false;}
     

  
      else  {
    return true;
}
}