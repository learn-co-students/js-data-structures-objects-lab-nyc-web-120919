// Write your solution in this file!
let driver = {}

function updateDriverWithKeyAndValue(driver, key, value) {
    let newObject = {[key]: value}
    return Object.assign({}, driver, newObject);
}

function destructivelyUpdateDriverWithKeyAndValue(driver, key, value) {
    driver[key] = value;
    return driver;
}

function deleteFromDriverByKey(driver, key) {
    const newObj = {...driver};
    delete newObj[key];
    return newObj;
}

function destructivelyDeleteFromDriverByKey(driver, key) {
    delete driver[key];
    return driver;
}