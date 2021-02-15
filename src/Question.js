export default class Question {
  constructor() {
    // question = {question: `Pop Question ${i}`, answer: `${i}`}
    this.settings = [
      {
        category: 'Pop',
        questions: []
      },
      {
        category: 'Science',
        questions: []
      },
      {
        category: 'Sports',
        questions: []
      },
      {
        category: 'Rock',
        questions: []
      },
    ]

    this.createQuestions()
  }

  createQuestions() {
    this.settings.forEach(option => {
      for(var i = 0; i < 50; i++){
        option.questions.push({
          question: `${option.category} Question ${i}`,
          answer: `${i}`
        });
      }
    })
  }

  get(category) {
    const questionsOfCategory = this.settings[category].questions
    const question = questionsOfCategory.shift()

    questionsOfCategory.push(question)

    return question
  }
}