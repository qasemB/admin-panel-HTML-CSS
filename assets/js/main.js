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
    
});

var tooltipEl = document.querySelectorAll('.has_tooltip')
for (const item of tooltipEl) {
    new bootstrap.Tooltip(item, {
        boundary: document.body
    })
}
