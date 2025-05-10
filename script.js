document.addEventListener('DOMContentLoaded', function() {
  // Pastikan semua event listener memiliki penutup yang benar
  const hamburger = document.querySelector('.hamburger');
  const navMenu = document.querySelector('.nav-menu');
  
  if (hamburger && navMenu) {
    hamburger.addEventListener('click', function() {
      this.classList.toggle('active');
      navMenu.classList.toggle('active');
    });
  }
    
    // Dropdown Menu Toggle (for mobile)
    const dropdownBtns = document.querySelectorAll('.dropdown-btn');
    
    dropdownBtns.forEach(btn => {
      btn.addEventListener('click', function(e) {
        if (window.innerWidth <= 768) {
          e.preventDefault();
          const dropdown = this.parentElement;
          dropdown.classList.toggle('active');
          
          // Close other open dropdowns
          document.querySelectorAll('.dropdown').forEach(item => {
            if (item !== dropdown && item.classList.contains('active')) {
              item.classList.remove('active');
            }
          });
        }
      });
    });
    
    // Close menu when clicking a link (for mobile)
    document.querySelectorAll('.nav-menu a:not(.dropdown-btn)').forEach(link => {
      link.addEventListener('click', function() {
        if (window.innerWidth <= 768) {
          hamburger.classList.remove('active');
          navMenu.classList.remove('active');
          document.querySelectorAll('.dropdown').forEach(item => {
            item.classList.remove('active');
          });
        }
      });
    });
    
    // Close menu when clicking outside (for mobile)
    document.addEventListener('click', function(e) {
      if (window.innerWidth <= 768 && 
          !e.target.closest('nav') && 
          navMenu.classList.contains('active')) {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
        document.querySelectorAll('.dropdown').forEach(item => {
          item.classList.remove('active');
        });
      }
    });
  });











  













  document.addEventListener('DOMContentLoaded', function() {
    const slides = document.querySelectorAll('.carousel-slide');
    const dots = document.querySelectorAll('.carousel-dot');
    const prevBtn = document.querySelector('.prev');
    const nextBtn = document.querySelector('.next');
    let currentIndex = 0;
    let intervalId;
  
    // Fungsi untuk menampilkan slide
    function showSlide(index) {
      slides.forEach(slide => slide.classList.remove('active'));
      dots.forEach(dot => dot.classList.remove('active'));
      
      slides[index].classList.add('active');
      dots[index].classList.add('active');
      currentIndex = index;
    }
  
    // Fungsi untuk slide berikutnya
    function nextSlide() {
      let newIndex = (currentIndex + 1) % slides.length;
      showSlide(newIndex);
    }
  
    // Fungsi untuk slide sebelumnya
    function prevSlide() {
      let newIndex = (currentIndex - 1 + slides.length) % slides.length;
      showSlide(newIndex);
    }
  
    // Auto slide
    function startAutoSlide() {
      intervalId = setInterval(nextSlide, 5000);
    }
  
    function stopAutoSlide() {
      clearInterval(intervalId);
    }
  
    // Event listeners
    nextBtn.addEventListener('click', () => {
      nextSlide();
      stopAutoSlide();
      startAutoSlide();
    });
  
    prevBtn.addEventListener('click', () => {
      prevSlide();
      stopAutoSlide();
      startAutoSlide();
    });
  
    dots.forEach(dot => {
      dot.addEventListener('click', () => {
        const index = parseInt(dot.getAttribute('data-index'));
        showSlide(index);
        stopAutoSlide();
        startAutoSlide();
      });
    });
  
    // Start auto slide
    startAutoSlide();
  
    // Pause auto slide ketika hover
    const carousel = document.querySelector('.carousel-container');
    carousel.addEventListener('mouseenter', stopAutoSlide);
    carousel.addEventListener('mouseleave', startAutoSlide);
  });






















