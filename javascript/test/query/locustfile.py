# locust test file

import random
from locust import HttpUser, task, between
# randomly generate id
from random import randrange

class WebsiteUser(HttpUser):
    # wait between 2-3 seconds
    wait_time = between(0.1, 0.3)

    @task
    def query_event(self):
        #id=randrange(1,10)
        #self.client.post("/event/queryevent",{"id":"000000000"+str(id)})
        self.client.post("/event/queryevent",{"id":"1593357501530"})
