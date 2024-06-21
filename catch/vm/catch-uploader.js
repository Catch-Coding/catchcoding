/*
catch-uploader.js 
written by H3L
LICENSED UNDER GPL
*/
function openProject() {
  const fileInput = document.getElementById('fileInput');
  fileInput.click();
  fileInput.onchange = () => {
    const file = fileInput.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = function(e) {
        const content = e.target.result;
        document.getElementById('codeArea').value = content;
      }
      reader.readAsText(file;
    }
  };
}
