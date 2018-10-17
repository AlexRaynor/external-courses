var obj = {name: "Alex", age: 18, skills: {js: false, css: true} };
var clone = {};

function cloneObject(obj) {
    var i;
    for(i in obj) {
        if(typeof(obj[i])=="object" && obj[i] != null) {
            clone[i] = cloneObject(obj[i])}
        else {
            clone[i] = obj[i]};
    }
    return clone;
}

console.log(clone.skills == obj.skills);