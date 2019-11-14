menuFunc = () => {
    var menu = document.getElementById('menu');
    var menuContent = document.getElementById('mainNav')
    if(window.innerWidth < 699){
        if (menuContent.classList.contains('hidden')){
            menuContent.classList.remove('hidden')
            menu.classList.remove('fa-bars')
            menu.classList.add('fa-times')
        } else {
            menuContent.classList.add('hidden')
            menu.classList.remove('fa-times')
            menu.classList.add('fa-bars')
        }
    }
}
