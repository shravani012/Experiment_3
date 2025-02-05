document.getElementById("changeText").addEventListener("click", function() {
    document.getElementById("title").innerHTML = "Text Changed!";
    $(this).text("Text has been changed!");  // jQuery for button text change
});

document.getElementById("changeStyle").addEventListener("click", function() {
    document.getElementById("title").style.color = "#cf524e";  // Pastel coral color
});

document.getElementById("changeImage").addEventListener("click", function() {
    document.getElementById("image").src = "scene2.webp";  // Update the image to scene2.webp
    document.getElementById("image").alt = "Scene 2";  // Change alt text
});

document.getElementById("addText").addEventListener("click", function() {
    let newNode = document.createElement("p");
    newNode.textContent = "Newly added pastel paragraph!";
    document.body.appendChild(newNode);
    newNode.style.color = "#3eb489";  // Pastel mint color for the new text
});

document.getElementById("deleteNode").addEventListener("click", function() {
    let paragraphs = document.getElementsByTagName("p");
    if (paragraphs.length > 0) {
        paragraphs[paragraphs.length - 1].remove();
    }
});

$(document).ready(function() {
    // Form submission handling
    $("#submitBtn").click(function(event) {
        event.preventDefault();
        const name = $("#name").val();
        if (name) {
            alert("Submitted Name: " + name);
        } else {
            alert("Please enter your name.");
        }
    });

    // Button text update with jQuery
    $("#changeText").click(function() {
        $(this).text("Text Changed!");
    });

    // Change background color dynamically when a button is clicked
    $("body").css("background-color", "#f4f7f6");  // Soft pastel background color

    // Add smooth color transition on hover for buttons
    $("button").hover(function() {
        $(this).css("background-color", "#e0f7fa");  // Light pastel cyan on hover
    }, function() {
        $(this).css("background-color", function() {
            return $(this).attr('id') === 'changeText' ? '#fbc9d4' : 
                   $(this).attr('id') === 'changeStyle' ? '#f7d5d2' : 
                   $(this).attr('id') === 'changeImage' ? '#cfe2ff' : 
                   $(this).attr('id') === 'addText' ? '#f0e3f0' : 
                   '#f8c3cd';  // Default pastel colors on hover out
        });
    });
});
