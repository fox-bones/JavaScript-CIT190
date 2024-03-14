document.getElementById("submit").addEventListener("click",function(){
    localStorage.id = document.getElementById("studentId").value;
    localStorage.fname = document.getElementById("fname").value;
    localStorage.lname = document.getElementById("lname").value;
    localStorage.grade = document.getElementById("grade").value;
    window.location.assign("localConfirm.html");
});