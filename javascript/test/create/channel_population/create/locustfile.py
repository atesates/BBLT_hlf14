# locust test file

import random
from locust import HttpUser, task, between

class WebsiteUser(HttpUser):
    # wait between 2-3 seconds
    wait_time = between(0.1, 0.3)
    #wait_time = constant_pacing(1)
    

    @task
    def add_event(self):
        self.client.get("/event/createevent")
