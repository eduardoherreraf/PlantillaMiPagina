// Import our custom CSS
import '../scss/styles.scss';

// Import all of Bootstrap's JS
import * as bootstrap from 'bootstrap';

// Import all of PrismJS's JS
import Prism from 'prismjs';
import '../../node_modules/prismjs/plugins/line-numbers/prism-line-numbers.min.js';
import '../../node_modules/prismjs/plugins/toolbar/prism-toolbar.min.js';
import '../../node_modules/prismjs/plugins/copy-to-clipboard/prism-copy-to-clipboard.min.js';
import '../../node_modules/prismjs/plugins/show-language/prism-show-language.min.js';
import '../../node_modules/prismjs/plugins/normalize-whitespace/prism-normalize-whitespace.min.js';
import '../../node_modules/prismjs/plugins/match-braces/prism-match-braces.min.js';
import '../../node_modules/prismjs/plugins/line-highlight/prism-line-highlight.min.js';
import '../../node_modules/prismjs/components/prism-python.min'
import 'prismjs/components/prism-python.min.js';

// Import bootstrap 5 icons
import 'bootstrap-icons/font/bootstrap-icons.css';

document.getElementById('myForm').reset();

// Botón to top
// Get the button
const myBtnScroll = document.getElementById('myBtnScroll');
myBtnScroll.addEventListener('click', () => {
  window.scrollTo(0, 0);
});

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    myBtnScroll.style.display = 'block';
  } else {
    myBtnScroll.style.display = 'none';
  }
}
