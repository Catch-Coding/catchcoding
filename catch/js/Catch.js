function runCode() {
  const code = document.getElementById('codeArea').value;
  const outputDiv = document.getElementById('output');
  try {
    const result = eval(code);
    outputDiv.innerHTML = `<pre>${result}</pre>`;
  } catch (error) {
      outputDiv.innerHTML = `<pre style="color: red;">Error: ${error.message}</pre>`;
  }
}
