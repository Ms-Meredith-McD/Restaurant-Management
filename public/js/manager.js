

document.querySelectorAll('.delete-btn').forEach(button => {
  button.addEventListener('click', async function() {
    const id = this.getAttribute('data-id')


  const resp = await fetch(`/api/reservation/` + id, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json"
      },
    })
    const data = await resp.json()
    console.log(data)
  this.parentElement.remove()
  })
})  

// document.querySelectorAll('.order-delete').forEach(button => {
//   button.addEventListener('click', async function() {
//     const id = this.getAttribute('data-id')


//   const resp = await fetch(`/api/order/` + id, {
//       method: "DELETE",
//       headers: {
//         "Content-Type": "application/json"
//       },
//     })
//     const data = await resp.json()
//     console.log(data)
//   this.parentElement.remove()
//   })
// })  

// document.querySelectorAll('.cust-delete').forEach(button => {
//   button.addEventListener('click', async function() {
//     const id = this.getAttribute('id')


//   const resp = await fetch(`/api/customer/` + id, {
//       method: "DELETE",
//       headers: {
//         "Content-Type": "application/json"
//       },
//     })
//     const data = await resp.json()
//     console.log(data)
//   this.parentElement.remove()
//   })
// })  
