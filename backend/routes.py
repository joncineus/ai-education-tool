from flask import request, jsonify
from models import db, User, Class, Note, Quiz
from openai_utils import get_ai_response, generate_easy_quiz_from_notes, generate_medium_quiz_from_notes, generate_hard_quiz_from_notes

# Route to create a class
def create_class():
    data = request.get_json()
    class_name = data['name']
    class_description = data['description']
    
    # Create a new class instance
    new_class = Class(name=class_name, description=class_description)
    
    # Add it to the session and commit
    db.session.add(new_class)
    db.session.commit()

    # Return the response with the class data
    return jsonify({
        "id": new_class.id,  # Use the ID from the new class instance
        "name": new_class.name,
        "description": new_class.description
    }), 201


def upload_notes():
    data = request.get_json()
    class_id = data['class_id']
    title = data['title']
    content = data['content']
    
    new_note = Note(class_id=class_id, title=title, content=content)
    db.session.add(new_note)
    db.session.commit()
    return jsonify({"message": "Note uploaded successfully!"}), 201

# Route to interact with AI (ChatGPT)
def chat_with_ai():
    data = request.get_json()
    user_query = data['query']
    class_id = data['class_id']
    
    notes = Note.query.filter_by(class_id=class_id).all()
    notes_content = " ".join([note.content for note in notes])
    
    # Get AI response
    response = get_ai_response(notes_content, user_query)
    
    return jsonify({"response": response}), 200

def generate_easy_quiz():
    data = request.get_json()
    class_id = data['class_id']
    
    notes = Note.query.filter_by(class_id=class_id).all()
    notes_content = " ".join([note.content for note in notes])
    
    # Generate quiz questions from AI
    quiz_data = generate_easy_quiz_from_notes(notes_content)
    
    # Store quiz in DB and return the generated quiz
    quiz_questions = []
    for quiz in quiz_data:
        question = quiz['question']
        options = quiz['options']
        correct_answer = quiz['correct_answer']

        # Create a new Quiz object and add it to the database
        new_quiz = Quiz(
            class_id=class_id,
            question=question,
            correct_answer=correct_answer,
            options=options
        )
        db.session.add(new_quiz)
        quiz_questions.append({
            "class_id": class_id,
            "question": question,
            "options": options,
            "correct_answer": correct_answer
        })
    db.session.commit()
    
    return jsonify({
        "message": "Quiz generated successfully!",
        "quiz_questions": quiz_questions
    }), 200

def generate_medium_quiz():
    data = request.get_json()
    class_id = data['class_id']
    
    notes = Note.query.filter_by(class_id=class_id).all()
    notes_content = " ".join([note.content for note in notes])
    
    # Generate quiz questions from AI
    quiz_data = generate_medium_quiz_from_notes(notes_content)
    
    # Store quiz in DB and return the generated quiz
    quiz_questions = []
   
    for quiz in quiz_data:
        question = quiz['question']
        options = quiz['options']
        correct_answer = quiz['correct_answer']

        # Create a new Quiz object and add it to the database
        new_quiz = Quiz(
            class_id=class_id,
            question=question,
            correct_answer=correct_answer,
            options=options
        )
        db.session.add(new_quiz)
        quiz_questions.append({
            "class_id": class_id,
            "question": question,
            "options": options,
            "correct_answer": correct_answer
        })
    db.session.commit()
    
    return jsonify({
        "message": "Quiz generated successfully!",
        "quiz_questions": quiz_questions
    }), 200



def generate_hard_quiz():
    data = request.get_json()
    class_id = data['class_id']
    
    notes = Note.query.filter_by(class_id=class_id).all()
    notes_content = " ".join([note.content for note in notes])
    
    # Generate quiz questions from AI
    quiz_data = generate_hard_quiz_from_notes(notes_content)
    
    # Store quiz in DB and return the generated quiz
    quiz_questions = []
    for quiz in quiz_data:
        question = quiz['question']
        options = quiz['options']
        correct_answer = quiz['correct_answer']

        # Create a new Quiz object and add it to the database
        new_quiz = Quiz(
            class_id=class_id,
            question=question,
            correct_answer=correct_answer,
            options=options
        )
        db.session.add(new_quiz)
        quiz_questions.append({
            "class_id": class_id,
            "question": question,
            "options": options,
            "correct_answer": correct_answer
        })
    db.session.commit()
    
    return jsonify({
        "message": "Quiz generated successfully!",
        "quiz_questions": quiz_questions
    }), 200
