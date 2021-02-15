import Question from '@/Question'

export default class Board {
  constructor() {

    this.colors = [
      null,
      '#FF0D72',
      '#0DC2FF',
      '#0DFF72',
      '#F538FF',
    ]

    this.cards = new Question(this.colors)

    this.arena = [
      [1, 2, 3, 4, 1, 2, 3, 4, 2],
      [3, 0, 0, 0, 0, 0, 0, 0, 3],
      [2, 0, 0, 0, 0, 0, 0, 0, 4],
      [1, 0, 0, 0, 0, 0, 0, 0, 1],
      [4, 0, 0, 0, 0, 0, 0, 0, 2],
      [3, 0, 0, 0, 0, 0, 0, 0, 3],
      [2, 0, 0, 0, 0, 0, 0, 0, 4],
      [1, 0, 0, 0, 0, 0, 0, 0, 1],
      [4, 2, 1, 4, 3, 2, 1, 4, 3]
    ]

  }

  ask(category) {
      const card = this.cards.get(category)
      const userInput = prompt(card.question)
      return this.validate(card, userInput)
  }

  validate(card, userInput) {
    return card.answer === userInput
  }

}