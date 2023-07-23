function createAlert(prompt) {
    if (!confirm(`Sure to ${prompt} details?`)) return false;
    return true;
}

function submitData() {
    if (createAlert("submit")) {
        const form_name = document.querySelector("[data-name]").value;
        const form_passw = document.querySelector("[data-pass]").value;

        if (form_name !== "" && form_passw !== "") {
            alert("Thank You for the data fillup!");
            return true;
        }
        alert("Name and Password are required fields");
    }

    return false;
}