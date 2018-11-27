import Frame from './frame.js'

class Qrcode {
  constructor(params) {
    this.qrious = {
      'foreground': '#000000',//填充颜色
      'foregroundAlpha': 1,//透明度
      'level': 'L', //纠错级别“L”“M”“Q”“H”
      'padding': null,
      'size': 100
    };
    if (params) {
      this.qrious = {...this.qrious, ...params}
    }
  }

  draw(canvasId, value) {
    let frame = new Frame({
      level: this.qrious.level,
      value: value
    });

    let i, j;
    let moduleSize = this._getModuleSize(frame);
    let offset = this._getOffset(frame);
    //console.log(offset,frame.width,moduleSize)
    this.ctx = uni.createCanvasContext(canvasId);
    this.ctx.setFillStyle(this.qrious.foreground);
    this.ctx.setGlobalAlpha(this.qrious.foregroundAlpha);

    for (i = 0; i < frame.width; i++) {
      for (j = 0; j < frame.width; j++) {
        if (frame.buffer[(j * frame.width) + i]) {
          this.ctx.fillRect((moduleSize * i) + offset, (moduleSize * j) + offset, moduleSize, moduleSize);
        }
      }
    }
    this.ctx.draw();
  }

  _getOffset(frame) {
    let qrious = this.qrious;
    let padding = qrious.padding;

    if (padding != null) {
      return padding;
    }

    let moduleSize = this._getModuleSize(frame);
    let offset = Math.floor((qrious.size - (moduleSize * frame.width)) / 2);

    return Math.max(0, offset);
  }

  _getModuleSize(frame) {
    let qrious = this.qrious;
    let padding = qrious.padding || 0;
    let pixels = Math.floor((qrious.size - (padding * 2)) / frame.width);
    return Math.max(1, pixels);
  }

  clear() {
    this.ctx.clearRect(0, 0)
  }
}

export default Qrcode