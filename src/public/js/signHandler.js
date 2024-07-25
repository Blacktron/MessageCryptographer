const signButton = document.getElementById('sign');
signButton.addEventListener('click', () => {
    const message = document.getElementById('message').value;
    fetch(`${location.href}v1/sign`, {
        method: 'POST',
        body: JSON.stringify({
            message: message
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then((response) => response.json())
    .then((data) => {
        document.getElementById('signature').innerText = data.result;
    })
});