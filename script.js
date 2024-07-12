// // // Ici , on initialise la partie dynamique de notre application en liant notre formulaire 

// // document.addEventListener('DOMContentLoaded', showIdeas);

// // // Ici on valide nos entrées

// // function validateForm() {
// // const label = document.getElementById('label').value.trim();
// // const category = document.getElementById('category').value.trim();
// // const message = document.getElementById('message').value.trim();

// // let isValid = true;



// // // Validation Specifique pour le libellé(label)

// // if(label === "") {
// //         document.getElementById('labelError').innerText = "Le libellé est requis.";
// //         isValid = false ;
// // }else if(label.length < 5 || label.length > 70) {
// //         document.getElementById('labelError').innerText = "Le libellé doit étre entre 5 et 70 caractéres.";
// //         isValid = false ;
// // }else{
// //         document.getElementById('labelError').innerText = "";
// // }



// // // Validation Specifique pour le libellé(label)

// // if (category === "") {
// //     document.getElementById('categoryError').innerText = "La catégorie est requise.";
// //     isValid = false;
// // } else if (category.length < 5 || category.length > 70) {
// //     document.getElementById('categoryError').innerText = "La catégorie doit être entre 5 et 70 caractères.";
// //     isValid = false;
// // } else {
// //     document.getElementById('categoryError').innerText = "";
// // }

// //     // Validation pour le message
// //     if (message === "") {
// //         document.getElementById('messageError').innerText = "Le message est requis.";
// //         isValid = false;
// //     } else if (message.length < 5 || message.length > 70) {
// //         document.getElementById('messageError').innerText = "Le message doit être entre 5 et 70 caractères.";
// //         isValid = false;
// //     } else {
// //         document.getElementById('messageError').innerText = "";
// //     }

// // if (!isValid) {
// //  showMessage("Tous les champs sont requis ou invalides !", 'danger');
// // }

// // return isValid;

// // }

// // // Fonction qui permet de faire l'ajout et meme temps il npous permet de faire la verification instantanée (trim )
// // function addIdea(event){
// //     event.preventDefault();
// //     if(validateForm()) {
// //     const label = document.getElementById('label').value.trim();
// //     const category = document.getElementById('category').value.trim();
// //     const message = document.getElementById('message').value.trim();
    
// //     let ideaList = localStorage.getItem('ideaList') ? JSON.parse(localStorage.getItem('ideaList')) : ;
    


// //     }
// // }



// // document.addEventListener('DOMContentLoaded', function () {
// //     const form = document.getElementById('ideaForm');
// //     const ideasContainer = document.getElementById('ideasContainer');

// //     form.addEventListener('submit', function (event) {
// //         event.preventDefault();
// //         addIdea();
// //     });

// //     function addIdea() {
// //         const label = document.getElementById('label').value.trim();
// //         const category = document.getElementById('category').value.trim();
// //         const message = document.getElementById('message').value.trim();

// //         // Reset error messages
// //         document.getElementById('labelError').textContent = '';
// //         document.getElementById('categoryError').textContent = '';
// //         document.getElementById('messageError').textContent = '';

// //         // Validate inputs
// //         let isValid = true;
// //         if (!label) {
// //             document.getElementById('labelError').textContent = 'Libellé est requis.';
// //             isValid = false;
// //         }
// //         if (!category) {
// //             document.getElementById('categoryError').textContent = 'Catégorie est requise.';
// //             isValid = false;
// //         }
// //         if (!message) {
// //             document.getElementById('messageError').textContent = 'Message est requis.';
// //             isValid = false;
// //         }

// //         if (!isValid) {
// //             return;
// //         }

// //         // Create new idea card
// //         const ideaCard = document.createElement('div');
// //         ideaCard.className = 'card border-dark mb-3';
// //         ideaCard.style.maxWidth = '18rem';
        
// //         ideaCard.innerHTML = `
// //             <div class="card-header bg-transparent border-dark">${label}</div>
// //             <div class="card-body text-dark">
// //                 <h5 class="card-title">${category}</h5>
// //                 <p class="card-text">${message}</p>
// //             </div>
// //             <div class="card-footer bg-transparent border-dark onclick">
// //                 <button class="btn btn-success btn-sm approveBtn ">Approuver</button>
// //                 <button class="btn btn-warning btn-sm disapproveBtn">Désapprouver</button>
// //                 <button class="btn btn-danger btn-sm deleteBtn"><i class="bi bi-trash"></i></button>
// //             </div>
// //         `;

// //         // Add delete functionality
// //         ideaCard.querySelector('.deleteBtn').addEventListener('click', function () {
// //             ideaCard.remove();
// //         });

