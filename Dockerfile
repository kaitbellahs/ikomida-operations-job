FROM  google/cloud-sdk:alpine AS build

ARG PROJECT_ID
ARG GOOGLE_SERVICE_ACCOUNT
ENV GOOGLE_APPLICATION_CREDENTIALS ./serviceAccount.json

RUN apk update && apk --no-cache -U upgrade && apk add --no-cache npm && npm --global i yarn

RUN mkdir -p /service 
RUN echo $GOOGLE_SERVICE_ACCOUNT > /service/serviceAccount_b64 && base64 -d /service/serviceAccount_b64 > $GOOGLE_APPLICATION_CREDENTIALS && gcloud auth activate-service-account --key-file $GOOGLE_APPLICATION_CREDENTIALS && export PATH="$(yarn global bin):$PATH" && yarn global add google-artifactregistry-auth 

WORKDIR /service


COPY package.json .eslintignore .prettierrc api-extractor.json rollup.config.ts tsconfig.json ./

RUN echo "@ikomida:registry=https://us-central1-npm.pkg.dev/$PROJECT_ID/node/" >> .npmrc && echo "//us-central1-npm.pkg.dev/$PROJECT_ID/node/:always-auth=true" >> .npmrc

RUN yarn glogin && yarn install

COPY ./src ./src
RUN yarn build

CMD ["sh", "-c", "tail -f /dev/null"]