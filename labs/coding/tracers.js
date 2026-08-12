/* ===================================================================
   UNIFIED PROGRAMMING LABORATORY — TRACERS.JS (v1.0.1)
   Custom Line-by-Line Execution Simulators for All 40 Experiments
   =================================================================== */

window.customTracers = {};

// Helper: Escape HTML
function escapeHtml(text) {
    if (!text) return "";
    return text.toString()
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
}

// Helper: Add step to trace
function addStep(trace, line, scope, explanation, variables, output = "") {
    // Deep copy variables
    const varsCopy = {};
    for (const [k, v] of Object.entries(variables || {})) {
        varsCopy[k] = { type: v.type, value: v.value };
    }
    trace.push({
        line: line,
        scope: scope,
        explanation: explanation,
        variables: varsCopy,
        output: output
    });
}

// ===================================================================
// C PROGRAMMING TRACERS (1 to 10)
// ===================================================================

// C Exp 1: Basic I/O (c-basic-io)
window.customTracers["c-basic-io"] = function(tokens, code, lines, stdinText) {
    const trace = [];
    let a = tokens[0] ? Number(tokens[0]) : 15;
    let b = tokens[1] ? Number(tokens[1]) : 25;
    if (isNaN(a)) a = 15;
    if (isNaN(b)) b = 25;
    const sum = a + b;

    let out = "";
    addStep(trace, 2, "main()", "Execution starts at the <code>main</code> entry point.", {});
    addStep(trace, 3, "main()", "Allocates memory for integer variables <code>a</code> and <code>b</code>.", { a: { type: "int", value: "?" }, b: { type: "int", value: "?" } }, out);
    
    out += "Enter two numbers:\n";
    addStep(trace, 4, "main()", "Outputs text prompt to console.", { a: { type: "int", value: "?" }, b: { type: "int", value: "?" } }, out);
    
    out += `${a} ${b}\n`; // Echo input
    addStep(trace, 5, "main()", `Reads <code>${a}</code> into <code>a</code> and <code>${b}</code> into <code>b</code> from input.`, { a: { type: "int", value: a }, b: { type: "int", value: b } }, out);
    
    out += `Sum = ${sum}\n`;
    addStep(trace, 6, "main()", `Calculates <code>a + b</code> (${a} + ${b} = ${sum}) and prints the formatted sum.`, { a: { type: "int", value: a }, b: { type: "int", value: b } }, out);
    addStep(trace, 7, "main()", "Returns <code>0</code>, indicating successful program termination.", { a: { type: "int", value: a }, b: { type: "int", value: b } }, out);
    
    return trace;
};

// C Exp 2: Control Structures (c-exp2)
window.customTracers["c-exp2"] = function(tokens, code, lines, stdinText) {
    const trace = [];
    let num = tokens[0] ? Number(tokens[0]) : 5;
    if (isNaN(num)) num = 5;

    let out = "";
    const vars = { num: { type: "int", value: "?" } };
    addStep(trace, 2, "main()", "Program execution starts.", vars, out);
    
    vars.num.value = "?";
    out += "Enter a number: ";
    addStep(trace, 4, "main()", "Prints the console input prompt.", vars, out);
    
    vars.num.value = num;
    out += num + "\n"; // Echo input
    addStep(trace, 5, "main()", `Reads integer value <code>${num}</code> from stdin.`, vars, out);
    
    addStep(trace, 7, "main()", `Checks if <code>num > 0</code> (${num} > 0).`, vars, out);
    if (num > 0) {
        out += "Positive\n";
        addStep(trace, 8, "main()", "Condition is true. Prints <code>Positive</code>.", vars, out);
    } else {
        addStep(trace, 9, "main()", `Condition is false. Checks <code>num < 0</code> (${num} < 0).`, vars, out);
        if (num < 0) {
            out += "Negative\n";
            addStep(trace, 10, "main()", "Condition is true. Prints <code>Negative</code>.", vars, out);
        } else {
            out += "Zero\n";
            addStep(trace, 12, "main()", "Both checks failed. Executes else block, printing <code>Zero</code>.", vars, out);
        }
    }

    const remainder = num % 2;
    addStep(trace, 14, "main()", `Evaluates switch expression <code>num % 2</code> (${num} % 2 = ${remainder}).`, vars, out);
    if (remainder === 0) {
        addStep(trace, 15, "main()", "Matches case <code>0</code>.", vars, out);
        out += "Even\n";
        addStep(trace, 15, "main()", "Prints <code>Even</code> and breaks.", vars, out);
    } else {
        addStep(trace, 16, "main()", "Matches odd case (1 or -1).", vars, out);
        out += "Odd\n";
        addStep(trace, 18, "main()", "Prints <code>Odd</code> and breaks.", vars, out);
    }

    addStep(trace, 20, "main()", "Exits program returning <code>0</code>.", vars, out);
    return trace;
};

// C Exp 3: Loops (c-loops-pattern)
window.customTracers["c-loops-pattern"] = function(tokens, code, lines, stdinText) {
    const trace = [];
    let rows = tokens[0] ? Number(tokens[0]) : 3;
    if (isNaN(rows) || rows < 1) rows = 3;
    if (rows > 5) rows = 5;

    let out = "";
    addStep(trace, 2, "main()", "Program execution starts.", {});
    addStep(trace, 3, "main()", "Declares variable <code>rows</code>.", { rows: { type: "int", value: "?" } }, out);
    
    out += "Enter number of rows: ";
    addStep(trace, 4, "main()", "Prints input prompt.", { rows: { type: "int", value: "?" } }, out);
    
    out += rows + "\n"; // Echo input
    addStep(trace, 5, "main()", `Reads value <code>${rows}</code> into <code>rows</code>.`, { rows: { type: "int", value: rows } }, out);

    const vars = { rows: { type: "int", value: rows }, i: { type: "int", value: 1 }, j: { type: "int", value: 1 } };
    for (let i = 1; i <= rows; i++) {
        vars.i.value = i;
        addStep(trace, 7, "main()", `Outer loop: check condition <code>i <= rows</code> (${i} <= ${rows}).`, vars, out);
        
        for (let j = 1; j <= i; j++) {
            vars.j.value = j;
            addStep(trace, 8, "main()", `Inner loop: check condition <code>j <= i</code> (${j} <= ${i}).`, vars, out);
            out += "* ";
            addStep(trace, 9, "main()", "Condition met. Prints <code>* </code>.", vars, out);
        }
        vars.j.value = i + 1;
        addStep(trace, 8, "main()", `Inner loop condition <code>j <= i</code> (${i+1} <= ${i}) failed.`, vars, out);
        out += "\n";
        addStep(trace, 11, "main()", "Outputs newline character <code>\\n</code>.", vars, out);
    }
    
    vars.i.value = rows + 1;
    addStep(trace, 7, "main()", `Outer loop condition <code>i <= rows</code> (${rows+1} <= ${rows}) failed.`, vars, out);
    addStep(trace, 14, "main()", "Returns status <code>0</code> and exits.", { rows: { type: "int", value: rows } }, out);
    
    return trace;
};

// C Exp 4: Functions & Recursion (c-exp4)
window.customTracers["c-exp4"] = function(tokens, code, lines, stdinText) {
    const trace = [];
    let n = tokens[0] ? Number(tokens[0]) : 4;
    if (isNaN(n) || n < 0) n = 4;
    if (n > 8) n = 8; // Cap recursion depth for tracing sanity

    let out = "";
    const vars = { n: { type: "int", value: "?" } };
    addStep(trace, 13, "main()", "Main function entry point.", vars, out);
    
    out += "Enter n: ";
    addStep(trace, 15, "main()", "Prompts for value of n.", vars, out);
    
    vars.n.value = n;
    out += n + "\n"; // Echo input
    addStep(trace, 16, "main()", `Reads <code>n = ${n}</code> from console input.`, vars, out);
    
    // Simulate recursive Factorial
    addStep(trace, 17, "main()", `Prepares output statement and calls recursive function <code>factorial(${n})</code>.`, vars, out);
    
    let factRes = 1;
    const recurseFact = (val) => {
        addStep(trace, 3, `factorial(${val})`, `Recursion call: entered <code>factorial</code> with <code>n = ${val}</code>.`, { n: { type: "int", value: val } }, out);
        addStep(trace, 4, `factorial(${val})`, `Checks recursion base condition <code>n <= 1</code> (${val} <= 1).`, { n: { type: "int", value: val } }, out);
        if (val <= 1) {
            addStep(trace, 4, `factorial(${val})`, "Base condition met! Returns <code>1</code>.", { n: { type: "int", value: val } }, out);
            return 1;
        }
        const sub = recurseFact(val - 1);
        const res = val * sub;
        addStep(trace, 5, `factorial(${val})`, `Unwinds recursion stack: calculates <code>${val} * factorial(${val-1})</code> = ${res}.`, { n: { type: "int", value: val } }, out);
        return res;
    };
    factRes = recurseFact(n);
    
    // Simulate recursive Fibonacci
    addStep(trace, 18, "main()", `Prepares output statement and calls recursive function <code>fibonacci(${n})</code>.`, vars, out);
    let fibRes = 0;
    const recurseFib = (val) => {
        addStep(trace, 8, `fibonacci(${val})`, `Recursion call: entered <code>fibonacci</code> with <code>n = ${val}</code>.`, { n: { type: "int", value: val } }, out);
        addStep(trace, 9, `fibonacci(${val})`, `Checks base condition <code>n <= 1</code> (${val} <= 1).`, { n: { type: "int", value: val } }, out);
        if (val <= 1) {
            addStep(trace, 9, `fibonacci(${val})`, `Base condition met. Returns <code>${val}</code>.`, { n: { type: "int", value: val } }, out);
            return val;
        }
        return recurseFib(val - 1) + recurseFib(val - 2);
    };
    fibRes = recurseFib(n);
    
    out += `Factorial(${n}) = ${factRes}\nFibonacci(${n}) = ${fibRes}\n`;
    addStep(trace, 19, "main()", "Prints calculation outputs onto terminal console.", vars, out);
    return trace;
};

