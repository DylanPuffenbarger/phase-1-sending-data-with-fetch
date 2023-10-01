// Add your code here

const displayText = (text) => {
    document.body.innerHTML += `\n<p>${text}</p>`
}

function submitData(userName, userEmail){
    return fetch(
        `http://localhost:3000/users`,
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
            },
            body: JSON.stringify({
                'name': userName,
                'email': userEmail
            })
        }
    )
    .then((resp) => resp.json())
    .then((json) => displayText(json.id))
    .catch((error) => displayText(error.message));
}
