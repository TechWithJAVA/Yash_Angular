const calculator = (num1: number, num2: number, operator: string) => {
    let res = 0;
    switch (operator) {
        case '+':
            res = num1 + num2;
            console.log("Addition :  " + res);
            break;
        case '-':
            res = num1 - num2;
            console.log("Substraction :  " + res);
            break;
        case '*':
            res = num1 * num2;
            console.log("Multiplication :  " + res);
            break;
        case '/':
            res = num1 / num2;
            console.log("Division :  " + res);
            break;
        default:
            console.log("Undefined");
            break;
    }

}

calculator(4, 0, '+');



