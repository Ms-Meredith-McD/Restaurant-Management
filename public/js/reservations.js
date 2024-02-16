const form = document.querySelector('form')
form.addEventListener('submit', async function(event) {
    event.preventDefault()

//Selectors for the values of the reservation
    const tableSize = document.querySelector(`select[name="tableSize"]`).value;
    const reservationDate = document.querySelector(`input[name="reservationDate"]`).value;
    const reservationTime = document.querySelector(`select[name="reservedTime"]`).value;
    const notes = document.querySelector(`input[name="notes"]`).value;

    const reservationDateTime = `${reservationDate} ${reservationTime}`;
    
    console.log(reservationDateTime)
   
    //Gather payload data to POST
  let payload = {
    party_size: tableSize,
    reservation_datetime: reservationDateTime,
    notes: notes,
  }
  console.log(payload)

  //Sends fetch request to POST new reservation
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
  
