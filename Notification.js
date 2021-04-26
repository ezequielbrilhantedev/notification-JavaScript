
// Dicas de JavaScript.
// Notificações.

function pushNotification() {
    const img = 'endereço da imagem que vc quer mostrar na notificação'
    const text = 'Nova notificação!'

    // Invocação do objeto Notification do JavaScript
    const notification = new Notification('Texto título da notificação',{
        body: text,
        icon: img
    })

    // tempo que a modal da notificação levará para fechar.
    setTimeout(notification.close.bind(notification), 10000);


    // Chamada da função para emitir o som na notificação
    this.beepNotification()
}


// Função criada para emitir som quando houver notificação.
function beepNotification() {
    let beep = new Audio('endereço do seu arquivo que possui o som')

    beep.play()
}