# Use a base Python image
FROM python:3.9-slim-buster

# Set working directory
WORKDIR /app

# Copy requirements.txt file
COPY requirements.txt .

# Install dependencies
RUN pip install -r requirements.txt

# copy project
COPY ./ ./

# Run Django server
CMD ["sh", "-c", "./wait-for-it.sh localhost:5432 -- python manage.py runserver 0.0.0.0:8001"]
