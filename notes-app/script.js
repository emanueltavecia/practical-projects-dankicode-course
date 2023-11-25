$(function () {
  $('.btn-add').click(function () {
    var el =
      '<div class="single-note"><textarea placeholder="Your new note"></textarea></div>'
    $('.container-notes').append(el)

    var textarea = $('.single-note').last().find('textarea')
    var date = new Date()
    var hour = date.getHours()
    var min = date.getMinutes()
    var time = hour + ':' + min
    textarea.html("Nova anotação em: " + time)
  })
})
