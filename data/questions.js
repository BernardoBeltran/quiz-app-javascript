import { Question } from "../models/Question.js";
import { data } from "./data.js";

// Get new question array
export const questions = data.map(question => new Question(question.question, question.choices, question.answer));

