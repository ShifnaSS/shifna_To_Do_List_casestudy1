//username&password validation
  
function validation(callback){
  let username = document.getElementById("username");
  let password = document.getElementById("password");
  let erroruser = document.getElementById("erroruser");
  let errorpass = document.getElementById("errorpass");
    var c = false;
    if(username.value.trim()==""||password.value.trim()=="")
    {
      errorpass.innerHTML = 'Fields cannot be empty';
      callback(false);
    }
    else if(username.value=="admin"&&password.value=="12345")
    {
      callback(true);
    }
    else if(username.value!="admin"&&password.value!="12345")
    {
      erroruser.innerHTML = "Incorrect username";
      errorpass.innerHTML = "Incorrect password";
      callback(false);
    }
    else if(username.value=="admin"){
      erroruser.innerHTML = "";
      errorpass.innerHTML = "Password incorrect";
      callback(false);
    }
    else{
      erroruser.innerHTML = "Incorrect username";
      errorpass.innerHTML = "";
      callback(false);
    }
}
//redirecting to page

function load(){
  validation(function (res) {
    // console.log("res::",res)
    if(res){
      window.location = "mainpage.html";
    }
  })
}
//navigation bar

function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

//json content loading
function jsonloading(){
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function(){
      if(this.readyState==4&&this.status==200){
          var response = JSON.parse(this.responseText);
          var output = "";
          var check = "";
          for(i=0;i<response.length;i++)
          {
            if(response[i].completed==true)
            {
              check = "<tr><td><label class='checkbox'><input type='checkbox' checked disabled id='tick'><span></span></label></td><td>"+ response[i].title +"</td></tr>";
              $("#trcontent").append(check).removeClass("hidden");
            }
            else{
              check = "<tr><td><label class='checkbox'><input type='checkbox' class='checking' id='tick'><span></span></label></td><td>"+ response[i].title +"</td></tr>";
              $("#trcontent").append(check).removeClass("hidden");
            }   
          } 
        }
      }
  xhttp.open("GET","https://jsonplaceholder.typicode.com/todos",true);
  xhttp.send();
  }


// checkbox verifying using promise
let c = 0;
$("#trcontent").on('change','.checking',function() {
  var x=$(this).is(":checked");
  function myDisplayer(e) {
    // console.log(e);
    // console.log("errorvalue::" +e);
  }
  function alerting(count) {
    if(count>=5)
          alert("Congrats. 5 Tasks have been Successfully Completed ");
          // console.log("countvalue::" +count);
  }
  let myPromise = new Promise(function(resolve, reject) {
      // console.log("enter into promise checkboxvalue::" +x);
      if(x){       
        ++c;
      }
      else{
        --c;
      }
      var success = false;
      if (!success){
          resolve(c);
      }
      else{
          reject("Error occured");
      }
    
  });
  myPromise.then(
    function(value) {alerting(value);},
    function(error) {myDisplayer(error);}
  );

});
 
 
