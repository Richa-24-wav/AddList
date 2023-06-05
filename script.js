const inputBox = document.getElementById('input');
// const button = document.getElementById('button');
const listContainer = document.getElementById('list-container')

function addItem(){
    if(inputBox.value===''){
        alert('Please enter the list item');
    }else{
      let li = document.createElement('li');
      li.innerHTML = inputBox.value;
      listContainer.appendChild(li);
      let spam = document.createElement('spam');
      spam.innerHTML = '\u00d7'
      li.appendChild(spam);
    }
    inputBox.value='';
    saveData();
}

listContainer.addEventListener('click', function(e){
    if(e.target.tagName==='SPAM'){
        e.target.parentElement.remove();
        saveData();
    }
    
});

function saveData(){
    localStorage.setItem("data", listContainer.innerHTML);
}

function fetchData(){
    listContainer.innerHTML = localStorage.getItem('data');
}
fetchData();