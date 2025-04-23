const connection = []
self.onconnect = function (e) {
  const port = e.ports[0]
  console.log('connect', port)
  connection.push(port)
  port.onmessage = function (e) {
    console.log(e)
   //消息广播
    for (let i = 0; i < connection.length; i++) {
      connection[i].postMessage(e.data)
    }
  }
  port.start()
}