// Jenkinsfile for a simple CI/CD pipeline

pipeline {
    // Agent defines where the pipeline will run.
    // 'any' means Jenkins will use any available agent.
    // For Docker-specific builds, you might use 'agent { docker { image 'your-custom-docker-image' } }'
    // but for this example, we'll run Docker commands directly on an agent with Docker installed.
    agent any

    // Environment variables can be defined here
    environment {
        // Define your Docker Hub username or registry URL if pushing images
        DOCKER_HUB_USERNAME = 'your_docker_username'
        // Replace 'my-app' with your actual application name
        APP_NAME = 'my-simple-web-app'
        // Replace with your desired image tag, e.g., 'latest' or a build number
        IMAGE_TAG = "latest"
    }

    // Stages define the different phases of your pipeline
    stages {
        // Stage 1: Build the application
        stage('Build') {
            steps {
                script {
                    echo '--- Building the application ---'
                    // Example: Build a Docker image
                    // This assumes you have a Dockerfile in your project root
                    sh "docker build -t ${APP_NAME}:${IMAGE_TAG} ."
                    echo "Docker image ${APP_NAME}:${IMAGE_TAG} built successfully."
                }
            }
        }

        // Stage 2: Test the application
        stage('Test') {
            steps {
                script {
                    echo '--- Running tests ---'
                    // Example: Run tests inside a Docker container
                    // This assumes your Dockerfile or a test runner image can execute tests
                    sh "docker run --rm ${APP_NAME}:${IMAGE_TAG} npm test || true" // Example for Node.js
                    // Or for a simple echo test:
                    // sh "echo 'Running unit tests...'"
                    // sh "echo 'Running integration tests...'"
                    echo 'Tests completed successfully.'
                }
            }
        }

        // Stage 3: Deploy the application
        stage('Deploy') {
            steps {
                script {
                    echo '--- Deploying the application ---'
                    // Example: Push Docker image to a registry (e.g., Docker Hub)
                    // You would need to configure Docker credentials in Jenkins
                    // (e.g., using 'withCredentials([usernamePassword(credentialsId: 'docker-hub-creds', passwordVariable: 'DOCKER_PASSWORD', usernameVariable: 'DOCKER_USERNAME')])')
                    // For simplicity, this example just builds and runs locally.
                    // If pushing to Docker Hub:
                    // sh "docker login -u ${DOCKER_HUB_USERNAME} -p ${DOCKER_PASSWORD}"
                    // sh "docker push ${DOCKER_HUB_USERNAME}/${APP_NAME}:${IMAGE_TAG}"

                    // Example: Run the application as a Docker container
                    echo "Stopping any existing container for ${APP_NAME}..."
                    sh "docker stop ${APP_NAME} || true" // Stop if exists, ignore error if not
                    echo "Removing any existing container for ${APP_NAME}..."
                    sh "docker rm ${APP_NAME} || true" // Remove if exists, ignore error if not
                    echo "Starting new container for ${APP_NAME}..."
                    sh "docker run -d -p 80:80 --name ${APP_NAME} ${APP_NAME}:${IMAGE_TAG}"
                    echo "Application deployed and running on port 80."
                }
            }
        }
    }

    // Post-build actions (e.g., send notifications)
    post {
        always {
            echo 'Pipeline finished.'
        }
        success {
            echo 'Pipeline succeeded!'
            // You could add email notifications here
        }
        failure {
            echo 'Pipeline failed!'
            // You could add error reporting here
        }
    }
}

