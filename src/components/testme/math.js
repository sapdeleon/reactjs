const pi = 3.1415962;

let doublePi = () => (2 * pi);

function add(n1, n2) {
    return (n1 + n2);
};

function subtract(n1, n2) {
    return (n1 - n2);
};

function multiply(n1, n2) {
    return (n1 * n2);
};

let divide = (n1, n2) => (n1 / n2);

export { add, subtract, multiply, divide, doublePi };