pipeline {
    agent any

    stages {
        stage("Build") {
            steps {
                echo "Current Date and time ${currentDateTime()}"
                clearWorkspace()
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
