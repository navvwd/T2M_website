// Chart.js for growth chart
const ctx = document.getElementById('growthChart').getContext('2d');
const growthChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['JAN', 'FEB', 'MAR', 'APR', 'MAY'],
        datasets: [{
            label: 'Number of Clients',
            data: [50, 75, 100, 150, 200],
            backgroundColor: 'rgba(230, 57, 70, 0.2)',
            borderColor: 'rgba(230, 57, 70, 1)',
            borderWidth: 2,
            fill: true
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});

// Contact form submission
const form = document.getElementById('contactForm');
form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone_no= document.getElementById('phone_no').value;
    const message = document.getElementById('message').value;

    try {
        const response = await fetch('/enquiry', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ name, email,phone_no,message })
        });
        const result = await response.json();
        alert('Thank you! ' + result.message);
        form.reset();
    } catch (err) {
        console.error('Error submitting form:', err);
        alert('There was an error sending your message.');
    }
});
