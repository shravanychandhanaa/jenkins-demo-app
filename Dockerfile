# Dockerfile for a simple web application (e.g., a static HTML page or a simple Node.js app)

# Use a lightweight base image
FROM alpine:latest

# Install Node.js if you were building a Node app, for example
# RUN apk add --no-cache nodejs npm

# Set the working directory in the container
WORKDIR /app

# Copy application files (e.g., a simple index.html)
COPY . /app

# Expose the port your application listens on
EXPOSE 80

# Command to run the application
# For a static HTML, you might use a simple web server
CMD ["busybox", "httpd", "-f", "-p", "80"]
# If it was a Node.js app, it might be: CMD ["node", "app.js"]