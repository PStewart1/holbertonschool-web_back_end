#!/usr/bin/env python3
"""Infer appropriate time zone """
from flask import Flask, render_template, request, g
from flask_babel import Babel
from pytz import timezone, exceptions
from datetime import datetime
import pytz

app = Flask(__name__)

users = {
    1: {"name": "Balou", "locale": "fr", "timezone": "Europe/Paris"},
    2: {"name": "Beyonce", "locale": "en", "timezone": "US/Central"},
    3: {"name": "Spock", "locale": "kg", "timezone": "Vulcan"},
    4: {"name": "Teletubby", "locale": None, "timezone": "Europe/London"},
}


class Config():
    """Class which configures available languages"""
    LANGUAGES = ["en", "fr"]
    BABEL_DEFAULT_LOCALE = 'en'
    BABEL_DEFAULT_TIMEZONE = 'UTC'


app.config.from_object(Config)
babel = Babel(app)


@app.route('/', strict_slashes=False)
def index():
    """Route for `/`"""
    return render_template('5-index.html')


@babel.localeselector
def get_locale():
    """Retrieves locale from request"""
    # Try to get locale from URL parameters
    locale = request.args.get('locale')
    if locale and locale in app.config['LANGUAGES']:
        return locale

    # Try to get locale from user settings
    user = get_user()
    if user and user.get('locale') in app.config['LANGUAGES']:
        return user.get('locale')

    # Try to get locale from request header
    return request.accept_languages.best_match(app.config['LANGUAGES'])


def get_user():
    """Returns a user dictionary"""
    user_id = request.args.get('login_as')
    if user_id:
        return users.get(int(user_id))
    return None


@babel.timezoneselector
def get_timezone():
    """Retrieves timezone from request"""
    # Try to get timezone from URL parameters
    timezone = request.args.get('timezone')
    if timezone:
        try:
            return pytz.timezone(timezone)
        except exceptions.UnknownTimeZoneError:
            pass

    # Try to get timezone from user settings
    user = get_user()
    if user and user.get('timezone'):
        try:
            return pytz.timezone(user.get('timezone'))
        except exceptions.UnknownTimeZoneError:
            pass

    # Try to get timezone from request header
    if request.headers.get('timezone'):
        try:
            return pytz.timezone(request.headers.get('timezone'))
        except exceptions.UnknownTimeZoneError:
            pass

    # Return default timezone
    return pytz.timezone(app.config['BABEL_DEFAULT_TIMEZONE'])


@app.before_request
def before_request():
    """
    Uses get_user to find a user and sets it as a global
    on flask.g.user
    """
    g.user = get_user()


if __name__ == '__main__':
    app.run()
