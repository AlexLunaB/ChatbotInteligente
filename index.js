/*
AUTOR : Sergio LUNA, Rafa
ESTAS FUNCIONES HACEN ALGO
FECHA:4 JULIO 2019
*/

'use strict';
const {
  dialogflow,
  BasicCard,
  BrowseCarousel,
  BrowseCarouselItem,
  Button,
  Carousel,
  Image,
  LinkOutSuggestion,
  List,
  MediaObject,
  Suggestions,
  SimpleResponse,
  Table,
 } = require('actions-on-google');
const functions = require('firebase-functions');
const admin = require('firebase-admin');

var serviceAccount = require('./firestoreKey.json');
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});
var db = admin.firestore();
const settings = {timestampsInSnapshots: true};
db.settings(settings);

const app = dialogflow({debug: true});

const dialogflowapi = require('dialogflow');



//INTENT DE PREGUNTAS


app.intent('Preguntas', (conv)=> {

  var  topic= conv.parameters["topic"];
  var  tema= conv.parameters["any"];



  return referencia.get().then( snap => {
      if (snap.exists) {
          const allData = snap.data();
          const precio = allData.precio;
          conv.ask(new SimpleResponse({
          speech:"El precio de la bicicleta " + modelo + " es de : " + precio + "pesos",
              text:"El precio de" + modelo + "es de :" + precio +"pesos"+ "😬",
          }));
           return console.log("Done!");
       }else{
           conv.ask(new SimpleResponse({
               speech:"Lo siento, este modelo no existe",
               text:"Lo siento, este modelo no existe",
           }));
       return console.log("Done!");
   }
 });



  var greddy="Hay problemas que a pesar de tener un planteo sumamente sencillo, carecen de una solución que pueda ser considerada trivial. Imaginemos, por ejemplo, un viajante de comercio que debe recorrer 25 ciudades distribuidas por el interior de España: ¿de que forma debería hacerlo para completar su trabajo recorriendo el menor número de kilómetros posible? El problema seguramente es de interés para un gran número de empresas, se puede definir claramente en pocas palabras, pero su solución demandaría a un ordenador varios años de trabajo.Esto se debe a que la cantidad de recorridos posibles es de 25! (25 factorial, o sea, 1 x 2 x 3 x 4 x 5 x … x 24 x 25), es decir, hay 15.511.210.043.330.985.984.000.000 recorridos para probar y descartar antes de saber cual es el óptimo. Analizando mil millones de recorridos por segundo, demoraríamos 491.857.244 años en averiguar cuál es el recorrido óptimo para nuestro viajante. Esto sirve para darnos cuenta de la importancia que tiene un algoritmo rápido, aun cuando no siempre sea capaz de encontrar el mejor resultado posible.";

  conv.ask("Este es el concepto" +greddy);


  //IMPRIME CARRUSEL CON LOS DATOS ENCONTRADOS EN LOS NODOVideo
  conv.ask(new Carousel({
    items: {
      Video: {
        title: 'Video',
        description: 'Muestra Videos sobre el algoritmo',
        synonyms: ['Video'],
        image: new Image({
  url: 'https://png.pngtree.com/element_origin_min_pic/17/07/28/e317092bb55fcce10fb6f38f3321defa.jpg',
  alt: 'Video',
}),
      },
      Examen: {
        title: 'Examen',
        description: 'Realiza un diagnostico sobre el tema',
        synonyms: [ 'Examen'],
        image: new Image({
  url: 'http://www.soycest.mx/blog/wp-content/uploads/2018/08/CEST_13-consejos-para-que-apruebes-el-examen-de-admision-para-universidad.jpg',
  alt: 'Examen',
}),
      }
    }
  }));

});



//INTENT DE PREGUNTAS VIDEOS//

app.intent('Preguntas-videos', conv => {

  conv.ask(new SimpleResponse({
  speech:"Estoy buscando ",
      text:"Estoy buscando",
  }));

  const context = conv.contexts.get('preguntas-followup')
  const nombre= context.parameters.topic;
  const tema =context.parameters.any;
  conv.ask(new SimpleResponse({
  speech:"He recordado el contexto el nombre del tópico es " + nombre + " y de  del tema es : " + tema,
      text:"El nombre del tópico es " + nombre + " y de  del tema es : " + tema+ "😬",
  }));

  conv.ask(new BasicCard({
  text: `ESTE ES UN PRIMER VIDEO SOBRE GREDDY`, // Note the two spaces before '\n' required for
                               // a line break to be rendered in the card.
  subtitle: 'GREDDY',
  title: 'ALGORITMO DE GREEDY',
  buttons: new Button({
    title: 'ABRE VIDEO',
    url: 'https://www.youtube.com/watch?v=DsS33DCWvC4',
  }),
  image: new Image({
    url: 'https://img.youtube.com/vi/DsS33DCWvC4/0.jpg',
    alt: 'VIDEO',
  }),
  display: 'VIDEO GREDDY',
}));


});






// Create a basic card
/*
conv.ask(new BasicCard({
  text: ``, // Note the two spaces before '\n' required for
                               // a line break to be rendered in the card.
  subtitle: 'This is a subtitle',
  title: 'Title: this is a title',
  buttons: new Button({
    title: 'This is a button',
    url: 'https://assistant.google.com/',
  }),
  image: new Image({
    url: 'https://example.com/image.png',
    alt: 'Image alternate text',
  }),
  display: 'CROPPED',
}));
*/


//REALIZAR CONSULTA A BASE DE DATOS PENDIENTE
