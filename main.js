document.getElementById('generate-btn').addEventListener('click', generatePasswords);

function generatePasswords() {
    const length = 12;
    const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+~`|}{[]:;?><,./-=";
    let password1 = "";
    let password2 = "";
    
    for (let i = 0; i < length; i++) {
        let randomIndex1 = Math.floor(Math.random() * charset.length);
        password1 += charset[randomIndex1];

        let randomIndex2 = Math.floor(Math.random() * charset.length);
        password2 += charset[randomIndex2];
    }

    document.getElementById('password1').value = password1;
    document.getElementById('password2').value = password2;
}
