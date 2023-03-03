const inquirer = require('inquirer')
const fs = require('fs')
const {Circle} = require('./lib/circle')
const {Triangle} = require('./lib/triangle')
const {Square} = require('./lib/square')


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

        console.log(newSVG)

        fs.writeFile('./logo.svg', newSVG.render(), (err) =>
            err ? console.log(err) : console.log('Generated logo.svg'))
        }
)

