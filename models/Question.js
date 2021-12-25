export class Question {
  /**
   *
   * @param {string} text this is the text of the question
   * @param {string[]} choices this are the choices of the question
   * @param {string} answer this is the answer of the question
   */

  constructor(text, choices, answer) {
    // Properties
    this.text = text;
    this.choices = choices;
    this.answer = answer;
  }

  // Methods
  /**
   * 
   * @param {string} choice some text to gess
   * @returns {boolean} return true if answer is correct
   */
  correctAnswer(choice) {
    return choice === this.answer;
  }
}

const question = new Question();

question.correctAnswer()