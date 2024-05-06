const form = document.querySelector('form');
const fullName = document.getElementById('name');
const email = document.getElementById('email');
const phone = document.getElementById('phone');
const subject = document.getElementById('subject');
const message = document.getElementById('message');


form.addEventListener("submit", (e) =>{
    e.preventDefault();
    checkInputs();
    checkEmail();
    if (checkInputs()) {
      Swal.fire({
          title: "Would you like to submit?",
          text: "You may rescind your submission afterwards.",
          icon: "question",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Yes, I would like to submit!"
      }).then((result) => {
          if (result.isConfirmed) {
              Swal.fire({
                  title: "Success!",
                  text: "Your submissionID is " + submissionID,
                  icon: "success"
              });
          }
      });
  } else {
      // If any input is empty, display an error message or handle it accordingly
      // For example:
      Swal.fire({
          title: "Error!",
          text: "Please fill in all the fields.",
          icon: "error"
      });
  }
});

function generateSubmissionID() {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let submissionID = '';
    for (let i = 0; i < 8; i++) {
      submissionID += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return submissionID;
  }
  

  submissionID = generateSubmissionID();
console.log(submissionID);

function checkInputs(){
  const items = document.querySelectorAll(".item");

  for (const item of items) {
    if (item.value == ""){
      item.classList.add("error");
      item.parentElement.classList.add("error");
    }

    if (items[1].value != ''){
      checkEmail();
    }

    items[1].addEventListener("keyup", () =>{
      checkEmail();
    });

    item.addEventListener("keyup", ()=>{
      if (item.value != ""){
        item.classList.remove("error");
        item.parentElement.classList.remove("error");
      }
      else {
        item.classList.add("error");
        item.parentElement.classList.add("error");
      }
    });
  }
}

function checkEmail(){
  const EmailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!email.value.match(EmailRegex)){
    email.classList.add("error");
    email.parentElement.classList.add("error");
    }
    else {
      email.classList.remove("error");
      email.parentElement.classList.remove("error");
    }


}
  
