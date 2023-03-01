function validateForm() {
  var fullName = document.forms["myForm"]["fullName"].value;
  var birthdate = document.forms["myForm"]["birthdate"].value;
  var mathScore = document.forms["myForm"]["mathScore"].value;
  var physicsScore = document.forms["myForm"]["physicsScore"].value;
  var chemistryScore = document.forms["myForm"]["chemistryScore"].value;
  var email = document.forms["myForm"]["email"].value;

  var nameRegex = /^[a-zA-Z\s]+$/;
  if (!nameRegex.test(fullName)) {
    alert("Họ tên không hợp lệ, vui lòng nhập lại.");
    return false;
  }

  var birthdateRegex = /^([0-9]{2})\/([0-9]{2})\/([0-9]{4})$/;
  if (!birthdateRegex.test(birthdate)) {
    alert("Ngày tháng năm sinh không hợp lệ, vui lòng nhập lại.");
    return false;
  }

  var scoreRegex = /^\d+$/;
  if (!scoreRegex.test(mathScore) || !scoreRegex.test(physicsScore) || !scoreRegex.test(chemistryScore)) {
    alert("Điểm các môn không hợp lệ, vui lòng nhập lại.");
    return false;
  }

  var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    alert("Email không hợp lệ, vui lòng nhập lại.");
    return false;
  }

  if(true){
      alert("Thông tin nhập liệu:\nHọ tên: " + fullName + "\nNgày tháng năm sinh: " + birthdate + "\nĐiểm Toán: " + mathScore + "\nĐiểm Lý: " + physicsScore + "\nĐiểm Hóa: " + chemistryScore + "\nEmail: " + email);
      return true;
  }
}
