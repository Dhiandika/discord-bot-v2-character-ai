@echo off

set GOOGLE_CLOUD_PROJECT=handy-position-441403-n0
set PROJECT_NAME=discord-deploy-kohai-server

CALL gcloud config^
    set project %GOOGLE_CLOUD_PROJECT%
CALL gcloud builds submit^
    --tag gcr.io/%GOOGLE_CLOUD_PROJECT%/%PROJECT_NAME%
CALL gcloud run deploy^
    %PROJECT_NAME%^
    --image gcr.io/%GOOGLE_CLOUD_PROJECT%/%PROJECT_NAME%^
    --platform=managed^
    --region=asia-southeast2^
    --allow-unauthenticated^
    --max-instances=1^
    --cpu-boost^
    --cpu=2^
    --memory=4096Mi