const keywords = [
    'auto', 'break', 'case', 'char', 'const', 'continue', 'default', 'do',
    'double', 'else', 'enum', 'extern', 'float', 'for', 'goto', 'if',
    'int', 'long', 'register', 'return', 'short', 'signed', 'sizeof',
    'static', 'struct', 'switch', 'typedef', 'union', 'unsigned', 'void',
    'volatile', 'while'
];

function validateIdentifier() {
    const identifier = document.getElementById('identifierInput').value;
    const resultDiv = document.getElementById('result');
    resultDiv.classList.remove('valid', 'invalid');
    
    if (!/^[a-zA-Z_][a-zA-Z0-9_]*$/.test(identifier)) {
        resultDiv.textContent = 'Invalid identifier! An identifier can only start with a letter or underscore, and contain letters, digits, or underscores.';
        resultDiv.classList.add('invalid');
        return;
    }

    if (keywords.includes(identifier)) {
        resultDiv.textContent = `Invalid identifier! "${identifier}" is a reserved keyword.`;
        resultDiv.classList.add('invalid');
        return;
    }

    resultDiv.textContent = 'Valid identifier!';
    resultDiv.classList.add('valid');
}

function toggleReadMore() {
    const infoContainer = document.getElementById("infoContainer");
    const btnText = document.getElementById("readMoreBtn");

    if (infoContainer.style.maxHeight) {
        // Collapse the content
        infoContainer.style.maxHeight = null;
        btnText.textContent = "Read More";
    } else {
        // Expand the content
        infoContainer.style.maxHeight = infoContainer.scrollHeight + "px";
        btnText.textContent = "Read Less";
    }
}
