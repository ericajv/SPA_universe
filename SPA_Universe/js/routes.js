export class Router{
  routes = {}

  add(routeName, page){
    this.routes[routeName] = page
  }

route(event){
  event = event || window.event
  event.preventDefault() //garantir que nao redirecione a SPA
  window.history.pushState({}, "", event.target.href) //para colocar o historico no url
  this.handle()
}
//m
handle(){
  const{ pathname } = window.location
  const route = this.routes[pathname] || this.routes[404]

  fetch(route)
    .then(data => data.text())
    .then(html => {
          document.querySelector('#app').innerHTML = html

    })
}

}
export default new Router()