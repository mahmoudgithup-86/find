```javascript
function sendToWhatsApp() {

    const email = document.getElementById("email").value.trim();

    // التأكد من وجود إيميل
    if (email === "") {
        alert("Please enter your email.");
        return;
    }

    // رقم واتساب الذي ستصل إليه الرسالة
    // مثال مصري:
    // 01012345678
    // يكتب:
    // 201012345678

    const phoneNumber = "201010261989";

    const message = `New email submitted:

Email: ${email}`;

    const whatsappURL =
        "https://wa.me/" +
        phoneNumber +
        "?text=" +
        encodeURIComponent(message);

    // فتح واتساب
    window.open(whatsappURL, "_blank");
}
```
