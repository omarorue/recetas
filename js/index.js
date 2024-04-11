let datos1 = {
  receta: [
    { r0: 'Empanadas', 
      r1: 'En una olla con aceite caliente agregar la cebolla y el morrón. Dejar dorar unos minutos y cuando estén a medio cocer (cebolla transparente), agregar el ajo y un poco de sal y pimienta.', 
      r2: 'Subir el fuego y agregar de una toda la carne picada. Mover la carne para que no quede pegada.   Cuando la carne esté sellada agregar el tomate en cubos y las 2 cdas de puré de tomates.', 
      r3: 'Condimentar con pimenton y comino, un poco más de sal y pimienta y mezclar bien. Tapar (no del todo, dejar un pequeño hueco) y dejar cocinar una media hora revolviendo de a poco.', 
      r4: 'Sacar del fuego y dejar enfriar en la olla. Agregar las aceitunas picadas y mezclar bien. (En este paso pueden agregar cualquier otra cosa que le quieran poner: huevo duro, pasas, papa, etc)',
      r5: 'Repartir el relleno en las tapas de empanada,  y cerrar con un repulgue tradicional. Antes de meterlas en el horno pueden pintarlas con huevo, pero es muy a gusto y opcional.',
      r6: 'Poner nuestras empanadas de carne en una placa y llevar a horno fuerte hasta que estén doradas y a disfrutar!',
      pag_izq: 'fnPolenta()',
      pag_der: 'fnPuchero()',
      izq: 'Polenta',
      der: 'Puchero',
      imagen: 'empanada2.png'
    }
  ]
}

let datos2={
  receta: [
    { r0: 'Puchero',
      r1: 'Poner a hervir la olla más grande que tengas con agua.',
      r2: 'Cuando esté a punto de hervir, agregar la carne. Hervir así unos 15 minutos, con la olla destapada.',
      r3: 'Retirar con una espumadera la grasa que veas flotando en la superficie. Como explico en el video, este paso puede obviarse, pero, sobre todo si usás pollo o chorizo, es recomendable desgrasar la carne.',
      r4: 'Una vez desgrasada la carne, agregamos un atado hecho con el puerro, el perejil y el apio (atados con un piolín, para poder sacarlos por completo), las zanahorias y el choclo, cortados en trozos grandes y la cebolla, cortada al medio. Dejamos hervir esto una media hora. ¡Cuidado! se deja una media hora porque la carne que utilizo en este caso es rabo, que se hace rápido. La idea de la carne de puchero es que esté bien bien cocida, casi que se deshaga, de modo que si usás otra carne, como osobuco, lo ideal es dejarla más tiempo.',
      r5: 'Una vez pasada la media hora, agregamos el resto de verduras: la calabaza, el zapallo, la papa y las batatas. Todo cortado en trozos bien grandes.  Salpimentamos. Dejamos cocinar hasta que la papa esté lista. Ese será el momento de sacarlo.',
      r6: 'Para servir el puchero, descartamos el atado de puerro, apio y perejil, y vamos colocando todos los ingredientes sin caldo en una fuente. Agregamos un poco más de sal y pimienta si hace falta y un buen chorro de aceite de oliva. Lo que te queda en la olla es un riquísimo caldo de puchero que puede comerse solo, en sopa con fideos o incorporar a otro tipo de preparaciones.',
      pag_izq: 'fnEmpanadas()',
      pag_der: 'fnGuiso()',
      izq: 'Empanadas',
      der: 'Guiso',
      imagen: 'puchero.jpg'
    }
  ]
}

let datos3={
  receta: [
    {  r0: 'Guiso de fideos',
      r1: 'Cortar la carne en cubos de un bocado, dorar con aceite de oliva en una cacerola. Reservar.',
      r2: 'En esa misma olla saltear el ajo junto a la cebolla, la zanahoria y el morrón cortados pequeño. Una vez que estén transparentes sumar los tomates cortados en cuadraditos. Saltear unos minutos.',
      r3: 'Bajar el fuego a mínimo y agregar la papa y la calabaza cortadas en cubos y sumar la carne que estaba reservada. Sumar el puré de tomates y condimentar. ',
      r4: 'Cuando el puré de tomates cambie de color y se ponga un tono más oscuro agregar el caldo.',
      r5: 'Una vez que las papas estén tiernas pero no cocidas del todo agregar los fideos y las arvejas, tapar y cocinar los fideos al dente.',
      r6: 'Servir junto pan caliente y queso rallado. A disfrutar!',
      pag_izq: 'fnPuchero()',
      pag_der: 'fnPolenta()',
      izq: 'Puchero',
      der: 'Polenta',
      imagen: 'guiso.jpg'
    }
  ]
}

let datos4={
  receta: [
    { r0: 'Polenta',
      r1: 'Colocar en una olla 3 tazas de agua y llevar a hervor. Agregar un caldo de carne.',
      r2: 'Cuando se disuelve, se agrega la polenta y revuelve constantemente mientras se cocina durante 1 minuto a fuego medio.',
      r3: 'Sumarle queso rallado y condimentar con pimienta negra recién molida.',
      r4: 'En una fuente para horno previamente enmantecada colocar la polenta y luego la salsa lista. ',
      r5: 'Por arriba incorporar el queso cremoso en pequeños trozos y perejil. ',
      r6: 'Llevar todo a horno fuerte por 10 minutos hasta que el queso se derrita.',
      pag_izq: 'fnGuiso()',
      pag_der: 'fnEmpanadas()',
      izq: 'Guiso',
      der: 'Empanadas',
      imagen: 'polenta.jpg'
    }
  ]
}

function quitarMenu(){
  document.getElementById('menu').style = 'display: none'
}

function renderReceta(receta){
  let tmpl = document.getElementById('tmplTabla').innerHTML
  document.getElementById('templateMustache').innerHTML = Mustache.render(tmpl, receta)
}

function fnEmpanadas(){
  renderReceta(datos1)
}
function fnPuchero(){
  renderReceta(datos2)
}
function fnGuiso(){
  renderReceta(datos3)
}
function fnPolenta(){
  renderReceta(datos4)
}

document.getElementById('empanadas').addEventListener('click', () => {
  quitarMenu()
  fnEmpanadas()
})
document.getElementById('puchero').addEventListener('click', () => {
  quitarMenu()
  fnPuchero()
})
document.getElementById('guiso').addEventListener('click', () => {
  quitarMenu()
  fnGuiso()
})
document.getElementById('polenta').addEventListener('click', () => {
  quitarMenu()
  fnPolenta()
})
document.getElementById('test').addEventListener('click', () => {
  console.log('Presiono TEST')
})
