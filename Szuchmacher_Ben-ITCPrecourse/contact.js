function sConsole(event) {
   event.preventDefault();
   var firstname = document.getElementById("firstname");
   var lastname = document.getElementById("lastname");
   var email = document.getElementById("email");
   var subject = document.getElementById("subject");
   var message = document.getElementById("message");
   console.log(firstname.value)
   console.log(lastname.value)
   console.log(email.value);
   console.log(subject.value);
   console.log(message.value);
 }