

    function  getData(){
    var getUserData = document.querySelector('#getData')
    var getUserDataFromLocalStorage = JSON.parse(localStorage.getItem("UserData"));
    var userName = document.querySelector('#userName')
    userName.innerHTML = `${getUserDataFromLocalStorage.name}`
    getUserData.innerHTML = ` <ol>
    <li>Name : ${getUserDataFromLocalStorage.name}</li> 
    <li>Email :  ${getUserDataFromLocalStorage.email} </li>
    <li>Phone Number : ${getUserDataFromLocalStorage.phoneNumber} </li>
    </ol>`
    }
    getData()


    function redirection(){
        window.location.href = "./index.html"
    }
    function logout(){
        //localStorage.clear()
        setTimeout(redirection,0)
    }