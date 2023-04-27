const apiKey = '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';
document.getElementById("timmybutton").style.visibility = "display: none;";
document.getElementById("timmybutton2").style = "display: none";
document.getElementById("dnd").style = "display: none";
document.getElementById("de").style = "display: none";
document.getElementById("noahthing").style.visibility = "hidden";


// Check if the cookie exists
let username = getRandomName();

// If the cookie does not exist, prompt the user for their username





let isHangman = [];
let isDND = [];
document.getElementById("somethingverynice").setAttribute('data-user-widget-id', getCode());

var modal = document.getElementById("settingsModal");
var btn = document.getElementById("buttonthing");
var span = modal.querySelector(".close");
var borderWidthSlider = modal.querySelector("#borderWidthSlider");
var borderStyleSelect = modal.querySelector("#borderStyleSelect");
var borderColorPicker = modal.querySelector("#borderColorPicker");
var fontSizeSlider = modal.querySelector("#fontSizeSlider");
var fontColorPicker = modal.querySelector("#fontColorPicker");
var backgroundPicker = modal.querySelector("#backgroundPicker");
var actualColor = modal.querySelector("#actualColor");
var darkModeCheckbox = modal.querySelector("#darkModeCheckbox");
const CLIENT_ID = 'y6x1M56B3WQIcsbY';
let color = actualColor.value;


// Replace YOUR_API_KEY with your actual API key
// When the user changes a setting, save the settings
borderWidthSlider.addEventListener("input", saveSettings);
borderStyleSelect.addEventListener("input", saveSettings);
borderColorPicker.addEventListener("input", saveSettings);
fontSizeSlider.addEventListener("input", saveSettings);
fontColorPicker.addEventListener("input", saveSettings);
backgroundPicker.addEventListener("input", saveSettings);
actualColor.addEventListener("input", saveSettings);
darkModeCheckbox.addEventListener("change", saveSettings);

function saveSettings() {
  localStorage.setItem("borderWidth", borderWidthSlider.value);
  localStorage.setItem("borderStyle", borderStyleSelect.value);
  localStorage.setItem("borderColor", borderColorPicker.value);
  localStorage.setItem("fontSize", fontSizeSlider.value);
  localStorage.setItem("fontColor", fontColorPicker.value);
  localStorage.setItem("background", backgroundPicker.value);
  localStorage.setItem("actualColor", actualColor.value);
  localStorage.setItem("darkMode", darkModeCheckbox.checked);
  loadSettings();
}

function loadSettings() {
  if (localStorage.getItem("borderWidth")) {
    borderWidthSlider.value = localStorage.getItem("borderWidth");
    borderStyleSelect.value = localStorage.getItem("borderStyle");
    borderColorPicker.value = localStorage.getItem("borderColor");
    fontSizeSlider.value = localStorage.getItem("fontSize");
    fontColorPicker.value = localStorage.getItem("fontColor");
    backgroundPicker.value = localStorage.getItem("background");
    actualColor.value = localStorage.getItem("actualColor");
    darkModeCheckbox.checked = (localStorage.getItem("darkMode") === "true");
  }
  applySettings();
}

function applySettings() {
  var style = "";
  style += "border-width: " + borderWidthSlider.value + "px; ";
  style += "border-style: " + borderStyleSelect.value + "; ";
  style += "border-color: " + borderColorPicker.value + "; ";
  style += "font-size: " + fontSizeSlider.value + "px; ";
  style += "color: " + fontColorPicker.value + "; ";
  style += "background-color: " + backgroundPicker.value + "; ";
  isDND = []
  isDND.push(darkModeCheckbox.checked);

}

