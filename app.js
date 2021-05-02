const addForm=document.querySelector('.add')
const list=document.querySelector('.todos')

addForm.addEventListener('submit',(e)=>{
    e.preventDefault();
    const adding=addForm.add.value.trim();
    if(adding.length){
        generateList(adding);
        addForm.reset();
    }
})

const generateList= (adding)=>{
    const html=`<li class="list-group-item d-flex justify-content-between align-items-center">
    <span>${adding}</span>
    <i class="fas fa-trash delete"></i>`;
    list.innerHTML+=html;
}

list.addEventListener('click',(e)=>{
    if(e.target.classList.contains('delete')){
        e.target.parentElement.remove();
    }
})

const searching=document.querySelector('.search input')
searching.addEventListener('keyup',()=>{
    const term=searching.value.trim().toLowerCase();
    fileredSearch(term);
})

const fileredSearch=(term)=>{
    console.log(list)
    console.log(list.children)
    console.log(list.children[1].textContent)
    Array.from(list.children)
        .filter((adding) =>!adding.textContent.toLowerCase().includes(term))
        .forEach((adding)=>adding.classList.add('filtered'))
    
    Array.from(list.children)
        .filter((adding) => adding.textContent.toLowerCase().includes(term))
        .forEach((adding)=> adding.classList.remove('filtered'))
}