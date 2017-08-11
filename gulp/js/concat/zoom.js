$(function () {
  $('.product-photo').each(function () {
    aToImg($(this))
    zoomInApend($(this))
    $(this).on('mouseover', function () {
      hoverZoom($(this))
    })
  })
})

// 把分類頁的元素a的background複製，並且產出img並且append進去
function aToImg(target) {
  var aBackground = target.attr('style').split("url('")[1].split("');")[0]
  target.attr('style','padding-top: 0')
  target.append('<img class="img-responsive" src="' + aBackground + '">')
}

// 放大鏡執行需要用的預覽視窗
function zoomInApend (target) {
  var imgSrc = target.children('img').attr('src')
  target.children('img').after('<div class="fd"></div>')
  target.after('<div class="max">' + '<img src="' + imgSrc + '">' + '</div>')
}

// 放大鏡效果
function hoverZoom(target) {
  var min = target //原始圖片
  // max = $('.max') //放大圖片
  max = target.siblings('.max') //放大圖片
  // img = $('.max img') //放大圖片路徑
  img = target.siblings('.max').children('img') //放大圖片路徑
  // fd = $('.fd')
  fd = target.children('img').siblings('.fd')

  min.on('mouseover', function () {
    max.attr('style', 'display: block;')
    fd.attr('style', 'display: block;')
  })

  min.on('mouseout', function () {
    max.attr('style', 'display: none;')
    fd.attr('style', 'display: none;')
  })

  min.on('mousemove', function (event) {
    // 移動點
    var x = event.clientX - min.offset().left - fd.outerWidth() / 2
    var y = event.clientY - min.offset().top - fd.outerHeight() / 2

    // 最大移動距離
    var maxX = min.innerWidth() - fd.outerWidth()
    var maxY = min.innerHeight() - fd.outerHeight()

    // 邊界
    if (x <= 0) {
      x = 0
    } else if (x >= maxX) {
      x = maxX
    } 

    if (y <= 0) {
      y = 0
    } else if (y >= maxY) {
      y = maxY
    }

    // 移動位置
    fd.attr('style','left:' + x + 'px;' + 'top:' + y + 'px;')

    var moveX = x / maxX
    var moveY = y / maxY

    // img.style.left = moveX * (max.innerWidth() - img.outerWidth()) + 'px'
    img.attr('style', 'left:' + moveX * (max.innerWidth() - img.outerWidth()) + 'px;' + 
  'top:' + moveY * (max.innerHeight() - img.outerHeight()) + 'px;')
    // img.style.top = moveY * (max.innerHeight() - img.outerHeight()) + 'px'

  })
}
