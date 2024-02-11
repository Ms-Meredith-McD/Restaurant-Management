const form = document.querySelector('form')

form.addEventListener('submit', async function(event) {
    event.preventDefault()

    const name = document.querySelector(`input[name="name"]`).value;
    const tableSize = document.querySelector(`input[name="tableSize"]`).value;
    const reservationDate = document.querySelector(`input[name="reservationDate"]`).value;
    const reservationTime = document.querySelector(`input[name="reservationTime"]`).value;
    const notes = document.querySelector(`input[name="notes"]`).value;
    

  const resp = await fetch("/api/reservations", {
      method: "POST",
      body: JSON.stringify({
        party_size: tableSize,
        reservation_datetime: reservationTime,
        notes: notes,
        customer_id: req.params.id
      }),
      headers: {
        "Content-Type": "application/json"
      }
    })
    const data = await resp.json
    console.log(data)
  })
  
