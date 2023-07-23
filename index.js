// index.js

// Function to ask for permission before scanning system
function scanSystem() {
var confirmed = confirm("Are you sure you want to scan your entire system? This may take a while.");
if (confirmed) {
// Code to scan system goes here
alert("Scanning system... Please wait.");
}
}

// Function to display developer details
function showDeveloperDetails() {
var developer = {
name: "Nielesh Kumar Maddirevula",
email: "nieleshkumar2345@gmail.com ",
phone: "+91 77807 32596"
};
alert("Developer Name: " + developer.name + "\nEmail: " + developer.email + "\nPhone: " + developer.phone);
}