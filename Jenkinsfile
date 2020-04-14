pipeline {
  agent none
  stages {
    stage('Test') {
      agent {
        docker 'node'
      }
      environment {
        SELENIUM_HOSTNAME = credentials('selenium-hostname')
      }
      steps {
        sh 'npm install'
        sh 'npm run test:selenium'
      }
      post {
        always {
          junit 'reports/junit/*.log'
        }
      }
    }
  }
}
