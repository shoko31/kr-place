#!/usr/bin/python

import sys
import argparse
import json
import csv


def generate_questions(input, output, delimiter):
    print(input)
    print(output)
    print(delimiter)
    QUESTION_COLUMN = 2
    SUB_QUESTION_COLUMN = QUESTION_COLUMN + 1
    SUB_QUESTION_COUNT = 4
    ANSWER_COLUMN = SUB_QUESTION_COLUMN + SUB_QUESTION_COUNT
    FALSE_ANSWER_COLUMN = ANSWER_COLUMN + 1
    FALSE_ANSWER_COUNT = 4
    questions = {}
    csv_input = csv.reader(input, dialect=csv.excel, delimiter=';')
    for line in csv_input:
        cols = line
        try:
            level = str(int(cols[0]) - 1)
            if level not in questions:
                questions[level] = []
            new_question = {
                "question": {
                    "type": int(cols[1]),
                    "text": cols[QUESTION_COLUMN],
                    "sub_questions": []
                },
                "answers": [
                    {"text": cols[ANSWER_COLUMN], "valid": True}
                ]
            }
            for k in range(FALSE_ANSWER_COUNT):
                if cols[k+FALSE_ANSWER_COLUMN] and cols[k+FALSE_ANSWER_COLUMN] != "":
                    new_question["answers"].append(
                        {"text": cols[k+FALSE_ANSWER_COLUMN], "valid": False})
            for k in range(SUB_QUESTION_COUNT):
                if cols[k+SUB_QUESTION_COLUMN] and cols[k+SUB_QUESTION_COLUMN] != "":
                    new_question["question"]["sub_questions"].append(
                        cols[k+SUB_QUESTION_COLUMN])
            questions[level].append(new_question)
        except Exception as e:
            print(str(e))
            pass
    output.write("const questions = ")
    output.write(json.dumps(questions, ensure_ascii=False))
    output.write("\r\n\r\nexport default questions;\r\n")
    print('exported')
    return questions


if __name__ == '__main__':
    parser = argparse.ArgumentParser(
        description="Generate js questions based on csv file")
    parser.add_argument(
        'input', type=argparse.FileType('r', encoding='utf8'))
    parser.add_argument(
        'output', type=argparse.FileType('w', encoding='utf8'))
    parser.add_argument('--delimiter', default=';')
    args = parser.parse_args()
    generate_questions(args.input, args.output, args.delimiter)