// C Exp 5: Arrays & Strings (c-exp5)
window.customTracers["c-exp5"] = function(tokens, code, lines, stdinText) {
    const trace = [];
    let str = tokens[0] || "Hello";
    
    let out = "Array: 5 3 8 1 9 2 \nEnter a string: ";
    const vars = {
        arr: { type: "int[]", value: "[5, 3, 8, 1, 9, 2]" },
        str: { type: "char[]", value: "?" }
    };
    
    addStep(trace, 4, "main()", "Initializes array with 6 numbers.", vars, out);
    addStep(trace, 6, "main()", "Loops and prints initial array elements.", vars, out);
    addStep(trace, 9, "main()", "Outputs text prompt for string input.", vars, out);
    
    vars.str.value = `"${str}"`;
    out += str + "\n"; // Echo input
    addStep(trace, 10, "main()", `Reads string <code>"${str}"</code> from console input.`, vars, out);
    
    const len = str.length;
    out += `Length: ${len}\n`;
    addStep(trace, 11, "main()", `Evaluates string length using <code>strlen</code> (${len}).`, vars, out);
    
    // Simulate reversing string loop
    addStep(trace, 15, "main()", `Initializes loop variables to reverse string. Half-point count = ${Math.floor(len/2)}.`, vars, out);
    
    let reversedChars = str.split("");
    for (let i = 0; i < Math.floor(len / 2); i++) {
        let tmp = reversedChars[i];
        reversedChars[i] = reversedChars[len - 1 - i];
        reversedChars[len - 1 - i] = tmp;
        
        vars.str.value = `"${reversedChars.join("")}"`;
        vars.i = { type: "int", value: i };
        vars.tmp = { type: "char", value: `'${tmp}'` };
        addStep(trace, 16, "main()", `Swaps characters: index ${i} ('${tmp}') with index ${len-1-i} ('${reversedChars[i]}').`, vars, out);
    }
    
    const reversedStr = reversedChars.join("");
    out += `Reversed: ${reversedStr}\n`;
    delete vars.i;
    delete vars.tmp;
    addStep(trace, 21, "main()", `Prints reversed string result <code>"${reversedStr}"</code>.`, vars, out);
    addStep(trace, 22, "main()", "Program exits successfully.", vars, out);
    
    return trace;
};

// C Exp 6: Pointers (c-exp6)
window.customTracers["c-exp6"] = function(tokens, code, lines, stdinText) {
    const trace = [];
    let out = "";
    const vars = {
        x: { type: "int", value: 10 },
        y: { type: "int", value: 20 },
        p: { type: "int*", value: "0x7ffe8e (Address of x)" }
    };
    
    addStep(trace, 9, "main()", "Execution starts. Sets local variables <code>x = 10</code>, <code>y = 20</code>.", { x: { type: "int", value: 10 }, y: { type: "int", value: 20 } }, out);
    addStep(trace, 10, "main()", "Declares pointer variable <code>p</code> mapping to memory address of variable <code>x</code>.", vars, out);
    
    out += "Address of x: 0x7ffe8e\n";
    addStep(trace, 11, "main()", "Prints address value stored in pointer variable <code>p</code>.", vars, out);
    
    out += "Value via pointer: 10\n";
    addStep(trace, 12, "main()", "Dereferences pointer <code>*p</code> to print target memory value (10).", vars, out);
    
    addStep(trace, 13, "main()", "Calls <code>swap(&x, &y)</code>, passing variable memory addresses.", vars, out);
    
    // Jump to swap function
    const swapVars = {
        a: { type: "int*", value: "Address of x" },
        b: { type: "int*", value: "Address of y" },
        temp: { type: "int", value: "?" }
    };
    addStep(trace, 3, "swap()", "Enters function <code>swap</code>. Arguments bind address pointers.", swapVars, out);
    swapVars.temp.value = 10;
    addStep(trace, 4, "swap()", "Saves value pointed by <code>a</code> (10) into local variable <code>temp</code>.", swapVars, out);
    addStep(trace, 5, "swap()", "Assigns value pointed by <code>b</code> (20) to address pointed by <code>a</code>.", swapVars, out);
    addStep(trace, 6, "swap()", "Assigns saved value in <code>temp</code> (10) to address pointed by <code>b</code>.", swapVars, out);
    
    // Return to main
    vars.x.value = 20;
    vars.y.value = 10;
    out += "After swap: x=20, y=10\n";
    addStep(trace, 14, "main()", "Execution returns. Variables in caller scope are successfully swapped.", vars, out);
    addStep(trace, 15, "main()", "Returns status code <code>0</code>.", vars, out);
    
    return trace;
};

// C Exp 7: Structures & Unions (c-exp7)
window.customTracers["c-exp7"] = function(tokens, code, lines, stdinText) {
    const trace = [];
    let out = "";
    const vars = {
        "s1.rollNo": { type: "int", value: "?" },
        "s1.name": { type: "char[50]", value: "" },
        "s1.marks": { type: "float", value: "?" }
    };
    
    addStep(trace, 10, "main()", "Starts execution. Allocates struct space on the stack.", vars, out);
    vars["s1.rollNo"].value = 101;
    addStep(trace, 11, "main()", "Sets field variable <code>rollNo</code> to <code>101</code>.", vars, out);
    vars["s1.name"].value = '"Alice"';
    addStep(trace, 12, "main()", "Copies string literal <code>\"Alice\"</code> into field variable <code>name</code>.", vars, out);
    vars["s1.marks"].value = 95.5;
    addStep(trace, 13, "main()", "Sets field variable <code>marks</code> to <code>95.5</code>.", vars, out);
    
    out += "Roll: 101\nName: Alice\nMarks: 95.50\n";
    addStep(trace, 14, "main()", "Prints all struct fields values formatted onto console output.", vars, out);
    
    out += "Size of struct: 60 bytes\n";
    addStep(trace, 15, "main()", "Evaluates struct memory space size using <code>sizeof</code> operator (4 + 50 + 4 + alignment padding).", vars, out);
    
    return trace;
};

// C Exp 8: File Handling (c-exp8)
window.customTracers["c-exp8"] = function(tokens, code, lines, stdinText) {
    const trace = [];
    let out = "";
    const vars = {
        fp: { type: "FILE*", value: "NULL" },
        line: { type: "char[100]", value: "" }
    };
    
    addStep(trace, 3, "main()", "Execution starts.", vars, out);
    
    vars.fp.value = "0x23a10e (Write Handle)";
    addStep(trace, 7, "main()", "Opens file <code>output.txt</code> in write mode (<code>\"w\"</code>).", vars, out);
    addStep(trace, 8, "main()", "Checks if file handle opens successfully.", vars, out);
    addStep(trace, 12, "main()", "Writes string literal <code>\"Hello from C!\\n\"</code> to file.", vars, out);
    addStep(trace, 13, "main()", "Writes string literal <code>\"File handling experiment.\\n\"</code> to file.", vars, out);
    
    vars.fp.value = "NULL";
    addStep(trace, 14, "main()", "Closes write stream file handle safely.", vars, out);
    
    vars.fp.value = "0x23a10e (Read Handle)";
    addStep(trace, 17, "main()", "Opens file <code>output.txt</code> in read mode (<code>\"r\"</code>).", vars, out);
    
    out += "File contents:\nHello from C!\nFile handling experiment.\n";
    vars.line.value = '"File handling experiment."';
    addStep(trace, 19, "main()", "Reads lines via loop using <code>fgets</code> and prints them onto stdout console.", vars, out);
    
    vars.fp.value = "NULL";
    addStep(trace, 21, "main()", "Closes read handle stream.", vars, out);
    
    return trace;
};

// C Exp 9: Dynamic Memory (c-exp9)
window.customTracers["c-exp9"] = function(tokens, code, lines, stdinText) {
    const trace = [];
    let n = tokens[0] ? Number(tokens[0]) : 3;
    if (isNaN(n) || n < 1) n = 3;
    if (n > 5) n = 5;

    let out = "";
    const vars = {
        n: { type: "int", value: "?" },
        arr: { type: "int*", value: "NULL" }
    };
    
    addStep(trace, 4, "main()", "Execution starts.", vars, out);
    
    out += "How many integers to allocate? ";
    addStep(trace, 5, "main()", "Prompts for allocation element count size.", vars, out);
    
    vars.n.value = n;
    out += n + "\n"; // Echo input
    addStep(trace, 6, "main()", `Reads size integer value <code>${n}</code> into variable <code>n</code>.`, vars, out);
    
    vars.arr.value = "0x5a180 (Heap Segment)";
    addStep(trace, 8, "main()", `Allocates heap space for <code>${n}</code> integers dynamically via <code>malloc</code>.`, vars, out);
    
    const arrVals = [];
    for (let i = 0; i < n; i++) arrVals.push((i + 1) * 10);
    vars["*arr"] = { type: "int[]", value: "[" + arrVals.join(", ") + "]" };
    addStep(trace, 11, "main()", "Initializes allocated heap segment memory slots values with loops.", vars, out);
    
    out += "Values: " + arrVals.join(" ") + " ";
    addStep(trace, 13, "main()", "Outputs initialized array values onto console screen.", vars, out);
    
    const extendedVals = [...arrVals, 110, 120];
    vars.arr.value = "0x5a180 (Resized Heap)";
    vars["*arr"].value = "[" + extendedVals.join(", ") + "]";
    addStep(trace, 15, "main()", `Expands heap segment storage dynamically to fit <code>${n+2}</code> integers using <code>realloc</code>.`, vars, out);
    addStep(trace, 16, "main()", "Assigns elements in newly allocated indices.", vars, out);
    
    out += "\nAfter realloc: " + extendedVals.join(" ") + " ";
    addStep(trace, 18, "main()", "Prints all elements values in resized segment.", vars, out);
    
    vars.arr.value = "NULL";
    delete vars["*arr"];
    out += "\nMemory freed.\n";
    addStep(trace, 19, "main()", "Deallocates heap memory using <code>free(arr)</code> to prevent memory leak.", vars, out);
    
    return trace;
};

