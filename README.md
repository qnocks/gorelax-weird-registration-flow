# *GoRelax* weird registration flow

## Overview 

*GoRelax* is a web service for meditation and relaxation that provides meditation courses, bedtime stories, nature's background sounds, with the help of which users of the service can maintain their mental state.

This application is a **joking** auth part of *GoRelax* which represents some weird registration form.

**Form requirements**:

* A user must experience pain and suffering when registering. He should be between hope and despair,
confused about what's going on.

* At the same time, the user must be able to register within 15 minutes

## Technologies

**Backend:**
* Kotlin
* Spring Boot 2.6.X
* H2

**Frontend:**
* Typescript 4.3
* Angular 12
* Material UI

## Usage

### Build

**Requirements:**

* JDK 11+
* Node.js

To run backend application complete following steps:
```
$ cd backend
$ ./gradlew bootRun 
```

To run frontend application complete following steps:

```
$ cd frontend
$ npm install
$ ng serve 
```

Backend will be running on default *8090* port, frontend on *4200*. To specify ports run:

```
$ ./gradlew bootRun --args='--server.port=<your_port>'
```
and
```
$ ng serve --port <your_port>
```

### Try it

Go to **localhost:4200** and try to register! :)

To check whether you registered successfully or not go to **localhost:8090/auth/users** to see all registered users
