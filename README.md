# bradsmernstack_crash
practice snippets based on brad traversys latest crash course on mern stack https://www.youtube.com/watch?v=-0exw-9YJBo




Notes for my own reference

completed seting goal routes, structured them, overrided default express error handler when using throw new error(), also used a new package express-async-handler to avoid try catch in the goalControllers in upcoming parts

Completed monoddb integration, now, when server.js runs, it will call the connectDB function which uses mongoose to connect to my mongodbatlast. The conn string MONGO_URI is added in env.properties

Added goalModel, also implemented all the goalcontrollers in goalController.json. Tested all routes using postman

Added usermodel, implemented user routes and controlls and also implemtned jwt authentication. Created new middlewaer function to validate the token which is sent as bearer token from postman. Will be using this middleware function to protect my private routes. righ now i have used it only for getMe route 

Protected other routes aswell. updated the getgoal route so that it will return the goal based on the curren user fetched from the toeken. Updated getgoal and delted goal aswell so that user is able to delete/update the goal only if it is his


install froneEnd using npx create-react-app frontend --template redux
Added  "client":"npm start --prefix frontend" in server pakage.json which can be used to start server
clened up front end, also setup the 3 key pages of our apps, set the routes to them, also used fontawesome icons through react-icons library

form setups, concurrently


need to further understand raect toolkit apart

now at last session, started with goals. also user will redirect back to login from dashboard if not loggedin. now working on goalservice and goalslice

complete goals form in dashboard should implement the function to be dispatched

now i can create new goal. In the goal service function, token is passed using the config object, we are using protected api. (need to understand how this differes form devConn project)

TODO - when no error status code is set from the goalController function, the errormiddleware responding with 200 status code, why? shouldnt it respond with 500? (const statusCode=res.statusCode ? res.statusCode :500)

completed getgoals in dashboard, maybe add the date etc with each goal, and also no goals message when goals array is empty

completed delete goals also

heroku deployment :
manually created app in heroku ui, i didnt user cli this time
env variables created in settings
in deploy tab, connected repo and branch and enabled automatic deployment


DONE----- 
live link https://goal-creator.herokuapp.com/login