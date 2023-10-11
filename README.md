# Setup #

First install all npm packages like so:

```
npm install
```
Secondly create a .env file in the root directory with the same contents as the .env.example file.
Then add the credentials you want to use for the database, you can also copy the credentials in the example below:
```env
POSTGRES_USER = hackathon
POSTGRES_PASSWORD = hackathon
POSTGRES_DB = hackathon_hitchtrackerdb
POSTGRES_PORT = 5432
```

Lastly run the project in docker using the following command:

```
docker-compose up -d --build
```

In case you want to see the logs from docker you can run the following instead:

```
docker-compose up --build
```
