function login(username, password){
    var returnValue = {
        "username" : username,
        "time" : "Current Time",
        "status" : "Success"
    }
    return (returnValue)
}

var status = login("du", "pass")

console.log(status['username']);