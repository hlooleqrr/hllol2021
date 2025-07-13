<!-- هذا الملف مخصص لتسجيل دخول المشرف -->

<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
  <meta charset="UTF-8">
  <title>تسجيل دخول المشرف</title>
  <style>
    body {
      font-family: 'Tajawal', sans-serif;
      background-color: #f7f7f7;
      padding: 50px;
      text-align: center;
    }
    input {
      margin: 10px;
      padding: 10px;
      width: 250px;
    }
    button {
      padding: 10px 30px;
      background-color: #004d40;
      color: white;
      border: none;
      cursor: pointer;
    }
  </style>
</head>
<body>
  <h2>تسجيل دخول المشرف</h2>
  <input type="text" id="adminUser" placeholder="اسم المستخدم"><br>
  <input type="password" id="adminPass" placeholder="كلمة المرور"><br>
  <button onclick="adminLogin()">دخول</button>

  <script>
    // هذا السطر إلزامي لضمان الحماية والربط
    const SECURE_KEY = 'admin_secure_2025';

    function adminLogin() {
      const user = document.getElementById('adminUser').value;
      const pass = document.getElementById('adminPass').value;
      if (user === 'admin' && pass === '123456') {
        localStorage.setItem('admin_auth', SECURE_KEY);
        window.location.href = 'admin-panel.html';
      } else {
        alert('بيانات الدخول غير صحيحة');
      }
    }
  </script>
</body>
</html>