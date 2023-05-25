#!/usr/bin/env python3
"""
module to manage the baisc API authentication
"""
from api.v1.auth.auth import Auth
from base64 import b64decode


class BasicAuth(Auth):
    """
    BasicAuth class that inherits from Auth
    """
    def extract_base64_authorization_header(self,
                                            authorization_header: str) -> str:
        """
        returns the Base64 part of the Authorization header
        """
        if authorization_header is None\
            or type(authorization_header) is not str\
                or authorization_header.startswith('Basic ') is False:
            return None
        return authorization_header[6:]

    def decode_base64_authorization_header(
            self, base64_authorization_header: str) -> str:
        """
        returns the decoded value of a Base64 string
        """
        if base64_authorization_header is None\
           or type(base64_authorization_header) is not str:
            return None
        try:
            return b64decode(base64_authorization_header).decode('utf-8')
        except Exception:
            return None
