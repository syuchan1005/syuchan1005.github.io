/* eslint-disable no-param-reassign, class-methods-use-this */
class BackgroundPainter {
  static get inputProperties() {
    return ['--background-color', '--colors'];
  }

  paint(context, geometry, properties) {
    this.context = context;
    this.drawBG(geometry, properties);
    const colors = properties.get('--colors').toString().split(/[ \n]/).filter(str => str.length !== 0);
    context.shadowColor = 'rgba(0, 0, 0, 0.5)';
    context.shadowBlur = 30;
    for (let i = 0; i < geometry.width / 70; i += 1) {
      context.fillStyle = colors[Math.floor(Math.random() * colors.length)];
      this.drawDiamond(
        geometry.width * (Math.random() * 2 - 0.5),
        geometry.height * (Math.random() - 0.5),
        geometry.width * (Math.random() + 0.5),
        geometry.height * (Math.random() + 0.5),
      );
    }
  }

  drawBG(geometry, properties) {
    this.context.fillStyle = properties.get('--background-color').toString();
    this.context.rect(0, 0, geometry.width, geometry.height);
    this.context.fill();
  }

  drawDiamond(x, y, width, height) {
    this.context.save();
    this.context.beginPath();
    this.context.moveTo(x, y);
    this.context.lineTo(x - width / 2, y + height / 2);
    this.context.lineTo(x, y + height);
    this.context.lineTo(x + width / 2, y + height / 2);
    this.context.closePath();
    this.context.fill();
    this.context.restore();
  }
}

// eslint-disable-next-line no-undef
registerPaint('material-gb', BackgroundPainter);