// C Exp 10: Sorting (c-exp10)
window.customTracers["c-exp10"] = function(tokens, code, lines, stdinText) {
    const trace = [];
    let out = "";
    const arr = [64, 34, 25, 12, 22, 11, 90];
    const vars = {
        arr: { type: "int[]", value: "[64, 34, 25, 12, 22, 11, 90]" }
    };
    
    addStep(trace, 17, "main()", "Starts execution. Initializes integers array to sort.", vars, out);
    
    out += "Before: 64 34 25 12 22 11 90 \n";
    addStep(trace, 19, "main()", "Calls <code>printArr</code> to output initial array.", vars, out);
    addStep(trace, 20, "main()", "Calls function <code>bubbleSort(arr, 7)</code> to start sorting.", vars, out);
    
    // Simulate bubble sort passes
    const sortVars = {
        "a": { type: "int[]", value: "[64, 34, 25, 12, 22, 11, 90]" },
        "i": { type: "int", value: 0 },
        "j": { type: "int", value: 0 }
    };
    addStep(trace, 8, "bubbleSort()", "Enters bubbleSort. Set loop counters.", sortVars, out);
    
    // Sort array
    const sorted = [11, 12, 22, 25, 34, 64, 90];
    sortVars.a.value = "[" + sorted.join(", ") + "]";
    sortVars.i.value = 5;
    sortVars.j.value = 0;
    addStep(trace, 9, "bubbleSort()", "Runs nested loops comparing adjacent elements. Swaps them if left > right.", sortVars, out);
    
    vars.arr.value = "[" + sorted.join(", ") + "]";
    out += "After:  11 12 22 25 34 64 90 \n";
    addStep(trace, 21, "main()", "Returns from sort. Prints final sorted array.", vars, out);
    addStep(trace, 22, "main()", "Exits program.", vars, out);
    
    return trace;
};

// ===================================================================
// C++ PROGRAMMING TRACERS (11 to 20)
// ===================================================================

// C++ Exp 1: Streams (cpp-streams)
window.customTracers["cpp-streams"] = function(tokens, code, lines, stdinText) {
    const trace = [];
    let a = tokens[0] ? Number(tokens[0]) : 5.5;
    let b = tokens[1] ? Number(tokens[1]) : 4.0;
    if (isNaN(a)) a = 5.5;
    if (isNaN(b)) b = 4.0;
    const prod = a * b;

    let out = "";
    addStep(trace, 3, "main()", "Execution starts at <code>main()</code> entry point.", {});
    addStep(trace, 4, "main()", "Declares decimal variables <code>a</code> and <code>b</code>.", { a: { type: "double", value: "?" }, b: { type: "double", value: "?" } }, out);
    
    out += "Enter two decimal numbers:\n";
    addStep(trace, 5, "main()", "Pushes string instructions to console stream <code>cout</code>.", { a: { type: "double", value: "?" }, b: { type: "double", value: "?" } }, out);
    
    out += `${a} ${b}\n`; // Echo input
    addStep(trace, 6, "main()", `Pulls input streams values into variables: <code>a = ${a}</code>, <code>b = ${b}</code>.`, { a: { type: "double", value: a }, b: { type: "double", value: b } }, out);
    
    out += `Product = ${prod}\n`;
    addStep(trace, 7, "main()", `Calculates product (${a} * ${b} = ${prod}) and streams it to console.`, { a: { type: "double", value: a }, b: { type: "double", value: b } }, out);
    addStep(trace, 8, "main()", "Exits returning status code 0.", {}, out);
    
    return trace;
};

// C++ Exp 2: Classes (cpp-classes)
window.customTracers["cpp-classes"] = function(tokens, code, lines, stdinText) {
    const trace = [];
    let l = tokens[0] ? Number(tokens[0]) : 6;
    let b = tokens[1] ? Number(tokens[1]) : 7;
    if (isNaN(l)) l = 6;
    if (isNaN(b)) b = 7;
    const area = l * b;

    let out = "";
    const vars = {
        "rect.length": { type: "int", value: "?" },
        "rect.breadth": { type: "int", value: "?" },
        "l": { type: "int", value: "?" },
        "b": { type: "int", value: "?" }
    };
    
    addStep(trace, 19, "main()", "Execution starts.", {}, out);
    addStep(trace, 20, "main()", "Instantiates class object <code>rect</code> of type class Rectangle.", vars, out);
    addStep(trace, 21, "main()", "Declares parameter storage integers.", vars, out);
    
    out += "Enter length and breadth: ";
    addStep(trace, 22, "main()", "Streams console input instructions.", vars, out);
    
    vars.l.value = l;
    vars.b.value = b;
    out += `${l} ${b}\n`; // Echo input
    addStep(trace, 23, "main()", `Reads values <code>${l}</code> and <code>${b}</code> into local variables.`, vars, out);
    
    addStep(trace, 24, "main()", "Calls member function method <code>rect.setValues(l, b)</code>.", vars, out);
    
    vars["rect.length"].value = l;
    vars["rect.breadth"].value = b;
    addStep(trace, 9, "Rectangle::setValues()", `Assigns parameter arguments to private variables: length = ${l}, breadth = ${b}.`, {}, out);
    
    addStep(trace, 25, "main()", "Calls member function method <code>rect.area()</code>.", vars, out);
    addStep(trace, 14, "Rectangle::area()", `Evaluates product of private class fields: <code>length * breadth</code> (${l} * ${b} = ${area}).`, {}, out);
    
    out += `Area = ${area}\n`;
    addStep(trace, 25, "main()", "Outputs calculated class method return value.", vars, out);
    
    return trace;
};

// C++ Exp 3: Inheritance (cpp-exp3)
window.customTracers["cpp-exp3"] = function(tokens, code, lines, stdinText) {
    const trace = [];
    let out = "";
    
    addStep(trace, 17, "main()", "Execution starts.", {}, out);
    addStep(trace, 18, "main()", "Creates instance <code>a</code> of base class <code>Animal</code> (name: 'Generic Animal').", { "a.name": { type: "string", value: '"Generic Animal"' } }, out);
    addStep(trace, 19, "main()", "Creates instance <code>d</code> of derived subclass <code>Dog</code> (name: 'Buddy').", { "a.name": { type: "string", value: '"Generic Animal"' }, "d.name": { type: "string", value: '"Buddy"' } }, out);
    
    addStep(trace, 20, "main()", "Calls method member <code>a.speak()</code>.", {}, out);
    out += "Generic Animal makes a sound.\n";
    addStep(trace, 8, "Animal::speak()", "Outputs base animal sound string to console stream.", {}, out);
    
    addStep(trace, 21, "main()", "Calls overridden method member <code>d.speak()</code>.", {}, out);
    out += "Buddy says: Woof!\n";
    addStep(trace, 14, "Dog::speak()", "Outputs overridden child speak dog sound string.", {}, out);
    
    addStep(trace, 22, "main()", "Calls specialized child class method <code>d.fetch()</code>.", {}, out);
    out += "Buddy fetches the ball!\n";
    addStep(trace, 15, "Dog::fetch()", "Outputs dog specific retrieve action string.", {}, out);
    
    return trace;
};

// C++ Exp 4: Polymorphism (cpp-exp4)
window.customTracers["cpp-exp4"] = function(tokens, code, lines, stdinText) {
    const trace = [];
    let out = "";
    
    addStep(trace, 21, "main()", "Execution starts.", {}, out);
    addStep(trace, 22, "main()", "Declares array of base class pointers pointing to dynamic Circle (r=5) and Square (s=4) heap objects.", { "shapes[0]": { type: "Shape*", value: "Circle object" }, "shapes[1]": { type: "Shape*", value: "Square object" } }, out);
    
    // First element call (Circle)
    addStep(trace, 23, "main()", "Iterates vector: calls <code>s->display()</code> on first shape (Circle).", {}, out);
    addStep(trace, 7, "Shape::display()", "Enters base class helper. Calls virtual method <code>area()</code> dynamically.", {}, out);
    addStep(trace, 14, "Circle::area()", "Jumps to overridden virtual method in Circle class. Evaluates circle area (3.14159 * 5 * 5 = 78.5398).", {}, out);
    out += "Shape area: 78.5398\n";
    addStep(trace, 7, "Shape::display()", "Outputs result formatted value string.", {}, out);
    
    // Second element call (Square)
    addStep(trace, 23, "main()", "Iterates vector: calls <code>s->display()</code> on second shape (Square).", {}, out);
    addStep(trace, 7, "Shape::display()", "Enters base class helper. Calls virtual method <code>area()</code> dynamically.", {}, out);
    addStep(trace, 19, "Square::area()", "Jumps to overridden virtual method in Square class. Evaluates square area (4 * 4 = 16).", {}, out);
    out += "Shape area: 16\n";
    addStep(trace, 7, "Shape::display()", "Outputs result formatted value string.", {}, out);
    
    return trace;
};

// C++ Exp 5: Templates (cpp-exp5)
window.customTracers["cpp-exp5"] = function(tokens, code, lines, stdinText) {
    const trace = [];
    let out = "";
    
    addStep(trace, 13, "main()", "Execution starts.", {}, out);
    
    addStep(trace, 14, "main()", "Calls templated compiler function inline <code>maxVal<int>(3, 7)</code>.", {}, out);
    addStep(trace, 5, "maxVal()", "Compiler instantiates version of maxVal for integer type. Returns <code>7</code>.", {}, out);
    
    out += "Max(3,7): 7\n";
    addStep(trace, 14, "main()", "Outputs returned template max integer value.", {}, out);
    
    addStep(trace, 15, "main()", "Calls template function <code>maxVal<double>(3.5, 2.1)</code>.", {}, out);
    out += "Max(3.5,2.1): 3.5\n";
    addStep(trace, 15, "main()", "Outputs returned template max double value.", {}, out);
    
    addStep(trace, 16, "main()", "Instantiates templated stack class type <code>Stack<int></code>.", { "s.top": { type: "int", value: -1 } }, out);
    addStep(trace, 17, "main()", "Pushes integers 10, 20, and 30 onto stack.", { "s.top": { type: "int", value: 2 }, "s.data[0..2]": { type: "int[]", value: "[10, 20, 30]" } }, out);
    
    out += "Stack pop: 30, 20\n";
    addStep(trace, 18, "main()", "Pops and prints values from template stack structure (LIFO order).", { "s.top": { type: "int", value: 0 } }, out);
    
    return trace;
};

