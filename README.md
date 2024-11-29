FLIGHTS APPLICATION

This app helps you to search for flights and sort them by price and/or duration.

Both backend and frontend are 'dockerized', to run the app follow the next steps:
1. Go to the /flights-backend folder in your terminal.
2. Execute: ./gradlew build
3. Execute: docker-compose up --build
4. Go to the /flights-frontend folder in your terminal.
5. Execute: npm run build
6. Execute: docker-compose up --build