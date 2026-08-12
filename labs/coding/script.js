const labData = {

    // ═══════════════════════════════════════════════════════════════════════
    // C PROGRAMMING
    // ═══════════════════════════════════════════════════════════════════════
    c: {
        name: "C Programming",
        experiments: [
            {
                id: "c-basic-io",
                title: "Experiment 1: Basic I/O and Arithmetic",
                aim: `
                    <p><strong>Objective:</strong> Learn the structure of a C program, use <code>printf</code> and <code>scanf</code>, and perform arithmetic operations.</p>
                    <ul>
                        <li>Write and execute a simple C program.</li>
                        <li>Read integer input and display formatted output.</li>
                        <li>Practice arithmetic expressions using variables.</li>
                    </ul>`,
                procedure: `
                    <table class="formal-table">
                        <thead><tr><th>Step</th><th>Description</th></tr></thead>
                        <tbody>
                            <tr><td>1</td><td>Open the <strong>Simulation</strong> tab and review the starter code.</td></tr>
                            <tr><td>2</td><td>Enter two integers in the stdin box, such as <code>15 25</code>.</td></tr>
                            <tr><td>3</td><td>Run the program and observe the sum displayed in the terminal.</td></tr>
                            <tr><td>4</td><td>Modify the code to test subtraction or multiplication.</td></tr>
                        </tbody>
                    </table>`,
                pretest: [
                    { q: "Which function is used to display output in C?", options: ["print()", "cout", "printf()", "echo()"], a: 2 },
                    { q: "Which format specifier is used for integers?", options: ["%f", "%d", "%c", "%s"], a: 1 },
                    { q: "Which header file is commonly used for scanf() and printf()?", options: ["<math.h>", "<stdio.h>", "<stdlib.h>", "<string.h>"], a: 1 }
                ],
                posttest: [
                    { q: "What does scanf(\"%d\", &a) store?", options: ["The value of a", "The address of a", "A string", "A float"], a: 0 },
                    { q: "What is the result of 7 / 2 in integer arithmetic in C?", options: ["3.5", "4", "3", "2"], a: 2 },
                    { q: "Which statement ends a C instruction?", options: ["Comma", "Colon", "Semicolon", "Period"], a: 2 }
                ],
                reference: `
                    <h4>Recommended References</h4>
                    <ul>
                        <li><em>The C Programming Language</em> by Kernighan and Ritchie.</li>
                        <li><a href="https://en.cppreference.com/w/c/language" target="_blank" rel="noreferrer">C language reference</a></li>
                    </ul>`,
                defaultCode: `#include <stdio.h>\n\nint main() {\n    int a, b;\n    printf("Enter two numbers:\\n");\n    scanf("%d %d", &a, &b);\n    printf("Sum = %d\\n", a + b);\n    return 0;\n}`,
                pistonLang: "c",
                pistonVersion: "10.2.0",
                explanations: `
                    <div class="explanation-block">
                        <h3>Code Breakdown & Logic</h3>
                        <div class="explanation-line-item">
                            <strong>#include &lt;stdio.h&gt;</strong>
                            <p>Tells the compiler to load the Standard Input/Output library, allowing you to use <code>printf</code> and <code>scanf</code>.</p>
                        </div>
                        <div class="explanation-line-item">
                            <strong>int main() { ... }</strong>
                            <p>The starting entry point of any C program. Execution starts here. Returns an integer code to the system when done.</p>
                        </div>
                        <div class="explanation-line-item">
                            <strong>int a, b;</strong>
                            <p>Allocates space in your machine memory for two separate whole-number variable placeholders named <code>a</code> and <code>b</code>.</p>
                        </div>
                        <div class="explanation-line-item">
                            <strong>scanf("%d %d", &a, &b);</strong>
                            <p>Pauses execution and checks your <strong>Standard Input (stdin)</strong> package. The <code>%d</code> format specifier expects decimal numbers, saving them directly into the memory addresses (<code>&</code>) of variables <code>a</code> and <code>b</code>.</p>
                        </div>
                    </div>
                    <div class="explanation-block" style="margin-top: 1.5rem;">
                        <h3>Memory Execution Simulation</h3>
                        <table class="formal-table" style="font-size:0.85rem; margin-top:0.5rem;">
                            <thead><tr><th>Variable</th><th>Type</th><th>Address</th><th>Value (Dry Run Sample)</th></tr></thead>
                            <tbody>
                                <tr><td>a</td><td>int</td><td>0x7ffd</td><td>15 (from input)</td></tr>
                                <tr><td>b</td><td>int</td><td>0x7ffe</td><td>25 (from input)</td></tr>
                                <tr><td>Output</td><td>Expression</td><td>Console</td><td>a + b = 40</td></tr>
                            </tbody>
                        </table>
                    </div>`
            },
            {
                id: "c-exp2",
                pistonLang: "c",
                pistonVersion: "10.2.0",
                title: "Control Structures: if-else and switch",
                aim: '<p><strong>Objective:</strong> Learn decision-making using if-else ladders and switch-case statements in C.</p><p><strong>Learning Outcomes:</strong></p><ul><li>Use if, else if, else for branching.</li><li>Use switch-case for menu-driven programs.</li><li>Understand fall-through behavior in switch.</li></ul>',
                procedure: '<table class="formal-table"><thead><tr><th>Step</th><th>Description</th></tr></thead><tbody><tr><td>1</td><td>Go to Simulation tab.</td></tr><tr><td>2</td><td>Enter a number in stdin to test if-else conditions.</td></tr><tr><td>3</td><td>Observe which branch executes.</td></tr><tr><td>4</td><td>Modify the code to test switch-case.</td></tr></tbody></table>',
                pretest: [
                    { q: "Which keyword ends a switch case?", options: ["exit", "end", "break", "stop"], a: 2 },
                    { q: "What executes if no case matches in switch?", options: ["first case", "nothing", "default", "error"], a: 2 },
                    { q: "Is else mandatory with if?", options: ["Yes", "No", "Only in loops", "Depends on compiler"], a: 1 },
                    { q: "Correct syntax for if in C?", options: ["if x > 0:", "if (x > 0)", "if [x > 0]", "if {x > 0}"], a: 1 },
                    { q: "Ternary operator in C?", options: ["if?else:", "a?b:c", "a:b?c", "#if"], a: 1 }
                ],
                posttest: [
                    { q: "Which statement transfers control out of a switch?", options: ["return", "break", "exit", "continue"], a: 1 },
                    { q: "Can switch operate on float in C?", options: ["Yes", "No", "Only double", "Only unsigned"], a: 1 },
                    { q: "Nested if means?", options: ["if inside if", "if with else", "switch inside if", "None"], a: 0 },
                    { q: "Value of x after: if(0) x=1; else x=2;", options: ["0", "1", "2", "undefined"], a: 2 },
                    { q: "Fall-through in switch means?", options: ["break skipped, next case runs", "default runs", "error occurs", "loop continues"], a: 0 }
                ],
                reference: '<ul><li><em>C Programming Absolute Beginner\'s Guide</em> – Dean Miller</li><li><a href="https://www.tutorialspoint.com/cprogramming/c_decision_making.htm" target="_blank">TutorialsPoint – Decision Making</a></li></ul>',
                defaultCode: '#include <stdio.h>\n\nint main() {\n    int num;\n    printf("Enter a number: ");\n    scanf("%d", &num);\n\n    if (num > 0)\n        printf("Positive\\n");\n    else if (num < 0)\n        printf("Negative\\n");\n    else\n        printf("Zero\\n");\n\n    switch(num % 2) {\n        case 0: printf("Even\\n"); break;\n        case 1:\n        case -1: printf("Odd\\n"); break;\n    }\n    return 0;\n}'
            },
            {
                id: "c-loops-pattern",
                title: "Experiment 2: Loops and Number Patterns",
                aim: `
                    <p><strong>Objective:</strong> Understand <code>for</code> loops by printing patterns and repeated output.</p>
                    <ul>
                        <li>Use loops to control repetition.</li>
                        <li>Build nested loops for simple pattern generation.</li>
                        <li>Trace loop counters carefully.</li>
                    </ul>`,
                procedure: `
                    <table class="formal-table">
                        <thead><tr><th>Step</th><th>Description</th></tr></thead>
                        <tbody>
                            <tr><td>1</td><td>Read the nested loop structure in the starter code.</td></tr>
                            <tr><td>2</td><td>Provide one integer input like <code>5</code>.</td></tr>
                            <tr><td>3</td><td>Run the program and inspect the triangle pattern.</td></tr>
                            <tr><td>4</td><td>Change the inner loop to print numbers instead of stars.</td></tr>
                        </tbody>
                    </table>`,
                pretest: [
                    { q: "Which loop is best suited when the number of iterations is known?", options: ["while", "for", "do-while", "switch"], a: 1 },
                    { q: "A nested loop means:", options: ["Two files", "A loop inside another loop", "A loop without braces", "A recursive function"], a: 1 },
                    { q: "Which keyword exits a loop immediately?", options: ["skip", "stop", "break", "return"], a: 2 }
                ],
                posttest: [
                    { q: "How many times does the inner loop run in a triangular pattern?", options: ["Same every row", "Depends on the outer loop value", "Never changes", "Only once"], a: 1 },
                    { q: "What is printed by a loop from i = 1 to i <= 3?", options: ["0 1 2", "1 2 3", "1 2", "0 1 2 3"], a: 1 },
                    { q: "Which statement skips to the next loop iteration?", options: ["continue", "break", "goto", "pass"], a: 0 }
                ],
                reference: `
                    <h4>Recommended References</h4>
                    <ul>
                        <li>Loop practice problems from standard C lab manuals.</li>
                        <li><a href="https://www.learn-c.org/" target="_blank" rel="noreferrer">Learn-C interactive tutorial</a></li>
                    </ul>`,
                defaultCode: `#include <stdio.h>\n\nint main() {\n    int rows;\n    printf("Enter number of rows: ");\n    scanf("%d", &rows);\n\n    for (int i = 1; i <= rows; i++) {\n        for (int j = 1; j <= i; j++) {\n            printf("* ");\n        }\n        printf("\\n");\n    }\n\n    return 0;\n}`,
                pistonLang: "c",
                pistonVersion: "10.2.0",
                explanations: `
                    <div class="explanation-block">
                        <h3>Nested Loop Logic Trace</h3>
                        <div class="explanation-line-item">
                            <strong>for (int i = 1; i &lt;= rows; i++)</strong>
                            <p>The <strong>Outer Loop</strong> controls rows. If you enter <code>3</code>, this loop tracks lines 1, 2, and 3.</p>
                        </div>
                        <div class="explanation-line-item">
                            <strong>for (int j = 1; j &lt;= i; j++)</strong>
                            <p>The <strong>Inner Loop</strong> controls elements written on the current row line. It runs exactly <code>i</code> times. So row 1 prints 1 star, row 2 prints 2 stars, etc.</p>
                        </div>
                        <div class="explanation-line-item">
                            <strong>printf("\\n");</strong>
                            <p>Crucial step! Moves execution down to the next text row line immediately after finishing the inner loop print run.</p>
                        </div>
                    </div>
                    <div class="explanation-block" style="margin-top: 1.5rem;">
                        <h3>Iteration Trace Matrix (Input: 3)</h3>
                        <table class="formal-table" style="font-size:0.8rem; margin-top:0.5rem;">
                            <thead><tr><th>Outer (i)</th><th>Inner Max (j)</th><th>Printed Block</th></tr></thead>
                            <tbody>
                                <tr><td>Row 1</td><td>Runs 1 time (j=1)</td><td>*</td></tr>
                                <tr><td>Row 2</td><td>Runs 2 times (j=1, j=2)</td><td>* *</td></tr>
                                <tr><td>Row 3</td><td>Runs 3 times (j=1, j=2, j=3)</td><td>* * *</td></tr>
                            </tbody>
                        </table>
                    </div>`
            },
            {
                id: "c-exp4",
                pistonLang: "c",
                pistonVersion: "10.2.0",
                title: "Functions and Recursion",
                aim: '<p><strong>Objective:</strong> Define and call functions in C, and understand recursive function calls.</p><p><strong>Learning Outcomes:</strong></p><ul><li>Write user-defined functions with parameters and return values.</li><li>Understand function prototypes.</li><li>Implement recursion for factorial and Fibonacci.</li></ul>',
                procedure: '<table class="formal-table"><thead><tr><th>Step</th><th>Description</th></tr></thead><tbody><tr><td>1</td><td>Enter a number n in stdin.</td></tr><tr><td>2</td><td>The program calls factorial(n) recursively.</td></tr><tr><td>3</td><td>Observe the call stack unwinding.</td></tr><tr><td>4</td><td>Modify to compute Fibonacci recursively.</td></tr></tbody></table>',
                pretest: [
                    { q: "What is a function prototype?", options: ["Function definition", "Function declaration", "Function call", "Function return"], a: 1 },
                    { q: "Base case in recursion is?", options: ["The first call", "The condition to stop recursion", "The return type", "None"], a: 1 },
                    { q: "Keyword to return a value from function?", options: ["send", "give", "return", "output"], a: 2 },
                    { q: "What is pass by value?", options: ["Passing address", "Passing copy of variable", "Passing pointer", "None"], a: 1 },
                    { q: "void return type means?", options: ["Returns 0", "Returns nothing", "Returns null", "Undefined"], a: 1 }
                ],
                posttest: [
                    { q: "Factorial of 0 is?", options: ["0", "1", "Undefined", "Error"], a: 1 },
                    { q: "Recursion without base case causes?", options: ["Slow loop", "Stack overflow", "Compile error", "Infinite output"], a: 1 },
                    { q: "Can a function call itself?", options: ["No", "Yes – recursion", "Only in main", "Only with pointers"], a: 1 },
                    { q: "Fibonacci(5) = ?", options: ["3", "5", "8", "13"], a: 1 },
                    { q: "Function with no parameters and no return?", options: ["int f(int)", "void f(void)", "int f()", "float f(float)"], a: 1 }
                ],
                reference: '<ul><li><em>C: The Complete Reference</em> – Herbert Schildt</li><li><a href="https://www.geeksforgeeks.org/recursion/" target="_blank">GeeksForGeeks – Recursion</a></li></ul>',
                defaultCode: '#include <stdio.h>\n\nlong long factorial(int n) {\n    if (n <= 1) return 1;\n    return n * factorial(n - 1);\n}\n\nint fibonacci(int n) {\n    if (n <= 1) return n;\n    return fibonacci(n-1) + fibonacci(n-2);\n}\n\nint main() {\n    int n;\n    printf("Enter n: ");\n    scanf("%d", &n);\n    printf("Factorial(%d) = %lld\\n", n, factorial(n));\n    printf("Fibonacci(%d) = %d\\n", n, fibonacci(n));\n    return 0;\n}'
            },
            {
                id: "c-exp5",
                pistonLang: "c",
                pistonVersion: "10.2.0",
                title: "Arrays and Strings",
                aim: '<p><strong>Objective:</strong> Declare, initialize, and manipulate arrays and character strings in C.</p><p><strong>Learning Outcomes:</strong></p><ul><li>Declare 1D arrays and access elements.</li><li>Use string functions: strlen, strcpy, strcat.</li><li>Understand null-terminated strings.</li></ul>',
                procedure: '<table class="formal-table"><thead><tr><th>Step</th><th>Description</th></tr></thead><tbody><tr><td>1</td><td>Run the code, observe array traversal.</td></tr><tr><td>2</td><td>Enter a string in stdin.</td></tr><tr><td>3</td><td>Observe strlen and strrev operations.</td></tr><tr><td>4</td><td>Modify to sort the array.</td></tr></tbody></table>',
                pretest: [
                    { q: "Array index in C starts from?", options: ["1", "0", "-1", "Depends"], a: 1 },
                    { q: "Strings in C end with?", options: ["\\n", "\\0", "\\t", "NULL"], a: 1 },
                    { q: "Which function returns string length?", options: ["length()", "size()", "strlen()", "strsize()"], a: 2 },
                    { q: "Header for string functions?", options: ["<stdio.h>", "<stdlib.h>", "<string.h>", "<ctype.h>"], a: 2 },
                    { q: "What is int arr[5]?", options: ["5 pointers", "5 integers", "Single int", "String"], a: 1 }
                ],
                posttest: [
                    { q: "int arr[3] = {1,2,3}; arr[1] = ?", options: ["1", "2", "3", "Error"], a: 1 },
                    { q: "Function to concatenate strings?", options: ["strcat()", "stradd()", "concat()", "join()"], a: 0 },
                    { q: "What does strcpy(a,b) do?", options: ["Compares a and b", "Copies b into a", "Copies a into b", "None"], a: 1 },
                    { q: "Maximum index of int arr[10]?", options: ["10", "11", "9", "8"], a: 2 },
                    { q: "2D array declaration?", options: ["int a[][]", "int a[2][3]", "int a{2,3}", "int a(2)(3)"], a: 1 }
                ],
                reference: '<ul><li><em>Programming in C</em> – Stephen Kochan</li><li><a href="https://www.cplusplus.com/reference/cstring/" target="_blank">String Functions Reference</a></li></ul>',
                defaultCode: '#include <stdio.h>\n#include <string.h>\n\nint main() {\n    int arr[] = {5, 3, 8, 1, 9, 2};\n    int n = 6, i;\n    printf("Array: ");\n    for (i = 0; i < n; i++) printf("%d ", arr[i]);\n\n    char str[100];\n    printf("\\nEnter a string: ");\n    scanf("%s", str);\n    printf("Length: %lu\\n", strlen(str));\n\n    // Reverse the string\n    int len = strlen(str);\n    for (i = 0; i < len/2; i++) {\n        char tmp = str[i];\n        str[i] = str[len-1-i];\n        str[len-1-i] = tmp;\n    }\n    printf("Reversed: %s\\n", str);\n    return 0;\n}'
            },
            {
                id: "c-exp6",
                pistonLang: "c",
                pistonVersion: "10.2.0",
                title: "Pointers",
                aim: '<p><strong>Objective:</strong> Understand pointer declaration, dereferencing, pointer arithmetic, and passing pointers to functions.</p><p><strong>Learning Outcomes:</strong></p><ul><li>Declare and initialize pointers.</li><li>Dereference pointers using *.</li><li>Pass by reference using pointers.</li></ul>',
                procedure: '<table class="formal-table"><thead><tr><th>Step</th><th>Description</th></tr></thead><tbody><tr><td>1</td><td>Run the code and observe pointer addresses.</td></tr><tr><td>2</td><td>See how swap() modifies variables via pointers.</td></tr><tr><td>3</td><td>Observe pointer arithmetic on arrays.</td></tr></tbody></table>',
                pretest: [
                    { q: "What does * do in declaration int *p?", options: ["Multiply", "Declares p as pointer to int", "Dereferences", "None"], a: 1 },
                    { q: "What does & operator return?", options: ["Value", "Address", "Size", "Type"], a: 1 },
                    { q: "NULL pointer points to?", options: ["Address 0", "Garbage", "Stack", "Nothing valid"], a: 0 },
                    { q: "Dereferencing means?", options: ["Getting address", "Accessing value at pointer", "Declaring pointer", "None"], a: 1 },
                    { q: "Pointer arithmetic p++ moves by?", options: ["1 byte always", "Size of pointed type", "4 bytes always", "Random"], a: 1 }
                ],
                posttest: [
                    { q: "int x=10; int *p=&x; *p=20; x = ?", options: ["10", "20", "Address", "Error"], a: 1 },
                    { q: "Dangling pointer is?", options: ["Uninitialized pointer", "Pointer to freed memory", "NULL pointer", "Wild pointer"], a: 1 },
                    { q: "What is int **p?", options: ["Pointer to pointer", "Double int", "Error", "Const pointer"], a: 0 },
                    { q: "Array name in C is?", options: ["A value", "Pointer to first element", "Copy of array", "Size of array"], a: 1 },
                    { q: "void * is?", options: ["Null pointer", "Generic pointer", "Function pointer", "Invalid"], a: 1 }
                ],
                reference: '<ul><li><em>Understanding and Using C Pointers</em> – Richard Reese</li><li><a href="https://www.geeksforgeeks.org/pointers-in-c-and-c-set-1-introduction-arithmetic-and-array/" target="_blank">GeeksForGeeks – Pointers</a></li></ul>',
                defaultCode: '#include <stdio.h>\n\nvoid swap(int *a, int *b) {\n    int temp = *a;\n    *a = *b;\n    *b = temp;\n}\n\nint main() {\n    int x = 10, y = 20;\n    int *p = &x;\n    printf("Address of x: %p\\n", (void*)p);\n    printf("Value via pointer: %d\\n", *p);\n    swap(&x, &y);\n    printf("After swap: x=%d, y=%d\\n", x, y);\n    return 0;\n}'
            },
            {
                id: "c-exp7",
                pistonLang: "c",
                pistonVersion: "10.2.0",
                title: "Structures and Unions",
                aim: '<p><strong>Objective:</strong> Define and use structures and unions to group heterogeneous data in C.</p><p><strong>Learning Outcomes:</strong></p><ul><li>Define struct with multiple data types.</li><li>Access members using dot and arrow operators.</li><li>Understand memory difference between struct and union.</li></ul>',
                procedure: '<table class="formal-table"><thead><tr><th>Step</th><th>Description</th></tr></thead><tbody><tr><td>1</td><td>Run the code to see struct member access.</td></tr><tr><td>2</td><td>Compare sizeof struct vs union.</td></tr><tr><td>3</td><td>Modify code to add another member.</td></tr></tbody></table>',
                pretest: [
                    { q: "struct keyword is used to?", options: ["Declare array", "Group different types", "Define class", "None"], a: 1 },
                    { q: "Member access operator for struct variable?", options: ["->", "::", ".", "*"], a: 2 },
                    { q: "Member access via struct pointer?", options: [".", "::", "->", "&"], a: 2 },
                    { q: "Union allocates memory for?", options: ["All members combined", "Largest member only", "Smallest member", "None"], a: 1 },
                    { q: "typedef is used to?", options: ["Define new type alias", "Create variable", "Include library", "None"], a: 0 }
                ],
                posttest: [
                    { q: "sizeof(struct) with int and char (assuming 4+1)?", options: ["5", "8 (with padding)", "4", "1"], a: 1 },
                    { q: "Can struct contain function pointers?", options: ["No", "Yes", "Only in C++", "Depends on compiler"], a: 1 },
                    { q: "Union members share?", options: ["Names", "Same memory", "Different files", "Nothing"], a: 1 },
                    { q: "Array of structures is?", options: ["Not allowed", "Allowed", "Only 1D", "Requires malloc"], a: 1 },
                    { q: "Bit fields in struct allow?", options: ["Specifying member size in bits", "Bit shifting", "Boolean flags only", "None"], a: 0 }
                ],
                reference: '<ul><li><em>C Programming: A Modern Approach</em> – K.N. King</li><li><a href="https://www.tutorialspoint.com/cprogramming/c_structures.htm" target="_blank">TutorialsPoint – Structures</a></li></ul>',
                defaultCode: '#include <stdio.h>\n#include <string.h>\n\nstruct Student {\n    int rollNo;\n    char name[50];\n    float marks;\n};\n\nint main() {\n    struct Student s1;\n    s1.rollNo = 101;\n    strcpy(s1.name, "Alice");\n    s1.marks = 95.5;\n    printf("Roll: %d\\nName: %s\\nMarks: %.2f\\n", s1.rollNo, s1.name, s1.marks);\n    printf("Size of struct: %lu bytes\\n", sizeof(struct Student));\n    return 0;\n}'
            },
            {
                id: "c-exp8",
                pistonLang: "c",
                pistonVersion: "10.2.0",
                title: "File Handling",
                aim: '<p><strong>Objective:</strong> Perform file operations (open, read, write, close) using FILE pointers in C.</p><p><strong>Learning Outcomes:</strong></p><ul><li>Open files in read/write mode.</li><li>Use fprintf, fscanf, fgets, fputs.</li><li>Properly close file handles.</li></ul>',
                procedure: '<table class="formal-table"><thead><tr><th>Step</th><th>Description</th></tr></thead><tbody><tr><td>1</td><td>Run code to write data to output.txt.</td></tr><tr><td>2</td><td>Observe the read-back output in terminal.</td></tr><tr><td>3</td><td>Modify to append instead of write.</td></tr></tbody></table>',
                pretest: [
                    { q: "Which function opens a file in C?", options: ["open()", "fopen()", "fileopen()", "create()"], a: 1 },
                    { q: "Mode to write to file (overwrite)?", options: ["r", "w", "a", "rw"], a: 1 },
                    { q: "Mode to append to existing file?", options: ["w", "a", "r+", "wa"], a: 1 },
                    { q: "fclose() is used to?", options: ["Delete file", "Close file handle", "Seek in file", "None"], a: 1 },
                    { q: "feof() returns true when?", options: ["File not found", "End of file reached", "File is empty", "Write error"], a: 1 }
                ],
                posttest: [
                    { q: "Function to write formatted data to file?", options: ["printf()", "sprintf()", "fprintf()", "puts()"], a: 2 },
                    { q: "What does fopen return on failure?", options: ["0", "NULL", "-1", "EOF"], a: 1 },
                    { q: "Binary file open mode for reading?", options: ["r", "rb", "br", "b"], a: 1 },
                    { q: "fseek() is used to?", options: ["Close file", "Move file pointer", "Read a line", "Flush buffer"], a: 1 },
                    { q: "rewind() does?", options: ["Deletes file", "Moves pointer to start", "Copies file", "None"], a: 1 }
                ],
                reference: '<ul><li><em>C Programming FAQs</em> – Steve Summit</li><li><a href="https://www.tutorialspoint.com/cprogramming/c_file_io.htm" target="_blank">TutorialsPoint – File I/O</a></li></ul>',
                defaultCode: '#include <stdio.h>\n\nint main() {\n    FILE *fp;\n    char line[100];\n\n    // Write to file\n    fp = fopen("output.txt", "w");\n    if (fp == NULL) {\n        printf("Error opening file!\\n");\n        return 1;\n    }\n    fprintf(fp, "Hello from C!\\n");\n    fprintf(fp, "File handling experiment.\\n");\n    fclose(fp);\n\n    // Read back\n    fp = fopen("output.txt", "r");\n    printf("File contents:\\n");\n    while (fgets(line, 100, fp) != NULL)\n        printf("%s", line);\n    fclose(fp);\n    return 0;\n}'
            },
            {
                id: "c-exp9",
                pistonLang: "c",
                pistonVersion: "10.2.0",
                title: "Dynamic Memory Allocation",
                aim: '<p><strong>Objective:</strong> Allocate and free memory dynamically using malloc, calloc, realloc, and free.</p><p><strong>Learning Outcomes:</strong></p><ul><li>Differentiate malloc vs calloc.</li><li>Use realloc to resize allocated memory.</li><li>Avoid memory leaks by calling free().</li></ul>',
                procedure: '<table class="formal-table"><thead><tr><th>Step</th><th>Description</th></tr></thead><tbody><tr><td>1</td><td>Enter n in stdin.</td></tr><tr><td>2</td><td>Program allocates n integers dynamically.</td></tr><tr><td>3</td><td>Observe the values and deallocation.</td></tr></tbody></table>',
                pretest: [
                    { q: "Header for malloc/free?", options: ["<stdio.h>", "<string.h>", "<stdlib.h>", "<memory.h>"], a: 2 },
                    { q: "malloc returns?", options: ["int*", "void*", "char*", "NULL always"], a: 1 },
                    { q: "calloc initializes memory to?", options: ["Random", "1", "0", "-1"], a: 2 },
                    { q: "free() is used to?", options: ["Clear screen", "Deallocate memory", "Initialize memory", "None"], a: 1 },
                    { q: "Memory leak occurs when?", options: ["Free called twice", "Allocated memory not freed", "malloc fails", "Pointer is NULL"], a: 1 }
                ],
                posttest: [
                    { q: "realloc(ptr, newSize) does?", options: ["Creates new block", "Resizes existing block", "Copies memory", "Frees memory"], a: 1 },
                    { q: "What is a dangling pointer?", options: ["NULL pointer", "Pointer to freed memory", "Uninitialized pointer", "Wild pointer"], a: 1 },
                    { q: "malloc(0) returns?", options: ["NULL always", "May return non-NULL", "Error", "1 byte"], a: 1 },
                    { q: "calloc(5, sizeof(int)) allocates?", options: ["5 bytes", "5 ints initialized to 0", "5 ints with garbage", "Error"], a: 1 },
                    { q: "Double free causes?", options: ["Memory leak", "Undefined behavior", "Compile error", "NULL return"], a: 1 }
                ],
                reference: '<ul><li><a href="https://www.geeksforgeeks.org/dynamic-memory-allocation-in-c/" target="_blank">GeeksForGeeks – Dynamic Memory</a></li><li><em>Expert C Programming</em> – Peter Van der Linden</li></ul>',
                defaultCode: '#include <stdio.h>\n#include <stdlib.h>\n\nint main() {\n    int n, i;\n    printf("How many integers to allocate? ");\n    scanf("%d", &n);\n\n    int *arr = (int*) malloc(n * sizeof(int));\n    if (!arr) { printf("Allocation failed\\n"); return 1; }\n\n    for (i = 0; i < n; i++) arr[i] = (i + 1) * 10;\n    printf("Values: ");\n    for (i = 0; i < n; i++) printf("%d ", arr[i]);\n\n    arr = (int*) realloc(arr, (n + 2) * sizeof(int));\n    arr[n] = 110; arr[n+1] = 120;\n    printf("\\nAfter realloc: ");\n    for (i = 0; i < n+2; i++) printf("%d ", arr[i]);\n    free(arr);\n    printf("\\nMemory freed.\\n");\n    return 0;\n}'
            },
            {
                id: "c-exp10",
                pistonLang: "c",
                pistonVersion: "10.2.0",
                title: "Sorting Algorithms",
                aim: '<p><strong>Objective:</strong> Implement and compare Bubble Sort, Selection Sort, and Insertion Sort algorithms in C.</p><p><strong>Learning Outcomes:</strong></p><ul><li>Implement O(n²) sorting algorithms.</li><li>Understand comparison and swapping operations.</li><li>Analyze best, worst, and average cases.</li></ul>',
                procedure: '<table class="formal-table"><thead><tr><th>Step</th><th>Description</th></tr></thead><tbody><tr><td>1</td><td>Run code with default unsorted array.</td></tr><tr><td>2</td><td>Observe step-by-step bubble sort passes.</td></tr><tr><td>3</td><td>Modify to implement selection sort.</td></tr></tbody></table>',
                pretest: [
                    { q: "Bubble sort time complexity (worst)?", options: ["O(n)", "O(n log n)", "O(n²)", "O(1)"], a: 2 },
                    { q: "Stable sort preserves?", options: ["Relative order of equal elements", "Ascending order", "Descending order", "Nothing"], a: 0 },
                    { q: "Best case for bubble sort?", options: ["O(n²)", "O(n log n)", "O(n)", "O(1)"], a: 2 },
                    { q: "Insertion sort is efficient for?", options: ["Large random arrays", "Nearly sorted arrays", "Reverse sorted", "Duplicates"], a: 1 },
                    { q: "Selection sort selects?", options: ["Largest element", "Smallest element each pass", "Random element", "Middle element"], a: 1 }
                ],
                posttest: [
                    { q: "How many passes does bubble sort need in worst case for n elements?", options: ["n", "n-1", "n/2", "n²"], a: 1 },
                    { q: "Is bubble sort in-place?", options: ["No", "Yes", "Only for small n", "Depends"], a: 1 },
                    { q: "Insertion sort builds?", options: ["A heap", "Sorted subarray from left", "Sorted subarray from right", "Nothing"], a: 1 },
                    { q: "Fastest comparison sort (average)?", options: ["Bubble", "Selection", "Merge/Quick O(n log n)", "Insertion"], a: 2 },
                    { q: "Space complexity of bubble sort?", options: ["O(n)", "O(log n)", "O(1)", "O(n²)"], a: 2 }
                ],
                reference: '<ul><li><em>Introduction to Algorithms (CLRS)</em></li><li><a href="https://www.geeksforgeeks.org/sorting-algorithms/" target="_blank">GeeksForGeeks – Sorting</a></li></ul>',
                defaultCode: '#include <stdio.h>\n\nvoid printArr(int a[], int n) {\n    for (int i=0;i<n;i++) printf("%d ",a[i]);\n    printf("\\n");\n}\n\nvoid bubbleSort(int a[], int n) {\n    for (int i=0;i<n-1;i++)\n        for (int j=0;j<n-i-1;j++)\n            if (a[j] > a[j+1]) {\n                int t=a[j]; a[j]=a[j+1]; a[j+1]=t;\n            }\n}\n\nint main() {\n    int arr[] = {64, 34, 25, 12, 22, 11, 90};\n    int n = 7;\n    printf("Before: "); printArr(arr, n);\n    bubbleSort(arr, n);\n    printf("After:  "); printArr(arr, n);\n    return 0;\n}'
            }
        ]
    },

    // ═══════════════════════════════════════════════════════════════════════
    // C++ PROGRAMMING
    // ═══════════════════════════════════════════════════════════════════════
    cpp: {
        name: "C++ Programming",
        experiments: [
            {
                id: "cpp-streams",
                title: "Experiment 1: Streams and Expressions",
                aim: `
                    <p><strong>Objective:</strong> Practice console input and output in C++ using <code>cin</code> and <code>cout</code>.</p>
                    <ul>
                        <li>Read values with stream extraction.</li>
                        <li>Display results using stream insertion.</li>
                        <li>Work with basic arithmetic expressions.</li>
                    </ul>`,
                procedure: `
                    <table class="formal-table">
                        <thead><tr><th>Step</th><th>Description</th></tr></thead>
                        <tbody>
                            <tr><td>1</td><td>Open the simulation and inspect the <code>#include &lt;iostream&gt;</code> statement.</td></tr>
                            <tr><td>2</td><td>Provide two decimal values in stdin.</td></tr>
                            <tr><td>3</td><td>Run the program and verify the product.</td></tr>
                            <tr><td>4</td><td>Extend the code to also calculate quotient.</td></tr>
                        </tbody>
                    </table>`,
                pretest: [
                    { q: "Which object is used for output in C++?", options: ["cin", "cout", "printf", "stdin"], a: 1 },
                    { q: "What does <code>endl</code> do?", options: ["Ends a loop", "Adds a newline", "Deletes output", "Reads input"], a: 1 },
                    { q: "Which namespace commonly contains standard C++ symbols?", options: ["core", "global", "std", "cpp"], a: 2 }
                ],
                posttest: [
                    { q: "How is <code>cout</code> written without a using directive?", options: ["std.cout", "std::cout", "cout::std", "::cout"], a: 1 },
                    { q: "Which operator reads input from a stream?", options: ["<<", ">>", "::", "&&"], a: 1 },
                    { q: "Which header is used for console streams?", options: ["<stdio.h>", "<iostream>", "<fstream>", "<string>"], a: 1 }
                ],
                reference: `
                    <h4>Recommended References</h4>
                    <ul>
                        <li><em>The C++ Programming Language</em> by Bjarne Stroustrup.</li>
                        <li><a href="https://cplusplus.com/doc/tutorial/" target="_blank" rel="noreferrer">C++ tutorials</a></li>
                    </ul>`,
                defaultCode: `#include <iostream>\nusing namespace std;\n\nint main() {\n    double a, b;\n    cout << "Enter two decimal numbers:" << endl;\n    cin >> a >> b;\n    cout << "Product = " << (a * b) << endl;\n    return 0;\n}`,
                pistonLang: "cpp",
                pistonVersion: "10.2.0",
                explanations: `
                    <div class="explanation-block">
                        <h3>C++ Streams Context</h3>
                        <div class="explanation-line-item">
                            <strong>#include &lt;iostream&gt;</strong>
                            <p>Loads standard system structures handling console reading and processing objects (streams).</p>
                        </div>
                        <div class="explanation-line-item">
                            <strong>using namespace std;</strong>
                            <p>Lets you write shorthand commands directly like <code>cout</code> and <code>cin</code> instead of referencing their prefix namespace explicitly like <code>std::cout</code>.</p>
                        </div>
                        <div class="explanation-line-item">
                            <strong>cin &gt;&gt; a &gt;&gt; b;</strong>
                            <p>The stream execution sequence pulls data tokens chronologically from standard input and maps them cleanly into storage positions.</p>
                        </div>
                    </div>`
            },
            {
                id: "cpp-classes",
                title: "Experiment 2: Classes and Objects",
                aim: `
                    <p><strong>Objective:</strong> Create a simple class and use member functions to organize logic.</p>
                    <ul>
                        <li>Define a class with private data.</li>
                        <li>Use public member functions.</li>
                        <li>Understand object creation.</li>
                    </ul>`,
                procedure: `
                    <table class="formal-table">
                        <thead><tr><th>Step</th><th>Description</th></tr></thead>
                        <tbody>
                            <tr><td>1</td><td>Review the <code>Rectangle</code> class definition.</td></tr>
                            <tr><td>2</td><td>Enter length and breadth values in stdin.</td></tr>
                            <tr><td>3</td><td>Run the code and verify the area.</td></tr>
                            <tr><td>4</td><td>Add another method to calculate perimeter.</td></tr>
                        </tbody>
                    </table>`,
                pretest: [
                    { q: "A class is primarily used to:", options: ["Store images", "Group data and behavior", "Compile code", "Create loops"], a: 1 },
                    { q: "Which access specifier makes members available outside the class?", options: ["private", "protected", "public", "hidden"], a: 2 },
                    { q: "An object is:", options: ["A class blueprint", "An instance of a class", "A header file", "A pointer only"], a: 1 }
                ],
                posttest: [
                    { q: "Which function is often used to initialize an object?", options: ["main", "constructor", "destructor", "friend"], a: 1 },
                    { q: "Private data members can be accessed directly from main().", options: ["True", "False"], a: 1 },
                    { q: "Which symbol accesses a member of an object?", options: [".", "::", "->", "&"], a: 0 }
                ],
                reference: `
                    <h4>Recommended References</h4>
                    <ul>
                        <li>Introductory OOP chapters from C++ lab material.</li>
                        <li><a href="https://en.cppreference.com/w/cpp/language/classes" target="_blank" rel="noreferrer">C++ classes reference</a></li>
                    </ul>`,
                defaultCode: `#include <iostream>\nusing namespace std;\n\nclass Rectangle {\nprivate:\n    int length;\n    int breadth;\n\npublic:\n    void setValues(int l, int b) {\n        length = l;\n        breadth = b;\n    }\n\n    int area() {\n        return length * breadth;\n    }\n};\n\nint main() {\n    Rectangle rect;\n    int l, b;\n    cout << "Enter length and breadth: ";\n    cin >> l >> b;\n    rect.setValues(l, b);\n    cout << "Area = " << rect.area() << endl;\n    return 0;\n}`,
                pistonLang: "cpp",
                pistonVersion: "10.2.0",
                explanations: `
                    <div class="explanation-block">
                        <h3>OOP Architecture Concepts</h3>
                        <div class="explanation-line-item">
                            <strong>class Rectangle { ... };</strong>
                            <p>Defines a customized composite structural blueprint template container group.</p>
                        </div>
                        <div class="explanation-line-item">
                            <strong>private: length, breadth</strong>
                            <p>Encapsulation guard pattern. Prevents target main framework environments from directly altering values securely.</p>
                        </div>
                        <div class="explanation-line-item">
                            <strong>rect.setValues(l, b);</strong>
                            <p>Invokes accessible public functional interface logic handlers to process data manipulation safely.</p>
                        </div>
                    </div>`
            },
            {
                id: "cpp-exp3",
                pistonLang: "cpp",
                pistonVersion: "10.2.0",
                title: "Inheritance",
                aim: '<p><strong>Objective:</strong> Implement single and multilevel inheritance in C++.</p><ul><li>Define base and derived classes.</li><li>Use protected access specifier.</li><li>Override base class methods.</li></ul>',
                procedure: '<table class="formal-table"><thead><tr><th>Step</th><th>Description</th></tr></thead><tbody><tr><td>1</td><td>Run the code and observe derived class inheriting base members.</td></tr><tr><td>2</td><td>See how derived constructor calls base constructor.</td></tr><tr><td>3</td><td>Modify code to add multilevel inheritance.</td></tr></tbody></table>',
                pretest: [
                    { q: "Syntax of inheritance?", options: ["class D extends B", "class D : B", "class D inherits B", "class D(B)"], a: 1 },
                    { q: "protected members accessible in?", options: ["All classes", "Same class only", "Same and derived classes", "External functions"], a: 2 },
                    { q: "C++ supports multiple inheritance?", options: ["No", "Yes", "Only with virtual", "Only two classes"], a: 1 },
                    { q: "Base class in C++ is also called?", options: ["Child class", "Super class/Parent class", "Abstract class", "Final class"], a: 1 },
                    { q: "Constructor execution order in inheritance?", options: ["Derived first", "Base first", "Simultaneous", "Random"], a: 1 }
                ],
                posttest: [
                    { q: "Diamond problem occurs in?", options: ["Single inheritance", "Multiple inheritance", "Multilevel", "Hierarchical"], a: 1 },
                    { q: "virtual keyword in base class enables?", options: ["Static binding", "Dynamic binding/polymorphism", "Multiple inheritance", "Encapsulation"], a: 1 },
                    { q: "Private base members in derived class?", options: ["Accessible directly", "Not accessible", "Accessible via public", "Accessible via protected"], a: 1 },
                    { q: "Destructor order in inheritance?", options: ["Base first", "Derived first", "Simultaneous", "Random"], a: 1 },
                    { q: "Redefining base method in derived class?", options: ["Overloading", "Overriding", "Hiding", "Shadowing"], a: 1 }
                ],
                reference: '<ul><li><em>C++ Primer</em> – Lippman, Lajoie, Moo</li><li><a href="https://www.geeksforgeeks.org/inheritance-in-c/" target="_blank">GeeksForGeeks – Inheritance</a></li></ul>',
                defaultCode: '#include <iostream>\nusing namespace std;\n\nclass Animal {\nprotected:\n    string name;\npublic:\n    Animal(string n) : name(n) {}\n    void speak() { cout << name << " makes a sound." << endl; }\n};\n\nclass Dog : public Animal {\npublic:\n    Dog(string n) : Animal(n) {}\n    void speak() { cout << name << " says: Woof!" << endl; }\n    void fetch() { cout << name << " fetches the ball!" << endl; }\n};\n\nint main() {\n    Animal a("Generic Animal");\n    Dog d("Buddy");\n    a.speak();\n    d.speak();\n    d.fetch();\n    return 0;\n}'
            },
            {
                id: "cpp-exp4",
                pistonLang: "cpp",
                pistonVersion: "10.2.0",
                title: "Polymorphism and Virtual Functions",
                aim: '<p><strong>Objective:</strong> Achieve runtime polymorphism using virtual functions and abstract classes.</p><ul><li>Use virtual functions for dynamic dispatch.</li><li>Create abstract classes with pure virtual functions.</li><li>Understand vtable mechanism.</li></ul>',
                procedure: '<table class="formal-table"><thead><tr><th>Step</th><th>Description</th></tr></thead><tbody><tr><td>1</td><td>Observe base pointer calling derived class method.</td></tr><tr><td>2</td><td>Remove virtual keyword and note the difference.</td></tr><tr><td>3</td><td>Implement pure virtual function.</td></tr></tbody></table>',
                pretest: [
                    { q: "Runtime polymorphism achieved via?", options: ["Function overloading", "Virtual functions", "Templates", "Macros"], a: 1 },
                    { q: "Pure virtual function syntax?", options: ["virtual f() = 0;", "abstract f();", "virtual f(){}", "pure f();"], a: 0 },
                    { q: "Class with at least one pure virtual function?", options: ["Concrete class", "Abstract class", "Template class", "Static class"], a: 1 },
                    { q: "Can you instantiate abstract class?", options: ["Yes", "No", "Only with new", "Only in derived"], a: 1 },
                    { q: "Virtual destructor is needed when?", options: ["Always", "Never", "Deleting derived via base pointer", "Copying objects"], a: 2 }
                ],
                posttest: [
                    { q: "Without virtual, base pointer calls?", options: ["Derived method", "Base method (static binding)", "Both", "None"], a: 1 },
                    { q: "vtable contains?", options: ["Variable values", "Virtual function pointers", "Class members", "Constructor"], a: 1 },
                    { q: "override keyword in C++11 means?", options: ["New function", "Explicitly marks overriding", "Static override", "None"], a: 1 },
                    { q: "final keyword prevents?", options: ["Overloading", "Further inheritance/overriding", "Instantiation", "None"], a: 1 },
                    { q: "Compile-time polymorphism uses?", options: ["Virtual functions", "Function/operator overloading", "Inheritance only", "RTTI"], a: 1 }
                ],
                reference: '<ul><li><em>The C++ Programming Language</em> – Stroustrup</li><li><a href="https://www.geeksforgeeks.org/virtual-function-cpp/" target="_blank">GeeksForGeeks – Virtual Functions</a></li></ul>',
                defaultCode: '#include <iostream>\nusing namespace std;\n\nclass Shape {\npublic:\n    virtual double area() = 0;\n    virtual void display() { cout << "Shape area: " << area() << endl; }\n    virtual ~Shape() {}\n};\n\nclass Circle : public Shape {\n    double r;\npublic:\n    Circle(double r) : r(r) {}\n    double area() override { return 3.14159 * r * r; }\n};\n\nclass Square : public Shape {\n    double s;\npublic:\n    Square(double s) : s(s) {}\n    double area() override { return s * s; }\n};\n\nint main() {\n    Shape* shapes[] = { new Circle(5), new Square(4) };\n    for (auto s : shapes) { s->display(); delete s; }\n    return 0;\n}'
            },
            {
                id: "cpp-exp5",
                pistonLang: "cpp",
                pistonVersion: "10.2.0",
                title: "Templates",
                aim: '<p><strong>Objective:</strong> Write generic functions and classes using C++ templates.</p><ul><li>Define function templates for generic algorithms.</li><li>Define class templates for generic containers.</li><li>Understand template specialization.</li></ul>',
                procedure: '<table class="formal-table"><thead><tr><th>Step</th><th>Description</th></tr></thead><tbody><tr><td>1</td><td>Run the code to see template function with int and double.</td></tr><tr><td>2</td><td>Observe template class Stack working with different types.</td></tr></tbody></table>',
                pretest: [
                    { q: "Template keyword syntax?", options: ["template<T>", "template<typename T>", "generic<T>", "type<T>"], a: 1 },
                    { q: "Templates provide?", options: ["Runtime polymorphism", "Compile-time generics", "Dynamic dispatch", "Encapsulation"], a: 1 },
                    { q: "STL is based on?", options: ["Macros", "Templates", "Virtual functions", "Inheritance"], a: 1 },
                    { q: "Template specialization allows?", options: ["Different behavior for specific type", "Multiple inheritance", "Runtime dispatch", "None"], a: 0 },
                    { q: "Function template generates?", options: ["One function", "Functions per type used", "Virtual table", "Abstract class"], a: 1 }
                ],
                posttest: [
                    { q: "Error in template resolved at?", options: ["Runtime", "Link time", "Compile time", "Preprocessing"], a: 2 },
                    { q: "Class template instance?", options: ["Stack", "Stack<int>", "template Stack", "generic Stack"], a: 1 },
                    { q: "Can templates have default type arguments?", options: ["No", "Yes", "Only in functions", "Only in classes"], a: 1 },
                    { q: "Variadic templates allow?", options: ["Variable number of template arguments", "Variable size arrays", "Multiple inheritance", "Runtime types"], a: 0 },
                    { q: "Template vs Macro difference?", options: ["No difference", "Templates are type-safe", "Macros are faster", "Both same"], a: 1 }
                ],
                reference: '<ul><li><em>Effective Modern C++</em> – Scott Meyers</li><li><a href="https://www.geeksforgeeks.org/templates-cpp/" target="_blank">GeeksForGeeks – Templates</a></li></ul>',
                defaultCode: '#include <iostream>\nusing namespace std;\n\ntemplate <typename T>\nT maxVal(T a, T b) { return (a > b) ? a : b; }\n\ntemplate <typename T>\nclass Stack {\n    T data[100]; int top = -1;\npublic:\n    void push(T val) { data[++top] = val; }\n    T pop() { return data[top--]; }\n    bool empty() { return top == -1; }\n};\n\nint main() {\n    cout << "Max(3,7): " << maxVal(3,7) << endl;\n    cout << "Max(3.5,2.1): " << maxVal(3.5,2.1) << endl;\n    Stack<int> s;\n    s.push(10); s.push(20); s.push(30);\n    cout << "Stack pop: " << s.pop() << ", " << s.pop() << endl;\n    return 0;\n}'
            },
            {
                id: "cpp-exp6",
                pistonLang: "cpp",
                pistonVersion: "10.2.0",
                title: "STL: Vectors, Maps and Algorithms",
                aim: '<p><strong>Objective:</strong> Use STL containers vector and map, and STL algorithms like sort and find.</p><ul><li>Use vector for dynamic arrays.</li><li>Use map for key-value storage.</li><li>Apply STL sort, find, and count algorithms.</li></ul>',
                procedure: '<table class="formal-table"><thead><tr><th>Step</th><th>Description</th></tr></thead><tbody><tr><td>1</td><td>Run code to see vector push_back and iteration.</td></tr><tr><td>2</td><td>Observe map insertion and lookup.</td></tr><tr><td>3</td><td>See STL sort applied to vector.</td></tr></tbody></table>',
                pretest: [
                    { q: "vector header?", options: ["<array>", "<vector>", "<list>", "<deque>"], a: 1 },
                    { q: "map stores?", options: ["Values only", "Key-value pairs sorted by key", "Unsorted pairs", "Arrays"], a: 1 },
                    { q: "vector push_back() does?", options: ["Inserts at front", "Inserts at back", "Removes last", "Resizes"], a: 1 },
                    { q: "STL sort() requires?", options: ["<algorithm>", "<sort>", "<utility>", "<functional>"], a: 0 },
                    { q: "Iterator type for vector<int>?", options: ["int*", "vector::iter", "vector<int>::iterator", "auto always"], a: 2 }
                ],
                posttest: [
                    { q: "map vs unordered_map?", options: ["No difference", "map sorted, unordered_map O(1) avg lookup", "unordered_map sorted", "map is faster"], a: 1 },
                    { q: "vector size() returns?", options: ["Capacity", "Number of elements", "Max size", "Memory bytes"], a: 1 },
                    { q: "STL find() returns?", options: ["Index", "Iterator to element or end()", "bool", "Pointer"], a: 1 },
                    { q: "Erase element from vector at index i?", options: ["v.remove(i)", "v.erase(v.begin()+i)", "v.delete(i)", "v[i]=0"], a: 1 },
                    { q: "set guarantees?", options: ["Sorted unique elements", "Unsorted unique", "Sorted duplicates", "Random order"], a: 0 }
                ],
                reference: '<ul><li><em>The C++ Standard Library</em> – Nicolai Josuttis</li><li><a href="https://cppreference.com/w/cpp/container" target="_blank">STL Containers Reference</a></li></ul>',
                defaultCode: '#include <iostream>\n#include <vector>\n#include <map>\n#include <algorithm>\nusing namespace std;\n\nint main() {\n    vector<int> v = {5,2,8,1,9,3};\n    cout << "Before sort: ";\n    for (auto x: v) cout << x << " ";\n    sort(v.begin(), v.end());\n    cout << "\\nAfter sort: ";\n    for (auto x: v) cout << x << " ";\n\n    map<string,int> scores;\n    scores["Alice"] = 95;\n    scores["Bob"] = 87;\n    scores["Carol"] = 92;\n    cout << "\\n\\nScoreboard:\\n";\n    for (auto& p: scores)\n        cout << p.first << ": " << p.second << "\\n";\n    return 0;\n}'
            },
            {
                id: "cpp-exp7",
                pistonLang: "cpp",
                pistonVersion: "10.2.0",
                title: "Exception Handling",
                aim: '<p><strong>Objective:</strong> Handle runtime errors gracefully using try, catch, and throw in C++.</p><ul><li>Use try-catch blocks for error handling.</li><li>Throw standard and custom exceptions.</li><li>Use multiple catch blocks.</li></ul>',
                procedure: '<table class="formal-table"><thead><tr><th>Step</th><th>Description</th></tr></thead><tbody><tr><td>1</td><td>Run code and enter 0 to trigger divide-by-zero exception.</td></tr><tr><td>2</td><td>Enter a negative number to trigger another exception.</td></tr><tr><td>3</td><td>Enter a valid number and observe normal flow.</td></tr></tbody></table>',
                pretest: [
                    { q: "Exception handling keywords in C++?", options: ["try/catch/finally", "try/catch/throw", "error/handle/raise", "begin/rescue/end"], a: 1 },
                    { q: "throw keyword is used to?", options: ["Catch exception", "Raise/throw exception", "Ignore error", "Log error"], a: 1 },
                    { q: "Catch-all block syntax?", options: ["catch(all)", "catch(...)", "catch(Exception e)", "catch(*)"], a: 1 },
                    { q: "std::exception base class header?", options: ["<error>", "<stdexcept>", "<exception>", "<iostream>"], a: 2 },
                    { q: "If exception uncaught, program?", options: ["Continues", "Terminates (abort)", "Logs warning", "Returns 0"], a: 1 }
                ],
                posttest: [
                    { q: "std::runtime_error is?", options: ["Compile error class", "Runtime exception class", "Warning class", "Abort class"], a: 1 },
                    { q: "noexcept specifier means?", options: ["Function throws", "Function does not throw", "Function may throw", "None"], a: 1 },
                    { q: "Order of catch blocks should be?", options: ["General to specific", "Specific to general", "Alphabetical", "Random"], a: 1 },
                    { q: "RAII stands for?", options: ["Resource Acquisition Is Initialization", "Runtime Array Index", "Recursive Algorithm", "None"], a: 0 },
                    { q: "Stack unwinding happens when?", options: ["Program starts", "Exception thrown", "Loop ends", "Function returns normally"], a: 1 }
                ],
                reference: '<ul><li><em>More Effective C++</em> – Scott Meyers</li><li><a href="https://www.geeksforgeeks.org/exception-handling-c/" target="_blank">GeeksForGeeks – Exception Handling</a></li></ul>',
                defaultCode: '#include <iostream>\n#include <stdexcept>\nusing namespace std;\n\ndouble divide(double a, double b) {\n    if (b == 0) throw runtime_error("Division by zero!");\n    if (a < 0 || b < 0) throw invalid_argument("Negative numbers not allowed!");\n    return a / b;\n}\n\nint main() {\n    double a, b;\n    cout << "Enter two numbers: ";\n    cin >> a >> b;\n    try {\n        cout << "Result: " << divide(a, b) << endl;\n    } catch (const runtime_error& e) {\n        cout << "Runtime Error: " << e.what() << endl;\n    } catch (const invalid_argument& e) {\n        cout << "Invalid Argument: " << e.what() << endl;\n    } catch (...) {\n        cout << "Unknown exception!" << endl;\n    }\n    return 0;\n}'
            },
            {
                id: "cpp-exp8",
                pistonLang: "cpp",
                pistonVersion: "10.2.0",
                title: "Operator Overloading",
                aim: '<p><strong>Objective:</strong> Overload operators for user-defined types to make them behave like built-in types.</p><ul><li>Overload arithmetic operators (+, -, *).</li><li>Overload comparison operators (==, &lt;).</li><li>Overload stream operators &lt;&lt; and &gt;&gt;.</li></ul>',
                procedure: '<table class="formal-table"><thead><tr><th>Step</th><th>Description</th></tr></thead><tbody><tr><td>1</td><td>Run to observe Complex number addition via overloaded +.</td></tr><tr><td>2</td><td>Observe cout&lt;&lt; working with complex type.</td></tr></tbody></table>',
                pretest: [
                    { q: "Operator overloading allows?", options: ["Redefining operators for custom types", "Creating new operators", "Removing operators", "All operators"], a: 0 },
                    { q: "Which operator cannot be overloaded?", options: ["+", "->", "::", "=="], a: 2 },
                    { q: "Friend function can access?", options: ["Only public members", "Private and protected members", "Only static members", "Nothing extra"], a: 1 },
                    { q: "Overloading << for cout is done using?", options: ["Member function", "Friend function returning ostream&", "Static function", "Virtual function"], a: 1 },
                    { q: "Unary operator overloading example?", options: ["a + b", "++a", "a == b", "a * b"], a: 1 }
                ],
                posttest: [
                    { q: "operator+ returns?", options: ["void", "New object of same type usually", "int always", "Pointer"], a: 1 },
                    { q: "Assignment operator = default behavior?", options: ["Deep copy", "Shallow copy", "Move semantics", "No copy"], a: 1 },
                    { q: "Overloading == should also overload?", options: ["+=", "!=", "<<", "[]"], a: 1 },
                    { q: "Can arithmetic operators be overloaded as non-member?", options: ["No", "Yes, using friend", "Only in C++17", "Only for built-ins"], a: 1 },
                    { q: "Overloading [] allows?", options: ["Custom indexing", "Array resizing", "Pointer arithmetic", "None"], a: 0 }
                ],
                reference: '<ul><li><em>C++ Primer Plus</em> – Stephen Prata</li><li><a href="https://en.cppreference.com/w/cpp/language/operators" target="_blank">Operator Overloading Reference</a></li></ul>',
                defaultCode: '#include <iostream>\nusing namespace std;\n\nclass Complex {\npublic:\n    double real, imag;\n    Complex(double r=0, double i=0): real(r), imag(i) {}\n    Complex operator+(const Complex& c) {\n        return Complex(real+c.real, imag+c.imag);\n    }\n    bool operator==(const Complex& c) {\n        return real==c.real && imag==c.imag;\n    }\n    friend ostream& operator<<(ostream& os, const Complex& c) {\n        os << c.real << (c.imag>=0?"+":"") << c.imag << "i";\n        return os;\n    }\n};\n\nint main() {\n    Complex c1(3,4), c2(1,-2);\n    cout << "c1 = " << c1 << endl;\n    cout << "c2 = " << c2 << endl;\n    cout << "c1+c2 = " << (c1+c2) << endl;\n    cout << "Equal? " << (c1==c2 ? "Yes":"No") << endl;\n    return 0;\n}'
            },
            {
                id: "cpp-exp9",
                pistonLang: "cpp",
                pistonVersion: "10.2.0",
                title: "File Streams",
                aim: '<p><strong>Objective:</strong> Perform file I/O using fstream, ifstream, and ofstream in C++.</p><ul><li>Write to files using ofstream.</li><li>Read from files using ifstream.</li><li>Use fstream for both read and write.</li></ul>',
                procedure: '<table class="formal-table"><thead><tr><th>Step</th><th>Description</th></tr></thead><tbody><tr><td>1</td><td>Run code to write data file.</td></tr><tr><td>2</td><td>Observe the read-back content in terminal.</td></tr><tr><td>3</td><td>Modify to read word by word.</td></tr></tbody></table>',
                pretest: [
                    { q: "Header for file streams in C++?", options: ["<stdio.h>", "<file>", "<fstream>", "<iostream>"], a: 2 },
                    { q: "ofstream is used for?", options: ["Reading files", "Writing files", "Both", "Binary only"], a: 1 },
                    { q: "ifstream is used for?", options: ["Writing files", "Reading files", "Both", "Appending"], a: 1 },
                    { q: "Open file for append in C++?", options: ["ios::write", "ios::app", "ios::in", "ios::add"], a: 1 },
                    { q: "Checking if file opened successfully?", options: ["file.check()", "file.is_open()", "file.good()", "file.valid()"], a: 1 }
                ],
                posttest: [
                    { q: "getline() reads?", options: ["One word", "Entire line", "One character", "Until EOF"], a: 1 },
                    { q: "seekg() is used to?", options: ["Write position", "Read position", "Close file", "Flush buffer"], a: 1 },
                    { q: "ios::binary opens file as?", options: ["Text mode", "Binary mode", "Append mode", "Read-only"], a: 1 },
                    { q: "File closes automatically when?", options: ["Never", "Program ends", "fstream object goes out of scope", "After first read"], a: 2 },
                    { q: "eof() returns true when?", options: ["File not found", "End of file reached", "File is empty", "Write fails"], a: 1 }
                ],
                reference: '<ul><li><a href="https://www.geeksforgeeks.org/file-handling-c-classes/" target="_blank">GeeksForGeeks – File Handling</a></li><li><em>The C++ Standard Library</em> – Josuttis</li></ul>',
                defaultCode: '#include <iostream>\n#include <fstream>\n#include <string>\nusing namespace std;\n\nint main() {\n    // Write\n    ofstream out("data.txt");\n    out << "C++ File Stream Experiment\\n";\n    out << "Line 2: Hello World\\n";\n    out.close();\n\n    // Read back\n    ifstream in("data.txt");\n    string line;\n    cout << "File contents:\\n";\n    while (getline(in, line))\n        cout << line << "\\n";\n    in.close();\n    return 0;\n}'
            },
            {
                id: "cpp-exp10",
                pistonLang: "cpp",
                pistonVersion: "10.2.0",
                title: "Smart Pointers and Move Semantics",
                aim: '<p><strong>Objective:</strong> Use C++11 smart pointers (unique_ptr, shared_ptr) and understand move semantics.</p><ul><li>Avoid raw pointer memory leaks.</li><li>Use unique_ptr for exclusive ownership.</li><li>Use shared_ptr for shared ownership.</li></ul>',
                procedure: '<table class="formal-table"><thead><tr><th>Step</th><th>Description</th></tr></thead><tbody><tr><td>1</td><td>Run code and observe automatic memory cleanup.</td></tr><tr><td>2</td><td>Note shared_ptr reference count behavior.</td></tr></tbody></table>',
                pretest: [
                    { q: "Smart pointers are in header?", options: ["<pointer>", "<smart>", "<memory>", "<ptr>"], a: 2 },
                    { q: "unique_ptr allows how many owners?", options: ["Unlimited", "Two", "One", "Zero"], a: 2 },
                    { q: "shared_ptr uses?", options: ["RAII only", "Reference counting", "Garbage collection", "Stack allocation"], a: 1 },
                    { q: "weak_ptr prevents?", options: ["Memory leak", "Circular reference", "Dangling pointer", "Double free"], a: 1 },
                    { q: "make_unique creates?", options: ["shared_ptr", "unique_ptr", "weak_ptr", "raw pointer"], a: 1 }
                ],
                posttest: [
                    { q: "unique_ptr transfer ownership using?", options: ["copy", "std::move", "assignment", "clone"], a: 1 },
                    { q: "shared_ptr destroyed when?", options: ["First owner gone", "Last owner gone", "Manually deleted", "Scope ends of first"], a: 1 },
                    { q: "RAII stands for?", options: ["Resource Acquisition Is Initialization", "Raw Array Index Increment", "Reference And Identity Index", "None"], a: 0 },
                    { q: "Move semantics avoid?", options: ["Copying large objects", "Deletion", "Inheritance", "Templates"], a: 0 },
                    { q: "std::move() performs?", options: ["Copy", "Deep copy", "Transfers ownership (cast to rvalue)", "Delete"], a: 2 }
                ],
                reference: '<ul><li><em>Effective Modern C++</em> – Scott Meyers</li><li><a href="https://en.cppreference.com/w/cpp/memory" target="_blank">cppreference – Memory</a></li></ul>',
                defaultCode: '#include <iostream>\n#include <memory>\nusing namespace std;\n\nclass Resource {\npublic:\n    string name;\n    Resource(string n) : name(n) { cout << name << " acquired\\n"; }\n    ~Resource() { cout << name << " released\\n"; }\n};\n\nint main() {\n    {\n        unique_ptr<Resource> u1 = make_unique<Resource>("UniqueResource");\n        cout << "Using: " << u1->name << "\\n";\n    } // auto-released here\n\n    shared_ptr<Resource> s1 = make_shared<Resource>("SharedResource");\n    {\n        shared_ptr<Resource> s2 = s1; // ref count = 2\n        cout << "Ref count: " << s1.use_count() << "\\n";\n    } // ref count = 1\n    cout << "Ref count: " << s1.use_count() << "\\n";\n    return 0;\n}'
            }
        ]
    },

    // ═══════════════════════════════════════════════════════════════════════
    // JAVA PROGRAMMING
    // ═══════════════════════════════════════════════════════════════════════
    java: {
        name: "Java Programming",
        experiments: [
            {
                id: "java-scanner-methods",
                title: "Experiment 1: Scanner Input and Methods",
                aim: `
                    <p><strong>Objective:</strong> Use the <code>Scanner</code> class to read input and call a helper method from <code>main</code>.</p>
                    <ul>
                        <li>Understand Java program structure.</li>
                        <li>Read values from standard input.</li>
                        <li>Call static methods for reusable logic.</li>
                    </ul>`,
                procedure: `
                    <table class="formal-table">
                        <thead><tr><th>Step</th><th>Description</th></tr></thead>
                        <tbody>
                            <tr><td>1</td><td>Observe the <code>Main</code> class and the method signature.</td></tr>
                            <tr><td>2</td><td>Provide one name in stdin.</td></tr>
                            <tr><td>3</td><td>Run the program and inspect the greeting from the helper method.</td></tr>
                            <tr><td>4</td><td>Modify the method to include uppercase output.</td></tr>
                        </tbody>
                    </table>`,
                pretest: [
                    { q: "Which package contains <code>Scanner</code>?", options: ["java.io", "java.util", "java.lang", "java.net"], a: 1 },
                    { q: "Which keyword declares a class?", options: ["object", "class", "define", "struct"], a: 1 },
                    { q: "Java entry point is:", options: ["start()", "run()", "main()", "init()"], a: 2 }
                ],
                posttest: [
                    { q: "Which method reads a full line?", options: ["next()", "nextInt()", "nextLine()", "readLine()"], a: 2 },
                    { q: "A static method belongs to:", options: ["An object only", "The class", "The package", "The scanner"], a: 1 },
                    { q: "Java source files are saved with which extension?", options: [".class", ".jar", ".java", ".jav"], a: 2 }
                ],
                reference: `
                    <h4>Recommended References</h4>
                    <ul>
                        <li><a href="https://docs.oracle.com/javase/tutorial/" target="_blank" rel="noreferrer">Official Java tutorials</a></li>
                        <li><em>Effective Java</em> by Joshua Bloch.</li>
                    </ul>`,
                defaultCode: `import java.util.Scanner;\n\npublic class Main {\n    static void greet(String name) {\n        System.out.println("Hello, " + name + "!");\n    }\n\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        System.out.print("Enter your name: ");\n        String name = scanner.nextLine();\n        greet(name);\n        scanner.close();\n    }\n}`,
                pistonLang: "java",
                pistonVersion: "15.0.2",
                explanations: `
                    <div class="explanation-block">
                        <h3>Java Logic Paradigms</h3>
                        <div class="explanation-line-item">
                            <strong>public class Main</strong>
                            <p>Everything in Java must live inside a class framework container. File structures link directly to this identifier matching name standards.</p>
                        </div>
                        <div class="explanation-line-item">
                            <strong>static void greet(...)</strong>
                            <p>A static utility method. Belongs uniformly to class objects globally; executable without manually creating matching class instance references.</p>
                        </div>
                    </div>`
            },
            {
                id: "java-exp2",
                pistonLang: "java",
                pistonVersion: "15.0.2",
                title: "Control Flow: if-else, switch, loops",
                aim: '<p><strong>Objective:</strong> Master conditional statements and loops in Java.</p><ul><li>Use if-else-if ladder and switch-case.</li><li>Implement for, while, and do-while loops.</li><li>Use break and continue.</li></ul>',
                procedure: '<table class="formal-table"><thead><tr><th>Step</th><th>Description</th></tr></thead><tbody><tr><td>1</td><td>Enter a number in stdin.</td></tr><tr><td>2</td><td>Observe grade assignment via if-else.</td></tr><tr><td>3</td><td>Observe loop printing multiplication table.</td></tr></tbody></table>',
                pretest: [
                    { q: "Java switch can use which type from Java 7+?", options: ["float", "String", "boolean", "double"], a: 1 },
                    { q: "Enhanced for-each loop syntax?", options: ["for(int x: arr)", "foreach(x in arr)", "for(arr: x)", "forall(x, arr)"], a: 0 },
                    { q: "do-while guarantees?", options: ["No execution", "At least one execution", "Exact two executions", "Depends"], a: 1 },
                    { q: "Labeled break breaks out of?", options: ["Current loop only", "Labeled enclosing loop", "Method", "Switch only"], a: 1 },
                    { q: "ternary operator in Java?", options: ["a?b:c", "if(a)b else c", "a then b else c", "a ?? b : c"], a: 0 }
                ],
                posttest: [
                    { q: "Output of: for(int i=0;i<3;i++) System.out.print(i);", options: ["012", "123", "0 1 2", "Error"], a: 0 },
                    { q: "Infinite loop in Java?", options: ["while(false)", "for(;;)", "do{}while(0)", "loop()"], a: 1 },
                    { q: "switch default executes when?", options: ["Always", "No case matches", "First always", "Last always"], a: 1 },
                    { q: "Java 14+ switch expression can?", options: ["Only statement style", "Return values using ->", "Use float", "None"], a: 1 },
                    { q: "continue in a loop does?", options: ["Stops loop", "Skips current iteration", "Goes to default", "Returns from method"], a: 1 }
                ],
                reference: '<ul><li><em>Head First Java</em> – Kathy Sierra</li><li><a href="https://www.w3schools.com/java/java_conditions.asp" target="_blank">W3Schools Java Conditions</a></li></ul>',
                defaultCode: 'import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        System.out.println("Enter marks (0-100):");\n        int marks = sc.nextInt();\n        String grade;\n        if (marks >= 90) grade = "A";\n        else if (marks >= 75) grade = "B";\n        else if (marks >= 60) grade = "C";\n        else grade = "F";\n        System.out.println("Grade: " + grade);\n        System.out.println("\\nMultiplication table for 5:");\n        for (int i = 1; i <= 10; i++)\n            System.out.println("5 x " + i + " = " + (5*i));\n        sc.close();\n    }\n}'
            },
            {
                id: "java-arrays-average",
                title: "Experiment 2: Arrays and Average Calculation",
                aim: `
                    <p><strong>Objective:</strong> Store multiple values in an array and compute their average.</p>
                    <ul>
                        <li>Create and traverse arrays.</li>
                        <li>Accumulate totals using loops.</li>
                        <li>Perform simple numeric calculations.</li>
                    </ul>`,
                procedure: `
                    <table class="formal-table">
                        <thead><tr><th>Step</th><th>Description</th></tr></thead>
                        <tbody>
                            <tr><td>1</td><td>Enter the number of elements followed by the values in stdin.</td></tr>
                            <tr><td>2</td><td>Run the code and confirm the computed average.</td></tr>
                            <tr><td>3</td><td>Change the loop to also find the maximum value.</td></tr>
                        </tbody>
                    </table>`,
                pretest: [
                    { q: "Array indexes in Java begin at:", options: ["1", "0", "-1", "Depends on type"], a: 1 },
                    { q: "Which loop is commonly used to iterate arrays?", options: ["if", "for", "switch", "class"], a: 1 },
                    { q: "An array stores:", options: ["Only strings", "Only booleans", "Multiple values of a related type", "Only one value"], a: 2 }
                ],
                posttest: [
                    { q: "What happens if you access an invalid array index?", options: ["Ignored", "Compilation only warning", "Runtime exception", "Returns 0"], a: 2 },
                    { q: "Which property gives array length in Java?", options: ["size()", "count", "length", "len()"], a: 2 },
                    { q: "A foreach loop can also be used with arrays.", options: ["True", "False"], a: 0 }
                ],
                reference: `
                    <h4>Recommended References</h4>
                    <ul>
                        <li>Java array sections in Oracle tutorials.</li>
                        <li><a href="https://www.w3schools.com/java/java_arrays.asp" target="_blank" rel="noreferrer">Java arrays primer</a></li>
                    </ul>`,
                defaultCode: `import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        System.out.print("Enter number of elements: ");\n        int n = scanner.nextInt();\n        int[] numbers = new int[n];\n        int sum = 0;\n\n        System.out.println("Enter the elements:");\n        for (int i = 0; i < n; i++) {\n            numbers[i] = scanner.nextInt();\n            sum += numbers[i];\n        }\n\n        double average = n > 0 ? (double) sum / n : 0;\n        System.out.println("Average = " + average);\n        scanner.close();\n    }\n}`,
                pistonLang: "java",
                pistonVersion: "15.0.2",
                explanations: `
                    <div class="explanation-block">
                        <h3>Java Array Logic</h3>
                        <div class="explanation-line-item">
                            <strong>int[] numbers = new int[n];</strong>
                            <p>Allocates a continuous segment of memory to store exactly 'n' integers dynamically.</p>
                        </div>
                        <div class="explanation-line-item">
                            <strong>numbers[i] = scanner.nextInt();</strong>
                            <p>Fills index positions sequentially from 0 up to n-1 using loop conditions.</p>
                        </div>
                    </div>`
            },
            {
                id: "java-exp4",
                pistonLang: "java",
                pistonVersion: "15.0.2",
                title: "Inheritance and Polymorphism",
                aim: '<p><strong>Objective:</strong> Implement inheritance hierarchies and achieve runtime polymorphism in Java.</p><ul><li>Use extends keyword for inheritance.</li><li>Override methods using @Override.</li><li>Use superclass reference for polymorphism.</li></ul>',
                procedure: '<table class="formal-table"><thead><tr><th>Step</th><th>Description</th></tr></thead><tbody><tr><td>1</td><td>Run code and observe method overriding.</td></tr><tr><td>2</td><td>See superclass reference call subclass method.</td></tr></tbody></table>',
                pretest: [
                    { q: "Java inheritance keyword?", options: ["inherits", "extends", "implements", "super"], a: 1 },
                    { q: "Java supports multiple class inheritance?", options: ["Yes", "No, only through interfaces", "Only 2 classes", "Only abstract classes"], a: 1 },
                    { q: "super keyword calls?", options: ["Child method", "Parent class method/constructor", "Static method", "Interface method"], a: 1 },
                    { q: "@Override annotation?", options: ["Required for overriding", "Optional, marks intentional override", "Creates new method", "None"], a: 1 },
                    { q: "final class in Java?", options: ["Can be extended", "Cannot be extended", "Is abstract", "Is static"], a: 1 }
                ],
                posttest: [
                    { q: "Method overriding vs overloading?", options: ["Same thing", "Overriding: same signature in subclass; Overloading: different params", "Overloading in subclass", "None"], a: 1 },
                    { q: "Casting Animal a = new Dog(); ((Dog)a).bark(); is?", options: ["Compile error", "Downcasting", "Upcasting", "Invalid"], a: 1 },
                    { q: "instanceof operator checks?", options: ["Object size", "If object is instance of type", "Equality", "Hash code"], a: 1 },
                    { q: "Object class is parent of?", options: ["All Java classes", "Only abstract classes", "Only concrete classes", "Nothing"], a: 0 },
                    { q: "Polymorphism means?", options: ["Many classes", "One interface, many implementations", "Multiple inheritance", "Multiple constructors"], a: 1 }
                ],
                reference: '<ul><li><em>Head First Java</em> – Kathy Sierra</li><li><a href="https://www.geeksforgeeks.org/inheritance-in-java/" target="_blank">GeeksForGeeks – Java Inheritance</a></li></ul>',
                defaultCode: 'public class Main {\n    static class Animal {\n        String name;\n        Animal(String n) { name = n; }\n        void speak() { System.out.println(name + " makes a sound."); }\n    }\n    static class Dog extends Animal {\n        Dog(String n) { super(n); }\n        @Override void speak() { System.out.println(name + " says: Woof!"); }\n        void fetch() { System.out.println(name + " fetches the ball!"); }\n    }\n    static class Cat extends Animal {\n        Cat(String n) { super(n); }\n        @Override void speak() { System.out.println(name + " says: Meow!"); }\n    }\n    public static void main(String[] args) {\n        Animal[] animals = { new Dog("Rex"), new Cat("Whiskers"), new Dog("Buddy") };\n        for (Animal a : animals) a.speak();\n    }\n}'
            },
            {
                id: "java-exp5",
                pistonLang: "java",
                pistonVersion: "15.0.2",
                title: "Interfaces and Abstract Classes",
                aim: '<p><strong>Objective:</strong> Define and implement Java interfaces and abstract classes.</p><ul><li>Create interfaces with abstract methods.</li><li>Implement interface in multiple classes.</li><li>Use abstract classes as partial implementations.</li></ul>',
                procedure: '<table class="formal-table"><thead><tr><th>Step</th><th>Description</th></tr></thead><tbody><tr><td>1</td><td>Observe interface defined with methods.</td></tr><tr><td>2</td><td>See different classes implementing same interface.</td></tr></tbody></table>',
                pretest: [
                    { q: "Interface keyword in Java?", options: ["interface", "abstract", "implements", "iface"], a: 0 },
                    { q: "Class implements interface using?", options: ["extends", "implements", "uses", "with"], a: 1 },
                    { q: "Interface methods are by default?", options: ["private", "protected", "public abstract", "static"], a: 2 },
                    { q: "Abstract class can have?", options: ["Only abstract methods", "Only concrete methods", "Both abstract and concrete methods", "Neither"], a: 2 },
                    { q: "Can interface be instantiated?", options: ["Yes", "No", "Only with new", "Only abstract can"], a: 1 }
                ],
                posttest: [
                    { q: "Java 8 interface can have?", options: ["Only abstract methods", "Default and static methods too", "Private methods", "Constructor"], a: 1 },
                    { q: "Functional interface has?", options: ["Zero abstract methods", "Exactly one abstract method", "Multiple abstract methods", "No methods"], a: 1 },
                    { q: "Abstract method must be?", options: ["Implemented in concrete subclass", "Ignored", "Static", "Final"], a: 0 },
                    { q: "Interface vs abstract class?", options: ["No difference", "Interface: pure contract; Abstract: partial impl", "Abstract: no state; Interface: has state", "Both have constructors"], a: 1 },
                    { q: "Multiple interfaces can be implemented?", options: ["No", "Yes", "Only 2", "Only same package"], a: 1 }
                ],
                reference: '<ul><li><a href="https://docs.oracle.com/javase/tutorial/java/IandI/index.html" target="_blank">Oracle Interfaces Tutorial</a></li><li><em>Effective Java</em> – Joshua Bloch</li></ul>',
                defaultCode: 'public class Main {\n    interface Drawable {\n        void draw();\n        default String getColor() { return "Black"; }\n    }\n    interface Resizable {\n        void resize(double factor);\n    }\n    static class Circle implements Drawable, Resizable {\n        double radius;\n        Circle(double r) { radius = r; }\n        public void draw() { System.out.println("Drawing circle r=" + radius); }\n        public void resize(double f) { radius *= f; System.out.println("Resized to r=" + radius); }\n    }\n    static abstract class Vehicle {\n        abstract String getFuelType();\n        void describe() { System.out.println("Vehicle runs on: " + getFuelType()); }\n    }\n    static class ElectricCar extends Vehicle {\n        String getFuelType() { return "Electricity"; }\n    }\n    public static void main(String[] args) {\n        Circle c = new Circle(5.0);\n        c.draw();\n        c.resize(2.0);\n        System.out.println("Color: " + c.getColor());\n        new ElectricCar().describe();\n    }\n}'
            },
            {
                id: "java-exp6",
                pistonLang: "java",
                pistonVersion: "15.0.2",
                title: "Exception Handling",
                aim: '<p><strong>Objective:</strong> Handle checked and unchecked exceptions in Java using try-catch-finally.</p><ul><li>Use try, catch, finally blocks.</li><li>Create custom exception classes.</li><li>Use throws and throw keywords.</li></ul>',
                procedure: '<table class="formal-table"><thead><tr><th>Step</th><th>Description</th></tr></thead><tbody><tr><td>1</td><td>Enter 0 in stdin to trigger ArithmeticException.</td></tr><tr><td>2</td><td>Enter -1 to trigger custom exception.</td></tr><tr><td>3</td><td>Observe finally block always executing.</td></tr></tbody></table>',
                pretest: [
                    { q: "Checked exceptions must be?", options: ["Ignored", "Caught or declared with throws", "Re-thrown only", "None"], a: 1 },
                    { q: "ArithmeticException is?", options: ["Checked", "Unchecked (RuntimeException)", "Error", "None"], a: 1 },
                    { q: "finally block executes?", options: ["Only if exception occurs", "Only if no exception", "Always", "Never in exception"], a: 2 },
                    { q: "Custom exception class should extend?", options: ["Object", "Throwable or Exception", "RuntimeException only", "Error"], a: 1 },
                    { q: "try-with-resources ensures?", options: ["No exceptions", "Auto close of resources", "No catch needed", "Faster execution"], a: 1 }
                ],
                posttest: [
                    { q: "Multi-catch in Java 7+?", options: ["catch(A | B e)", "catch(A, B e)", "catch(A & B e)", "Two catch blocks only"], a: 0 },
                    { q: "getMessage() is method of?", options: ["String", "Throwable", "Exception only", "Error only"], a: 1 },
                    { q: "StackOverflowError is?", options: ["Exception", "RuntimeException", "Error", "Throwable"], a: 2 },
                    { q: "throws keyword in method signature?", options: ["Throws exception", "Declares possible checked exceptions", "Handles exception", "None"], a: 1 },
                    { q: "Difference between throw and throws?", options: ["Same", "throw raises exception, throws declares", "throws raises, throw declares", "None"], a: 1 }
                ],
                reference: '<ul><li><em>Java: The Complete Reference</em> – Schildt</li><li><a href="https://docs.oracle.com/javase/tutorial/essential/exceptions/" target="_blank">Oracle Exception Tutorial</a></li></ul>',
                defaultCode: 'import java.util.Scanner;\n\nclass NegativeException extends Exception {\n    NegativeException(String msg) { super(msg); }\n}\n\npublic class Main {\n    static int divide(int a, int b) throws NegativeException {\n        if (b < 0) throw new NegativeException("Divisor cannot be negative!");\n        return a / b;\n    }\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        System.out.println("Enter two integers (a b):");\n        int a = sc.nextInt(), b = sc.nextInt();\n        try {\n            System.out.println("Result: " + divide(a, b));\n        } catch (ArithmeticException e) {\n            System.out.println("Math Error: " + e.getMessage());\n        } catch (NegativeException e) {\n            System.out.println("Custom Error: " + e.getMessage());\n        } finally {\n            System.out.println("finally block executed.");\n        }\n        sc.close();\n    }\n}'
            },
            {
                id: "java-exp7",
                pistonLang: "java",
                pistonVersion: "15.0.2",
                title: "String Manipulation",
                aim: '<p><strong>Objective:</strong> Explore Java String class methods, StringBuilder, and string formatting.</p><ul><li>Use String methods: length, substring, indexOf, replace.</li><li>Use StringBuilder for mutable strings.</li><li>Use String.format() for formatting.</li></ul>',
                procedure: '<table class="formal-table"><thead><tr><th>Step</th><th>Description</th></tr></thead><tbody><tr><td>1</td><td>Enter a sentence in stdin.</td></tr><tr><td>2</td><td>Observe length, uppercase, word count operations.</td></tr></tbody></table>',
                pretest: [
                    { q: "Strings in Java are?", options: ["Mutable", "Immutable", "Primitive", "None"], a: 1 },
                    { q: "String comparison (content) uses?", options: ["==", ".equals()", ".compare()", ".same()"], a: 1 },
                    { q: "StringBuilder is?", options: ["Immutable", "Mutable", "Thread-safe", "Interface"], a: 1 },
                    { q: "str.substring(1,3) returns?", options: ["Index 1 to 3 inclusive", "Index 1 to 2", "Index 2 to 3", "Error"], a: 1 },
                    { q: "String.valueOf(42) returns?", options: ["int 42", "\"42\"", "42.0", "null"], a: 1 }
                ],
                posttest: [
                    { q: "str.split(\" \") splits on?", options: ["Comma", "Space", "Newline", "Tab"], a: 1 },
                    { q: "String pool stores?", options: ["All Strings", "String literals for reuse", "StringBuilder objects", "char arrays"], a: 1 },
                    { q: "StringBuffer vs StringBuilder?", options: ["No difference", "StringBuffer thread-safe, StringBuilder faster", "StringBuilder thread-safe", "Same performance"], a: 1 },
                    { q: "str.trim() removes?", options: ["All spaces", "Leading and trailing whitespace", "Internal spaces", "Special chars"], a: 1 },
                    { q: "str.charAt(0) returns?", options: ["String", "char at index 0", "int code", "substring"], a: 1 }
                ],
                reference: '<ul><li><a href="https://docs.oracle.com/javase/8/docs/api/java/lang/String.html" target="_blank">Java String API</a></li><li><em>Java 8 in Action</em> – Urma, Fusco, Mycroft</li></ul>',
                defaultCode: 'import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        System.out.println("Enter a sentence:");\n        String s = sc.nextLine();\n        System.out.println("Length: " + s.length());\n        System.out.println("Uppercase: " + s.toUpperCase());\n        System.out.println("Words: " + s.trim().split("\\\\s+").length);\n        System.out.println("Reversed: " + new StringBuilder(s).reverse());\n        System.out.println("Contains \'a\': " + s.contains("a"));\n        System.out.printf("Formatted: \'%s\' has %d chars%n", s, s.length());\n        sc.close();\n    }\n}'
            },
            {
                id: "java-exp8",
                pistonLang: "java",
                pistonVersion: "15.0.2",
                title: "Collections Framework",
                aim: '<p><strong>Objective:</strong> Use Java Collections: HashMap, HashSet, LinkedList, and Collections utility class.</p><ul><li>Use HashMap for key-value storage.</li><li>Use HashSet for unique elements.</li><li>Use Collections.sort(), shuffle(), frequency().</li></ul>',
                procedure: '<table class="formal-table"><thead><tr><th>Step</th><th>Description</th></tr></thead><tbody><tr><td>1</td><td>Run code to see HashMap word frequency count.</td></tr><tr><td>2</td><td>Observe HashSet eliminating duplicates.</td></tr></tbody></table>',
                pretest: [
                    { q: "HashMap allows duplicate keys?", options: ["Yes", "No, last value overwrites", "Yes with null", "Only null key"], a: 1 },
                    { q: "HashSet allows duplicates?", options: ["Yes", "No", "Only null", "Only primitives"], a: 1 },
                    { q: "LinkedList implements?", options: ["List only", "List and Deque", "Map", "Set"], a: 1 },
                    { q: "Collections.sort() sorts?", options: ["Maps", "Sets", "Lists", "Arrays"], a: 2 },
                    { q: "TreeMap sorts by?", options: ["Insertion order", "Natural key order", "Value order", "Hash order"], a: 1 }
                ],
                posttest: [
                    { q: "HashMap get() returns null when?", options: ["Value is null", "Key not found", "Both A and B", "Never"], a: 2 },
                    { q: "Iterator remove() vs List remove()?", options: ["Same", "Iterator remove is safe during iteration", "List remove is safe", "Neither safe"], a: 1 },
                    { q: "ConcurrentModificationException thrown when?", options: ["Null access", "Modifying collection during iteration", "Empty collection", "Type mismatch"], a: 1 },
                    { q: "PriorityQueue orders by?", options: ["Insertion", "Natural ordering (min-heap)", "Size", "Random"], a: 1 },
                    { q: "Collections.unmodifiableList() creates?", options: ["New list copy", "Read-only view", "Sorted list", "Thread-safe list"], a: 1 }
                ],
                reference: '<ul><li><a href="https://docs.oracle.com/javase/8/docs/api/java/util/Collections.html" target="_blank">Java Collections API</a></li><li><em>Java Generics and Collections</em> – Maurice Naftalin</li></ul>',
                defaultCode: 'import java.util.*;\n\npublic class Main {\n    public static void main(String[] args) {\n        String[] words = {"apple","banana","apple","cherry","banana","apple"};\n        Map<String,Integer> freq = new HashMap<>();\n        for (String w : words)\n            freq.put(w, freq.getOrDefault(w, 0) + 1);\n        System.out.println("Word Frequencies:");\n        freq.forEach((k,v) -> System.out.println("  " + k + ": " + v));\n\n        Set<Integer> set = new HashSet<>(Arrays.asList(1,2,2,3,3,3,4));\n        System.out.println("\\nUnique values: " + set);\n\n        List<String> list = new ArrayList<>(Arrays.asList("Zebra","Apple","Mango"));\n        Collections.sort(list);\n        System.out.println("Sorted: " + list);\n    }\n}'
            },
            {
                id: "java-exp9",
                pistonLang: "java",
                pistonVersion: "15.0.2",
                title: "Multithreading Basics",
                aim: '<p><strong>Objective:</strong> Create and manage threads in Java using Thread class and Runnable interface.</p><ul><li>Create threads by extending Thread.</li><li>Create threads using Runnable.</li><li>Understand thread lifecycle and synchronization basics.</li></ul>',
                procedure: '<table class="formal-table"><thead><tr><th>Step</th><th>Description</th></tr></thead><tbody><tr><td>1</td><td>Run code and observe interleaved thread output.</td></tr><tr><td>2</td><td>Notice non-deterministic execution order.</td></tr></tbody></table>',
                pretest: [
                    { q: "Thread start method?", options: ["run()", "start()", "begin()", "execute()"], a: 1 },
                    { q: "Runnable interface method to implement?", options: ["start()", "execute()", "run()", "thread()"], a: 2 },
                    { q: "synchronized keyword prevents?", options: ["Thread creation", "Simultaneous access to block", "Thread termination", "None"], a: 1 },
                    { q: "Thread.sleep() throws?", options: ["IOException", "InterruptedException", "RuntimeException", "ThreadException"], a: 1 },
                    { q: "Daemon thread runs?", options: ["Indefinitely", "Until main thread ends", "Forever in background", "Only when JVM starts"], a: 1 }
                ],
                posttest: [
                    { q: "Race condition occurs when?", options: ["Single thread", "Multiple threads access shared state without synchronization", "Thread.sleep called", "Thread is daemon"], a: 1 },
                    { q: "join() method waits for?", options: ["Thread to start", "Thread to finish", "Thread to sleep", "Main to end"], a: 1 },
                    { q: "volatile keyword ensures?", options: ["Thread safety", "Visibility of variable across threads", "Atomicity", "Synchronization"], a: 1 },
                    { q: "ExecutorService manages?", options: ["File threads", "Thread pool", "Memory allocation", "Synchronization blocks"], a: 1 },
                    { q: "Deadlock occurs when?", options: ["One thread sleeps", "Two threads wait for each other's locks", "Thread pool full", "Race condition"], a: 1 }
                ],
                reference: '<ul><li><em>Java Concurrency in Practice</em> – Brian Goetz</li><li><a href="https://docs.oracle.com/javase/tutorial/essential/concurrency/" target="_blank">Oracle Concurrency Tutorial</a></li></ul>',
                defaultCode: 'public class Main {\n    static class Counter implements Runnable {\n        String name; int count;\n        Counter(String n, int c) { name = n; count = c; }\n        public void run() {\n            for (int i = 1; i <= count; i++) {\n                System.out.println(name + ": " + i);\n                try { Thread.sleep(100); } catch (InterruptedException e) {}\n            }\n        }\n    }\n    public static void main(String[] args) throws InterruptedException {\n        Thread t1 = new Thread(new Counter("Thread-A", 5));\n        Thread t2 = new Thread(new Counter("Thread-B", 5));\n        t1.start(); t2.start();\n        t1.join(); t2.join();\n        System.out.println("Both threads completed!");\n    }\n}'
            },
            {
                id: "java-exp10",
                pistonLang: "java",
                pistonVersion: "15.0.2",
                title: "Generics and Lambda Expressions",
                aim: '<p><strong>Objective:</strong> Write generic methods/classes and use lambda expressions and streams in Java 8+.</p><ul><li>Write generic methods using &lt;T&gt;.</li><li>Use lambda expressions and method references.</li><li>Use Stream API for functional-style operations.</li></ul>',
                procedure: '<table class="formal-table"><thead><tr><th>Step</th><th>Description</th></tr></thead><tbody><tr><td>1</td><td>Run code to see generic pair class.</td></tr><tr><td>2</td><td>Observe stream filter, map, and collect.</td></tr></tbody></table>',
                pretest: [
                    { q: "Lambda expression syntax?", options: ["(params) -> body", "(params) => body", "lambda params: body", "func(params){}"], a: 0 },
                    { q: "Stream.filter() returns?", options: ["List", "Stream", "Optional", "Collection"], a: 1 },
                    { q: "Method reference syntax?", options: ["Class::method", "Class.method()", "Class->method", "method@Class"], a: 0 },
                    { q: "Stream.collect(Collectors.toList()) returns?", options: ["Stream", "List", "Set", "Array"], a: 1 },
                    { q: "Optional is used to avoid?", options: ["ClassCastException", "NullPointerException", "IndexOutOfBoundsException", "IllegalArgumentException"], a: 1 }
                ],
                posttest: [
                    { q: "Stream.map() transforms?", options: ["Filter stream", "Each element to another", "Reduces to value", "Sorts stream"], a: 1 },
                    { q: "Stream.reduce() produces?", options: ["Stream", "Collection", "Single value", "Array"], a: 2 },
                    { q: "Predicate<T> functional interface has method?", options: ["apply()", "test()", "accept()", "get()"], a: 1 },
                    { q: "Streams are?", options: ["Reusable", "Consumed once", "Mutable collections", "Always parallel"], a: 1 },
                    { q: "Stream.sorted() sorts?", options: ["In place", "Returns new sorted stream", "Returns List", "Modifies source"], a: 1 }
                ],
                reference: '<ul><li><em>Java 8 in Action</em> – Urma, Fusco, Mycroft</li><li><a href="https://docs.oracle.com/javase/8/docs/api/java/util/stream/Stream.html" target="_blank">Java Stream API</a></li></ul>',
                defaultCode: 'import java.util.*;\nimport java.util.stream.*;\n\npublic class Main {\n    static <T> void printPair(T a, T b) {\n        System.out.println("Pair: (" + a + ", " + b + ")");\n    }\n    public static void main(String[] args) {\n        printPair("Hello", "World");\n        printPair(42, 99);\n\n        List<Integer> nums = Arrays.asList(1,2,3,4,5,6,7,8,9,10);\n        List<Integer> evens = nums.stream()\n            .filter(n -> n % 2 == 0)\n            .map(n -> n * n)\n            .collect(Collectors.toList());\n        System.out.println("Even squares: " + evens);\n\n        int sum = nums.stream().reduce(0, Integer::sum);\n        System.out.println("Sum 1-10: " + sum);\n\n        nums.stream().sorted(Comparator.reverseOrder()).limit(3)\n            .forEach(System.out::println);\n    }\n}'
            }
        ]
    },

    // ═══════════════════════════════════════════════════════════════════════
    // PYTHON PROGRAMMING
    // ═══════════════════════════════════════════════════════════════════════
    python: {
        name: "Python Programming",
        experiments: [
            {
                id: "python-input-fstrings",
                title: "Experiment 1: Input, Conversion, and f-Strings",
                aim: `
                    <p><strong>Objective:</strong> Read user input, convert values, and display formatted output using f-strings.</p>
                    <ul>
                        <li>Use <code>input()</code> to collect values.</li>
                        <li>Convert strings to integers.</li>
                        <li>Display readable output with f-strings.</li>
                    </ul>`,
                procedure: `
                    <table class="formal-table">
                        <thead><tr><th>Step</th><th>Description</th></tr></thead>
                        <tbody>
                            <tr><td>1</td><td>Review the simple Python script in the editor.</td></tr>
                            <tr><td>2</td><td>Enter a name and an age on separate lines in stdin.</td></tr>
                            <tr><td>3</td><td>Run the script and inspect the future age calculation.</td></tr>
                        </tbody>
                    </table>`,
                pretest: [
                    { q: "Which function reads input in Python?", options: ["scanf()", "input()", "read()", "cin"], a: 1 },
                    { q: "Python variables require explicit type declaration.", options: ["True", "False"], a: 1 },
                    { q: "Which symbol starts a comment in Python?", options: ["//", "#", "--", "/*"], a: 1 }
                ],
                posttest: [
                    { q: "What does <code>int('10')</code> return?", options: ["'10'", "10", "10.0", "Error"], a: 1 },
                    { q: "Which string format is valid?", options: ["f'Hi {name}'", "'Hi {name}'", "format name", "f(Hi name)"], a: 0 },
                    { q: "The default return type of input() is:", options: ["int", "float", "str", "bool"], a: 2 }
                ],
                reference: `
                    <h4>Recommended References</h4>
                    <ul>
                        <li><a href="https://docs.python.org/3/tutorial/index.html" target="_blank" rel="noreferrer">Python tutorial</a></li>
                        <li><em>Python Crash Course</em> by Eric Matthes.</li>
                    </ul>`,
                defaultCode: `name = input("Enter your name: ")\nage = int(input("Enter your age: "))\n\nprint(f"Hello {name}!")\nprint(f"In 5 years, you will be {age + 5} years old.")`,
                pistonLang: "python",
                pistonVersion: "3.10.0",
                explanations: `
                    <div class="explanation-block">
                        <h3>Python Blueprint Analysis</h3>
                        <div class="explanation-line-item">
                            <strong>age = int(input(...))</strong>
                            <p>The core <code>input()</code> feature returns characters as text strings. Wrapping it in <code>int()</code> parses standard string formats cleanly into numeric data types required for math operations.</p>
                        </div>
                        <div class="explanation-line-item">
                            <strong>print(f"Hello {name}!")</strong>
                            <p>An f-string allows expressions or target processing values to run live calculations dynamically embedded right inside literal text sequences.</p>
                        </div>
                    </div>`
            },
            {
                id: "python-exp2",
                pistonLang: "python",
                pistonVersion: "3.10.0",
                title: "Control Flow: if-elif-else and Loops",
                aim: '<p><strong>Objective:</strong> Master Python conditional statements and looping constructs.</p><ul><li>Use if-elif-else for branching.</li><li>Write for and while loops.</li><li>Use range(), break, continue, and pass.</li></ul>',
                procedure: '<table class="formal-table"><thead><tr><th>Step</th><th>Description</th></tr></thead><tbody><tr><td>1</td><td>Enter a number in stdin.</td></tr><tr><td>2</td><td>Observe grade and loop output.</td></tr></tbody></table>',
                pretest: [
                    { q: "Python uses indentation for?", options: ["Style only", "Block structure", "Comments", "Variables"], a: 1 },
                    { q: "range(1, 5) produces?", options: ["1,2,3,4,5", "1,2,3,4", "0,1,2,3,4", "1,2,3,4,5,6"], a: 1 },
                    { q: "pass statement does?", options: ["Exits loop", "Nothing (placeholder)", "Continues loop", "Returns None"], a: 1 },
                    { q: "elif keyword means?", options: ["else if", "else only", "end if", "exit if"], a: 0 },
                    { q: "for x in range(5) iterates?", options: ["1 to 5", "0 to 4", "0 to 5", "1 to 4"], a: 1 }
                ],
                posttest: [
                    { q: "while True with break is?", options: ["Infinite loop with conditional exit", "Always infinite", "Compile error", "Logic error"], a: 0 },
                    { q: "for i in [1,2,3] iterates over?", options: ["Indices", "Values", "Both", "Length"], a: 1 },
                    { q: "Ternary in Python?", options: ["a?b:c", "b if a else c", "if a then b else c", "a and b or c"], a: 1 },
                    { q: "enumerate() provides?", options: ["Values only", "(index, value) pairs", "Indices only", "Reversed order"], a: 1 },
                    { q: "range(10, 0, -2) produces?", options: ["10,8,6,4,2", "10,8,6,4,2,0", "2,4,6,8,10", "0,2,4,6,8,10"], a: 0 }
                ],
                reference: '<ul><li><em>Automate the Boring Stuff with Python</em> – Al Sweigart</li><li><a href="https://realpython.com/python-conditional-statements/" target="_blank">RealPython – Conditionals</a></li></ul>',
                defaultCode: 'marks = int(input("Enter marks (0-100): "))\nif marks >= 90:\n    print("Grade: A")\nelif marks >= 75:\n    print("Grade: B")\nelif marks >= 60:\n    print("Grade: C")\nelse:\n    print("Grade: F")\n\nprint("\\nPrime numbers up to 30:")\nfor num in range(2, 31):\n    is_prime = all(num % i != 0 for i in range(2, int(num**0.5)+1))\n    if is_prime:\n        print(num, end=" ")\nprint()'
            },
            {
                id: "python-exp3",
                pistonLang: "python",
                pistonVersion: "3.10.0",
                title: "Lists, Tuples and Slicing",
                aim: '<p><strong>Objective:</strong> Work with Python lists and tuples, including slicing and comprehensions.</p><ul><li>Create and modify lists.</li><li>Use list methods: append, pop, sort, reverse.</li><li>Use tuple immutability and slicing.</li></ul>',
                procedure: '<table class="formal-table"><thead><tr><th>Step</th><th>Description</th></tr></thead><tbody><tr><td>1</td><td>Run code to see list operations.</td></tr><tr><td>2</td><td>Observe slicing syntax.</td></tr><tr><td>3</td><td>Note tuple immutability.</td></tr></tbody></table>',
                pretest: [
                    { q: "Python list is?", options: ["Immutable", "Mutable ordered collection", "Unique elements only", "Fixed size"], a: 1 },
                    { q: "Tuple is?", options: ["Mutable", "Immutable ordered collection", "Unordered", "Like set"], a: 1 },
                    { q: "lst[1:4] gives?", options: ["Index 1,2,3,4", "Index 1,2,3", "Index 0,1,2,3", "Index 2,3,4"], a: 1 },
                    { q: "lst[-1] gives?", options: ["Error", "First element", "Last element", "Length-1"], a: 2 },
                    { q: "list.append() vs list.extend()?", options: ["Same", "append adds single item, extend adds iterable", "extend adds single item", "append adds iterable"], a: 1 }
                ],
                posttest: [
                    { q: "len([1,2,3]) = ?", options: ["2", "3", "4", "0"], a: 1 },
                    { q: "Sorted list of [3,1,2] using sorted()?", options: ["Modifies original", "Returns new sorted list", "Returns tuple", "Error"], a: 1 },
                    { q: "Unpacking: a,b,c = [1,2,3]?", options: ["Error", "a=1,b=2,c=3", "a=[1,2,3]", "a=3,b=2,c=1"], a: 1 },
                    { q: "List * 3 does?", options: ["Multiply elements", "Repeat list 3 times", "Power of 3", "Error"], a: 1 },
                    { q: "Nested list [1,[2,3],4][1][0] = ?", options: ["1", "2", "3", "[2,3]"], a: 1 }
                ],
                reference: '<ul><li><a href="https://docs.python.org/3/tutorial/datastructures.html" target="_blank">Python Data Structures</a></li><li><em>Fluent Python</em> – Luciano Ramalho</li></ul>',
                defaultCode: '# Lists\nfruits = ["banana", "apple", "cherry", "mango"]\nprint("Original:", fruits)\nfruits.append("grape")\nfruits.sort()\nprint("Sorted:", fruits)\nprint("Slice [1:3]:", fruits[1:3])\nprint("Reversed:", fruits[::-1])\n\n# Tuple\ncoords = (10, 20, 30)\nprint("\\nTuple:", coords)\nprint("Sum:", sum(coords))\nx, y, z = coords\nprint(f"Unpacked: x={x}, y={y}, z={z}")\n\n# List comprehension\nsquares = [x**2 for x in range(1, 6)]\nprint("\\nSquares:", squares)'
            },
            {
                id: "python-lists-aggregation",
                title: "Experiment 2: Lists and Aggregation",
                aim: `
                    <p><strong>Objective:</strong> Work with Python lists and compute summary values from user input.</p>
                    <ul>
                        <li>Split input into multiple values.</li>
                        <li>Convert a list of strings into integers.</li>
                        <li>Use built-in functions such as <code>sum()</code> and <code>max()</code>.</li>
                    </ul>`,
                procedure: `
                    <table class="formal-table">
                        <thead><tr><th>Step</th><th>Description</th></tr></thead>
                        <tbody>
                            <tr><td>1</td><td>Enter space-separated integers into stdin.</td></tr>
                            <tr><td>2</td><td>Run the program and observe the total and maximum value.</td></tr>
                            <tr><td>3</td><td>Extend the code to also print the average.</td></tr>
                        </tbody>
                    </table>`,
                pretest: [
                    { q: "Which method splits a string into a list?", options: ["join()", "split()", "slice()", "append()"], a: 1 },
                    { q: "Which collection type is ordered and mutable in Python?", options: ["set", "tuple", "list", "dict only"], a: 2 },
                    { q: "sum([1, 2, 3]) returns:", options: ["5", "6", "123", "Error"], a: 1 }
                ],
                posttest: [
                    { q: "Which function returns the largest value?", options: ["top()", "largest()", "max()", "high()"], a: 2 },
                    { q: "List comprehension can be used for conversion.", options: ["True", "False"], a: 0 },
                    { q: "The expression <code>[int(x) for x in items]</code> creates:", options: ["A string", "A generator only", "A new list", "A tuple"], a: 2 }
                ],
                reference: `
                    <h4>Recommended References</h4>
                    <ul>
                        <li><a href="https://realpython.com/" target="_blank" rel="noreferrer">Real Python</a></li>
                        <li>Standard list exercises from Python lab manuals.</li>
                    </ul>`,
                defaultCode: `raw_values = input("Enter space-separated numbers: ")\nnumbers = [int(value) for value in raw_values.split()]\n\nprint(f"Numbers: {numbers}")\nprint(f"Sum = {sum(numbers)}")\nprint(f"Maximum = {max(numbers)}")`,
                pistonLang: "python",
                pistonVersion: "3.10.0",
                explanations: `
                    <div class="explanation-block">
                        <h3>Python Collection Lists</h3>
                        <div class="explanation-line-item">
                            <strong>numbers = [int(x) for x in raw.split()]</strong>
                            <p>Uses list comprehension to quickly separate space-divided string characters and transform them into real integers.</p>
                        </div>
                        <div class="explanation-line-item">
                            <strong>sum(numbers) / max(numbers)</strong>
                            <p>Applies highly optimized built-in vector utility algorithms natively map-reducing your collections instantly.</p>
                        </div>
                    </div>`
            },
            {
                id: "python-exp5",
                pistonLang: "python",
                pistonVersion: "3.10.0",
                title: "Functions, *args and **kwargs",
                aim: '<p><strong>Objective:</strong> Define Python functions with default, variable, and keyword arguments; understand closures and decorators.</p><ul><li>Use *args for variable positional args.</li><li>Use **kwargs for keyword arguments.</li><li>Write simple decorators.</li></ul>',
                procedure: '<table class="formal-table"><thead><tr><th>Step</th><th>Description</th></tr></thead><tbody><tr><td>1</td><td>Run code to see *args and **kwargs behavior.</td></tr><tr><td>2</td><td>Observe decorator wrapping.</td></tr></tbody></table>',
                pretest: [
                    { q: "Default parameter syntax?", options: ["def f(x=5)", "def f(x:5)", "def f(x==5)", "def f(default x=5)"], a: 0 },
                    { q: "*args allows?", options: ["Keyword arguments", "Variable positional arguments", "Only 2 args", "Named args only"], a: 1 },
                    { q: "**kwargs is of type?", options: ["list", "tuple", "dict", "set"], a: 2 },
                    { q: "Lambda function syntax?", options: ["lambda x: x*2", "func x: x*2", "f = (x) => x*2", "def lambda x:x*2"], a: 0 },
                    { q: "return without value returns?", options: ["0", "False", "None", "Error"], a: 2 }
                ],
                posttest: [
                    { q: "Closure captures?", options: ["Global variables", "Variables from enclosing scope", "Local only", "Class attributes"], a: 1 },
                    { q: "Decorator @ syntax does?", options: ["Comments", "Wraps function with another", "Creates class", "Defines property"], a: 1 },
                    { q: "functools.wraps used in decorators to?", options: ["Speed up function", "Preserve wrapped function metadata", "Copy function", "Remove decorator"], a: 1 },
                    { q: "First-class functions mean?", options: ["Main functions only", "Functions as values/arguments/returns", "Static methods", "Global functions only"], a: 1 },
                    { q: "Generator function uses?", options: ["return", "yield", "produce", "send"], a: 1 }
                ],
                reference: '<ul><li><em>Fluent Python</em> – Luciano Ramalho</li><li><a href="https://realpython.com/primer-on-python-decorators/" target="_blank">RealPython – Decorators</a></li></ul>',
                defaultCode: 'def greet(name, greeting="Hello"):\n    return f"{greeting}, {name}!"\n\ndef total(*args):\n    return sum(args)\n\ndef profile(**kwargs):\n    for k, v in kwargs.items():\n        print(f"  {k}: {v}")\n\ndef timer(func):\n    def wrapper(*args, **kwargs):\n        print(f"Calling {func.__name__}...")\n        result = func(*args, **kwargs)\n        print("Done!")\n        return result\n    return wrapper\n\n@timer\ndef add(a, b): return a + b\n\nprint(greet("Alice"))\nprint(greet("Bob", "Hi"))\nprint("Total:", total(1, 2, 3, 4, 5))\nprofile(name="Alice", age=21, gpa=3.9)\nprint("Add result:", add(10, 20))'
            },
            {
                id: "python-exp6",
                pistonLang: "python",
                pistonVersion: "3.10.0",
                title: "Object-Oriented Programming",
                aim: '<p><strong>Objective:</strong> Implement OOP concepts: classes, inheritance, encapsulation, and polymorphism in Python.</p><ul><li>Define classes with __init__, methods, and properties.</li><li>Implement inheritance using super().</li><li>Use dunder methods (__str__, __len__).</li></ul>',
                procedure: '<table class="formal-table"><thead><tr><th>Step</th><th>Description</th></tr></thead><tbody><tr><td>1</td><td>Run code and observe class hierarchy.</td></tr><tr><td>2</td><td>See polymorphic speak() calls.</td></tr></tbody></table>',
                pretest: [
                    { q: "self in Python class methods refers to?", options: ["Global scope", "Current instance", "Class itself", "Parent class"], a: 1 },
                    { q: "__init__ is called when?", options: ["Class defined", "Object created", "Method called", "Program starts"], a: 1 },
                    { q: "Name mangling with __ (double underscore)?", options: ["Makes public", "Makes truly private", "Makes protected", "Makes static"], a: 1 },
                    { q: "super() calls?", options: ["Sibling class", "Parent class", "Grandparent class", "Object class"], a: 1 },
                    { q: "@property decorator creates?", options: ["Static method", "Class method", "Getter property", "Setter only"], a: 2 }
                ],
                posttest: [
                    { q: "__str__ is called by?", options: ["repr()", "str()/print()", "len()", "hash()"], a: 1 },
                    { q: "isinstance(obj, ClassName) checks?", options: ["Exact type", "Type or subclass", "Only subclass", "Only exact type"], a: 1 },
                    { q: "@classmethod first parameter is?", options: ["self", "cls", "class", "type"], a: 1 },
                    { q: "@staticmethod has access to?", options: ["Instance and class", "Class only", "Neither instance nor class", "Instance only"], a: 2 },
                    { q: "Multiple inheritance in Python?", options: ["Not supported", "Supported with MRO (C3 linearization)", "Only 2 parents", "Only interfaces"], a: 1 }
                ],
                reference: '<ul><li><em>Python 3 Object-Oriented Programming</em> – Dusty Phillips</li><li><a href="https://realpython.com/python3-object-oriented-programming/" target="_blank">RealPython – OOP</a></li></ul>',
                defaultCode: 'class Animal:\n    def __init__(self, name):\n        self.name = name\n    def speak(self):\n        return f"{self.name} makes a sound."\n    def __str__(self):\n        return f"Animal({self.name})"\n\nclass Dog(Animal):\n    def speak(self):\n        return f"{self.name} says Woof!"\n\nclass Cat(Animal):\n    def speak(self):\n        return f"{self.name} says Meow!"\n\nclass BankAccount:\n    def __init__(self, owner, balance=0):\n        self.owner = owner\n        self.__balance = balance  # private\n    @property\n    def balance(self): return self.__balance\n    def deposit(self, amt): self.__balance += amt\n\nanimals = [Dog("Rex"), Cat("Whiskers"), Dog("Buddy")]\nfor a in animals:\n    print(a.speak())\n\nacc = BankAccount("Alice", 1000)\nacc.deposit(500)\nprint(f"\\n{acc.owner}\'s balance: {acc.balance}")'
            },
            {
                id: "python-exp7",
                pistonLang: "python",
                pistonVersion: "3.10.0",
                title: "File Handling and JSON",
                aim: '<p><strong>Objective:</strong> Read, write, and process files in Python; serialize data using JSON module.</p><ul><li>Use open(), read(), write(), with statement.</li><li>Use json.dumps() and json.loads().</li><li>Handle file exceptions with try-except.</li></ul>',
                procedure: '<table class="formal-table"><thead><tr><th>Step</th><th>Description</th></tr></thead><tbody><tr><td>1</td><td>Run code to see file write and read.</td></tr><tr><td>2</td><td>Observe JSON serialization/deserialization.</td></tr></tbody></table>',
                pretest: [
                    { q: "with open() ensures?", options: ["Fast read", "Auto close file", "Binary mode", "Append mode"], a: 1 },
                    { q: "File mode 'a' means?", options: ["Read", "Write (overwrite)", "Append", "Binary"], a: 2 },
                    { q: "json.dumps() converts?", options: ["JSON string to dict", "Dict to JSON string", "File to JSON", "None"], a: 1 },
                    { q: "readlines() returns?", options: ["One line string", "List of lines", "Generator", "None"], a: 1 },
                    { q: "File exception for missing file?", options: ["ValueError", "TypeError", "FileNotFoundError", "IOError"], a: 2 }
                ],
                posttest: [
                    { q: "json.loads() converts?", options: ["Dict to JSON", "JSON string to Python object", "File to dict", "None"], a: 1 },
                    { q: "open(file, 'rb') opens?", options: ["Read text", "Read binary", "Write binary", "Random binary"], a: 1 },
                    { q: "file.seek(0) does?", options: ["Closes file", "Moves to start", "Reads one char", "Flushes buffer"], a: 1 },
                    { q: "CSV handling in Python uses?", options: ["json module", "csv module", "file module", "io module"], a: 1 },
                    { q: "Pickling in Python?", options: ["Text serialization", "Binary serialization of objects", "JSON encoding", "XML encoding"], a: 1 }
                ],
                reference: '<ul><li><a href="https://docs.python.org/3/library/json.html" target="_blank">Python JSON Module</a></li><li><em>Python Cookbook</em> – Beazley &amp; Jones</li></ul>',
                defaultCode: 'import json\n\n# Write file\nwith open("students.txt", "w") as f:\n    f.write("Alice\\n")\n    f.write("Bob\\n")\n    f.write("Carol\\n")\n\n# Read file\nprint("File contents:")\nwith open("students.txt", "r") as f:\n    for line in f:\n        print(" ", line.strip())\n\n# JSON\ndata = {"name": "Alice", "age": 21, "courses": ["CS101", "CS201"]}\njson_str = json.dumps(data, indent=2)\nprint("\\nJSON String:\\n", json_str)\n\nparsed = json.loads(json_str)\nprint("\\nParsed name:", parsed["name"])\nprint("Courses:", parsed["courses"])'
            },
            {
                id: "python-exp8",
                pistonLang: "python",
                pistonVersion: "3.10.0",
                title: "Exception Handling",
                aim: '<p><strong>Objective:</strong> Handle exceptions in Python using try, except, else, finally, and custom exceptions.</p><ul><li>Catch specific and generic exceptions.</li><li>Use else and finally blocks.</li><li>Create and raise custom exception classes.</li></ul>',
                procedure: '<table class="formal-table"><thead><tr><th>Step</th><th>Description</th></tr></thead><tbody><tr><td>1</td><td>Enter 0 in stdin to trigger ZeroDivisionError.</td></tr><tr><td>2</td><td>Enter a letter to trigger ValueError.</td></tr><tr><td>3</td><td>Enter valid numbers for normal flow.</td></tr></tbody></table>',
                pretest: [
                    { q: "Syntax for catching exceptions in Python?", options: ["try/catch", "try/except", "begin/rescue", "error/handle"], a: 1 },
                    { q: "else in try-except runs when?", options: ["Exception occurs", "No exception occurs", "Always", "Never"], a: 1 },
                    { q: "raise keyword?", options: ["Catches exception", "Raises exception", "Logs exception", "Ignores exception"], a: 1 },
                    { q: "BaseException is?", options: ["Specific exception", "Root of exception hierarchy", "User exception", "None"], a: 1 },
                    { q: "except Exception as e gives?", options: ["Type of exception", "Exception instance", "Error code", "None"], a: 1 }
                ],
                posttest: [
                    { q: "except (TypeError, ValueError) catches?", options: ["TypeError only", "ValueError only", "Both", "Neither"], a: 2 },
                    { q: "Custom exception class inherits from?", options: ["object", "Exception or its subclass", "BaseException only", "Error"], a: 1 },
                    { q: "finally runs even if?", options: ["No exception", "Exception occurs", "Return in try", "All above"], a: 3 },
                    { q: "assert statement raises?", options: ["ValueError", "AssertionError", "RuntimeError", "SyntaxError"], a: 1 },
                    { q: "Context manager __exit__ is called?", options: ["Only on success", "Only on exception", "Always when leaving with block", "Never"], a: 2 }
                ],
                reference: '<ul><li><a href="https://docs.python.org/3/tutorial/errors.html" target="_blank">Python Errors and Exceptions</a></li><li><em>Python Tricks</em> – Dan Bader</li></ul>',
                defaultCode: 'class NegativeValueError(Exception):\n    def __init__(self, val):\n        super().__init__(f"Negative value not allowed: {val}")\n\ndef safe_sqrt(n):\n    if n < 0:\n        raise NegativeValueError(n)\n    return n ** 0.5\n\ntry:\n    a = float(input("Enter first number: "))\n    b = float(input("Enter second number: "))\n    print(f"Division: {a/b:.4f}")\n    print(f"Sqrt(a): {safe_sqrt(a):.4f}")\nexcept ZeroDivisionError:\n    print("Error: Cannot divide by zero!")\nexcept ValueError:\n    print("Error: Please enter valid numbers!")\nexcept NegativeValueError as e:\n    print(f"Custom Error: {e}")\nelse:\n    print("All operations successful!")\nfinally:\n    print("Program execution complete.")'
            },
            {
                id: "python-exp9",
                pistonLang: "python",
                pistonVersion: "3.10.0",
                title: "List Comprehensions and Generators",
                aim: '<p><strong>Objective:</strong> Write Pythonic code using list/dict/set comprehensions and generator functions.</p><ul><li>Write list comprehensions with conditions.</li><li>Use generator expressions for memory efficiency.</li><li>Compare comprehensions vs loops.</li></ul>',
                procedure: '<table class="formal-table"><thead><tr><th>Step</th><th>Description</th></tr></thead><tbody><tr><td>1</td><td>Run code to see various comprehensions.</td></tr><tr><td>2</td><td>Observe generator lazy evaluation.</td></tr></tbody></table>',
                pretest: [
                    { q: "List comprehension syntax?", options: ["[x for x in lst]", "{x for x in lst}", "(x for x in lst)", "list(x for x in lst)"], a: 0 },
                    { q: "Generator expression uses?", options: ["[]", "{}", "()", "yield"], a: 2 },
                    { q: "yield in a function makes it?", options: ["A class", "A generator", "A decorator", "A lambda"], a: 1 },
                    { q: "Set comprehension uses?", options: ["[]", "{}", "()", "set()"], a: 1 },
                    { q: "Generator is evaluated?", options: ["Eagerly", "Lazily (on demand)", "Never", "At definition"], a: 1 }
                ],
                posttest: [
                    { q: "[x**2 for x in range(5) if x%2==0] = ?", options: ["[0,4,16]", "[0,1,4,9,16]", "[4,16]", "[0,4]"], a: 0 },
                    { q: "Dict comprehension: {k:v for k,v in pairs}?", options: ["Creates list", "Creates dict", "Creates set", "Error"], a: 1 },
                    { q: "next() on generator?", options: ["Restarts generator", "Returns next yielded value", "Returns list", "Raises error always"], a: 1 },
                    { q: "Memory advantage of generators?", options: ["Faster CPU", "Don't store all values in memory", "Better type safety", "None"], a: 1 },
                    { q: "itertools module provides?", options: ["File I/O tools", "Advanced iteration utilities", "Math functions", "String tools"], a: 1 }
                ],
                reference: '<ul><li><em>Fluent Python</em> – Luciano Ramalho</li><li><a href="https://realpython.com/list-comprehension-python/" target="_blank">RealPython – Comprehensions</a></li></ul>',
                defaultCode: 'import itertools\n\nnums = range(1, 11)\n\n# List comprehension\nsquares = [x**2 for x in nums]\nprint("Squares:", squares)\n\n# Filtered comprehension\nevens = [x for x in nums if x % 2 == 0]\nprint("Evens:", evens)\n\n# Dict comprehension\nsq_dict = {x: x**2 for x in range(1, 6)}\nprint("Square dict:", sq_dict)\n\n# Set comprehension\nunique = {x % 5 for x in range(20)}\nprint("Unique remainders mod 5:", unique)\n\n# Generator\ndef fibonacci_gen():\n    a, b = 0, 1\n    while True:\n        yield a\n        a, b = b, a+b\n\nfib = fibonacci_gen()\nprint("First 10 Fibonacci:", [next(fib) for _ in range(10)])'
            },
            {
                id: "python-exp10",
                pistonLang: "python",
                pistonVersion: "3.10.0",
                title: "Modules, Packages and Standard Library",
                aim: '<p><strong>Objective:</strong> Use Python\'s standard library modules and understand module/package structure.</p><ul><li>Import and use math, os, sys, datetime, random modules.</li><li>Create custom modules.</li><li>Understand __name__ == "__main__".</li></ul>',
                procedure: '<table class="formal-table"><thead><tr><th>Step</th><th>Description</th></tr></thead><tbody><tr><td>1</td><td>Run code to see standard library usage.</td></tr><tr><td>2</td><td>Observe math, random, datetime outputs.</td></tr></tbody></table>',
                pretest: [
                    { q: "import math; math.sqrt(16) = ?", options: ["4", "4.0", "2.0", "Error"], a: 1 },
                    { q: "__name__ == '__main__' is True when?", options: ["Module imported", "Script run directly", "Always", "Never"], a: 1 },
                    { q: "from math import * imports?", options: ["Nothing", "All public names from math", "Only sqrt", "Module object"], a: 1 },
                    { q: "os.path.join() creates?", options: ["URL", "OS-independent file path", "Zip file", "Database path"], a: 1 },
                    { q: "random.randint(1,10) returns?", options: ["Float 1-10", "Int 1-10 inclusive", "Int 1-9", "Float 0-1"], a: 1 }
                ],
                posttest: [
                    { q: "sys.argv[0] contains?", options: ["First argument", "Script name", "Python version", "None"], a: 1 },
                    { q: "datetime.now() returns?", options: ["String", "datetime object", "Timestamp int", "None"], a: 1 },
                    { q: "collections.Counter counts?", options: ["Lines in file", "Element frequencies", "File size", "Errors"], a: 1 },
                    { q: "pathlib.Path is preferred over os.path because?", options: ["Faster", "Object-oriented path handling", "Cross-platform only", "No difference"], a: 1 },
                    { q: "Package __init__.py purpose?", options: ["Main program entry", "Marks directory as package", "Imports all modules", "Defines classes"], a: 1 }
                ],
                reference: '<ul><li><a href="https://docs.python.org/3/library/" target="_blank">Python Standard Library</a></li><li><em>Python Module of the Week</em> – Doug Hellmann</li></ul>',
                defaultCode: 'import math\nimport random\nimport os\nfrom datetime import datetime\nfrom collections import Counter\n\nprint("=== Math Module ===")\nprint(f"pi = {math.pi:.4f}")\nprint(f"sqrt(144) = {math.sqrt(144)}")\nprint(f"ceil(4.2) = {math.ceil(4.2)}")\n\nprint("\\n=== Random Module ===")\nprint(f"randint(1,100): {random.randint(1,100)}")\nitems = ["apple", "banana", "cherry"]\nrandom.shuffle(items)\nprint(f"Shuffled: {items}")\n\nprint("\\n=== Datetime ===")\nnow = datetime.now()\nprint(f"Now: {now.strftime(\'%Y-%m-%d %H:%M:%S\')}")\n\nprint("\\n=== Counter ===")\nwords = "the quick brown fox jumps over the lazy dog".split()\nc = Counter(words)\nprint(f"Most common: {c.most_common(3)}")'
            }
        ]
    }
};

