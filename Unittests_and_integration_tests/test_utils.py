#!/usr/bin/env python3
"""Generic utilities for github org client.
"""
from unittest import TestCase, mock
from utils import access_nested_map as a_map, get_json, memoize
from parameterized import parameterized


class TestAccessNestedMap(TestCase):
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
        """Test that the method returns what it is supposed to."""
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


class TestGetJson(TestCase):
    """TestGetJson class"""

    @parameterized.expand([
        ('http://example.com', {'payload': True}),
        ('http://holberton.io', {'payload': False}),
    ])
    @mock.patch('requests.get')
    def test_get_json(self, test_url, test_payload, mock_get):
        """Test that utils.get_json returns the expected result."""
        mock_get.return_value.json.return_value = test_payload
        mock_get.return_value.status_code = 200
        response = get_json(test_url)
        self.assertEqual(response, test_payload)
        mock_get.assert_called_once()


class TestMemoize(TestCase):
    """TestMemoize class"""

    def test_memoize(self):
        """Test that when calling a_property twice, the correct result is
        returned but a_method is only called once using assert_called_once
        """
        class TestClass:
            """TestClass class"""
            def a_method(self):
                """a_method method"""
                return 42

            @memoize
            def a_property(self):
                """a_property method"""
                return self.a_method()
        with mock.patch.object(TestClass, 'a_method') as mock_method:
            test = TestClass()
            test.a_property()
            test.a_property()
            mock_method.assert_called_once()
