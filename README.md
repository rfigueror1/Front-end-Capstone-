# Front End Capstone

Clone of important retailer e-commerce webpage.
The project can be deployed either as a monolithic containerized application or a microservices application

This README was developed with the help of the tutorial developed by Rushal Verma [https://hackernoon.com/publish-your-docker-image-to-docker-hub-10b826793faf], and the tutorial posted by Yegveniy Brikman [https://www.ybrikman.com/writing/2015/11/11/running-docker-aws-ground-up/#deploying-docker-containers-on-ecs]

## Related repositories/groups
[https://github.com/gg-RD]

## Table of contents

1. Requirements
2. Development
3. Other docker commands

## Requirements
1. Latest version of node.js.
2. Latest version of NPM.
3. Webpack file (already there).
4. Client token from Instagram to access public data from Instagram's API.

## Development
1. A docker-compose file is included in root directory.
  - The command to make the images and the containers of the monolithic application is `docker-compose up -d`
2. If the application is deployed as a microservices application, there is a `.yaml`file in each microservice folder (service folder), please run `docker-compose up -d` in each microservice folder to build images and containers.
- You can verify each container is running by running `docker ps`. And verify each image by running `docker images`.
3. Once the image and container is built push images into dockerHub by running the following commands:
  - Login to DockerHub`docker login`
  - Tag the image for DockerHub including your username (rfigueror1 in my case) and the name of your image `docker tag services_service rfigueror1/services_services` -
  - Push Image to DuckerHub `docker push rfigueror1/services_service`

- A package.JSON file is included with all the required dependencies.
- One important piece of information is that the 'service' applciation need a token access from an instagram client. The HTTP request that requests the access is in the file requestsInstagram.js and get_instagram (to run a server to make this request).

## Deployment

1. On your AWS instance open ports 80 for SSH and 3000 for HTTP in security groups
2. Once you have a running instance @ Amazon EC2 login make the following steps to install Docker on instance, pull image from Docker and run container.
  - Install yum in running instance (could also be npm) by executing the following command `sudo yum update -y`
  - Install docker `udo yum install -y docker`
  - Start docker `sudo service docker start`
  - Stop requiring sudo `sudo usermod -a -G docker ec2-user`
  - `exit` for setting to apply.
  - Reconnect to instance `ssh -i my-ec2-key-pair.pem ec2-user@<EC2-INSTANCE-PUBLIC-IP-ADDRESS>`
  - `docker pull rfigueror1/service_service` - pull an image from docker hub.
  - Check if it was installed `docker info`.
  - build docker-compose using VIM or nano with following structure:

  services:
    service:
    image: rfigueror1/services_services
    ports:
      - '80:3003'

    database:
      image: mongo:latest

3. Run container executing `docker run -p 3000:80 service_service
`

## Other Related Docker Commands
- `docker logs` - view running containers history/errors
- `sudo docker run -d --name mongo mongo:latest` - run a container specifying name and version.
- ` sudo docker rmi [nodeserver]` - delete images
- `docker system prune` - delete unused container and volumes from deleted images.
- `docker container prune` - prune unused containers from deleted images.
