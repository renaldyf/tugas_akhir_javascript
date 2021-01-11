function buat_login() {
  var home = document.getElementById("X");
  home.parentElement.removeChild(home);

  var header = document.createElement("header");
  header.className = "tulisan_login";
  header.innerHTML = "SILAHKAN MENDAFTAR";

  var login = document.getElementsByTagName("div")[0];
  login.appendChild(header);

  var form = document.createElement("form");
  login.appendChild(form);

  var label = document.createElement("label");
  label.innerHTML = "Nama User";
  form.appendChild(label);

  var input_user = document.createElement("input");
  input_user.type = "text";
  input_user.placeholder = "Nama User.."
  input_user.name = "Nama User";
  input_user.className = "form_login";
  form.appendChild(input_user);

  var label2 = document.createElement("label");
  label2.innerHTML = "Nomor Handphone";
  form.appendChild(label2);

  var input_hp = document.createElement("input");
  input_hp.type = "text";
  input_hp.placeholder = "Nomor Handphone.."
  input_hp.name = "Handphone";
  input_hp.className = "form_login";
  form.appendChild(input_hp);

  var label3 = document.createElement("label");
  label3.innerHTML = "Username";
  form.appendChild(label3);

  var input_username = document.createElement("input");
  input_username.type = "text";
  input_username.placeholder = "Username atau Email.."
  input_username.name = "username";
  input_username.className = "form_login";
  form.appendChild(input_username);

  var label4 = document.createElement("label");
  label4.innerHTML = "Password";
  form.appendChild(label4);

  var input_pass = document.createElement("input");
  input_pass.type = "text";
  input_pass.placeholder = "Password.."
  input_pass.name = "password";
  input_pass.className = "form_login";
  form.appendChild(input_pass);

  var tombol = document.createElement("input");
  tombol.type = "submit";
  tombol.value = "DAFTAR SEKARANG"
  tombol.className = "tombol_login";
  form.appendChild(tombol);
}