// C++ Exp 6: STL Vectors & Maps (cpp-exp6)
window.customTracers["cpp-exp6"] = function(tokens, code, lines, stdinText) {
    const trace = [];
    let out = "";
    const vars = {
        v: { type: "std::vector<int>", value: "[5, 2, 8, 1, 9, 3]" }
    };
    
    addStep(trace, 7, "main()", "Starts execution. Initializes standard vector list.", vars, out);
    
    out += "Before: 5 2 8 1 9 3 \n";
    addStep(trace, 9, "main()", "Loops and prints vector elements.", vars, out);
    
    vars.v.value = "[1, 2, 3, 5, 8, 9]";
    addStep(trace, 10, "main()", "Calls STL algorithm <code>std::sort</code> to sort vector in place.", vars, out);
    
    out += "After: 1 2 3 5 8 9 \n";
    addStep(trace, 12, "main()", "Loops and outputs sorted vector elements.", vars, out);
    
    vars.scores = { type: "std::map<string,int>", value: "{ Alice: 95, Bob: 87, Carol: 92 }" };
    addStep(trace, 16, "main()", "Inserts key-value entries into associative container map.", vars, out);
    
    out += "\nScoreboard:\n  Alice: 95\n  Bob: 87\n  Carol: 92\n";
    addStep(trace, 19, "main()", "Iterates map (sorted automatically by key name) printing scoreboard stats.", vars, out);
    
    return trace;
};

// C++ Exp 7: Exception Handling (cpp-exp7)
window.customTracers["cpp-exp7"] = function(tokens, code, lines, stdinText) {
    const trace = [];
    let a = tokens[0] ? Number(tokens[0]) : 10;
    let b = tokens[1] ? Number(tokens[1]) : 0;
    if (isNaN(a)) a = 10;
    if (isNaN(b)) b = 0;

    let out = "";
    const vars = { a: { type: "double", value: "?" }, b: { type: "double", value: "?" } };
    addStep(trace, 13, "main()", "Execution starts.", vars, out);
    
    out += "Enter two numbers: ";
    addStep(trace, 15, "main()", "Prompts for inputs.", vars, out);
    
    vars.a.value = a;
    vars.b.value = b;
    out += `${a} ${b}\n`; // Echo input
    addStep(trace, 16, "main()", `Reads <code>a = ${a}</code> and <code>b = ${b}</code>.`, vars, out);
    addStep(trace, 17, "main()", "Enters try block scope.", vars, out);
    addStep(trace, 18, "main()", `Invokes function call <code>divide(${a}, ${b})</code>.`, vars, out);
    
    addStep(trace, 7, "divide()", `Checks exceptions conditions: divisor <code>b == 0</code> or negative.`, {}, out);
    if (b === 0) {
        addStep(trace, 8, "divide()", "Divisor is zero! Throws <code>std::runtime_error(\"Division by zero!\")</code>.", {}, out);
        addStep(trace, 19, "main()", "Catches runtime_error block. Handles error exception.", vars, out);
        out += "Runtime Error: Division by zero!\n";
        addStep(trace, 20, "main()", "Outputs exception message to console standard stream.", vars, out);
    } else if (a < 0 || b < 0) {
        addStep(trace, 9, "divide()", "Inputs are negative! Throws <code>std::invalid_argument(\"Negative numbers not allowed!\")</code>.", {}, out);
        addStep(trace, 21, "main()", "Catches invalid_argument block. Handles validation error.", vars, out);
        out += "Invalid Argument: Negative numbers not allowed!\n";
        addStep(trace, 22, "main()", "Outputs invalid argument message.", vars, out);
    } else {
        const res = a / b;
        addStep(trace, 10, "divide()", `Divides inputs: <code>${a} / ${b}</code> = ${res}.`, {}, out);
        out += `Result: ${res}\n`;
        addStep(trace, 18, "main()", "Prints division output successfully.", vars, out);
    }
    
    return trace;
};

// C++ Exp 8: Operator Overloading (cpp-exp8)
window.customTracers["cpp-exp8"] = function(tokens, code, lines, stdinText) {
    const trace = [];
    let out = "";
    
    addStep(trace, 17, "main()", "Execution starts.", {}, out);
    addStep(trace, 18, "main()", "Creates instance <code>c1</code> of class Complex (real: 3, imag: 4).", { "c1.real": { type: "double", value: 3 }, "c1.imag": { type: "double", value: 4 } }, out);
    addStep(trace, 19, "main()", "Creates instance <code>c2</code> of class Complex (real: 1, imag: -2).", { "c2.real": { type: "double", value: 1 }, "c2.imag": { type: "double", value: -2 } }, out);
    
    out += "c1 = 3+4i\n";
    addStep(trace, 20, "main()", "Streams <code>c1</code> to console. Invokes overloaded friend friend operator <code><<</code>.", {}, out);
    addStep(trace, 12, "operator<<()", "Outputs complex value formatting dynamically.", {}, out);
    
    out += "c2 = 1-2i\n";
    addStep(trace, 21, "main()", "Streams <code>c2</code> to console. Invokes overloaded operator <code><<</code>.", {}, out);
    
    addStep(trace, 22, "main()", "Evaluates addition <code>c1 + c2</code>. Invokes overloaded operator <code>+</code>.", {}, out);
    addStep(trace, 8, "Complex::operator+()", "Enters operator function. Computes real (3+1) and imaginary (4-2) sums.", {}, out);
    
    out += "c1+c2 = 4+2i\n";
    addStep(trace, 22, "main()", "Outputs complex sum result via stream.", {}, out);
    
    addStep(trace, 23, "main()", "Evaluates equality check <code>c1 == c2</code>. Invokes overloaded operator <code>==</code>.", {}, out);
    addStep(trace, 11, "Complex::operator==()", "Checks equality of class members. Returns false.", {}, out);
    
    out += "Equal? No\n";
    addStep(trace, 23, "main()", "Outputs equality match response.", {}, out);
    
    return trace;
};

// C++ Exp 9: File Streams (cpp-exp9)
window.customTracers["cpp-exp9"] = function(tokens, code, lines, stdinText) {
    const trace = [];
    let out = "";
    
    addStep(trace, 6, "main()", "Execution starts.", {}, out);
    addStep(trace, 8, "main()", "Creates file stream output handle <code>ofstream</code> pointing to <code>data.txt</code>.", { "out.is_open()": { type: "bool", value: "true" } }, out);
    addStep(trace, 9, "main()", "Writes first line literal string to file output stream.", {}, out);
    addStep(trace, 10, "main()", "Writes second line string.", {}, out);
    addStep(trace, 11, "main()", "Closes write stream file handle.", {}, out);
    
    addStep(trace, 14, "main()", "Creates file input stream handle <code>ifstream</code> on <code>data.txt</code>.", { "in.is_open()": { type: "bool", value: "true" } }, out);
    
    out += "File contents:\nC++ File Stream Experiment\nLine 2: Hello World\n";
    addStep(trace, 17, "main()", "Reads lines iteratively using <code>getline()</code> and outputs onto console standard stream.", { "line": { type: "string", value: '"Line 2: Hello World"' } }, out);
    addStep(trace, 19, "main()", "Closes read file stream.", {}, out);
    
    return trace;
};

// C++ Exp 10: Smart Pointers (cpp-exp10)
window.customTracers["cpp-exp10"] = function(tokens, code, lines, stdinText) {
    const trace = [];
    let out = "";
    
    addStep(trace, 12, "main()", "Execution starts.", {}, out);
    addStep(trace, 14, "main()", "Enters block. Creates unique pointer managing dynamic Resource 'UniqueResource'.", { "u1.get()": { type: "Resource*", value: "0x52b11 (Unique)" } }, out);
    out += "UniqueResource acquired\n";
    addStep(trace, 8, "Resource::Resource()", "Resource constructor logs allocation.", {}, out);
    
    out += "Using: UniqueResource\n";
    addStep(trace, 15, "main()", "Accesses unique resource via arrow operator.", {}, out);
    
    out += "UniqueResource released\n";
    addStep(trace, 16, "main()", "Unique pointer goes out of block scope. Memory is safely auto-released by destructor.", {}, out);
    
    addStep(trace, 18, "main()", "Creates shared pointer managing 'SharedResource'. Reference count = 1.", { "s1.use_count()": { type: "long", value: 1 } }, out);
    out += "SharedResource acquired\n";
    addStep(trace, 8, "Resource::Resource()", "Shared resource constructor logs allocation.", {}, out);
    
    addStep(trace, 20, "main()", "Enters inner block. Creates copy <code>s2 = s1</code>. Increments reference count.", { "s1.use_count()": { type: "long", value: 2 } }, out);
    out += "Ref count: 2\n";
    addStep(trace, 21, "main()", "Outputs reference counts.", {}, out);
    
    addStep(trace, 22, "main()", "Shared pointer copy <code>s2</code> goes out of inner block scope. Decrements reference count.", { "s1.use_count()": { type: "long", value: 1 } }, out);
    out += "Ref count: 1\n";
    addStep(trace, 23, "main()", "Outputs reference counts.", {}, out);
    
    out += "SharedResource released\n";
    addStep(trace, 25, "main()", "Exits main scope. Main shared pointer goes out of scope, releasing memory.", {}, out);
    
    return trace;
};

// ===================================================================
// JAVA PROGRAMMING TRACERS (21 to 30)
// ===================================================================

// Java Exp 1: Scanner (java-scanner-methods)
window.customTracers["java-scanner-methods"] = function(tokens, code, lines, stdinText) {
    const trace = [];
    let name = tokens[0] || "Learner";
    let out = "";
    
    addStep(trace, 7, "Main.main()", "JVM executes entry main thread method.", {});
    addStep(trace, 8, "Main.main()", "Instantiates Scanner pointing to System.in console stream.", { "scanner": { type: "Scanner", value: "Reference" } }, out);
    
    out += "Enter your name: ";
    addStep(trace, 9, "Main.main()", "Outputs text instructions to screen.", { "scanner": { type: "Scanner", value: "Reference" } }, out);
    
    out += name + "\n"; // Echo input
    addStep(trace, 10, "Main.main()", `Reads line string <code>"${name}"</code> from console input.`, { "name": { type: "String", value: `"${name}"` } }, out);
    addStep(trace, 11, "Main.main()", "Calls static helper method <code>greet(name)</code>.", { "name": { type: "String", value: `"${name}"` } }, out);
    
    addStep(trace, 3, "Main.greet()", "Enters static greet method scope.", { "greet.name": { type: "String", value: `"${name}"` } }, out);
    out += `Hello, ${name}!\n`;
    addStep(trace, 4, "Main.greet()", "Outputs formatted greeting message.", {}, out);
    
    addStep(trace, 12, "Main.main()", "Closes scanner stream resource safely.", {}, out);
    return trace;
};

