const form = document.querySelector('form')

form.addEventListener('submit', async function(event) {
    event.preventDefault()


//Currently the customer id is hardcoded and we need to make it dynamic based off of
//the logged in users id

    // const customerId = document.querySelector(`input[name="name"]`).value;
    const tableSize = document.querySelector(`select[name="tableSize"]`).value;
    const reservationDate = document.querySelector(`input[name="reservationDate"]`).value;
    const reservationTime = document.querySelector(`select[name="reservedTime"]`).value;
    const notes = document.querySelector(`input[name="notes"]`).value;

  const reservation = reservationDate + ' ' + reservationTime 
    

  const resp = await fetch("/api/reservation", {
      method: "POST",
      body: JSON.stringify({
        party_size: tableSize,
        reservation_datetime: reservation,
        notes: notes,
        customer_id: 3
      }),
      headers: {
        "Content-Type": "application/json"
      }
    })
    const data = await resp.json()
    console.log(data)
  })
  