document.querySelector('.read-more-btn1').addEventListener('click', function() {
  const contentWrapper = this.closest('.about-content2').querySelector('.text-content');
  const isExpanded = contentWrapper.classList.toggle('expanded');
  
  // Update ARIA attribute
  this.setAttribute('aria-expanded', isExpanded);
  
  // Animasi smooth scroll (opsional)
  if (isExpanded) {
    contentWrapper.style.maxHeight = contentWrapper.scrollHeight + 'px';
  } else {
    contentWrapper.style.maxHeight = 'none';
  }
});































document.addEventListener('DOMContentLoaded', function() {
  // Tab functionality
  const tabBtns = document.querySelectorAll('.tab-btn');
  const tabContents = document.querySelectorAll('.tab-content');
  
  tabBtns.forEach(btn => {
      btn.addEventListener('click', () => {
          // Remove active class from all buttons and contents
          tabBtns.forEach(btn => btn.classList.remove('active'));
          tabContents.forEach(content => content.classList.remove('active'));
          
          // Add active class to clicked button
          btn.classList.add('active');
          
          // Show corresponding content
          const tabId = btn.getAttribute('data-tab');
          document.getElementById(tabId).classList.add('active');
      })
      });
  });































document.addEventListener('DOMContentLoaded', function() {
  const formPendaftaran = document.getElementById('submit-to-google-sheet');
  const formStatusPendaftaran = document.getElementById('form-status');
  const submitBtnPendaftaran = document.getElementById('submit-btn');
  const scriptURLPendaftaran = formPendaftaran.getAttribute('action'); // Ambil URL dari atribut action

  if (formPendaftaran) {
    formPendaftaran.addEventListener('submit', e => {
      e.preventDefault();
      submitBtnPendaftaran.disabled = true;
      submitBtnPendaftaran.innerHTML = '<i class="fas fa-spinner fa-spin"></i> MENGIRIM...';

      fetch(scriptURLPendaftaran, { method: 'POST', body: new FormData(formPendaftaran)})
        .then(response => response.json())
        .then(data => {
          if (data.result === 'success') {
            formStatusPendaftaran.textContent = 'Formulir berhasil dikirim! Terima kasih.';
            formStatusPendaftaran.style.color = 'green';
            formPendaftaran.reset();
            setTimeout(() => {
              formStatusPendaftaran.textContent = '';
            }, 5000);
          } else {
            formStatusPendaftaran.textContent = 'Terjadi kesalahan. Silakan coba lagi.';
            formStatusPendaftaran.style.color = 'red';
          }
          submitBtnPendaftaran.disabled = false;
          submitBtnPendaftaran.innerHTML = '<i class="fas fa-paper-plane"></i> KIRIM FORMULIR';
        })
        .catch(error => {
          formStatusPendaftaran.textContent = 'Terjadi kesalahan: ' + error.message;
          formStatusPendaftaran.style.color = 'red';
          submitBtnPendaftaran.disabled = false;
          submitBtnPendaftaran.innerHTML = '<i class="fas fa-paper-plane"></i> KIRIM FORMULIR';
        });
    });
  }
});






























