// document.getElementById('welcome').style.display = 'none';
// document.querySelector('body').style.overflowY = 'scroll';

function openUndangan() {
  const welcome = document.getElementById("welcome");
  const tombolAudio = document.getElementById("tombol-musik");
  welcome.style.opacity = 0;
  tombolAudio.style.display = "block";
  window.scrollTo(0, 0);
  setTimeout(() => {
    welcome.style.display = "none";
  }, 1000);
  document.querySelector('body').style.overflowY = 'scroll';
}

function getName() {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const nama = urlParams.get('to');
  const namaTamu = document.getElementById("nama-tamu")
  if (!queryString) {
    namaTamu.innerHTML = `<p class="text-bold text-white>Kepada Yth Saudara/i</p><h1 class="text-bold text-white">Guest</h1>`
  }
  else if (nama) {
    namaTamu.innerHTML = `<p class="text-bold text-white">Kepada Yth Saudara/i</p><h1 class="text-bold text-white">${nama}</h1>`
  }
}
getName()


function modal() {
  const modal = document.getElementById("modal");
  modal.style.display = "block";
  setTimeout(() => {
    modal.style.opacity = 1;
  }, 100);
}

const countDownDate = new Date("Jan 1, 2025 00:00:00").getTime();
const x = setInterval(function () {
  const sekang = new Date().getTime();
  const distance = countDownDate - sekang;
  let days = Math.floor(distance / (1000 * 60 * 60 * 24));
  let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((distance % (1000 * 60)) / 1000);
  document.getElementById('hari').innerHTML = days;
  document.getElementById('jam').innerHTML = hours;
  document.getElementById('menit').innerHTML = minutes;
  document.getElementById('detik').innerHTML = seconds;
});

const util = (() => {
  const modal = (img) => {
    document.getElementById('show-modal-image').src = img.src;
    (new bootstrap.Modal('#modal-image')).show();
  };
  const music = (btn) => {
    if (btn.getAttribute('data-status') !== 'true') {
      btn.setAttribute('data-status', 'true');
      audio.play();
      btn.innerHTML = '<i class="fa-solid fa-circle-pause spin-button"></i>';
    } else {
      btn.setAttribute('data-status', 'false');
      audio.pause();
      btn.innerHTML = '<i class="fa-solid fa-circle-play"></i>';
    }
  };
  const animate = (svg, timeout, classes) => {
    let handler = null;

    handler = setTimeout(() => {
      svg.classList.add(classes);
      handler = null;
    }, timeout);
  };
  const salin = (btn, msg = 'Tersalin', timeout = 1500) => {
    navigator.clipboard.writeText(btn.getAttribute('data-nomer'));

    let tmp = btn.innerHTML;
    btn.innerHTML = msg;
    btn.disabled = true;

    let clear = null;
    clear = setTimeout(() => {
      btn.innerHTML = tmp;
      btn.disabled = false;
      btn.focus();

      clearTimeout(clear);
      clear = null;
      return;
    }, timeout);
  };
  const animation = async () => {
    const duration = 10 * 1000;
    const animationEnd = Date.now() + duration;
    let skew = 1;

    let randomInRange = (min, max) => {
      return Math.random() * (max - min) + min;
    };

    (async function frame() {
      const timeLeft = animationEnd - Date.now();
      const ticks = Math.max(200, 500 * (timeLeft / duration));

      skew = Math.max(0.8, skew - 0.001);

      await confetti({
        particleCount: 1,
        startVelocity: 0,
        ticks: ticks,
        origin: {
          x: Math.random(),
          y: Math.random() * skew - 0.2,
        },
        colors: ["FFC0CB", "FF69B4", "FF1493", "C71585"],
        shapes: ["heart"],
        gravity: randomInRange(0.5, 1),
        scalar: randomInRange(1, 2),
        drift: randomInRange(-0.5, 0.5),
      });

      if (timeLeft > 0) {
        requestAnimationFrame(frame);
      }
    })();
  };
  const opacity = (nama) => {
    let nm = document.getElementById(nama);
    let op = parseInt(nm.style.opacity);
    let clear = null;

    clear = setInterval(() => {
      if (op >= 0) {
        nm.style.opacity = op.toString();
        op -= 0.025;
      } else {
        clearInterval(clear);
        clear = null;
        nm.remove();
        return;
      }
    }, 10);
  };
  // const buka = async (button) => {
  //   button.disabled = true;
  //   document.querySelector('body').style.overflowY = 'scroll';
  //   AOS.init();
  //   audio.play();

  //   // if (localStorage.getItem('alertClosed')) {
  //   //   document.getElementById('alertDiv').style.display = 'none';
  //   // }
  //   const welcome = document.getElementById("welcome");
  //   welcome.style.opacity = 0;
  //   // opacity('welcome');
  //   document.getElementById('tombol-musik').style.display = 'block';
  //   timer();

  //   await confetti({
  //     origin: { y: 0.8 },
  //     zIndex: 1057
  //   });
  //   await session.check();
  //   await animation();
  // };
  

  return { modal, salin, music, animate, animation, buka, opacity };
})();