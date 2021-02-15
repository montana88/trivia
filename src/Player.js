export default class Player {
  constructor(name, color) {
    this.name = name
    this.places = [
      {x: 0, y: 0, purses: true},
      {x: 1, y: 0, purses: false},
      {x: 2, y: 0, purses: false},
      {x: 3, y: 0, purses: false},
      {x: 4, y: 0, purses: false},
      {x: 5, y: 0, purses: false},
      {x: 6, y: 0, purses: false},
      {x: 7, y: 0, purses: false},
      {x: 8, y: 0, purses: true},
      {x: 8, y: 1, purses: false},
      {x: 8, y: 2, purses: false},
      {x: 8, y: 3, purses: false},
      {x: 8, y: 4, purses: false},
      {x: 8, y: 5, purses: false},
      {x: 8, y: 6, purses: false},
      {x: 8, y: 7, purses: false},
      {x: 8, y: 8, purses: true},
      {x: 7, y: 8, purses: false},
      {x: 6, y: 8, purses: false},
      {x: 5, y: 8, purses: false},
      {x: 4, y: 8, purses: false},
      {x: 3, y: 8, purses: false},
      {x: 2, y: 8, purses: false},
      {x: 1, y: 8, purses: false},
      {x: 0, y: 8, purses: true},
      {x: 0, y: 7, purses: false},
      {x: 0, y: 6, purses: false},
      {x: 0, y: 5, purses: false},
      {x: 0, y: 4, purses: false},
      {x: 0, y: 3, purses: false},
      {x: 0, y: 2, purses: false},
      {x: 0, y: 1, purses: false},
    ]
    this.currentPosition = 0
    this.position = this.places[this.currentPosition]
    this.inPenaltyBox = false
    this.purses = []
  }

  move(steps) {
    this.currentPosition += steps
    if (this.currentPosition > (this.places.length - 1)) {
      this.currentPosition = this.currentPosition - this.places.length
    }
    this.position = this.places[this.currentPosition]
  }

  roll() {
    return Math.floor(Math.random()*6) + 1
  }

  canWinPurses() {
    return this.places[this.currentPosition].purses
  }

  addPurse(category) {
    if (this.purses.indexOf(category) === -1) {
      this.purses.push(category)
    }
  }

  isWinner() {
    return this.purses.length === 4
  }

  set penaltyBox(set) {
    this.inPenaltyBox = set
  }

  get penaltyBox() {
    return this.inPenaltyBox
  }

  colorScheme() {
    return [
      '#FF8E0D',
      '#FFE138',
      '#FF0000'
    ]
  }
}