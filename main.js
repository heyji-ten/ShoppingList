const items = document.querySelector('.shopping__list');
const memo = document.querySelector('.shopping__memo');
const addBtn = document.querySelector('.addbtn');

function onAdd() {
    // 1. 사용자가 입력한 텍스트를 받아옴
    const text = memo.value;
    if(text === ''){
        memo.focus();
        return;
    }
    // 2. 새로운 아이템을 만듬 (텍스트 + 삭제버튼)
    const item = createItem();

    // 3. list__item 컨테이너 안에 새로 만든 아이템을 추가
    items.appendChild(item);

    // 4. 새로 추가된 아이템으로 스크롤링
    item.scrollIntoView({block: 'center'});

    // 5. 인풋을 초기화
    memo.value = '';
    memo.focus();
}

function createItem() {
    const list__item = document.createElement('li');
    list__item.setAttribute('class', 'list__item');

    const item = document.createElement('div');
    item.setAttribute('class', 'item');

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