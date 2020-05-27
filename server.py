from flask import Flask
from flask import jsonify
import random

app = Flask(__name__)

def getAnswer():
    if(random.randint(0, 1)):
        return 'yes'
    else:
        return 'no'

    return 'Error'

@app.route('/playAgain')
def answer():     
    return jsonify(answer=getAnswer())