const sections = [
    { id: "aim", title: "Aim" },
    { id: "procedure", title: "Procedure" },
    { id: "pretest", title: "Pre-Test" },
    { id: "simulation", title: "Simulation" },
    { id: "visualizer", title: "Code Simulation" },
    { id: "posttest", title: "Post-Test" },
    { id: "reference", title: "Reference" },
    { id: "feedback", title: "Feedback" }
];

let currentLang = null;
let currentSection = null;
let currentExperimentIndex = 0;
let editorInstance = null;
let fallbackEditor = null;

const appDiv = document.getElementById("app");

function getCurrentExperiment() {
    if (!currentLang) return null;
    return labData[currentLang].experiments[currentExperimentIndex];
}

function disposeEditor() {
    if (editorInstance) {
        editorInstance.dispose();
        editorInstance = null;
    }
    fallbackEditor = null;
}

function renderHome() {
    disposeEditor();
    currentLang = null;
    currentSection = null;
    currentExperimentIndex = null;

    appDiv.innerHTML = `
        <div class="home-scroll-wrapper">
            <section class="hero-section">
                <h1 class="hero-title">Virtual Programming Laboratory</h1>
                <p class="hero-subtitle">Master Data Structures, Algorithms, and Core Computer Science through 40 structured experiments with real-time code execution and automated assessments.</p>
                <button class="hero-cta" id="exploreLabsBtn">Explore Labs</button>
            </section>

            <section class="features-section">
                <div class="features-grid">
                    <div class="feature-card">
                        <div class="feature-icon">⚡</div>
                        <h3>40 Experiments</h3>
                        <p>10 structured experiments per language covering fundamentals to advanced topics.</p>
                    </div>
                    <div class="feature-card">
                        <div class="feature-icon">📊</div>
                        <h3>MCQ Assessments</h3>
                        <p>Built-in Pre-Test and Post-Test with instant automated grading for every experiment.</p>
                    </div>
                    <div class="feature-card">
                        <div class="feature-icon">🎓</div>
                        <h3>Real-time Execution</h3>
                        <p>Write and run C, C++, Java, Python code instantly with live terminal output.</p>
                    </div>
                </div>
            </section>

            <section id="labs" class="labs-section">
                <h2 class="labs-section-title">Available Laboratory Modules</h2>
                <div class="lang-grid">
                    <div class="lang-card">
                        <div class="lang-card-header lang-c">C</div>
                        <div class="lang-card-body">
                            <h3>C Programming</h3>
                            <p>Systems programming, pointers, memory management, data structures, and algorithms.</p>
                            <button class="launch-btn" data-lang-btn="c">Open Lab →</button>
                        </div>
                    </div>
                    <div class="lang-card">
                        <div class="lang-card-header lang-cpp">C++</div>
                        <div class="lang-card-body">
                            <h3>C++ Programming</h3>
                            <p>OOP, templates, STL, exceptions, operator overloading, and smart pointers.</p>
                            <button class="launch-btn" data-lang-btn="cpp">Open Lab →</button>
                        </div>
                    </div>
                    <div class="lang-card">
                        <div class="lang-card-header lang-java">Java</div>
                        <div class="lang-card-body">
                            <h3>Java Programming</h3>
                            <p>Classes, inheritance, collections, concurrency, generics, and lambda expressions.</p>
                            <button class="launch-btn" data-lang-btn="java">Open Lab →</button>
                        </div>
                    </div>
                    <div class="lang-card">
                        <div class="lang-card-header lang-python">Python</div>
                        <div class="lang-card-body">
                            <h3>Python Programming</h3>
                            <p>Dynamic typing, OOP, comprehensions, modules, and the Python standard library.</p>
                            <button class="launch-btn" data-lang-btn="python">Open Lab →</button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    `;

    document.getElementById('exploreLabsBtn').addEventListener('click', () => {
        document.getElementById('labs').scrollIntoView({ behavior: 'smooth' });
    });

    appDiv.querySelectorAll('[data-lang-btn]').forEach(button => {
        button.addEventListener('click', () => {
            const langKey = button.getAttribute('data-lang-btn');
            navigateTo(langKey, null, null);
        });
    });
}

