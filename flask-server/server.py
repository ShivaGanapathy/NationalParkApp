from flask import Flask
import requests
import json

app = Flask(__name__)

#Members Api Route
@app.route("/activities", methods=["GET"])
def members():
    req = requests.get("https://developer.nps.gov/api/v1/activities?limit=50&start=0&api_key=pwVAaI7eyJ3qGEpakWoicbKA0kCPdzM6KVyeH2mB")
   
    json_data = {"members":[]}
   
    for item in req.json().get("data"):
        
        json_data["members"].append(item["name"])
    return json_data


#Parks Api Route
@app.route("/parks/<activity>", methods=["GET"])
def parks():
    print("this happenned")
    req = requests.get(f"https://developer.nps.gov/api/v1/activities/parks?q={activity}&api_key=pwVAaI7eyJ3qGEpakWoicbKA0kCPdzM6KVyeH2mB")
   
    json_data = {"members":[]}
    
    for item in req.json().get("data"):
        
        json_data["members"].append(item["name"])
    return json_data


if __name__ == "__main__":
    app.run(debug=True)
