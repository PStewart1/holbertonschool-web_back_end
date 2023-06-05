#!/usr/bin/env python3
"""Generic utilities for github org client.
"""
import unittest
from utils import access_nested_map as a_nmap
from parameterized import parameterized


class TestAccessNestedMap(unittest.TestCase):

    @parameterized.expand([
        ('unnested',
         {"a": 1},
         ("a",),
         1),

        ('one layer down',
         {"a": {"b": 2}},
         ("a",),
         {'b': 2}),

        ('both layers',
         {"a": {"b": 2}},
         ("a", "b"),
         2),
    ])
    def test_access_nested_map(self, _, nest, path, expected,):
        """Test that the method returns what it is supposed to."""
        result = a_nmap(nest, path)
        self.assertEqual(result, expected)

    # def test_access_nested_map_exception(self):
    #     """Test that a KeyError is raised for the following inputs:
    #         - `nested_map` is not a dict
    #         - `path` is not a sequence
    #         - Any key in `path` is not found
    #     """
