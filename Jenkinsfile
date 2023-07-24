pipeline {
    agent any // This specifies that the pipeline can run on any available agent
options {
  buildDiscarder logRotator(daysToKeepStr: '1', numToKeepStr: '1')
}

    stages {
        stage('Checkout') {
            steps {
                deleteDir()
                // Checkout the source code from GitHub
                git 'https://github.com/SwiftSoft-Bahadur/dwallmart.git'
            }
        }
        
        stage('Install Dependencies') {
            steps {
                echo 'Installing project dependencies...'
                // sh 'npm install' // Use npm to install Angular project dependencies
            }
        }

        stage('Build') {
            steps {
                echo 'Building the project...'
                sh 'ng build' // Use npm to build the Angular project
            }
        }
        
        stage('Test') {
            steps {
                echo 'Running tests...'
                sh 'ng test' // Use npm to run tests for the Angular project
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
