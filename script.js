document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('ideaForm');
    const ideasContainer = document.getElementById('ideasContainer');
    const mainMessage = document.getElementById('mainMessage');

    // Load ideas from local storage
    loadIdeas();

    form.addEventListener('submit', function (event) {
        event.preventDefault();
        addIdea();
    });

    function addIdea() {
        const label = document.getElementById('label').value.trim();
        const category = document.getElementById('category').value.trim();
        const message = document.getElementById('message').value.trim();

        // Reset error messages
        document.getElementById('labelError').textContent = '';
        document.getElementById('categoryError').textContent = '';
        document.getElementById('messageError').textContent = '';

        // Validate inputs
        let isValid = true;
        if (!label) {
            document.getElementById('labelError').textContent = 'le Libellé est requis.';
            isValid = false;
        }
        if (!category) {
            document.getElementById('categoryError').textContent = 'La Catégorie est requise.';
            isValid = false;
        }
        if (!message) {
            document.getElementById('messageError').textContent = 'Un Message est requis.';
            isValid = false;
        }

        if (!isValid) {
            return;
        }

        // Create new idea object with status 'pending'
        const idea = { label, category, message, status: 'pending' };

        // Save idea to local storage
        saveIdeaToLocalStorage(idea);

        // Create and append idea card
        createIdeaCard(idea);

        // Clear form
        form.reset();
    }

    function saveIdeaToLocalStorage(idea) {
        let ideas = JSON.parse(localStorage.getItem('ideas')) || [];
        ideas.push(idea);
        localStorage.setItem('ideas', JSON.stringify(ideas));
    }

    function loadIdeas() {
        const ideas = JSON.parse(localStorage.getItem('ideas')) || [];
        ideas.forEach(idea => createIdeaCard(idea));
    }

    function createIdeaCard(idea) {
        const { label, category, message, status } = idea;

        const ideaCard = document.createElement('div');
        ideaCard.className = 'card border-dark mb-3';
        ideaCard.style.maxWidth = '20rem';

        // Apply styles based on status
        applyStatusStyles(ideaCard, status);

        ideaCard.innerHTML = `
            <div class="card-header bg-transparent border-dark">${label}</div>
            <div class="card-body text-dark">
                <h5 class="card-title">${category}</h5>
                <p class="card-text">${message}</p>
            </div>
            <div class="card-footer bg-transparent border-dark d-flex">
                <button class="btn btn-success btn-sm approveBtn">Approuver</button>
                <button class="btn btn-warning btn-sm disapproveBtn">Désapprouver</button>
                <button class="btn btn-danger btn-sm deleteBtn"><i class="fas fa-trash"></i></button>
            </div>
        `;

        // Add delete functionality
        ideaCard.querySelector('.deleteBtn').addEventListener('click', function () {
            ideaCard.remove();
            removeIdeaFromLocalStorage(idea);
        });

        // Add approve functionality
        ideaCard.querySelector('.approveBtn').addEventListener('click', function () {
            ideaCard.style.borderColor = 'green';
            updateIdeaStatus(idea, 'approved');
            disableApproveDisapproveButtons(ideaCard);
            showMessage(`Votre idée "${idea.label}" a été approuvée.`, 'success');
        });

        // Add disapprove functionality
        ideaCard.querySelector('.disapproveBtn').addEventListener('click', function () {
            ideaCard.style.borderColor = 'red';
            updateIdeaStatus(idea, 'disapproved');
            disableApproveDisapproveButtons(ideaCard);
        });

        // Append the card to the container
        ideasContainer.appendChild(ideaCard);
    }

    function updateIdeaStatus(ideaToUpdate, status) {
        let ideas = JSON.parse(localStorage.getItem('ideas')) || [];
        ideas = ideas.map(idea => {
            if (idea.label === ideaToUpdate.label && idea.category === ideaToUpdate.category && idea.message === ideaToUpdate.message) {
                idea.status = status;
            }
            return idea;
        });
        localStorage.setItem('ideas', JSON.stringify(ideas));
    }

    function applyStatusStyles(ideaCard, status) {
        if (status === 'approved') {
            ideaCard.style.borderColor = 'green';
        } else if (status === 'disapproved') {
            ideaCard.style.borderColor = 'red';
        } else {
            ideaCard.style.borderColor = 'dark';
        }
    }

    function disableApproveDisapproveButtons(ideaCard) {
        ideaCard.querySelector('.approveBtn').disabled = true;
        ideaCard.querySelector('.disapproveBtn').disabled = true;
    }

    function removeIdeaFromLocalStorage(ideaToRemove) {
        let ideas = JSON.parse(localStorage.getItem('ideas')) || [];
        ideas = ideas.filter(idea => !(idea.label === ideaToRemove.label && idea.category === ideaToRemove.category && idea.message === ideaToRemove.message));
        localStorage.setItem('ideas', JSON.stringify(ideas));
    }

    function showMessage(message, type) {
        mainMessage.textContent = message;
        mainMessage.className = `alert alert-${type}`;
        mainMessage.style.display = 'block';
        setTimeout(() => {
            mainMessage.style.display = 'none';
        }, 3000);
    }
});