function renderExperimentList() {
    disposeEditor();
    currentSection = null;
    const lang = labData[currentLang];
    
    let html = '';
    lang.experiments.forEach((exp, index) => {
        html += `
            <div class="exp-card" data-exp-index="${index}">
                <div class="exp-number">Exp ${index + 1}</div>
                <div class="exp-info">
                    <h3>${exp.title}</h3>
                    <span class="exp-tag">8 Sections</span>
                </div>
                <div class="exp-arrow">→</div>
            </div>
        `;
    });

    appDiv.innerHTML = `
        <div class="exp-list-page">
            <div class="exp-list-header">
                <button class="back-btn" id="backToHomeBtn">← Back to Languages</button>
                <h2>${lang.name} Laboratory</h2>
                <p>Select an experiment to begin</p>
            </div>
            <div class="exp-list">${html}</div>
        </div>
    `;

    document.getElementById('backToHomeBtn').addEventListener('click', () => {
        navigateTo(null, null, null);
    });

    appDiv.querySelectorAll('.exp-card').forEach(card => {
        card.addEventListener('click', () => {
            const index = card.getAttribute('data-exp-index');
            navigateTo(currentLang, 'aim', index);
        });
    });
}

function renderLab() {
    disposeEditor();

    const lang = labData[currentLang];
    const experiment = getCurrentExperiment();

    const sidebarHtml = sections.map((section) => `
        <button
            class="nav-item ${currentSection === section.id ? "active" : ""}"
            type="button"
            data-section-id="${section.id}"
        >
            ${section.title}
        </button>
    `).join("");

    let contentHtml = "";

    if (currentSection === "aim") {
        contentHtml = renderContentSection("Aim", experiment.aim);
    } else if (currentSection === "procedure") {
        contentHtml = renderContentSection("Procedure", experiment.procedure);
    } else if (currentSection === "reference") {
        contentHtml = renderContentSection("Reference", experiment.reference);
    } else if (currentSection === "pretest" || currentSection === "posttest") {
        contentHtml = renderTestSection(experiment[currentSection], currentSection);
    } else if (currentSection === "feedback") {
        contentHtml = renderFeedbackSection();
    } else if (currentSection === "simulation") {
        contentHtml = renderSimulationSection(experiment);
    } else if (currentSection === "visualizer") {
        contentHtml = renderVisualizerSection(experiment);
    }

    appDiv.innerHTML = `
        <div class="lab-layout">
            <aside class="sidebar">
                <div class="sidebar-header">
                    <span class="sidebar-subtitle">Exp ${currentExperimentIndex + 1} of ${lang.experiments.length}</span>
                    <h3>${lang.name}</h3>
                </div>
                ${sidebarHtml}
            </aside>
            <section class="lab-content">
                <div class="content-header">
                    <button class="back-btn" type="button" id="backToHomeBtn">← All Experiments</button>
                    <span class="experiment-header-title">Exp ${currentExperimentIndex + 1}: ${experiment.title}</span>
                </div>
                ${contentHtml}
            </section>
        </div>
    `;

    appDiv.querySelectorAll('.sidebar .nav-item').forEach(button => {
        button.addEventListener('click', () => {
            const targetSec = button.getAttribute('data-section-id');
            navigateTo(currentLang, targetSec, currentExperimentIndex);
        });
    });

    document.getElementById('backToHomeBtn').addEventListener('click', () => {
        navigateTo(currentLang, null, null);
    });

    if (currentSection === "pretest" || currentSection === "posttest") {
        appDiv.querySelector('.submit-btn').addEventListener('click', () => {
            checkAnswers(currentSection);
        });
    } else if (currentSection === "feedback") {
        appDiv.querySelector('.submit-btn').addEventListener('click', submitFeedback);
    } else if (currentSection === "simulation") {
        appDiv.querySelector('.run-btn').addEventListener('click', runCode);
        appDiv.querySelector('.reset-btn').addEventListener('click', resetCode);
        appDiv.querySelector('.clear-btn').addEventListener('click', clearTerminal);
        initEditor(experiment);
    } else if (currentSection === "visualizer") {
        initVisualizer(experiment);
    }
}

