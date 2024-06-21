/*
CATCH.JS written by H3L/gvalue-04
LICENSED UNDER THE GPL, READ THE LICENSE FILE FOR MORE INFORMATION.
Catch.js: the backend code for running Catch! commands.
*/

function runCode() {
  const code = document.getElementById('codeArea').value;
  const outputDiv = document.getElementById('output');
  // resets output
  outputDiv.innerHTML = "";
  outputDiv.style.color = 'black';

  // split the code into lines and execute each line
  const lines = code.split('');
  lines.forEach(line => {
    executeCommand(line.trim(), outputDiv);
  });
}
// function to execute a line
function executeCommand(commandLine, outputDiv) {
  // split the command into words
  const words = commandLine.split('');

  // determine the command and its args
  const command = words[0];
  const args = words.slice(1).join('');
  
  switch(command) {
    case 'print':
      printCommand(args, outputDiv);
      break;
    case 'add':
      addCommand(args, outputDiv);
      break;
    case 'js':
      jsCommand(args, outputDiv);
      break;
    default:
      outputError(`Unknown: ${command}`, outputDiv);
  }
}
// command Print
function printCommand(args, outputDiv) {
  const message = args.replace(/^"|"$/g, ''); // remove surrounding quotes
  const pre = document.createElement('pre');
  pre.textContent = message;
  outputDiv.appendChild(pre);
}

// command Add
function addCommand(args, outputDiv) {
  const [num1, num2] = args.split('').map(n => parseFloat(n));
  if (isNaN(num1) || isNaN(num2)) {
    outputError(`Invalid numbers: ${args}`, outputDiv);
    return;
  }
  const result = num1 + num2;
  const pre = document.createElement('pre');
  pre.textContent = result;
  outputDiv.appendChild(pre);
}

// command JS
function jsCommand(args, outputDiv) {
  try {
    const result = new Function(`"use strict"; ${args}`)();
    if (result !== undefined) {
      const pre = document.createElement('pre')
      pre.textContent = result;
      outputDiv.appendChild(pre);
    }
  } catch (error) {
    outputError(`Error executing JavaScript: ${error.message}`, outputDiv);
  }
}
// error function
function outputError(message, outputDiv) {
  const pre = document.createElement('pre');
  pre.style.color = 'red';
  pre.textContent = `Error: ${message}`;
  outputDiv.appendChild(pre);
}
