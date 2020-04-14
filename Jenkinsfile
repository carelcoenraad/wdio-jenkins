pipeline {
  agent none
  stages {
    stage('Test') {
      agent {
        docker 'node'
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
