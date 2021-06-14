import Background from "./Background";

const canvas = document.querySelector("#canvas");
const ctx = canvas.getContext("2d");
const color = '#081329';

const background = new Background(color, canvas, ctx);
const stars = background.createStars(60);
background.render(stars);