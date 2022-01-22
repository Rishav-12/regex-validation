const emailInput = document.querySelector(".email");
const emailInfo = document.querySelector(".emailInfo");

const passwordInput = document.querySelector(".password");
const passwordInfo = document.querySelector(".passwordInfo");

emailInput.addEventListener('input', () => {
	const regex1 = /^\w+\.?\w+?@\w+\.(com|org|net|edu)$/;

	if(regex1.test(emailInput.value)){
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
	const regex2 = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*\-_+=?]).{8,}$/;

	if(regex2.test(passwordInput.value)){
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
