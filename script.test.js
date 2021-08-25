const {
    verifyPassword,
    hasRightLength,
    isNotNull,
    hasUpperCaseCharacter,
    hasLowerCaseCharacter,
    hasDigit,
    minimumConditionsReached
} = require("./script.js");



test("password is niet null", () => {
    expect(isNotNull("henk")).toBeTruthy()
})

test("password is null", () => {
    expect(isNotNull(null)).toBeFalsy()
})

test("password is korter dan 9 karakters", () => {
    expect(hasRightLength("henk")).toBeTruthy()
})

test("password is langer dan 9 karakters", () => {
    expect(hasRightLength("sdffjsdfgfdd;fsdsf")).toBeFalsy()
})

test("password heeft 1 of meer uppercase karakters", () => {
    expect(hasUpperCaseCharacter("Henk")).toBeTruthy()
})

test("password heeft geen uppercase karakters", () => {
    expect(hasUpperCaseCharacter("henk")).toBeFalsy()
})

test("password heeft 1 of meer lowercase karakters", () => {
    expect(hasLowerCaseCharacter("Henk")).toBeTruthy()
})

test("password heeft geen lowercase karakters", () => {
    expect(hasLowerCaseCharacter("HENK")).toBeFalsy()
})

test("password heeft 1 of meer cijfers", () => {
    expect(hasDigit("Henk1")).toBeTruthy()
})

test("password heeft geen cijfers", () => {
    expect(hasDigit("Henk")).toBeFalsy()
})

test("minimaal drie conditions reach", () => {
    expect(minimumConditionsReached([true, true, true])).toBeTruthy()
})

test("geen drie conditions reach", () => {
    expect(minimumConditionsReached([true, true, false])).toBeFalsy()
})

test("password is goed gekeurd", () => {
    expect(verifyPassword("Henk1")).toBeTruthy()
})