// //         // Add approve functionality
// //         ideaCard.querySelector('.approveBtn').addEventListener('onclick', function () {
// //             ideaCard.querySelector('.card-body').style.backgroundColor = 'lightgreen';
// //         });

// //         // Add disapprove functionality
// //         ideaCard.querySelector('.disapproveBtn').addEventListener('onclick', function () {
// //             ideaCard.querySelector('.card-body').style.backgroundColor = 'lightcoral';
// //         });

// //         // Append the card to the container
// //         ideasContainer.appendChild(ideaCard);

// //         // Clear form
// //         form.reset();
// //     }
// // });



//         document.addEventListener('DOMContentLoaded', function () {
//             const form = document.getElementById('ideaForm');
//             const ideasContainer = document.getElementById('ideasContainer');

//             // Load ideas from local storage
//             loadIdeas();

//             form.addEventListener('submit', function (event) {
//                 event.preventDefault();
//                 addIdea();
//             });

//             function addIdea() {
//                 const label = document.getElementById('label').value.trim();
//                 const category = document.getElementById('category').value.trim();
//                 const message = document.getElementById('message').value.trim();

//                 // Reset error messages
//                 document.getElementById('labelError').textContent = '';
//                 document.getElementById('categoryError').textContent = '';
//                 document.getElementById('messageError').textContent = '';

//                 // Validate inputs
//                 let isValid = true;
//                 if (!label) {
//                     document.getElementById('labelError').textContent = 'Libellé est requis.';
//                     isValid = false;
//                 }
//                 if (!category) {
//                     document.getElementById('categoryError').textContent = 'Catégorie est requise.';
//                     isValid = false;
//                 }
//                 if (!message) {
//                     document.getElementById('messageError').textContent = 'Message est requis.';
//                     isValid = false;
//                 }

//                 if (!isValid) {
//                     return;
//                 }

//                 // Create new idea object
//                 const idea = { label, category, message };

//                 // Save idea to local storage
//                 saveIdeaToLocalStorage(idea);

//                 // Create and append idea card
//                 createIdeaCard(idea);

//                 // Clear form
//                 form.reset();
//             }

//             function saveIdeaToLocalStorage(idea) {
//                 let ideas = JSON.parse(localStorage.getItem('ideas')) || [];
//                 ideas.push(idea);
//                 localStorage.setItem('ideas', JSON.stringify(ideas));
//             }

//             function loadIdeas() {
//                 const ideas = JSON.parse(localStorage.getItem('ideas')) || [];
//                 ideas.forEach(idea => createIdeaCard(idea));
//             }

//             function createIdeaCard(idea) {
//                 const { label, category, message } = idea;

//                 const ideaCard = document.createElement('div');
//                 ideaCard.className = 'card border-dark mb-3';
//                 ideaCard.style.maxWidth = '18rem';

//                 ideaCard.innerHTML = `
//                     <div class="card-header bg-transparent border-dark">${label}</div>
//                     <div class="card-body text-dark">
//                         <h5 class="card-title">${category}</h5>
//                         <p class="card-text">${message}</p>
//                     </div>
//                     <div class="card-footer bg-transparent border-dark onclick">
//                         <button class="btn btn-success btn-sm approveBtn ">Approuver</button>
//                         <button class="btn btn-warning btn-sm disapproveBtn">Désapprouver</button>
//                         <button class="btn btn-danger btn-sm deleteBtn"><i class="fas fa-trash"></i></button>
//                     </div>
//                 `;

//                 // Add delete functionality
//                 ideaCard.querySelector('.deleteBtn').addEventListener('click', function () {
//                     ideaCard.remove();
//                     removeIdeaFromLocalStorage(idea);
//                 });

//                 // Add approve functionality
//                 ideaCard.querySelector('.approveBtn').addEventListener('click', function () {
//                     ideaCard.querySelector('.card-body').style.backgroundColor = 'lightgreen';
//                 });

//                 // Add disapprove functionality
//                 ideaCard.querySelector('.disapproveBtn').addEventListener('click', function () {
//                     ideaCard.querySelector('.card-body').style.backgroundColor = 'lightcoral';
//                 });

//                 // Append the card to the container
//                 ideasContainer.appendChild(ideaCard);
//             }

//             function removeIdeaFromLocalStorage(ideaToRemove) {
//                 let ideas = JSON.parse(localStorage.getItem('ideas')) || [];
//                 ideas = ideas.filter(idea => !(idea.label === ideaToRemove.label && idea.category === ideaToRemove.category && idea.message === ideaToRemove.message));
//                 localStorage.setItem('ideas', JSON.stringify(ideas));
//             }
//         });






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
            <div class="card-footer bg-transparent border-dark">
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
});
