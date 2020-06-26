let rows = prompt("How many rows for your multiplication table?");
let cols = prompt("How many columns for your multiplication table?");
if (rows === "" || rows == null) {
    rows = 10;
}
if (cols === "" || cols == null) {
    cols = 10;
}

document.write(`<h1>Multiplication Table (${rows} X ${cols})</h1>`);

createTable(rows, cols);

function createTable(rows, cols) {
    let j = 1;
    let output = `<table border='1' cellpadding='5' cellspacing='0' width='500'>`;
    for (let i = 1; i <= rows; i++) {
        output = `${output}<tr>`;
        while (j <= cols) {
            output = `${output}<td>${i * j}</td>`;
            j = j + 1;
        }
        output = `${output}</tr>`;
        j = 1;
    }
    output = `${output}</table>`;
    document.write(output);
}
