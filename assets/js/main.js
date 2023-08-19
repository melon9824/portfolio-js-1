//! mobile menu open/close
const navMenu = document.getElementById('nav-menu');

function openmenu() {
    navMenu.style.right = '0';
}

function closemenu() {
    navMenu.style.right = '-200px';
}


//! about section tab hide / show
const tabLinks = document.getElementsByClassName('tab__links');
const tabContents = document.getElementsByClassName('tab__contents');

function opentab(tabname) {
    for(tabLink of tabLinks) {
        tabLink.classList.remove('active__link');
    }

    for(tabContent of tabContents) {
        tabContent.classList.remove('active__tab');
    }

    event.currentTarget.classList.add('active__link');
    document.getElementById(tabname).classList.add('active__tab');
}


//! contact form
  const scriptURL = 'https://script.google.com/macros/s/AKfycbzqMYw8xCaQrJpfDIQnecK9tJGCk1lI1g8l86HBUnsyPu0jIejM0mj7dmET8BTShuExPA/exec';
  const form = document.forms['submit-to-google-sheet'];
  const msg = document.getElementById('msg');

  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => {
        msg.innerHTML = 'Message sent successfully';
        setTimeout(function() {
            msg.innerHTML = ''
        },3000);
        form.reset();
      })
      .catch(error => console.error('Error!', error.message));
  });


//! show scroll up
  const scrollUp = () => {
    const scrollUp = document.getElementById('scroll-up');

    this.scrollY >= 150 ? scrollUp.classList.add('show-scroll')
                        : scrollUp.classList.remove('show-scroll');
}

window.addEventListener('scroll', scrollUp);