// script.js

// Modal de reconhecimento
const recognizeBtn = document.getElementById('recognizeBtn');
const modal = document.getElementById('modal');
const closeModal = document.getElementById('closeModal');

recognizeBtn.onclick = () => modal.classList.add('open');
closeModal.onclick = () => modal.classList.remove('open');

// Chatbot básico
const chatBtn = document.getElementById('chatBtn');
const chatPanel = document.getElementById('chatPanel');
const closeChat = document.getElementById('closeChat');
const sendMsg = document.getElementById('sendMsg');
const messages = document.getElementById('messages');
const chatInput = document.getElementById('chatInput');

chatBtn.onclick = () => {
  chatPanel.style.display = 'block';
  pushBot('Olá! Sou o assistente do Mar Lendário. Pergunte sobre qualquer espécie ou curiosidades.');
};

closeChat.onclick = () => {
  chatPanel.style.display = 'none';
};

sendMsg.onclick = () => {
  const txt = chatInput.value.trim();
  if (!txt) return;
  pushUser(txt);
  chatInput.value = '';
  handleBot(txt.toLowerCase());
};

function pushUser(t) {
  const el = document.createElement('div');
  el.className = 'msg user';
  el.textContent = t;
  messages.appendChild(el);
  messages.scrollTop = messages.scrollHeight;
}

function pushBot(t) {
  const el = document.createElement('div');
  el.className = 'msg bot';
  el.textContent = t;
  messages.appendChild(el);
  messages.scrollTop = messages.scrollHeight;
}

function handleBot(t) {
  if (t.includes('curiosidades')) {
    pushBot('Você pode perguntar sobre o tamanho, alimentação, habitat ou curiosidades de qualquer espécie exibida.');
  } else if (t.includes('vaca')) {
    pushBot('A Vaca-gigante-de-Steller era um mamífero marinho gigante herbívoro, descoberta em 1741 e extinta em menos de 30 anos.');
  } else if (t.includes('megalondon')) {
    pushBot('O Megalondon era um predador marinho gigante do fundo do oceano, adaptado a correntes fortes.');
  } else if (t.includes('ictiossauro')) {
    pushBot('Os Ictiossauros eram répteis marinhos do Mesozoico, muito rápidos e semelhantes a golfinhos.');
  } else if (t.includes('trilobita')) {
    pushBot('Os Trilobitas existiram por mais de 270 milhões de anos, eram pequenos e adaptados ao fundo marinho.');
  } else if (t.includes('arraia')) {
    pushBot('A Arraia-gigante-do-Yangtze era uma espécie de água doce enorme, criticamente ameaçada, do rio Yangtze.');
  } else {
    pushBot('Desculpe, não entendi. Tente perguntar sobre o tamanho, alimentação, habitat ou curiosidades.');
  }
}