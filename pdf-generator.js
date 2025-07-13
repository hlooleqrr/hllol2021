// هذا الكود يُستدعى بعد موافقة العميل مباشرة

function generatePDFandStore(contractData) {
  const doc = new jsPDF();
  const date = new Date().toLocaleString('ar-SA');
  const pdfFileName = `عقد_${contractData.name}_${Date.now()}.pdf`;

  doc.setFont('helvetica');
  doc.setFontSize(12);
  doc.text(`عقد إنهاء إجراءات تمويل عقاري`, 20, 20);
  doc.text(`الطرف الثاني: ${contractData.name}`, 20, 30);
  doc.text(`رقم الهوية: ${contractData.nationalId}`, 20, 40);
  doc.text(`تاريخ الميلاد: ${contractData.birthDate}`, 20, 50);
  doc.text(`رقم الجوال: ${contractData.phone}`, 20, 60);
  doc.text(`العنوان: ${contractData.address}`, 20, 70);
  doc.text(`تاريخ التوقيع: ${date}`, 20, 80);
  doc.text(`تمت الموافقة ✅`, 20, 90);

  const pdfUrl = doc.output('bloburl');

  // حفظ في localStorage ليراه المسؤول فقط
  let savedContracts = JSON.parse(localStorage.getItem('signedContracts')) || [];
  savedContracts.push({
    name: contractData.name,
    nationalId: contractData.nationalId,
    phone: contractData.phone,
    birthDate: contractData.birthDate,
    address: contractData.address,
    date: date,
    status: "موافق",
    pdfUrl: pdfUrl
  });

  localStorage.setItem('signedContracts', JSON.stringify(savedContracts));
}
