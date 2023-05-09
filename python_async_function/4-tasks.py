#!/usr/bin/env python3
"""Tasks"""
import asyncio
from typing import List
task_wait_random = __import__('3-tasks').task_wait_random


async def task_wait_n(n: int, max_delay: int) -> List[float]:
    """Takes in 2 int arguments: 'n' and 'max_delay',
    calls task_wait_random 'n' times with the specified 'max_delay',
    and eventually returns a list of the times delayed (floats).
    """
    delays: List[float] = []
    for i in range(n):
        t: float = await task_wait_random(max_delay)
        if i == 0:
            delays.append(t)
        else:
            for j in range(len(delays)):
                if t < delays[j]:
                    delays.insert(j, t)
                    break
                elif j == len(delays) - 1:
                    delays.append(t)
                    break

    return delays
