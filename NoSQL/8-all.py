#!/usr/bin/env python3
""" List all documents in Python """
import pymongo


def list_all(mongo_collection):
    """ lists all documents in a collection """
    if mongo_collection is None or mongo_collection == {}:
        return []
    return mongo_collection.find()