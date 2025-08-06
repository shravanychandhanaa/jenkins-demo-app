pipeline {
    agent any

    tools {
        python 'Python3'  // Make sure this tool is configured in Jenkins global tools
    }

    environment {
        USER_NAME = 'Shravany'  // You can replace this dynamically later
    }

    stages {
        stage('Clone Repository') {
            steps {
                echo "Cloning repository..."
                checkout scm
            }
        }

        stage('Install Dependencies') {
            steps {
                echo "Installing dependencies..."
                sh 'pip install -r requirements.txt || echo "No dependencies to install."'
            }
        }

        stage('Build') {
            steps {
                echo "Building the Python app..."
                sh 'python3 app.py $USER_NAME'
            }
        }

        stage('Deploy') {
            steps {
                echo "Simulating deployment..."
                sh '''
                    mkdir -p deploy
                    cp app.py deploy/
                    echo "Deployment complete. File copied to deploy/"
                '''
            }
        }
    }

    post {
        success {
            echo '✅ Pipeline completed successfully!'
        }
        failure {
            echo '❌ Pipeline failed.'
        }
    }
}
