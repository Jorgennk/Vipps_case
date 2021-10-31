import requests #for the api calling
import re #for regex matching to count
from urllib.parse import unquote #



def wiki_query(in_query):



    #Format the query properly and make it a json request
    response = requests.get(
        'https://en.wikipedia.org/w/api.php',
        params={
            'action': 'parse',
            'format': 'json',
            'page': re.sub('%20', "_", in_query),
            'prop': 'text',
            'section': '0', #This gives only the first section, leave it here because it was in the e-mail
        }
    ).json()

    #print(response['parse'])

    #Regex-match for the query
    counter = len(re.findall(unquote(in_query).lower(), str(response['parse']['text']).lower()))

    return counter


#Testing
#wiki_query("George")
#print(wiki_query("George"))