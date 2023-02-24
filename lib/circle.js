const {Shape} = require("./shape")

exports.Circle = class Circle extends Shape{
    constructor(shapeColor, text, textColor, shape){
        super(shapeColor, text, textColor, shape, 190 ,170)
        this.svgInner = `${this.shape} cx="150" cy="${this.r}" r="125" fill="${this.shapeColor}"`
        this.shapeCode = `<${this.svgInner} />`
    }
    render(){
        return (this.SVGcodeOpen += this.shapeCode += this.SVGcodeText += this.SVGcodeClose)
    }
}

