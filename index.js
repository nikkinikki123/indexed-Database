


var career;
var per;
var yop;
var sscValue;
var sscmks;
var sscmks1;
var sscradio;

var intermediate;
var intermks;
var intermks1;
var interper;
var interyops;
var interradio;

var btech;
var btechmks;
var btechmks1;
var btechper;
var btechyops;
var btechradio;

function getDetails(){
  career=document.getElementById('career').value;
  sscValue=document.getElementById('sscValue').value;
  sscmks=document.getElementById('sscmks');
  sscmks1=document.getElementById('sscmks1');
  per=document.getElementById('sscpercent').value;
  yop=document.getElementById('sscyop').value;
  console.log(sscValue);
  if(sscmks.checked){
    sscradio=sscmks.value;
    console.log(sscradio);
  }
  else{
    sscradio=sscmks1.value;
    console.log(sscradio);
  }
  console.log(career);
  console.log(per);
  console.log(yop);


  intermediate=document.getElementById('interm').value;
  intermks=document.getElementById('intermks');
  intermks1=document.getElementById('intermks1');
  interper=document.getElementById('per').value;
  interyops=document.getElementById('interyops').value;
  console.log(intermediate);
  if(intermks.checked){
    interradio=intermks.value;
    console.log(interradio);
  }
  else{
    interradio=intermks1.value;
    console.log(interradio);
  }
  console.log(interper);
  console.log(interyops);


  btech=document.getElementById('bcse').value;
  btechmks=document.getElementById('btechmks');
  btechmks1=document.getElementById('btechmks1');
  btechper=document.getElementById('btechpercent').value;
  btechyops=document.getElementById('btechyop').value;
  console.log(btech);
  if(btechmks.checked){
    btechradio=btechmks.value;
    console.log(btechradio);
  }
  else{
    btechradio=btechmks1.value;
    console.log(btechradio);
  }
  console.log(btechper);
  console.log(btechyops);
}















//   if(!window.indexedDB){
//     console.log("indexed DB is not working...!");
//   }
//   var request=window.indexedDB.open("svitDB",1);
//   request.onerror=(e)=>{
//     console.log(e);
//   }
//   request.onupgradeneeded=e=>{
//     var dbname=e.target.result;
//     dbname.createObjectStore("cse",{keyPath:"name"});
//      console.log("upgraded....!");
//   }
//   request.onsuccess=e=>{
//     var dbname=e.target.result;
//     store=dbname.transaction("cse","readwrite").objectStore("cse");
//     store.put(
//       {
//       "name":name,
//        "roll":rollno,
//        "email":email,
//        "adress":adress,
//        "skills":skills
//        }
//     );
//     console.log("success...!");
//   }
//
// }
