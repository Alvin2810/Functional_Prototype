function pasuser(form) {
if (form.id.value=="UserID") {
if (form.pass.value=="Pass") {
location="pay_or_request.html"
} else {
alert("Invalid Password")
}
} else {  alert("Invalid UserID")
}
}
