pipeline {
    agent any

    stages {
        stage('Clone and Prepare') {
            steps {
                // Clean workspace before cloning
                deleteDir()

                // Clone the repository from GitHub
                git 'https://github.com/SwiftSoft-Bahadur/dwallmart.git'

                // Install Node.js and npm
                sh 'curl -sL https://deb.nodesource.com/setup_20.x | bash -'
                sh 'apt-get install -y nodejs'

                // Install Angular CLI
                sh 'npm install -g @angular/cli'

                // Install project dependencies
                sh 'npm install'
            }
        }

        stage('Test') {
            steps {
                // Run tests for the Angular application
                sh 'npm run test'
            }
        }

        stage('Build') {
            steps {
                // Build the Angular application
                sh 'npm run build --prod'
            }
        }

        stage('Deploy') {
            steps {
                // Deploy the built application to a web server
                // Replace 'your-web-server-path' with the actual path to your web server root directory
                sh 'cp -r dist/* /var/www/html'
            }
        }
    }

    post {
        always {
            // Clean up the workspace
            deleteDir()
        }
    }
}
