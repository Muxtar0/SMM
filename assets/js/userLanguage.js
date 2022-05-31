const selectedTextService  = document.querySelector('.selectedTextUserLanguage');
const selectService = document.querySelector('.selectUserLanguage')
const selectionsForCategoryService = document.querySelectorAll('.selectionsForUserLanguage li')
const selectionsForCategorySelectService = document.querySelector('.selectionsForUserLanguage')

selectService.addEventListener('click',(e) => {
    selectionsForCategorySelectService.classList.toggle('hidden')
})

for(let i = 0 ; i < selectionsForCategoryService.length;i++){
    selectionsForCategoryService[i].addEventListener("click",(e) => {
        e.preventDefault();
        const data = selectionsForCategoryService[i].getAttribute('data-value');
        selectedTextService.textContent=data;
        selectedTextService.setAttribute('data-selectedValue',data)

    })
}