export default class Renderer {
  constructor() {
    this.context = undefined

    this.canvas = undefined
  }

  init(canvas, callback) {
    this.canvas = canvas
    this.context = this.canvas.getContext('2d')

    this.context.scale(20, 20);

    this.context.rect(0, 0, this.canvas.width, this.canvas.height)
    this.context.fill()

    this.canvas.addEventListener('contextmenu', function(event) {
      event.preventDefault()
    })

    if (callback) {
      callback()
    }

    return this
  }

  render(board, players, roll, currentUser) {
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height)

    // Paint it black
    this.context.fillStyle = '#000'
    this.context.fillRect(0, 0, this.canvas.width, this.canvas.height)

    this.context.save()

    this.drawBoard(board.arena, {x: 0, y: 0}, board.colors)
    this.drawPlayers(players)
    this.drawText(roll, currentUser)

    // Restore context position
    this.context.restore()

  }

  drawBoard(block, offset, colors) {
    block.forEach((row, y) => {

      row.forEach((value, x) => {
        if (value !== 0) {

          this.context.fillStyle = colors[value];
          this.context.fillRect(
            x + offset.x,
            y + offset.y,
            1,
            1
          );

        }
      })

    })
  }

  drawPlayers(players) {
    players.forEach((player, i) => {
      const offset = i * 0.1
      this.context.fillStyle = player.colorScheme()[i]
      this.context.fillRect(
        player.position.x + 0.1,
        player.position.y + offset,
        0.2,
        0.2
      )
    })
  }

  drawText(roll, player) {
    this.context.font = '1px Arial';
    this.context.fillText(`${player.name} rolled ${roll}`, 2, 2);
  }

}
