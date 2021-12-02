document.querySelectorAll('.block').forEach(el => {new SimpleBar(el)});

const buttons = document.querySelectorAll('.accordion__item')
buttons[0].lastElementChild.classList.toggle('active')

window.onresize = function (event) {

  for (let i = 0; i < buttons.length; i++) {
    let contentAct = buttons[i].lastElementChild;

   
    let accardion__contentP = contentAct.querySelector('p').offsetHeight;
    (accardion__contentP > 200) ? accardion__contentP = 200 : contentAct.classList.remove('block');

    (contentAct.classList.contains("active")) ? contentAct.style.height = `${accardion__contentP}px`: contentAct.style.height = `0px`
  }
}
window.onresize()


buttons.forEach(button => {
  button.childNodes[1].querySelector('.accordion__title').addEventListener('click', (event)=>{

    let activeDiv = event.explicitOriginalTarget.offsetParent.nextElementSibling

    for (let i = 0; i < buttons.length; i++) {
      let k = buttons[i].lastElementChild
      if(activeDiv !== k) k.classList.remove('active')
    }

    if(activeDiv !== null ) activeDiv.classList.toggle('active')
    window.onresize()
  } )
})


  
// document.querySelector('.wedo__image').addEventListener('click', () =>{
//   console.log(document.querySelector('.wedo__image').height);
// })

