const ws = new WebSocket('ws://' + window.location.host.split(':')[0] + ':3000');

ws.onopen = () => {
    console.log('connected');
};

ws.onclose = () => {
    console.error('disconnected');
};

ws.onerror = error => {
    console.error('failed to connect', error);
};

ws.onmessage = event => {
    let li = document.createElement('li');
    li.innerText = event.data;
    document.querySelector('#chat').append(li);
};

document.querySelector('form').addEventListener('submit', event => {
    event.preventDefault();
    let message = document.querySelector('#message').value;
    ws.send(message);
    document.querySelector('#message').value = '';
});