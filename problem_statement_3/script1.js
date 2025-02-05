// Function to get cookie value by name
function getCookie(name) {
    let cookieArr = document.cookie.split(";");
    for (let i = 0; i < cookieArr.length; i++) {
        let cookiePair = cookieArr[i].split("=");
        if (name === cookiePair[0].trim()) {
            return decodeURIComponent(cookiePair[1]);
        }
    }
    return null;
}

// Display last visited page and timestamp
document.addEventListener("DOMContentLoaded", function() {
    let lastPage = getCookie("last_page");
    let lastVisit = getCookie("last_visit");

    if (lastPage && lastVisit) {
        document.getElementById("activityInfo").innerHTML = 
            `Last Visited Page: <strong>${lastPage}</strong><br>Last Visit Time: <strong>${lastVisit}</strong>`;
    } else {
        document.getElementById("activityInfo").innerHTML = "No activity recorded yet.";
    }
});