#!/usr/bin/env python3
"""Let's execute multiple coroutines at the same time with async"""
import asyncio
from typing import List
wait_random = __import__('0-basic_async_syntax').wait_random


async def wait_n(n: int, max_delay: int) -> List[float]:
    """Takes in 2 int arguments: 'n' and 'max_delay',
    calls wait_random 'n' times with the specified 'max_delay',
    and eventually returns a list of the times delayed (floats).
    """
    delays: List[float] = []
    for i in range(n):
        delays.append(await wait_random(max_delay))
    delays.sort()
    return delays
