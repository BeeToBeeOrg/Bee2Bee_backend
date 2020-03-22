from flask import Flask, jsonify, render_template
from models import db
from api.routes.company import company_api
from api.routes.user import user_api
from api.routes.posting import posting_api
from os import environ

def create_app(config=None):
    app = Flask(__name__)
    # TODO: load config from env

    db_config = {
        'DB_PASS': '',
        'DB_PORT': '',
        'DB_USER': '',
        'DB_HOST': '',
        'DB_DATABASE': '',
        'DB_DRIVER': ''
    }

    app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
    if 'SQLALCHEMY_DATABASE_URI' in environ:
        app.config['SQLALCHEMY_DATABASE_URI'] = environ['SQLALCHEMY_DATABASE_URI']
    else:
        for key in db_config.keys():
            if key not in environ:
                raise SystemExit("db config key {} missing from env".format(key))
        db_config = { key: environ[key] for key in db_config.keys() }
        app.config['SQLALCHEMY_DATABASE_URI'] = "{DB_DRIVER}://{DB_USER}:{DB_PASS}@{DB_HOST}:{DB_PORT}/{DB_DATABASE}".format(**db_config)

    setup_app(app)
    return app

def setup_app(app):
    db.init_app(app)

    app.register_blueprint(posting_api)
    app.register_blueprint(company_api)
    app.register_blueprint(user_api)
    @app.route('/')
    def index():
        return render_template("sites/home.html")

    @app.route('/healthcheck')
    def healthcheck():
        return jsonify(status=200, message='healthcheck OK')
