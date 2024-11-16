$(document).ready(function() {
    $('#generateBtn').click(function() {
        var qrInput = $('#qrInput').val();
        $('#qrCode').empty(); // Clear previous QR code
        if (qrInput) {
            $('#qrCode').qrcode({
                text: qrInput,
                width: 200,
                height: 200
            });
        } else {
            alert('Please enter a valid text or URL.');
        }
    });
});