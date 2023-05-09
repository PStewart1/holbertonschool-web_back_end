#!/usr/bin/env python3
"""Tasks"""
import asyncio
wait_random = __import__('0-basic_async_syntax').wait_random


def task_wait_random(max_delay: int) -> asyncio.Task:
    """Takes in 1 int argument(s): 'max_delay',
    creates an async Task out of wait_random, with 'max_delay',
    and eventually returns that task.
    """
    task = asyncio.create_task(wait_random(max_delay))
    return task
