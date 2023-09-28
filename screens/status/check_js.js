function trackPNR() {
    const pnrNumber = document.getElementById("pnrInput").value;

    if (pnrNumber == "REF1695836486453") { // Note: Compare with a string
        // Show a success message using SweetAlert
        Swal.fire({
            icon: 'success',
            title: 'Complaint Accepted',
            text: `Reference Number: ${pnrNumber}`,
        });

        // Update the status display
        document.getElementById("statusDisplay").textContent = "Complaint accepted";
    } else {
        // Show an error message using SweetAlert
        Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'Invalid Reference number or not found.',
        });

        // Update the status display
        document.getElementById("statusDisplay").textContent = "Invalid Reference number or not found.";
    }
}
