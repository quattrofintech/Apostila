// TOOLTIP
var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl)
})

// TOAST
const openToast = (msg) => {
    let myAlert = document.querySelector('.toast')
    let btnAlert = new bootstrap.Toast(myAlert)
    document.querySelector('.toast-body').innerText = msg
    btnAlert.show()
}