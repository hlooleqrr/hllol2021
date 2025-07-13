// هذا الملف يعمل بعد توقيع العقد لتوليد PDF تلقائيًا
function generatePDF(data) {
  const { name, nationalId, phone, birthDate, address } = data;
  const date = new Date().toLocaleDateString('ar-SA', { year: 'numeric', month: 'long', day: 'numeric' });

  const doc = new jsPDF();
  doc.setFont("helvetica");
  doc.setFontSize(14);

  doc.text("شركة الوساطة العقارية والتسويق", 105, 20, null, null, "center");
  doc.text("عقد اتفاقية إنهاء إجراءات تمويل عقاري", 105, 30, null, null, "center");
  doc.text(`الطرف الثاني: ${name}`, 20, 50);
  doc.text(`السجل المدني: ${nationalId}`, 20, 60);
  doc.text(`تاريخ الميلاد: ${birthDate}`, 20, 70);
  doc.text(`رقم الجوال: ${phone}`, 20, 80);
  doc.text(`العنوان: ${address}`, 20, 90);
  doc.text(`تاريخ التوقيع: ${date}`, 20, 100);
  doc.text("تمت الموافقة ✅", 20, 110);

  const fileName = `contract_${name}_${nationalId}.pdf`;
  doc.save(fileName);

  return fileName;
}
