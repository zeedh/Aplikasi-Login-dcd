/*
 * Catatan:
 * Gunakan fungsi goToHome() untuk menampilkan halaman home
 * Gunakan fungsi goToLogin() untuk menampilkan halaman login
 * Gunakan fungsi showPopUp() untuk menampilkan pop up error
 */

/** @module Login-Script */
/** 
* Membuat variabel loginFormElement untuk tampilan form.
* @constant {HTMLElement}
*/
const loginFormElement = document.querySelector('#loginForm');

/** 
* Membuat variabel inputEmailElement untuk input email.
* @constant {HTMLElement}
*/
const inputEmailElement = document.querySelector('#inputEmail');
/** 
* Membuat variabel inputPasswordlElement untuk input password.
* @constant {HTMLElement}
*/
const inputPasswordElement = document.querySelector('#inputPassword');

/** 
* Membuat variabel expectedEmail untuk menyimpan informasi email sementara.
* @constant {string}
*/
const expectedEmail = 'admin@dicoding.com';
/** 
* Membuat variabel expectedPassword untuk menyimpan informasi password sementara.
* @constant {string}
*/
const expectedPassword = 'superpassword';

/* Comment : Menambahkan aksi klik pada button . */
loginFormElement.addEventListener('submit', function(event) {
  event.preventDefault();

  /** 
  * Membuat variabel email untuk menyimpan nilai email saat button ditekan.
  * @constant {string}
  */
  const email = inputEmailElement.value;
  /** 
  * Membuat variabel email untuk menyimpan nilai password saat button ditekan.
  * @constant {string}
  */
  const password = inputPasswordElement.value;

  /* Comment : Memastikkan bahwa nilai email dan password sesuai dengan nilai yang tersimpan. */
  if (email == expectedEmail && password == expectedPassword) {
    /* Comment : Jika sesuai maka program akan berpindah ke halaman home. */
    goToHome();
  } else {
    /* Comment  : Jika tidak sesuai maka program akan menampilkan informasi bahwa input salah. */
    showPopUp();
  }
});
