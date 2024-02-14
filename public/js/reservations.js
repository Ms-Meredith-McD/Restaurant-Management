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

    const reservationDateTime = `${reservationDate} ${reservationTime}`;
    
    console.log(reservationDateTime)
   
  let payload = {
    party_size: tableSize,
    reservation_datetime: reservationDateTime,
    notes: notes,
  }
  console.log(payload)

  const resp = await fetch("/api/reservation", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(payload),

    })
    const data = await resp.json()
    console.log(data)
    $('#confirmation').removeClass('hidden')
  })
  
