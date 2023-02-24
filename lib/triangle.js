const {Shape} = require("./shape")

exports.Triangle = class Triangle extends Shape{
    constructor(shapeColor, text, textColor, shape){
        super(shapeColor, text, textColor, shape, 250)
        this.svgInner = `polygon points="20,270 280,270 150,50" fill="${this.shapeColor}"`
        this.shapeCode = `<${this.svgInner} />`
    }
    render(){
        return (this.SVGcodeOpen += this.shapeCode += this.SVGcodeText += this.SVGcodeClose)
    }
}