document.addEventListener("DOMContentLoaded", function () {
    // Get the DOM elements
    const orderSubtotalElement = $("#orderSubtotal");
    const orderTaxElement = $("#orderTax");
    const orderTipElement = $("#orderTip");
    const orderTotalElement = $("#orderTotal");
    const orderForm = $("#orderForm");

    // Calculate and update the order totals
    function updateOrderTotals() {
        let subtotal = 0;

        // Iterate through each menu item
        document.querySelectorAll('.itemQty').forEach(item => {
            const quantity = parseInt(document.querySelector('.itemQty').inputValue, 10) || 0;
            subtotal += parseFloat(document.querySelector('.orderPrice').textContent) * quantity;
            console.log(parseFloat(document.querySelector('.orderPrice').textContent))
            console.log(subtotal);
        });


        const taxRate = 0.06875; // 6.875%
        const tax = subtotal * taxRate;
        const tip = parseFloat(orderTipElement.val()) || 0;

        const total = subtotal + tax + tip;

        // Update the DOM elements with the calculated values
        // orderSubtotalElement.text(`$TEST`);
        orderSubtotalElement.text(`$${subtotal.toFixed(2)}`);
        orderTaxElement.text(`$${tax.toFixed(2)}`);
        orderTotalElement.text(`$${total.toFixed(2)}`);
    }

    document.querySelectorAll('.itemQty').forEach(field => {
        field.addEventListener('change', updateOrderTotals);
    });
    // Attach event listener to quantity dropdown element using jQuery
    // $(".itemQty").on("change", updateOrderTotals);

    // Attach event listener to tip input element using jQuery
    orderTipElement.on("input", updateOrderTotals);

    // Assume you have a form with an id="orderForm" for submitting the order
    // const orderForm = $("#orderForm");

    orderForm.on('click', function (event) {
        event.preventDefault();
        console.log("hi")})

    // // Handle form submission
    // orderForm.submit(function (event) {
    //     event.preventDefault();
    //         console.log("HI")})
    //     // Collect order data and send it to the server using your preferred method (e.g., fetch)
    //     const orderData = {
    //         items: menu.map(item => {
    //             return {
    //                 menuItemId: item.id,
    //                 quantity: parseInt($("#itemQty").val(), 10) || 0
    //             };
    //         }),
    //         tip: parseFloat(orderTipElement.val()) || 0
    //     };

    //     // Assuming you have a server endpoint for handling orders
    //     fetch("/api/orders", {
    //         method: "POST",
    //         headers: {
    //             "Content-Type": "application/json"
    //         },
    //         body: JSON.stringify(orderData)
    //     })
    //     .then(response => response.json())
    //     .then(data => {
    //         // Handle the response from the server (e.g., display a success message)
    //         console.log(data);
    //     })
    //     .catch(error => {
    //         // Handle errors
    //         console.error("Error submitting order:", error);
    //     });
    // });
});