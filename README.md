# SightUP

SightUP is a comprehensive vision care mobile app (Android, iOS) designed to simplify eye health management. It offers a
personalized daily eye care routine, helping users stay consistent with their eye health practices, together with its
own wearable app (WearOS).

THIS REPOSITORY IS ONLY THE BACKEND SERVER. You can find the SightUP App in this [repository](https://github.com/rafaelmfer/kmp-SightUP)

## How to run the backend server

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

## Base Project / Tech Stack

-   **IDE**: [VSCode - Visual Studio Code](https://code.visualstudio.com/)
-   **Backend Framework**: [Node.js](https://nodejs.org/en), [Express.js](https://expressjs.com/)
-   **Database**: [MongoDB](https://www.mongodb.com/)
-   **Authentication**: [JWT](https://jwt.io/)

## Database

-   EDR Diagram
    ![Data Model](https://github.com/rafaelmfer/backend-SightUP/blob/main/.github/assets/data_model.png)
