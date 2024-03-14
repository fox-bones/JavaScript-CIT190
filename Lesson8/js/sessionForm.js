document.getElementById("submit").addEventListener("click",function(){
    sessionStorage.id = document.getElementById("studentId").value;
    sessionStorage.fname = document.getElementById("fname").value;
    sessionStorage.lname = document.getElementById("lname").value;
    sessionStorage.grade = document.getElementById("grade").value;
    window.location.assign("sessionConfirm.html");
});