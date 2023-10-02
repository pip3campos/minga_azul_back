import Manga from '../../models/Manga.js';
import Category from '../../models/Category.js';


export default (io) => {

  io.on('connection', (socket) => {
    console.log(socket)
    socket.on('chat', async (msg) => {
      const arrayMsg = msg.toLowerCase().trim().split(" ")
      //PARA SALUDOS
      if (arrayMsg.includes("hi") || arrayMsg.includes("hello") || arrayMsg.includes("howdy") || arrayMsg.includes("cheers")) {
        socket.emit('response', `Hello! :) How can I help you?`)
      }
      //PARA DESPLEGAR LA COMMAND LIST
      else if (arrayMsg.includes("!help")) {
        socket.emit('response', "Type: •'!categories' to know about our available genres. \n •'!navigate' to know more about our website. \n •'!mangas' to know about our available mangas.")
      }
      //PARA DESPLEGAR LA OPCION DE !navigate
      else if (arrayMsg.includes("!navigate")) {
        socket.emit('response', "You can check out our collection by clicking 'Explore Mangas!'. Take a look at our other functionalities by clicking on the menu on the top left corner. And dont forget to ask me if you have any doubts! :)")
      }
      //PARA DESPLEGAR LA OPCION DE !categories
      else if (arrayMsg.includes("!categories")) {
        socket.emit('response', "We have a diverse collection, going from shonen and shojo, to seinen and more! Don't forget to check out our comics as well! :)")
      }
      //PARA DESPLEGAR LA OPCION DE !mangas
      else if (arrayMsg.includes("!mangas")) {
        let allMangas = await Manga.find()
        let mangasTitles = allMangas.map((manga) => manga.title)
        socket.emit('response', `Here's a list of some of our most popular mangas! • ${mangasTitles.join(', ')}, amongst others! Feel free to check them out here! :)`)
      }
      //PARA DECIRTE QUE MANGAS HAY EN CADA CATEGORIA INGRESANDO SOLO LA CATEGORIA Y NADA MAS
      else if (arrayMsg == "shonen") {
        let shonenManga = await Manga.find({ category_id: "64f165c070cf80df505fd933" })
        let shonenTitles = shonenManga.map((manga) => manga.title);
        let response = `We have some shonen mangas! Such as: ${shonenTitles.join(', ')} amongst others. Feel free to check them out!`;
        socket.emit('response', response)
      }
      else if (arrayMsg == "seinen") {
        let seinenManga = await Manga.find({ category_id: "64f165c070cf80df505fd931" })
        let seinenTitles = seinenManga.map((manga) => manga.title);
        let response = `We have some seinen mangas! Such as: ${seinenTitles.join(', ')} amongst others. Feel free to check them out!`;
        socket.emit('response', response)
      }
      else if (arrayMsg == "shojo") {
        let shojoManga = await Manga.find({ category_id: "64f165c070cf80df505fd92f" })
        let shojoTitles = shojoManga.map((manga) => manga.title)
        let response = `We have some shojo mangas! Such as: ${shojoTitles.join(', ')} amongst others. Feel free to check them out!`;
        socket.emit('response', response)
      }
      else if (arrayMsg == "comics") {
        let comicsManga = await Manga.find({ category_id: "64f165c070cf80df505fd92d" })
        let comicsTitles = comicsManga.map((manga) => manga.title)
        let response = `We have some comics! Such as: ${comicsTitles.join(', ')} amongst others. Feel free to check them out!`;
        socket.emit('response', response)
      }
      //PARA COMENTAR SOBRE CUANTOS MANGAS EXISTEN EN NUESTRO SITIO
      else if (arrayMsg.includes("many") && arrayMsg.includes("mangas")) {
        socket.emit('response', `There are many mangas in our collection! Do you prefer any particular genre? If you don't know the categories, remember you can use my !categories command`)
      }
      //PARA SABER MAS SOBRE LAS CATEGORIAS EN SI
      else if (arrayMsg.includes("what") && arrayMsg.includes("is") && arrayMsg.includes("shonen")) {
        let shonen = await Category.findById("64f165c070cf80df505fd933")
        let response = `Shonen ${shonen.description}`
        socket.emit('response', response)
      } else if (arrayMsg.includes("what") && arrayMsg.includes("is") && arrayMsg.includes("seinen")) {
        let seinen = await Category.findById("64f165c070cf80df505fd931")
        let response = `${seinen.description}`
        socket.emit('response', response)
      } else if (arrayMsg.includes("what") && arrayMsg.includes("is") && arrayMsg.includes("shojo")) {
        let shojo = await Category.findById("64f165c070cf80df505fd92f")
        let response = `${shojo.description}`
        socket.emit('response', response)
      } else if (arrayMsg.includes("what") && arrayMsg.includes("are") && arrayMsg.includes("comics")) {
        let comics = await Category.findById("64f165c070cf80df505fd92d")
        let response = `${comics.description}`
        socket.emit('response', response)
      }
      //PARA SABER QUE MANGAS TIENE CADA CATEGORIA
      else if (arrayMsg.includes("what") && arrayMsg.includes("shonen") && arrayMsg.includes("have")) {
        let shonenManga = await Manga.find({ category_id: "64f165c070cf80df505fd933" })
        let shonenTitles = shonenManga.map((manga) => manga.title);
        let response = `We have some shonen mangas! Such as: ${shonenTitles.join(', ')} amongst others. Feel free to check them out!`;
        socket.emit('response', response)
      } else if (arrayMsg.includes("what") && arrayMsg.includes("seinen") && arrayMsg.includes("have")) {
        let seinenManga = await Manga.find({ category_id: "64f165c070cf80df505fd931" })
        let seinenTitles = seinenManga.map((manga) => manga.title);
        let response = `We have some seinen mangas! Such as: ${seinenTitles.join(', ')} amongst others. Feel free to check them out!`;
        socket.emit('response', response)
      } else if (arrayMsg.includes("what") && arrayMsg.includes("shojo") && arrayMsg.includes("have")) {
        let shojoManga = await Manga.find({ category_id: "64f165c070cf80df505fd92f" })
        let shojoTitles = shojoManga.map((manga) => manga.title)
        let response = `We have some shojo mangas! Such as: ${shojoTitles.join(', ')} amongst others. Feel free to check them out!`;
        socket.emit('response', response)
      } else if (arrayMsg.includes("what") && arrayMsg.includes("comics") && arrayMsg.includes("have")) {
        let comicsManga = await Manga.find({ category_id: "64f165c070cf80df505fd92d" })
        let comicsTitles = comicsManga.map((manga) => manga.title)
        let response = `We have some comics! Such as: ${comicsTitles.join(', ')} amongst others. Feel free to check them out!`;
        socket.emit('response', response)
      }
      //PARA SABER MAS SOBRE CADA MANGA
      else if (arrayMsg.includes("alice") && arrayMsg.includes("in") && arrayMsg.includes("borderland")) {
        let selectedManga = await Manga.findById("64f16659401f669668888fe1")
        console.log(selectedManga)
        let response = `Here's a bit more about ${selectedManga.title}: "${selectedManga.description}". Read more about it here at Minga!`
        socket.emit('response', response)
      }
      else if (arrayMsg.includes("shingeki") && arrayMsg.includes("no") && arrayMsg.includes("kyojin")) {
        let selectedManga = await Manga.findById("64f1665a401f669668888ffb")
        console.log(selectedManga)
        let response = `Here's a bit more about ${selectedManga.title}: "${selectedManga.description}". Read more about it here at Minga!`
        socket.emit('response', response)
      }
      else if (arrayMsg.includes("the") && arrayMsg.includes("promise") && arrayMsg.includes("neverland")) {
        let selectedManga = await Manga.findById("64f1665b401f669668889011")
        console.log(selectedManga)
        let response = `Here's a bit more about ${selectedManga.title}: "${selectedManga.description}". Read more about it here at Minga!`
        socket.emit('response', response)
      }
      else if (arrayMsg.includes("bleach")) {
        let selectedManga = await Manga.findById("64f1665d401f669668889029")
        console.log(selectedManga)
        let response = `Here's a bit more about ${selectedManga.title}: "${selectedManga.description}". Read more about it here at Minga!`
        socket.emit('response', response)
      }
      else if (arrayMsg.includes("another")) {
        let selectedManga = await Manga.findById("64f1665e401f669668889041")
        console.log(selectedManga)
        let response = `Here's a bit more about ${selectedManga.title}: "${selectedManga.description}". Read more about it here at Minga!`
        socket.emit('response', response)
      }
      else if (arrayMsg.includes("gantz")) {
        let selectedManga = await Manga.findById("64f1665f401f669668889059")
        console.log(selectedManga)
        let response = `Here's a bit more about ${selectedManga.title}: "${selectedManga.description}". Read more about it here at Minga!`
        socket.emit('response', response)
      }
      else if (arrayMsg.includes("punpun")) {
        let selectedManga = await Manga.findById("64f16661401f669668889071")
        console.log(selectedManga)
        let response = `Here's a bit more about ${selectedManga.title}: "${selectedManga.description}". Read more about it here at Minga!`
        socket.emit('response', response)
      }
      else if (arrayMsg.includes("flashpoint")) {
        let selectedManga = await Manga.findById("64f16662401f669668889089")
        console.log(selectedManga)
        let response = `Here's a bit more about ${selectedManga.title}: "${selectedManga.description}". Read more about it here at Minga!`
        socket.emit('response', response)
      }
      else if (arrayMsg.includes("planet") && arrayMsg.includes("hulk")) {
        let selectedManga = await Manga.findById("64f16663401f669668889097")
        console.log(selectedManga)
        let response = `Here's a bit more about ${selectedManga.title}: "${selectedManga.description}". Read more about it here at Minga!`
        socket.emit('response', response)
      }
      else if (arrayMsg.includes("secret") && arrayMsg.includes("invasion")) {
        let selectedManga = await Manga.findById("64f16664401f6696688890af")
        console.log(selectedManga)
        let response = `Here's a bit more about ${selectedManga.title}: "${selectedManga.description}". Read more about it here at Minga!`
        socket.emit('response', response)
      }
      else if (arrayMsg.includes("superman")) {
        let selectedManga = await Manga.findById("64f16665401f6696688890c5")
        console.log(selectedManga)
        let response = `Here's a bit more about ${selectedManga.title}: "${selectedManga.description}". Read more about it here at Minga!`
        socket.emit('response', response)
      }
      else if (arrayMsg.includes("world") && arrayMsg.includes("war") && arrayMsg.includes("hulk")) {
        let selectedManga = await Manga.findById("64f16666401f6696688890d5")
        console.log(selectedManga)
        let response = `Here's a bit more about ${selectedManga.title}: "${selectedManga.description}". Read more about it here at Minga!`
        socket.emit('response', response)
      }
      else if (arrayMsg.includes("pokemon")) {
        let selectedManga = await Manga.findById("64f16667401f6696688890e3")
        console.log(selectedManga)
        let response = `Here's a bit more about ${selectedManga.title}: "${selectedManga.description}". Read more about it here at Minga!`
        socket.emit('response', response)
      }
      else if (arrayMsg.includes("citrus")) {
        let selectedManga = await Manga.findById("64f16668401f669668889103")
        console.log(selectedManga)
        let response = `Here's a bit more about ${selectedManga.title}: "${selectedManga.description}". Read more about it here at Minga!`
        socket.emit('response', response)
      }
      else if (arrayMsg.includes("ao") && arrayMsg.includes("haru") && arrayMsg.includes("ride")) {
        let selectedManga = await Manga.findById("64f1666a401f66966888911f")
        console.log(selectedManga)
        let response = `Here's a bit more about ${selectedManga.title}: "${selectedManga.description}". Read more about it here at Minga!`
        socket.emit('response', response)
      }
      else { socket.emit('response', "Sorry! I didn't get that :/ There's a chance what you're looking for is not here. Could you try again?") }
    })



    ////////// Testeo desde el lado del servidor


    socket.on('mensaje del cliente', (message) => {
      console.log('Mensaje recibido:', message);

      // Envía la respuesta solo al cliente que envió el mensaje
      socket.emit('mensaje del servidor', 'Respuesta del servidor: ' + message);
    });

    socket.on('solicitud de ayuda cliente', (message) => {
      console.log('Mensaje recibido:', message);

      // Envía la respuesta solo al cliente que envió el mensaje
      socket.emit('lista de comandos', 'Respuesta del servidor: ' + "Type: •'!categories' to know about our available genres. \n •'!navigate' to know more about our website. \n •'!mangas' to know about our available mangas.");
    });

    socket.on('solicitud de categorias cliente', (message) => {
      console.log('Mensaje recibido:', message);

      // Envía la respuesta solo al cliente que envió el mensaje
      socket.emit('lista de categorias', 'Respuesta del servidor: ' + "We have a diverse collection, going from shonen and shojo, to seinen and more! Don't forget to check out our comics as well! :)");
    });

    socket.on('consulta cantidad de mangas cliente', (message) => {
      console.log('Mensaje recibido:', message);

      // Envía la respuesta solo al cliente que envió el mensaje
      socket.emit('cantidad de mangas', 'Respuesta del servidor: ' + `There are many mangas in our collection! Do you prefer any particular genre? If you don't know the categories, remember you can use my !categories command`);
    });
    
    socket.on('solicitud manga no existente cliente', (message) => {
      console.log('Mensaje recibido:', message);

      // Envía la respuesta solo al cliente que envió el mensaje
      socket.emit('manga no existente', 'Respuesta del servidor: ' + "Sorry! I didn't get that :/ There's a chance what you're looking for is not here. Could you try again?");
    });

  })
}