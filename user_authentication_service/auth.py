#!/usr/bin/env python3
"""
Auth module
"""
from bcrypt import hashpw, gensalt, checkpw
from db import DB
from user import User


def _hash_password(password: str) -> bytes:
    """
    Takes in a password string arguments and returns bytes.
    """
    return hashpw(password.encode('utf-8'), gensalt())


class Auth:
    """Auth class to interact with the authentication database.
    """

    def __init__(self):
        self._db = DB()

    def register_user(self, email: str, password: str) -> User:
        """
        Saves the user to the database, and returns the User object.
        """
        try:
            existing_user = self._db.find_user_by(email=email)
        except Exception:
            hashed_pass = _hash_password(password)
            new_user = self._db.add_user(email, hashed_pass)
            return new_user
        raise ValueError(f"User {email} already exists")

    def valid_login(self, email: str, password: str) -> bool:
        """
        Checks password of user, and returns true or false.
        """
        try:
            existing_user = self._db.find_user_by(email=email)
            if checkpw(password.encode(), existing_user.hashed_password):
                return True
            else:
                return False
        except Exception:
            return False
