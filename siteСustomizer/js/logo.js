document.addEventListener("DOMContentLoaded", function() {
   const fileRemote = document.getElementById('file-remote');
   const fileLocal = document.getElementById('file-local');
   const logo = document.querySelector('.logo > img');
   const logoButton =  document.getElementById('logo-button');

   class Logo {
        constructor(nodeLogo, nodeLocal, nodeRemote){
            this.nodeLogo = nodeLogo;
            this.nodeLocal = nodeLocal;
            this.nodeRemote = nodeRemote;
            this.changeLogoLocal = this.changeLogoLocal.bind(this);
            this.changeLogoRemote = this.changeLogoRemote.bind(this);
        }

        changeLogoLocal() {
            const reader = new FileReader();

            reader.onload = (function(node) { 
                return function(e) { 
                    node.src = e.target.result; 
                    localStorage.setItem('logo', node.src);
                }; 
            })(this.nodeLogo);
           
            reader.readAsDataURL(this.nodeLocal.files[0]);
        }

        changeLogoRemote() {
            this.nodeLogo.src = this.nodeRemote.value;
            localStorage.setItem('logo', this.nodeLogo.src);
            this.nodeRemote.value = '';
        }

        init() {
            this.nodeLogo.src = localStorage.getItem('logo') || './img/logo.png';
            this.nodeLocal.addEventListener('change', this.changeLogoLocal);
            logoButton.addEventListener('click', this.changeLogoRemote);
        }
    }

    const logoInstance = new Logo(logo, fileLocal, fileRemote);
    logoInstance.init();

    logo.addEventListener('click', () => {
        document.querySelector('.logo.modal').classList.remove('hidden');
    });
});


//   // Check for the various File API support.
// if (window.File && window.FileReader && window.FileList && window.Blob) {
//     // Great success! All the File APIs are supported.
//   } else {
//     alert('The File APIs are not fully supported in this browser.');
//   }