function renderContentSection(title, body) {
    return `
        <div class="section-container">
            <h2 class="section-title">${title}</h2>
            <div class="content-body">${body}</div>
        </div>
    `;
}

function escapeHtml(text) {
    if (typeof text !== 'string') return text;
    // Unescape first to avoid double-escaping
    let temp = text
        .replace(/&amp;/g, "&")
        .replace(/&lt;/g, "<")
        .replace(/&gt;/g, ">")
        .replace(/&quot;/g, '"')
        .replace(/&#39;/g, "'");
    // Escape properly
    return temp
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#39;");
}

function renderTestSection(testData, sectionType) {
    const title = sectionType === "pretest" ? "Pre-Test Evaluation" : "Post-Test Evaluation";

    return `
        <div class="section-container">
            <h2 class="section-title">${title}</h2>
            <div class="content-body">
                <p>Select the correct option for each question and click Submit.</p>
                <div class="test-form" id="testForm">
                    ${testData.map((question, qIndex) => `
                        <div class="question-block" id="qblock_${qIndex}">
                            <div class="question-text">${qIndex + 1}. ${escapeHtml(question.q)}</div>
                            <div class="options-group">
                                ${question.options.map((option, oIndex) => `
                                    <label class="option-label">
                                        <input type="radio" name="q_${qIndex}" value="${oIndex}">
                                        ${escapeHtml(option)}
                                    </label>
                                `).join("")}
                            </div>
                        </div>
                    `).join("")}
                    <button class="submit-btn" type="button">Submit Assessment</button>
                    <div id="testResult" class="result-msg"></div>
                </div>
            </div>
        </div>
    `;
}

function renderFeedbackSection() {
    return `
        <div class="section-container">
            <h2 class="section-title">Experiment Feedback</h2>
            <div class="content-body">
                <div class="test-form">
                    <div class="form-group">
                        <label for="fbName">Student Name</label>
                        <input type="text" class="form-control" id="fbName" placeholder="Enter your full name">
                    </div>
                    <div class="form-group">
                        <label for="fbEmail">Email Address</label>
                        <input type="email" class="form-control" id="fbEmail" placeholder="Enter your email">
                    </div>
                    <div class="form-group">
                        <label for="fbRating">Overall Experience Rating (1-5)</label>
                        <select class="form-control" id="fbRating">
                            <option value="5">5 - Excellent</option>
                            <option value="4">4 - Very Good</option>
                            <option value="3">3 - Good</option>
                            <option value="2">2 - Fair</option>
                            <option value="1">1 - Poor</option>
                        </select>
                    </div>
                    <div class="form-group">
                        <label for="fbComments">Additional Comments</label>
                        <textarea class="form-control" id="fbComments" rows="5" placeholder="Write your feedback here..."></textarea>
                    </div>
                    <button class="submit-btn" type="button">Submit Feedback</button>
                    <div id="feedbackResult" class="result-msg"></div>
                </div>
            </div>
        </div>
    `;
}

const stdinHints = {
    // C Programming Language
    "c-basic-io": {
        placeholder: "e.g. 15 25",
        hint: "Enter two integers separated by a space (representing variables a and b)."
    },
    "c-exp2": {
        placeholder: "e.g. 12",
        hint: "Enter an integer (representing variable num to test positive/negative/zero and odd/even branching)."
    },
    "c-loops-pattern": {
        placeholder: "e.g. 3",
        hint: "Enter a single positive integer from 1 to 5 (capping at 5 prevents too many simulation steps)."
    },
    "c-exp4": {
        placeholder: "e.g. 5",
        hint: "Enter a single positive integer from 1 to 10 (representing variable n to compute factorial and fibonacci)."
    },
    "c-exp5": {
        placeholder: "e.g. hello",
        hint: "Enter a string/word (representing variable str to compute its length and reverse it)."
    },
    "c-exp6": {
        placeholder: "No input required",
        hint: "This experiment does not require any input. You can directly run or simulate it."
    },
    "c-exp7": {
        placeholder: "No input required",
        hint: "This experiment does not require any input. You can directly run or simulate it."
    },
    "c-exp8": {
        placeholder: "No input required",
        hint: "This experiment does not require any input (it writes to and reads from output.txt)."
    },
    "c-exp9": {
        placeholder: "e.g. 5",
        hint: "Enter a positive integer from 1 to 10 (representing number of elements n to dynamically allocate memory)."
    },
    "c-exp10": {
        placeholder: "No input required",
        hint: "This experiment does not require any input. You can directly run or simulate it."
    },

    // C++ Programming Language
    "cpp-streams": {
        placeholder: "e.g. 5.5 4.0",
        hint: "Enter two decimal numbers separated by a space (representing variables a and b)."
    },
    "cpp-classes": {
        placeholder: "e.g. 6 7",
        hint: "Enter length and breadth as integers separated by a space (representing variables l and b)."
    },
    "cpp-exp3": {
        placeholder: "No input required",
        hint: "This experiment does not require any input. You can directly run or simulate it."
    },
    "cpp-exp4": {
        placeholder: "No input required",
        hint: "This experiment does not require any input. You can directly run or simulate it."
    },
    "cpp-exp5": {
        placeholder: "No input required",
        hint: "This experiment does not require any input. You can directly run or simulate it."
    },
    "cpp-exp6": {
        placeholder: "No input required",
        hint: "This experiment does not require any input. You can directly run or simulate it."
    },
    "cpp-exp7": {
        placeholder: "e.g. 10 2",
        hint: "Enter two numbers (a and b) separated by a space. Try 10 0 for division by zero error, or -5 2 for negative input error."
    },
    "cpp-exp8": {
        placeholder: "No input required",
        hint: "This experiment does not require any input. You can directly run or simulate it."
    },
    "cpp-exp9": {
        placeholder: "No input required",
        hint: "This experiment does not require any input (it writes to and reads from data.txt)."
    },
    "cpp-exp10": {
        placeholder: "No input required",
        hint: "This experiment does not require any input. You can directly run or simulate it."
    },

    // Java Programming Language
    "java-scanner-methods": {
        placeholder: "e.g. Learner",
        hint: "Enter a name string (representing variable name)."
    },
    "java-exp2": {
        placeholder: "e.g. 85",
        hint: "Enter a marks value from 0 to 100 (representing variable marks to check grade)."
    },
    "java-arrays-average": {
        placeholder: "e.g. 3 10 20 30",
        hint: "Enter element count from 1 to 5, followed by the integer values, all separated by spaces."
    },
    "java-exp4": {
        placeholder: "No input required",
        hint: "This experiment does not require any input. You can directly run or simulate it."
    },
    "java-exp5": {
        placeholder: "No input required",
        hint: "This experiment does not require any input. You can directly run or simulate it."
    },
    "java-exp6": {
        placeholder: "e.g. 10 2",
        hint: "Enter two integers (a and b) separated by a space. Try 10 -2 to throw a custom NegativeException."
    },
    "java-exp7": {
        placeholder: "e.g. Java is awesome",
        hint: "Enter a sentence/string (representing variable s to compute length, reverse, etc.)."
    },
    "java-exp8": {
        placeholder: "No input required",
        hint: "This experiment does not require any input. You can directly run or simulate it."
    },
    "java-exp9": {
        placeholder: "No input required",
        hint: "This experiment does not require any input. You can directly run or simulate it."
    },
    "java-exp10": {
        placeholder: "No input required",
        hint: "This experiment does not require any input. You can directly run or simulate it."
    },

    // Python Programming Language
    "python-input-fstrings": {
        placeholder: "e.g. User 20",
        hint: "Enter a name string and an age integer separated by a space or newline (representing variables name and age)."
    },
    "python-exp2": {
        placeholder: "e.g. 85",
        hint: "Enter a marks value from 0 to 100 (representing variable marks to evaluate grade)."
    },
    "python-exp3": {
        placeholder: "No input required",
        hint: "This experiment does not require any input. You can directly run or simulate it."
    },
    "python-lists-aggregation": {
        placeholder: "e.g. 5 15 2",
        hint: "Enter space-separated integers (up to 5 values) to populate the numeric list."
    },
    "python-exp5": {
        placeholder: "No input required",
        hint: "This experiment does not require any input. You can directly run or simulate it."
    },
    "python-exp6": {
        placeholder: "No input required",
        hint: "This experiment does not require any input. You can directly run or simulate it."
    },
    "python-exp7": {
        placeholder: "No input required",
        hint: "This experiment does not require any input (it writes to and reads from students.txt)."
    },
    "python-exp8": {
        placeholder: "e.g. 10 2",
        hint: "Enter two numbers separated by a space. Try 10 0 for division by zero error, or -5 2 for negative value error."
    },
    "python-exp9": {
        placeholder: "No input required",
        hint: "This experiment does not require any input. You can directly run or simulate it."
    },
    "python-exp10": {
        placeholder: "No input required",
        hint: "This experiment does not require any input. You can directly run or simulate it."
    }
};

function renderSimulationSection(experiment) {
    const explanatoryContent = experiment.explanations || `
        <div class="explanation-block">
            <h3>Code Concept Breakdown</h3>
            <p style="font-size:0.95rem; color:var(--text-muted);">Review and modify the starter source structure execution parameters inside the development canvas container window to track terminal outputs.</p>
        </div>`;

    const hints = stdinHints[experiment.id] || { placeholder: "Enter inputs here...", hint: "Provide inputs for the program." };

    return `
        <div class="section-container section-container-wide">
            <h2 class="section-title">Simulation Environment</h2>
            <div class="workspace-grid">
                <div class="simulation-container">
                    <div id="editor" class="editor-wrapper"></div>
                    <div class="sim-controls">
                        <div class="input-box">
                            <label for="stdin">Standard Input (stdin)</label>
                            <textarea id="stdin" class="stdin-textarea" placeholder="${hints.placeholder}"></textarea>
                            <small style="display: block; font-size: 0.75rem; margin-top: 0.25rem; color: var(--text-muted); line-height: 1.3;">
                                💡 <strong>Hint:</strong> ${hints.hint}
                            </small>
                        </div>
                        <div class="actions">
                            <button class="run-btn" type="button">Run Code</button>
                            <button class="reset-btn" type="button" style="background-color: var(--secondary); color: white; margin: 0 0.5rem; border: none; padding: 0.75rem 1.25rem; border-radius: 8px; font-weight: 600; cursor: pointer;">Reset Code</button>
                            <button class="clear-btn" type="button">Clear Output</button>
                        </div>
                    </div>
                    <div id="terminal" class="terminal-wrapper">Compiler output will appear here...</div>
                </div>
                <div class="explanation-container">
                    ${explanatoryContent}
                </div>
            </div>
        </div>
    `;
}

function getLanguageBadge(langKey) {
    const badges = { c: "C", cpp: "C++", java: "Java", python: "Py" };
    return badges[langKey] || langKey.toUpperCase();
}

function navigateTo(lang, section, experimentIndex = null) {
    // Save current code if we are in simulation section and have an active experiment
    const prevExperiment = getCurrentExperiment();
    if (prevExperiment && currentSection === "simulation") {
        const currentCodeValue = getEditorValue();
        if (currentCodeValue) {
            prevExperiment.currentCode = currentCodeValue;
        }
    }

    currentLang = lang;
    currentSection = section || "aim";
    currentExperimentIndex = experimentIndex !== null ? Number(experimentIndex) : null;
    
    if (!lang) {
        renderHome();
    } else if (currentExperimentIndex === null) {
        renderExperimentList();
    } else {
        renderLab();
    }
}

function changeExperiment(experimentIndex) {
    currentExperimentIndex = Number(experimentIndex) || 0;
    renderLab();
}

function checkAnswers(sectionType) {
    const experiment = getCurrentExperiment();
    const testData = experiment[sectionType];
    let score = 0;

    testData.forEach((question, index) => {
        const radios = document.getElementsByName(`q_${index}`);
        let selectedValue = -1;

        for (const radio of radios) {
            if (radio.checked) {
                selectedValue = Number(radio.value);
                break;
            }
        }

        const block = document.getElementById(`qblock_${index}`);
        block.style.borderColor = "var(--border-color)";
        block.style.backgroundColor = "#f8fafc";

        if (selectedValue === question.a) {
            score += 1;
            block.style.borderColor = "#10b981";
            block.style.backgroundColor = "#ecfdf5";
        } else {
            block.style.borderColor = "#ef4444";
            block.style.backgroundColor = "#fef2f2";
        }
    });

    const resultDiv = document.getElementById("testResult");
    resultDiv.style.display = "block";

    if (score === testData.length) {
        resultDiv.textContent = `Excellent! You scored ${score}/${testData.length}.`;
        resultDiv.className = "result-msg success";
    } else {
        resultDiv.textContent = `You scored ${score}/${testData.length}. Review the highlighted questions and try again.`;
        resultDiv.className = "result-msg error";
    }
}

function submitFeedback() {
    const experiment = getCurrentExperiment();
    const name = document.getElementById("fbName").value.trim();
    const email = document.getElementById("fbEmail").value.trim();
    const rating = document.getElementById("fbRating").value;
    const comments = document.getElementById("fbComments").value.trim();
    const resultDiv = document.getElementById("feedbackResult");

    if (!name) {
        resultDiv.textContent = "Please enter your name before submitting feedback.";
        resultDiv.className = "result-msg error";
        resultDiv.style.display = "block";
        return;
    }

    const feedbackEntry = {
        language: currentLang,
        experiment: experiment.title,
        name,
        email,
        rating,
        comments,
        submittedAt: new Date().toISOString()
    };

    const storedFeedback = JSON.parse(localStorage.getItem("vpl-feedback") || "[]");
    storedFeedback.push(feedbackEntry);
    localStorage.setItem("vpl-feedback", JSON.stringify(storedFeedback));

    resultDiv.textContent = `Thank you, ${name}. Your feedback for ${experiment.title} has been saved on this device.`;
    resultDiv.className = "result-msg success";
    resultDiv.style.display = "block";

    document.getElementById("fbName").value = "";
    document.getElementById("fbEmail").value = "";
    document.getElementById("fbComments").value = "";
    document.getElementById("fbRating").value = "5";
}

function initEditor(experiment) {
    const editorElement = document.getElementById("editor");
    if (!editorElement) return;

    const setupFallbackEditor = () => {
        editorElement.innerHTML = `<textarea id="fallbackEditor" class="fallback-editor">${escapeHtml(experiment.currentCode || experiment.defaultCode)}</textarea>`;
        fallbackEditor = document.getElementById("fallbackEditor");
    };

    if (!window.require || !window.require.config) {
        setupFallbackEditor();
        return;
    }

    try {
        window.require.config({
            paths: { vs: "https://cdnjs.cloudflare.com/ajax/libs/monaco-editor/0.39.0/min/vs" }
        });

        window.require(["vs/editor/editor.main"], () => {
            const monacoLang = currentLang === "c" || currentLang === "cpp" ? "cpp" : currentLang;
            editorInstance = window.monaco.editor.create(editorElement, {
                value: experiment.currentCode || experiment.defaultCode,
                language: monacoLang,
                theme: "vs-light",
                automaticLayout: true,
                minimap: { enabled: false },
                fontSize: 14,
                padding: { top: 12 }
            });

            setTimeout(() => { if(editorInstance) editorInstance.layout(); }, 120);
        }, () => {
            setupFallbackEditor();
        });
    } catch (error) {
        setupFallbackEditor();
    }
}

function getEditorValue() {
    if (editorInstance) return editorInstance.getValue();
    if (fallbackEditor) return fallbackEditor.value;
    return "";
}

function tokenizeInput(stdin) {
    return stdin.trim().split(/\s+/).filter(Boolean);
}

function readNumberTokens(stdin) {
    return tokenizeInput(stdin).map((value) => Number(value)).filter((value) => !Number.isNaN(value));
}

function parseBasicArithmetic(code) {
    if (!code) return null;
    
    // 1. C-style basic IO printf parsing
    const printfRegex = /printf\s*\(\s*"([^"]*)"\s*,\s*([^)]+)\s*\)\s*;/g;
    const printfMatches = [...code.matchAll(printfRegex)];
    for (const m of printfMatches) {
        if (m[1].includes("%")) {
            const formatStr = m[1];
            const expr = m[2].trim();
            let op = "+";
            let desc = "addition";
            if (expr.includes("-")) { op = "-"; desc = "subtraction"; }
            else if (expr.includes("*")) { op = "*"; desc = "multiplication"; }
            else if (expr.includes("/")) { op = "/"; desc = "division"; }
            else if (expr.includes("%")) { op = "%"; desc = "modulo"; }
            return { type: "c", op, expr, formatStr, desc };
        }
    }

    // 2. C++ style cout stream parsing
    const coutRegex = /cout\s*<<\s*"([^"]*)"\s*<<\s*([^<;]+)/;
    const coutMatch = code.match(coutRegex);
    if (coutMatch) {
        const formatStr = coutMatch[1];
        const expr = coutMatch[2].trim();
        let op = "*";
        let desc = "multiplication";
        if (expr.includes("+")) { op = "+"; desc = "addition"; }
        else if (expr.includes("-")) { op = "-"; desc = "subtraction"; }
        else if (expr.includes("/")) { op = "/"; desc = "division"; }
        else if (expr.includes("%")) { op = "%"; desc = "modulo"; }
        return { type: "cpp", op, expr, formatStr, desc };
    }

    return null;
}

