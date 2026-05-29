
const statusDiv = document.getElementById("status")




const button = document.getElementById("leker")
button.addEventListener("click", () => 
{
    statusDiv.innerText = "töltő"
    fetch("http://127.0.0.1:63013/fruits", {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        }
    }).then((data) => {
       return data.json()
      
    }).then((value) => {
        
        statusDiv.innerText = "kész"
        for(const fruit of value)
        {
            const div = document.createElement("div")
            div.innerText = `${fruit.id} - ${fruit.name} - ${fruit.price}`
            document.body.appendChild(div)
        }
    })
})
