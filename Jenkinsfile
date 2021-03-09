pipeline {
    agent any

    stages {
        stage('Installing Node Modules') {
            steps {
                echo 'Installing..'
                bat "npm install"
            }
        }
        stage('Test and Coverage') {
            steps {
                echo 'Testing..'
                bat "ng test --no-watch --code-coverage"
                // sh "print env|sort"
            }
        }
    }
    post{
        always{
            emailext body: 'Test Cases from the branch $BRANCH_NAME has been $BUILD_STATUS. Check the given link to see coverage report https://www.google.com ASD http://localhost:8080/job/demo-multi-branch/job/branch-1/8/execution/node/3/ws/coverage/demo-project/index.html',
            subject: 'Jenkins build result',
            to: 'haad@vinncorp.com'
        }
    }
}