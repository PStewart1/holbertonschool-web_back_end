#!/usr/bin/env python3
"""Generic utilities for github org client.
"""
from unittest import TestCase, mock
from parameterized import parameterized
from client import GithubOrgClient


class TestGithubOrgClient(TestCase):
    """TestGithubOrgClient class"""

    @parameterized.expand([
        ('google'),
        ('abc'),
    ])
    @mock.patch('client.get_json')
    def test_org(self, test_org, mock_get_json):
        """Test that GithubOrgClient.org returns the correct value."""
        test_payload = {"payload": True}
        mock_get_json.return_value = test_payload
        test_class = GithubOrgClient(test_org)
        response = test_class.org
        self.assertEqual(response, test_payload)
        mock_get_json.assert_called_once()
