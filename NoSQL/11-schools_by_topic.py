#!/usr/bin/env python3
""" Where can I learn Python? """
import pymongo
from typing import List


def schools_by_topic(mongo_collection, topic: str) -> List:
    """ returns the list of school having a specific topic """
    if mongo_collection is None or mongo_collection == {}:
        return []
    return mongo_collection.find({"topics": topic})
