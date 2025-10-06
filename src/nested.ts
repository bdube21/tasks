import { Answer } from "./interfaces/answer";
import { Question, QuestionType } from "./interfaces/question";
import { makeBlankQuestion } from "./objects";

/**
 * Consumes an array of questions and returns a new array with only the questions
 * that are `published`.
 */
export function getPublishedQuestions(questions: Question[]): Question[] {
    /* Filter for if question is published */
    return questions.filter(
        (question: Question): Boolean => question.published,
    );
}

/**
 * Consumes an array of questions and returns a new array of only the questions that are
 * considered "non-empty". An empty question has an empty string for its `body` and
 * `expected`, and an empty array for its `options`.
 */
export function getNonEmptyQuestions(questions: Question[]): Question[] {
    /* Filter for non-empty strings or non-empty options array */
    return questions.filter(
        (question: Question): Boolean =>
            question.body.length > 0 ||
            question.expected.length > 0 ||
            question.options.length > 0,
    );
}

/***
 * Consumes an array of questions and returns the question with the given `id`. If the
 * question is not found, return `null` instead.
 */
export function findQuestion(
    questions: Question[],
    id: number,
): Question | null {
    const found = questions.find(
        (question: Question): Boolean => question.id === id,
    );
    return found !== undefined ? found : null;
}

/**
 * Consumes an array of questions and returns a new array that does not contain the question
 * with the given `id`.
 * Hint: use filter
 */
export function removeQuestion(questions: Question[], id: number): Question[] {
    /* Filter by ids that are not the one to remove */
    return questions.filter(
        (question: Question): Boolean => question.id !== id,
    );
}

/***
 * Consumes an array of questions and returns a new array containing just the names of the
 * questions, as an array.
 * Do not modify the input array.
 */
export function getNames(questions: Question[]): string[] {
    return questions.map((question: Question): string => question.name);
}

/**
 * Consumes an array of Questions and produces a corresponding array of
 * Answers. Each Question gets its own Answer, copying over the `id` as the `questionId`,
 * making the `text` an empty string, and using false for both `submitted` and `correct`.
 */
export function makeAnswers(questions: Question[]): Answer[] {
    const answers = questions.map(
        (questions: Question): Answer => ({
            questionId: questions.id,
            text: "",
            submitted: false,
            correct: false,
        }),
    );
    return answers;
}

/***
 * Consumes an array of Questions and produces a new array of questions, where
 * each question is now published, regardless of its previous published status.
 * Hint: as usual, do not modify the input questions array
 */
export function publishAll(questions: Question[]): Question[] {
    const questionsCopy = questions.map(
        (question: Question): Question => ({
            /* Copy the primitives */
            ...question,
            /* Shallow copy the options */
            options: [...question.options],
            published: true,
        }),
    );
    return questionsCopy;
}

/***
 * Consumes an array of Questions and produces a new array of the same Questions,
 * except that a blank question has been added onto the end. Reuse the `makeBlankQuestion`
 * you defined in the `objects.ts` file.
 * Hint: as usual, do not modify the input questions array
 */
export function addNewQuestion(
    questions: Question[],
    id: number,
    name: string,
    type: QuestionType,
): Question[] {
    const newQ = makeBlankQuestion(id, name, type);
    const questionsCopy = questions.map(
        (question: Question): Question => ({
            /* Copy the primitives */
            ...question,
            /* Shallow copy the options */
            options: [...question.options],
        }),
    );
    questionsCopy.push(newQ);
    return questionsCopy;
}

/***
 * Consumes an array of Questions and produces a new array of Questions, where all
 * the Questions are the same EXCEPT for the one with the given `targetId`. That
 * Question should be the same EXCEPT that its name should now be `newName`.
 * Hint: as usual, do not modify the input questions array,
 *       to make a new copy of a question with some changes, use the ... operator
 */
export function renameQuestionById(
    questions: Question[],
    targetId: number,
    newName: string,
): Question[] {
    const questionsCopy = questions.map(
        (question: Question): Question => ({
            /* Copy the primitives */
            ...question,
            /* Shallow copy the options */
            options: [...question.options],
        }),
    );
    const tarQ = questionsCopy.find(
        (question: Question): boolean => question.id === targetId,
    );
    if (tarQ !== undefined) tarQ.name = newName;
    return questionsCopy;
}

/**
 * Consumes an array of Questions and produces a new array of Questions, where all
 * the Questions are the same EXCEPT for the one with the given `targetId`. That
 * Question should be the same EXCEPT that its `option` array should have a new element.
 * If the `targetOptionIndex` is -1, the `newOption` should be added to the end of the list.
 * Otherwise, it should *replace* the existing element at the `targetOptionIndex`.
 *
 * Remember, if a function starts getting too complicated, think about how a helper function
 * can make it simpler! Break down complicated tasks into little pieces.
 *
 * Hint: you need to use the ... operator for both the question and the options array
 */
export function editOption(
    questions: Question[],
    targetId: number,
    targetOptionIndex: number,
    newOption: string,
): Question[] {
    const questionsCopy = questions.map(
        (question: Question): Question => ({
            /* Copy the primitives */
            ...question,
            /* Shallow copy the options */
            options: [...question.options],
        }),
    );
    const tarQ = questionsCopy.find(
        (question: Question): boolean => question.id === targetId,
    );
    if (tarQ !== undefined) {
        if (targetOptionIndex === -1) {
            tarQ.options.push(newOption);
        } else {
            tarQ.options[targetOptionIndex] = newOption;
        }
    }
    return questionsCopy;
}
