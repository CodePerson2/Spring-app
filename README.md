# Basic Spring App


### Spring app build and run

mvn clean package

docker build -t spring-app .  

docker run -p 8080:8080 spring-app   

### Svelte app build

npm install 

npm run build

cp -r dist/* ../src/main/resources/static/