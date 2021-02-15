import Trivia from '@/Trivia'

window.addEventListener('DOMContentLoaded', (event) => {
  const newGame = new Trivia()
  newGame
    .addPlayer('Chet')
    .addPlayer('Pat')
    .addPlayer('Sue')
    .start()
})