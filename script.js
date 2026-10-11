function openDiscordModal() {
  const modal = document.getElementById('discordModal');
  const modalBox = document.getElementById('discordModalBox');
  modal.classList.remove('hidden');
  setTimeout(() => {
    modal.classList.remove('opacity-0');
    modalBox.classList.remove('scale-95');
    modalBox.classList.add('scale-100');
  }, 10);
}

function closeDiscordModal() {
  const modal = document.getElementById('discordModal');
  const modalBox = document.getElementById('discordModalBox');
  modal.classList.add('opacity-0');
  modalBox.classList.remove('scale-100');
  modalBox.classList.add('scale-95');
  setTimeout(() => {
    modal.classList.add('hidden');
  }, 300);
}

function copyDiscordUser() {
  const username = document.getElementById('discordUsername').innerText;
  navigator.clipboard.writeText(username);
  const alertText = document.getElementById('copyAlert');
  alertText.classList.remove('hidden');
  setTimeout(() => {
    alertText.classList.add('hidden');
  }, 2000);
}

const emojis = ['✨', '💖', '🌸', '🎀', '⭐', '🧋', '🍡', '🧁'];
function spawnEmojiShower(e) {
    for (let i = 0; i < 3; i++) {
        const particle = document.createElement('div');
        particle.className = 'emoji-particle';
        particle.innerText = emojis[Math.floor(Math.random() * emojis.length)];
        particle.style.left = e.clientX + 'px';
        particle.style.top = e.clientY + 'px';

        const dx = (Math.random() - 0.5) * 160 + 'px';
        const dy = (Math.random() - 0.5) * 160 - 40 + 'px';
        const dr = (Math.random() - 0.5) * 360 + 'deg';

        particle.style.setProperty('--dx', dx);
        particle.style.setProperty('--dy', dy);
        particle.style.setProperty('--dr', dr);

        document.body.appendChild(particle);
        setTimeout(() => particle.remove(), 1200);
    }
}

let petCount = 0;
function petMascot() {
    petCount++;
    document.getElementById('petPetCount').innerText = petCount;
}

function handleSendDirectMessage(e) {
  e.preventDefault();
  const form = e.target;
  const data = new FormData(form);

  fetch(form.action, {
    method: 'POST',
    body: data,
    headers: { 'Accept': 'application/json' }
  }).then(response => {
    if (response.ok) {
      openSuccessModal();
      form.reset();
    } else {
      alert("Waduh, gagal mengirim pesan. Coba lagi ya!");
    }
  }).catch(error => {
    alert("Terjadi kesalahan jaringan.");
  });
}

function openSuccessModal() {
    const modal = document.getElementById('successModal');
    modal.classList.remove('hidden');
    setTimeout(() => modal.classList.remove('opacity-0'), 10);
}

function closeSuccessModal() {
    const modal = document.getElementById('successModal');
    modal.classList.add('opacity-0');
    setTimeout(() => modal.classList.add('hidden'), 300);
}

function toggleMyMusic() {
    const audio = document.getElementById('myAudio');
    const soundText = document.getElementById('soundText');
    const soundIcon = document.getElementById('soundIcon');

    if (audio.paused) {
        audio.play();
        if(soundText) soundText.innerText = 'Pop Vibes: ON';
        if(soundIcon) soundIcon.innerText = '🎵';
    } else {
        audio.pause();
        if(soundText) soundText.innerText = 'Pop Vibes: OFF';
        if(soundIcon) soundIcon.innerText = '🔇';
    }
}