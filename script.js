window.addEventListener('DOMContentLoaded', e => {

    const canvas =  document.querySelector('#canvas')
    const generateBut = document.querySelector('#grid-gen')
    const height = document.querySelector('#height')
    const width = document.querySelector('#width')
    const color = document.querySelector('#color')

    const MAX_VAL = 20 // the maximum width or length of the grid

    /**
     * This is the onclick button of the generate button. 
     * It calls the makegrid function if the inputted width and height meet some requirement
     */
    generateBut.onclick = e => {
        if (height.value < 1 || width.value < 1) {
            alert('the height and width cannot be less than one')
        } else if (height.value > MAX_VAL || width.value > MAX_VAL) {
            alert(" the height and width cannot be greater that " + MAX_VAL)
        } else makeGrid()
        
    } 

    /**
     * The mmakegrid function is used to generate the grid of buttons
     * Using  the grid height and width specified by the input,
     * the function makes a grid of buttons.
     */
    const makeGrid = () => {
        canvas.innerHTML = ''
        canvas.style.gridTemplateColumns = `repeat(${width.value}, 1fr)`
        for(let i = 0; i < height.value; i++ ) {
            for(let j = 0; j < width.value; j++) {
                const butt = document.createElement('button');
                butt.style.width = "20px";
                butt.style.height = "20px";
                butt.style.backgroundColor = "white";
                butt.style.border = '0.5px solid black'
    
                /**
                 * The onclick function of the button changes the color of the button
                 * to the selected color on the color input
                 */
                butt.onclick = e => {
                    e.target.style.backgroundColor = color.value
                }
                canvas.appendChild(butt)
            }
        }
    }
})