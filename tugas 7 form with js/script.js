document.getElementById('validationForm').addEventListener('submit', function(event) {
    event.preventDefault();
    let isValid = true;

    // Clear previous errors
    document.getElementById('customerNameError').innerText = '';
    document.getElementById('emailError').innerText = '';
    document.getElementById('departureTimeError').innerText = '';
    document.getElementById('departureDestinationError').innerText = '';
    document.getElementById('ticketAmountError').innerText = '';

    // Validate Customer Name
    const customerName = document.getElementById('customerName').value;
    if (!customerName || customerName.length > 30) {
        document.getElementById('customerNameError').innerText = '*Customer Name is required and must be less than 30 characters.';
        isValid = false;
    }

    // Validate Email
    const email = document.getElementById('email').value;
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailPattern.test(email)) {
        document.getElementById('emailError').innerText = '*Valid Email is required.';
        isValid = false;
    }

    // Validate Departure Time
    const departureTime = document.getElementById('departureTime').value;
    const timePattern = /^([0-1][0-9]|2[0-3]).([0-5][0-9])$/;
    if (!departureTime || !timePattern.test(departureTime)) {
        document.getElementById('departureTimeError').innerText = '*Departure Time is required and must be in HH.MM format between 00.00 - 23.59.';
        isValid = false;
    }

    // Validate Departure Destination
    const departureDestination = document.getElementById('departureDestination').value;
    if (!departureDestination) {
        document.getElementById('departureDestinationError').innerText = '*Departure Destination is required.';
        isValid = false;
    }

    // Validate Ticket Amount
    const ticketAmount = document.getElementById('ticketAmount').value;
    if (!ticketAmount || ticketAmount < 1 || ticketAmount > 10) {
        document.getElementById('ticketAmountError').innerText = '*Ticket Amount is required and must be between 1 and 10.';
        isValid = false;
    }

    // Display result if valid
    if (isValid) {
        document.getElementById('result').innerHTML = `
            <h3>Customer Data</h3>
            <p><strong>Name:</strong> ${customerName}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Departure Time:</strong> ${departureTime}</p>
            <p><strong>Departure Destination:</strong> ${departureDestination}</p>
            <p><strong>Ticket Amount:</strong> ${ticketAmount}</p>
        `;
    }
});
