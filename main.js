function toggleDetail(e) {
    const target = $(e.target)

    if($(target).hasClass("active")) {
        $(target).html("More Info").removeClass("active")
    } else {
        $(target).html("Less Info").addClass("active")
    }
    
    const item = $(target).parents(".about-exp-item")
    const detail = $(item).children(".about-exp-item-detail")
    $(detail).slideToggle()
}

// function onFormSubmit(e) {
//     e.preventDefault()
//     const email = $("#inp_email")
//     const subject = $("#inp_subject")
//     const message = $("#inp_message")

//     if(!$(email).val()) {
//         alert("Email is required")
//     } else if (!$(subject).val()) {
//         alert("Subject is required")
//     } else if (!$(message).val()) {
//         alert("Message is required")
//     } else {
//         alert("Form Submitted")
//         $(email).val("")
//         $(subject).val("")
//         $(message).val("")
//     }
// }

//fungsi untuk menambah data form
function onFormSubmit(e) {
    e.preventDefault();
    const name = document.forms["messageForm"]["name-item"].value;
    const birthDate = document.forms["messageForm"]["date-item"].value;
    const gender = document.forms["messageForm"]["gender-item"].value;
    const messages = document.forms["messageForm"]["message-item"].value;

    setMessage(name, birthDate, gender, messages);
}

//fungsi untuk mengubah html text pada tempat yang telah ditentukan
function setMessage(name, birthDate, gender, messages) {
    var tanggal = setTime();
    document.getElementById("current-time").innerHTML = tanggal;
    document.getElementById("sender-full-name").innerHTML = name;
    document.getElementById("sender-birth-date").innerHTML = birthDate;
    document.getElementById("sender-gender").innerHTML = gender;
    document.getElementById("sender-messages").innerHTML = messages;
}

//fungsi untuk menampilkan waktu
function setTime() {
    var waktu = new Date(); // mendapatkan waktu saat ini
    var jam = waktu.getHours(); // mendapatkan jam saat ini
    var menit = waktu.getMinutes(); // mendapatkan menit saat ini
    var detik = waktu.getSeconds(); // mendapatkan detik saat ini
    var hari = waktu.getDate(); // mendapatkan tanggal saat ini
    var bulan = waktu.getMonth() + 1; // mendapatkan bulan saat ini (dimulai dari 0)
    var tahun = waktu.getFullYear(); // mendapatkan tahun saat ini

    // menampilkan tanggal dan waktu pada halaman
    var tanggal = hari + "/" + bulan + "/" + tahun + "          ||           " + jam + ":" + menit + ":" + detik;

    return tanggal
}
