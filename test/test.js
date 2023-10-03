import { io } from 'socket.io-client'
import { expect } from 'chai';

const socketURL = 'http://localhost:4000/'

describe("socket", () => {
    let socket;

    beforeEach((done) => {
        // Conéctate al servidor antes de cada prueba
        socket = io.connect(socketURL, {
            'reconnection delay': 0,
            'reopen delay': 0,
            'force new connection': true,
        });

        socket.on('connect', () => {
            done();
        });
    });

    afterEach((done) => {
        // Desconéctate después de cada prueba
        if (socket.connected) {
            socket.disconnect();
        }
        done();
    });

    it('debería enviar y recibir un mensaje', (done) => {
        const message = 'Hola, soy un mensaje de prueba';

        socket.emit('mensaje del cliente', message);

        socket.on('mensaje del servidor', (response) => {
            expect(response).to.equal('Respuesta del servidor: ' + message);
            console.log(response, message);
            done();
        });
    });

    it('deberia solicitar ayuda y retornarme una lista de comandos', (done) => {
        const message = "!help"

        socket.emit('solicitud de ayuda cliente', message);

        socket.on('lista de comandos', (response) => {
            expect(response).to.equal('Respuesta del servidor: ' + "Type: •'!categories' to know about our available genres. \n •'!navigate' to know more about our website. \n •'!mangas' to know about our available mangas.");
            console.log(response, "Type: •'!categories' to know about our available genres. \n •'!navigate' to know more about our website. \n •'!mangas' to know about our available mangas.");
            done();
        })
    })

    it('deberia pasarle el comando de categorias y devolverme una guia de categorias', (done) => {
        const message = "!categories"

        socket.emit('solicitud de categorias cliente', message);

        socket.on('lista de categorias', (response) => {
            expect(response).to.equal('Respuesta del servidor: ' + "We have a diverse collection, going from shonen and shojo, to seinen and more! Don't forget to check out our comics as well! :)");
            console.log(response, "We have a diverse collection, going from shonen and shojo, to seinen and more! Don't forget to check out our comics as well! :)");
            done();
        })
    })

    it('deberia preguntarle por la cantidad de mangas y devolverme una respuesta acorde', (done) => {
        const message = "many" + "mangas"

        socket.emit('consulta cantidad de mangas cliente', message);

        socket.on('cantidad de mangas', (response) => {
            expect(response).to.equal('Respuesta del servidor: ' + `There are many mangas in our collection! Do you prefer any particular genre? If you don't know the categories, remember you can use my !categories command`);
            console.log(response, `There are many mangas in our collection! Do you prefer any particular genre? If you don't know the categories, remember you can use my !categories command`);
            done();
        })
    })

    it('deberia preguntar por un manga que no existe en la db y devolver una respuesta acorde', (done) => {
        const message = "Naruto"

        socket.emit('solicitud manga no existente cliente', message);

        socket.on('manga no existente', (response) => {
            expect(response).to.equal('Respuesta del servidor: ' + "Sorry! I didn't get that :/ There's a chance what you're looking for is not here. Could you try again?");
            console.log(response, "Sorry! I didn't get that :/ There's a chance what you're looking for is not here. Could you try again?");
            done();
        })
    })

});