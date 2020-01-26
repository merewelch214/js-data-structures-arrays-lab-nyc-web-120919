// Write your solution here!
let drivers = ["Milo", "Otis", "Garfield"];

function drivers() {
    return drivers;
}

function destructivelyAppendDriver(name) {
    return drivers.push(name);
}

function destructivelyPrependDriver(name) {
    return drivers.unshift(name);
}

function destructivelyRemoveLastDriver() {
    drivers.pop();
    return drivers;
}

function destructivelyRemoveFirstDriver() {
    drivers.shift();
    return drivers;
}

function appendDriver(name) {
    let new_arr = [...drivers, name];
    return new_arr;
}

function prependDriver(name) {
    let new_arr = [name, ...drivers];
    return new_arr;
}

function removeLastDriver() {
    let new_arr = drivers.slice(0, drivers.length - 1);
    return new_arr;
}

function removeFirstDriver() {
    let new_arr = drivers.slice(1);
    return new_arr;
}