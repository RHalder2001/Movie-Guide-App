const searchFrom=document.querySelector('form')
const movieContainer=document.querySelector('.movie-container')
const inputBox=document.querySelector('.inputBox')

searchFrom.addEventListener('submit',(e)=>{
    e.preventDefault();
   const moiveName=inputBox.value.trim()
})

