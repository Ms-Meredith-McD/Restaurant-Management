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
            const quantity = parseInt(item.value, 10) || 0;
            const itemPrice = parseFloat(item.closest('.dish').querySelector('.orderPrice').textContent)
            subtotal += itemPrice * quantity
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

    // Attach event listener to quantity dropdown element using jQuery
    document.querySelectorAll('.itemQty').forEach(field => {
        field.addEventListener('change', updateOrderTotals);
    });



    // Attach event listener to tip input element using jQuery
    orderTipElement.on("input", updateOrderTotals);






    orderForm.on('click', function (event) {
        event.preventDefault();
        let subtotal = 0;
        const selectedItems = [];

        // Iterate through each menu item
        Array.from(document.querySelectorAll('.itemQty')).forEach(field => {
            // const menuItemId = parseInt(field.dataset.menuItemId, 10);
            const quantity = parseInt(field.value, 10) || 0;
            const itemPrice = parseFloat(field.closest('.dish').querySelector('.orderPrice').textContent);
            const orderItemName = field.closest('.dish').querySelector('.orderItemName').textContent;
            subtotal += itemPrice * quantity;

            if (quantity > 0) {
                // Only include items with quantity greater than zero
                selectedItems.push({
                    menu_name: orderItemName,
                    quantity: quantity
                });
            }
        });

        const taxRate = 0.06875; // 6.875%
        const tax = subtotal * taxRate;
        const tip = parseFloat(orderTipElement.val()) || 0;
        const total = subtotal + tax + tip;

        // Collect order data
        const orderData = {
            items: selectedItems,
            subtotal: subtotal.toFixed(2),
            tax: tax.toFixed(2),
            tip: tip.toFixed(2),
            total: total.toFixed(2)
        };
        console.log(orderData);
        // Assuming you have a server endpoint for handling orders
        fetch("/api/order", {
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
});
