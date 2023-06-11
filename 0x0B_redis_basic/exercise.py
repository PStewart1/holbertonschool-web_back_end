#!/usr/bin/env python3
"""
Writing strings to Redis
"""
import redis
from uuid import uuid4
from typing import Union, Callable
from functools import wraps


def count_calls(method: Callable) -> Callable:
    """
    Counts how many times methods of the Cache class are called.
    Args:
        method (Callable)
    Returns:
        Callable
    """
    key = method.__qualname__

    @wraps(method)
    def wrapper(self, *args, **kwds):
        """ Wrapper function """
        self._redis.incr(key)
        return method(self, *args, **kwds)
    return wrapper


class Cache():
    """
    Cache class
    """
    def __init__(self):
        self._redis = redis.Redis()
        self._redis.flushdb()

    @count_calls
    def store(self, data: Union[str, bytes, int, float]) -> str:
        """
        Generates a random key and stores the input data in Redis using the key
        Args:
            data (str, bytes, int, or float): data to store
        Returns:
            str: key
        """
        id = str(uuid4())
        self._redis.set(id, data)
        return id

    def get(self, key: str, fn: Callable = None) -> Union[
            str, bytes, int, float]:
        """
        Gets data from redis.
        Args:
            key (str): key of the data to get
            fn (Callable): Optional function to convert data. Defaults to None.
        Returns:
            A str, bytes, int, or float, as appropriate.
        """
        if fn:
            return fn(self._redis.get(key))
        return self._redis.get(key)

    def get_str(self, value: bytes) -> str:
        """
        Converts bytes to string
        Args:
            value (bytes): bytes to convert
        Returns:
            str: converted string
        """
        return value.decode("utf-8")

    def get_int(self, value: bytes) -> int:
        """
        Converts bytes to int
        Args:
            value (bytes): bytes to convert
        Returns:
            int: converted int
        """
        return int(value)
