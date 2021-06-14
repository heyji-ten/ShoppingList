const items = document.querySelector('.shopping__list');
const memo = document.querySelector('.shopping__memo');
const addBtn = document.querySelector('.addbtn');

function onAdd() {
    const text = memo.value;
    if(text === ''){
        memo.focus();
        return;
    }
    const item = createItem();
    items.appendChild(item);
    item.scrollIntoView({block: 'center'});
    memo.value = '';
    memo.focus();
}

function createItem() {
    const list__item = document.createElement('li');
    list__item.setAttribute('class', 'list__item');

    const item = document.createElement('div');
    item.setAttribute('class', 'item');

    item.addEventListener('click', ()=> {
        item.classList.toggle('check');
    });

    const name = document.createElement('span');
    name.setAttribute('class', 'item__name');
    name.innerText = memo.value;

    const deleteBtn = document.createElement('button');
    deleteBtn.setAttribute('class','item__delete');
    deleteBtn.innerHTML = '<i class="fas fa-trash-alt"></i>';
    deleteBtn.addEventListener('click', () => {
        items.removeChild(list__item);
    });

    const divider = document.createElement('div');
    divider.setAttribute('class', 'divider');

    item.appendChild(name);
    item.appendChild(deleteBtn);

    list__item.appendChild(item);
    list__item.appendChild(divider);

    return list__item;

    
}

addBtn.addEventListener('click', () => {
    onAdd();
});

memo.addEventListener('keypress', (event) => {
    if(event.key === 'Enter') {
        onAdd();
    }
});
