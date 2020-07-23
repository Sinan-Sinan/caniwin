from flask import Flask
from flask import jsonify
import random

app = Flask(__name__)

def getAnswer():
    if(random.randint(0, 1)):
        return 'Yes'
    else:
        return 'No'

    return 'Error'

@app.route('/playAgain')
def answer():     
    return jsonify(answer=getAnswer())
