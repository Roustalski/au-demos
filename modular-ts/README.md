#Aurelia JS Modular (Typescript Demo) [Port]

The following is a port of the [ng-demos/modular](https://github.com/johnpapa/ng-demos/tree/master/modular) to Aurelia JS using Typescript.

## Running The App

To run the app, follow these steps.

1. Ensure that the aurelia [tooling dependencies](http://aurelia.io/docs.html#/aurelia/framework/1.0.0-beta.1.0.8/doc/article/getting-started) are installed.

2. Checkout the project
  ``` shell
  git clone git@github.com:Roustalski/au-demos.git [project_location]
  ```

3. Go to the modular-ts folder
  ``` shell
  cd [project_location]/modular-ts/
  ```

4. Install the application dependencies
  ``` shell
  npm install && jspm install -y
  ```

5. Build the application
  ``` shell
  gulp build
  ```

5. To run the app, execute the following command:

  ```shell
  npm start
  ```
6. Browse to [http://localhost:8080](http://localhost:8080) to see the app.

7. Aditionally, if you wish to see changes as you make them, run the ```gulp watch``` task in a new console window and browse to [http://localhost:9000](http://localhost:9000). The avengers module will still connect to the server running on :8080.