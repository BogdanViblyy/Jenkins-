pipeline {
    agent any
    stages {
        stage('Build Docker Image') {
            steps {
                sh 'docker build -t travel-app:latest .'
            }
        }
        stage('Run Container') {
            steps {
                // Запускаем новый контейнер
                sh 'docker stop travel-app-container || true'
                sh 'docker rm travel-app-container || true'
                sh 'docker run -d --name travel-app-container -p 3000:3000 travel-app:latest'
            }
        }
        stage('Test Endpoint') {
            steps {
                // Даём контейнеру время на запуск
                sleep 10
                // Проверяем endpoint
                sh 'curl --fail http://localhost:3000/travel'
            }
        }
    }
    
}
