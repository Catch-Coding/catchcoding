function runCode() {
  const code = document.getElementById('codeArea').value;
  const outputDiv = document.getElementById('output');
  outputDiv.innerHTML = "";
  outputDiv.style.color = 'black';

  // custom console.log to capture the logging
  const logs = [];
  const customConsole = {
    log: function(message) {
      logs.push(message)
    }
  };
  try {
    const func = new Function('console', `"use strict"; ${code}`);
    const result = func(customConsole);
    // append logs to the output
    logs.forEach(log => {
      const pre = document.createElement('pre');
      pre.textContent = log;
      outputDiv.appendChild(pre);
    });
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
