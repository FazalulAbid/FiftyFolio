function validateForm() {
  let name = document.forms["contact-form"]["inp-name"].value.trim();
  let email = document.forms["contact-form"]["inp-email"].value.trim();
  let phone = document.forms["contact-form"]["inp-phone"].value.trim();
  let subject = document.forms["contact-form"]["inp-subject"].value.trim();
  let comments = document.forms["contact-form"]["inp-comments"].value.trim();

  if (!isNotEmpty(name) && !isNotEmpty(email) && phoneValidaton(phone) && !isNotEmpty(subject)) {
    // var submitbutton = document.getElementById('submit-button');
    // submitbutton.click();
    sendmail();
  } else {
    alert("Validation Failed");
  }
}

function isNotEmpty(text) {
  if (text == "") {
    return true;
  }
}

function phoneValidaton(inputtxt) {
  var phoneNum = inputtxt.replace(/[^\d]/g, "");
  if (phoneNum.length > 6 && phoneNum.length < 11) {
    return true;
  } else {
    return false;
  }
}

function sendmail() {
  let name = document.forms["contact-form"]["inp-name"].value.trim();
  let email = document.forms["contact-form"]["inp-email"].value.trim();
  let phone = document.forms["contact-form"]["inp-phone"].value.trim();
  let subject = document.forms["contact-form"]["inp-subject"].value.trim();
  let comments = document.forms["contact-form"]["inp-comments"].value.trim();

  var templateParams = {
    from_name: name,
    email_id: email,
    phone: phone,
    message: comments,
    subject: subject,
  };

  emailjs.send("service_dcaeb1c", "template_sg4pqbq", templateParams).then(
    function (response) {
      console.log("SUCCESS!", response.status, response.text);
      location.reload(true);
    },
    function (error) {
      console.log("FAILED...", error);
    }
  );
}
