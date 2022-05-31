// dashboardsidebar
const sidebar = document.querySelector('.sidebar');
const bigLogo = document.querySelector('.sidebar .bigLogo');
const smallLogo = document.querySelector('.sidebar .smallLogo');
const closeOpenSidebarBTN = document.querySelector('.sidebar .closeOpenSidebarBTN');
const balance = document.querySelector('.sidebar .balance');
const sidebarListText = document.querySelectorAll('.sidebar .sidebarContent .sidebarList li a .text');
const showMoreBTN = document.querySelector('.sidebar .showMoreBTN');
const showMoreListText = document.querySelectorAll('.sidebar .sidebarContent .showMore .showMoreList li a .text');
const showMoreList = document.querySelector('.sidebar .sidebarContent .showMore .showMoreList');
const hiddenShowBalanceBTN = document.querySelector('.sidebar .balance .hiddenShowBalanceBTN')
const balanceText = document.querySelector('.sidebar .balance .balanceText .balanceTextMain span');

let showBalance = true;
closeOpenSidebarBTN.addEventListener('click' , (e) => {
    sidebar.classList.toggle('sidebarClose')
    bigLogo.classList.toggle('sidebarHidden')
    smallLogo.classList.toggle('sidebarHidden')
    balance.classList.toggle('sidebarHidden')
    for(let i=0;i<sidebarListText.length;i++){
        sidebarListText[i].classList.toggle('sidebarHidden')
    }
    showMoreBTN.classList.toggle('sidebarHidden')
    for(let i=0;i<showMoreListText.length;i++){
        showMoreListText[i].classList.toggle('sidebarHidden')
    }
    showMoreList.classList.remove("hidden")
})
hiddenShowBalanceBTN.addEventListener('click', (e) => {
    showBalance = !showBalance;
    if(showBalance == true){
        balanceText.innerHTML="10.00"
        hiddenShowBalanceBTN.innerHTML = `<i class="fa-solid fa-eye-slash"></i>`
    }
    else{
        balanceText.innerHTML="**.**"
        hiddenShowBalanceBTN.innerHTML = `<i class="fa-solid fa-eye"></i>`

    }
})
showMoreBTN.addEventListener('click',(e) => {
    showMoreList.classList.toggle("hidden")
    console.log(showMoreList)
})

