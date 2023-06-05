#!/usr/bin/env python3
"""Generic utilities for github org client.
"""
import unittest
from utils import access_nested_map as a_nmap
from parameterized import parameterized


class TestAccessNestedMap(unittest.TestCase):

    @parameterized.expand([
        ({'nested_map': {"a": 1}, 'path': ("a",)},
         1),

        ({'nested_map': {"a": {"b": 2}}, 'path': ("a",)},
         {'b': 2}),

        ({'nested_map': {"a": {"b": 2}}, 'path': ("a", "b")},
         2),
    ])
    def test_access_nested_map(self, kwargs, expected,):
        result = a_nmap(**kwargs)
        self.assertEqual(result, expected)
