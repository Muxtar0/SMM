const selectedText = document.querySelector('.selectedText');
const select = document.querySelector('.select')
const selectionsForCategory = document.querySelectorAll('.selectionsForTime li')
const selectionsForCategorySelect = document.querySelector('.selectionsForTime')

select.addEventListener('click',(e) => {
    selectionsForCategorySelect.classList.toggle('hidden')
})

for(let i = 0 ; i < selectionsForCategory.length;i++){
    selectionsForCategory[i].addEventListener("click",(e) => {
        e.preventDefault();
        const data = selectionsForCategory[i].getAttribute('data-value');
        selectedText.textContent=data;
        selectedText.setAttribute('data-selectedValue',data)

    })
}