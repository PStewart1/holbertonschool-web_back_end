#!/usr/bin/env python3
""" Change school topics """
import pymongo
from typing import List


def update_topics(mongo_collection, name: str, topics: List[str]) -> None:
    """ changes all topics of a school document based on the name """
    if mongo_collection is None or mongo_collection == {}:
        return []
    mongo_collection.update_many(
        {"name": name},
        {"$set": {"topics": topics}}
    )
