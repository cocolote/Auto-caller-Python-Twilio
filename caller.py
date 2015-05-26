import os
from flask import Flask
from flask import Response
from flask import render_template
from twilio.rest import TwilioRestClient
import twilio.twiml
import praw

app = Flask(__name__)

@app.route('/')
def home():
  return render_template('home.html')

@app.route('/make_call')
def make_call():
  account_sid = os.environ['ACCOUNT_SID']
  auth_token = os.environ['AUTH_TOKEN']
  client = TwilioRestClient(account_sid, auth_token)

  call = client.calls.create(to="+13054406756",
                             from_="+16175130992",
                             # url="http://127.0.0.1:5000/message")
                             url="http://obscure-dawn-3571.herokuapp.com/message")

  return "Call in progress"

@app.route('/message', methods=['GET','POST'])
def message():
  r = praw.Reddit(user_agent='web_caller_zeke')
  titles = r.get_subreddit('technology').get_top(limit=1)
  
  resp = twilio.twiml.Response()
  resp.say("Hey Chris!. How is it going?.\
  This is Ezequiel with some news from Reddit.")
  for x in titles:
    resp.say(str(x))
  resp.say("Cheers!")

  return Response(str(resp), mimetype='text/xml')

if __name__ == "__main__":
  app.run(debug=True)
