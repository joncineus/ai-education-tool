from flask import Flask
from models import db
from routes import create_class, upload_notes, chat_with_ai, generate_easy_quiz,generate_medium_quiz,generate_hard_quiz
from config import Config

# Initialize Flask app and database
app = Flask(__name__)
app.config.from_object(Config)
db.init_app(app)


with app.app_context():
    db.create_all()  # Creates tables based on models

# Register routes
# app.add_url_rule('/create_user', 'create_user', create_user, methods=['POST'])
app.add_url_rule('/create_class', 'create_class', create_class, methods=['POST'])
app.add_url_rule('/upload_notes', 'upload_notes', upload_notes, methods=['POST'])
app.add_url_rule('/chat_with_ai', 'chat_with_ai', chat_with_ai, methods=['POST'])
app.add_url_rule('/generate_easy_quiz', 'generate_easy_quiz', generate_easy_quiz, methods=['POST'])
app.add_url_rule('/generate_medium_quiz', 'generate_medium_quiz', generate_medium_quiz, methods=['POST'])
app.add_url_rule('/generate_hard_quiz', 'generate_hard_quiz', generate_hard_quiz, methods=['POST'])

if __name__ == '__main__':
    app.run(debug=True)