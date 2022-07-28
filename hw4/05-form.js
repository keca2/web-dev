let form = document.querySelector('form');

form.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
  event.preventDefault();

  var username = document.getElementById('username').value;
  if(!username){
    console.warn('You must enter data to submit this form!')
  } else {
    var email = document.getElementById('email').value;

    var newsletter;
    if(document.getElementById('Yes').checked){
      newsletter = 'Yes'
    } else if (document.getElementById('No').checked){
      newsletter = 'No'
    } else {
      newsletter = 'No submission'
    }

    var date = (document.getElementById('date').value 
                ? document.getElementById('date').value : "No submission")

    console.log("========= Form Submission =========");
    console.log("   Username: %s", username);
    console.log("   Email: %s", email);
    console.log("   Newsletter: %s", newsletter);
    console.log("   Date: %s", date);
  }
}