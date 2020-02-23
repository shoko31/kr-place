#!/usr/bin/python

import sys
import argparse
import json
import csv


def generate_questions(input, output, delimiter):
    print(input)
    print(output)
    print(delimiter)
    questions = {}
    csv_input = csv.reader(input, dialect=csv.excel, delimiter=';')
    for line in csv_input:
        cols = line
        try:
            level = str(int(cols[0]) - 1)
            if level not in questions:
                questions[level] = []
            questions[level].append({
                "question": cols[1].replace('\\r\\n', '<br />'),
                "answers": [
                    {"text": cols[2], "valid": True},
                    {"text": cols[3], "valid": False},
                    {"text": cols[4], "valid": False},
                    {"text": cols[5], "valid": False}
                ]
            })
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
