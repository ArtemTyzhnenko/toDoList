let input = document.getElementsByClassName("add-todo")[0];
let ul = document.getElementsByClassName('newUl')[0];
let header = document.getElementsByClassName('toDoApp')[0];
let flag = false;
let counter = 0;
let flagForToggleAll = false;

function createToDoNode() {

    let toggleAll = document.createElement('input');
    toggleAll.type = "checkbox";
    toggleAll.classList.add('toggleAll');
    toggleAll.onclick = function () {
        let check = document.getElementsByClassName('check');
        let numberOfList = document.querySelector("ul").children.length;

        for (let i = 0; i < numberOfList; i++) {
            if (check[i].checked == false) {
                document.getElementsByClassName('check')[i].checked = "checked";

            } else {
                document.getElementsByClassName('check')[i].checked = "";
            }
        }
        show();
        clear();
    };

    header.appendChild(toggleAll);


    let li = document.createElement('li');
    li.classList.add('newLi');
    ul.appendChild(li);

    let check = document.createElement('input');
    check.type = "checkbox";
    check.classList.add('check');
    check.name = "1";
    function show() {
        let checked = false;
        let check = document.getElementsByClassName('check');
        let numberOfList = document.querySelector("ul").children.length;
        for (let i = 0; i < numberOfList; i++) {
            if (check[i].checked) {
                checked = true;
            }
        }
        if (checked) {
            document.getElementsByClassName('clearCompleted')[0].style.display = 'inline-block';
        } else {
            document.getElementsByClassName('clearCompleted')[0].style.display = 'none';
        }
    }

    check.onchange = show;
    check.onclick = setCounter;
    li.appendChild(check);

    let label = document.createElement('label');
    label.classList.add("newLabel");
    label.appendChild(document.createTextNode(input.value));
    li.appendChild(label);


    let removeButton = document.createElement('button');
    removeButton.classList.add('remBut');
    removeButton.innerHTML = 'X';
    removeButton.onclick = function () {
        ul.removeChild(li);
        setCounter();
        hideFooter();
    };
    li.appendChild(removeButton);
}


function createFooterNode() {

    let footer = document.createElement('footer');
    footer.classList.add('footer');
    if (flag == false) {
        header.appendChild(footer);
        document.getElementsByClassName('footer')[0].style.display = 'block';
        flag = true;
    }


    let itemsCount = document.createElement('spun');
    itemsCount.classList.add('todoCount');
    footer.appendChild(itemsCount);

    let filters = document.createElement('ul');
    filters.classList.add('footerUl');
    footer.appendChild(filters);

    let footerLiAll = document.createElement('li');
    footerLiAll.classList.add('footerLiAll');
    filters.appendChild(footerLiAll);

    let allButton = document.createElement('button');
    allButton.classList.add('allButton');
    allButton.innerHTML = 'All';
    allButton.type = 'button';
    allButton.onclick = function () {
        let check = document.getElementsByClassName('check');
        let numberOfList = document.querySelector("ul").children.length;

        for (let i = 0; i < numberOfList; i++) {
            document.querySelector("ul").children[i].style.display = "inline-block";
        }
    };

    footerLiAll.appendChild(allButton);

    let footerLiActive = document.createElement('li');
    footerLiActive.classList.add('footerLiActive');
    filters.appendChild(footerLiActive);

    let activeButton = document.createElement('button');
    activeButton.classList.add('activeButton');
    activeButton.innerHTML = 'Active';
    activeButton.type = 'button';
    activeButton.onclick = function () {

        let check = document.getElementsByClassName('check');
        let numberOfList = document.querySelector("ul").children.length;

        for (let i = 0; i < numberOfList; i++) {
            if (check[i].checked) {
                document.querySelector("ul").children[i].style.display = "none";
            } else {
                document.querySelector("ul").children[i].style.display = "block"
            }
        }
    };
    footerLiActive.appendChild(activeButton);

    let footerLiCompleted = document.createElement('li');
    footerLiCompleted.classList.add('footerLiCompleted');
    filters.appendChild(footerLiCompleted);

    let completedButton = document.createElement('button');
    completedButton.classList.add('completedButton');
    completedButton.innerHTML = 'Completed';
    completedButton.type = 'button';
    completedButton.onclick = function () {
        let check = document.getElementsByClassName('check');
        let numberOfList = document.querySelector("ul").children.length;
        for (let i = 0; i < numberOfList; i++) {
            if (check[i].checked == false) {
                document.querySelector("ul").children[i].style.display = "none";
            } else {
                document.querySelector("ul").children[i].style.display = "block"
            }
        }
    };
    footerLiCompleted.appendChild(completedButton);

    let clearCompleted = document.createElement('button');
    clearCompleted.classList.add('clearCompleted');
    clearCompleted.innerHTML = 'Clear completed';
    clearCompleted.type = 'button';
    filters.appendChild(clearCompleted);
    document.getElementsByClassName('clearCompleted')[0].style.display = 'none';
    function clear() {
        let check = document.getElementsByClassName('check');
        let i = check.length;
        while (i--) {
            if (check[i].checked) {
                document.querySelector("ul").children[i].parentNode.removeChild(document.querySelector("ul").children[i]);
                setCounter();
            }
            document.getElementsByClassName('clearCompleted')[0].style.display = 'none';
            hideFooter();
        }
    }

    clearCompleted.onclick = clear;
}

function hideFooter() {
    let numberOfList = document.querySelector("ul").children.length;
    if (numberOfList == 0) {
        document.getElementsByClassName('footer')[0].parentNode.removeChild(document.getElementsByClassName('footer')[0]);
        flag = false;
    }
}

function setCounter() {
    debugger;
    let numberOfList = document.querySelector("ul").children.length;

    document.getElementsByClassName('todoCount')[0].innerHTML = numberOfList + " items left";

    //
    // let check = document.getElementsByClassName('check');
    // let numberOfList = document.querySelector("ul").children.length;
    // for (let i = 0; i < numberOfList; i++) {
    //     if (check[i].checked == false) {
    //         counter++;
    //     } else {
    //         counter--;
    //     }
    //
    // }
    // return document.getElementsByClassName('todoCount')[0].innerHTML = counter + " items left";

}


function add(event) {
    let code = event.keyCode;

    if (input.value !== "" && code == 13) {

        createToDoNode();
        createFooterNode();
        setCounter();


        input.value = null;
    }


}


input.addEventListener("keyup", add);

