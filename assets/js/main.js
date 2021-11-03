window.addEventListener('DOMContentLoaded', (event) => {


    document.getElementById('handle_toggle_sidemenu').addEventListener('change' , function(){
        if (this.checked) {
            document.querySelector('.mini_sidebar').classList.add('expanded')
            document.getElementById('content_section').classList.add('with_sidebar')
        }else{
            document.querySelector('.mini_sidebar').classList.remove('expanded')
            document.getElementById('content_section').classList.remove('with_sidebar')
        }
    })

    let sidebarItms = document.querySelectorAll('.sidebar_menu_item');
    for (const item of sidebarItms) {
        item.addEventListener('click' , ()=>{
            for (const i of sidebarItms) {
                i.classList.remove('active')
            }
            item.classList.add('active')
            let sectionId = item.getAttribute('data-section-id');
            let allSections = document.querySelectorAll('.main_section');
            for (const section of allSections) {
                section.classList.add('d-none')
            }
            document.getElementById(`${sectionId}`).classList.remove('d-none')
        })
    }
    
});

var tooltipEl = document.querySelectorAll('.has_tooltip')
for (const item of tooltipEl) {
    new bootstrap.Tooltip(item, {
        boundary: document.body
    })
}