function evaluateArithmetic(str) {
    const sanitized = str.replace(/[^0-9\+\-\*\/\(\)\.%\s]/g, "");
    try {
        const fn = new Function(`return (${sanitized});`);
        const res = fn();
        return isNaN(res) || res === undefined ? null : res;
    } catch (e) {
        return null;
    }
}

function safeEvalExpression(expr, vars) {
    let clean = expr.trim();
    for (const [k, v] of Object.entries(vars)) {
        clean = clean.replace(new RegExp(`\\b${k}\\b`, 'g'), v);
    }
    return evaluateArithmetic(clean);
}

function parseRectangleMethods(code) {
    const methods = {};
    const methodRegex = /(?:int|double|void)\s+(\w+)\s*\(\s*\)\s*\{\s*return\s+([^;]+)\s*;/g;
    let m;
    while ((m = methodRegex.exec(code)) !== null) {
        methods[m[1]] = m[2];
    }
    return methods;
}

function parseRectangleCalls(code, methods, len, brd) {
    const coutRegex = /cout\s*<<\s*"([^"]*)"\s*<<\s*rect\.(\w+)\s*\(\s*\)/g;
    let match;
    let outputs = [];
    while ((match = coutRegex.exec(code)) !== null) {
        const label = match[1];
        const methodName = match[2];
        const expr = methods[methodName];
        if (expr) {
            let val = safeEvalExpression(expr, { length: len, breadth: brd });
            if (val !== null) {
                outputs.push({ label, methodName, value: val });
            }
        }
    }
    return outputs;
}

