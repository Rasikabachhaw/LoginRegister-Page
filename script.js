// Get DOM elements
const lg = document.getElementById("login");
const sn = document.getElementById("signup");
const sl = document.getElementById("slider");
const pg = document.getElementById("page");
const welcomeText = document.querySelector(".welcome-text");

// Add event listeners
lg.addEventListener("click", loginActive);
sn.addEventListener("click", signupActive);

// Login tab activation
function loginActive() {
    sl.classList.remove("sliderSlide");
    pg.classList.remove("pageSlide");
    
    // Update welcome text with animation
    welcomeText.style.opacity = "0";
    setTimeout(() => {
        welcomeText.textContent = "Welcome Back!";
        welcomeText.style.opacity = "1";
    }, 200);
    
    // Update active state for tabs
    lg.style.color = "white";
    sn.style.color = "#666";
}

// Signup tab activation
function signupActive() {
    sl.classList.add("sliderSlide");
    pg.classList.add("pageSlide");
    
    // Update welcome text with animation
    welcomeText.style.opacity = "0";
    setTimeout(() => {
        welcomeText.textContent = "Create Account";
        welcomeText.style.opacity = "1";
    }, 200);
    
    // Update active state for tabs
    lg.style.color = "#666";
    sn.style.color = "white";
}

// Initialize with login active
loginActive();

// Add smooth transition to welcome text
welcomeText.style.transition = "opacity 0.3s ease";