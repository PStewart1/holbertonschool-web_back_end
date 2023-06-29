#!/usr/bin/env python3
""" Log stats  """
from pymongo import MongoClient


if __name__ == "__main__":
    """ provides some stats about Nginx logs stored in MongoDB """
    client = MongoClient('mongodb://127.0.0.1:27017')
    nginx_collection = client.logs.nginx
    print("{} logs".format(nginx_collection.count_documents({})))
    print("Methods:")
    methods = ["GET", "POST", "PUT", "PATCH", "DELETE"]

    for method in methods:
        print("\tmethod {}: {}".format(
            method, nginx_collection.count_documents({"method": method})))

    print("{} status check".format(
        nginx_collection.count_documents(
            {"method": "GET", "path": "/status"}
        ))
    )