function getPrintVal(i, j, formatStr, exprVal) {
    if (!exprVal) return formatStr.replace("\\n", "\n");
    if (exprVal === "j") return j + (formatStr.includes(" ") ? " " : "");
    if (exprVal === "i") return i + (formatStr.includes(" ") ? " " : "");
    return formatStr.replace("%d", exprVal).replace("\\n", "\n");
}

function buildOfflineSimulationOutput(experiment, stdinValue) {
    const labelPrefix = "[Local Verification Mode] Server communication was restricted by security layers.\nSimulation output:\n\n";
    try {
        const trace = getSimulationTraceSteps(experiment.id, stdinValue);
        if (trace && trace.length > 0) {
            const lastStep = trace[trace.length - 1];
            if (lastStep && lastStep.output) {
                return labelPrefix + lastStep.output;
            }
        }
    } catch (e) {
        console.error("Tracer execution failed inside buildOfflineSimulationOutput:", e);
    }
    const lines = stdinValue.split(/\r?\n/);
    const tokens = tokenizeInput(stdinValue);
    const numbers = readNumberTokens(stdinValue);
    const code = experiment.currentCode || experiment.defaultCode || getEditorValue();

    switch (experiment.id) {
        case "c-basic-io": {
            if (numbers.length < 2) {
                return labelPrefix + "Enter two numbers:\n(Please type two integers in the Stdin box, e.g., 10 20)";
            }
            const arith = parseBasicArithmetic(code) || {
                op: "+",
                expr: "a + b",
                formatStr: "Sum = %d\n",
                desc: "addition"
            };
            const result = safeEvalExpression(arith.expr, { a: numbers[0], b: numbers[1] }) ?? (numbers[0] + numbers[1]);
            const formattedOutput = arith.formatStr
                .replace("%d", result)
                .replace("\\n", "\n")
                .replace(/\r/g, "");
            return labelPrefix + `Enter two numbers:\n${formattedOutput}`;
        }
        case "c-loops-pattern": {
            if (numbers.length < 1 || numbers[0] < 1) {
                return labelPrefix + "Enter number of rows:\n(Please type a positive integer inside the Stdin box, e.g., 4)";
            }
            const rows = Math.min(5, Math.floor(numbers[0]));
            
            // Parse print statement inside inner loop
            const printfMatches = [...code.matchAll(/printf\s*\(\s*"([^"]+)"\s*(?:,\s*([^)]+))?\s*\)/g)];
            let formatStr = "* ";
            let exprVal = "";
            for (const m of printfMatches) {
                if (!m[1].includes("Enter") && !m[1].includes("\\n") && m[1] !== "\n") {
                    formatStr = m[1];
                    exprVal = m[2] ? m[2].trim() : "";
                    break;
                }
            }

            const pattern = [];
            for (let i = 1; i <= rows; i += 1) {
                let rowText = "";
                for (let j = 1; j <= i; j += 1) {
                    rowText += getPrintVal(i, j, formatStr, exprVal);
                }
                pattern.push(rowText.trimEnd());
            }
            return labelPrefix + `Enter number of rows:\n` + pattern.join("\n") + "\n";
        }
        case "cpp-streams": {
            if (numbers.length < 2) {
                return labelPrefix + "Enter two decimal numbers:\n(Please provide two inputs in the Stdin box, e.g., 5.5 4.0)";
            }
            const arith = parseBasicArithmetic(code) || {
                op: "*",
                expr: "a * b",
                formatStr: "Product = ",
                desc: "multiplication"
            };
            const result = safeEvalExpression(arith.expr, { a: numbers[0], b: numbers[1] }) ?? (numbers[0] * numbers[1]);
            return labelPrefix + `Enter two decimal numbers:\n${arith.formatStr}${result}`;
        }
        case "cpp-classes": {
            if (numbers.length < 2) {
                return labelPrefix + "Enter length and breadth:\n(Provide dimensions in the Stdin box, e.g., 6 7)";
            }
            const len = numbers[0];
            const brd = numbers[1];
            const methods = parseRectangleMethods(code);
            const calls = parseRectangleCalls(code, methods, len, brd);
            
            let finalOutput = "";
            if (calls.length > 0) {
                finalOutput = calls.map(c => c.label + c.value).join("\n");
            } else {
                finalOutput = `Area = ${len * brd}`;
            }
            return labelPrefix + `Enter length and breadth: ${finalOutput}`;
        }
        case "java-scanner-methods": {
            const name = (lines.find((line) => line.trim()) || "Learner").trim();
            const greetRegex = /static\s+void\s+greet\s*\(\s*String\s+(\w+)\s*\)\s*\{?\s*System\.out\.println\s*\(\s*([^;]+)\s*\)\s*;/;
            const greetMatch = code.match(greetRegex);
            let greetOutput = "Hello, " + name + "!";
            if (greetMatch) {
                let param = greetMatch[1];
                let expr = greetMatch[2];
                let evaluatedName = name;
                if (expr.includes(".toUpperCase()")) evaluatedName = name.toUpperCase();
                else if (expr.includes(".toLowerCase()")) evaluatedName = name.toLowerCase();
                
                let result = expr.replace(new RegExp(`\\b${param}(\\.[a-zA-Z_0-9\\(\\)]+)?\\b`, 'g'), `"${evaluatedName}"`);
                greetOutput = result.split("+").map(p => {
                    const trimmed = p.trim();
                    if (trimmed.startsWith('"') && trimmed.endsWith('"')) return trimmed.slice(1, -1);
                    return "";
                }).join("");
            }
            return labelPrefix + `Enter your name:\n${greetOutput}`;
        }
        case "java-arrays-average": {
            if (numbers.length < 1) {
                return labelPrefix + "Enter number of elements:\n(Type size followed by space-separated elements, e.g., 3 10 20 30)";
            }
            const count = Math.max(0, Math.floor(numbers[0]));
            const values = numbers.slice(1, 1 + count);
            if (values.length !== count || count === 0) {
                return labelPrefix + `Enter number of elements:\nEnter the elements:\n(Ensure you provided exactly ${count} values in Stdin)`;
            }
            const sumVal = values.reduce((total, val) => total + val, 0);
            const avgVal = sumVal / count;
            const maxVal = Math.max(...values);
            const minVal = Math.min(...values);

            const printRegex = /System\.out\.println\s*\(\s*"([^"]*)"\s*\+\s*(\w+)\s*\)/g;
            let finalPrints = [];
            let match;
            while ((match = printRegex.exec(code)) !== null) {
                if (!match[1].includes("elements")) {
                    finalPrints.push({ label: match[1], varName: match[2] });
                }
            }
            if (finalPrints.length === 0) {
                finalPrints.push({ label: "Average = ", varName: "average" });
            }

            let finalOutputLines = "";
            finalPrints.forEach(fp => {
                let val = 0;
                if (fp.varName === "average") val = avgVal;
                else if (fp.varName === "sum") val = sumVal;
                else if (fp.varName === "max") val = maxVal;
                else if (fp.varName === "min") val = minVal;
                finalOutputLines += fp.label + val + "\n";
            });

            return labelPrefix + `Enter number of elements:\nEnter the elements:\n${finalOutputLines.trimEnd()}`;
        }
        case "python-input-fstrings": {
            const name = (lines[0] || "User").trim();
            const age = Number((lines[1] || "20").trim());
            const ageVal = isNaN(age) ? 20 : age;

            const printRegex = /print\s*\(\s*f"([^"]*)"\s*\)/g;
            const fstrings = [...code.matchAll(printRegex)].map(m => m[1]);
            
            let helloOut = "Hello " + name + "!";
            let ageOut = "In 5 years, you will be " + (ageVal + 5) + " years old.";
            
            if (fstrings[0]) {
                helloOut = fstrings[0].replace(/\{name\}/g, name);
            }
            if (fstrings[1]) {
                ageOut = fstrings[1].replace(/\{([^}]+)\}/g, (m, expr) => {
                    if (expr.trim() === "name") return name;
                    const val = safeEvalExpression(expr, { age: ageVal });
                    return val !== null ? val : m;
                });
            }

            return labelPrefix + `Enter your name:\nEnter your age:\n${helloOut}\n${ageOut}`;
        }
        case "python-lists-aggregation": {
            if (numbers.length < 1) {
                return labelPrefix + "Enter space-separated numbers:\n(Type numeric lists inside Stdin, e.g., 5 15 2)";
            }
            const sumVal = numbers.reduce((t, v) => t + v, 0);
            const maxVal = Math.max(...numbers);
            const minVal = Math.min(...numbers);
            const avgVal = numbers.length > 0 ? sumVal / numbers.length : 0;

            const printRegex = /print\s*\(\s*f"([^"]*)"\s*\)/g;
            const fstrings = [...code.matchAll(printRegex)].map(m => m[1]);

            const vars = {
                "sum(numbers)": sumVal,
                "max(numbers)": maxVal,
                "min(numbers)": minVal,
                "sum(numbers)/len(numbers)": avgVal,
                "sum(numbers) / len(numbers)": avgVal,
                "numbers": "[" + numbers.join(", ") + "]"
            };

            let outputLines = "";
            fstrings.forEach(fstr => {
                let lineText = fstr.replace(/\{([^}]+)\}/g, (m, expr) => {
                    const clean = expr.trim();
                    if (vars[clean] !== undefined) return vars[clean];
                    const val = safeEvalExpression(clean, { sum: sumVal, max: maxVal, min: minVal, avg: avgVal });
                    return val !== null ? val : m;
                });
                outputLines += lineText + "\n";
            });
            if (fstrings.length === 0) {
                outputLines = `Numbers: [${numbers.join(", ")}]\nSum = ${sumVal}\nMaximum = ${maxVal}\n`;
            }

            return labelPrefix + `Enter space-separated numbers:\n${outputLines.trimEnd()}`;
        }
        default: {
            const trace = getGenericTraceSteps(experiment.id, stdinValue);
            if (trace && trace.length > 0) {
                return labelPrefix + (trace[trace.length - 1].output || "Program exited with no output.");
            }
            return "Local sandbox execution simulation ready.";
        }
    }
}

function clearTerminal() {
    const terminal = document.getElementById("terminal");
    if (terminal) {
        terminal.textContent = "";
        terminal.style.color = "#f8fafc";
    }
}

async function runCode() {
    const experiment = getCurrentExperiment();
    const terminal = document.getElementById("terminal");
    const stdin = document.getElementById("stdin");

    if (!experiment || !terminal || !stdin) return;

    const code = getEditorValue();
    experiment.currentCode = code;
    terminal.textContent = "Compiling and running code on remote server...";
    terminal.style.color = "#38bdf8";

    try {
        // Sent code bundle straight to backend proxy
        const response = await fetch("/api/compile", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                language: experiment.pistonLang,
                version: experiment.pistonVersion,
                files: [{ content: code }],
                stdin: stdin.value
            })
        });

        if (!response.ok) throw new Error(`Execution error.`);

        const data = await response.json();
        const output = [data.run?.stdout, data.run?.stderr].filter(Boolean).join("\n");
        terminal.style.color = data.run?.stderr ? "#f87171" : "#f8fafc";
        terminal.textContent = output || "Program exited successfully with no output descriptors returning.";
    } catch (error) {
        // Only falls back to browser-simulated code execution if the request network path is strictly down
        terminal.style.color = "#f8fafc";
        terminal.textContent = buildOfflineSimulationOutput(experiment, stdin.value);
    }
}

function resetCode() {
    const experiment = getCurrentExperiment();
    if (!experiment) return;
    
    // Clear user code
    experiment.currentCode = "";
    
    // Re-initialize editor with default code
    const defaultCode = experiment.defaultCode || "";
    if (editorInstance) {
        editorInstance.setValue(defaultCode);
    }
    
    clearTerminal();
}

