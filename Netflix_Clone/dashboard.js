const text = `Step into a world of unlimited entertainment — where movies, shows, and creativity come alive...
This is not just a clone; it's a tribute to powerful design, smooth user experience, and my passion for web development.
From the sleek interface to the responsive tabs, animated transitions, and functional sign-in system — every element reflects my growing skills in HTML, CSS, JavaScript, and UI design.
Enjoy exploring this Netflix-inspired platform — built from scratch, crafted with care, and continuously improving...`;

let index = 0;
const typewriter = document.getElementById('typewriter');

function type() {
  if (index < text.length) {
    typewriter.textContent += text.charAt(index);
    index++;
    setTimeout(type, 30);
  }
}

type();
