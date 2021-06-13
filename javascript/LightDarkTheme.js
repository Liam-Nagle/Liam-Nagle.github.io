// Select the button
const btn = document.getElementById("style-toggle");
// Select the stylesheet <link>
const theme = document.getElementById("theme");

// Listen for a click on the button
btn.addEventListener("click", function() {
    // If the current URL contains "ligh-theme.css"
    if (theme.getAttribute("href") == "MyProfileStyle-light.css") {
        // ... then switch it to "dark-theme.css"
        theme.href = "MyProfileStyle-dark.css";
        document.getElementById("theme-label").textContent = "Dark";
        // Otherwise...
    } else {
        // ... switch it to "light-theme.css"
        theme.href = "MyProfileStyle-light.css";
        document.getElementById("theme-label").textContent = "Light";
    }
});