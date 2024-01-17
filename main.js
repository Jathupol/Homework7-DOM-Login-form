const loginForm = document.querySelector(".login-form");
const inp_username = document.querySelector("#username");
const inp_password = document.querySelector("#password");
//โจทย์: ให้สร้าง Code เพื่อ validate(ตรวจสอบ) คำที่ submit  จาก form ดังนี้
//1.ทุก input ต้องไม่ใส่ค่าว่าง
//2.username ความยาวต้องมากว่า 3ตัวอักษร
//3.password ความยาวต้องมากว่า 4 ตัวอักษร

//ถ้า validate ไม่ผ่านให้เปลี่ยน input เป็นสีแดง
//ถ้า validate ผ่านให้ไปที่  https://www.example.com
const dhlLogin = (e) => {
  e.preventDefault();
  console.log(loginForm.elements);
  let allInput = loginForm.elements;
  //ทำได้หลายวิธี
  // console.log(allInput[0].value)
  // console.log(allInput['username'].id)
  // console.log(allInput['username'].value)
  // console.log(allInput['password'].value)
  // console.log(allInput['role'].id)
  // console.log(allInput['role'].value)
  // console.log(inp_username.value)
  // console.log(inp_password.value)
  // console.log(e.target)
  // alert('Submitting...')
  // console.log('ok, submit')
};

loginForm.addEventListener("submit", dhlLogin);
