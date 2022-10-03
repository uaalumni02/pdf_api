const PDFDocument = require("pdfkit");

function buildPDF(dataCallback, endCallback, text) {
  console.log(text);
  const doc = new PDFDocument({
    bufferPages: true,
    font: "Courier",
    layout: "landscape",
    size: "A4",
  });

  function jumpLine(doc, lines) {
    for (let index = 0; index < lines; index++) {
      doc.moveDown();
    }
  }

  doc.on("data", dataCallback);
  doc.on("end", endCallback);

  const distanceMargin = 18;
  doc
    .fillAndStroke("#0e8cc3")
    .lineWidth(20)
    .lineJoin("round")
    .rect(
      distanceMargin,
      distanceMargin,
      doc.page.width - distanceMargin * 2,
      doc.page.height - distanceMargin * 2
    )
    .stroke();

  jumpLine(doc, 5);

  doc.fontSize(16).fill("#021c27").text("CERTIFICATE OF ACHIEVEMENT", {
    align: "center",
  });

  jumpLine(doc, 1);

  doc.fontSize(10).fill("#021c27").text("Presented to", {
    align: "center",
  });

  jumpLine(doc, 2);

  doc
    .fontSize(24)
    .fill("#021c27")
    .text(`${text.firstName + " " + text.lastName}`, {
      align: "center",
    });

  jumpLine(doc, 1);

  doc.fontSize(10).fill("#021c27").text("For", {
    align: "center",
  });

  jumpLine(doc, 2);

  doc.fontSize(14).fill("#021c27").text(`${text.awardType.awardType}`, {
    align: "center",
  });

  doc.end();
}

module.exports = { buildPDF };
