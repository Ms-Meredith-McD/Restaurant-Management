const form = document.querySelector('form')

form.addEventListener('submit', async function(event) {
    event.preventDefault()

//The customer ID logic needs to be figured out still. Since we want to use the logged in users name as the ID, we
//will have to circle back to this when that is setup further

    const customerId = document.querySelector(`input[name="name"]`).value;
    const tableSize = document.querySelector(`input[name="tableSize"]`).value;
    const reservationDate = document.querySelector(`input[name="reservationDate"]`).value;
    const reservationTime = document.querySelector(`input[name="reservedTime"]`).value;
    const notes = document.querySelector(`input[name="notes"]`).value;

  const reservation = reservationDate + ' ' + reservationTime 
    

  const resp = await fetch("/api/reservations", {
      method: "POST",
      body: JSON.stringify({
        party_size: tableSize,
        reservation_datetime: reservation,
        notes: notes,
        customer_id: customerId
      }),
      headers: {
        "Content-Type": "application/json"
      }
    })
    const data = await resp.json()
    console.log(data)
  })
  
