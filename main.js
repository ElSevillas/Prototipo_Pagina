const app = document.getElementById('typewriter');

const typewriter = new Typewriter(app, {
        loop: true,
        delay: 75
    });

typewriter
    .typeString('La ciudad que capturo el Sol')
    .pauseFor(200)
    .start();