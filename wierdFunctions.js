function hauntButtons() {
  items = ["... wOooO0oo ...", "WhY... yOu DId tHiS tOo ME?", "...", "I aM sTiLL HeRE...", "...ReMEMbeR MEeeEe...?", "...💀..."]

  document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('click', () => {
      shake()
      notify("💀", items[Math.floor(Math.random() * items.length)], "now")
    });
  });
}

function shake() {
  document.body.classList.add('shake');
  setTimeout(function() {
    document.body.classList.remove('shake');
  }, 500);
}


let clicks = 0
var button = document.getElementById("hmmButton")

function hmm() {
  switch (clicks) {
    case 1:
      notify("The Isaac Company", "Hmm, that didn't seem to do anything...", "Now")
      break;
    case 2:
      button.innerHTML = "Hey, that hurts"
      break;
    case 3:
      button.innerHTML = "plz stop clicking"
      break;
    case 4:
      button.innerHTML = "nO0oO0o... y me?..."
      break;
    case 5:
      button.innerHTML = "plz plz plz stop"
      break;
    case 6:
      button.innerHTML = "I... I feel... weak..."
      break;
    case 7:
      notify("The Isaac Company", "Wow, you are so cruel. You're literally killing that button!", "Now")
      button.innerHTML = "........"
      break;
    case 8:
      button.innerHTML = "...."
      break;
    case 9:
      button.innerHTML = ".."
      break;
    case 10:
      button.innerHTML = "...stop.... ...please..."
      break;
    case 11:
      button.innerHTML = "."
      break;
    case 12:
      button.innerHTML = "💀"
      break;
    case 13:
      document.getElementById("hmmmmm").remove()
      shake()
      notify("The Isaac Company", "Umm, I think you killed it. WHAT WERE YOU THINKING?!?! It will probably come back to haunt you!", "Now")
    default:
      hauntButtons();
  }
}

button.addEventListener("click", (event) => {
  clicks++;
  hmm()
})
button.addEventListener("dblclick", (event) => {
  clicks++;
  hmm()
})


var darkmode = document.getElementById("dark");
var lightmode = document.getElementById("light");

var navbar = document.getElementById("navbar");

darkmode.addEventListener("change", (event) => {
  if (darkmode.checked) {
    document.getElementById("bootswatchTheme").href = "https://bootswatch.com/5/darkly/bootstrap.min.css"
    navbar.setAttribute("data-bs-theme", "dark")

    navbar.classList.replace("bg-light", "bg-dark")
  }
})
lightmode.addEventListener("change", (event) => {
  if (lightmode.checked) {
    document.getElementById("bootswatchTheme").href = "https://bootswatch.com/5/flatly/bootstrap.min.css"
    navbar.setAttribute("data-bs-theme", "light")
    navbar.classList.replace("bg-dark", "bg-light")
  }
})

async function createCertificate(commonName, organization, email, publickey, message) {
  let today = new Date().toISOString().slice(0, 10)

  let expires = new Date();
  expires.setFullYear(expires.getFullYear() + 2);
  expires = expires.toISOString().slice(0, 10);

  let data = {
    "Issued To": {
      "CN": commonName,
      "O": organization,
      "Email": email
    },
    "Issued By": {
      "CN": "theisaaccompany.ca",
      "O": "The Isaac Company",
      "Email": "isaac@theisaaccompany.ca"
    },
    "Data": {
      "Created On": today,
      "Expires On": expires,
      "Public Key": publickey,
      "Message": message
    }
  }

  let result


  await fetch('https://seasoned-veiled-anchovy.glitch.me/secret', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ certInfo: data })
  })
    .then(response => response.text()) // Parse the response as text
    .then(data => {
      result = data
    })
    .catch((error) => {
      console.error("Error: ", error)
    });

  return JSON.parse(result)["finalCert"]
}

async function validCertificate(cert) {
  let result
  await fetch('https://seasoned-veiled-anchovy.glitch.me/valid', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ certificate: cert })
  })
    .then(response => response.text()) // Parse the response as text
    .then(data => {
      result = data
    })
    .catch((error) => {
      console.error('Error:', error);
    });
  return JSON.parse(result)
}

function download(url, filename) {
  fetch(url)
    .then(response => response.blob())
    .then(blob => {
      const link = document.createElement("a");
      link.href = URL.createObjectURL(blob);
      link.download = filename;
      link.click();
    })
    .catch(console.error);
}


let createIDC = document.getElementById("createIDC")
let verifyIDC = document.getElementById("verifyIDC")

createIDC.addEventListener("submit", async (event) => {
  event.preventDefault()
  let form = event.target;

  let commonName = form["commonName"].value
  let organization = form["organization"].value
  let email = form["email"].value
  let publickey = form["publicKey"].value
  let message = form["message"].value

  let cert = await createCertificate(commonName, organization, email, publickey, message);

  if ("Error" in cert) {
    notify("Isaac Digital Certificate", "There was an error creating your certificate. Check the console.", "Now")
  }
  else {
    download("data:text/html," + JSON.stringify(cert), "DigitalCertificate.idc")
    notify("Isaac Digital Certificate", "Your certificate was created successfully!", "Now")
  }



  createIDC.reset()
})

verifyIDC.addEventListener("submit", async (event) => {
  event.preventDefault()
  let form = event.target;

  var file = new FileReader();
  file.onload = async () => {
    data = file.result
    let valid = await validCertificate(JSON.parse(data));
    verifyIDC.reset()

    console.log(valid)

    if (valid) {
      notify("Isaac Digital Certificate", "Woo hoo! The hashes in your certificate match, which means it has not been altered!", "Now")
    } else {
      notify("Isaac Digital Certificate", "Uh oh! Something in your certificate was changed! Do not trust any information in it.", "Now")
    }

  }
  file.readAsText(form["certFile"].files[0]);
})