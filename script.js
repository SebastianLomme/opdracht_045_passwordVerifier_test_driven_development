const regexNumber = new RegExp(/[0-9]/)
const regexUpper = new RegExp(/[A-Z]/)
const regexLower = new RegExp(/[a-z]/)

const isNotNull = (str) => str !== null && str !== undefined;

const hasRightLength = (str) => str.length <= 9;

const hasUpperCaseCharacter = (str) => regexUpper.test(str);

const hasLowerCaseCharacter = (str) => regexLower.test(str);

const hasDigit = (str) => regexNumber.test(str);

const minimumConditionsReached = conditions => {
    trueConditions = conditions.filter(bool => bool);
    return trueConditions.length >= 3;
};

const verifyPassword = password => {
    const conditions = [
        isNotNull(password),
        hasRightLength(password),
        hasUpperCaseCharacter(password),
        hasLowerCaseCharacter(password),
        hasDigit(password)
    ];
    const result =
        minimumConditionsReached(conditions) && hasLowerCaseCharacter(password);


    return result;
};


module.exports = {
    verifyPassword,
    hasRightLength,
    isNotNull,
    hasUpperCaseCharacter,
    hasLowerCaseCharacter,
    hasDigit,
    minimumConditionsReached
};

console.log(verifyPassword("henkie1"))
console.log(verifyPassword("1234a"))
console.log(verifyPassword("z"))
console.log(verifyPassword("henkie1234"))
console.log(verifyPassword("HENKhenk"))
console.log(verifyPassword("HENK33$"))
console.log(verifyPassword("1234"))
console.log(verifyPassword(""))
console.log(verifyPassword("sdffjsdfgfdd;fsdsf"))





