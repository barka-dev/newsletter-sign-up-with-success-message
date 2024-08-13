const form = document.querySelector("#form");
const userEmailDisplay = document.querySelector("#userEmailDisplay");
const errorDisplay = document.querySelector("#errorDisplay");
const successMessage = document.querySelector("#successMessage");
const dismissBtn = document.querySelector("#dismissBtn");
const card = document.querySelector("#card");
const emailInput = document.querySelector("#emailInput");

const regex =  /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// const root = document.querySelector(":root");
// const rootstyles = getComputedStyle(root);
// const errorColor = rootstyles.getPropertyValue('--vermellion');

form.addEventListener('submit', (event)=>{
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    if(data.email != "" && regex.test(data.email)){
        errorDisplay.style.display = 'none';
        card.style.display = 'none';
        successMessage.style.display = 'flex';
        userEmailDisplay.textContent = data.email;

    }else{
        console.log("invalid email");
        errorDisplay.style.display = 'inline';
        emailInput.classList.add('errorStyle');
    }
    
});

dismissBtn.addEventListener('click',()=>{
    successMessage.style.display = 'none';
    form.reset();
    card.style.display = 'flex';
    emailInput.classList.remove('errorStyle');
})