# bradsmernstack_crash
practice snippets based on brad traversys latest crash course on mern stack https://www.youtube.com/watch?v=-0exw-9YJBo




Notes for my own reference

completed seting goal routes, structured them, overrided default express error handler when using throw new error(), also used a new package express-async-handler to avoid try catch in the goalControllers in upcoming parts

Completed monoddb integration, now, when server.js runs, it will call the connectDB function which uses mongoose to connect to my mongodbatlast. The conn string MONGO_URI is added in env.properties

Added goalModel, also implemented all the goalcontrollers in goalController.json. Tested all routes using postman

Added usermodel, implemented user routes and controlls and also implemtned jwt authentication. Created new middlewaer function to validate the token which is sent as bearer token from postman. Will be using this middleware function to protect my private routes. righ now i have used it only for getMe route 
