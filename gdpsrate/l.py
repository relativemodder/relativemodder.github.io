from itertools import cycle
import base64
import requests

def xor(data, key):
    return ''.join(chr(a ^ ord(b)) for (a, b) in zip(data, cycle(key)))

password = "260604406062"
gjp = password.encode()
gjp = xor(gjp,'37526').encode()
gjp = base64.b64encode(gjp).decode()

dat = {
    'userName': 'shlupka',
    'password': '260604406062'
}
req = requests.post("http://servers.gdhost.pe.hu/HxTYn/accounts/loginGJAccount.php", data=dat)
print(gjp)
print(req.text)