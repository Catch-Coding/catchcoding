/*
CATCH.JS written by H3L/gvalue-04
LICENSED UNDER THE GPL, READ THE LICENSE FILE FOR MORE INFORMATION.
*/

function runCode() {
  const code = document.getElementById('codeArea').value;
  const outputDiv = document.getElementById('output');
  outputDiv.innerHTML = "";
  outputDiv.style.color = 'black';

  // custom catch object
  const ctchObject = {
    print: function(message) {
      const pre = document.createElement('pre');
      pre.textContent = message;
      outputDiv.appendChild(pre);
    }
  };
  try {
    const func = new Function('ctchObject', `"use strict"; ${code}`);
    const result = func(ctchObject);
    
    // display result if return value exists
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
