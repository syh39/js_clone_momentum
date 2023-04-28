const images = [
    'bg0.jpeg',
    'bg1.jpeg',
    'bg3.jpeg',
    'bg4.jpeg',
    'bg5.jpeg',
    'bg6.jpeg',
    'bg11.jpeg'
];

const chosenImage = images[Math.floor(Math.random()*images.length)];
document.body.background = `images/${chosenImage} `;
document.body.style.backgroundSize = "cover";
