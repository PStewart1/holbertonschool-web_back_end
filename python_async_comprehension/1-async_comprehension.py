#!/usr/bin/env python3
"""Async Comprehensions"""
import asyncio
import random
from typing import Generator
async_generator = __import__('0-async_generator').async_generator


async def async_comprehension() -> Generator[float, None, None]:
    """Collects 10 random numbers using an async comprehensing
    over 'async_generator', then returns the 10 random numbers.
    """

    return [i async for i in async_generator()]