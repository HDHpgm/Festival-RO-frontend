// 시작페이지 기능 전용 js 파일입니다.
// 사진 확대 기능과 확대 후 취소 기능이 구현되어 있습니다.

var $cont = document.querySelector('.cont')
var $elsArr = [].slice.call(document.querySelectorAll('.el'))
var $closeBtnsArr = [].slice.call(document.querySelectorAll('.el__close-btn'))

setTimeout(function () {
  $cont.classList.remove('s--inactive')
}, 200)

$elsArr.forEach(function ($el) {
  $el.addEventListener('click', function () {
    if (this.classList.contains('s--active')) return
    $cont.classList.add('s--el-active')
    this.classList.add('s--active')
  })
})

$closeBtnsArr.forEach(function ($btn) {
  $btn.addEventListener('click', function (e) {
    e.stopPropagation()
    $cont.classList.remove('s--el-active')
    document.querySelector('.el.s--active').classList.remove('s--active')
  })
})
