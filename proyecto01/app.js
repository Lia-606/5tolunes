//creacion del servidor:
const http= require('http')
const server=http.createServer((request,response)=>{

    try {
        if(request.url==='/'&& request.method==='GET'){
        response.statusCode=200
        response.end(JSON.stringify({"Message":'ACCEDIENDO AL SERVIDOR '}))
    }
    else if(request.url=='/home'&& request.method=='GET'){
        response.statusCode=300
        response.end(JSON.stringify({"Message":'ACCEDIENDO A HOME '}))
    }else{
        response.statusCode=404
        response.end(JSON.stringify({"Message":'NO ENCONTRADO '}))
    }
        
    } catch (error) {
        response.statusCode=500
        response.end(JSON.stringify({"Message":'Ha ocurrido un error en el servidor '}))
    }



})

const port=5000
const host='localhost'
server.listen(port,host,()=>{
    console.log(`servidor ejecutandose en http://${host}:${port}`)
})