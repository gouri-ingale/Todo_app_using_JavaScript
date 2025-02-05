let ip = document.querySelector('input');
let btn = document.querySelector('button');
let ul = document.querySelector('ul');

btn.addEventListener('click', function () {
    if (ip.value.trim() === "") return; // Prevent adding empty tasks

    let item = document.createElement('li');
    item.innerText = ip.value;

    // Apply styles to newly added list item (li)
    item.style.fontSize = "20px";
    item.style.margin = "10px 0";
    item.style.listStyle = "none";
    
    ul.appendChild(item);

    let delItem = document.createElement('button');
    delItem.innerText = "Delete";
    delItem.classList.add('delete');

    // Apply the same styles as in the HTML
    delItem.style.backgroundColor = "rgb(255, 0, 187)";
    delItem.style.borderRadius = "10px";
    delItem.style.padding = "5px";
    delItem.style.color = "whitesmoke";
    delItem.style.marginLeft = "10px";
    delItem.style.cursor = "pointer";
    
    item.appendChild(delItem);
    ip.value = "";
});

ul.addEventListener('click', function (event) {
    if (event.target.nodeName == "BUTTON") {
        let denNew = event.target.parentElement;
        denNew.remove();
    }
});
