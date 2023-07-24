pipeline {
    agent any

    stages {
        stage("Build") {
            steps {
                echo "Current Date and time ${currentDateTime()}"
                clearWorkspace()
                buildAngularApp()
            }
        }
    }
}

def currentDateTime(){
    return new Date().toString()
}

def clearWorkspace(){
    sh "rm -rf *"
}

def buildAngularApp() {
    // Install Node.js and npm
    sh "curl -sL https://deb.nodesource.com/setup_80.x | bash -"
    sh "apt-get install -y nodejs"

    // Install Angular CLI
    sh "npm install -g @angular/cli"

    // Install project dependencies
    sh "npm install"

    // Build Angular application
    sh "ng build --prod"
}
