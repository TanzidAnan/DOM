document.getElementById('log-out').addEventListener('click', function () {
    window.location.href = '/index.html'
})
document.getElementById('btn-show-add-money').addEventListener('click', function (e) {
    e.preventDefault();

    showScetionById('add-mony-form')
})

document.getElementById('btn-show-cash-out').addEventListener('click', function () {
    showScetionById('cash-out-form')
})
document.getElementById('tragation-history').addEventListener('click', function () {
    showScetionById('tersation-section')
})