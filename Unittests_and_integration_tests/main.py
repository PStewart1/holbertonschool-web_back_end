#!/usr/bin/env python3
"""my test testing module"""
from utils import access_nested_map


nested_map = {"a": 1}
path = ("a", "b")

access_nested_map(nested_map, path)
