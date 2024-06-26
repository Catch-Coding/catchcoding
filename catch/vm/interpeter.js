/*
Catch! Interpreter
Written by H3LDLL in 2024 of June
Licensed under GPL 3
*/

// Define Catch functions here
function TestFunction() {
    console.log("Test")
}

function join(str1, str2) {
    return str1 + str2;
}
// end of Catch functions

function runCode() {
  const code = document.getElementById('codeArea').value;
  const outputDiv = document.getElementById('output');

  // Clear previous output
  outputDiv.innerHTML = "";
  outputDiv.style.color = 'black';

  // Custom console.log to capture outputs
  const logs = [];
  const customConsole = {
    print: function(message) {
      logs.push(message);
    }
  };

  try {
    // Override console.log
    const func = new Function('ctch', `"use strict"; ${code}`);
    const result = func(customConsole);

    // Append logs to the outputDiv
    logs.forEach(log => {
      const pre = document.createElement('pre');
            pre.textContent = log;
      outputDiv.appendChild(pre);
    });

    // Display the result if there's any meaningful return value
    if (result !== undefined) {
      const pre = document.createElement('pre');
      pre.textContent = result;
      outputDiv.appendChild(pre);
    }
  } catch (error) {
    const pre = document.createElement('pre');
    pre.style.color = 'red';
    pre.textContent = `Error: ${error.message}`;
    outputDiv.appendChild(pre);
  }
}
