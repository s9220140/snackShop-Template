// icon switch
$(document).ready(function () {
    $(".fa-heart").click(function (e) { 
        e.preventDefault();
        $(this).toggleClass(['fas','text-danger']);
    });
});

// 表單驗證
// Example starter JavaScript for disabling form submissions if there are invalid fields
(() => {
  'use strict'

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  const forms = document.querySelectorAll('.needs-validation')

  // Loop over them and prevent submission
  Array.from(forms).forEach(form => {
    form.addEventListener('submit', event => {
      if (!form.checkValidity()) {
        event.preventDefault()
        event.stopPropagation()
      }

      form.classList.add('was-validated')
    }, false)
  })
})()

// removeModal
var remove_modal = document.getElementById('removeModal')
remove_modal.addEventListener('show.bs.modal', function (event) {
  var btn = event.relatedTarget
  var title = btn.getAttribute('data-title')
  var modalTitle = remove_modal.querySelector('.modal-title')
  modalTitle.textContent = '確認刪除' + title+'?'
})