pipeline {
    agent any // This specifies that the pipeline can run on any available agent

    stages {
        stage('Checkout') {
            steps {
                // Checkout the source code from GitHub
                git 'https://github.com/your-username/your-angular-project.git'
            }
        }
        
        stage('Install Dependencies') {
            steps {
                echo 'Installing project dependencies...'
                sh 'npm install' // Use npm to install Angular project dependencies
            }
        }

        stage('Build') {
            steps {
                echo 'Building the project...'
                sh 'npm run build' // Use npm to build the Angular project
            }
        }
        
        stage('Test') {
            steps {
                echo 'Running tests...'
                sh 'npm run test' // Use npm to run tests for the Angular project
            }
        }
        
        stage('Deploy') {
            steps {
                echo 'Deploying the project...'
                // Add your deployment commands here
                // For example, you can deploy the built files to a web server or a cloud platform
            }
        }
    }
}
