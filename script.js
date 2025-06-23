
const text1 = "Hai Bianca, maaf aku gak ngechat kamu selama beberapa hari/seminggu ini. IG sama WA ku sedikit error jadinya suka ilang2an gitu, aku juga lagi fokus OSN jadinya aku lupa bersosialisasi. Hehe...";
const text2 = "Tapi, aku baru kepikiran soal foto rumah itu... Takut kamu salah paham. Sumpah aku nggak ada maksud aneh-aneh. Maaf ya kalau kesannya jadi kurang enak 🙏";

function typeWriter(text, elementId, delay = 40) {
  let i = 0;
  const element = document.getElementById(elementId);
  function typing() {
    if (i < text.length) {
      element.innerHTML += text.charAt(i);
      i++;
      setTimeout(typing, delay);
    }
  }
  typing();
}

window.onload = () => {
  typeWriter(text1, "text1");
};

function nextPage() {
  document.getElementById("page1").style.display = "none";
  document.getElementById("page2").style.display = "flex";
  typeWriter(text2, "text2");
}
let currentPage = 0;
const pages = document.querySelectorAll('.page');
pages[currentPage].classList.add('active');
function nextPage() {
  pages[currentPage].classList.remove('active');
  currentPage++;
  if (currentPage < pages.length) {
    pages[currentPage].classList.add('active');
  }
}