setInterval(function() {
  if (darkModeCheckbox.checked === true) {
    document.getElementById("dnd").style = "display: inline-block;";
  } else {
    document.getElementById("dnd").style = "display: none";

  }
}, 500);
const tab = localStorage.getItem("tab");
const tabData = tab ? JSON.parse(tab) : {};
let drone = new ScaleDrone(CLIENT_ID, {
  data: {
    name: username,
    color: localStorage.getItem("actualColor"),
    status: function() {
      return document.visibilityState === "hidden" ? "away" : "online";
    }
  }
});
if (tabData.title) {
  document.title = tabData.title;
}
function sendSMH() {
  if (username.toLowerCase().includes("tim")) {
    drone.publish({
      room: 'observable-room',
      message: 'smh',
    });
  }
  if (username.toLowerCase().includes("nba")) {
    drone.publish({
      room: 'observable-room',
      message: 'mavs suck lmao knicks are better',
    });
  }
  if (username.toLowerCase().includes("god")) {
    drone.publish({
      room: 'observable-room',
      message: 'lmao',
    });
  }

}
function sendSMH2() {
  if (username.toLowerCase().includes("tim")) {
    drone.publish({
      room: 'observable-room',
      message: 'bro what the heck',
    });
  }
  if (username.toLowerCase().includes("nba")) {
    drone.publish({
      room: 'observable-room',
      message: 'mavs suck lmao knicks are better',
    });
  }
  if (username.toLowerCase().includes("god")) {
    drone.publish({
      room: 'observable-room',
      message: 'lmao',
    });
  }

}
function encodeString(str) {
  let encoded = '';
  for (let i = 0; i < str.length; i++) {
    let charCode = str.charCodeAt(i);
    if (charCode >= 65 && charCode <= 90) {
      // Uppercase letters
      encoded += String.fromCharCode(155 - charCode);
    } else if (charCode >= 97 && charCode <= 122) {
      // Lowercase letters
      encoded += String.fromCharCode(219 - charCode);
    } else {
      // Non-alphabetic characters
      encoded += str[i];
    }
  }
  return encoded;
}

function decodeString(str) {
  let decoded = '';
  for (let i = 0; i < str.length; i++) {
    let charCode = str.charCodeAt(i);
    if (charCode >= 65 && charCode <= 90) {
      // Uppercase letters
      decoded += String.fromCharCode(155 - charCode);
    } else if (charCode >= 97 && charCode <= 122) {
      // Lowercase letters
      decoded += String.fromCharCode(219 - charCode);
    } else {
      // Non-alphabetic characters
      decoded += str[i];
    }
  }
  return decoded;
}



if (tabData.icon) {
  const faviconLink = document.querySelector("link[rel='icon']");
  faviconLink.href = tabData.icon;
};
let members = [];

drone.on('open', error => {
  if (error) {
    return console.error(error);
  }
  console.log('Successfully connected to Scaledrone');

  let room = drone.subscribe('observable-room');
  room.on('open', error => {
    if (error) {
      return console.error(error);
    }
    console.log('Successfully joined room');
  });

  room.on('members', m => {
    members = m;
    updateMembersDOM();
  });

  room.on('member_join', member => {
    members.push(member);
    updateMembersDOM();
  });

  room.on('member_leave', ({ id }) => {
    const index = members.findIndex(member => member.id === id);
    members.splice(index, 1);
    updateMembersDOM();
  });

  room.on('data', (text, member) => {
    if (member) {

      addMessageToListDOM(text, member);
    } else {
      // Message is from server
      addMessageToListDOM(text, 'Admin.');
    }
  });
});

drone.on('close', event => {
  console.log('Connection was closed', event);
});

