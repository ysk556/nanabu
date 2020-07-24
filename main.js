function action(event) {
    var f1 = document.querySelector('#f1');
    var list = document.querySelector('#list');
    var msg = document.querySelector('#msg');
    if (f1.value == '') {
        var item = list.children[0].remove();
    } else {
        var li = document.createElement('li');
        li.className = 'list-group-item';
        li.textContent = f1.value;
        li.addEventListener("click", clickItem);
        list.appendChild(li);
        msg.textContent = '「' + f1.value + '」を追加しました。';
        f1.value = '';
    }
}

function clickItem(event) {
    var item = event.target;
    var items = item.parentNode.childNodes;
    for (var i = 0; i < items.length; i++) {
        items[i].classList.remove('active');
    }
    item.classList.add('active');
    var msg = document.querySelector('#msg');
    msg.textContent = "selected: " + item.textContent;
}