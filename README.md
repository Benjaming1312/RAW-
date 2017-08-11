# RAW ZOOM

> RAW的商品分類頁使用放大鏡功能

## 引入套件

``` bash
# 放在自訂CSS
<link rel="stylesheet" href="https://cdn.rawgit.com/Benjaming1312/RAW-/master/zoom.css">
<script src="https://cdn.rawgit.com/Benjaming1312/RAW-/master/raw-zoom.js"></script>

```

## 使用套件
```
$(function () {
  $('.product-photo').each(function () {
    aToImg($(this))
    zoomInApend($(this))
    $(this).on('mouseover', function () {
      hoverZoom($(this))
    })
  })
})

```

