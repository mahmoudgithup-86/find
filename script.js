```javascript
function sendToWhatsApp() {

    const email = document.getElementById("email").value.trim();

    if (email === "") {

        alert("Please enter your email.");

        return;
    }


    if (!email.includes("@") || !email.includes(".")) {

        alert("Please enter a valid email.");

        return;
    }


    // ضع رقم واتساب هنا
    // مثال:
    // 01012345678
    // يصبح:
    // 201012345678

    const phoneNumber = "201012345678";


    const message =
        "New email submitted:\n\n" +
        "Email: " +
        email;


    const whatsappURL =
        "https://wa.me/" +
        phoneNumber +
        "?text=" +
        encodeURIComponent(message);


    window.location.href = whatsappURL;
}
```
