 const scriptURL = "https://script.google.com/macros/s/AKfycbyNw6-0GHzw3xSVGwWwmtjshCoK0r-yucCxwV1waJ7H5wNnHiHgsECGFD1rFedSRTVtDw/exec"; // جایگزین با URL واقعی

  document.getElementById("myForm").onsubmit = async function (event) {
    event.preventDefault();

    const form = event.target;
    const formData = new FormData(form);

    document.getElementById('result').innerText = '⏳ لطفا کمی صبر کنید SRS حال پردازش است...';

    try {
      const response = await fetch(scriptURL, {
        method: 'POST',
        body: formData
      });

      const text = await response.text();
      document.getElementById('result').innerHTML = `<strong>تحلیل SRS_ai:</strong><br><br>${text.replace(/\n/g, "<br>")}`;
    } catch (error) {
      document.getElementById('result').innerText = '❌ خطا در ارسال اطلاعات';
      console.error(error);
    }
  };
   const sidebarToggle = document.getElementById('sidebar-toggle');
const sidebar = document.getElementById('sidebar');
const icon = sidebarToggle.querySelector('i'); // گرفتن آیکون داخل دکمه

sidebarToggle.addEventListener('click', () => {
  sidebar.classList.toggle('open');
  sidebarToggle.classList.toggle('open'); // برای تغییر رنگ دکمه

  if (sidebar.classList.contains('open')) {
    icon.classList.remove('fa-bars');
    icon.classList.add('fa-times'); // تغییر آیکون به ضربدر
  } else {
    icon.classList.remove('fa-times');
    icon.classList.add('fa-bars'); // برگشت آیکون به همبرگر
  }
});

 const accordionButtons = document.querySelectorAll(".accordion button");
    accordionButtons.forEach(button => {
      button.addEventListener("click", function () {
        const panel = this.nextElementSibling;
        
        if (panel.classList.contains("open")) {
          panel.classList.remove("open");
        } else {
          document.querySelectorAll(".panel").forEach(p => p.classList.remove("open"));
          panel.classList.add("open");
        }
      });
    });


// تابع برای باز و بسته کردن پنل‌های آکاردئونی
function toggleAccordion(event) {
    const content = event.nextElementSibling;
    if (content.style.display === "block") {
        content.style.display = "none";
    } else {
        content.style.display = "block";
    }
}
function loadFixedLink() {
            var fixedLink = "map.html"; // لینک ثابت

            // نمایش لینک ثابت در آیفریم
            var siteFrame = document.getElementById("unique-siteFrame");
            siteFrame.src = fixedLink;
        }