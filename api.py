from flask import Flask, jsonify, request
from flask_cors import CORS, cross_origin

from wiki_query import wiki_query
from wiki_query import wiki_query

app = Flask(__name__)
cors = CORS(app)


#defualt page for testing, not really the page you are looking for
@app.route("/", methods=['GET', 'POST'])
@cross_origin(origin='*')
def index():
	if (request.method == 'POST'):
		some_json = request.get_json()
		return jsonify({'you sent: ': some_json})
	else:
		some_json = jsonify({'message': 'This is not the page you\'re looking for!'}, 
		{"author": "Obi-Wan Kenobi"})
		return some_json


#Api, runs the wikipedia query based on
@app.route('/api/<instr>', methods = ['GET'])
def number_words_wikipeida(instr):
	number_of_times_mentioned = wiki_query(instr)
	response = jsonify({'result': number_of_times_mentioned})
	return response

if __name__ == '__main__':
	app.run(debug=True)