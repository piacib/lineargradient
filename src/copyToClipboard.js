const copyToClipboard = ([color1,color2]) => {
    let textArea = document.createElement('TEXTAREA');
    // text that will be copied
    let text = document.createTextNode(`linear-gradient(${color1},${color2})`);

    textArea.appendChild(text);
    document.body.appendChild(textArea)
    textArea.select();
    document.execCommand('copy');
    textArea.remove();
  }
export default copyToClipboard