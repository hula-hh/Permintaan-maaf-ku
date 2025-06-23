
const text1 = "Hai Bianca, maaf aku gak ngechat kamu selama beberapa hari/seminggu ini. IG sama WA ku sedikit error jadinya suka ilang2an gitu, aku juga lagi fokus OSN jadinya aku lupa bersosialisasi. Hehe...";
const text2 = "Aku kangen banget sama kamu. Aku nyariin letak rumahmu. Dan ketika web ini kamu baca berarti aku udah nyerah nyari :). Aku cuman pengen kita jadi temen lagi, trus juga sebenarnya ketika aku nemuin akunmu, kenangan-kenangan lama itu muncul. Lalu hal itu yang membuat aku buat ngechat atau ngedm kamu. Oh iya aku sebenarnya takut buat ngechat dan semua chattan yang aku kirim itu buatan AI :). Lucu ya? Atau aneh? Ya memang seperti itu adanya.";

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
