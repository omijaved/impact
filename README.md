## How to setup Web-App.

In the project directory, you can run:

- ### `npm install`
  - Installs all the packages in package.json file on local machine's project directory. 

- ### `npm start`

  - Runs the app in the development mode.
  - Open [http://localhost:8080](http://localhost:8080) to view it in your browser.
  - The app connects with the backend sever which is supposed to be running on port 3001.

  - The page will reload when you make changes.
  - You may also see any lint errors in the console.

- ### `docker-compose up`

  - Builds the docker container and runs the app automatically.(Aforementioned executes the file `docker-compose.development.yml`)
  - Open [http://localhost:3000](http://localhost:3000) to view it in your browser.
  - Note: Inside the docker container, App runs on port 8080 of container.
  - #### Pre-requisites
    - Docker must be installed on local machine.

