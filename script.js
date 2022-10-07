var audio = new Audio('assets/sentmessage.mp3');
var contactString = "<div class='social'> <a target='_blank' href='tel:+99999999'> <div class='socialItem' id='call'><img class='socialItemI' src='images/phone.svg'/><label class='number'>solicite su numero</label></div> </a> <a href='mailto:boristravi@gmail.com'> <div class='socialItem'><img class='socialItemI' src='images/gmail.svg' alt=''></div> </a> <a target='_blank' href='https://github.com/BorisTravi'> <div class='socialItem'><img class='socialItemI' src='images/github.svg' alt=''></div> </a> <a target='_blank' href='https://t.me/ingtravis''> <div class='socialItem'><img class='socialItemI' src='images/whatsapp.svg' alt=''></div> </a> <a target='_blank' href='https://t.me/ingtravis'> <div class='socialItem'><img class='socialItemI' src='images/telegram.svg' alt=''></div> </a> <a target='_blank' href='https://www.instagram.com/boristravi/'> <div class='socialItem'><img class='socialItemI' src='images/instagram.svg' alt=''> </div> </a> <a href='https://www.linkedin.com/in/boris-travi-187434ab/' target='_blank' rel='noopener noreferrer'> <div class='socialItem'><img class='socialItemI' src='images/linkedin.svg' alt=''></div> </a> </div>";
var resumeString = "<img src='images/resumeThumbnail.png' class='resumeThumbnail'><div class='downloadSpace'><div class='pdfname'><img src='images/pdf.png'><label>Boris Travi.pdf</label></div><a href='assets/cv_Boris_travi.pdf' download='Boris Travi.pdf'><img class='download' src='images/downloadIcon.svg'></a></div>";
var addressString = "<div class='mapview'><iframe src='https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=lima&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed' class='map'></iframe></div><label class='add'><address>LIMA<br>Lima - Peru</address>";
function startFunction() {
    setLastSeen();
    waitAndResponce("intro");
}

function setLastSeen() {
    var date = new Date();
    var lastSeen = document.getElementById("lastseen");
    lastSeen.innerText = "Visto por ultima vez hoy " + date.getHours() + ":" + date.getMinutes()
}


function closeFullDP() {
    var x = document.getElementById("fullScreenDP");
    if (x.style.display === 'flex') {
        x.style.display = 'none';
    } else {
        x.style.display = 'flex';
    }
}

function openFullScreenDP() {
    var x = document.getElementById("fullScreenDP");
    if (x.style.display === 'flex') {
        x.style.display = 'none';
    } else {
        x.style.display = 'flex';
    }
}


function isEnter(event) {
    if (event.keyCode == 13) {
        sendMsg();
    }
}

function sendMsg() {
    var input = document.getElementById("inputMSG");
    var ti = input.value;
    if (input.value == "") {
        return;
    }
    var date = new Date();
    var myLI = document.createElement("li");
    var myDiv = document.createElement("div");
    var greendiv = document.createElement("div");
    var dateLabel = document.createElement("label");
    dateLabel.innerText = date.getHours() + ":" + date.getMinutes();
    myDiv.setAttribute("class", "sent");
    greendiv.setAttribute("class", "green");
    dateLabel.setAttribute("class", "dateLabel");
    greendiv.innerText = input.value;
    myDiv.appendChild(greendiv);
    myLI.appendChild(myDiv);
    greendiv.appendChild(dateLabel);
    document.getElementById("listUL").appendChild(myLI);
    var s = document.getElementById("chatting");
    s.scrollTop = s.scrollHeight;
    setTimeout(function () { waitAndResponce(ti) }, 1500);
    input.value = "";
    playSound();
}

