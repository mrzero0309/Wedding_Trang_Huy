var slideIndex = 0;
showSlides();

function showSlides() {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}
    slides[slideIndex-1].style.display = "block";
    setTimeout(showSlides, 2000); // Thay đổi hình sau mỗi 2 giây
}

function plusSlides(n) {
    showSlides(slideIndex += n);
}
  // Tính toán số thời gian còn lại từ hôm nay đến ngày 10 tháng 4
  var weddingDate = new Date("2024-04-10T00:00:00");
  var currentDate = new Date();

  var timeDiff = weddingDate.getTime() - currentDate.getTime();

  // Tính số ngày, giờ, phút và giây còn lại
  var daysLeft = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
  var hoursLeft = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutesLeft = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
  var secondsLeft = Math.floor((timeDiff % (1000 * 60)) / 1000);

  // Hiển thị số thời gian còn lại trên trang
  var countdownElement = document.getElementById("countdown");
  countdownElement.innerHTML =  daysLeft + " ngày " + hoursLeft + " giờ " + minutesLeft + " phút  " + secondsLeft + " giây";

  // Cập nhật thời gian mỗi giây
  setInterval(function() {
      // Làm lại các bước tính toán thời gian còn lại
      var currentDate = new Date();
      var timeDiff = weddingDate.getTime() - currentDate.getTime();
      var daysLeft = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
      var hoursLeft = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      var minutesLeft = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
      var secondsLeft = Math.floor((timeDiff % (1000 * 60)) / 1000);

      // Cập nhật phần tử hiển thị thời gian
      countdownElement.innerHTML = daysLeft + " ngày " + hoursLeft + " giờ " + minutesLeft + " phút " + secondsLeft + " giây ";
  }, 1000); // Cập nhật mỗi giây