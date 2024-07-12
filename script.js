// // Ici , on initialise la partie dynamique de notre application en liant notre formulaire 

// document.addEventListener('DOMContentLoaded', showIdeas);

// // Ici on valide nos entrées

// function validateForm() {
// const label = document.getElementById('label').value.trim();
// const category = document.getElementById('category').value.trim();
// const message = document.getElementById('message').value.trim();

// let isValid = true;



// // Validation Specifique pour le libellé(label)

// if(label === "") {
//         document.getElementById('labelError').innerText = "Le libellé est requis.";
//         isValid = false ;
// }else if(label.length < 5 || label.length > 70) {
//         document.getElementById('labelError').innerText = "Le libellé doit étre entre 5 et 70 caractéres.";
//         isValid = false ;
// }else{
//         document.getElementById('labelError').innerText = "";
// }



// // Validation Specifique pour le libellé(label)

// if (category === "") {
//     document.getElementById('categoryError').innerText = "La catégorie est requise.";
//     isValid = false;
// } else if (category.length < 5 || category.length > 70) {
//     document.getElementById('categoryError').innerText = "La catégorie doit être entre 5 et 70 caractères.";
//     isValid = false;
// } else {
//     document.getElementById('categoryError').innerText = "";
// }

//     // Validation pour le message
//     if (message === "") {
//         document.getElementById('messageError').innerText = "Le message est requis.";
//         isValid = false;
//     } else if (message.length < 5 || message.length > 70) {
//         document.getElementById('messageError').innerText = "Le message doit être entre 5 et 70 caractères.";
//         isValid = false;
//     } else {
//         document.getElementById('messageError').innerText = "";
//     }

// if (!isValid) {
//  showMessage("Tous les champs sont requis ou invalides !", 'danger');
// }

// return isValid;

// }

// // Fonction qui permet de faire l'ajout et meme temps il npous permet de faire la verification instantanée (trim )
// function addIdea(event){
//     event.preventDefault();
//     if(validateForm()) {
//     const label = document.getElementById('label').value.trim();
//     const category = document.getElementById('category').value.trim();
//     const message = document.getElementById('message').value.trim();
    
//     let ideaList = localStorage.getItem('ideaList') ? JSON.parse(localStorage.getItem('ideaList')) : ;
    


//     }
// }




document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('ideaForm');
    const ideasContainer = document.getElementById('ideasContainer');

    form.addEventListener('submit', function (event) {
        event.preventDefault();
        addIdea();
    });

    function addIdea() {
        const label = document.getElementById('label').value;
        const category = document.getElementById('category').value;
        const message = document.getElementById('message').value;

        // Reset error messages
        document.getElementById('labelError').textContent = '';
        document.getElementById('categoryError').textContent = '';
        document.getElementById('messageError').textContent = '';

        // Validate inputs
        let isValid = true;
        if (!label) {
            document.getElementById('labelError').textContent = 'Libellé est requis.';
            isValid = false;
        }
        if (!category) {
            document.getElementById('categoryError').textContent = 'Catégorie est requise.';
            isValid = false;
        }
        if (!message) {
            document.getElementById('messageError').textContent = 'Message est requis.';
            isValid = false;
        }

        if (!isValid) {
            return;
        }

        // Create new idea card
        const ideaCard = document.createElement('div');
        ideaCard.className = 'card border-dark mb-3';
        ideaCard.style.maxWidth = '18rem';
        
        ideaCard.innerHTML = `
            <div class="card-header bg-transparent border-dark">${label}</div>
            <div class="card-body text-dark">
                <h5 class="card-title">${category}</h5>
                <p class="card-text">${message}</p>
            </div>
            <div class="card-footer bg-transparent border-dark">
                <button class="btn btn-danger btn-sm deleteBtn">Supprimer</button>
            </div>
        `;

        // Add delete functionality
        ideaCard.querySelector('.deleteBtn').addEventListener('click', function () {
            ideaCard.remove();
        });

        // Append the card to the container
        ideasContainer.appendChild(ideaCard);

        // Clear form
        form.reset();
    }
});


