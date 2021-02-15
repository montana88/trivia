/**
 * Update screens
 */
export default class Timer {
  constructor() {
    this.requestAnimationID = null

    this.updateProxy = function (deltaTime) {

      this.update()
      this.enqueue()

    }
  }

  enqueue() {

    this.requestAnimationID = requestAnimationFrame(this.updateProxy.bind(this))

  }

  start() {

    this.enqueue()

  }

}