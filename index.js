const emailInput = document.querySelector(".email");
const emailInfo = document.querySelector(".emailInfo");

const passwordInput = document.querySelector(".password");
const passwordInfo = document.querySelector(".passwordInfo");

const regexEmail = /^\w+\.?\w+?@\w+\.(com|org|net|edu)$/;
const regexPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*\-_+=?]).{8,}$/;

emailInput.addEventListener('input', () => {

	if(regexEmail.test(emailInput.value)){
		emailInfo.textContent = "Email Address is valid";
		emailInfo.classList.remove('red');
		emailInfo.classList.add('green');
	}
	else{
		emailInfo.textContent = "Invalid Email Address";
		emailInfo.classList.remove('green');
		emailInfo.classList.add('red');
	}
});

passwordInput.addEventListener('input', () => {

	if(regexPassword.test(passwordInput.value)){
		passwordInfo.textContent = "Strong Password";
		passwordInfo.classList.remove('red');
		passwordInfo.classList.add('green');
	}
	else{
		passwordInfo.textContent = "Weak Password";
		passwordInfo.classList.remove('green');
		passwordInfo.classList.add('red');
	}
});
