function buildName1(firstName) {
    return firstName.length;
}
function buildName2(lastName) {
    var length = lastName.split(" ").join("").length;
    return length;
}
function myFunction(value, space) {
    if (space == true) {
        return value.length;
    }
    else {
        var length = value.split(" ").join("").length;
        return length;
    }
}
var result1 = buildName2("Mc Shane");
console.log(result1);
