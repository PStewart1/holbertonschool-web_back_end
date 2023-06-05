#!/usr/bin/env python3
"""Generic utilities for github org client.
"""
import unittest
from utils import access_nested_map as a_map
from parameterized import parameterized


class TestAccessNestedMap(unittest.TestCase):
    """TestAccessNestedMap class
    """

    @parameterized.expand([
        ({'nested_map': {"a": 1}, 'path': ("a",)},
         1),

        ({'nested_map': {"a": {"b": 2}}, 'path': ("a",)},
         {'b': 2}),

        ({'nested_map': {"a": {"b": 2}}, 'path': ("a", "b")},
         2),
    ])
    def test_access_nested_map(self, kwargs, expected):
        result = a_map(**kwargs)
        self.assertEqual(result, expected)

    @parameterized.expand([
        ({'nested_map': {}, 'path': ('a',)},
         KeyError('a')),

        ({'nested_map': {"a": 1}, 'path': ('a', 'b')},
         KeyError('b')),
    ])
    def test_access_nested_map_exception(self, kwargs, expected):
        """Test that a KeyError is raised for the following inputs:
            - `nested_map` is not a dict
            - `path` is not a sequence
            - Any key in `path` is not found
        """
        with self.assertRaises(KeyError) as error:
            a_map(**kwargs)
        self.assertEqual(str(expected), str(error.exception))
