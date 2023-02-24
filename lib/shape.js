exports.Shape = class Shape{
    constructor(shapeColor, text, textColor, shape, texty, r){
    this.shape = shape
    this.shapeColor = shapeColor
    this.text = text
    this.texty = texty
    this.textColor = textColor
    this.r = r
    this.SVGcodeOpen = `<svg
    width="300" height="300"
    xmlns="http://www.w3.org/2000/svg">`
    this.shapeCode
    this.SVGcodeText = `<text x="150" y="${this.texty}" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>`
    this.SVGcodeClose = `</svg>`





    }
    render(){

    }
}




