ObjC.import('stdlib');
const app = Application.currentApplication();
app.includeStandardAdditions = true;

const keynote = Application('Keynote');
keynote.activate();

const filePath = $.getenv('FILE');
const pdfPath = filePath + '.pdf';

try {
  const doc = keynote.open(Path(filePath));
  delay(1); // let it load
  keynote.export(doc, {
    to: Path(pdfPath),
    as: 'PDF'
  });
  doc.close({ saving: 'no' });
  console.log(`✅ Converted: ${filePath} -> ${pdfPath}`);
} catch (e) {
  console.log("❌ Error: " + e);
}
