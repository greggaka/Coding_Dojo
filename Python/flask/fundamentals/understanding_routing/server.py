from flask import Flask
app = Flask(__name__)

@app.route('/')
def hello_world():
    return "Hello World!"

@app.route('/dojo')
def dojo():
    return 'Dojo!'

@app.route('/say/<string:person>')
def say(person):
    return f'Hi {person}! How ya doing today?'

@app.route('/repeat/<int:num>/<string:word>')
def repeat(num, word):
    return f'this page should print {word} {num} times: {word * num}'

if __name__ == "__main__":
    app.run(debug=True)