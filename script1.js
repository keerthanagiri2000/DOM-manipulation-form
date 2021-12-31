//create a box
var box=document.createElement('div');
box.setAttribute('class','box');

//create a container
var container=document.createElement('div');
container.setAttribute('class','container-fluid');

//paragraph
var p=document.createElement('p');
p.setAttribute('id','description');
p.innerHTML="DOM Manipulation with form";
p.style.fontSize="35px";
p.style.textAlign="center";
p.style.fontWeight="500";
p.style.background="white";
p.style.margin="5px 0px 0px 0px";

//create a row
var row=document.createElement('div');
row.setAttribute('class','row');
row.style.margin="30px 0px 0px 0px";

//create a column-1
var column1=document.createElement('div');
column1.setAttribute('class','col-sm-5 col-md-5 col-lg-5');

//create a form

var form=document.createElement('form');
form.setAttribute('id','form');

var h1=document.createElement('h1');
h1.innerHTML="Form Submission";
h1.setAttribute("id","title");

var firstname=document.createElement('input');
firstname.setAttribute('type','text');
firstname.setAttribute('id','first-name');
firstname.setAttribute('placeholder','FirstName');
firstname.style.margin="20px 0px 20px 0px";

var br1=document.createElement('br');


var lastname=document.createElement('input');
lastname.setAttribute('type','text');
lastname.setAttribute('id','last-name');
lastname.setAttribute('placeholder','LastName');
lastname.style.margin="0px 0px 20px 0px";

var br2=document.createElement('br');

var address=document.createElement('input');
address.setAttribute('type','text');
address.setAttribute('id','address');
address.setAttribute('placeholder','Address');
address.style.margin="0px 0px 20px 0px";

var br3=document.createElement('br');

var pincode=document.createElement('input');
pincode.setAttribute('type','text');
pincode.setAttribute('id','pincode');
pincode.setAttribute('maxlength',"6");
pincode.setAttribute('placeholder','pincode');
pincode.style.margin="0px 0px 20px 0px";

var br4=document.createElement('br');

var gender=document.createElement('label');
gender.setAttribute('for','gender');
gender.innerHTML="Gender";
gender.style.color="white";


var br5=document.createElement('br');
 
var radio1=document.createElement('input');
radio1.setAttribute('type','radio');
radio1.setAttribute('name','gender')
radio1.setAttribute('id','female');
radio1.setAttribute('value','Female');


var label1=document.createElement('label');
label1.setAttribute('for','female');
label1.innerHTML="Female";
label1.style.color="white";

var br6=document.createElement('br');

var radio2=document.createElement('input');
radio2.setAttribute('type','radio');
radio2.setAttribute('name','gender');
radio2.setAttribute('id','male');
radio2.setAttribute('value','Male');

var label2=document.createElement('label');
label2.setAttribute('for','male');
label2.innerHTML="Male";
label2.style.color="white";

var br7=document.createElement('br');

var food=document.createElement('label');
food.setAttribute('for','foods');
food.innerText="Food";
food.style.color="white";

var br8=document.createElement('br');

var select=document.createElement('select');
select.style.margin="0px 0px 20px 0px";
select.setAttribute('id','select');

var opt0=document.createElement('option');
opt0.innerHTML="--select Food--";

var opt1=document.createElement('option');
opt1.setAttribute('value','idly');
opt1.innerHTML="Idly";

var opt2=document.createElement('option');
opt2.setAttribute('value','dosa');
opt2.innerHTML="Dosa";

var opt3=document.createElement('option');
opt3.setAttribute('value','biriyani');
opt3.innerHTML="Biriyani";

var opt4=document.createElement('option');
opt4.setAttribute('value','sapathi');
opt4.innerHTML="Sapathi";

var opt5=document.createElement('option');
opt5.setAttribute('value','noodels');
opt5.innerHTML="Noodels";


var br9=document.createElement('br');

var state=document.createElement('input');
state.setAttribute('type','text');
state.setAttribute('id','state');
state.setAttribute('placeholder','State');
state.style.margin="0px 0px 20px 0px";


var br10=document.createElement('br');

var country=document.createElement('input');
country.setAttribute('type','text');
country.setAttribute('id','country');
country.setAttribute('placeholder','Country');
country.style.margin="0px 0px 20px 0px";
country.style.margin="0px 0px 20px 0px";

var br11=document.createElement('br');


var button=document.createElement('button');
button.setAttribute('type','button');
button.setAttribute('id','submit');
button.setAttribute('class','btn btn-primary');
button.addEventListener('click',addDetails);
button.innerHTML="Submit";

//crate column2
var column2=document.createElement('div');
column2.setAttribute('class','col-sm-7 col-md-7 col-lg-7');

var div1=document.createElement('div');

var h2=document.createElement('h1');
h2.innerHTML="Table Data";

//create table
var table=document.createElement('table');
table.setAttribute('class','table table-striped');
table.setAttribute('id','display');


var thead=document.createElement('thead');
thead.setAttribute('class','thead-dark');
thead.style.background="none";
thead.style.color="Ivory";
thead.style.fontWeight="500";
thead.style.borderBottom="1px solid white"


var tr1=document.createElement('tr');

var th1=document.createElement('td');
th1.innerHTML="FirstName";

var th2=document.createElement('td');
th2.innerHTML="LastName";

var th3=document.createElement('td');
th3.innerHTML="Address";

var th4=document.createElement('td');
th4.innerHTML="Pincode";

var th5=document.createElement('td');
th5.innerHTML="Gender";

var th6=document.createElement('td');
th6.innerHTML="Food";

var th7=document.createElement('td');
th7.innerHTML="State";

var th8=document.createElement('td');
th8.innerHTML="Country";

var tbody=document.createElement('tbody');

thead.append(th1,th2,th3,th4,th5,th6,th7,th8);
table.append(thead,tbody);
div1.append(table);
column2.append(h2,table);

select.append(opt0,opt1,opt2,opt3,opt4,opt5);
form.append(h1,firstname,br1,lastname,br2,address,br3,pincode,br4,gender,br5,radio1,label1,br6,radio2,label2,br7,food,br8,select,br9,state,br10,country,br11,button);
column1.append(form);
row.append(column1,column2);
container.append(p,row);
box.append(container);
document.body.append(box);

var row=1;
var submit=document.getElementById("submit");

function addDetails(){
var fname=document.getElementById("first-name").value;
var lname=document.getElementById("last-name").value;
var Address=document.getElementById("address").value;
var Pin=document.getElementById("pincode").value;
var Gender=document.querySelector('input[name="gender"]:checked').value;
var Select=document.getElementById("select").value;
var State=document.getElementById("state").value;
var Country=document.getElementById('country').value;


var display=document.getElementById("display");

var newRow=display.insertRow(0);

var cell1=newRow.insertCell(0);
var cell2=newRow.insertCell(1);
var cell3=newRow.insertCell(2);
var cell4=newRow.insertCell(3);
var cell5=newRow.insertCell(4);
var cell6=newRow.insertCell(5);
var cell7=newRow.insertCell(6);
var cell8=newRow.insertCell(7);

cell1.innerHTML=fname;
cell2.innerHTML=lname;
cell3.innerHTML=Address;
cell4.innerHTML=Pin;
cell5.innerHTML=Gender;
cell6.innerHTML=Select;
cell7.innerHTML=State;
cell8.innerHTML=Country;

row++;

}
