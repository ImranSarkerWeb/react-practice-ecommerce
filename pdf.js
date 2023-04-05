// create a new PDF file
var doc = new jsPDF();

// add some text to the PDF
doc.text("Hello, World!", 10, 10);

// save the PDF file
doc.save("output.pdf");
