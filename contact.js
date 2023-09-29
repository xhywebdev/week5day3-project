var contactMethod;
var contactInput;
var dropdown;

contactMethod = document.getElementById('contactMethod');
contactInput = document.getElementById('contactInput');

function showContactInput() {
    console.log(contactMethod.value)
    if (contactMethod.value == 'email') {
        contactInput.innerHTML = `
            <label>Enter your email</label>
            <input type="text" name="email">
        `;
    } else if (contactMethod.value == 'phone') {
        contactInput.innerHTML = `
            <label>Enter your phone number</label>
            <input type="text" name="phone">
        `;
    } else {
        contactInput.innerHTML = ``;
    }
}

contactMethod.addEventListener("change", showContactInput);