document.addEventListener('DOMContentLoaded', function() {
  const contactForm = document.getElementById('submit-to-google-sheet2');
  const waktuInput = document.getElementById('waktu');
  const submitButtonKontak = document.querySelector('#submit-to-google-sheet2 .btn');
  const scriptURLKontak = contactForm.getAttribute('action'); // Ambil URL dari atribut action

  // Fungsi untuk mengisi waktu secara otomatis
  function isiWaktu() {
    const now = new Date();
    const formattedTime = now.toLocaleString(); // Contoh format, bisa disesuaikan
    waktuInput.value = formattedTime;
  }

  // Panggil fungsi isiWaktu saat halaman dimuat
  isiWaktu();

  // Event listener untuk submit form
  if (contactForm) {
    contactForm.addEventListener('submit', function(event) {
      event.preventDefault();

      // Validasi sederhana (Anda bisa menambahkan validasi yang lebih kompleks)
      const namaInput = document.getElementById('name');
      const phoneInput = document.getElementById('phone');
      const pesanInput = document.getElementById('pesan');

      if (!namaInput.value.trim()) {
        alert('Nama harus diisi.');
        namaInput.focus();
        return;
      }

      if (!phoneInput.value.trim()) {
        alert('Nomor HP harus diisi.');
        phoneInput.focus();
        return;
      }

      if (!pesanInput.value.trim()) {
        alert('Pesan harus diisi.');
        pesanInput.focus();
        return;
      }

      // Nonaktifkan tombol kirim dan ubah teksnya
      submitButtonKontak.disabled = true;
      submitButtonKontak.textContent = 'Mengirim...';

      // Kirim data formulir menggunakan Fetch API
      const formData = new FormData(contactForm);

      fetch(scriptURLKontak, {
        method: 'POST',
        body: formData,
      })
      .then(response => response.json())
      .then(data => {
        if (data.result === 'success') {
          alert('Pesan terkirim!'); // Tampilkan pesan sukses
          contactForm.reset(); // Reset formulir
          isiWaktu(); // Perbarui waktu
        } else {
          alert('Gagal mengirim pesan: ' + data.error); // Tampilkan pesan error
        }
      })
      .catch(error => {
        alert('Gagal mengirim pesan: ' + error.message); // Tampilkan pesan error
      })
      .finally(() => {
        // Aktifkan kembali tombol kirim dan kembalikan teksnya
        submitButtonKontak.disabled = false;
        submitButtonKontak.textContent = 'Kirim Pesan';
      });
    });
  }
});































        // Data hari libur nasional Indonesia (contoh)
        const holidays = {
          '2023-5-1': 'Hari Buruh Internasional',
          '2023-5-2': 'Hari Pendidikan Nasional',
          '2023-5-6': 'Hari Raya Waisak',
          '2023-5-18': 'Kenaikan Isa Almasih',
          '2023-5-25': 'Hari Raya Idul Fitri 1444 H',
          '2023-6-1': 'Hari Lahir Pancasila',
          '2023-6-4': 'Hari Raya Idul Adha 1444 H',
          '2023-7-19': 'Tahun Baru Islam 1445 H',
          '2023-8-17': 'Hari Kemerdekaan RI',
          '2023-9-28': 'Maulid Nabi Muhammad SAW',
          '2023-12-25': 'Hari Raya Natal'
      };
      
      let currentDate = new Date();
      let currentMonth = currentDate.getMonth();
      let currentYear = currentDate.getFullYear();
      
      // Fungsi untuk mengupdate kalender
      function updateCalendar(month, year) {
          const monthNames = ["Januari", "Februari", "Maret", "April", "Mei", "Juni", 
                              "Juli", "Agustus", "September", "Oktober", "November", "Desember"];
          
          document.getElementById('month-year').textContent = `${monthNames[month]} ${year}`;
          
          const firstDay = new Date(year, month, 1);
          const lastDay = new Date(year, month + 1, 0);
          const daysInMonth = lastDay.getDate();
          const startingDay = firstDay.getDay();
          
          const calendarDays = document.getElementById('calendar-days');
          calendarDays.innerHTML = '';
          
          // Hari dari bulan sebelumnya
          const prevMonthLastDay = new Date(year, month, 0).getDate();
          for (let i = 0; i < startingDay; i++) {
              const dayElement = document.createElement('div');
              dayElement.className = 'calendar-day other-month';
              dayElement.textContent = prevMonthLastDay - startingDay + i + 1;
              calendarDays.appendChild(dayElement);
          }
          
          // Hari dari bulan ini
          const today = new Date();
          for (let i = 1; i <= daysInMonth; i++) {
              const dayElement = document.createElement('div');
              dayElement.className = 'calendar-day';
              dayElement.textContent = i;
              
              // Cek apakah hari ini
              if (i === today.getDate() && month === today.getMonth() && year === today.getFullYear()) {
                  dayElement.classList.add('today');
              }
              
              // Cek apakah hari libur
              const dateKey = `${year}-${month + 1}-${i}`;
              if (holidays[dateKey]) {
                  dayElement.classList.add('holiday');
                  dayElement.title = holidays[dateKey];
              }
              
              calendarDays.appendChild(dayElement);
          }
          
          // Hari dari bulan berikutnya
          const totalCells = startingDay + daysInMonth;
          const remainingCells = totalCells <= 35 ? 35 - totalCells : 42 - totalCells;
          
          for (let i = 1; i <= remainingCells; i++) {
              const dayElement = document.createElement('div');
              dayElement.className = 'calendar-day other-month';
              dayElement.textContent = i;
              calendarDays.appendChild(dayElement);
          }
      }
      
      // Fungsi untuk mengupdate jam
      function updateClocks() {
          const now = new Date();
          
          // WIB (UTC+7)
          const wibTime = new Date(now.getTime());
          const wibHours = wibTime.getHours() % 12;
          const wibMinutes = wibTime.getMinutes();
          const wibSeconds = wibTime.getSeconds();
          
          document.getElementById('time-wib').textContent = 
              `${String(wibTime.getHours()).padStart(2, '0')}:${String(wibMinutes).padStart(2, '0')}:${String(wibSeconds).padStart(2, '0')}`;
          
          document.querySelector('#clock-wib .hour-hand').style.transform = 
              `translateX(-50%) rotate(${(wibHours * 30) + (wibMinutes * 0.5)}deg)`;
          document.querySelector('#clock-wib .minute-hand').style.transform = 
              `translateX(-50%) rotate(${wibMinutes * 6}deg)`;
          document.querySelector('#clock-wib .second-hand').style.transform = 
              `translateX(-50%) rotate(${wibSeconds * 6}deg)`;
          
          // WITA (UTC+8)
          const witaTime = new Date(now.getTime() + 3600000);
          const witaHours = witaTime.getHours() % 12;
          const witaMinutes = witaTime.getMinutes();
          const witaSeconds = witaTime.getSeconds();
          
          document.getElementById('time-wita').textContent = 
              `${String(witaTime.getHours()).padStart(2, '0')}:${String(witaMinutes).padStart(2, '0')}:${String(witaSeconds).padStart(2, '0')}`;
          
          document.querySelector('#clock-wita .hour-hand').style.transform = 
              `translateX(-50%) rotate(${(witaHours * 30) + (witaMinutes * 0.5)}deg)`;
          document.querySelector('#clock-wita .minute-hand').style.transform = 
              `translateX(-50%) rotate(${witaMinutes * 6}deg)`;
          document.querySelector('#clock-wita .second-hand').style.transform = 
              `translateX(-50%) rotate(${witaSeconds * 6}deg)`;
          
          // WIT (UTC+9)
          const witTime = new Date(now.getTime() + 7200000);
          const witHours = witTime.getHours() % 12;
          const witMinutes = witTime.getMinutes();
          const witSeconds = witTime.getSeconds();
          
          document.getElementById('time-wit').textContent = 
              `${String(witTime.getHours()).padStart(2, '0')}:${String(witMinutes).padStart(2, '0')}:${String(witSeconds).padStart(2, '0')}`;
          
          document.querySelector('#clock-wit .hour-hand').style.transform = 
              `translateX(-50%) rotate(${(witHours * 30) + (witMinutes * 0.5)}deg)`;
          document.querySelector('#clock-wit .minute-hand').style.transform = 
              `translateX(-50%) rotate(${witMinutes * 6}deg)`;
          document.querySelector('#clock-wit .second-hand').style.transform = 
              `translateX(-50%) rotate(${witSeconds * 6}deg)`;
      }
      
      // Event listeners untuk navigasi bulan
      document.getElementById('prev-month').addEventListener('click', () => {
          currentMonth--;
          if (currentMonth < 0) {
              currentMonth = 11;
              currentYear--;
          }
          updateCalendar(currentMonth, currentYear);
      });
      
      document.getElementById('next-month').addEventListener('click', () => {
          currentMonth++;
          if (currentMonth > 11) {
              currentMonth = 0;
              currentYear++;
          }
          updateCalendar(currentMonth, currentYear);
      });
      
      // Inisialisasi
      updateCalendar(currentMonth, currentYear);
      updateClocks();
      setInterval(updateClocks, 1000);