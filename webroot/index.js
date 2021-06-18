let activeSkyBox = "games";

function switchSkyBox() {
    activeSkyBox = this.dataset.box;
    document.querySelector(".games").classList[activeSkyBox === "games" ? "add" : "remove"]("selected");
    document.querySelector(".main").classList[activeSkyBox === "main" ? "add" : "remove"]("selected");
}

function skyButton(thisButton) {
    console.log("CLICKED: ", thisButton);
    $.post('/control', { command: thisButton, box: activeSkyBox});
}



document.addEventListener("DOMContentLoaded", () => {
    const channels = document.getElementById("channels");
    const advanced = document.getElementById("advanced");
    const sections = document.getElementById("sections");

    document.querySelector(".main").addEventListener("click", switchSkyBox);
    document.querySelector(".games").addEventListener("click", switchSkyBox);
    document.querySelector(".remote").addEventListener("click", () => {
        if (channels.style.display === "") {
            channels.style.display = "none";
            advanced.style.display = "";
        }
        else {
            channels.style.display = "";
            advanced.style.display = "none";
        }
    });

    const buttons = document.querySelectorAll("div[data-channel");

    buttons.forEach((button) => {
        button.addEventListener("click", () => {
            skyButton(button.dataset.channel);
        });
    });


});