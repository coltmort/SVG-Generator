const inquirer = require('inquirer')
const fs = require('fs')
const {Circle} = require('./lib/circle')
const {Triangle} = require('./lib/triangle')
const {Square} = require('./lib/square')
const ui = new inquirer.ui.BottomBar()
let responses
let newLogoSVG


const textValidation = async (input) => {
    if(input.length > 3){
        return 'Please enter up to three characters.'
    } else {
        return true
    }
}

inquirer.prompt([
{
    type: 'list',
    name: 'shape',
    message: 'Which background shape would you like?',
    choices: ['Circle', 'Triangle', 'Square']
},{
    type: 'list',
    name: 'shapeColor',
    message: 'Which background color would you like on your shape?',
    choices: ['Red', 'Blue', 'Green', 'Yellow', 'Orange', 'White', 'Black', 'Purple']
},{
    type: 'input',
    name: 'text',
    message: 'Which letters would you like? (Please pick up to three letters)',
    validate: textValidation
},{
    type: 'list',
    name: 'textColor',
    message: 'Which color would you like on your text?',
    choices: ['Red', 'Blue', 'Green', 'Yellow', 'Orange', 'White', 'Black', 'Purple']
}]).then(
    (response) => {
        let newSVG
        if(response.shape.toLowerCase() === 'circle'){
           newSVG = new Circle(response.shapeColor, response.text, response.textColor, response.shape.toLowerCase(), 190, 170)
        } else if(response.shape.toLowerCase() === 'square'){
            newSVG = new Square(response.shapeColor, response.text, response.textColor, response.shape.toLowerCase(), 170)
        } else if(response.shape.toLowerCase() === 'triangle'){
            newSVG = new Triangle(response.shapeColor, response.text, response.textColor, response.shape.toLowerCase(), 250)
        }
        // works
        console.log(newSVG)

        // todo: get render() to return a complete svgtext
        // let wroteSVG = newSVG.render()

        // works
        fs.writeFile('./logo.svg', newSVG.render(), (err) =>
            err ? console.log(err) : console.log('Generated logo.svg'))
        }
)


// square y = 160
// triangle y = 120
// circle y = 170


// function writeSVG(response){
//     let shape
//     let color = response.shapeColor.toLowerCase()
//     if(response.shape.toLowerCase() === 'circle'){
//         shape = `circle cx="150" cy="150" r="125" fill="${color}"`
//     } else if ( response.shape.toLowerCase() === 'triangle'){
//         shape = `polygon points="40,250 260,250 150,50" fill="${color}"`
//     } else if ( response.shape.toLowerCase() === 'square'){
//         shape = `rect width="100%" height="100%" fill="${color}"`
//     }

//   newLogoSVG = `<svg
//     width="300" height="300"
//     xmlns="http://www.w3.org/2000/svg">

// <${shape} />

//  <text x="150" y="170" font-size="60" text-anchor="middle" fill="${response.textColor.toLowerCase()}">${response.text}</text>

// </svg>`
// generateSVG()
// }

// function generateSVG(){
//     fs.writeFile('./svglogo.svg', newLogoSVG, (err) =>
//     err ? console.log(err) : console.log('Success!'))
// }
