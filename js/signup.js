const lastNameInput = document.getElementById('lastNameInput')
const firstNameInput = document.getElementById('firstNameInput')
const emailInput = document.getElementById('emailInput')
const passwordInput = document.getElementById('passwordInput')
const rememberCheckbox = document.getElementById('rememberCheckbox')
const signInBtn = document.getElementById('signInBtn')
const alreadyExist = document.getElementById("alreadyExist")
const alreadyExistTitle = document.getElementById('alreadyExistTitle')
const alreadyExistInfo = document.getElementById('alreadyExistInfo')

const signInWithGoogleBtn = document.getElementById('signInWithGoogleBtn')

const regEx = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/

let userToken = JSON.parse(localStorage.getItem("UserToken")) || []

const userTokenSetStorage = () => {
    localStorage.setItem("UserToken", JSON.stringify(userToken))
}

signInBtn.addEventListener('click', async () => {
    if (firstNameInput.value && emailInput.value && passwordInput.value && lastNameInput.value) {
        const data = {
            user_first_name: firstNameInput.value,
            user_last_name: lastNameInput.value,
            user_email: emailInput.value,
            user_password: passwordInput.value
        }
        
        try {
            const response = await fetch('http://192.168.11.145:7000/api/auth/register', {
                method: "POST",
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(data)
            })
            
            const responseData = await response.json();
            console.log('Alhamdulillah!:', responseData);
            
            if (responseData.message.includes("Email already exists")) {
                alreadyExist.classList.add("animation")
            }
            
            if (response.status === 201) {
                
                alreadyExistTitle.style.color = "greenyellow"
                
                alreadyExist.style.border = "3px solid greenyellow"
                
                alreadyExistInfo.innerText = ''
                
                alreadyExistTitle.textContent = "You Are Registered Successfully!"
                
                alreadyExist.classList.add("animation")
                
                setTimeout(()=> {
                    alreadyExist.classList.remove("animation")
                }, 3000)
                
                lastNameInput.value = ''
                firstNameInput.value = ''
                emailInput.value = ''
                passwordInput.value = ''
                setTimeout(()=> {
                    window.location.href = 'login.html'
                }, 5000)
                return ''
            }
            
            firstNameInput.classList.add("error")
            lastNameInput.classList.add("error")
            emailInput.classList.add("error")
            passwordInput.classList.add("error")  
            
            setTimeout(()=> {
                firstNameInput.classList.remove("error")
                lastNameInput.classList.remove("error")
                emailInput.classList.remove("error")
                passwordInput.classList.remove("error")  
            }, 5000)
            
        } catch (error) {
            console.log(error);
            console.log("InshaAlloh keyingi safar Ishalydi!");
            
            alreadyExistTitle.style.color = "tomato"
            
            alreadyExist.style.border = "3px solid tomato"
            
            alreadyExistTitle.textContent = "Please Try Again in a Few Minutes!"
            
            alreadyExistInfo.innerText = 'example@gmail.com'
            
            alreadyExist.classList.add("animation")
            
            setTimeout(()=> {
                alreadyExist.classList.remove("animation")
            }, 3000)
        } 
        
        userTokenSetStorage()
        
        lastNameInput.value = ''
        firstNameInput.value = ''
        emailInput.value = ''
        passwordInput.value = ''
        
        return ''
    }
    
    if (emailInput.value.trim() === '') {
        emailInput.classList.add("error")
    }
    if (passwordInput.value.trim() === '') {
        passwordInput.classList.add("error")
    }
    if (lastNameInput.value.trim() === '') {
        lastNameInput.classList.add("error")
    }
    if (firstNameInput.value.trim() === '') {
        firstNameInput.classList.add("error")
    }
    
    setTimeout(()=> {
        emailInput.classList.remove("error")
        passwordInput.classList.remove("error")
        lastNameInput.classList.remove("error")
        firstNameInput.classList.remove("error")
    }, 5000)
    
    emailInput.addEventListener("keydown", (e)=> {
        emailInput.classList.remove("error")
    })
    
    passwordInput.addEventListener("keydown", (e)=> {
        passwordInput.classList.remove("error")
    })
    
    lastNameInput.addEventListener("keydown", (e)=> {
        lastNameInput.classList.remove("error")
    })
    
    firstNameInput.addEventListener("keydown", (e)=> {
        firstNameInput.classList.remove("error")
    })
    
    let emailRegexTest = regEx.test(emailInput.value)
    if (emailRegexTest) {
        emailInput.classList.add("success")
        setTimeout(()=> {
            emailInput.classList.remove("success")
        }, 5000)
    }
})

