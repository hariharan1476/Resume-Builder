function generatePDF() {

    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();

    // Get values
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let phone = document.getElementById("phone").value;
    let skills = document.getElementById("skills").value;
    let education = document.getElementById("education").value;
    let experience = document.getElementById("experience").value;

    // Page width
    const pageWidth = doc.internal.pageSize.getWidth();

    // Header background
    doc.setFillColor(40, 40, 40);
    doc.rect(0, 0, pageWidth, 35, "F");

    // Name
    doc.setFont("helvetica", "bold");
    doc.setFontSize(22);
    doc.setTextColor(255, 255, 255);
    doc.text(name.toUpperCase(), 20, 20);

    // Contact
    doc.setFontSize(11);
    doc.text(email + " | " + phone, 20, 30);

    // Reset color
    doc.setTextColor(0, 0, 0);

    let y = 50;

    // Section function
    function addSection(title, content) {

        doc.setFont("helvetica", "bold");
        doc.setFontSize(14);
        doc.text(title, 20, y);

        doc.setDrawColor(0);
        doc.line(20, y + 2, 190, y + 2);

        y += 10;

        doc.setFont("helvetica", "normal");
        doc.setFontSize(12);

        let splitText = doc.splitTextToSize(content, 170);

        doc.text(splitText, 20, y);

        y += splitText.length * 7 + 10;
    }

    // Add sections
    addSection("EDUCATION", education);
    addSection("SKILLS", skills);
    addSection("EXPERIENCE", experience);

    // Save
    doc.save(name + "_Professional_Resume.pdf");
}
