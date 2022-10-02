from ast import Num
from flask import Flask, render_template
app = Flask(__name__)

@app.route('/')
def hello_flask():
    return render_template("index.html")

@app.route('/play')
@app.route('/play/<int:num>')
@app.route('/play/<int:num>/<string:color>')
def play_blocks (num = 3, color = "lightblue"):
    return render_template("index1.html", num=num, color=color)

if __name__ == '__main__':
    app.run(debug=True)