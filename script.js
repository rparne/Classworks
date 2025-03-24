const navDiv = document.getElementById("nav_div");
const contentFrame = document.getElementById("content_frame");

for (let key in works) {
    let projectLink = document.createElement("div");
    projectLink.innerText = works[key].title; 
    projectLink.className = "nav_item"; 

    projectLink.onclick = function () {
        contentFrame.src = works[key].url;
    };

    navDiv.appendChild(projectLink);
}