#!/usr/bin/env python3
"""
module to manage the baisc API authentication
"""
from api.v1.auth.auth import Auth


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
