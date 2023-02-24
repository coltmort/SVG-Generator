const {Shape} = require("./shape")

exports.Square = class Square extends Shape{
    constructor(shapeColor, text, textColor, shape){
        super(shapeColor, text, textColor, shape, 170)
        this.svgInner = `rect x="50" y="50" rx="50" ry="50" width="200" height="200" fill="${this.shapeColor}"`
        this.shapeCode = `<${this.svgInner} />`
    }
    render(){
        return (this.SVGcodeOpen += this.shapeCode += this.SVGcodeText += this.SVGcodeClose)
    }
}

