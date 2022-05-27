FROM maven:3.8.5-openjdk-8

WORKDIR /app
COPY ./ ./

RUN mvn package
CMD ["mvn", "spring-boot:run"]