// Java Exp 2: Control Flow (java-exp2)
window.customTracers["java-exp2"] = function(tokens, code, lines, stdinText) {
    const trace = [];
    let marks = tokens[0] ? Number(tokens[0]) : 85;
    if (isNaN(marks)) marks = 85;

    let out = "";
    const vars = { marks: { type: "int", value: "?" } };
    addStep(trace, 3, "Main.main()", "JVM launches main entry thread.", vars, out);
    addStep(trace, 4, "Main.main()", "Instantiates scanner stream.", vars, out);
    
    out += "Enter marks (0-100):\n";
    addStep(trace, 5, "Main.main()", "Prompts for marks integer input.", vars, out);
    
    vars.marks.value = marks;
    out += marks + "\n"; // Echo input
    addStep(trace, 6, "Main.main()", `Reads integer value <code>${marks}</code>.`, vars, out);
    
    let grade = "F";
    addStep(trace, 8, "Main.main()", `Checks condition <code>marks >= 90</code> (${marks} >= 90).`, vars, out);
    if (marks >= 90) {
        grade = "A";
        addStep(trace, 8, "Main.main()", "Condition met. Sets grade to 'A'.", vars, out);
    } else {
        addStep(trace, 9, "Main.main()", `Checks condition <code>marks >= 75</code> (${marks} >= 75).`, vars, out);
        if (marks >= 75) {
            grade = "B";
            addStep(trace, 9, "Main.main()", "Condition met. Sets grade to 'B'.", vars, out);
        } else {
            addStep(trace, 10, "Main.main()", `Checks condition <code>marks >= 60</code> (${marks} >= 60).`, vars, out);
            if (marks >= 60) {
                grade = "C";
                addStep(trace, 10, "Main.main()", "Condition met. Sets grade to 'C'.", vars, out);
            } else {
                grade = "F";
                addStep(trace, 11, "Main.main()", "All checks failed. Default sets grade to 'F'.", vars, out);
            }
        }
    }
    
    vars.grade = { type: "String", value: `"${grade}"` };
    out += `Grade: ${grade}\n`;
    addStep(trace, 12, "Main.main()", "Prints grade details onto console.", vars, out);
    
    out += "\nMultiplication table for 5:\n";
    addStep(trace, 13, "Main.main()", "Prints header text.", vars, out);
    
    // table loop
    for (let i = 1; i <= 10; i++) {
        vars.i = { type: "int", value: i };
        addStep(trace, 14, "Main.main()", `Loop: i = ${i}, prints row product.`, vars, out);
        out += `5 x ${i} = ${5 * i}\n`;
    }
    
    delete vars.i;
    addStep(trace, 15, "Main.main()", "Closes scanner and program exits.", vars, out);
    return trace;
};

// Java Exp 3: Average (java-arrays-average)
window.customTracers["java-arrays-average"] = function(tokens, code, lines, stdinText) {
    const trace = [];
    let n = tokens[0] ? Number(tokens[0]) : 3;
    if (isNaN(n) || n < 1) n = 3;
    if (n > 5) n = 5;
    
    const elements = [];
    for (let i = 0; i < n; i++) {
        let el = tokens[i + 1] ? Number(tokens[i + 1]) : (i + 1) * 10;
        if (isNaN(el)) el = (i + 1) * 10;
        elements.push(el);
    }
    const sum = elements.reduce((t, v) => t + v, 0);
    const avg = sum / n;

    let out = "";
    const vars = { n: { type: "int", value: "?" } };
    addStep(trace, 3, "Main.main()", "JVM executes entry main method.", vars, out);
    addStep(trace, 4, "Main.main()", "Instantiates scanner stream.", vars, out);
    
    out += "Enter number of elements: ";
    addStep(trace, 5, "Main.main()", "Prompts for array size count.", vars, out);
    
    vars.n.value = n;
    out += n + "\n"; // Echo input
    addStep(trace, 6, "Main.main()", `Reads array size count <code>n = ${n}</code>.`, vars, out);
    
    vars.numbers = { type: "int[]", value: `new int[${n}]` };
    addStep(trace, 7, "Main.main()", `Allocates heap space for integer array of size <code>${n}</code>.`, vars, out);
    vars.sum = { type: "int", value: 0 };
    addStep(trace, 8, "Main.main()", "Initializes accumulator variable <code>sum = 0</code>.", vars, out);
    
    out += "Enter the elements:\n";
    addStep(trace, 10, "Main.main()", "Outputs elements guidelines text prompt.", vars, out);
    
    out += elements.join(" ") + "\n"; // Echo inputs
    
    const arrState = new Array(n).fill(0);
    let curSum = 0;
    for (let i = 0; i < n; i++) {
        vars.i = { type: "int", value: i };
        arrState[i] = elements[i];
        vars.numbers.value = "[" + arrState.join(", ") + "]";
        addStep(trace, 12, "Main.main()", `Reads element <code>${elements[i]}</code> into index slot <code>numbers[${i}]</code>.`, vars, out);
        
        curSum += elements[i];
        vars.sum.value = curSum;
        addStep(trace, 13, "Main.main()", `Adds value to <code>sum</code> accumulator variable (new sum value: ${curSum}).`, vars, out);
    }
    
    delete vars.i;
    vars.average = { type: "double", value: avg };
    addStep(trace, 16, "Main.main()", `Calculates average: <code>sum / n</code> (${sum} / ${n} = ${avg}).`, vars, out);
    
    out += `Average = ${avg}\n`;
    addStep(trace, 17, "Main.main()", "Outputs calculated average details onto console.", vars, out);
    addStep(trace, 18, "Main.main()", "Closes scanner and exits.", vars, out);
    
    return trace;
};

// Java Exp 4: Inheritance & Polymorphism (java-exp4)
window.customTracers["java-exp4"] = function(tokens, code, lines, stdinText) {
    const trace = [];
    let out = "";
    
    addStep(trace, 15, "Main.main()", "JVM executes entry main method.", {}, out);
    
    const vars = {
        animals: { type: "Animal[]", value: "new Animal[3]" }
    };
    addStep(trace, 16, "Main.main()", "Instantiates Polymorphic array container storing dynamic instances (Dog, Cat, Dog) on the heap.", vars, out);
    
    // Rex speak
    addStep(trace, 17, "Main.main()", "Iterates array: calls overridden method <code>speak()</code> on index 0 (Dog 'Rex').", vars, out);
    out += "Rex says: Woof!\n";
    addStep(trace, 9, "Main.Dog.speak()", "Outputs Dog overridden speak message.", {}, out);
    
    // Whiskers speak
    addStep(trace, 17, "Main.main()", "Iterates array: calls overridden method <code>speak()</code> on index 1 (Cat 'Whiskers').", vars, out);
    out += "Whiskers says: Meow!\n";
    addStep(trace, 13, "Main.Cat.speak()", "Outputs Cat overridden speak message.", {}, out);
    
    // Buddy speak
    addStep(trace, 17, "Main.main()", "Iterates array: calls overridden method <code>speak()</code> on index 2 (Dog 'Buddy').", vars, out);
    out += "Buddy says: Woof!\n";
    addStep(trace, 9, "Main.Dog.speak()", "Outputs Dog overridden speak message.", {}, out);
    
    return trace;
};

// Java Exp 5: Interfaces & Abstract Classes (java-exp5)
window.customTracers["java-exp5"] = function(tokens, code, lines, stdinText) {
    const trace = [];
    let out = "";
    
    addStep(trace, 19, "Main.main()", "JVM executes entry main method.", {}, out);
    addStep(trace, 20, "Main.main()", "Instantiates Circle object implementing Drawable and Resizable interfaces (radius = 5.0).", { "c.radius": { type: "double", value: 5.0 } }, out);
    
    addStep(trace, 21, "Main.main()", "Calls interface method implementation <code>c.draw()</code>.", {}, out);
    out += "Drawing circle r=5.0\n";
    addStep(trace, 11, "Main.Circle.draw()", "Outputs custom draw details.", {}, out);
    
    addStep(trace, 22, "Main.main()", "Calls interface method implementation <code>c.resize(2.0)</code>.", {}, out);
    out += "Resized to r=10.0\n";
    addStep(trace, 12, "Main.Circle.resize()", "Resizes radius class member dynamically (5.0 * 2.0 = 10.0) and prints output.", {}, out);
    
    addStep(trace, 23, "Main.main()", "Calls interface default method implementation <code>c.getColor()</code>.", {}, out);
    addStep(trace, 5, "Main.Drawable.getColor()", "Inherits interface default method execution. Returns 'Black'.", {}, out);
    out += "Color: Black\n";
    addStep(trace, 23, "Main.main()", "Prints default color output details.", {}, out);
    
    addStep(trace, 24, "Main.main()", "Creates ElectricCar object (extending abstract class Vehicle) and calls <code>describe()</code>.", {}, out);
    addStep(trace, 16, "Main.Vehicle.describe()", "Enters abstract class helper method. Calls abstract method implementation <code>getFuelType()</code> dynamically.", {}, out);
    addStep(trace, 18, "Main.ElectricCar.getFuelType()", "Jumps to overridden child abstract implementation. Returns 'Electricity'.", {}, out);
    out += "Vehicle runs on: Electricity\n";
    addStep(trace, 16, "Main.Vehicle.describe()", "Outputs final vehicle description string.", {}, out);
    
    return trace;
};

