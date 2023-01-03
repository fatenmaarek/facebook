//function formValidate(){
  //  var p1=document.getElementById("inp1").value;
    //var p2=document.getElementById("inp2").value;
//var error=document.getElementById("error");
//var text="";

//if(p1.length<7 || p1.indexof("@") == -1){
    //text="Enter Your Valid Email"
    //error.innerHTML=text;
  //  return false;
//}else if (p2.length <10 ){
    //text="Enter Your Valid Password"
    //error.innerHTML=text;
    //return false;}
    //else {
    //    return true;
   // }
//}
function formValidate() {
    var p1 = document.getElementById("inp1").value;

    var p2  = document.getElementById("inp2").value;
    var error = document.getElementById("error");
    var text="";

if (p1.length <10 || p1.indexOf ("@") == -1 )
     {//error
        text="please Enter Valid Email";
    error.innerHTML=text;
        return false;}
  
        else if (p2.length <11)
        {//error
           text="please Enter Valid password";
           error.innerHTML=text;
           return false;}
  
      else  {
    return true;
}
}