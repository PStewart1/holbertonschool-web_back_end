#!/usr/bin/env python3
""" Module of views for Session authentication
"""
from api.v1.views import app_views
from flask import abort, jsonify, request
from models.user import User
import os


@app_views.route('/auth_session/login', methods=['POST'], strict_slashes=False)
def login():
    """ POST /api/v1/auth_session/login
    Return:
      - User object JSON represented
      - 400 if email or password are missing
      - 401 if login credentials are wrong
    """
    email = request.form.get('email')
    password = request.form.get('password')
    if email is None or email == '':
        return jsonify({"error": "email missing"}), 400
    if password is None or password == '':
        return jsonify({"error": "password missing"}), 400
    users = User.search({'email': email})
    if users == []:
        return jsonify({"error": "no user found for this email"}), 404
    for user in users:
        if not user.is_valid_password(password):
            return jsonify({"error": "wrong password"}), 401
        from api.v1.app import auth
        session_id = auth.create_session(user.id)
        session_name = os.getenv('SESSION_NAME')
        response = jsonify(user.to_json())
        response.set_cookie(session_name, session_id)
        return response


@app_views.route('auth_session/logout',
                 methods=['DELETE'], strict_slashes=False)
def logout():
    """
    DELETE /api/v1/auth_session/logout
    Return:
      - empty JSON
      - 404 if logout fails
    """
    from api.v1.app import auth
    if auth.destroy_session(request) is False:
        abort(404)
    else:
        return {}, 200
