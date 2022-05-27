import json
import os
import shutil
import tempfile
import zipfile
from io import BytesIO

from flask import Flask, make_response, send_file
from flask_cors import CORS, cross_origin

PROJECT_ROOT = os.path.dirname(os.path.realpath(__file__))
REPO_ROOT = str(os.path.abspath(os.path.dirname(
    os.path.dirname(PROJECT_ROOT))))
TESTS_FOLDER = f"{REPO_ROOT}/tests"
testfile = lambda backend: f"{TESTS_FOLDER}/test_{backend.lower()}.py"

app = Flask(__name__)
cors = CORS(app, support_credentials=True)
app.config['CORS_HEADERS'] = 'Content-Type'


def zipdir(path, ziph):
    # ziph is zipfile handle
    for root, dirs, files in os.walk(path):
        for file in files:
            ziph.write(
                os.path.join(root, file),
                os.path.relpath(os.path.join(root, file),
                                os.path.join(path, '..')),
            )


#-------------------------------- CORS ------------------------------------
# @app.after_request
# def after_request(response):
#     response.headers[
#         "Access-Control-Allow-Origin"] = "*"  # <- You can change "*" for a domain for example "http://localhost"
#     response.headers["Access-Control-Allow-Credentials"] = "true"
#     response.headers[
#         "Access-Control-Allow-Methods"] = "POST, GET, OPTIONS, PUT, DELETE"
#     response.headers[
#         "Access-Control-Allow-Headers"] = "Accept, Content-Type, Content-Length, Accept-Encoding, X-CSRF-Token, Authorization"
#     return response

#-------------------------------- Routes ------------------------------------


@app.get("/")
@cross_origin(supports_credentials=True)
def poll():
    return make_response("Alive")


@app.get("/generate/<front>/<back>")
@cross_origin(supports_credentials=True)
def generate(front, back):
    backend = REPO_ROOT + f"/backend/{back}"
    frontend = REPO_ROOT + f"/frontend/{front}"

    if not os.path.isdir(frontend) or not os.path.isdir(backend):
        return json.dumps({
            "status": "error",
            "message": "Tech-stack not found",
        })

    with tempfile.TemporaryDirectory() as tmpdir:
        memory_file = BytesIO()
        testdir = tmpdir + "/tests"
        os.makedirs(testdir)

        shutil.copy(testfile(back), testdir)
        shutil.copy(f"{TESTS_FOLDER}/__init__.py", testdir)
        shutil.copy(f"{TESTS_FOLDER}/templates.py", testdir)

        with zipfile.ZipFile(memory_file, 'w', zipfile.ZIP_DEFLATED) as zipf:
            zipdir(backend, zipf)
            zipdir(frontend, zipf)
            zipdir(testdir, zipf)
            zipf.write(f"{REPO_ROOT}/docker-compose.yml", "docker-compose.yml")

        memory_file.seek(0)

    return send_file(
        memory_file,
        download_name='NTP.zip',
        as_attachment=True,
    )


@app.get("/cmd_toolkit")
@cross_origin(supports_credentials=True)
def cmd_toolkit():
    tool = REPO_ROOT + f"/cmd_tool"

    if not os.path.isdir(tool):
        return json.dumps({
            "status": "error",
            "message": "CMD Toolkit not found",
        })
    memory_file = BytesIO()
    with zipfile.ZipFile(memory_file, 'w', zipfile.ZIP_DEFLATED) as zipf:
        zipdir(tool, zipf)

    memory_file.seek(0)
    return send_file(
        memory_file,
        download_name='cmd_toolkit.zip',
        as_attachment=True,
    )


if __name__ == "__main__":
    app.run(port=os.environ.get("PORT", 5000))