firstNameInput.addEventListener('keydown', (e) => {
    if (e.key === "Enter") {
        lastNameInput.focus()
    }
})

lastNameInput.addEventListener('keydown', (e) => {
    if (e.key === "Enter") {
        emailInput.focus()
    }
})

emailInput.addEventListener('keydown', (e) => {
    if (e.key === "Enter") {
        passwordInput.focus()
    }
})

passwordInput.addEventListener('keydown', async (e) => {
    if (e.key === "Enter") {
        if (firstNameInput.value && emailInput.value && passwordInput.value && lastNameInput.value) {
            const data = {
                user_first_name: firstNameInput.value,
                user_last_name: lastNameInput.value,
                user_email: emailInput.value,
                user_password: passwordInput.value
            }
            
            try {
                const response = await fetch('http://192.168.11.145:7000/api/auth/register', {
                    method: "POST",
                    headers: {'Content-Type': 'application/json'},
                    body: JSON.stringify(data)
                })
                
                const responseData = await response.json();
                console.log('Alhamdulillah!:', responseData);
                
                if (responseData.message.includes("Email already exists")) {
                    alreadyExist.classList.add("animation")
                }
                
                if (response.status === 201) {
                    alreadyExistTitle.style.color = 'greenyellow'
                    
                    alreadyExist.style.border = "3px solid greenyellow"
                    
                    alreadyExistInfo.innerText = "";
                    
                    alreadyExistTitle.innerText = "You Are Registered Successfully!"
                    
                    alreadyExist.classList.add("animation")
                    
                    setTimeout(()=> {
                        alreadyExist.classList.remove("animation")
                    }, 3000)
                    
                    lastNameInput.value = ''
                    firstNameInput.value = ''
                    emailInput.value = ''
                    passwordInput.value = ''
                    setTimeout(()=> {
                        window.location.href = 'login.html'
                    }, 5000)
                    return ''
                }
                
                firstNameInput.classList.add("error")
                lastNameInput.classList.add("error")
                emailInput.classList.add("error")
                passwordInput.classList.add("error")
                
                alreadyExistTitle.style.color = 'tomato'
                
                alreadyExist.style.border = "3px solid tomato"
                
                alreadyExistInfo.innerText = "";
                
                alreadyExistTitle.innerText = "Please fill in all fields!"
                
                alreadyExist.classList.add("animation")
                
                setTimeout(()=> {
                    alreadyExist.classList.remove("animation")
                }, 3000)
                
                setTimeout(()=> {
                    firstNameInput.classList.remove("error")
                    lastNameInput.classList.remove("error")
                    emailInput.classList.remove("error")
                    passwordInput.classList.remove("error")
                }, 5000)
                
            } catch (error) {
                console.log(error);
                console.log("InshaAlloh keyingi safar Ishalydi!");
                
                alreadyExistTitle.style.color = "tomato"
                
                alreadyExist.style.border = "3px solid tomato"
                
                alreadyExistTitle.textContent = "Please Try Again in a Few Minutes!"
                
                alreadyExistInfo.innerText = 'example@gmail.com'
                
                alreadyExist.classList.add("animation")
                
                setTimeout(()=> {
                    alreadyExist.classList.remove("animation")
                }, 3000)
                
            } 
            
            userTokenSetStorage()
            
            lastNameInput.value = ''
            firstNameInput.value = ''
            emailInput.value = ''
            passwordInput.value = ''
            
            return ''
        }
        
        if (emailInput.value.trim() === '') {
            emailInput.classList.add("error")
        }
        if (passwordInput.value.trim() === '') {
            passwordInput.classList.add("error")
        }
        if (lastNameInput.value.trim() === '') {
            lastNameInput.classList.add("error")
        }
        if (firstNameInput.value.trim() === '') {
            firstNameInput.classList.add("error")
        }
        
        setTimeout(()=> {
            emailInput.classList.remove("error")
            passwordInput.classList.remove("error")
            lastNameInput.classList.remove("error")
            firstNameInput.classList.remove("error")
        }, 5000)
        
        emailInput.addEventListener("keydown", (e)=> {
            emailInput.classList.remove("error")
        })
        
        passwordInput.addEventListener("keydown", (e)=> {
            passwordInput.classList.remove("error")
        })
        
        lastNameInput.addEventListener("keydown", (e)=> {
            lastNameInput.classList.remove("error")
        })
        
        firstNameInput.addEventListener("keydown", (e)=> {
            firstNameInput.classList.remove("error")
        })
        
        let emailRegexTest = regEx.test(emailInput.value)
        if (emailRegexTest) {
            emailInput.classList.add("success")
            setTimeout(()=> {
                emailInput.classList.remove("success")
            }, 5000)
        }
    }
})
