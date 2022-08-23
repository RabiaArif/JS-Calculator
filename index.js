// This function clear all the values
function clearScreen() {
    document.getElementById("result").value = "";
}

// This function display values
function display(value) {
    document.getElementById("result").value += value;
}

// This function evaluates the expression and returns result
function calculate() {
    var p = document.getElementById("result").value;
    var q = eval(p);            //  The eval() method evaluates or executes an argument.
                                // If the argument is an expression, 
                                // eval() evaluates the expression. 
                                // If the argument is one or more JavaScript statements, 
                                // eval() executes the statements.
                                
                                // But use of eval is not preferable beacause of security risk. 
                                // With eval(), malicious code can run inside your application without permission.
                                // With eval(), third-party code can see the scope of your application, 
                                // which can lead to possible attacks.

    document.getElementById("result").value = q;
}