function renderVisualizerSection(experiment) {
    const currentCode = experiment.currentCode || experiment.defaultCode || getEditorValue();
    const codeLines = currentCode.split('\n');
    const codeLinesHtml = codeLines.map((lineText, idx) => `
        <div class="sim-code-line" id="simLine_${idx}">
            <span class="sim-code-line-num">${idx + 1}</span>
            <span class="sim-code-text">${escapeHtml(lineText)}</span>
        </div>
    `).join('');

    const hints = stdinHints[experiment.id] || { placeholder: "Enter inputs here...", hint: "Provide inputs for the program." };

    return `
        <div class="section-container section-container-wide">
            <h2 class="section-title">Code Execution Flow Visualizer</h2>
            <div class="sim-visualizer-container">
                <!-- Left panel: Code Viewer & Console -->
                <div class="sim-left-panel">
                    <div class="sim-code-panel">
                        ${codeLinesHtml}
                    </div>
                    
                    <!-- Terminal Output -->
                    <div class="sim-card" style="background: #0f172a; border-color: #1e293b; padding: 1rem;">
                        <div class="sim-card-title" style="color: #f8fafc; border-bottom-color: #1e293b; margin-bottom: 0.5rem;">Simulated Console Output</div>
                        <div class="sim-terminal" id="simTerminal">Stdout will stream here...</div>
                    </div>
                </div>
                
                <!-- Right panel: Simulation controls & memory state -->
                <div class="sim-right-panel">
                    <!-- Controls -->
                    <div class="sim-card">
                        <div class="sim-card-title">
                            <span>Interactive Controls</span>
                            <span id="simStepLabel" style="font-size: 0.8rem; font-weight: normal; color: var(--text-muted);">Step: 0/0</span>
                        </div>
                        <div style="margin-bottom: 0.75rem;">
                            <label for="simStdin" style="font-size: 0.85rem; font-weight: 600; color: var(--text-color); display: block; margin-bottom: 0.25rem;">Stdin Input (Optional)</label>
                            <input type="text" id="simStdin" class="form-control" style="width: 100%; padding: 0.35rem 0.5rem; font-size: 0.85rem; border: 1px solid var(--border-color); border-radius: 4px; background: white;" placeholder="${hints.placeholder}">
                            <small style="display: block; font-size: 0.75rem; margin-top: 0.25rem; color: var(--text-muted); line-height: 1.3;">
                                💡 <strong>Hint:</strong> ${hints.hint}
                            </small>
                        </div>
                        <div class="sim-control-group">
                            <button class="sim-btn sim-btn-success" id="simStartBtn">Start</button>
                            <button class="sim-btn sim-btn-primary" id="simStepBtn" disabled>Next Step</button>
                            <button class="sim-btn sim-btn-danger" id="simResetBtn" disabled>Reset</button>
                            <label style="font-size: 0.85rem; margin-left: 0.5rem; display: flex; align-items: center; gap: 0.25rem; color: var(--text-color);">
                                <input type="checkbox" id="simAutoCheck" disabled> Auto-Play
                            </label>
                            <select id="simSpeedSelect" class="sim-speed-select" disabled>
                                <option value="1500">Normal (1.5s)</option>
                                <option value="800">Fast (0.8s)</option>
                                <option value="2500">Slow (2.5s)</option>
                            </select>
                        </div>
                    </div>
                    
                    <!-- Explanation -->
                    <div class="sim-card" style="border-left: 4px solid var(--secondary-color);">
                        <div class="sim-card-title">Execution Context Explanation</div>
                        <div class="sim-explanation-text" id="simExplanation">
                            Click <strong>Start</strong> to begin stepping through the program execution flow line-by-line.
                        </div>
                    </div>

                    <!-- Variables Inspector -->
                    <div class="sim-card">
                        <div class="sim-card-title" style="display: flex; justify-content: space-between; align-items: center; width: 100%;">
                            <span>Memory State (Variables Inspector)</span>
                            <span id="simStackLabel" style="font-size: 0.8rem; font-weight: 600; color: var(--primary-color); background: #eff6ff; padding: 0.2rem 0.5rem; border-radius: 4px; border: 1px solid rgba(37,99,235,0.1); transition: all 0.3s ease;">Stack Frame: main()</span>
                        </div>
                        <div style="max-height: 150px; overflow-y: auto;">
                            <table class="sim-variables-table">
                                <thead>
                                    <tr>
                                        <th>Variable Name</th>
                                        <th>Type</th>
                                        <th>Value</th>
                                    </tr>
                                </thead>
                                <tbody id="simVariablesBody">
                                    <tr>
                                        <td colspan="3" style="text-align: center; color: var(--text-muted); font-style: italic;">
                                            No active variables in scope memory.
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
}

function initVisualizer(experiment) {
    const startBtn = document.getElementById("simStartBtn");
    const stepBtn = document.getElementById("simStepBtn");
    const resetBtn = document.getElementById("simResetBtn");
    const autoCheck = document.getElementById("simAutoCheck");
    const speedSelect = document.getElementById("simSpeedSelect");
    const stdinInput = document.getElementById("simStdin");
    const explanationDiv = document.getElementById("simExplanation");
    const variablesBody = document.getElementById("simVariablesBody");
    const terminalDiv = document.getElementById("simTerminal");
    const stepLabel = document.getElementById("simStepLabel");
    const stackLabel = document.getElementById("simStackLabel");

    let traceSteps = [];
    let currentStepIndex = -1;
    let autoPlayTimer = null;
    let previousVariables = {};
    let previousScope = "";

    function resetSimulation() {
        if (autoPlayTimer) {
            clearInterval(autoPlayTimer);
            autoPlayTimer = null;
        }
        currentStepIndex = -1;
        traceSteps = [];
        previousVariables = {};
        previousScope = "";

        startBtn.disabled = false;
        stepBtn.disabled = true;
        stepBtn.classList.remove("sim-btn-pulse");
        resetBtn.disabled = true;
        autoCheck.disabled = true;
        autoCheck.checked = false;
        speedSelect.disabled = true;
        stdinInput.disabled = false;

        explanationDiv.innerHTML = "Click <strong>Start</strong> to begin stepping through the program execution flow line-by-line.";
        explanationDiv.classList.remove("sim-explanation-fade");
        terminalDiv.textContent = "Stdout will stream here...";
        terminalDiv.style.color = "#38bdf8";
        stepLabel.textContent = "Step: 0/0";
        stackLabel.textContent = "Stack Frame: main()";
        stackLabel.className = "";

        const activeLines = document.querySelectorAll(".sim-code-line.active");
        activeLines.forEach(l => l.classList.remove("active"));

        variablesBody.innerHTML = `
            <tr>
                <td colspan="3" style="text-align: center; color: var(--text-muted); font-style: italic;">
                    No active variables in scope memory.
                </td>
            </tr>
        `;
    }

    function runNextStep() {
        if (currentStepIndex >= traceSteps.length - 1) {
            if (autoPlayTimer) {
                clearInterval(autoPlayTimer);
                autoPlayTimer = null;
                autoCheck.checked = false;
            }
            explanationDiv.innerHTML = "<strong>Program Finished:</strong> The simulation execution has run to completion.";
            explanationDiv.classList.add("sim-explanation-fade");
            stepBtn.disabled = true;
            stepBtn.classList.remove("sim-btn-pulse");
            autoCheck.disabled = true;
            
            stepLabel.innerHTML = `Step: ${traceSteps.length}/${traceSteps.length}`;
            return;
        }

        currentStepIndex++;
        const step = traceSteps[currentStepIndex];

        if (autoCheck.checked) {
            stepLabel.innerHTML = `<span class="sim-live-indicator"></span>Step: ${currentStepIndex + 1}/${traceSteps.length}`;
        } else {
            stepLabel.textContent = `Step: ${currentStepIndex + 1}/${traceSteps.length}`;
        }

        const activeLines = document.querySelectorAll(".sim-code-line.active");
        activeLines.forEach(l => l.classList.remove("active"));
        
        const currentLineElement = document.getElementById(`simLine_${step.line}`);
        if (currentLineElement) {
            currentLineElement.classList.add("active");
            currentLineElement.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        }

        explanationDiv.classList.remove("sim-explanation-fade");
        void explanationDiv.offsetWidth;
        explanationDiv.innerHTML = step.explanation;
        explanationDiv.classList.add("sim-explanation-fade");

        const activeScope = step.scope || "main()";
        if (activeScope !== previousScope) {
            stackLabel.textContent = `Stack Frame: ${activeScope}`;
            stackLabel.classList.remove("sim-stack-flash");
            void stackLabel.offsetWidth;
            stackLabel.classList.add("sim-stack-flash");
            previousScope = activeScope;
        }

        if (step.output !== undefined) {
            terminalDiv.textContent = step.output;
            terminalDiv.scrollTop = terminalDiv.scrollHeight;
        }

        updateVariablesInspector(step.variables);
    }

    function updateVariablesInspector(variables) {
        if (!variables || Object.keys(variables).length === 0) {
            variablesBody.innerHTML = `
                <tr>
                    <td colspan="3" style="text-align: center; color: var(--text-muted); font-style: italic;">
                        No active variables in scope memory.
                    </td>
                </tr>
            `;
            return;
        }

        let html = "";
        for (const [varName, varDetails] of Object.entries(variables)) {
            const prevVal = previousVariables[varName]?.value;
            const changed = prevVal !== undefined && prevVal !== varDetails.value;
            const flashClass = changed ? "sim-var-flash" : "";

            let displayVal = varDetails.value;
            if (displayVal === "?") {
                displayVal = `<span style="color: var(--error-color); font-style: italic;">uninitialized</span>`;
            } else if (changed) {
                displayVal = `<span class="sim-var-value-update">${displayVal}</span>`;
            }

            html += `
                <tr class="${flashClass}">
                    <td style="font-family: monospace; font-weight: 600;">${varName}</td>
                    <td style="color: var(--text-muted); font-size: 0.8rem;">${varDetails.type}</td>
                    <td style="font-family: monospace; font-weight: 500;">${displayVal}</td>
                </tr>
            `;
        }
        variablesBody.innerHTML = html;
        previousVariables = JSON.parse(JSON.stringify(variables));
    }

    function startSimulation() {
        const stdinText = stdinInput.value;
        traceSteps = getSimulationTraceSteps(experiment.id, stdinText);
        
        if (traceSteps.length === 0) {
            explanationDiv.textContent = "Simulation tracer not configured for this experiment.";
            return;
        }

        currentStepIndex = -1;
        previousVariables = {};
        previousScope = "";

        startBtn.disabled = true;
        stepBtn.disabled = false;
        stepBtn.classList.add("sim-btn-pulse");
        resetBtn.disabled = false;
        autoCheck.disabled = false;
        speedSelect.disabled = false;
        stdinInput.disabled = true;

        terminalDiv.textContent = "";
        terminalDiv.style.color = "#f8fafc";

        runNextStep();
    }

    startBtn.addEventListener("click", startSimulation);
    stepBtn.addEventListener("click", runNextStep);
    resetBtn.addEventListener("click", resetSimulation);

    autoCheck.addEventListener("change", () => {
        if (autoCheck.checked) {
            stepBtn.classList.remove("sim-btn-pulse");
            const speed = parseInt(speedSelect.value, 10);
            autoPlayTimer = setInterval(runNextStep, speed);
            stepBtn.disabled = true;
            
            if (currentStepIndex >= 0) {
                stepLabel.innerHTML = `<span class="sim-live-indicator"></span>Step: ${currentStepIndex + 1}/${traceSteps.length}`;
            }
        } else {
            if (autoPlayTimer) {
                clearInterval(autoPlayTimer);
                autoPlayTimer = null;
            }
            if (currentStepIndex < traceSteps.length - 1) {
                stepBtn.disabled = false;
                stepBtn.classList.add("sim-btn-pulse");
                stepLabel.textContent = `Step: ${currentStepIndex + 1}/${traceSteps.length}`;
            }
        }
    });

    speedSelect.addEventListener("change", () => {
        if (autoCheck.checked && autoPlayTimer) {
            clearInterval(autoPlayTimer);
            const speed = parseInt(speedSelect.value, 10);
            autoPlayTimer = setInterval(runNextStep, speed);
        }
    });
}

function getSimulationTraceSteps(experimentId, stdinText) {
    if (window.customTracers && typeof window.customTracers[experimentId] === 'function') {
        try {
            const tokens = stdinText.trim().split(/\s+/).filter(Boolean);
            const experiment = getCurrentExperiment();
            const code = experiment?.currentCode || experiment?.defaultCode || getEditorValue();
            const lines = code.split('\n');
            return window.customTracers[experimentId](tokens, code, lines, stdinText);
        } catch (e) {
            console.error("Custom tracer execution failed:", e);
        }
    }
    const tokens = stdinText.trim().split(/\s+/).filter(Boolean);
    const trace = [];
    const experiment = getCurrentExperiment();
    const code = experiment?.currentCode || experiment?.defaultCode || getEditorValue();

    switch (experimentId) {
        case "c-basic-io": {
            let num1 = tokens[0] ? Number(tokens[0]) : 15;
            let num2 = tokens[1] ? Number(tokens[1]) : 25;
            if (isNaN(num1)) num1 = 15;
            if (isNaN(num2)) num2 = 25;

            const arith = parseBasicArithmetic(code) || {
                op: "+",
                expr: "a + b",
                formatStr: "Sum = %d\n",
                desc: "addition"
            };
            const result = safeEvalExpression(arith.expr, { a: num1, b: num2 }) ?? (num1 + num2);
            const formattedResult = arith.formatStr
                .replace("%d", result)
                .replace("\\n", "\n")
                .replace(/\r/g, "");

            let mainStart = 2, declLine = 3, printPrompt = 4, scanfLine = 5, printResult = 6, returnLine = 7;
            const lines = code.split('\n');
            lines.forEach((line, idx) => {
                if (line.includes("int main")) mainStart = idx;
                if (line.includes("int a") && line.includes("b")) declLine = idx;
                if (line.includes("Enter two numbers")) printPrompt = idx;
                if (line.includes("scanf")) scanfLine = idx;
                if (line.includes("printf") && line.includes("%")) printResult = idx;
                if (line.includes("return 0")) returnLine = idx;
            });

            trace.push({
                line: mainStart,
                scope: "main()",
                explanation: "The operating system starts execution at the <code>main</code> function entry point.",
                variables: {}
            });
            trace.push({
                line: declLine,
                scope: "main()",
                explanation: "Allocates memory spaces on the stack for integers <code>a</code> and <code>b</code>. At this stage, they hold uninitialized random garbage values.",
                variables: {
                    "a": { type: "int", value: "?" },
                    "b": { type: "int", value: "?" }
                }
            });
            trace.push({
                line: printPrompt,
                scope: "main()",
                explanation: "Calls <code>printf</code> to output the prompt text line to standard console output.",
                variables: {
                    "a": { type: "int", value: "?" },
                    "b": { type: "int", value: "?" }
                },
                output: "Enter two numbers:\n"
            });
            trace.push({
                line: scanfLine,
                scope: "main()",
                explanation: "Pauses program to read input from standard input. It reads <code>" + num1 + "</code> into the address of <code>a</code> (<code>&a</code>), and <code>" + num2 + "</code> into the address of <code>b</code> (<code>&b</code>).",
                variables: {
                    "a": { type: "int", value: num1 },
                    "b": { type: "int", value: num2 }
                },
                output: "Enter two numbers:\n"
            });
            trace.push({
                line: printResult,
                scope: "main()",
                explanation: "Evaluates arithmetic " + arith.desc + " <code>" + arith.expr + "</code> (" + num1 + " " + arith.op + " " + num2 + " = " + result + ") and prints the result via formatted print statement.",
                variables: {
                    "a": { type: "int", value: num1 },
                    "b": { type: "int", value: num2 }
                },
                output: "Enter two numbers:\n" + formattedResult
            });
            trace.push({
                line: returnLine,
                scope: "main()",
                explanation: "Returns status code <code>0</code>, indicating successful execution completion to the system environment.",
                variables: {
                    "a": { type: "int", value: num1 },
                    "b": { type: "int", value: num2 }
                },
                output: "Enter two numbers:\n" + formattedResult
            });
            break;
        }
        case "c-loops-pattern": {
            let rowsVal = tokens[0] ? Number(tokens[0]) : 3;
            if (isNaN(rowsVal) || rowsVal < 1) rowsVal = 3;
            if (rowsVal > 5) rowsVal = 5;

            let mainStart = 2, declLine = 3, promptLine = 4, scanfLine = 5;
            let outerLoop = 7, innerLoop = 8, printChar = 9, printNewline = 11, returnLine = 14;
            const lines = code.split('\n');
            lines.forEach((line, idx) => {
                if (line.includes("int main")) mainStart = idx;
                if (line.includes("int rows")) declLine = idx;
                if (line.includes("Enter number of rows")) promptLine = idx;
                if (line.includes("scanf")) scanfLine = idx;
                if (line.includes("for") && line.includes("i =")) outerLoop = idx;
                if (line.includes("for") && line.includes("j =")) innerLoop = idx;
                if (line.includes("printf") && !line.includes("\\n") && !line.includes("rows")) printChar = idx;
                if (line.includes("printf") && line.includes("\\n")) printNewline = idx;
                if (line.includes("return 0")) returnLine = idx;
            });

            // Parse printed character inside loop
            const printfMatches = [...code.matchAll(/printf\s*\(\s*"([^"]+)"\s*(?:,\s*([^)]+))?\s*\)/g)];
            let formatStr = "* ";
            let exprVal = "";
            for (const m of printfMatches) {
                if (!m[1].includes("Enter") && !m[1].includes("\\n") && m[1] !== "\n") {
                    formatStr = m[1];
                    exprVal = m[2] ? m[2].trim() : "";
                    break;
                }
            }

            trace.push({
                line: mainStart,
                scope: "main()",
                explanation: "Execution begins in the <code>main</code> function.",
                variables: {}
            });
            trace.push({
                line: declLine,
                scope: "main()",
                explanation: "Declares integer variable <code>rows</code> to store row count.",
                variables: { "rows": { type: "int", value: "?" } }
            });
            trace.push({
                line: promptLine,
                scope: "main()",
                explanation: "Outputs a text prompt to guide user input.",
                variables: { "rows": { type: "int", value: "?" } },
                output: "Enter number of rows: "
            });
            trace.push({
                line: scanfLine,
                scope: "main()",
                explanation: "Reads an integer from stdin (received: <code>" + rowsVal + "</code>) and saves it in <code>rows</code>.",
                variables: { "rows": { type: "int", value: rowsVal } },
                output: "Enter number of rows: "
            });

            let currentOut = "Enter number of rows: ";
            
            trace.push({
                line: outerLoop,
                scope: "main()",
                explanation: "Initializes outer loop counter <code>i = 1</code>. Evaluates conditional test <code>i <= rows</code> (1 <= " + rowsVal + "), which is true.",
                variables: {
                    "rows": { type: "int", value: rowsVal },
                    "i": { type: "int", value: 1 }
                },
                output: currentOut
            });

            for (let i = 1; i <= rowsVal; i++) {
                trace.push({
                    line: innerLoop,
                    scope: "main()",
                    explanation: "Row " + i + ": Initializes inner loop counter <code>j = 1</code>. Checks conditional test <code>j <= i</code> (1 <= " + i + "), which is true.",
                    variables: {
                        "rows": { type: "int", value: rowsVal },
                        "i": { type: "int", value: i },
                        "j": { type: "int", value: 1 }
                    },
                    output: currentOut
                });

                for (let j = 1; j <= i; j++) {
                    const printPiece = getPrintVal(i, j, formatStr, exprVal);
                    currentOut += printPiece;
                    trace.push({
                        line: printChar,
                        scope: "main()",
                        explanation: "Prints a <code>" + escapeHtml(printPiece) + "</code> character and space to the console.",
                        variables: {
                            "rows": { type: "int", value: rowsVal },
                            "i": { type: "int", value: i },
                            "j": { type: "int", value: j }
                        },
                        output: currentOut
                    });

                    trace.push({
                        line: innerLoop,
                        scope: "main()",
                        explanation: "Increments loop counter <code>j</code> to " + (j + 1) + ". Evaluates test <code>j <= i</code> (" + (j + 1) + " <= " + i + ").",
                        variables: {
                            "rows": { type: "int", value: rowsVal },
                            "i": { type: "int", value: i },
                            "j": { type: "int", value: j + 1 }
                        },
                        output: currentOut
                    });
                }

                currentOut += "\n";
                trace.push({
                    line: printNewline,
                    scope: "main()",
                    explanation: "Prints a newline character <code>\\n</code> to move printing cursor to the next line row.",
                    variables: {
                        "rows": { type: "int", value: rowsVal },
                        "i": { type: "int", value: i }
                    },
                    output: currentOut
                });

                trace.push({
                    line: outerLoop,
                    scope: "main()",
                    explanation: "Increments outer loop counter <code>i</code> to " + (i + 1) + ". Evaluates loop check <code>i <= rows</code> (" + (i + 1) + " <= " + rowsVal + ").",
                    variables: {
                        "rows": { type: "int", value: rowsVal },
                        "i": { type: "int", value: i + 1 }
                    },
                    output: currentOut
                });
            }

            trace.push({
                line: returnLine,
                scope: "main()",
                explanation: "The outer loop condition has failed. Terminates main program returning <code>0</code>.",
                variables: {
                    "rows": { type: "int", value: rowsVal }
                },
                output: currentOut
            });
            break;
        }
        case "cpp-streams": {
            let num1 = tokens[0] ? Number(tokens[0]) : 5.5;
            let num2 = tokens[1] ? Number(tokens[1]) : 4.0;
            if (isNaN(num1)) num1 = 5.5;
            if (isNaN(num2)) num2 = 4.0;

            const arith = parseBasicArithmetic(code) || {
                op: "*",
                expr: "a * b",
                formatStr: "Product = ",
                desc: "multiplication"
            };
            const result = safeEvalExpression(arith.expr, { a: num1, b: num2 }) ?? (num1 * num2);

            let mainStart = 3, declLine = 4, promptLine = 5, cinLine = 6, coutLine = 7, returnLine = 8;
            const lines = code.split('\n');
            lines.forEach((line, idx) => {
                if (line.includes("int main")) mainStart = idx;
                if (line.includes("double a")) declLine = idx;
                if (line.includes("Enter two decimal")) promptLine = idx;
                if (line.includes("cin >>")) cinLine = idx;
                if (line.includes("cout <<") && (line.includes("Product") || line.includes("Quotient") || line.includes("Sum") || line.includes("Result"))) coutLine = idx;
                if (line.includes("return 0")) returnLine = idx;
            });

            trace.push({
                line: mainStart,
                scope: "main()",
                explanation: "Execution entry starts in <code>main()</code>.",
                variables: {}
            });
            trace.push({
                line: declLine,
                scope: "main()",
                explanation: "Declares local variables <code>a</code> and <code>b</code> as C++ double floating-point variables. Currently hold random stack garbage.",
                variables: {
                    "a": { type: "double", value: "?" },
                    "b": { type: "double", value: "?" }
                }
            });
            trace.push({
                line: promptLine,
                scope: "main()",
                explanation: "Streams input request text and standard <code>endl</code> newline manipulator into stream handler object <code>cout</code>.",
                variables: {
                    "a": { type: "double", value: "?" },
                    "b": { type: "double", value: "?" }
                },
                output: "Enter two decimal numbers:\n"
            });
            trace.push({
                line: cinLine,
                scope: "main()",
                explanation: "Reads values sequentially from standard input stream object <code>cin</code>. Assigns <code>" + num1 + "</code> to <code>a</code> and <code>" + num2 + "</code> to <code>b</code>.",
                variables: {
                    "a": { type: "double", value: num1 },
                    "b": { type: "double", value: num2 }
                },
                output: "Enter two decimal numbers:\n"
            });
            trace.push({
                line: coutLine,
                scope: "main()",
                explanation: "Evaluates expression <code>" + arith.expr + "</code> (" + num1 + " " + arith.op + " " + num2 + " = " + result + ") and streams output to <code>cout</code>.",
                variables: {
                    "a": { type: "double", value: num1 },
                    "b": { type: "double", value: num2 }
                },
                output: "Enter two decimal numbers:\n" + arith.formatStr + result + "\n"
            });
            trace.push({
                line: returnLine,
                scope: "main()",
                explanation: "Returns status code 0 indicating successful application termination.",
                variables: {
                    "a": { type: "double", value: num1 },
                    "b": { type: "double", value: num2 }
                },
                output: "Enter two decimal numbers:\n" + arith.formatStr + result + "\n"
            });
            break;
        }
        case "cpp-classes": {
            let lengthVal = tokens[0] ? parseInt(tokens[0], 10) : 6;
            let breadthVal = tokens[1] ? parseInt(tokens[1], 10) : 7;
            if (isNaN(lengthVal)) lengthVal = 6;
            if (isNaN(breadthVal)) breadthVal = 7;

            const methods = parseRectangleMethods(code);
            const calls = parseRectangleCalls(code, methods, lengthVal, breadthVal);
            const call = calls[0] || { label: "Area = ", methodName: "area", value: lengthVal * breadthVal };

            let mainStart = 19, rectDecl = 20, varDecl = 21, promptLine = 22, cinLine = 23, setValuesLine = 24, methodCallLine = 25, returnLine = 26;
            let setValuesStart = 9, setValuesL1 = 10, setValuesL2 = 11;
            let areaMethodLine = 14, areaReturnLine = 15;

            const lines = code.split('\n');
            lines.forEach((line, idx) => {
                if (line.includes("int main")) mainStart = idx;
                if (line.includes("Rectangle rect")) rectDecl = idx;
                if (line.includes("int l, b;")) varDecl = idx;
                if (line.includes("Enter length and breadth")) promptLine = idx;
                if (line.includes("cin >> l >> b")) cinLine = idx;
                if (line.includes("rect.setValues")) setValuesLine = idx;
                if (line.includes("rect." + call.methodName)) methodCallLine = idx;
                if (line.includes("return 0")) returnLine = idx;
                
                if (line.includes("void setValues")) {
                    setValuesStart = idx;
                    setValuesL1 = idx + 1;
                    setValuesL2 = idx + 2;
                }
                if (line.includes(call.methodName + "()")) {
                    if (idx < 18) {
                        areaMethodLine = idx;
                        areaReturnLine = idx + 1;
                    }
                }
            });

            trace.push({
                line: mainStart,
                scope: "main()",
                explanation: "Main function execution thread starts.",
                variables: {}
            });
            trace.push({
                line: rectDecl,
                scope: "main()",
                explanation: "Allocates memory for object <code>rect</code> of type class <code>Rectangle</code>. Object fields in memory initialized with uninitialized values.",
                variables: {
                    "rect.length": { type: "int (private)", value: "?" },
                    "rect.breadth": { type: "int (private)", value: "?" }
                }
            });
            trace.push({
                line: varDecl,
                scope: "main()",
                explanation: "Declares normal integers variables <code>l</code> and <code>b</code>.",
                variables: {
                    "rect.length": { type: "int (private)", value: "?" },
                    "rect.breadth": { type: "int (private)", value: "?" },
                    "l": { type: "int", value: "?" },
                    "b": { type: "int", value: "?" }
                }
            });
            trace.push({
                line: promptLine,
                scope: "main()",
                explanation: "Streams input instructions text using <code>cout</code>.",
                variables: {
                    "rect.length": { type: "int (private)", value: "?" },
                    "rect.breadth": { type: "int (private)", value: "?" },
                    "l": { type: "int", value: "?" },
                    "b": { type: "int", value: "?" }
                },
                output: "Enter length and breadth: "
            });
            trace.push({
                line: cinLine,
                scope: "main()",
                explanation: "Pulls two whole values from input stream <code>cin</code>, mapping <code>" + lengthVal + "</code> to <code>l</code> and <code>" + breadthVal + "</code> to <code>b</code>.",
                variables: {
                    "rect.length": { type: "int (private)", value: "?" },
                    "rect.breadth": { type: "int (private)", value: "?" },
                    "l": { type: "int", value: lengthVal },
                    "b": { type: "int", value: breadthVal }
                },
                output: "Enter length and breadth: "
            });
            trace.push({
                line: setValuesLine,
                scope: "main()",
                explanation: "Invokes method function <code>setValues</code> on object <code>rect</code>, sending parameters <code>l, b</code> as arguments.",
                variables: {
                    "rect.length": { type: "int (private)", value: "?" },
                    "rect.breadth": { type: "int (private)", value: "?" },
                    "l": { type: "int", value: lengthVal },
                    "b": { type: "int", value: breadthVal }
                },
                output: "Enter length and breadth: "
            });
            trace.push({
                line: setValuesStart,
                scope: "Rectangle::setValues()",
                explanation: "Execution jumps inside the class scope. <code>Rectangle::setValues</code> receives parameters: local <code>l = " + lengthVal + "</code>, <code>b = " + breadthVal + "</code>.",
                variables: {
                    "rect.length": { type: "int (private)", value: "?" },
                    "rect.breadth": { type: "int (private)", value: "?" },
                    "setValues.l": { type: "int (arg)", value: lengthVal },
                    "setValues.b": { type: "int (arg)", value: breadthVal }
                },
                output: "Enter length and breadth: "
            });
            trace.push({
                line: setValuesL1,
                scope: "Rectangle::setValues()",
                explanation: "Assigns value of argument <code>l</code> to private class field member <code>length</code>.",
                variables: {
                    "rect.length": { type: "int (private)", value: lengthVal },
                    "rect.breadth": { type: "int (private)", value: "?" },
                    "setValues.l": { type: "int (arg)", value: lengthVal },
                    "setValues.b": { type: "int (arg)", value: breadthVal }
                },
                output: "Enter length and breadth: "
            });
            trace.push({
                line: setValuesL2,
                scope: "Rectangle::setValues()",
                explanation: "Assigns value of argument <code>b</code> to private class field member <code>breadth</code>.",
                variables: {
                    "rect.length": { type: "int (private)", value: lengthVal },
                    "rect.breadth": { type: "int (private)", value: breadthVal },
                    "setValues.l": { type: "int (arg)", value: lengthVal },
                    "setValues.b": { type: "int (arg)", value: breadthVal }
                },
                output: "Enter length and breadth: "
            });
            trace.push({
                line: methodCallLine,
                scope: "main()",
                explanation: "Returns back to main code. Prepares output statement. Calls member function method <code>rect." + call.methodName + "()</code> to evaluate calculation.",
                variables: {
                    "rect.length": { type: "int (private)", value: lengthVal },
                    "rect.breadth": { type: "int (private)", value: breadthVal },
                    "l": { type: "int", value: lengthVal },
                    "b": { type: "int", value: breadthVal }
                },
                output: "Enter length and breadth: "
            });
            trace.push({
                line: areaMethodLine,
                scope: "Rectangle::" + call.methodName + "()",
                explanation: "Jumps to method scope <code>Rectangle::" + call.methodName + "()</code>.",
                variables: {
                    "rect.length": { type: "int (private)", value: lengthVal },
                    "rect.breadth": { type: "int (private)", value: breadthVal }
                },
                output: "Enter length and breadth: "
            });
            trace.push({
                line: areaReturnLine,
                scope: "Rectangle::" + call.methodName + "()",
                explanation: "Evaluates class attributes return value (" + call.value + ") and returns calculation value.",
                variables: {
                    "rect.length": { type: "int (private)", value: lengthVal },
                    "rect.breadth": { type: "int (private)", value: breadthVal }
                },
                output: "Enter length and breadth: "
            });

            // Map all calls output text
            let finalCallsText = calls.map(c => c.label + c.value).join("\n");
            if (!finalCallsText) finalCallsText = `Area = ${call.value}`;

            trace.push({
                line: methodCallLine,
                scope: "main()",
                explanation: "Outputs evaluation return value (" + call.value + ") formatted with labels to console screen stream.",
                variables: {
                    "rect.length": { type: "int (private)", value: lengthVal },
                    "rect.breadth": { type: "int (private)", value: breadthVal },
                    "l": { type: "int", value: lengthVal },
                    "b": { type: "int", value: breadthVal }
                },
                output: "Enter length and breadth: " + finalCallsText + "\n"
            });
            trace.push({
                line: returnLine,
                scope: "main()",
                explanation: "Exits main thread successfully returning status 0.",
                variables: {
                    "rect.length": { type: "int (private)", value: lengthVal },
                    "rect.breadth": { type: "int (private)", value: breadthVal }
                },
                output: "Enter length and breadth: " + finalCallsText + "\n"
            });
            break;
        }
        case "java-scanner-methods": {
            let nameVal = tokens[0] || "Learner";

            const greetRegex = /static\s+void\s+greet\s*\(\s*String\s+(\w+)\s*\)\s*\{?\s*System\.out\.println\s*\(\s*([^;]+)\s*\)\s*;/;
            const greetMatch = code.match(greetRegex);
            let greetOutput = "Hello, " + nameVal + "!";
            if (greetMatch) {
                let param = greetMatch[1];
                let expr = greetMatch[2];
                let evaluatedName = nameVal;
                if (expr.includes(".toUpperCase()")) evaluatedName = nameVal.toUpperCase();
                else if (expr.includes(".toLowerCase()")) evaluatedName = nameVal.toLowerCase();
                
                let result = expr.replace(new RegExp(`\\b${param}(\\.[a-zA-Z_0-9\\(\\)]+)?\\b`, 'g'), `"${evaluatedName}"`);
                greetOutput = result.split("+").map(p => {
                    const trimmed = p.trim();
                    if (trimmed.startsWith('"') && trimmed.endsWith('"')) return trimmed.slice(1, -1);
                    return "";
                }).join("");
            }

            let greetMethodStart = 3, greetPrintLine = 4, mainStart = 7, scannerInit = 8, promptLine = 9, inputLine = 10, callLine = 11, closeLine = 12;
            const lines = code.split('\n');
            lines.forEach((line, idx) => {
                if (line.includes("void greet")) greetMethodStart = idx;
                if (line.includes("System.out.println") && idx < 7) greetPrintLine = idx;
                if (line.includes("void main")) mainStart = idx;
                if (line.includes("new Scanner")) scannerInit = idx;
                if (line.includes("Enter your name")) promptLine = idx;
                if (line.includes("scanner.nextLine")) inputLine = idx;
                if (line.includes("greet(") && idx > 7) callLine = idx;
                if (line.includes("scanner.close")) closeLine = idx;
            });

            trace.push({
                line: mainStart,
                scope: "Main.main()",
                explanation: "Java Virtual Machine (JVM) launches entry method thread <code>Main.main()</code>.",
                variables: {}
            });
            trace.push({
                line: scannerInit,
                scope: "Main.main()",
                explanation: "Instantiates object resource type <code>Scanner</code> pointing to standard console input device stream `System.in`.",
                variables: {
                    "scanner": { type: "Scanner", value: "Reference" }
                }
            });
            trace.push({
                line: promptLine,
                scope: "Main.main()",
                explanation: "Invokes print method to output instruction text prompt.",
                variables: {
                    "scanner": { type: "Scanner", value: "Reference" }
                },
                output: "Enter your name: "
            });
            trace.push({
                line: inputLine,
                scope: "Main.main()",
                explanation: "Scanner parses text characters up to newline (read value: <code>" + nameVal + "</code>) and saves reference in String variable <code>name</code>.",
                variables: {
                    "scanner": { type: "Scanner", value: "Reference" },
                    "name": { type: "String", value: '"' + nameVal + '"' }
                },
                output: "Enter your name: "
            });
            trace.push({
                line: callLine,
                scope: "Main.main()",
                explanation: "Calls static helper method <code>greet(name)</code>, passing string reference argument.",
                variables: {
                    "scanner": { type: "Scanner", value: "Reference" },
                    "name": { type: "String", value: '"' + nameVal + '"' }
                },
                output: "Enter your name: "
            });
            trace.push({
                line: greetMethodStart,
                scope: "Main.greet()",
                explanation: "Enters static method scope <code>greet</code>. Stack parameter variable <code>name</code> binds reference.",
                variables: {
                    "greet.name": { type: "String", value: '"' + nameVal + '"' }
                },
                output: "Enter your name: "
            });
            trace.push({
                line: greetPrintLine,
                scope: "Main.greet()",
                explanation: "Concatenates greeting expression string and outputs onto standard screen stream.",
                variables: {
                    "greet.name": { type: "String", value: '"' + nameVal + '"' }
                },
                output: "Enter your name: " + greetOutput + "\n"
            });
            trace.push({
                line: closeLine,
                scope: "Main.main()",
                explanation: "Returns from method. Calls <code>scanner.close()</code> to clean and release the stream resource handle safely.",
                variables: {
                    "scanner": { type: "Scanner", value: "Closed" },
                    "name": { type: "String", value: '"' + nameVal + '"' }
                },
                output: "Enter your name: " + greetOutput + "\n"
            });
            break;
        }
        case "java-arrays-average": {
            let countVal = tokens[0] ? parseInt(tokens[0], 10) : 3;
            if (isNaN(countVal) || countVal < 0) countVal = 3;
            if (countVal > 5) countVal = 5;
            let arrVals = [];
            for (let i = 0; i < countVal; i++) {
                let val = tokens[i + 1] ? parseInt(tokens[i + 1], 10) : (i + 1) * 10;
                if (isNaN(val)) val = (i + 1) * 10;
                arrVals.push(val);
            }
            let sumVal = arrVals.reduce((a, b) => a + b, 0);
            let avgVal = countVal > 0 ? sumVal / countVal : 0;
            const maxVal = Math.max(...arrVals);
            const minVal = Math.min(...arrVals);

            const printRegex = /System\.out\.println\s*\(\s*"([^"]*)"\s*\+\s*(\w+)\s*\)/g;
            let finalPrints = [];
            let match;
            while ((match = printRegex.exec(code)) !== null) {
                if (!match[1].includes("elements")) {
                    finalPrints.push({ label: match[1], varName: match[2] });
                }
            }
            if (finalPrints.length === 0) {
                finalPrints.push({ label: "Average = ", varName: "average" });
            }

            let finalOutputLines = "";
            finalPrints.forEach(fp => {
                let val = 0;
                if (fp.varName === "average") val = avgVal;
                else if (fp.varName === "sum") val = sumVal;
                else if (fp.varName === "max") val = maxVal;
                else if (fp.varName === "min") val = minVal;
                finalOutputLines += fp.label + val + "\n";
            });

            let mainStart = 3, scannerInit = 4, promptLine = 5, inputSizeLine = 6, arrayInit = 7, sumInit = 8, elementsPrompt = 10, loopStart = 11, arrayAssign = 12, sumAdd = 13, avgCalc = 16, printResult = 17, closeLine = 18;
            const lines = code.split('\n');
            lines.forEach((line, idx) => {
                if (line.includes("void main")) mainStart = idx;
                if (line.includes("new Scanner")) scannerInit = idx;
                if (line.includes("Enter number of elements")) promptLine = idx;
                if (line.includes("scanner.nextInt") && line.includes("int n")) inputSizeLine = idx;
                if (line.includes("int[] numbers")) arrayInit = idx;
                if (line.includes("int sum")) sumInit = idx;
                if (line.includes("Enter the elements")) elementsPrompt = idx;
                if (line.includes("for") && line.includes("i < n")) loopStart = idx;
                if (line.includes("numbers[i]")) arrayAssign = idx;
                if (line.includes("sum +=")) sumAdd = idx;
                if (line.includes("average =") || line.includes("double avg")) avgCalc = idx;
                if (line.includes("System.out.println") && line.includes("+") && !line.includes("elements")) printResult = idx;
                if (line.includes("scanner.close")) closeLine = idx;
            });

            trace.push({
                line: mainStart,
                scope: "Main.main()",
                explanation: "JVM starts execution at the main entry point method.",
                variables: {}
            });
            trace.push({
                line: scannerInit,
                scope: "Main.main()",
                explanation: "Instantiates <code>Scanner</code> to read system input stream.",
                variables: { "scanner": { type: "Scanner", value: "Reference" } }
            });
            trace.push({
                line: promptLine,
                scope: "Main.main()",
                explanation: "Outputs row size prompt to screen.",
                variables: { "scanner": { type: "Scanner", value: "Reference" } },
                output: "Enter number of elements: "
            });
            trace.push({
                line: inputSizeLine,
                scope: "Main.main()",
                explanation: "Reads elements size (read value: <code>" + countVal + "</code>) storing inside integer <code>n</code>.",
                variables: {
                    "scanner": { type: "Scanner", value: "Reference" },
                    "n": countVal
                },
                output: "Enter number of elements: "
            });

            let currentOut = "Enter number of elements: ";
            let defaultArr = arrVals.map(() => 0);

            trace.push({
                line: arrayInit,
                scope: "Main.main()",
                explanation: "Instantiates a new integer array of size <code>" + countVal + "</code> on the heap. Values default initialize to zero.",
                variables: {
                    "scanner": { type: "Scanner", value: "Reference" },
                    "n": countVal,
                    "numbers": { type: "int[]", value: "[" + defaultArr.join(", ") + "]" }
                },
                output: currentOut
            });
            trace.push({
                line: sumInit,
                scope: "Main.main()",
                explanation: "Initializes accumulator variable <code>sum = 0</code>.",
                variables: {
                    "n": countVal,
                    "numbers": { type: "int[]", value: "[" + defaultArr.join(", ") + "]" },
                    "sum": { type: "int", value: 0 }
                },
                output: currentOut
            });
            currentOut += "Enter the elements:\n";
            trace.push({
                line: elementsPrompt,
                scope: "Main.main()",
                explanation: "Outputs elements guidelines text prompt.",
                variables: {
                    "n": countVal,
                    "numbers": { type: "int[]", value: "[" + defaultArr.join(", ") + "]" },
                    "sum": 0
                },
                output: currentOut
            });

            trace.push({
                line: loopStart,
                scope: "Main.main()",
                explanation: "Initializes loop iterator index variable <code>i = 0</code>. Checks condition <code>i < n</code> (0 < " + countVal + "), which is true.",
                variables: {
                    "n": countVal,
                    "numbers": { type: "int[]", value: "[" + defaultArr.join(", ") + "]" },
                    "sum": 0,
                    "i": { type: "int", value: 0 }
                },
                output: currentOut
            });

            let cumulativeSum = 0;
            let currentArrState = [...defaultArr];

            for (let i = 0; i < countVal; i++) {
                currentArrState[i] = arrVals[i];
                trace.push({
                    line: arrayAssign,
                    scope: "Main.main()",
                    explanation: "Reads element <code>" + arrVals[i] + "</code> from stream and stores it at index position <code>numbers[" + i + "]</code>.",
                    variables: {
                        "n": countVal,
                        "numbers": { type: "int[]", value: "[" + currentArrState.join(", ") + "]" },
                        "sum": { type: "int", value: cumulativeSum },
                        "i": i
                    },
                    output: currentOut
                });

                cumulativeSum += arrVals[i];
                trace.push({
                    line: sumAdd,
                    scope: "Main.main()",
                    explanation: "Adds element value <code>" + arrVals[i] + "</code> to <code>sum</code> accumulator variable (new sum value: " + cumulativeSum + ").",
                    variables: {
                        "n": countVal,
                        "numbers": { type: "int[]", value: "[" + currentArrState.join(", ") + "]" },
                        "sum": { type: "int", value: cumulativeSum },
                        "i": i
                    },
                    output: currentOut
                });

                trace.push({
                    line: loopStart,
                    scope: "Main.main()",
                    explanation: "Increments iterator counter <code>i</code> to " + (i + 1) + ". Checks loop condition <code>i < n</code> (" + (i + 1) + " < " + countVal + ").",
                    variables: {
                        "n": countVal,
                        "numbers": { type: "int[]", value: "[" + currentArrState.join(", ") + "]" },
                        "sum": cumulativeSum,
                        "i": { type: "int", value: i + 1 }
                    },
                    output: currentOut
                });
            }

            trace.push({
                line: avgCalc,
                scope: "Main.main()",
                explanation: "Loop termination check failed since <code>i >= n</code>. Calculates average as <code>(double) sum / n</code> (" + cumulativeSum + " / " + countVal + " = " + avgVal + ").",
                variables: {
                    "n": countVal,
                    "numbers": { type: "int[]", value: "[" + currentArrState.join(", ") + "]" },
                    "sum": cumulativeSum,
                    "average": { type: "double", value: avgVal }
                },
                output: currentOut
            });

            trace.push({
                line: printResult,
                scope: "Main.main()",
                explanation: "Outputs calculated value result to console.",
                variables: {
                    "n": countVal,
                    "numbers": { type: "int[]", value: "[" + currentArrState.join(", ") + "]" },
                    "sum": cumulativeSum,
                    "average": avgVal
                },
                output: currentOut + finalOutputLines
            });
            trace.push({
                line: closeLine,
                scope: "Main.main()",
                explanation: "Closes standard Scanner parsing streams to avoid memory leaks.",
                variables: {
                    "n": countVal,
                    "numbers": { type: "int[]", value: "[" + currentArrState.join(", ") + "]" },
                    "sum": cumulativeSum,
                    "average": avgVal,
                    "scanner": { type: "Scanner", value: "Closed" }
                },
                output: currentOut + finalOutputLines
            });
            break;
        }
        case "python-input-fstrings": {
            let nameVal = tokens[0] || "User";
            let ageVal = tokens[1] ? parseInt(tokens[1], 10) : 20;
            if (isNaN(ageVal)) ageVal = 20;

            const printRegex = /print\s*\(\s*f"([^"]*)"\s*\)/g;
            const fstrings = [...code.matchAll(printRegex)].map(m => m[1]);
            
            let helloOut = "Hello " + nameVal + "!";
            let ageOut = "In 5 years, you will be " + (ageVal + 5) + " years old.";
            
            if (fstrings[0]) {
                helloOut = fstrings[0].replace(/\{name\}/g, nameVal);
            }
            if (fstrings[1]) {
                ageOut = fstrings[1].replace(/\{([^}]+)\}/g, (m, expr) => {
                    if (expr.trim() === "name") return nameVal;
                    const val = safeEvalExpression(expr, { age: ageVal });
                    return val !== null ? val : m;
                });
            }

            let inputName = 0, inputAge = 1, printHello = 3, printAge = 4;
            const lines = code.split('\n');
            let printIdx = 0;
            lines.forEach((line, idx) => {
                if (line.includes("input") && line.includes("name")) inputName = idx;
                if (line.includes("input") && line.includes("age")) inputAge = idx;
                if (line.includes("print")) {
                    if (printIdx === 0) printHello = idx;
                    else if (printIdx === 1) printAge = idx;
                    printIdx++;
                }
            });

            trace.push({
                line: inputName,
                scope: "<module>",
                explanation: "Evaluates standard <code>input</code> function prompting name collection. Receives text <code>\"" + nameVal + "\"</code> and binds reference to variable name <code>name</code>.",
                variables: { "name": { type: "str", value: '"' + nameVal + '"' } },
                output: "Enter your name: "
            });
            trace.push({
                line: inputAge,
                scope: "<module>",
                explanation: "Evaluates inner <code>input</code> prompting age, parses input string characters, casts it to integer using <code>int()</code>, and binds to variable <code>age</code>.",
                variables: {
                    "name": { type: "str", value: '"' + nameVal + '"' },
                    "age": { type: "int", value: ageVal }
                },
                output: "Enter your name: Enter your age: "
            });
            trace.push({
                line: printHello,
                scope: "<module>",
                explanation: "Evaluates f-string string interpolation mapping variables live and prints result string to stdout console.",
                variables: {
                    "name": { type: "str", value: '"' + nameVal + '"' },
                    "age": { type: "int", value: ageVal }
                },
                output: "Enter your name: Enter your age: " + helloOut + "\n"
            });
            trace.push({
                line: printAge,
                scope: "<module>",
                explanation: "Evaluates math expression inside formatting block printing f-string text details.",
                variables: {
                    "name": { type: "str", value: '"' + nameVal + '"' },
                    "age": { type: "int", value: ageVal }
                },
                output: "Enter your name: Enter your age: " + helloOut + "\n" + ageOut + "\n"
            });
            break;
        }
        case "python-lists-aggregation": {
            let rawInput = tokens.join(" ") || "5 15 2";
            let listNumbers = tokens.map(t => parseInt(t, 10)).filter(t => !isNaN(t));
            if (listNumbers.length === 0) listNumbers = [5, 15, 2];
            
            const sumVal = listNumbers.reduce((a, b) => a + b, 0);
            const maxVal = Math.max(...listNumbers);
            const minVal = Math.min(...listNumbers);
            const avgVal = listNumbers.length > 0 ? sumVal / listNumbers.length : 0;

            const printRegex = /print\s*\(\s*f"([^"]*)"\s*\)/g;
            const fstrings = [...code.matchAll(printRegex)].map(m => m[1]);

            const vars = {
                "sum(numbers)": sumVal,
                "max(numbers)": maxVal,
                "min(numbers)": minVal,
                "sum(numbers)/len(numbers)": avgVal,
                "sum(numbers) / len(numbers)": avgVal,
                "numbers": "[" + listNumbers.join(", ") + "]"
            };

            let outputLines = [];
            fstrings.forEach(fstr => {
                let lineText = fstr.replace(/\{([^}]+)\}/g, (m, expr) => {
                    const clean = expr.trim();
                    if (vars[clean] !== undefined) return vars[clean];
                    const val = safeEvalExpression(clean, { sum: sumVal, max: maxVal, min: minVal, avg: avgVal });
                    return val !== null ? val : m;
                });
                outputLines.push(lineText);
            });
            if (fstrings.length === 0) {
                outputLines = [
                    "Numbers: [" + listNumbers.join(", ") + "]",
                    "Sum = " + sumVal,
                    "Maximum = " + maxVal
                ];
            }

            let inputLine = 0, numbersLine = 1, printList = 3, printSum = 4, printMax = 5;
            const lines = code.split('\n');
            let printIdx = 0;
            lines.forEach((line, idx) => {
                if (line.includes("input")) inputLine = idx;
                if (line.includes("list comprehension") || line.includes("int(value)") || line.includes("split()")) numbersLine = idx;
                if (line.includes("print")) {
                    if (printIdx === 0) printList = idx;
                    else if (printIdx === 1) printSum = idx;
                    else if (printIdx === 2) printMax = idx;
                    printIdx++;
                }
            });

            trace.push({
                line: inputLine,
                scope: "<module>",
                explanation: "Prompts list numbers input from stdin. Binds raw collected text string representation to variable <code>raw_values</code>.",
                variables: { "raw_values": { type: "str", value: '"' + rawInput + '"' } },
                output: "Enter space-separated numbers: "
            });
            trace.push({
                line: numbersLine,
                scope: "<module>",
                explanation: "Applies <code>split()</code> to break string by whitespaces, runs list comprehension to iterate and convert each text token into integer, binding list to variable <code>numbers</code>.",
                variables: {
                    "raw_values": { type: "str", value: '"' + rawInput + '"' },
                    "numbers": { type: "list", value: "[" + listNumbers.join(", ") + "]" }
                },
                output: "Enter space-separated numbers: "
            });
            
            let currentConsole = "Enter space-separated numbers: ";
            if (outputLines[0] !== undefined) {
                currentConsole += outputLines[0] + "\n";
                trace.push({
                    line: printList,
                    scope: "<module>",
                    explanation: "Evaluates formatting placeholder and prints array list elements details.",
                    variables: {
                        "raw_values": { type: "str", value: '"' + rawInput + '"' },
                        "numbers": { type: "list", value: "[" + listNumbers.join(", ") + "]" }
                    },
                    output: currentConsole
                });
            }
            if (outputLines[1] !== undefined) {
                currentConsole += outputLines[1] + "\n";
                trace.push({
                    line: printSum,
                    scope: "<module>",
                    explanation: "Calls list reduction functions printing aggregation output.",
                    variables: {
                        "raw_values": { type: "str", value: '"' + rawInput + '"' },
                        "numbers": { type: "list", value: "[" + listNumbers.join(", ") + "]" }
                    },
                    output: currentConsole
                });
            }
            if (outputLines[2] !== undefined) {
                currentConsole += outputLines[2] + "\n";
                trace.push({
                    line: printMax,
                    scope: "<module>",
                    explanation: "Prints final list calculation result.",
                    variables: {
                        "raw_values": { type: "str", value: '"' + rawInput + '"' },
                        "numbers": { type: "list", value: "[" + listNumbers.join(", ") + "]" }
                    },
                    output: currentConsole
                });
            }
            break;
        }
        default: {
            return getGenericTraceSteps(experimentId, stdinText);
        }
    }

    return trace;
}



function getGenericTraceSteps(experimentId, stdinText) {
    const experiment = getCurrentExperiment();
    const code = experiment?.currentCode || experiment?.defaultCode || getEditorValue();
    const lines = code.split('\n');
    const tokens = stdinText.trim().split(/\s+/).filter(Boolean);
    let tokenIdx = 0;
    
    const trace = [];
    const vars = {};
    let currentOut = "";
    
    let stepCount = 0;
    const maxSteps = 100;
    
    let ip = 0;
    let mainFound = -1;
    for (let i = 0; i < lines.length; i++) {
        const line = lines[i];
        if (line.includes("main") || line.includes("def ") || (currentLang === "python" && !line.startsWith("def ") && !line.startsWith("import ") && line.trim())) {
            mainFound = i;
            if (currentLang !== "python" || line.includes("def main")) {
                break;
            }
        }
    }
    if (mainFound !== -1) {
        ip = mainFound;
    }
    
    while (ip < lines.length && stepCount < maxSteps) {
        stepCount++;
        const line = lines[ip];
        const trimmed = line.trim();
        
        if (!trimmed || trimmed.startsWith("//") || trimmed.startsWith("#") || trimmed.startsWith("import ") || trimmed.startsWith("#include") || trimmed.startsWith("using ")) {
            ip++;
            continue;
        }
        
        const stepVars = JSON.parse(JSON.stringify(vars));
        let explanation = "";
        let lineExecuted = false;
        
        const assignRegex = /^(?:(?:int|double|float|char|String|long|long long|var|let|const)\s+)?([a-zA-Z_]\w*(?:\[\w*\])?)\s*=\s*([^;]+);?$/;
        const assignMatch = trimmed.match(assignRegex);
        
        if (assignMatch) {
            const varName = assignMatch[1].trim();
            let expr = assignMatch[2].trim();
            
            if (expr.includes("nextInt") || expr.includes("nextLine") || expr.includes("input") || expr.includes("scanf") || expr.includes("cin >>")) {
                let val = tokens[tokenIdx++] || "0";
                vars[varName] = { type: "input", value: val };
                explanation = `Reads input value <code>${val}</code> from stdin and saves it in variable <code>${varName}</code>.`;
            } else {
                let evaluated = safeEvalExpression(expr, getPlainVars(vars));
                if (evaluated === null) {
                    evaluated = expr;
                }
                vars[varName] = { type: getVarType(varName, expr), value: evaluated };
                explanation = `Assigns evaluated value <code>${evaluated}</code> to variable <code>${varName}</code>.`;
            }
            lineExecuted = true;
        }
        
        if (trimmed.includes("printf") || trimmed.includes("cout") || trimmed.includes("println") || trimmed.includes("print")) {
            let printText = "";
            if (trimmed.includes("printf")) {
                const match = trimmed.match(/printf\s*\(\s*"([^"]*)"\s*(?:,\s*([^)]+))?\s*\)/);
                if (match) {
                    let formatStr = match[1];
                    let args = match[2] ? match[2].split(",") : [];
                    let evaluatedArgs = args.map(arg => {
                        const val = safeEvalExpression(arg.trim(), getPlainVars(vars));
                        return val !== null ? val : arg.trim();
                    });
                    printText = formatStr.replace(/\\n/g, "\n");
                    evaluatedArgs.forEach(arg => {
                        printText = printText.replace("%d", arg).replace("%f", arg).replace("%s", arg);
                    });
                }
            } else if (trimmed.includes("cout")) {
                const parts = trimmed.split(/<<|;/).map(p => p.trim()).filter(p => p && p !== "cout");
                parts.forEach(p => {
                    if (p.startsWith('"') && p.endsWith('"')) {
                        printText += p.slice(1, -1);
                    } else if (p === "endl") {
                        printText += "\n";
                    } else {
                        const val = safeEvalExpression(p, getPlainVars(vars));
                        printText += val !== null ? val : p;
                    }
                });
            } else if (trimmed.includes("System.out.println")) {
                const match = trimmed.match(/System\.out\.println\s*\(\s*(.+)\s*\)/);
                if (match) {
                    const parts = match[1].split("+").map(p => p.trim());
                    parts.forEach(p => {
                        if (p.startsWith('"') && p.endsWith('"')) {
                            printText += p.slice(1, -1);
                        } else {
                            const val = safeEvalExpression(p, getPlainVars(vars));
                            printText += val !== null ? val : p;
                        }
                    });
                    printText += "\n";
                }
            } else if (trimmed.startsWith("print")) {
                const match = trimmed.match(/print\s*\(\s*f?"([^"]*)"\s*\)/);
                if (match) {
                    let text = match[1];
                    printText = text.replace(/\{([^}]+)\}/g, (m, expr) => {
                        const val = safeEvalExpression(expr.trim(), getPlainVars(vars));
                        return val !== null ? val : m;
                    }) + "\n";
                }
            }
            
            if (printText) {
                currentOut += printText;
                explanation = `Outputs text to the console standard output stream.`;
                lineExecuted = true;
            }
        }
        
        if (trimmed.includes("scanf") && !lineExecuted) {
            const match = trimmed.match(/scanf\s*\(\s*"[^"]*"\s*,\s*([^)]+)\s*\)/);
            if (match) {
                const varsList = match[1].split(",").map(v => v.replace("&", "").trim());
                varsList.forEach(v => {
                    let val = tokens[tokenIdx++] || "0";
                    vars[v] = { type: "int", value: Number(val) };
                });
                explanation = `Reads inputs from stdin into variables: <code>${varsList.join(", ")}</code>.`;
                lineExecuted = true;
            }
        } else if (trimmed.includes("cin >>") && !lineExecuted) {
            const varsList = trimmed.split(">>").map(v => v.replace(";","").trim()).filter(v => v && v !== "cin");
            varsList.forEach(v => {
                let val = tokens[tokenIdx++] || "0";
                vars[v] = { type: "double", value: Number(val) };
            });
            explanation = `Reads inputs from stdin into variables: <code>${varsList.join(", ")}</code>.`;
            lineExecuted = true;
        }
        
        if (!explanation) {
            explanation = `Executes statement on line ${ip + 1}.`;
        }
        
        trace.push({
            line: ip,
            scope: getScopeName(ip, lines),
            explanation: explanation,
            variables: stepVars,
            output: currentOut
        });
        
        ip++;
    }
    
    if (trace.length > 0) {
        const lastStep = trace[trace.length - 1];
        trace.push({
            line: lines.length - 1,
            scope: lastStep.scope,
            explanation: "Program execution completed successfully.",
            variables: vars,
            output: currentOut
        });
    }
    
    return trace;
}

function getPlainVars(vars) {
    const plain = {};
    for (const [k, v] of Object.entries(vars)) {
        plain[k] = v.value;
    }
    return plain;
}

function getVarType(name, expr) {
    if (expr.startsWith('"') || expr.startsWith("'")) return "String";
    if (expr.includes(".")) return "double";
    if (expr.includes("[") || expr.includes("new int")) return "int[]";
    return "int";
}

function getScopeName(ip, lines) {
    for (let i = ip; i >= 0; i--) {
        const line = lines[i];
        if (line.includes("main")) return "main()";
        if (line.includes("static void") || line.includes("static int") || line.includes("void") || line.includes("int ") || line.includes("def ")) {
            const match = line.match(/(?:def|void|int|double|String|class)\s+(\w+)/);
            if (match) return `${match[1]}()`;
        }
    }
    return "main()";
}


renderHome();
