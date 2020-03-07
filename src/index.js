function eval() {
    // Do not use eval!!!
    return;
}

function expressionCalculator(expr) {
    let charsArray = [];
    if (/\s/.test(expr)) {
        charsArray = expr.trim().split(/\s/)
    } else {
        charsArray = expr.split("");
    }    

    for(let i = 0; i < charsArray.length; i++) {
        if(charsArray[i] === "*") {
            charsArray[i-1] = +charsArray[i-1] * +charsArray[i+1];
            charsArray.splice(i,2);
            i = 0;
        }
        if(charsArray[i] === "/") {
            if(charsArray[i+1] != 0) {
                charsArray[i-1] = +charsArray[i-1] / +charsArray[i+1];
                charsArray.splice(i,2);
                i = 0;
            } else {
                throw new Error("TypeError: Division by zero.");
            }
        }        
    }

    for(let i = 0; i < charsArray.length; i++) {
        if(charsArray[i] === "+") {
            charsArray[i-1] = +charsArray[i-1] + +charsArray[i+1];
            charsArray.splice(i,2);
            i = 0;
        }
        if(charsArray[i] === "-") {
            charsArray[i-1] = +charsArray[i-1] - +charsArray[i+1];
            charsArray.splice(i,2);
            i = 0;
        }
    }   

    
    let openBrackets = 0;
    let closeBrackets = 0;
    for(let i of expr) {
        if(i === "(") openBrackets++;
        if(i === ")") closeBrackets++;
        if(openBrackets !== closeBrackets) {
            throw new Error("ExpressionError: Brackets must be paired")
        }
    }

    //console.log(expr);
    return charsArray[0];
}

module.exports = {
    expressionCalculator
}