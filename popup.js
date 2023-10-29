document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('issueForm');
    const status = document.getElementById('status');

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        const formData = new FormData(form);
        const issue = formData.get('issue');
        const attachment = formData.get('attachment');

        // Simulate a successful submission (you can customize this part)
        status.textContent = 'Submitting...';
        setTimeout(function() {
            status.textContent = 'Issue submitted successfully.';
            form.reset();
        }, 1000);
    });
});
