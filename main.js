let app = document.getElementById('typewriter');
let typewriter = new Typewriter(app,{
loop:true,
delay: 75,
});

typewriter
.pauseFor(2500)
.typeString(' "La quimica es la melodia que puedes tocar en cuerdas vibrantes" <br> -Michio Kaku')
.pauseFor(200)
.deleteChars(10)
.start();