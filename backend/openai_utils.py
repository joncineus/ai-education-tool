import openai
from config import Config

# Setup OpenAI API key
openai.api_key = Config.OPENAI_API_KEY

def get_ai_response(notes_content, user_query):
    prompt = f"Here are the class notes: {notes_content}\nUser query: {user_query}"
    
    response = openai.ChatCompletion.create(
        model="gpt-3.5-turbo",  
        messages=[
            {"role": "system", "content": "You are a helpful assistant."},
            {"role": "user", "content": prompt}
        ],
        max_tokens=150
    )
    
    return response['choices'][0]['message']['content'].strip()


import openai

def generate_easy_quiz_from_notes(notes_content):
    prompt = f"""
    Generate a easy-level quiz based on the following notes. For each quiz question, provide the following:
    - Question
    - 5 answer options
    - The correct answer
    The options should be diverse, and the correct answer should be clearly identifiable.
    Format:
    Question: Question text
    Options: [A), B), C), D), E)]
    Correct Answer: A) 
    
    Make sure you follow the format and make sure there is a correct answer.
    the format for the option and correct answer should be :
    Question: What is 2 + 2?
    Options: A) 3, B) 4, C) 5, D) 6, E) 7
    Correct Answer: B) 4
    Here are the notes: {notes_content}
    """
    
    response = openai.ChatCompletion.create(
        model="gpt-3.5-turbo",  # Or use another model like gpt-4 if available
        messages=[
            {"role": "system", "content": "You are a helpful assistant."},
            {"role": "user", "content": prompt}
        ],
        max_tokens=150
    )
    
    # Parse the response to extract quiz questions, options, and correct answers
    return parse_quiz_response(response['choices'][0]['message']['content'])

def generate_medium_quiz_from_notes(notes_content):
    prompt = f"""
    Generate a medium-level multi option quiz based on the following notes. For each quiz question, provide the following:
    - Question
    - 5 answer options
    - The correct answer
    The options should be diverse, and the correct answer should be clearly identifiable.
    Format:
    Question: Question text
    Options: [A), B), C), D), E)]
    Correct Answer: A) 
    
    Make sure you follow the format and make sure there is a correct answer.
    the format for the option and correct answer should be :
    Question: What is 2 + 2?
    Options: A) 3, B) 4, C) 5, D) 6, E) 7
    Correct Answer: B) 4

    Here are the notes: {notes_content}
    """
    
    response = openai.ChatCompletion.create(
        model="gpt-3.5-turbo",  # Or use another model like gpt-4 if available
        messages=[
            {"role": "system", "content": "You are a helpful assistant."},
            {"role": "user", "content": prompt}
        ],
        max_tokens=150
    )
    # Extract the response content
    response_content = response['choices'][0]['message']['content']
    # print("Response Content:", response_content)  # Debugging

    # Parse the response into structured quiz questions
    quiz_questions = parse_quiz_response(response_content)
    # print(quiz_questions)  # Debugging

    return quiz_questions


def generate_hard_quiz_from_notes(notes_content):
    prompt = f"""
    Generate a hard-level quiz based on the following notes. For each quiz question, provide the following:
    - Question
    - 5 answer options
    - The correct answer
    The options should be diverse, and the correct answer should be clearly identifiable.
    Format:
    Question: Question text
    Options: [A), B), C), D), E)]
    Correct Answer: A) 
    
    Make sure you follow the format and make sure there is a correct answer.
    the format for the option and correct answer should be :
    Question: What is 2 + 2?
    Options: A) 3, B) 4, C) 5, D) 6, E) 7
    Correct Answer: B) 4
    Here are the notes: {notes_content}
    """
    
    response = openai.ChatCompletion.create(
        model="gpt-3.5-turbo",  # Or use another model like gpt-4 if available
        messages=[
            {"role": "system", "content": "You are a helpful assistant."},
            {"role": "user", "content": prompt}
        ],
        max_tokens=150
    )
    
    # Parse the response to extract quiz questions, options, and correct answers
    return parse_quiz_response(response['choices'][0]['message']['content'])

def parse_quiz_response(response_content):
    """
    Parses AI-generated quiz responses into structured data.

    Args:
        response_content (str): The AI-generated quiz content.

    Returns:
        list: A list of parsed quiz questions, each as a dictionary.
    """
    lines = response_content.split("\n")  # Split by newlines
    quiz_questions = []
    current_question = {}

    for line in lines:
        line = line.strip()  # Remove extra whitespace

        if line.startswith("Question:"):
            current_question["question"] = line[len("Question:"):].strip()

        elif line.startswith("Options:"):
            options_text = line[len("Options:"):].strip()
            current_question["options"] = [option.strip() for option in options_text.split(",")]

        elif line.startswith("Correct Answer:"):
            current_question["correct_answer"] = line[len("Correct Answer:"):].strip()
            if current_question:
                quiz_questions.append(current_question)
                current_question = {}
    # print(f"Quiz Questions: {quiz_questions}")

    return quiz_questions
