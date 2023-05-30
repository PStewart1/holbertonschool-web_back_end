#!/usr/bin/env python3
"""
Flask app module
"""
from flask import Flask, jsonify, request, abort, redirect
from auth import Auth

app = Flask(__name__)
AUTH = Auth()


@app.route("/", methods=['GET'], strict_slashes=False)
def welcome():
    return jsonify(message='Bienvenue')


@app.route("/users", methods=['POST'], strict_slashes=False)
def users():
    email = request.form.get('email')
    password = request.form.get('password')
    try:
        new_user = AUTH.register_user(email, password)
        return jsonify(email=new_user.email, message='user created')
    except ValueError:
        return jsonify(message='email already registered'), 400


@app.route("/sessions", methods=['POST'], strict_slashes=False)
def login():
    email = request.form.get('email')
    password = request.form.get('password')
    if not AUTH.valid_login(email, password):
        abort(401)
    session_id = AUTH.create_session(email)
    response = jsonify(email=email, message='logged in')
    response.set_cookie('session_id', session_id)
    return response


@app.route("/sessions", methods=['DELETE'], strict_slashes=False)
def logout():
    session_id = request.cookies['session_id']
    user = AUTH.get_user_from_session_id(session_id)
    if user is None:
        return 403
    else:
        AUTH.destroy_session(user.id)
        return redirect('/')


if __name__ == "__main__":
    app.run(host="0.0.0.0", port="5000")
