document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('ideaForm');
    const ideasContainer = document.getElementById('ideasContainer');

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

        // Create new idea object
        const idea = { label, category, message };

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
        const { label, category, message } = idea;

        const ideaCard = document.createElement('div');
        ideaCard.className = 'card border-dark mb-3';
        ideaCard.style.maxWidth = '18rem';

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
            ideaCard.querySelector('.card-body').style.backgroundColor = 'lightgreen';
            disableApproveDisapproveButtons(ideaCard);
        });

        // Add disapprove functionality
        ideaCard.querySelector('.disapproveBtn').addEventListener('click', function () {
            ideaCard.querySelector('.card-body').style.backgroundColor = 'lightcoral';
            disableApproveDisapproveButtons(ideaCard);
        });

        // Append the card to the container
        ideasContainer.appendChild(ideaCard);
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

    // MutationObserver to monitor changes in the ideasContainer
    const observer = new MutationObserver(function (mutations) {
        mutations.forEach(function (mutation) {
            console.log('Mutation type:', mutation.type);
            if (mutation.addedNodes.length > 0) {
                console.log('Idea added:', mutation.addedNodes[0]);
            }
            if (mutation.removedNodes.length > 0) {
                console.log('Idea removed:', mutation.removedNodes[0]);
            }
        });
    });

    // Configuration of the observer:
    const config = { childList: true };

    // Pass in the target node, as well as the observer options
    observer.observe(ideasContainer, config);
});
