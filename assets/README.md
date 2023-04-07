# Velocity 2.0

## Description

Velocity 2.0 is designed to help cyclists find the optimal places to go cycling and to let them know if current weather conditions in the area are favorable. The user simply inputs a location into the search bar and the app will return a map of the area with the bike trails highlighted in different colors. The user can zoom in and out in order to get a better view. In addition, the app will return an overview of the  weather conditions. When the user finds a location that appeals to them, they are able to save it by adding it to their favorites. 

The main advantages of the app are the user's ability to view multiple bike trails highlighted on the same map, as well as the weather conditions. It takes all the pertinent information a cyclist needs and offers it all in the same place, eliminating the need to do separate searches for different routes and weather conditions. In addition, while most map apps merely display where a bike trail starts, Velocity 2.0 shows the entire highlighted route, offering the user a better sense of where the route would take them.

Throughout the course of building this project, our team learned a lot about the capabilities and limitations of template engines, specifically how the middleware must be configured to allow their use. The template engine our team used was Handlebars. Initially, we had thought that building out the UI and then reconfiguring it to use Handlebars was the best course of action, but that proved to be considerably harder than we had anticipated. We learned that incorporating a template engine into a project is not as simple as adjusting a few lines of code here and there, and that it is probably best practice to build the UI from the ground up using the template engine. 

## Table of Contents (Optional)

- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)

## Installation

To install this app, clone the repository to your computer. 

## Usage

Once you have cloned the repository to your computer, right click the "server.js" file and open it in the integrated terminal. Type "npm i" and press enter to install the dependenceis. Next, open the MySql terminal by typing "mysql -u root -p", pressing enter and inputting your password. Type "SOURCE db/schema.sql" and press enter. Now you are using the correct database. Simply type "exit" and press enter to leave the MySql terminal. Return to your bash terminal. If you wish to seed the database, type "npm run seed" and press enter. You may omit this step and the app will still work. Whether or not you omit this step, the next thing you will do is type "npm start" and press enter. You should get a notification that the app is listening on port 3001. Once you navigate to localhost:3001, you are ready to use the app. 

You will be directed to a login page. If you already have an account, you can log in with your username and password. Otherwise, you can click the create account button, which will open a dialogue box asking you to input your name, create a username and a unique password. Once you have created these, you are ready to log in. After you have logged in, you will be directed to the main page.

To start viewing bike routes and weather, simply type the location you're thinking of going cycling into the search bar. When you press the Let's Go! button, the map will display the bike routes in the area and you will see the weather conditions displayed to the right of it, or underneath it, depending on the size of your window. It bears noting that the map can be zoomed in and out. If you input a location but do not see any bike routes, try zooming the map out a few clicks.

To save a route, click the Add to Favorites button, next to the Let's Go! button. This will add the location to a list which will appear directly below the Let's Go! and Add to Favorites buttons. 

## Credits

The primary developers of this project were Ian Burley (GitHub: https://github.com/iburley33), Edgar Tapia (GitHub: ) and Ira Bigelow (https://github.com/Ibigelow92). This project was an update to a previous project developed by []. Within the scope of our work updating the previous project, Edgar set up the server and models, Ira set up the UI and Ian set up the controllers, utils, and the template engine. Teacher's assistant Roman Senin was instrumental in helping us reconfigure the app to use Handlebars. 

## License

MIT License

Copyright (c) 2023 iburley33

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

## Tests

The first test can be conducted in your bash terminal. After you install the dependencies and select your database, you will need to start the app by typing "npm start" in the terminal and pressing enter. The first gauge of whether the app is working is if you get a message saying the app is listening on port 3001. If so, then all is going as it should and you can proceed to the next step. 

Next, when you open the app in localhost:3001, the app should direct you to a login page. The UI should display an option to either log in or to create an account. If you select the option to log in, the app should produce a dialogue box asking for your username and password. Naturally, it should only work if you already have an account. If you do not have an account and select the "create account" option, you should see a dialogue box asking you to input your name and to create a unique username and password. After you input these fields, the app should direct you to log in. Now, when you input your credentials, the app should direct you to the main page. 

The map and weather components can be tested by simply inputting a location in the search bar and pressing the Let's Go! button. This should direct the map to the location you selected and populate the weather conditions box. The map should display bike trails highlighted in various colors. If no trails are visible, try zooming the map out. It is possible that the map is simply focused on too small of an area. 

Finally, to test the ability to add favorites, make sure you have inputted a location and then click the Add to Favorites button. This should make the favorited location display below the buttons. This favorited location should persist even if you close and reopen the window. 