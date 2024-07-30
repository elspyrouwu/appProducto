const mje = document.querySelector('#nuevoProducto')
document.querySelector('#formRegistrarProducto').addEventListener('submit',e=>{
    e.preventDefault()
    const data = Object.fromEntries(
      	new FormData(e.target)
    )
    console.log(data)
    //llamandoAPI(data)
})