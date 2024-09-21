function makeColor(r, g, b) {
    const color = {};
    color.r = r;
    color.g = g;
    color.b = b;
    
    color.rgb = function () {
        const { r, g, b } = this;
        return `rgb(${r}, ${g}, ${b})`;
    }

    color.hex = function () {
        const { r, g, b } = this;
        return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
    }
    return color;
}


function color(r, g, b) {
    this.r = r;
    this.g = g;
    this.b = b;
}

color.prototype.rgb = function () {
    const { r, g, b } = this;
    return `rgb( ${r}, ${g}, ${b})`;
}

color.prototype.hex = function() {
    const { r, g, b } = this;
    return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
}

color.prototype.rgba = function (a=1.0) {
    const { r, g, b } = this;
    return `rgba( ${r}, ${g}. ${b}, ${a})`;

}

const color1 = new color(40, 50, 60);
const color2 = new color(0, 0, 0);