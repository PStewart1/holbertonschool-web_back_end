#!/usr/bin/env python3
"""Measure the runtime"""
import asyncio
# from typing import List
from time import time
wait_n = __import__('1-concurrent_coroutines').wait_n


def measure_time(n: int, max_delay: int) -> float:
    """Takes in 2 int arguments: 'n' and 'max_delay',
    calls wait_n 'n' times with the specified 'max_delay',
    and eventually returns the time it took to complete (float).
    """
    start: float = time()
    asyncio.run(wait_n(n, max_delay))
    finish: float = time()
    total_time: float = finish - start
    return total_time / n
