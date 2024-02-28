function checkForm() {
   // TODO: Perform input validation 
   let userName = document.getElementById('fullName');
   let userEmail = document.getElementById('email');
   let password = document.getElementById('password');
   let passwordConfirm = document.getElementById('passwordConfirm');
   let error = document.getElementById('formErrors');
   let errorsFound = false;

   // Remove existing error messages
   error.innerHTML = '';

   // Validate full name
   if (!userName.value) 
   {
      errorsFound = true;
      userName.classList.add('error');
      let userNameError = document.createElement('li');
      userNameError.textContent = 'Missing full name.';
      error.appendChild(userNameError);
   } 
   
   else 
   {
      userName.classList.remove('error');
   }

   // Validate email
   if (!userEmail.value || !/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,5}$/.test(userEmail.value)) 
   {
      errorsFound = true;
      userEmail.classList.add('error');
      let userEmailError = document.createElement('li');
      userEmailError.textContent = 'Invalid or missing email address.';
      error.appendChild(userEmailError);
   } 
   
   else 
   {
      userEmail.classList.remove('error');
   }

   // Validate password length
   if (password.value.length < 10 || password.value.length > 20 || !password.value) 
   {
      errorsFound = true;
      password.classList.add('error');
      let passwordError1 = document.createElement('li');
      passwordError1.textContent = 'Password must be between 10 and 20 characters.';
      error.appendChild(passwordError1);
   } 
   
   else 
   {
      passwordConfirm.classList.remove('error');
   }

   // Validate password contains at least one lowercase letter
   if (!/[a-z]/.test(password.value)) 
   {
      errorsFound = true;
      password.classList.add('error');
      let passwordError2 = document.createElement('li');
      passwordError2.textContent = 'Password must contain at least one lowercase character.';
      error.appendChild(passwordError2);
   } 
   
   else 
   {
      passwordConfirm.classList.remove('error');
   }

   // Validate password contains at least one uppercase letter
   if (!/[A-Z]/.test(password.value)) 
   {
      errorsFound = true;
      password.classList.add('error');
      let passwordError3 = document.createElement('li');
      passwordError3.textContent = 'Password must contain at least one uppercase character.';
      error.appendChild(passwordError3);
   } 
   
   else 
   {
      passwordConfirm.classList.remove('error');
   }

   // Validate password contains at least one digit
   if (!/[0-9]/.test(password.value)) 
   {
      errorsFound = true;
      passwordConfirm.classList.add('error'); // Add "error" class to confirmation password
      password.classList.add('error');
      const passwordError4 = document.createElement('li');
      passwordError4.textContent = 'Password must contain at least one digit.';
      error.appendChild(passwordError4);
   } 
   
   else 
   {
      passwordConfirm.classList.remove('error');
   }

   // Validate password confirmation
   if (passwordConfirm.value !== password.value) 
   {
      errorsFound = true;
      passwordConfirm.classList.add('error');
      const passwordError5 = document.createElement('li');
      passwordError5.textContent = `Password and confirmation password don't match.`;
      error.appendChild(passwordError5);
   } 
   
   else 
   {
      passwordConfirm.classList.remove('error');
   }

   // Display error messages and prevent form submission if errors found
   if (errorsFound) 
   {
      error.classList.remove('hide');
   } 
   
   else 
   {
      error.classList.add('hide');
   }
}

document.getElementById("submit").addEventListener("click", function(event) {
   checkForm();

   // Prevent default form action. DO NOT REMOVE THIS LINE
   event.preventDefault();
});