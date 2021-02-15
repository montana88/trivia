import Player from '@/Player'
import Timer from '@/Timer'
import Renderer from '@/Renderer'
import Board from '@/Board'

/**
 * Init of the game Trivia.
 * This class is the controller of the game
 */
export default class Trivia {
  constructor() {
    // Renderer of the board and players
    this.renderer = new Renderer()

    // Player who has to roll
    this.currentPlayerId = 0

    // Make sure players don't have the same name
    this.players = []

    // init board
    this.board = new Board()

    this.roll = 0
  }

  /**
   * Add new player to the game
   *
   * @param name
   * @returns {Trivia}
   */
  addPlayer(name) {
    const partaker = new Player(name)
    this.players.push(partaker)

    return this
  }

  /**
   * Start the game and call the renderer to draw on the canvas
   *
   * @returns {boolean}
   */
  start() {
    if (!this.isPlayable()) {
      console.log('not enough players')
      return false
    }
    const timer = new Timer()
    const canvas = document.getElementById('trivia')

    this.renderer.init(canvas, async () => {
      this.addClickHandler()

      timer.update = () => {
        this.renderer.render(this.board, this.players, this.roll, this.players[this.currentPlayerId])
      }
    })

    timer.start()

    return true
  }

  /**
   * Click handler to roll the dice
   */
  addClickHandler() {
    this.renderer.canvas.addEventListener('click', (e) => {
      this.userRoll()
    })
  }

  /**
   * Add actions when user rolles the dice
   */
  userRoll() {
    const currentPlayer = this.players[this.currentPlayerId]
    this.roll = currentPlayer.roll()
    let category
    let answer

    if(currentPlayer.penaltyBox) {
      if(this.roll % 2 !== 0) {
        currentPlayer.penaltyBox = true;
        currentPlayer.move(this.roll)

        // get category after player moves
        category = this.board.arena[currentPlayer.position.y][currentPlayer.position.x] - 1
        answer = this.board.ask(category)
        const categoryName = this.board.cards.settings[category].category

        this.updatePlayerStatus(answer, currentPlayer, categoryName)
      } else {
        console.log('user did not roll an even number')
      }
    } else {
      currentPlayer.move(this.roll)
      // get category after player moves
      category = this.board.arena[currentPlayer.position.y][currentPlayer.position.x] - 1
      answer = this.board.ask(category)
      const categoryName = this.board.cards.settings[category].category
      this.updatePlayerStatus(answer, currentPlayer, categoryName)
    }

    this.setNextPlayer()

  }

  /**
   * Based on the user roll and answer to the question the player status is updated
   *
   * @param answer
   * @param player
   * @param categoryName
   */
  updatePlayerStatus(answer, player, categoryName) {
    player.penaltyBox = !answer
    if (answer && player.canWinPurses()) {
      player.addPurse(categoryName)
    }
    if (player.isWinner()) {
      alert(`${player.name} is the winner of the game`)
    }
  }

  /**
   * Iterate over the playes
   */
  setNextPlayer() {
    this.currentPlayerId += 1
    if (this.currentPlayerId > (this.players.length - 1)) {
      this.currentPlayerId = 0
    }
  }

  /**
   * Check if game can start
   * @returns {boolean}
   */
  isPlayable() {
    return this.players.length > 1
  }
}