drone.on('error', error => {
  console.error(error);
});
function getRandomName() {
  var namef = localStorage.getItem('username');
  if (!namef) {
    namef = window.prompt("username")
    // Set the cookie with the entered username
    localStorage.setItem('username', namef);
  }


  if (namef.toLowerCase() === "nbaking452") {
    document.getElementById("fortnitegamers").style.backgroundImage = "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQilnbYXITkiewOQ78_o28jVHaFVlLg9V1gfIKfhEMKN0NRgvvaHfJ2EsZVVPOMSEMBMyM&usqp=CAU')";
    document.getElementById("noahthing").style.visibility = "visible";
    document.getElementById("timmybutton").style.visibility = "display: inline-block;";

    document.getElementById("timmyimage").src = "https://th.bing.com/th/id/R.b4fdb027c80b00dda42a7cd6fdcef517?rik=T6iHAjYManJpFg&pid=ImgRaw&r=0";


  }

  if (namef.toLowerCase().includes("elitegodian")) {
    document.getElementById("fortnitegamers").style.backgroundImage = "url(ajay.gif)";
    document.getElementById("timmyimage").src = "https://th.bing.com/th/id/OIP.oTHN5NZ246QtwbhtyFcyTgHaEK?pid=ImgDet&rs=1";
  }

  if (namef.toLowerCase().includes("timoftims") || namef.toLowerCase().includes("eaf")) {
    document.getElementById("fortnitegamers").style.backgroundImage = "url('https://spain.id.nba.com/images/Wallpapers/Escudos%20equipos/DALLAS%20MAVERICKS.jpg')";
    document.getElementById("timmybutton").style.visibility = "display: inline-block;";
    document.getElementById("timmybutton2").style = "display: inline-block;";
    document.getElementById("noahthing").style.visibility = "visible";
  }

  if (namef.toLowerCase().includes("rav")) {
    document.getElementById("fortnitegamers").style.backgroundImage = "url('https://th.bing.com/th/id/R.110edc609f76fc0d0f4a0f44b42b8b9e?rik=Lz6OuvQPEOM%2fIA&riu=http%3a%2f%2fwallpapercave.com%2fwp%2fwc1717635.jpg&ehk=1ADR7IF1CM61C0guocfS0yWvKqQr%2bM2HTttcg3sV2sw%3d&risl=&pid=ImgRaw&r=0')";
    document.getElementById("noahthing").style.visibility = "visible";
  }

  if (namef.toLowerCase().includes("bb")) {
    document.getElementById("fortnitegamers").style.backgroundImage = "url('https://th.bing.com/th/id/R.9bffccae6ec496cac9b88dff52ea2298?rik=BJ78V2ACfbGqmA&pid=ImgRaw&r=0')";
  }

  document.getElementById("fortnitegamers").style.backgroundPosition = "center";
  document.getElementById("fortnitegamers").style.backgroundRepeat = "no-repeat";
  document.getElementById("fortnitegamers").style.backgroundSize = "cover";
  return (namef);

};
function getCode() {
  if (username.toLowerCase().includes("nbaking")) {
    return ("54107");
  } else if (username.toLowerCase().includes("timoftims")) {
    return ("54148");
  } else if (username.toLowerCase().includes("aarav") || username.toLowerCase().includes("%")) {
    return ("54149")
  } else {
    return ("54107");
  }

}
function getRandomColor() {
  return '#' + Math.floor(Math.random() * 0xFFFFFF).toString(16);
}

//------------- DOM STUFF

const DOM = {
  membersCount: document.querySelector('.members-count'),
  membersList: document.querySelector('.members-list'),
  messages: document.querySelector('.messages'),
  input: document.querySelector('.message-form__input'),
  form: document.querySelector('.message-form'),
};
const messageInput = document.querySelector('.message-form__input');

messageInput.addEventListener('keydown', (event) => {
  if (event.keyCode === 13) {
    event.preventDefault(); // prevent default Enter key behavior (submitting the form)
    sendMessage(); // call the function that sends the message
  }
});

function sendMessage() {
  const value = DOM.input.value;

  if (value === '') {
    return;
  };
  if (value.includes("/up")) {
    drone.publish({
      room: 'observable-room',
      message: 'Updated Master.'
    });
    updateMembersDOM();
  } else if (value.includes("/she")) {
    drone.publish({
      room: 'observable-room',
      message: 'thats what she said.'
    });

  } else if (value.includes("/encode")) {
    var link = value.split('/encode');
    var textToEncode = link[1].trim();
    var encodedtext = encodeString(textToEncode);
    drone.publish({
      room: 'observable-room',
      message: encodedtext
    });
  } else if (value.includes("/reset")) {
    localStorage.removeItem('username');
  } else if (value.includes("/decoder")) {
    if (document.getElementById("de").style.display === "inline-block") {
      document.getElementById("de").style = "display: none";
    } else {
      document.getElementById("de").style = "display: inline-block";
    }
  } else if (value.includes("/change")) {
    var link = value.split(' ');
    document.getElementById("fortnitegamers").style.backgroundImage = 'url(' + link[1] + ')';


    drone.publish({
      room: 'observable-room',
      message: "Noah is the best"
    });
  } else if (value.includes("/hang")) {
    isHangman = []
    var hangfull = value.split(" ");
    isHangman.push(encodeString(hangfull[1]));
    drone.publish({
      room: 'observable-room',
      message: '/hangman ' + isHangman[0]
    });

  } else if (value.includes(isHangman[0]) && !(value.includes('/han'))) {
    drone.publish({
      room: 'observable-room',
      message: username + ' has gotten the word! smhwhyyy'
    });
    isHangman = []
  } else if (value.includes("/chat")) {
    var fullprompt = value.split(" ");
    drone.publish({
      room: 'observable-room',
      message: 'Your Prompt Is: ' + fullprompt[1]
    });


  } else {
    drone.publish({
      room: 'observable-room',
      message: value
    });
  };
  DOM.input.value = '';

}

