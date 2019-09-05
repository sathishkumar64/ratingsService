# ratingsService

1. Update env.list for environment variables.

2. To run locally, go to root directry and run 'npm start' . <br />
Default port is 3000. http://localhost:3000/ 

3. To Build Docker Image , go in root directory and run below command. <br />
  docker build -t <user-name>/ratingService:1.0.0 .

4. Docker Run <br />
  docker run -p <forwaded-port>:8080 -d --env-file ./env.list <user-name>/ratingService

5. Docker logs <br />
   docker ps <br />
   fetch container id for <user-name>/ratingService <br />
   
   docker logs <container-id> <br />

6. Home page <br />
   http://host:port/

7. Health Check <br />
   http://host:port/health-check

