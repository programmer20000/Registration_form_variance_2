var button = document.getElementById('ButtonSubmit')

function getValueInput(){
    let FirstNameFiled = document.getElementById('FirstNameFiled')
    let SecondameFiled = document.getElementById('SecondameFiled')
    let EmailFiled = document.getElementById('EmailFiled')
    let PasswordFiled = document.getElementById('PasswordFiled')

    let n1 = FirstNameFiled.value
    let n2 = SecondameFiled.value
    let n3 = EmailFiled.value
    let n4 = PasswordFiled.value

    console.log(n1)
    console.log(n2)
    console.log(n3)
    console.log(n4)
}

button.addEventListener('click',e=>(getValueInput()))