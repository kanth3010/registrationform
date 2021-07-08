let info_list = []
let current_info = {}
let sucess=0;
$('#exampleModalCenter').modal({ show: false})
let radio1 = document.getElementById('male-id');
let radio2 = document.getElementById('female-id');

function radio_check() {
  if (radio1.checked == true)
    return radio1.value;
  else
    return radio2.value;
}

function modal_write(){
  document.getElementById("name-col").innerHTML = current_info.name;
  document.getElementById("dob-col").innerHTML = current_info.dob;
  document.getElementById("sex-col").innerHTML = current_info.sex;
  document.getElementById("email-col").innerHTML = current_info.email_id;
  document.getElementById("address-col").innerHTML = current_info.address;
  document.getElementById("school-col").innerHTML = current_info.school;
  document.getElementById("department-col").innerHTML = current_info.department;
  document.getElementById("course-col").innerHTML = current_info.course;
  document.getElementById("number-col").innerHTML = current_info.number;
  document.getElementById("password-col").innerHTML = current_info.password;
  $('#exampleModalCenter').modal('show');
}

function form_submit() {
  let given_email_id = document.getElementById('email').value;
  let flag=0;
  if (document.getElementById("name").value==""){
    document.getElementById("name").style.borderColor = "red";
    document.getElementById("name-check").style.display="inline";
    document.getElementById("name-check").style.backgroundColor = "red";
    document.getElementById("name-check").style.color = "black";
  }
  else
  sucess+=1;
    if(document.getElementById('male-id').checked) {
    flag+=1;
  }else if(document.getElementById('female-id').checked) {
    flag+=1;
  }
  if(flag==0){
    // document.getElementById("name").style.borderColor = "red";
    document.getElementById("gender-check").style.display="inline";
    document.getElementById("gender-check").style.backgroundColor = "red";
    document.getElementById("name-check").style.color = "black";}
  if(flag==1)
  sucess+=1;

  if(document.getElementById("school").value=="Select.."){
    document.getElementById("school").style.borderColor = "red";
    document.getElementById("school-check").style.display="inline";
    document.getElementById("school-check").style.backgroundColor = "red";
    document.getElementById("school-check").style.color = "black";}
  else
    sucess+=1;
  if(document.getElementById("department").value=="Select.."){
    document.getElementById("department").style.borderColor = "red";
    document.getElementById("dept-check").style.display="inline";
    document.getElementById("dept-check").style.backgroundColor = "red";
    document.getElementById("dept-check").style.color = "black";}
  else
    sucess+=1;
  let date=document.getElementById("dob").value;
  if(!date){
      document.getElementById("dob").style.borderColor = "red";
      document.getElementById("dob-check").style.display="inline";
      document.getElementById("dob-check").style.backgroundColor = "red";
      document.getElementById("dob-check").style.color = "black";}
  else
  sucess+=1;

  if(document.getElementById("course").value=="Select.."){
    document.getElementById("course").style.borderColor = "red";
    document.getElementById("course-check").style.display="inline";
    document.getElementById("course-check").style.backgroundColor = "red";
    document.getElementById("course-check").style.color = "black";}
  else
    sucess+=1;

    if(document.getElementById("address").value==""){
      document.getElementById("address").style.borderColor = "red";
      document.getElementById("addr-check").style.display="inline";
      document.getElementById("addr-check").style.backgroundColor = "red";
      document.getElementById("addr-check").style.color = "black";}
    else
      sucess+=1;

 if(document.getElementById("passog").value==""){
    document.getElementById("passog").style.borderColor = "red";
    document.getElementById("passog-check").style.display="inline";
    document.getElementById("passog-check").style.backgroundColor = "red";
    document.getElementById("passog-check").style.color = "black";}

else if(document.getElementById("passog").value!==document.getElementById("passconf").value){
    document.getElementById("passconf").style.borderColor = "red";
    document.getElementById("passconf-check").style.display="inline";
    document.getElementById("passconf-check").style.backgroundColor = "red";
    document.getElementById("passconf-check").style.color = "black";}
else
  sucess+=1;

  if(!given_email_id){
    document.getElementById("email").style.borderColor = "red";
    document.getElementById("email-check").style.display="inline";
    document.getElementById("email-check").style.backgroundColor = "red";
    document.getElementById("email-check").style.color = "black";
    }
  else if(given_email_id.includes("@") == true){
    sucess+=1;
    let given_number = document.getElementById('number').value;
    if (!isNaN(given_number) && given_number.length >= 10){
        if(sucess==9){
      let given_name = document.getElementById('name').value;
      let given_dob = document.getElementById('dob').value;
      let given_sex = radio_check();
      let given_email_id = document.getElementById('email').value;
      let given_address = document.getElementById('address').value;
      let given_school = document.getElementById('school').value;
      let given_department = document.getElementById('department').value;
      let given_course = document.getElementById('course').value;
      let given_pass=document.getElementById('passog').value;

      let form_details = {
        name: given_name,
        dob: given_dob,
        sex: given_sex,
        email_id: given_email_id,
        address: given_address,
        school: given_school,
        department: given_department,
        course: given_course,
        number: given_number,
        password:given_pass
      };

      current_info = form_details;
      modal_write();}
    }
    else{
      document.getElementById("email").style.borderColor = "red";
      document.getElementById("email-check").style.display="inline";
      document.getElementById("email-check").style.backgroundColor = "red";
      document.getElementById("email-check").style.color = "black";
    }
  }
  else{
    document.getElementById("number").style.borderColor = "red";
    document.getElementById("number-check").style.display="inline";
    document.getElementById("number-check").style.backgroundColor = "red";
    document.getElementById("number-check").style.color = "black";

  }
}

function form_reset(){
  document.getElementById('FORM').reset();
}

function save_changes(){
  alert("Saving...")
  $('#FORM').get(0).reset();
  $('#exampleModalCenter').modal('hide');
  // info_list.push(current_infos);
}
