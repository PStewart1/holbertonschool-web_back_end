#!/usr/bin/env python3
""" Regex-ing """
from typing import List
import re


def filter_datum(fields: List[str], redaction: str,
                 message: str, separator: str) -> str:
    """ returns the log message obfuscated """
    for data in fields:
        message = re.sub(data + "=.*?" + separator,
                         data + "=" + redaction + separator, message)
    return message