function createMemberElement(member) {
  const { name, color, status } = member.clientData;
  const el = document.createElement('div');
  el.appendChild(document.createTextNode(name));
  el.className = 'member';
  el.style.color = color;
  return el;
}

function updateMembersDOM() {

  DOM.membersList.innerHTML = '';
  members.forEach(member =>
    DOM.membersList.appendChild(createMemberElement(member))
  );
}
function checkOnline() {
  const currentUser = members.find(member => member.clientData.name === username);

  if (!currentUser) {
    // User not found in members array
    return false;
  }

  if (document.visibilityState === "hidden") {
    // Set the user's status to "away" when they switch to another tab or window

    return true;
  } else {
    // Set the user's status to "online" when they switch back to this tab or window

    return false;
  }
}


// Call the checkOnline function when the visibility state of the document changes
document.addEventListener("visibilitychange", checkOnline);
setInterval(updateMembersDOM, 1000);

function createMessageElement(text, member) {
  const el = document.createElement('div');
  el.appendChild(createMemberElement(member));
  el.appendChild(document.createTextNode(text));

  el.className = 'message';
  return el;
}

function addMessageToListDOM(text, member) {
  const el = DOM.messages;
  const wasTop = el.scrollTop === el.scrollHeight - el.clientHeight;
  const clientDataObj = member.clientData;
  const nameValue = clientDataObj['name'];
  loadSettings()

  if (darkModeCheckbox.checked === false && nameValue != username && document.visibilityState === 'hidden' && !(text.includes("back to")) && !(text.includes("Switched"))) {
    Push.create(nameValue, {
      body: text,
      timeout: 800,
      onClick: function() {
        window.focus();
        this.close();
      }
    });
  } else if (document.visibilityState === 'visible') {
    if (text.includes("/hang")) {
      isHangman = [];
      var encodedstring = text.split(" ");
      isHangman.push(decodeString(encodedstring[1]));
      isHangman.push("yes");


    } else if (text.includes("/exithang")) {
      isHangman = [];
    }
    if (isHangman[1] === "yes") {
      if (text.includes(isHangman[0])) {



      } else if (text.includes('YASSS UR WRONG IMAGINE LOLOLOL') || text.includes('smhwhyyy')) {

      } else {
        drone.publish({
          room: 'observable-room',
          message: 'YASSS UR WRONG IMAGINE LOLOLOL'
        });
      }
    }
  }
  if (text.includes("/kick")) {
    var nametokick = text.split(" ")
    if (nametokick[1] === username) {
      const element = document.getElementById("fortnitegamers");
      element.remove();
    }
  }
  el.appendChild(createMessageElement(text, member));
  if (wasTop) {
    el.scrollTop = el.scrollHeight - el.clientHeight;
  }
}
function clearHangman() {
  isHangman = []
}
var keyEnum = { W_Key: 0, A_Key: 1, S_Key: 2, D_Key: 3 };
var keyArray = new Array(4);

const is_key_down = (() => {
  const state = {};

  window.addEventListener('keyup', (e) => state[e.key] = false);
  window.addEventListener('keydown', (e) => state[e.key] = true);

  return (key) => state.hasOwnProperty(key) && state[key] || false;
})();
window.setInterval(function() {
  if (!(is_key_down('ArrowLeft'))) {
    var elem = DOM.messages;
    elem.scrollTop = elem.scrollHeight;
  }
  const node = document.getElementById("de");
  node.addEventListener("keyup", function(event) {
    if (event.key === "Enter") {
      var decodedstuff = decodeString(document.getElementById("de").value)
      document.getElementById("de").value = decodedstuff;
    }
  });
}, 500);
loadSettings();

// When the user clicks the button, open the modal
btn.addEventListener("click", function() {
  modal.style.display = "block";
});

// When the user clicks on <span> (x), close the modal
span.addEventListener("click", function() {
  modal.style.display = "none";
});

// When the user clicks anywhere outside of the modal, close it
window.addEventListener("click", function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
});



