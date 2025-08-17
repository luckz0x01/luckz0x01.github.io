from flask import Flask, redirect, request

app = Flask(__name__)

@app.route('/redirect')
def redirect_to_metadata():
    # Captura la solicitud y redirige al IMDS de AWS
    return redirect('http://169.254.169.254/latest/meta-data/', code=302)

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=80)
