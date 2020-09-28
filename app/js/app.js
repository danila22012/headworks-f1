document.addEventListener("DOMContentLoaded", function() {
  // this function runs when the DOM is ready, i.e. when the document has been parsed

  // all js code should go below this line

  const btn = document.querySelector('.barMenu__container')
  console.log(btn)

  const nav = document.querySelector('.nav__adaptive')
  console.log(nav);

  const bars = document.querySelectorAll('.barMenu')
  bars.forEach(e=> console.log(e.className))

  const main = document.querySelector('.main')
  console.log(main)

  let state = false;

  btn.addEventListener('click', e =>{
    
    
    if (state) {
      nav.classList.toggle('disabled')
      main.classList.toggle('overlay')
      bars.forEach(e=>e.className = 'barMenu')

      state = false
      
    }
    else if(!state) {
      nav.className ='active nav__adaptive'
      main.className = 'main overlay'
      state = true
      bars.forEach(e=>e.className = 'barMenu cross')
    }
  })
}); 
