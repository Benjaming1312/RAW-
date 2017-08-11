# RAW ZOOM

> RAW的商品分類頁使用放大鏡功能

## 引入套件

``` bash
# 放在自訂CSS


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

