const form = document.querySelector('form');

form.addEventListener("submit", (e) =>{
    e.preventDefault();
    Swal.fire({
        title: "Thank you for your submission!",
        text: "We will get back to you as soon as possible.",
        icon: "success"
      });
});
