const line = document.getElementById("browser-info");

line.innerText = "You are using ";
line.innerText += navigator.appName;
line.innerText += " version ";
line.innerText += navigator.appVersion;