var config = {
    apiKey: "AIzaSyCWipTwCUZA0a4hWh1NiY1mMVekpISICd0",
    authDomain: "teachers-pet-b8172.firebaseapp.com",
    databaseURL: "https://teachers-pet-b8172.firebaseio.com",
    projectId: "teachers-pet-b8172",
    storageBucket: "teachers-pet-b8172.appspot.com",
    messagingSenderId: "1051680475462"
  };
  firebase.initializeApp(config);
  var database= firebase.database();
  var auth= firebase.auth();

// Authentication
function login(){
    const email= document.getElementById('txtEmail').value;
    const pass= document.getElementById('txtPassword').value;
    const auth= firebase.auth();
    const promise= auth.signInWithEmailAndPassword(email,pass);
    promise.catch (e=> alert(e.message));
    if(promise){
       document.getElementById("btnLogout").style.visibility='visible';
       document.getElementById("btnLogin").style.visibility='hidden';
       document.getElementById("btnSignUp").style.visibility='hidden';
  }
  };
function signup(){
  const email= document.getElementById('txtEmail').value;
  const pass= document.getElementById('txtPassword').value;
  const auth= firebase.auth();
  const promise= auth.createUserWithEmailAndPassword(email,pass);
  promise.catch (e=> alert(e.message));
    if(promise){
       document.getElementById("btnLogout").style.visibility='visible';
       document.getElementById("btnLogin").style.visibility='hidden';
       document.getElementById("btnSignUp").style.visibility='hidden';
  }
};
function logout(){
firebase.auth().signOut();
};
firebase.auth().onAuthStateChanged(firebaseUser=>{
  if (firebaseUser){
    document.getElementById("btnLogout").style.visibility='hidden';
  }
  else {
    document.getElementById("btnLogout").style.visibility='visible';
    document.getElementById("txtEmail").value = "";
    document.getElementById("txtPassword").value = "";
    document.getElementById("mc-section").style.visibility='hidden';
    document.getElementById("fr-section").style.visibility='hidden';
    document.getElementById("studentgrade").style.visibility='hidden';
    document.getElementById("result").style.visibility='hidden';
    document.getElementById("calcone").style.visibility='hidden';
    document.getElementById("calctwo").style.visibility='hidden';
    document.getElementById("calcthree").style.visibility='hidden';
  }
  });

// User Choice Dropdown
function drop() {
    document.getElementById("myDropdown").classList.toggle("show");
}
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

// Pick Format Output
function multiple(){
  document.getElementById("mc-section").style.visibility='visible';
  document.getElementById("fr-section").style.visibility='hidden';
  document.getElementById("studentgrade").style.visibility='visible';
  document.getElementById("result").style.visibility='visible';
  document.getElementById("calcone").style.visibility='visible';
  document.getElementById("calctwo").style.visibility='hidden';
  document.getElementById("calcthree").style.visibility='hidden';
}
function free(){
  document.getElementById("fr-section").style.visibility='visible';
  document.getElementById("mc-section").style.visibility='hidden';
  document.getElementById("studentgrade").style.visibility='visible';
  document.getElementById("result").style.visibility='visible';
  document.getElementById("calctwo").style.visibility='visible';
  document.getElementById("calcone").style.visibility='hidden';
  document.getElementById("calcthree").style.visibility='hidden';
}
function both(){
  document.getElementById("mc-section").style.visibility='visible';
  document.getElementById("fr-section").style.visibility='visible';
  document.getElementById("studentgrade").style.visibility='visible';
  document.getElementById("result").style.visibility='visible';
  document.getElementById("calctwo").style.visibility='hidden';
  document.getElementById("calcone").style.visibility='hidden';
  document.getElementById("calcthree").style.visibility='visible';
}
// Math for Calculations

function calcmult(){
  var correct= txtcorrect.value;
  var total= txttotal.value;
  var res= correct/total; 
  var result= res*100;
  document.getElementById("result").innerHTML = result;

var data= {
  mc: document.getElementById("txttotal").value,
  fr: document.getElementById("txtfreetotal").value
}
console.log(data);
var ref= database.ref ('user');
ref.push(data);
}
function calcfree(){
  var correct= txtfrqcorrect.value;
  var total= txtfreetotal.value;
  var res= correct/total; 
  var result= res*100;
  document.getElementById("result").innerHTML = result;

var data= {
  mc: document.getElementById("txttotal").value,
  fr: document.getElementById("txtfreetotal").value
}
console.log(data);
var ref= database.ref ('user');
ref.push(data);
}
function calcboth(){
  var correctmult= txtcorrect.value;
  var totalmult= txttotal.value;
  var correctfree= txtfrqcorrect.value;
  var totalfree= txtfreetotal.value;
  var add1= +correctmult + +correctfree;
  var add2= +totalmult+ +totalfree; 
  var divide= add1/add2;
  var result= divide*100;
  document.getElementById("result").innerHTML = result;

  var data= {
  mc: document.getElementById("txttotal").value,
  fr: document.getElementById("txtfreetotal").value
}
console.log(data);
var ref= database.ref ('user');
ref.push(data);
}