// Java Exp 6: Exceptions (java-exp6)
window.customTracers["java-exp6"] = function(tokens, code, lines, stdinText) {
    const trace = [];
    let a = tokens[0] ? Number(tokens[0]) : 10;
    let b = tokens[1] ? Number(tokens[1]) : -2;
    if (isNaN(a)) a = 10;
    if (isNaN(b)) b = -2;

    let out = "";
    const vars = { a: { type: "int", value: "?" }, b: { type: "int", value: "?" } };
    addStep(trace, 13, "Main.main()", "JVM starts main method.", vars, out);
    addStep(trace, 14, "Main.main()", "Instantiates scanner stream.", vars, out);
    
    out += "Enter two integers (a b):\n";
    addStep(trace, 15, "Main.main()", "Prompts for integer inputs.", vars, out);
    
    vars.a.value = a;
    vars.b.value = b;
    out += `${a} ${b}\n`; // Echo input
    addStep(trace, 16, "Main.main()", `Reads <code>a = ${a}</code>, <code>b = ${b}</code>.`, vars, out);
    addStep(trace, 17, "Main.main()", "Enters try block scope.", vars, out);
    addStep(trace, 18, "Main.main()", `Calls helper method <code>divide(${a}, ${b})</code>.`, vars, out);
    
    addStep(trace, 7, "Main.divide()", `Checks exception condition: divisor <code>b < 0</code>.`, {}, out);
    if (b < 0) {
        addStep(trace, 8, "Main.divide()", `Divisor is negative! Throws custom exception <code>NegativeException(\"Divisor cannot be negative!\")</code>.`, {}, out);
        addStep(trace, 20, "Main.main()", "Catches Custom Error exception block.", vars, out);
        out += "Custom Error: Divisor cannot be negative!\n";
        addStep(trace, 21, "Main.main()", "Outputs exception error message details.", vars, out);
    } else if (b === 0) {
        addStep(trace, 9, "Main.divide()", "Implicitly triggers JVM ArithmeticException: Division by zero.", {}, out);
        addStep(trace, 19, "Main.main()", "Catches ArithmeticException block.", vars, out);
        out += "Math Error: / by zero\n";
        addStep(trace, 19, "Main.main()", "Outputs math exception details.", vars, out);
    } else {
        const res = Math.floor(a / b);
        addStep(trace, 9, "Main.divide()", `Divides inputs: <code>${a} / ${b}</code> = ${res}.`, {}, out);
        out += `Result: ${res}\n`;
        addStep(trace, 18, "Main.main()", "Outputs calculation result details.", vars, out);
    }
    
    out += "finally block executed.\n";
    addStep(trace, 23, "Main.main()", "Executes finally block cleanups.", vars, out);
    
    return trace;
};

// Java Exp 7: Strings (java-exp7)
window.customTracers["java-exp7"] = function(tokens, code, lines, stdinText) {
    const trace = [];
    let sentence = stdinText.trim() || "Virtual Lab Platform";

    let out = "";
    const vars = { s: { type: "String", value: "?" } };
    addStep(trace, 4, "Main.main()", "JVM executes entry main method.", vars, out);
    addStep(trace, 5, "Main.main()", "Instantiates scanner stream.", vars, out);
    
    out += "Enter a sentence:\n";
    addStep(trace, 6, "Main.main()", "Prompts for string input.", vars, out);
    
    vars.s.value = `"${sentence}"`;
    out += sentence + "\n"; // Echo input
    addStep(trace, 7, "Main.main()", `Reads sentence string <code>"${sentence}"</code>.`, vars, out);
    
    const len = sentence.length;
    out += `Length: ${len}\n`;
    addStep(trace, 8, "Main.main()", `Evaluates string length: <code>s.length()</code> (${len}).`, vars, out);
    
    const upper = sentence.toUpperCase();
    out += `Uppercase: ${upper}\n`;
    addStep(trace, 9, "Main.main()", `Evaluates uppercase conversion: <code>s.toUpperCase()</code>.`, vars, out);
    
    const words = sentence.trim().split(/\s+/).filter(Boolean).length;
    out += `Words: ${words}\n`;
    addStep(trace, 10, "Main.main()", `Splits string by whitespaces and counts word tokens (${words}).`, vars, out);
    
    const reversed = sentence.split("").reverse().join("");
    out += `Reversed: ${reversed}\n`;
    addStep(trace, 11, "Main.main()", `Uses <code>StringBuilder</code> helper to reverse string.`, vars, out);
    
    return trace;
};

// Java Exp 8: Collections (java-exp8)
window.customTracers["java-exp8"] = function(tokens, code, lines, stdinText) {
    const trace = [];
    let out = "";
    
    const vars = {
        words: { type: "String[]", value: "[apple, banana, apple, cherry, banana, apple]" }
    };
    
    addStep(trace, 4, "Main.main()", "JVM starts main method. Sets static array strings.", vars, out);
    
    vars.freq = { type: "Map<String,Integer>", value: "{ apple: 3, banana: 2, cherry: 1 }" };
    addStep(trace, 6, "Main.main()", "Iterates array elements, adding entries and updating counters in Map.", vars, out);
    
    out += "Word Frequencies:\n  apple: 3\n  banana: 2\n  cherry: 1\n";
    addStep(trace, 10, "Main.main()", "Loops map key-value elements, printing counted occurrences.", vars, out);
    
    vars.set = { type: "Set<Integer>", value: "[1, 2, 3, 4]" };
    addStep(trace, 12, "Main.main()", "Adds duplicates array elements into Set, automatically filtering duplicate values.", vars, out);
    
    out += "\nUnique values: [1, 2, 3, 4]\n";
    addStep(trace, 13, "Main.main()", "Prints unique set elements details.", vars, out);
    
    vars.list = { type: "List<String>", value: "[Zebra, Apple, Mango]" };
    addStep(trace, 15, "Main.main()", "Initializes list.", vars, out);
    
    vars.list.value = "[Apple, Mango, Zebra]";
    addStep(trace, 16, "Main.main()", "Calls <code>Collections.sort</code> to sort list alphabetically.", vars, out);
    
    out += "Sorted: [Apple, Mango, Zebra]\n";
    addStep(trace, 17, "Main.main()", "Outputs sorted list values.", vars, out);
    
    return trace;
};

// Java Exp 9: Multithreading (java-exp9)
window.customTracers["java-exp9"] = function(tokens, code, lines, stdinText) {
    const trace = [];
    let out = "";
    
    addStep(trace, 12, "Main.main()", "JVM starts main method.", {}, out);
    addStep(trace, 13, "Main.main()", "Creates instance `t1` of Thread wrapping Counter-A task (run limit: 5).", { t1: { type: "Thread", value: "Runnable-A" } }, out);
    addStep(trace, 14, "Main.main()", "Creates instance `t2` of Thread wrapping Counter-B task (run limit: 5).", { t1: { type: "Thread", value: "Runnable-A" }, t2: { type: "Thread", value: "Runnable-B" } }, out);
    
    addStep(trace, 15, "Main.main()", "Spawns and executes parallel threads using <code>start()</code>.", {}, out);
    
    // Simulate interleaved threads logs
    addStep(trace, 6, "Main.Counter.run()", "Thread-A starts executing concurrent loop.", {}, out);
    out += "Thread-A: 1\n";
    addStep(trace, 7, "Main.Counter.run()", "Thread-A logs count 1, then sleeps 100ms.", {}, out);
    
    addStep(trace, 6, "Main.Counter.run()", "Thread-B starts executing concurrent loop.", {}, out);
    out += "Thread-B: 1\n";
    addStep(trace, 7, "Main.Counter.run()", "Thread-B logs count 1, then sleeps 100ms.", {}, out);
    
    out += "Thread-A: 2\nThread-B: 2\nThread-A: 3\nThread-B: 3\nThread-A: 4\nThread-B: 4\nThread-A: 5\nThread-B: 5\n";
    addStep(trace, 7, "Main.Counter.run()", "Threads run loops concurrently, printing counts up to 5.", {}, out);
    
    addStep(trace, 16, "Main.main()", "Blocks caller thread until both threads finish using <code>join()</code>.", {}, out);
    out += "Both threads completed!\n";
    addStep(trace, 17, "Main.main()", "Threads finished execution. Prints completion notification.", {}, out);
    
    return trace;
};

// Java Exp 10: Lambdas & Streams (java-exp10)
window.customTracers["java-exp10"] = function(tokens, code, lines, stdinText) {
    const trace = [];
    let out = "";
    
    addStep(trace, 6, "Main.main()", "JVM executes entry main method.", {}, out);
    
    out += "Pair: (Hello, World)\n";
    addStep(trace, 7, "Main.main()", "Invokes generic compiler helper method <code>printPair(\"Hello\", \"World\")</code>.", {}, out);
    
    out += "Pair: (42, 99)\n";
    addStep(trace, 8, "Main.main()", "Invokes generic method <code>printPair(42, 99)</code>.", {}, out);
    
    const vars = {
        nums: { type: "List<Integer>", value: "[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]" }
    };
    addStep(trace, 10, "Main.main()", "Initializes numbers list.", vars, out);
    
    vars.evens = { type: "List<Integer>", value: "[4, 16, 36, 64, 100]" };
    addStep(trace, 11, "Main.main()", "Runs Streams API pipeline: filters evens, maps to squares, and collects to list.", vars, out);
    
    out += "Even squares: [4, 16, 36, 64, 100]\n";
    addStep(trace, 14, "Main.main()", "Prints collected stream list result.", vars, out);
    
    out += "Sum 1-10: 55\n";
    addStep(trace, 17, "Main.main()", "Streams list: evaluates sum using reduction accumulator.", vars, out);
    
    out += "10\n9\n8\n";
    addStep(trace, 20, "Main.main()", "Streams list: sorts in reverse order, limits count to 3, and prints elements.", vars, out);
    
    return trace;
};

// ===================================================================
// PYTHON PROGRAMMING TRACERS (31 to 40)
// ===================================================================

// Python Exp 1: f-strings (python-input-fstrings)
window.customTracers["python-input-fstrings"] = function(tokens, code, lines, stdinText) {
    const trace = [];
    let name = tokens[0] || "User";
    let age = tokens[1] ? Number(tokens[1]) : 20;
    if (isNaN(age)) age = 20;

    let out = "";
    const vars = {};
    
    out += "Enter your name: ";
    out += name + "\n"; // Echo input
    vars.name = { type: "str", value: `"${name}"` };
    addStep(trace, 0, "<module>", `Prompts name. Reads input string <code>"${name}"</code>.`, vars, out);
    
    out += "Enter your age: ";
    out += age + "\n"; // Echo input
    vars.age = { type: "int", value: age };
    addStep(trace, 1, "<module>", `Prompts age. Reads input string and casts to integer <code>${age}</code>.`, vars, out);
    
    out += `Hello {name}!\n`.replace("{name}", name);
    addStep(trace, 3, "<module>", "Outputs greeting f-string mapping string variables.", vars, out);
    
    out += `In 5 years, you will be ${age + 5} years old.\n`;
    addStep(trace, 4, "<module>", `Outputs f-string evaluating math expression inline (${age} + 5).`, vars, out);
    
    return trace;
};

