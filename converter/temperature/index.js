const cInput = document.getElementById("celsius-input");
const fInput = document.getElementById("fahrenheit-input");
const info = document.getElementsByTagName("h2")[1];
const title = document.getElementsByTagName("h1")[0];

const convertToFahrenheit = celsius => {
    const result = celsius * 9 / 5 + 32;
    return parseFloat(result.toFixed(3));
};

const convertToCelsius = fahrenheit => {
    const result = (fahrenheit - 32) * 5 / 9;
    return parseFloat(result.toFixed(3));
};

// eslint-disable-next-line no-unused-vars
const buttonClick = button => {
    switch (button) {
    case 0: {
        cInput.value = 15;
        fInput.value = 59;
        info.textContent = "The average temperature on\nEarth is about 15°C / 59°F";
        break;
    }
    case 1: {
        cInput.value = -65;
        fInput.value = -85;
        info.textContent = "The average temperature on\nMars is about -65°C / -85°F";
        break;
    }
    case 2: {
        cInput.value = 37;
        fInput.value = 98.6;
        info.textContent = "The average temperature of the\nhuman body is 37°C / 98.6°F";
        break;
    }
    case 3: {
        cInput.value = 100;
        fInput.value = 212;
        info.textContent = "The temperature recognized as the\nboiling point of water is 100°C / 212°F";
        break;
    }
    case 4: {
        cInput.value = 0;
        fInput.value = 32;
        info.textContent = "The temperature recognized as the\nfreezing point of water is 0°C / 32°F";
    }
    }
};

cInput.addEventListener("input", () => {
    info.textContent = "";
    if (cInput.value) {
        fInput.value = convertToFahrenheit(cInput.value);
    } else {
        fInput.value = "";
    }
});

fInput.addEventListener("input", () => {
    info.textContent = "";
    if (fInput.value) {
        cInput.value = convertToCelsius(fInput.value);
    } else {
        cInput.value = "";
    }
});

if (localStorage.getItem("theme") === "dark") {
    document.body.style.backgroundColor = "#000";
    document.body.style.color = "#fff";
    title.style.textShadow = ".1em .1em 0 #222";
}