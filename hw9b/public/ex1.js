



document.querySelector("form").addEventListener("submit", e => {
    // Cancel default behavior
    e.preventDefault();
    // Create a FormData object, passing the form as a parameter
    const formData = new FormData(e.target);
    // We are not sending this to a server, simply displaying it (no fetch())


    fetch("http://localhost:3000/ex1", {
    method: "POST",
    body: formData
    })
    .then(response => response.text())
    .then(result => {
        document.getElementById("output").textContent = result;
    })
    .catch(err => {
        console.error(err.message);
    });
});

