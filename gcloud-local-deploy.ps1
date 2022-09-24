Set-StrictMode -Version Latest
$ErrorActionPreference = "Stop"
$PSDefaultParameterValues['*:ErrorAction']='Stop'
function ThrowOnNativeFailure {
    if (-not $?)
    {
        throw 'Native Failure'
    }
}
$projectid="ikomida-dev"
if($args.count -gt 0){
    $projectid=$args[0]
}
$nocache=""
if($args.count -gt 1){
    $nocache=$args[1]
}
$env:GOOGLE_SERVICE_ACCOUNT="REMOVED_GCP_SERVICE_ACCOUNT_KEY"
yarn glogin
yarn add @ikomida/shared-backend@latest
ThrowOnNativeFailure
docker build -t us-central1-docker.pkg.dev/$projectid/docker/populate-db-image:latest . --build-arg GOOGLE_SERVICE_ACCOUNT="$env:GOOGLE_SERVICE_ACCOUNT"  --build-arg NODE_ENV=devlopment $nocache
ThrowOnNativeFailure
docker push us-central1-docker.pkg.dev/$projectid/docker/populate-db-image:latest
ThrowOnNativeFailure
kubectl -n ikomida delete Job/polupate-db
# 
Get-ChildItem ".\k8s\" -Filter *.yaml | 
Foreach-Object {
    $content = Get-Content $_.FullName
    $content.replace('$PROJECT_ID', $projectid) | kubectl apply -f -
}/deployment.yaml

Get-ChildItem ".\k8s\" -Filter *.yaml | 
Foreach-Object {
    $content = Get-Content $_.FullName
    $content.replace('$PROJECT_ID', $projectid) | kubectl apply -f -
}