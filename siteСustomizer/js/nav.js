document.addEventListener("DOMContentLoaded", function() {
    const nav = document.getElementById('nav');
    const navCustomizer = document.getElementById('nav-customizer');
    const saveButton = document.getElementById('save-nav-button');
    const addButton = document.getElementById('add-nav-button');
    const modal = document.querySelector('.nav.modal');

    class Nav {
        constructor() {
       
        }

        addItem() {
            const li = document.createElement('li');

            li.innerHTML =  `
                <input class="_nav-title" type="text" value="" />
                <input class="_nav-link" type="text" value="" />
                <button class="_delete-button" type="button">X</button>
            `;

            navCustomizer.appendChild(li);
        }

        save() {
            navCustomizer.querySelectorAll('li').forEach(item => {
                const li = document.createElement('li');
                li.innerHTML =    `
                    <li>
                        <a href = ${ item.querySelector('._nav-link').value }>
                            ${ item.querySelector('._nav-title').value } 
                        </a>
                    </li>
                `;

                nav.appendChild(li);
            });
        }
    }

    const navInstance = new Nav();
    nav.addEventListener('click', () => {
        modal.classList.remove('hidden');
    });
    saveButton.addEventListener('click', navInstance.save);
    addButton.addEventListener('click', navInstance.addItem);
});
   