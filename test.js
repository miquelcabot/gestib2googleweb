var domainuser = require("./domainuser");

var a = new domainuser.DomainUser("iesemilidarder.com", 1, "Pep", 
    "Guardiola Sanç", "Guardiola", "Sanç", "", false, false);

console.log(a);
console.log(a.toString());
console.log(a.email());
console.log(a.user());