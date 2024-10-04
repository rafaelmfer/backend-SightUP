# SightUP

## Project

## How to run the project

1. Create an account on the [MongoDB](https://www.mongodb.com/).
2. Create a `.env` file inside the backend folder based on `.env.example` and fill the variables accordingly to your environment.
3. Inside the folder `src/resources`, there are mock json files that you can use those files to create the collections in MongoDB more quickly
4. Install the dependencies of the project. Open the terminal, and inside the root folder of the project run the command:

```sh
npm install
```

5. Then execute the command line to start the program:

```sh
npm run start
```

That's it! You're ready to explore BondWork platform.

Ps.: You can use this endpoint to create the user to login, just make sure to fix `localhost:5000` to your backend url:

```
curl --location 'localhost:5000/api/auth/register' \
--header 'Content-Type: application/json' \
--header 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImppZ2dseXB1ZmYud21kZEBnbWFpbC5jb20iLCJfaWQiOiI2NmE5NGVlOTBhY2YzMjVmOTI1ODI3NDQiLCJpYXQiOjE3MjI0NzAyMDQsImV4cCI6MTcyMjQ5OTAwNH0.Zwv0jtl-RxVIvPywFeeQ3gNUojUk7Kt5YlYLcFJ3pRk' \
--data-raw '{
    "employeeID": 123456789,
    "email": "jigglypuff.wmdd@gmail.com",
    "password": "test12345",
    "firstName": "User",
    "lastName": "Tester",
    "profilePicture": "",
    "department": {
        "name": "QA",
        "id": 99
    },
    "jobLevel": "Mid Level",
    "jobTitle": "QA",
    "onBoardingDate": "2023-09-01",
    "lastAccess": "2024-07-02",
    "surveys": [],
    "rewards": [],
    "recognitions": {
        "sent": [],
        "received": []
    },
    "points": 5000,
    "adminRights": true
}'
```

## Base Project / Tech Stack

-   **IDE**: [VSCode - Visual Studio Code](https://code.visualstudio.com/)
-   **Backend Framework**: [Node.js](https://nodejs.org/en), [Express.js](https://expressjs.com/)
-   **Database**: [MongoDB](https://www.mongodb.com/)
-   **Authentication**: [JWT](https://jwt.io/)

## Database

-   [Dictionary/Glossary]()
-   [EDR Diagram]()
