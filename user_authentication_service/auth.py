#!/usr/bin/env python3
"""
Auth module
"""
from bcrypt import hashpw, gensalt, checkpw
from db import DB
from user import User
import uuid


def _hash_password(password: str) -> bytes:
    """
    Takes in a password string arguments and returns bytes.
    """
    return hashpw(password.encode('utf-8'), gensalt())


def _generate_uuid() -> str:
    """
    Returns a string representation of a new UUID.
    """
    return str(uuid.uuid4())


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

    def create_session(self, email: str) -> str:
        """
        Finds the user corresponding to the email,
        generates and stores a new UUID in the db as the user`s session_id,
        then returns the session ID.
        """
        try:
            user = self._db.find_user_by(email=email)
        except Exception:
            return None
        session_id = _generate_uuid()
        self._db.update_user(user.id, session_id=session_id)
        return user.session_id

    def get_user_from_session_id(self, session_id: str) -> User:
        """
        Takes a single session_id string argument,
        and returns the corresponding User or None.
        """
        if session_id is None:
            return None
        try:
            user = self._db.find_user_by(session_id=session_id)
        except Exception:
            return None
        return user

    def destroy_session(self, user_id: int) -> None:
        """
        Updates the corresponding user`s session ID to None.
        """
        self._db.update_user(user_id, session_id=None)

    def get_reset_password_token(self, email: str) -> str:
        """
        Finds the user corresponding to the email,
        generates a UUID and update the user`s reset_token database field,
        then returns the token.
        """
        try:
            user = self._db.find_user_by(email=email)
        except Exception:
            raise ValueError
        token = _generate_uuid()
        self._db.update_user(user.id, reset_token=token)
        return token

    def update_password(self, reset_token: str, password: str) -> None:
        """
        Uses the reset_token to find the corresponding user,
        hashes the password, and updates the user`s hashed_password field
        with the new hashed password, and the reset_token field to None.
        """
        try:
            user = self._db.find_user_by(reset_token=reset_token)
        except Exception:
            raise ValueError
        hashed_pass = _hash_password(password)
        self._db.update_user(user.id,
                             hashed_password=hashed_pass, reset_token=None)
