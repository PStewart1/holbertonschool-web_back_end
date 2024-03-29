#!/usr/bin/env python3
"""Let's duck type an iterable object """
from typing import Iterable, Sequence, List, Tuple


def element_length(lst: Iterable[Sequence]) -> List[Tuple[Sequence, int]]:
    """takes a Iterable list 'lst' as argument,
    and returns a list of tuples, containing a sequence and int.
    """

    return [(i, len(i)) for i in lst]
