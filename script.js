const socket = io('http://localhost:5000')
const messageFrom = document.getElementById('send-container')
const messageInput = document.getElementById('message-input')

socket.on('chat-message',data => {
    console.log(data)
})

messageFrom.addEventListener('submit',e =>{
    e.preventDefault()
    const message = messageInput.value
    socket.emit('emit-chat-message',message)
    messageInput.value = ''
})