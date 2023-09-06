const camVideo = document.getElementById("picMeUp");
const pickUp = document.getElementById("pickUp");
const context = document.querySelector(".context");

navigator.mediaDevices.getUserMedia({ video: true })
.then(Stream => {
camVideo.srcObject = Stream;
})
    .catch(error => {
    alert(`The inquire has been rejected succefully : ${error}`)
    })

pickUp.addEventListener("click", () => {

const canvas = document.createElement("canvas");
const capImage = document.createElement("img");
capImage.alt = "Image cam"
//specify the the canvas width and height : 
canvas.width = 200
canvas.height = 200

    
//create the ctx :
const ctx = canvas.getContext("2d");
ctx.drawImage(camVideo, 0, 0, canvas.width, canvas.height);
const imageUrl = canvas.toDataURL("image/png");
capImage.src = imageUrl;
context.appendChild(capImage);
})
   