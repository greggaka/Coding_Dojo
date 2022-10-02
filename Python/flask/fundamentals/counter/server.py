from flask import Flask, render_template, redirect, session
app = Flask(__name__)
app.secret_key = "abcxyz123"

@app.route('/')
def page_visit():
    count = 1
    if "visitors" in session:
        session["visitors"] += 1
    else:
        session["visitors"] = count
    return render_template ("index.html")

@app.route('/destroy_session')
def reset_counter():
    if "visitors" in session:
        session.clear()
    return redirect('/')

if __name__ == "__main__":
    app.run(debug=True)
    
    # if "visits" in session:
    #     session["visits"] += 1