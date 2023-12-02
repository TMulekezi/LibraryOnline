# LibraryOnline
The goal of this project was to develop a fullstack library web application. The project was successful with the applications features detailed bellow. The applications front-end was developed using ReactJS and typescript, the backend was developed using spring boot and java, and the database was written using MySQL. The frontend and backend communicate with each other using REST API calls devloped in the backend, facilitating persistent data. Other key features involve Okta authorization and authentication as well as https functionality (self-sign certificates).

## Application Features (so far)
- Homepage: displays core application features
- NavBar: alowing users to navigate application endpoints
- Book display: library book display using pagination
- Login/Signup/Signout: Okta authentication and authorzation was used to faciliate application security through the creation of user roles (user and admin) and JWT tokens
- User Book checkout
- User -> Admin Q&A
- Admin library management: book addtion, book removal, book count
- Pagination

## Application Features (for the future)
- Stripe payment processing

## Requirements and dependencies

Java version: 17
Springboot version: 2.7.3

For more see pom.xml file @ spring-boot-library/pom.xml
