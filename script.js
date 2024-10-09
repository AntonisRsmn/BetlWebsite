// SideBar
function showSidebar () {
    const sidebar = document.querySelector(".sidebar")
    sidebar.style.display = "flex"
}

function hideSidebar () {
    const sidebar = document.querySelector(".sidebar")
    sidebar.style.display = "none"
}   

// DarkMode
let darkmode = localStorage.getItem("darkmode")
const themeSwitch = document.getElementById("theme-switch")

const enableDarkmode = () => {
    document.body.classList.add("darkmode")
    localStorage.setItem("darkmode", "active")
    document.getElementById("logo").src="../Imgs/logo-white.png";
}

const disableDarkmode = () => {
    document.body.classList.remove("darkmode")
    localStorage.setItem("darkmode", null)
    document.getElementById("logo").src="../Imgs/logo-blue.png";
}

if (darkmode ==="active") enableDarkmode()
    else disableDarkmode()

themeSwitch.addEventListener("click", () => {
    darkmode = localStorage.getItem("darkmode")

    darkmode !== "active" ? enableDarkmode() : disableDarkmode()
    darkmode === "active" ? document.getElementById("logo").src="../Imgs/logo-blue.png" : document.getElementById("logo").src="../Imgs/logo-white.png";
})