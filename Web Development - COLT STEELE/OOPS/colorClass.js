class color {

    constructor(r,g,b, name) {
        this.r = r;
        this.g = g;
        this.b = b;

        this.name = name;
    }

    innerRGB() {
        const { r, g, b } = this;
        return `${r}, ${g}, ${b}`;
    }

    greet() {
        return `hello from ${this.name}!`;
    }

    rgb() {
        const { r, b, g } = this;
        return `rgb( ${r}, ${g}, ${b})`;
    }

    hex() {
        const { r, g, b } = this;
        return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
    }

    rgba(a = 1.0) {
        return `rgba( ${r}, ${g}. ${b}, ${a})`;
    }

} 