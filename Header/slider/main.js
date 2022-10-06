let items = document.querySelectorAll('.slide');

items.forEach((item)=> {
    item.addEventListener('click' , ()=> {
        unACtive()
        item.classList.add('active')
    })
})
function unACtive() {
    for(const item of items) {
        item.classList.remove('active')
    }
}