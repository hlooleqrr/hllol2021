// هذا الكود يُستدعى بعد موافقة العميل مباشرة
function generatePDFandStore(contractData) {
  const doc = new jsPDF();
  const date = new Date().toLocaleString('ar-SA');
  const pdfFileName = `عقد_${contractData.name}_${contractData.nationalId}.pdf`;

  doc.setFont('helvetica');
  doc.setFontSize(12);
  doc.text(`عقد إنهاء إجراءات تمويل عقاري`, 20, 20);
  doc.text(`الطرف الثاني: ${contractData.name}`, 20, 30);
  doc.text(`رقم الهوية: ${contractData.nationalId}`, 20, 40);
  doc.text(`تاريخ الميلاد: ${contractData.birthDate}`, 20, 50);
  doc.text(`رقم الجوال: ${contractData.phone}`, 20, 60);
  doc.text(`العنوان: ${contractData.address}`, 20, 70);
  doc.text(`تاريخ التوقيع: ${date}`, 20, 80);
  doc.text(`✅ تمت الموافقة`, 20, 90);

  // حفظ العقد بصيغة PDF
  doc.save(pdfFileName);

  // حفظ في localStorage لإدارة العقود
  let savedContracts = JSON.parse(localStorage.getItem('signedContracts') || '[]');
  savedContracts.push({
    name: contractData.name,
    nationalId: contractData.nationalId,
    phone: contractData.phone,
    birthDate: contractData.birthDate,
    address: contractData.address,
    date: date,
    status: "موافق",
    pdfUrl: pdfFileName // اسم الملف وليس blob لأنه تم تحميله فعلياً
  });

  localStorage.setItem('signedContracts', JSON.stringify(savedContracts));
}