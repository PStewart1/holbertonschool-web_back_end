#!/usr/bin/env python3
""" Insert a document in Python """
import pymongo


def insert_school(mongo_collection, **kwargs):
    """ inserts a new document in a collection based on kwargs """
    if mongo_collection is None or mongo_collection == {}:
        return []
    new_school = mongo_collection.insert_one(kwargs)
    return new_school.inserted_id