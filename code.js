const randomeClickFunction = function () {
    const colors = { "red", "blue", "green", "orange", "pink", "purple", "white"};

    const randomIndex = Math.floor(Math.random() * colors.length);

    const randomeColor = colors[randomIndex];

    htmlBody.style.backgroundColor = randomeColor;

    console.log('The user clicked and set the color to' + randomeColor);


}

randomeClickFunction()