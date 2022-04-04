import React from "react";

import { useState } from "react";

import { Row, Col, Form } from "react-bootstrap";

import { Button } from "react-bootstrap";

import { Question, QuestionType } from "../interfaces/question";

import { addOption, makeBlankQuestion } from "../objects";
import { toMarkdown } from "../objects";

interface Quiz {
    title: string;
    description: string;
    questions: Question[];
}

export function makeBlankQuiz(title: string, description: string): Quiz {
    const result: Quiz = {
        title: title,
        description: description,
        questions: [
            makeBlankQuestion(0, "What are you", "short_answer_question")
        ]
    };

    return result;
}

function initQuizzes(): Quiz[] {
    let result: Quiz[] = [makeBlankQuiz("Uno", "The First One")];
    result[0].questions[0] = addOption(result[0].questions[0], "That");

    result = [...result.concat(makeBlankQuiz("Dech", "Freaking Twofer"))];
    result = [
        ...result.concat(
            makeBlankQuiz(
                "How Many Nos Can It DO?",
                "Quiz about the to be continued saga of now"
            )
        )
    ];

    result = [
        ...result.concat(
            makeBlankQuiz(
                "Hubert",
                "Dubert Zoobert McRooter running down two flights of epic"
            )
        )
    ];
    result = [
        ...result.concat(makeBlankQuiz("Broperty", "Holy Freaking Crap Louis"))
    ];
    return result;
}

export function makeQuestionFull(
    id: number,
    name: string,
    type: QuestionType,
    body: string,
    expected: string,
    options: string[],
    points: number,
    published: boolean
): Question {
    const result: Question = {
        id: id,
        name: name,
        type: type,
        body: body,
        expected: expected,
        options: options,
        points: points,
        published: published
    };

    return result;
}

function ShowQuestions({
    id,
    name,
    body,
    type,
    options,
    expected,
    points,
    published
}: Question) {
    return (
        <div>
            <div>
                <span>{published ? "published " : "published "}</span>
                <h3>
                    {id}. {name}{" "}
                </h3>
            </div>
            <p>{body}</p>
        </div>
    );
}

function ShowQuiz({ title, description, questions }: Quiz): JSX.Element {
    const [showQuestions, setShowQuestions] = useState<boolean>(false);

    return (
        <div>
            <h2>{title}</h2> <p>{description}</p>
            <Button onClick={() => setShowQuestions(!showQuestions)}>
                {questions.length} questions
            </Button>
            {showQuestions ? (
                questions.map((question: Question) => (
                    <div key={question.name}>
                        <ShowQuestions
                            id={question.id}
                            name={question.name}
                            body={question.body}
                            type={question.type}
                            options={question.options}
                            expected={question.expected}
                            points={question.points}
                            published={question.published}
                        ></ShowQuestions>
                    </div>
                ))
            ) : (
                <div></div>
            )}
        </div>
    );
}

export function Quizzer(): JSX.Element {
    const [points, setPoints] = useState<number>(0);
    const [quizzes, setQuizzes] = useState<Quiz[]>([...initQuizzes()]);

    const [showPublished, setShowPublished] = useState<boolean>(true);

    const [quizName, setQuizName] = useState<string>("");
    const [quizDescription, setQuizDescription] = useState<string>("");

    function updateQuizName(event: React.ChangeEvent<HTMLInputElement>) {
        setQuizName(event.target.value);
    }

    function updateQuizDescription(event: React.ChangeEvent<HTMLInputElement>) {
        setQuizDescription(event.target.value);
    }

    function addQuiz() {
        const description = quizDescription == "" ? "" : quizDescription;
        if (quizName != "") {
            setQuizzes(quizzes.concat(makeBlankQuiz(quizName, description)));

            setQuizName("");
            setQuizDescription("");
        }
    }

    function deleteQuiz() {
        setQuizzes(quizzes.filter((quiz: Quiz) => quiz.title != quizName));
        setQuizName("");
        setQuizDescription("");
    }

    const [questionName, setQuestionName] = useState<string>("");
    const [questionBody, setQuestionBody] = useState<string>("");
    const [questionType, setQuestionType] = useState<boolean>(false);

    function updateQuestionName(event: React.ChangeEvent<HTMLInputElement>) {
        setQuestionName(event.target.value);
    }

    function updateQuestionBody(event: React.ChangeEvent<HTMLInputElement>) {
        setQuestionBody(event.target.value);
    }

    function addQuestion() {
        const index: number = quizzes.findIndex(
            (quiz: Quiz) => quiz.title == quizName
        );

        if (index != -1) {
            const length: number = quizzes[index].questions.length;

            const type: QuestionType = questionType
                ? "multiple_choice_question"
                : "short_answer_question";

            quizzes[index].questions = quizzes[index].questions.concat(
                makeBlankQuestion(length, questionName, type)
            );

            setQuestionName("");
            setQuestionBody("");
        } else {
            const description = quizDescription == "" ? "" : quizDescription;
            if (quizName != "") {
                setQuizzes(
                    quizzes.concat(makeBlankQuiz(quizName, description))
                );

                const length: number = quizzes[index].questions.length;

                const type: QuestionType = questionType
                    ? "multiple_choice_question"
                    : "short_answer_question";

                quizzes[index].questions = quizzes[index].questions.concat(
                    makeBlankQuestion(length, questionName, type)
                );

                setQuizName("");
                setQuizDescription("");
                setQuestionName("");
                setQuestionBody("");
            }
        }
    }

    function removeQuestion() {
        const index: number = quizzes.findIndex(
            (quiz: Quiz) => quiz.title == quizName
        );

        if (index != -1) {
            quizzes[index].questions = quizzes[index].questions.filter(
                (question: Question) => question.name != questionName
            );
            setQuestionName("");
            setQuestionBody("");
        }
    }

    return (
        <div>
            <Row>
                <Col>
                    {quizzes.map((quiz: Quiz) => (
                        <div
                            key={quiz.title}
                            style={{ backgroundColor: "grey" }}
                        >
                            <ShowQuiz
                                title={quiz.title}
                                description={quiz.description}
                                questions={quiz.questions}
                            ></ShowQuiz>
                        </div>
                    ))}
                </Col>
                <Col>
                    <p>Points Earned: {points}</p>
                    <div>
                        <Form.Check
                            inline
                            type="checkbox"
                            checked={showPublished}
                            label="Show Published"
                            onChange={() => setShowPublished(!showPublished)}
                        ></Form.Check>

                        <Form.Control
                            type="text"
                            placeholder="Quiz Name"
                            onChange={updateQuizName}
                        ></Form.Control>
                        <Form.Control
                            type="text"
                            placeholder="New Quiz Description"
                            onChange={updateQuizDescription}
                        ></Form.Control>
                        <button onClick={addQuiz}>Add Quiz</button>
                        <button onClick={deleteQuiz}>Remove Quiz</button>
                        <Form.Control
                            type="text"
                            placeholder="Question Name"
                            onChange={updateQuestionName}
                        ></Form.Control>
                        <Form.Control
                            type="text"
                            placeholder="Question Body"
                            onChange={updateQuestionBody}
                        ></Form.Control>
                        <button onClick={addQuestion}>Add Question</button>
                        <button onClick={removeQuestion}>Remove Remove</button>
                    </div>
                </Col>
            </Row>
        </div>
    );
}
