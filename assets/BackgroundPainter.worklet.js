/* eslint-disable no-param-reassign, class-methods-use-this, no-bitwise */
// eslint-disable-next-line no-undef
// @ts-ignore
registerPaint('material-gb', class {
  constructor () {
    /* MersenneTwister */
    this.N = 624
    this.M = 397
    this.MATRIX_A = 0x9908B0DF
    this.UPPER_MASK = 0x80000000
    this.LOWER_MASK = 0x7FFFFFFF

    this.mt = new Array(this.N)
    this.mti = this.N + 1
  }

  initSeed () {
    this.mt[0] = (this.seed || Date.now()) >>> 0
    for (this.mti = 1; this.mti < this.N; this.mti += 1) {
      const s = this.mt[this.mti - 1] ^ (this.mt[this.mti - 1] >>> 30)
      this.mt[this.mti] = (((((s & 0xFFFF0000) >>> 16) * 1812433253) << 16) +
        (s & 0x0000FFFF) * 1812433253) + this.mti
      this.mt[this.mti] >>>= 0
    }
  }

  next () {
    let y
    const mag01 = [0x0, this.MATRIX_A]
    if (this.mti >= this.N) {
      let kk

      if (this.mti === this.N + 1) {
        this.initSeed(5489)
      }

      for (kk = 0; kk < this.N - this.M; kk += 1) {
        y = (this.mt[kk] & this.UPPER_MASK) | (this.mt[kk + 1] & this.LOWER_MASK)
        this.mt[kk] = this.mt[kk + this.M] ^ (y >>> 1) ^ mag01[y & 0x1]
      }
      for (; kk < this.N - 1; kk += 1) {
        y = (this.mt[kk] & this.UPPER_MASK) | (this.mt[kk + 1] & this.LOWER_MASK)
        this.mt[kk] = this.mt[kk + (this.M - this.N)] ^ (y >>> 1) ^ mag01[y & 0x1]
      }
      y = (this.mt[this.N - 1] & this.UPPER_MASK) | (this.mt[0] & this.LOWER_MASK)
      this.mt[this.N - 1] = this.mt[this.M - 1] ^ (y >>> 1) ^ mag01[y & 0x1]

      this.mti = 0
    }
    y = this.mt[this.mti += 1]
    y ^= (y >>> 11)
    y ^= (y << 7) & 0x9D2C5680
    y ^= (y << 15) & 0xEFC60000
    y ^= (y >>> 18)
    return (y >>> 0) * (1.0 / 4294967296.0)
  }

  static get inputProperties () {
    return ['--background-color', '--colors', '--seed']
  }

  paint (context, geometry, properties) {
    this.context = context
    this.drawBG(geometry, properties)
    const colors = properties.get('--colors').toString().split(/[ \n]/).filter(str => str.length !== 0)
    context.shadowColor = 'rgba(0, 0, 0, 0.5)'
    context.shadowBlur = 30

    const seedProp = parseInt(properties.get('--seed').toString(), 10)
    if (Number.isInteger(seedProp)) { this.seed = seedProp }
    this.initSeed()

    for (let i = 0; i < geometry.width / 70; i += 1) {
      context.fillStyle = colors[Math.floor(this.next() * colors.length)]
      this.drawDiamond(
        geometry.width * (this.next() * 2 - 0.5),
        geometry.height * (this.next() - 0.5),
        geometry.width * (this.next() + 0.5),
        geometry.height * (this.next() + 0.5)
      )
    }
  }

  drawBG (geometry, properties) {
    this.context.fillStyle = properties.get('--background-color').toString()
    this.context.rect(0, 0, geometry.width, geometry.height)
    this.context.fill()
  }

  drawDiamond (x, y, width, height) {
    this.context.save()
    this.context.beginPath()
    this.context.moveTo(x, y)
    this.context.lineTo(x - width / 2, y + height / 2)
    this.context.lineTo(x, y + height)
    this.context.lineTo(x + width / 2, y + height / 2)
    this.context.closePath()
    this.context.fill()
    this.context.restore()
  }
})
