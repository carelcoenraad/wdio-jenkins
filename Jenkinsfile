pipeline {
  stages {
    stage('Test') {
      agent {
        docker 'node'
      }
      steps {
        sh 'npm install'
        sh 'npm test'
      }
      post {
        always {
          junit 'reports/junit/*.log'
        }
      }
    }
  }
}
