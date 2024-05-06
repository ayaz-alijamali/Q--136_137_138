// Question ______________ 136


// Sample array of numbers
const numbers = [1, 2, 3, 4, 5];

// Iterate through the array using a for loop
for (let i = 0; i < numbers.length; i++) {
  const currentValue = numbers[i];
  
  // Output the current value of the variable inside the loop using console.log()
  console.log(`Iteration ${i + 1}: Current Value = ${currentValue}`);
  
  // Perform any operations or logic inside the loop
  const squaredValue = currentValue * currentValue;
  
  // Output the result of the operations
  console.log(`Iteration ${i + 1}: Squared Value = ${squaredValue}`);
};


// Question _____________ 137


try {
    // Code that may throw an error
    const result = 10 / 0; // This will throw a division by zero error
    console.log("Result:", result); // This line won't be executed due to the error
  } catch (error) {
    // Code to handle the error
    console.error("An error occurred:", error.message);
  } finally {
    // Code that runs regardless of whether an error occurred or not
    console.log("Finished executing the try-catch block.");
  };
  

  // Question _______________ 138
  
  
  /* Open Developer Tools:
Open your web browser (e.g., Chrome, Firefox, Edge).
Press F12 or right-click anywhere on the webpage and select "Inspect" or "Inspect Element" to open the Developer Tools.
Navigate to the "Sources" Tab:
In the Developer Tools, navigate to the "Sources" or "Debugger" tab. This is where you'll work with breakpoints.
Find Your TypeScript File:
Locate and open the TypeScript file you want to debug. Remember that TypeScript files have a .ts extension and are usually organized in the same folder structure as your project.
Enable Source Maps (if necessary):
If your TypeScript code is compiled to JavaScript and bundled, ensure that source maps are enabled in your build configuration. Source maps map the compiled JavaScript code back to the original TypeScript code, allowing you to debug TypeScript directly in the browser.
Check your TypeScript compiler settings or build tools (e.g., Webpack, TypeScript Compiler) to enable source maps generation.
Add a Breakpoint:
Click on the line number in your TypeScript code where you want to pause the execution (a breakpoint will appear as a blue marker). Alternatively, you can right-click on the line and select "Add breakpoint" or use keyboard shortcuts (e.g., Ctrl + B in Chrome).
Breakpoints can be added in TypeScript files directly because source maps link them to the corresponding lines in the compiled JavaScript code.
Run Your Code:
If your TypeScript code is part of a web application, refresh the webpage or trigger the code execution that contains the breakpoint. The execution will pause at the line where you added the breakpoint, even though you're working with TypeScript files.
Inspect Variables and Stepping:
While the code is paused at the breakpoint, you can inspect the values of variables, objects, and expressions in the "Scope" or "Variables" panel of the Developer Tools.
Use the step buttons (Step Into, Step Over, Step Out) to navigate through the TypeScript code one line at a time. This helps understand the flow and identify issues step by step.
Resume Execution or Modify Code:
After inspecting variables or stepping through the code, you can choose to resume execution by clicking the "Play" button (or F8 key) to continue running the code until the next breakpoint or the end of the script.
If you identify an issue, you can modify the TypeScript code directly in the Developer Tools to test fixes without altering your original source code.*/