function waitAndResponce(inputText) {
    var lastSeen = document.getElementById("lastseen");
    lastSeen.innerText = "escribiendo...";
    switch (inputText.toLowerCase().trim()) {
        case "intro":
            setTimeout(() => {
                sendTextMessage("Hola que tal 👋🏻,<br><br>Mi nombre es<span class='bold'> <a class='alink'>Boris Travi</a>.</span><br><br>Estudie ingenieria de sistemas <span class='bold'><a target='_blank' class='alink' href='https://www.upn.edu.pe' >Universidad privada del norte 👨🏻‍💻📚</a></span><br><br>actualmente trabajo para kyndryl en el departamento de TI.<br><br>Presione <span class='bold'>'help'</span> para saber mas de mí.<br>");
            }, 2000);
            break;
        case "help":
            sendTextMessage("<span class='sk'>Presione la palabra clave de color amarillo para saber mas de mi...<br><span class='bold'>'habilidades'</span> - conocer mis habilidades<br><span class='bold'>'resumen'</span> - para obtener mi curriculum<br><span class='bold'>'educacion'</span> - para obtener los detalles de mi educacion<br><span class='bold'>'direccion'</span> - para obtener mi direccion<br><span class='bold'>'contactos'</span> - para obtener forma de contactarse me<br><span class='bold'>'proyectos'</span> - obtener detalles <br><span class='bold'>'limpiar'</span> - para limpiar la conversacion<br><span class='bold'>'sobre mi'</span> - saber sobre este sitio</span>");
            break;
        case "resumen":
            sendTextMessage(resumeString);
            break;
        case "habilidades":
            sendTextMessage("<span class='sk'>Estudie en la UNIVERSIDAD PRIVADA DEL NORTE en el año 2015.<br><br>Puedo escribir código en los siguentes lenguajes sin embargo tengo mas experiencia con C# :<br><span class='bold'>Javascritps<br>C#<br>Dart<br>Python<br>CSS<br>HTML</span><br><br>Manejo los framwork's :<span class='bold'><br>.NET<br>Flutter<br>Xamarin<br>FLASK</span><br><br>Uso Sistemas Operativos<span class='bold'>WINDOWS - MAC - Linux");
            break;

        case "educacion":
            sendTextMessage("Estudie en la UNIVERSIDAD PRIVADA DEL NORTE - Ingenieria de sistemas <br>en el año : 2015<br><br>Lleve un especializacion como desarrollador mobiles<br>en el año:2019<br>Resultado:86.06%<br><br>Tambien estudie en el instituto SIDEM sistemas e informatica en en el año:2010 pero no lo termine quedandome en 5to ciclo <br><br>Actualmente estoy certificandome como especialista cloud <br> Azure,GOOGLE,AWS");
            break;

        case "direccion":
            sendTextMessage(addressString);
            break;
        case "limpiar":
            clearChat();
            break;
        case "sobre mi":
            sendTextMessage("🛠️💻 ¡Este sitio web está construido usando HTML, CSS y JavaScript de SCRATCH!<br><br>👨🏻‍💻 Diseñado y desarrollado por <a class='alink' target='_blank' href='https:\/\/instagram.com/boristravi/'><span class='bold'>Boris Travi</a> con ❤️</span>");
            break;
        case "contactos":
            sendTextMessage(contactString);
            break;
        case "proyectos":
            sendTextMessage("Puedes ver mis repositorios presionando en el boton Github.<br><br><div class='social'><a target='_blank' href='https://github.com/BorisTravi'> <div class='socialItem'><img class='socialItemI' src='images/github.svg' alt=''></div> </a></div>");
            break;
        case "new":
            sendTextMessage(addressString);
            break;
        default:
            setTimeout(() => {
                sendTextMessage("Hola, no puede entenderte 😢<br>Envie 'help' para saber más sobre el uso");
            }, 2000);
            break;
    }



}

function clearChat() {
    document.getElementById("listUL").innerHTML = "";
    waitAndResponce('intro');
}



function sendTextMessage(textToSend) {
    setTimeout(setLastSeen, 1000);
    var date = new Date();
    var myLI = document.createElement("li");
    var myDiv = document.createElement("div");
    var greendiv = document.createElement("div");
    var dateLabel = document.createElement("label");
    dateLabel.setAttribute("id", "sentlabel");
    dateLabel.id = "sentlabel";
    dateLabel.innerText = date.getHours() + ":" + date.getMinutes();
    myDiv.setAttribute("class", "received");
    greendiv.setAttribute("class", "grey");
    greendiv.innerHTML = textToSend;
    myDiv.appendChild(greendiv);
    myLI.appendChild(myDiv);
    greendiv.appendChild(dateLabel);
    document.getElementById("listUL").appendChild(myLI);
    var s = document.getElementById("chatting");
    s.scrollTop = s.scrollHeight;
    playSound();
}


function sendResponse() {
    setTimeout(setLastSeen, 1000);
    var date = new Date();
    var myLI = document.createElement("li");
    var myDiv = document.createElement("div");
    var greendiv = document.createElement("div");
    var dateLabel = document.createElement("label");
    dateLabel.innerText = date.getHours() + ":" + date.getMinutes();
    myDiv.setAttribute("class", "received");
    greendiv.setAttribute("class", "grey");
    dateLabel.setAttribute("class", "dateLabel");
    greendiv.innerText = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. ";
    myDiv.appendChild(greendiv);
    myLI.appendChild(myDiv);
    greendiv.appendChild(dateLabel);
    document.getElementById("listUL").appendChild(myLI);
    var s = document.getElementById("chatting");
    s.scrollTop = s.scrollHeight;
    playSound();
}

function playSound() {
    audio.play();
}
