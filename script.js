
// 1. DIGITAL CLOCK USING DATE OBJECT

function displayClock() {
    let d = new Date();

    let hours = String(d.getHours()).padStart(2, "0");
    let minutes = String(d.getMinutes()).padStart(2, "0");
    let seconds = String(d.getSeconds()).padStart(2, "0");

    document.getElementById("clock").innerHTML =
        hours + ":" + minutes + ":" + seconds;
}

// Update clock every one second
displayClock();
setInterval(displayClock, 1000);


// 2. SETTIMEOUT FUNCTION

document.getElementById("startButton")
.addEventListener("click", function() {

    document.getElementById("welcome").innerHTML =
        "Please wait...";

    setTimeout(function() {
        document.getElementById("welcome").innerHTML =
            "Welcome to our Startup!";
    }, 1500);

});


// 3. SETINTERVAL AND CLEARINTERVAL

let colors = ["#dbeafe", "#fce7f3",
              "#dcfce7", "#fef3c7"];

let index = 0;
let timer = null;

document.getElementById("colorButton")
.addEventListener("click", function() {

    if (timer !== null) return;

    timer = setInterval(function() {

        document.body.style.backgroundColor =
            colors[index];

        index = (index + 1) % colors.length;

    }, 3000);

    document.getElementById("status").innerHTML =
        "Background colour changing.";

});

document.getElementById("stopButton")
.addEventListener("click", function() {

    clearInterval(timer);
    timer = null;

    document.body.style.backgroundColor = "#f4f7fb";

    document.getElementById("status").innerHTML =
        "Colour changing stopped.";

});


// 4. CLASS AND OBJECT

class Student {
    constructor(name, role) {
        this.name = name;
        this.role = role;
    }

    present() {
        return this.name + " - " + this.role;
    }
}


// Create objects

let student1 = new Student("Arun", "Founder");
let student2 = new Student("Priya", "Developer");
let student3 = new Student("Rahul", "Designer");


// 5. ARRAY OF OBJECTS

let students = [student1, student2, student3];

let team = document.getElementById("teamList");

students.forEach(function(student) {

    let card = document.createElement("div");

    card.className = "card";

    card.innerHTML =
        "<h3>" + student.name + "</h3>" +
        "<p>" + student.role + "</p>";

    team.appendChild(card);

});


// 6. CONTACT FORM EVENT

document.getElementById("contactForm")
.addEventListener("submit", function(event) {

    event.preventDefault();

    let name = document.getElementById("name").value;

    document.getElementById("message").innerHTML =
        "Thank you " + name + "! Form submitted.";

    this.reset();

});
