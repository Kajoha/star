export default class Background {
    color = '';
    canvas = document.querySelector("#canvas");;
    ctx = canvas.getContext("2d");;
    color = '';
    width = '';
    height = '';
    backgroundColor = '';
    counter = '';
    constructor(color, canvas, ctx) {
        this.color = color;
        this.canvas = canvas;
        this.ctx = ctx;
        this.width = window.innerWidth;
        this.height = window.innerHeight;
        this.canvas.width = this.width;
        this.canvas.height = this.height;
        this.backgroundColor = this.color;
        this.counter = 0;
    }

    helloWorld() {
        return 'Hello World';
    }

    randomInt(max) {
        return Math.floor(Math.random() * max);
    }

    createStars(spacing) {
        const maxStarRadius = 2;
        const stars = [];

        for (let x = 0; x < this.width; x += spacing) {
            for (let y = 0; y < this.height; y += spacing) {
                const star = {
                    x: x + this.randomInt(spacing),
                    y: y + this.randomInt(spacing),
                    r: Math.random() * maxStarRadius,
                };
                stars.push(star);
            }
        }
        return stars;
    }

    fillCircle(x, y, r, fillStyle) {
        this.ctx.beginPath();
        this.ctx.fillStyle = fillStyle;
        this.ctx.arc(x, y, r, 0, Math.PI * 2);
        this.ctx.fill();
    }

    getOpacity(factor) {
        const minStarOpacity = 0.2;
        const maxStarOpacity = 0.9;

        const opacityIncrement = (maxStarOpacity - minStarOpacity) * Math.abs(Math.sin(factor));
        const opacity = minStarOpacity + opacityIncrement;
        return opacity;
    }

    render(stars) {
        this.ctx.fillStyle = this.backgroundColor;

        this.ctx.fillRect(0, 0, this.width, this.height);

        for (let i = 0; i < stars.length; i++) {
            const factor = this.counter * i;
            const star = stars[i];
            const opacity = this.getOpacity(factor);
            this.fillCircle(
                this.ctx,
                star.x,
                star.y,
                star.r,
                `rgba(131, 104, 207, ${opacity}`,
            );
        }

        /*stars.forEach(function (star, i) {
          const factor = this.counter * i;
          const opacity = getOpacity(factor);
          this.fillCircle(
            this.ctx,
            star.x,
            star.y,
            star.r,
            `rgba(131, 104, 207, ${opacity}`,
          );
        });*/

        this.counter++;
        requestAnimationFrame(this.render);
    }

}
