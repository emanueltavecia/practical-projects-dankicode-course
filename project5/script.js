$(function () {
  var currentValue = 0
  var isDrag = false
  var precoMax = 70000
  var precoAtual = 0

  $('.pointer-barra').mousedown(function () {
    isDrag = true
  })
  $('.pointer-barra').mouseup(function () {
    isDrag = false
    enableTextSelection()
  })

  $(".barra-preco").mousemove(function (e) {
    if (isDrag) {
      disableTextSelection()
      var elBase = $(this)
      var mouseX = e.pageX - elBase.offset().left
      if (mouseX < 0) {
        mouseX = 0
      } if (mouseX > elBase.width()) {
        mouseX = elBase.width()
      }

      $(".pointer-barra").css('left', mouseX-13 + 'px')
      currentValue = (mouseX / elBase.width()) * 100
      $('.barra-preco-fill').css('width', currentValue + '%')
      
      precoAtual = currentValue / 100 * precoMax
      precoAtual = formatarPreco(precoAtual)
      $('.preco-pesquisa').html('R$' + precoAtual)
    }
  })

  function formatarPreco(precoAtual) {
    precoAtual = precoAtual.toFixed(2)
    preco_arr = precoAtual.split('.')

    var novoPreco = formatarTotal(preco_arr)

    return novoPreco
  }

  function formatarTotal(preco_arr) {
    if (preco_arr[0] < 1000) {
      return preco_arr[0] + ',' + preco_arr[1]
    } else if (preco_arr[0] < 10000) {
      return preco_arr[0][0] + '.' + preco_arr[0].substr(1, preco_arr[0].length) + ',' + preco_arr[1]
    } else {
      return preco_arr[0][0] + preco_arr[0][1] + '.' + preco_arr[0].substr(2, preco_arr[0].length) + ',' + preco_arr[1]
    }
  }

  function disableTextSelection() {
    $('body').css('-webkit-user-select', 'none')
    $('body').css('-moz-user-select', 'none')
    $('body').css('-ms-user-select', 'none')
    $('body').css('-o-user-select', 'none')
    $('body').css('user-select', 'none')
  }
  function enableTextSelection() {
    $('body').css('-webkit-user-select', 'auto')
    $('body').css('-moz-user-select', 'auto')
    $('body').css('-ms-user-select', 'auto')
    $('body').css('-o-user-select', 'auto')
    $('body').css('user-select', 'auto')
  }
})
