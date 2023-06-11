#!/usr/bin/env python3
"""
Writing strings to Redis
"""
import redis
from uuid import uuid4
from typing import Union, Callable


class Cache():
    """
    Cache class
    """
    def __init__(self):
        self._redis = redis.Redis()
        self._redis.flushdb()

    def store(self, data: Union[str, bytes, int, float]) -> str:
        """"""
        id = str(uuid4())
        self._redis.set(id, data)
        return id

    def get(self, key: str, fn: Callable = None) -> Union[
            str, bytes, int, float]:
        """[summary]

        Args:
            key (str): [description]
            fn (Callable, optional): [description]. Defaults to None.

        Returns:
            Union[str, bytes, int, float]: [description]
        """
        if fn:
            return fn(self._redis.get(key))
        return self._redis.get(key)

    def get_str(self, value: bytes) -> str:
        """[summary]

        Args:
            value (bytes): [description]

        Returns:
            str: [description]
        """
        return value.decode("utf-8")

    def get_int(self, value: bytes) -> int:
        """[summary]

        Args:
            value (bytes): [description]

        Returns:
            int: [description]
        """
        return int(value)
