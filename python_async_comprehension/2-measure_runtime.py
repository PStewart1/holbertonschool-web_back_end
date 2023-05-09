#!/usr/bin/env python3
"""Run time for four parallel comprehensions"""
import asyncio
from time import time
async_comprehension = __import__('1-async_comprehension').async_comprehension


async def measure_runtime() -> float:
    """ execute async_comprehension four times in parallel
    using asyncio.gather, then returns the total runtime.
    """
    start: float = time()
    await asyncio.gather(*[async_comprehension() for i in range(4)])
    finish: float = time()
    return finish - start
