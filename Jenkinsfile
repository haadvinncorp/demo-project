pipeline {
    agent any

    stages {
        stage('Installing Node Modules') {
            steps {
                echo 'Installing..'
                sh "npm install"
            }
        }
        stage('Test and Coverage') {
            steps {
                echo 'Testing..'
                sh "npm run ng test --no-watch --code-coverage"
            }
        }
    }
    post{
        always{
            emailext body: 'Test Cases from the branch $env.BRANCH_NAME has been $env.BUILD_STATUS. Check the given link to see coverage report',
            subject: 'Jenkins build result',
            to: 'haad@vinncorp.com'
        }
    }
}