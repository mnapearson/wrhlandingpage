const btn = document.getElementById("button");

document.getElementById("form").addEventListener("submit", function (event) {
  event.preventDefault();

  btn.value = "sending...";

  const serviceID = "default_service";
  const templateID = "template_chulcio";

  emailjs.sendForm(serviceID, templateID, this).then(
    () => {
      btn.value = "send";
      alert("Email Sent!");
    },
    (err) => {
      btn.value = "send";
      alert(JSON.stringify(err));
    }
  );
});

document
  .getElementById("range-calculator")
  .scrollIntoView({ behavior: "smooth" });
