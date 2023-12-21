function submitDonation() {
    // In a real-world scenario, you would handle the payment and donor information securely.
    // For educational purposes, we'll just show a thank-you message.

    var donorName = document.getElementById('donor-name').value;
    document.getElementById('donor-thank-you-name').innerText = donorName;

    // Hide the donation form and display the thank-you message
    document.getElementById('donation-form').style.display = 'none';
    document.getElementById('thank-you-message').style.display = 'block';
}
