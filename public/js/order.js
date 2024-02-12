  // Handle form submission
  orderForm.addEventListener("submit", function (event) {
    event.preventDefault();

    // Collect order data and send it to the server using your preferred method (e.g., fetch)
    const orderData = {
        items: menu.map(item => {
            return {
                menuItemId: item.id,
                quantity: parseInt(document.getElementById(`quantity_${item.id}`).value, 10) || 0
            };
        }),
        tip: parseFloat(orderTipElement.value) || 0
    };

    // Assuming you have a server endpoint for handling orders
    fetch("/api/orders", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(orderData)
    })
    .then(response => response.json())
    .then(data => {
        // Handle the response from the server (e.g., display a success message)
        console.log(data);
    })
    .catch(error => {
        // Handle errors
        console.error("Error submitting order:", error);
    });
});
