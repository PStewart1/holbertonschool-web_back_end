#!/usr/bin/env python3
"""
Writing strings to Redis
"""
import redis
from uuid import uuid4
from typing import Union


class Cache():
    """
    Cache class
    """
    def __init__(self):
        self._redis = redis.Redis()
        self._redis.flushdb()

    def store(self, data: Union[str, bytes, int, float]) -> str:
        id = str(uuid4())
        self._redis.set(id, data)
        return id
