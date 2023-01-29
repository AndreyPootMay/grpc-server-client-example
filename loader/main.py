import time
from locust import HttpUser, task
import json
import random

class QuickstartUser(HttpUser):
    casos = []
    with open('cases_list.json') as json_file:
        data = json.load(json_file)
        casos.extend(data)

    @task
    def insert_case(self):
        time.sleep(1)
        response = self.client.post("/cases/addCase",json=random.choice(self.casos))
        json_response_dict = response.json()
        print(response.json())
