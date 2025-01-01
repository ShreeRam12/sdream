from flask import Flask, request, jsonify

app = Flask(__name__)


@app.route("/submit-form", methods=["POST"])
def submit_form():
    data = request.get_json()
    # Validate and process form data
    name = data.get("name")
    email = data.get("email")
    message = data.get("message")
    service = data.get("service")

    # Example response
    response = {
        "success": True,
        "message": "Form submitted successfully!",
        "whatsapp_url": f"https://wa.me/?text=Hello {name}, we received your message: {message}",
    }

    return jsonify(response)


if __name__ == "__main__":
    app.run(debug=True)
