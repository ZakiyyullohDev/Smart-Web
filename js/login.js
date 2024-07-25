const emailInput = document.getElementById('emailInput')
const passwordInput = document.getElementById('passwordInput')
const rememberCheckbox = document.getElementById('rememberCheckbox')
const signInBtn = document.getElementById('signInBtn')
const alreadyExist = document.getElementById('alreadyExist')
const alreadyExistTitle = document.getElementById('alreadyExistTitle')
const alreadyExistInfo = document.getElementById('alreadyExistInfo')
const signInWithGoogleBtn = document.getElementById('signInWithGoogleBtn')

const regEx = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/

let userInfo = []

const userTokenSetStorage = () => {
    localStorage.setItem("UserToken", JSON.stringify(userInfo))
}

signInBtn.addEventListener('click', async () => {
    if (emailInput.value && passwordInput.value) {
        const data = {
            user_email: emailInput.value,
            user_password: passwordInput.value
        }
        
        try {
            const response = await fetch('http://192.168.11.145:7000/api/auth/login', {
                method: "POST",
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(data)
            })
            
            const responseData = await response.json();
            console.log('Alhamdulillah!:', responseData);
            
            if (responseData.message.includes("Wrong Login or password")) {
                alreadyExistTitle.textContent = responseData.message
                alreadyExistInfo.textContent = responseData.message
                alreadyExist.classList.add("animation")
            }
            
            if (response.status === 200) {
                
                alreadyExistTitle.style.color = "greenyellow"
                
                alreadyExist.style.border = "3px solid greenyellow"
                
                alreadyExistInfo.innerText = ''
                
                alreadyExistTitle.textContent = "You Are Logged Successfully!"
                
                alreadyExist.classList.add("animation")
                
                setTimeout(()=> {
                    alreadyExist.classList.remove("animation")
                }, 3000)
                
                emailInput.value = ''
                passwordInput.value = ''
                setTimeout(() => {
                    window.location.href = 'index.html'
                }, 5000)
                
                userInfo.push(responseData.token)
                userTokenSetStorage()
                return ''
            }
            
            emailInput.classList.add("error")
            passwordInput.classList.add("error")
            
            alreadyExistTitle.style.color = "tomato"
            
            alreadyExist.style.border = "3px solid tomato"
            
            alreadyExistInfo.innerText = ''
            
            alreadyExistTitle.textContent = "Please fill in all fields!"
            
            alreadyExist.classList.add("animation")
            
            setTimeout(()=> {
                alreadyExist.classList.remove("animation")
            }, 3000)
            
            setTimeout(()=> {
                emailInput.classList.remove("error")
                passwordInput.classList.remove("error")
            }, 5000)
            
            let emailRegexTest = regEx.test(emailInput.value)
            if (emailRegexTest) {
                emailInput.classList.add("success")
                setTimeout(() => {
                    emailInput.classList.remove("success")
                }, 5000)
            }

            alreadyExistTitle.style.color = "tomato"
        
            alreadyExist.style.border = "3px solid tomato"
            
            alreadyExistTitle.textContent = "Please write an email according to this example!"
            
            alreadyExistInfo.innerText = 'example@gmail.com'
            
            alreadyExist.classList.add("animation")
            
            setTimeout(()=> {
                alreadyExist.classList.remove("animation")
            }, 3000)

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
    
    setTimeout(() => {
        emailInput.classList.remove("error")
        passwordInput.classList.remove("error")
    }, 5000)
    
    emailInput.addEventListener("keydown", (e) => {
        emailInput.classList.remove("error")
    })
    
    passwordInput.addEventListener("keydown", (e) => {
        passwordInput.classList.remove("error")
    })
    
})

emailInput.addEventListener('keydown', (e) => {
    if (e.key === "Enter") {
        passwordInput.focus()
    }
})

passwordInput.addEventListener('keydown', async (e) => {
    if (e.key === "Enter") {
        if (emailInput.value && passwordInput.value) {
            const data = {
                user_email: emailInput.value,
                user_password: passwordInput.value
            }
            
            try {
                const response = await fetch('http://192.168.11.145:7000/api/auth/login', {
                    method: "POST",
                    headers: {'Content-Type': 'application/json'},
                    body: JSON.stringify(data)
                })
                
                const responseData = await response.json();
                console.log('Alhamdulillah!:', responseData);
                
                if (responseData.message.includes("Wrong login or password")) {
                    alreadyExistTitle.textContent = responseData.message
                    alreadyExistInfo.textContent = responseData.message
                    alreadyExist.classList.add("animation")
                }
                
                if (response.status === 200) {
                    
                    alreadyExistTitle.style.color = "greenyellow"
                    
                    alreadyExist.style.border = "3px solid greenyellow"
                    
                    alreadyExistInfo.innerText = ''
                    
                    alreadyExistTitle.textContent = "You Are Logged Successfully!"
                    
                    alreadyExist.classList.add("animation")
                    
                    setTimeout(()=> {
                        alreadyExist.classList.remove("animation")
                    }, 3000)
                    
                    emailInput.value = ''
                    passwordInput.value = ''
                    setTimeout(() => {
                        window.location.href = 'index.html'
                    }, 5000)
                    
                    userInfo.push(responseData.token)
                    userTokenSetStorage()
                    
                    return ''
                }
                
                emailInput.classList.add("error")
                passwordInput.classList.add("error")
                
                alreadyExistTitle.style.color = "tomato"
                
                alreadyExist.style.border = "3px solid tomato"
                
                alreadyExistInfo.innerText = ''
                
                alreadyExistTitle.textContent = "Please fill in all fields!"
                
                alreadyExist.classList.add("animation")
                
                setTimeout(()=> {
                    alreadyExist.classList.remove("animation")
                }, 3000)
                
                setTimeout(()=> {
                    emailInput.classList.remove("error")
                    passwordInput.classList.remove("error")
                }, 5000)

                let emailRegexTest = regEx.test(emailInput.value)
                if (emailRegexTest) {
                    emailInput.classList.add("success")
                    setTimeout(() => {
                        emailInput.classList.remove("success")
                    }, 5000)
                    return ''
                }
    
                alreadyExistTitle.style.color = "tomato"
            
                alreadyExist.style.border = "3px solid tomato"
                
                alreadyExistTitle.textContent = "Please write an email according to this example!"
                
                alreadyExistInfo.innerText = 'example@gmail.com'
                
                alreadyExist.classList.add("animation")
                
                setTimeout(()=> {
                    alreadyExist.classList.remove("animation")
                }, 3000)
                
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
        
        setTimeout(() => {
            emailInput.classList.remove("error")
            passwordInput.classList.remove("error")
        }, 5000)
        
        emailInput.addEventListener("keydown", (e) => {
            emailInput.classList.remove("error")
        })
        
        passwordInput.addEventListener("keydown", (e) => {
            passwordInput.classList.remove("error")
        })
        
    }
})