// Python Exp 2: Control Flow (python-exp2)
window.customTracers["python-exp2"] = function(tokens, code, lines, stdinText) {
    const trace = [];
    let marks = tokens[0] ? Number(tokens[0]) : 88;
    if (isNaN(marks)) marks = 88;

    let out = "";
    const vars = { marks: { type: "int", value: "?" } };
    
    out += "Enter marks (0-100): ";
    out += marks + "\n"; // Echo input
    vars.marks.value = marks;
    addStep(trace, 0, "<module>", `Reads marks integer input <code>${marks}</code>.`, vars, out);
    
    let grade = "F";
    addStep(trace, 1, "<module>", `Checks condition <code>marks >= 90</code> (${marks} >= 90).`, vars, out);
    if (marks >= 90) {
        grade = "A";
        out += "Grade: A\n";
        addStep(trace, 2, "<module>", "Prints Grade A.", vars, out);
    } else {
        addStep(trace, 3, "<module>", `Checks condition <code>marks >= 75</code> (${marks} >= 75).`, vars, out);
        if (marks >= 75) {
            grade = "B";
            out += "Grade: B\n";
            addStep(trace, 4, "<module>", "Prints Grade B.", vars, out);
        } else {
            addStep(trace, 5, "<module>", `Checks condition <code>marks >= 60</code> (${marks} >= 60).`, vars, out);
            if (marks >= 60) {
                grade = "C";
                out += "Grade: C\n";
                addStep(trace, 6, "<module>", "Prints Grade C.", vars, out);
            } else {
                grade = "F";
                out += "Grade: F\n";
                addStep(trace, 8, "<module>", "Prints Grade F.", vars, out);
            }
        }
    }
    
    out += "\nPrime numbers up to 30:\n";
    addStep(trace, 10, "<module>", "Prints output header.", vars, out);
    
    const primes = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29];
    out += primes.join(" ") + " \n";
    addStep(trace, 11, "<module>", "Runs loops checking divisibility up to square root to print primes list.", vars, out);
    
    return trace;
};

// Python Exp 3: Lists & Tuples (python-exp3)
window.customTracers["python-exp3"] = function(tokens, code, lines, stdinText) {
    const trace = [];
    let out = "";
    const vars = {
        fruits: { type: "list", value: "['banana', 'apple', 'cherry', 'mango']" }
    };
    
    addStep(trace, 1, "<module>", "Execution starts. Initializes string list.", vars, out);
    
    out += "Original: ['banana', 'apple', 'cherry', 'mango']\n";
    addStep(trace, 2, "<module>", "Prints list.", vars, out);
    
    vars.fruits.value = "['banana', 'apple', 'cherry', 'mango', 'grape']";
    addStep(trace, 3, "<module>", "Appends element <code>'grape'</code> to list.", vars, out);
    
    vars.fruits.value = "['apple', 'banana', 'cherry', 'grape', 'mango']";
    addStep(trace, 4, "<module>", "Sorts list alphabetically.", vars, out);
    
    out += "Sorted: ['apple', 'banana', 'cherry', 'grape', 'mango']\n";
    addStep(trace, 5, "<module>", "Prints sorted list.", vars, out);
    
    out += "Slice [1:3]: ['banana', 'cherry']\n";
    addStep(trace, 6, "<module>", "Slices list elements from index 1 to 3 (exclusive).", vars, out);
    
    out += "Reversed: ['mango', 'grape', 'cherry', 'banana', 'apple']\n";
    addStep(trace, 7, "<module>", "Outputs reversed list using step slicing <code>[::-1]</code>.", vars, out);
    
    vars.coords = { type: "tuple", value: "(10, 20, 30)" };
    addStep(trace, 9, "<module>", "Creates immutable tuple coords.", vars, out);
    
    out += "\nTuple: (10, 20, 30)\n";
    addStep(trace, 11, "<module>", "Outputs tuple.", vars, out);
    
    out += "Sum: 60\n";
    addStep(trace, 12, "<module>", "Sums tuple values using <code>sum()</code>.", vars, out);
    
    vars.x = { type: "int", value: 10 };
    vars.y = { type: "int", value: 20 };
    vars.z = { type: "int", value: 30 };
    out += "Unpacked: x=10, y=20, z=30\n";
    addStep(trace, 13, "<module>", "Unpacks tuple values into variables x, y, z.", vars, out);
    
    vars.squares = { type: "list", value: "[1, 4, 9, 16, 25]" };
    out += "\nSquares: [1, 4, 9, 16, 25]\n";
    addStep(trace, 16, "<module>", "Generates list values using list comprehension.", vars, out);
    
    return trace;
};

// Python Exp 4: Aggregation (python-lists-aggregation)
window.customTracers["python-lists-aggregation"] = function(tokens, code, lines, stdinText) {
    const trace = [];
    let listVals = tokens.map(t => Number(t)).filter(t => !isNaN(t));
    if (listVals.length === 0) listVals = [5, 15, 2];
    const sumVal = listVals.reduce((a, b) => a + b, 0);
    const maxVal = Math.max(...listVals);

    let out = "";
    const vars = { raw_values: { type: "str", value: "?" } };
    
    out += "Enter space-separated numbers: ";
    vars.raw_values.value = `"${tokens.join(" ")}"`;
    out += tokens.join(" ") + "\n"; // Echo input
    addStep(trace, 0, "<module>", `Reads space-separated string from console input.`, vars, out);
    
    vars.numbers = { type: "list", value: "[" + listVals.join(", ") + "]" };
    addStep(trace, 1, "<module>", "Runs list comprehension converting split string tokens into integers list.", vars, out);
    
    out += `Numbers: [${listVals.join(", ")}]\n`;
    addStep(trace, 3, "<module>", "Outputs values list.", vars, out);
    
    out += `Sum = ${sumVal}\n`;
    addStep(trace, 4, "<module>", `Outputs sum aggregates using <code>sum()</code> (${sumVal}).`, vars, out);
    
    out += `Maximum = ${maxVal}\n`;
    addStep(trace, 5, "<module>", `Outputs maximum element using <code>max()</code> (${maxVal}).`, vars, out);
    
    return trace;
};

// Python Exp 5: Functions & Decorators (python-exp5)
window.customTracers["python-exp5"] = function(tokens, code, lines, stdinText) {
    const trace = [];
    let out = "";
    
    addStep(trace, 19, "<module>", "Starts script. Registers function mappings in namespace scope.", {}, out);
    
    addStep(trace, 19, "<module>", "Calls function <code>greet('Alice')</code>.", {}, out);
    addStep(trace, 1, "greet()", "Enters function. Returns greeting string using default parameter value.", { name: { type: "str", value: '"Alice"' }, greeting: { type: "str", value: '"Hello"' } }, out);
    out += "Hello, Alice!\n";
    addStep(trace, 19, "<module>", "Prints returned greeting details.", {}, out);
    
    addStep(trace, 20, "<module>", "Calls function <code>greet('Bob', 'Hi')</code>.", {}, out);
    addStep(trace, 1, "greet()", "Enters function. Returns greeting string using custom parameter arguments.", { name: { type: "str", value: '"Bob"' }, greeting: { type: "str", value: '"Hi"' } }, out);
    out += "Hi, Bob!\n";
    addStep(trace, 20, "<module>", "Prints returned greeting.", {}, out);
    
    addStep(trace, 21, "<module>", "Calls sum function using arbitrary arguments <code>total(1, 2, 3, 4, 5)</code>.", {}, out);
    addStep(trace, 4, "total()", "Enters function. Bundles arguments into tuple variable <code>args</code> and returns sum.", { args: { type: "tuple", value: "(1, 2, 3, 4, 5)" } }, out);
    out += "Total: 15\n";
    addStep(trace, 21, "<module>", "Prints returned total values sum.", {}, out);
    
    addStep(trace, 22, "<module>", "Calls profile function using keyword arguments <code>profile(...)</code>.", {}, out);
    const kwVars = { kwargs: { type: "dict", value: "{ name: 'Alice', age: 21, gpa: 3.9 }" } };
    addStep(trace, 7, "profile()", "Enters function. Bundles keywords arguments into dictionary variable <code>kwargs</code>.", kwVars, out);
    out += "  name: Alice\n  age: 21\n  gpa: 3.9\n";
    addStep(trace, 8, "profile()", "Loops and prints key-value items details.", kwVars, out);
    
    addStep(trace, 23, "<module>", "Calls decorated function <code>add(10, 20)</code>.", {}, out);
    addStep(trace, 11, "wrapper()", "Enters decorator wrapper function. Logs execution entry details.", {}, out);
    out += "Calling add...\n";
    addStep(trace, 12, "wrapper()", "Invokes wrapped target function add(a, b).", {}, out);
    addStep(trace, 17, "add()", "Enters target function. Returns sum (10 + 20 = 30).", { a: { type: "int", value: 10 }, b: { type: "int", value: 20 } }, out);
    out += "Done!\n";
    addStep(trace, 13, "wrapper()", "Wrapped function completed successfully. Destructor logs exit.", {}, out);
    out += "Add result: 30\n";
    addStep(trace, 23, "<module>", "Prints final addition values result.", {}, out);
    
    return trace;
};

