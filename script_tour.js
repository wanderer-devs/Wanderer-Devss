
const modal = document.getElementById('infoModal');
const modalTitle = document.getElementById('modal-title');
const modalDesc = document.getElementById('modal-desc');

function openModal(title, desc){
    modalTitle.innerText = title;
    modalDesc.innerText = desc;
    modal.classList.add('active');
}

function closeModal(){ modal.classList.remove('active'); }


