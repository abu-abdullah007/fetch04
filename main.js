const card = document.querySelector('.card')
const myName = card.querySelector('#myName')
const email = card.querySelector('#email')
const password = card.querySelector('#password')
const img_one = card.querySelector('#one')
const img_two = card.querySelector('#two')
const img_three = card.querySelector('#three')
const img_four = card.querySelector('#four')
const button = card.querySelector('#mainBtn')

async function getDataFromServer(){
    const server_response = await fetch('api.json')
    const receved_data = await server_response.json()

    myName.innerHTML = receved_data.name
    email.innerHTML = receved_data.email
    password.innerHTML = receved_data.password
    img_one.src = receved_data.image1
    img_two.src = receved_data.image2
    img_three.src = receved_data.image3
    img_four.src = receved_data.image4

    button.innerHTML = "Data Loaded";
    setTimeout(()=>{
        button.innerHTML = "Click To Get Data"
    },2000)
}

button.addEventListener("click",getDataFromServer)