适用于[uniapp](https://uniapp.dcloud.io/)的二维码库，大部分code由[QRious](https://github.com/neocotic/qrious)而来。

## 使用方法

``` javascript
  let qrcode = new Qrcode();
  qrcode.draw('myCanvas', 'https://u.wechat.com/EJab_1QbJTgyO7tcgynIyBE');
```
创建对象可传入参数，具体可以参看源码`./js/qrcode/qrcode.js`。

## Example

``` html
<template>
  <view class="qrcode-body">
    <view class="qrcode">
      <canvas canvas-id="myCanvas"/>
    </view>
  </view>
</template>
<script>
  import Qrcode from './js/qrcode/qrcode.js'

  export default {
    onLoad() {
      let qrcode = new Qrcode({
        'level': 'L',
        'size': 200
      });
      qrcode.draw('myCanvas', 'https://u.wechat.com/EJab_1QbJTgyO7tcgynIyBE');
    }
  }
</script>
<style>
  .qrcode-body {
    width: 100%;
  }

  .qrcode-body .qrcode {
    display: flex;
    justify-content: center;
  }
  canvas{
    height: 370px;
    width: 370px;
  }
</style>
```