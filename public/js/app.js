console.log("Client Side JavaScript")



const sampleForm = document.querySelector('form')
const input = document.querySelector('input')
var messgeOne = document.querySelector('#message1')
var messgeTwo = document.querySelector('#message2')
// messgeOne.textContent = ''
// messgeTwo.textContent = ''

sampleForm.addEventListener('submit',(e) =>
{
    e.preventDefault()
    const name = input.value
    //console.log("Testing")
    messgeOne.textContent = 'Loading...'
    fetch('https://puzzle.mead.io/puzzle').then((response)=>
    {
        response.json().then((data) =>
        {
            messgeTwo.textContent = data.puzzle
            console.log(data)
        })
    })
    console.log(name)
})