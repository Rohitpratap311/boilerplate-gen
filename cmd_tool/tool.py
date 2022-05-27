from fileinput import filename
from pyfiglet import Figlet
import requests

f = Figlet(font='slant')
print(f.renderText('Welcome to NTP'))

front_map = ["React", "Angular"]
back_map = ["FastAPI", "Flask", "Springboot"]

def download_url(url, save_path="NTP.zip", chunk_size=128):
    r = requests.get(url, stream=True)
    with open(save_path, 'wb') as fd:
        for chunk in r.iter_content(chunk_size=chunk_size):
            fd.write(chunk)

while True:
    print("\nPlease select your Tech-stack from the below options:\n")
    print("Select Front-end Framework. Type the Serial No.(Eg. '1' for React): \n 1. ReactJS\n 2. AngularJS")
    frontend = int(input())

    print("\nSelect Back-end Framework. Type the Serial No.(Eg. '1' for FastAPI): \n 1. FastAPI\n 2. Flask\n 3. Springboot")
    backend = int(input())

    if 0<frontend<=len(front_map) and 0<backend<=len(back_map):
        print("Please wait. Your file is being generated....")
        url = "https://aerothon-boilerplate-gen.herokuapp.com/generate/{}/{}".format(front_map[frontend-1],back_map[backend-1])
        fileName="NTP_{}_{}.zip".format(front_map[frontend-1],back_map[backend-1])
        # requests.get(url, allow_redirects=True)
        download_url(url, fileName)
        print("Tech-Stack Generated!! You can find it in the source folder")
    else:
        print("ERROR: Please enter a valid Serial no.!")
        continue

    print("Do you want to Continue?(y/n)")
    if input().lower()=='n':
        print("Thank you for using our Command line Tool")
        break

print(f.renderText('Hope to See you again, Bye!'))