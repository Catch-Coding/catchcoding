/*
catch-downloader.js
written by H3L
LICENSED UNDER GPL
*/
function saveProject() {
  const code  = document.getElementById('codeArea').value;
  const filename =  document.getElementById('projectTitleInput').value;
  const blob = new Blob([code], { type: "text/javascript" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url
  a.download = `${filename}.js`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}
