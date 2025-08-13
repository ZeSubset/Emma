
// ---- Custom Blocks ----
Blockly.defineBlocksWithJsonArray([
  {
    "type": "say_hello",
    "message0": "say hello",
    "previousStatement": null,
    "nextStatement": null,
    "colour": 260,
    "tooltip": "Prints Hello to the console",
    "helpUrl": ""
  },
  {
    "type": "double_number",
    "message0": "double %1",
    "args0": [ { "type": "input_value", "name": "NUM", "check": "Number" } ],
    "output": "Number",
    "colour": 200,
    "tooltip": "Returns the number * 2",
    "helpUrl": ""
  }
]);

// ---- Generators ----
Blockly.JavaScript['say_hello'] = function(block) {
  return 'console.log("Hello from Blockly!");\n';
};

Blockly.JavaScript['double_number'] = function(block) {
  const value = Blockly.JavaScript.valueToCode(block, 'NUM', Blockly.JavaScript.ORDER_NONE) || '0';
  const code = `(${value}) * 2`;
  return [code, Blockly.JavaScript.ORDER_MULTIPLICATION];
};

// ---- Runtime helpers ----
const status = document.getElementById('status');
const sandbox = document.getElementById('sandbox');
const runBtn = document.getElementById('runBtn');
const showCodeBtn = document.getElementById('showCodeBtn');
const codeDialog = document.getElementById('codeDialog');
const codePre = document.getElementById('codePre');
const downloadXmlBtn = document.getElementById('downloadXmlBtn');
const uploadXmlInput = document.getElementById('uploadXml');

function generateCode() {
  return Blockly.JavaScript.workspaceToCode(Blockly.getMainWorkspace());
}

function setStatus(msg) {
  status.textContent = msg;
  setTimeout(() => { if (status.textContent === msg) status.textContent = ''; }, 2500);
}

runBtn.addEventListener('click', () => {
  const code = generateCode();
  const html = `<!DOCTYPE html><html><body><script>
    (function(){
      const logs=[];
      const oldLog = console.log;
      console.log = function(){ logs.push(Array.from(arguments).join(' ')); oldLog.apply(console, arguments); };
      try {
        ${code}
      } catch(e) {
        logs.push('Error: ' + e.message);
      }
      document.body.style.background = '#0a0c11';
      document.body.style.color = '#e8eaf0';
      document.body.style.fontFamily = 'monospace';
      document.body.innerHTML = '<pre>'+ logs.map(l=>l.replace(/[&<>]/g, s => ({'&':'&amp;','<':'&lt;','>':'&gt;'}[s]))).join('\n') +'</pre>';
    })();
  <\/script></body></html>`;

  const blob = new Blob([html], { type: 'text/html' });
  const url = URL.createObjectURL(blob);
  sandbox.src = url;
  setStatus('Code executed');
});

showCodeBtn.addEventListener('click', () => {
  const code = generateCode();
  codePre.textContent = code || '// (no code generated)';
  codeDialog.showModal();
});

downloadXmlBtn.addEventListener('click', () => {
  const xmlDom = Blockly.Xml.workspaceToDom(Blockly.getMainWorkspace());
  const xmlText = Blockly.Xml.domToPrettyText(xmlDom);
  const blob = new Blob([xmlText], { type: 'text/xml' });
  const a = document.createElement('a');
  a.href = URL.createObjectURL(blob);
  a.download = 'workspace.xml';
  a.click();
});

uploadXmlInput.addEventListener('change', (e) => {
  const file = e.target.files[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = () => {
    const xml = reader.result;
    const dom = Blockly.Xml.textToDom(xml);
    Blockly.getMainWorkspace().clear();
    Blockly.Xml.domToWorkspace(dom, Blockly.getMainWorkspace());
    setStatus('Workspace loaded');
  };
  reader.readAsText(file);
});
