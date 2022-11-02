let randomImage = [0, 0, 0]
const id_image = ["lost0", "lost1", "lost2"]

let randomNumber = Math.floor(Math.random() * 3);

randomImage[randomNumber] = 1;

console.log(randomNumber);
for (let i = 0; i < randomImage.length; i++) {
    if (randomImage[i] === 1) {
        document.getElementById(id_image[i]).style.visibility = "visible";
    }
    else {
        document.getElementById(id_image[i]).style.visibility = "collapse";
    }
}
