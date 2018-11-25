/* eslint-disable no-param-reassign, class-methods-use-this */
class BackgroundPainter {
  static get inputProperties() {
    return [
      '--colors',
    ];
  }

  paint(context, geometry, properties) {
    this.context = context;

    const colors = properties.get('--colors')
      .toString()
      .split(' ')
      .filter(str => str.length !== 0);

    context.shadowColor = 'rgba(0, 0, 0, 0.5)';
    context.shadowBlur = 30;

    // eslint-disable-next-line
    context.fillStyle = colors[0];
    this.drawDiamond(geometry.width / 4, geometry.height / 4,
      geometry.width / 2, geometry.height / 2);
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
registerPaint('bg', BackgroundPainter);
