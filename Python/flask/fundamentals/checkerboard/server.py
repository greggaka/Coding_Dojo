from flask import Flask, render_template
app = Flask (__name__)

@app.route('/')
@app.route('/<int:num1>')
@app.route('/<int:num1>/<int:num2>')
@app.route('/<int:num1>/<int:num2>/<color1>/<color2>')
def checkerboard(num1 = 8, num2=8,):
    return render_template ('index.html', num1=int(num1/2), num2=int(num2/2))

if __name__ == "__main__":
    app.run(debug=True)