// Python Exp 6: Object-Oriented (python-exp6)
window.customTracers["python-exp6"] = function(tokens, code, lines, stdinText) {
    const trace = [];
    let out = "";
    
    addStep(trace, 18, "<module>", "Starts script. Registers classes Animal, Dog, Cat, and BankAccount.", {}, out);
    addStep(trace, 18, "<module>", "Instantiates Polymorphic list of Animal subclass objects.", { animals: { type: "list", value: "[Dog object, Cat object, Dog object]" } }, out);
    
    // Rex speak
    addStep(trace, 19, "<module>", "Iterates list: calls method <code>speak()</code> on index 0 (Dog 'Rex').", {}, out);
    addStep(trace, 9, "Dog.speak()", "Outputs Dog overridden speak message.", {}, out);
    out += "Rex says Woof!\n";
    addStep(trace, 20, "<module>", "Prints animal speak response.", {}, out);
    
    // Whiskers speak
    addStep(trace, 19, "<module>", "Iterates list: calls method <code>speak()</code> on index 1 (Cat 'Whiskers').", {}, out);
    addStep(trace, 12, "Cat.speak()", "Outputs Cat overridden speak message.", {}, out);
    out += "Whiskers says Meow!\n";
    addStep(trace, 20, "<module>", "Prints animal speak response.", {}, out);
    
    // Buddy speak
    addStep(trace, 19, "<module>", "Iterates list: calls method <code>speak()</code> on index 2 (Dog 'Buddy').", {}, out);
    addStep(trace, 9, "Dog.speak()", "Outputs Dog overridden speak message.", {}, out);
    out += "Buddy says Woof!\n";
    addStep(trace, 20, "<module>", "Prints animal speak response.", {}, out);
    
    const vars = {
        "acc.owner": { type: "str", value: '"Alice"' },
        "acc._BankAccount__balance": { type: "int", value: 1000 }
    };
    addStep(trace, 22, "<module>", "Creates BankAccount object (owner: 'Alice', initial balance: 1000).", vars, out);
    
    vars["acc._BankAccount__balance"].value = 1500;
    addStep(trace, 23, "<module>", "Deposits money value dynamically (1000 + 500 = 1500).", vars, out);
    addStep(trace, 16, "BankAccount.deposit()", "Increments private balance attribute.", {}, out);
    
    out += "\nAlice's balance: 1500\n";
    addStep(trace, 24, "<module>", "Prints account owner name and checks private balance via property getter.", vars, out);
    
    return trace;
};

// Python Exp 7: File & JSON (python-exp7)
window.customTracers["python-exp7"] = function(tokens, code, lines, stdinText) {
    const trace = [];
    let out = "";
    
    addStep(trace, 3, "<module>", "Execution starts.", {}, out);
    addStep(trace, 4, "<module>", "Opens file <code>students.txt</code> in write mode (<code>\"w\"</code>) using context manager.", {}, out);
    addStep(trace, 5, "<module>", "Writes name entries string to file.", {}, out);
    
    out += "File contents:\n  Alice\n  Bob\n  Carol\n";
    addStep(trace, 10, "<module>", "Opens file in read mode (<code>\"r\"</code>), loops lines, strips newlines, and prints them.", { line: { type: "str", value: '"Carol\\n"' } }, out);
    
    const vars = {
        data: { type: "dict", value: "{ name: 'Alice', age: 21, courses: ['CS101', 'CS201'] }" }
    };
    addStep(trace, 14, "<module>", "Initializes serialization data dictionary.", vars, out);
    
    const jsonStr = '{\n  "name": "Alice",\n  "age": 21,\n  "courses": [\n    "CS101",\n    "CS201"\n  ]\n}';
    vars.json_str = { type: "str", value: "JSON representation string" };
    addStep(trace, 15, "<module>", "Serializes dictionary to JSON string using <code>json.dumps()</code>.", vars, out);
    
    out += "\nJSON String:\n" + jsonStr + "\n";
    addStep(trace, 16, "<module>", "Outputs serialized JSON string details.", vars, out);
    
    vars.parsed = { type: "dict", value: "{ name: 'Alice', age: 21, courses: ['CS101', 'CS201'] }" };
    addStep(trace, 18, "<module>", "Deserializes JSON string back into python dictionary using <code>json.loads()</code>.", vars, out);
    
    out += "\nParsed name: Alice\nCourses: ['CS101', 'CS201']\n";
    addStep(trace, 19, "<module>", "Outputs values fetched from parsed JSON data.", vars, out);
    
    return trace;
};

// Python Exp 8: Exception Handling (python-exp8)
window.customTracers["python-exp8"] = function(tokens, code, lines, stdinText) {
    const trace = [];
    let a = tokens[0] ? Number(tokens[0]) : 9;
    let b = tokens[1] ? Number(tokens[1]) : 2;
    if (isNaN(a)) a = 9;
    if (isNaN(b)) b = 2;

    let out = "";
    const vars = { a: { type: "float", value: "?" }, b: { type: "float", value: "?" } };
    addStep(trace, 9, "<module>", "Starts exception handling wrapper try block.", vars, out);
    
    out += "Enter first number: ";
    out += a + "\n"; // Echo input
    vars.a.value = a;
    addStep(trace, 10, "<module>", `Reads float input <code>a = ${a}</code>.`, vars, out);
    
    out += "Enter second number: ";
    out += b + "\n"; // Echo input
    vars.b.value = b;
    addStep(trace, 11, "<module>", `Reads float input <code>b = ${b}</code>.`, vars, out);
    
    addStep(trace, 12, "<module>", `Attempts division: <code>a / b</code> (${a} / ${b}).`, vars, out);
    if (b === 0) {
        addStep(trace, 12, "<module>", "Divisor is zero! Triggers ZeroDivisionError.", vars, out);
        addStep(trace, 14, "<module>", "Enters ZeroDivisionError catch block.", vars, out);
        out += "Error: Cannot divide by zero!\n";
        addStep(trace, 15, "<module>", "Outputs division by zero message.", vars, out);
    } else {
        const div = a / b;
        out += `Division: ${div.toFixed(4)}\n`;
        addStep(trace, 12, "<module>", `Prints division output successfully.`, vars, out);
        
        addStep(trace, 13, "<module>", `Calls safe square root function: <code>safe_sqrt(${a})</code>.`, vars, out);
        addStep(trace, 5, "safe_sqrt()", `Checks constraint condition: <code>n < 0</code> (${a} < 0).`, { n: { type: "float", value: a } }, out);
        if (a < 0) {
            addStep(trace, 6, "safe_sqrt()", `Throws custom exception <code>NegativeValueError(${a})</code>.`, { n: { type: "float", value: a } }, out);
            addStep(trace, 18, "<module>", "Enters custom NegativeValueError catch block.", vars, out);
            out += `Custom Error: Negative value not allowed: ${a}\n`;
            addStep(trace, 19, "<module>", "Outputs custom exception message.", vars, out);
        } else {
            const root = Math.sqrt(a);
            addStep(trace, 7, "safe_sqrt()", "Returns square root calculation value.", { n: { type: "float", value: a } }, out);
            out += `Sqrt(a): ${root.toFixed(4)}\n`;
            addStep(trace, 13, "<module>", "Prints square root output details.", vars, out);
            
            out += "All operations successful!\n";
            addStep(trace, 21, "<module>", "Enters else block (runs when no exceptions are thrown).", vars, out);
        }
    }
    
    out += "Program execution complete.\n";
    addStep(trace, 23, "<module>", "Enters finally block (guaranteed loop cleanup execution).", vars, out);
    
    return trace;
};

// Python Exp 9: Comprehensions & Generators (python-exp9)
window.customTracers["python-exp9"] = function(tokens, code, lines, stdinText) {
    const trace = [];
    let out = "";
    
    addStep(trace, 3, "<module>", "Execution starts.", {}, out);
    addStep(trace, 3, "<module>", "Declares numbers range variable <code>nums</code>.", { nums: { type: "range", value: "range(1, 11)" } }, out);
    
    const vars = {
        nums: { type: "range", value: "range(1, 11)" },
        squares: { type: "list", value: "[1, 4, 9, 16, 25, 36, 49, 64, 81, 100]" }
    };
    out += "Squares: [1, 4, 9, 16, 25, 36, 49, 64, 81, 100]\n";
    addStep(trace, 6, "<module>", "Generates squares using list comprehension.", vars, out);
    
    vars.evens = { type: "list", value: "[2, 4, 6, 8, 10]" };
    out += "Evens: [2, 4, 6, 8, 10]\n";
    addStep(trace, 9, "<module>", "Filters even numbers using conditional list comprehension.", vars, out);
    
    vars.sq_dict = { type: "dict", value: "{1: 1, 2: 4, 3: 9, 4: 16, 5: 25}" };
    out += "Square dict: {1: 1, 2: 4, 3: 9, 4: 16, 5: 25}\n";
    addStep(trace, 12, "<module>", "Generates key-value dictionary using dictionary comprehension.", vars, out);
    
    vars.unique = { type: "set", value: "{0, 1, 2, 3, 4}" };
    out += "Unique remainders mod 5: {0, 1, 2, 3, 4}\n";
    addStep(trace, 15, "<module>", "Generates set remainders using set comprehension.", vars, out);
    
    addStep(trace, 17, "<module>", "Registers generator function <code>fibonacci_gen</code>.", vars, out);
    addStep(trace, 23, "<module>", "Instantiates generator object <code>fib</code>.", vars, out);
    
    out += "First 10 Fibonacci: [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]\n";
    addStep(trace, 24, "<module>", "Calls <code>next()</code> on generator iteratively to produce list.", vars, out);
    
    return trace;
};

// Python Exp 10: Modules (python-exp10)
window.customTracers["python-exp10"] = function(tokens, code, lines, stdinText) {
    const trace = [];
    let out = "";
    
    addStep(trace, 7, "<module>", "Execution starts. Imports modules math, random, os, datetime, and Counter.", {}, out);
    
    out += "=== Math Module ===\npi = 3.1416\nsqrt(144) = 12.0\nceil(4.2) = 5\n";
    addStep(trace, 8, "<module>", "Outputs mathematical constants and function outputs.", {}, out);
    
    out += "\n=== Random Module ===\nrandint(1,100): 42\nShuffled: ['cherry', 'banana', 'apple']\n";
    addStep(trace, 13, "<module>", "Outputs random values and list shuffle modifications.", {}, out);
    
    const formattedDate = new Date().toLocaleString();
    out += `\n=== Datetime ===\nNow: ${formattedDate}\n`;
    addStep(trace, 18, "<module>", "Outputs date format conversions using strftime.", {}, out);
    
    return trace;
};
