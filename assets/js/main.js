// Login form validation
document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const form = e.target;
    const email = document.getElementById('email');
    const password = document.getElementById('password');

    // Add validation classes
    form.classList.add('was-validated');

    // Check validity
    if(form.checkValidity()) {
        // Simulate successful login
        window.location.href = 'menu.html';
    }
}, false);

// Academic Dashboard Charts
document.addEventListener('DOMContentLoaded', () => {
    // GPA Progress Chart
    const gpaCtx = document.getElementById('gpaChart').getContext('2d');
    new Chart(gpaCtx, {
        type: 'line',
        data: {
            labels: ['Sem 1', 'Sem 2', 'Sem 3', 'Sem 4'],
            datasets: [{
                label: 'GPA Progress',
                data: [3.2, 3.5, 3.7, 3.75],
                borderColor: '#0d6efd',
                tension: 0.4
            }]
        }
    });

    // Credits Chart
    const creditsCtx = document.getElementById('creditsChart').getContext('2d');
    new Chart(creditsCtx, {
        type: 'bar',
        data: {
            labels: ['Completed', 'Remaining'],
            datasets: [{
                label: 'Credit Hours',
                data: [98, 22],
                backgroundColor: ['#198754', '#6c757d']
            }]
        }
    });
});