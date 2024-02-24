// Your solution goes here 
function isStrongPassword(password){
    // Check if PW has at least a length of 8
    if(password.length < 8)
        return false

    // If PW contains string "password", not valid
    else if (password.toLowerCase().includes('password'))
        return false
    
    // Check that PW has at least one uppercase letter
    else if(!/[A-Z]/.test(password))
        return false

    else
        return true
}