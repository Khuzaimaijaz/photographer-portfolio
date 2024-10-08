window.addEventListener('scroll',() =>{
    document.querySelector('nav').classList.toggle
    ('window-scrolled',window.scrollY > 0);
})

// const nav = document.querySelector('.nav__links');
// const openNavBtn = document.querySelector('#nav__toogle-open');
// const closeNavBtn = document.querySelector('#nav__toogle-close');
// const openNav = () => {
//   nav.style.display= 'flex';
//   openNavBtn.style.display ='none';
//   closeNavBtn.style.display='inline-block';
// }
// openNavBtn.addEventListener('click',openNav);
// openNavBtn.addEventListener('click',openNav);
// const closeNav = () => {
//   nav.style.display= 'none';
//   openNavBtn.style.display ='inline-block';
//   closeNavBtn.style.display='none';
// }
// closeNavBtn.addEventListener('click',closeNav);

// nav.querySelectorAll('li a').forEach(navLink =>{
//   navLink.addEventListener('click',closeNav);
// })





const form = document.getElementById('contact-form');
const response = document.getElementById('response');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;
  
  // Add code to send email or make API request here
  
  response.innerHTML = `Thank you, ${name}! Your message has been sent.`;
  response.style.display = 'block';
});
