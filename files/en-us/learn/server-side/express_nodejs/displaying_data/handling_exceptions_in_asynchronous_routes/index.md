---
title: 'Handling exceptions in asynchronous routes'
slug: Learn/Server-side/Express_Nodejs/Displaying_data/Handling_exceptions_in_asynchronous_routes
---

The current version of Express (version 4) was not designed to handle exceptions in route controller functions, and does not pass them to the express error handling middleware.
Since we want to use modern asynchronous database APIs that throw exceptions on error, we'll need to handle these and pass them to the express middleware ourselves.
This is done using the [express-async-handler](https://www.npmjs.com/package/express-async-handler) module.

> **Note:** Express 5, the current beta release, is expected to handle exceptions in route controllers by default.
> Until then, if we want to code our database queries using `await`/`async`, we'll have to handle the exceptions in our own code.

## The problem

The Express 4 route controller function takes up to three parameters, which are named `req`, `res`, `next` (by convention).
The `req` parameter contains information about the request, such as the URL parameters, while the `res` represents the response, and can be used to send back a string, HTML, JSON, populate a template, and so on.
The `next` parameter is optional, and can be used to pass any errors along your express application middleware.

This controller function is very much designed for working with asynchronous APIs that take a callback function with error and result parameters, which on completion either renders the result or calls `next()` with the error.
A fictional example is shown below.

```js
exports.some_function = (req, res, next) => {
  AsyncFunction(function (err, successfulResult) {
      if (err) {
        return next(err);
      }
      //Successful, so render
      res.render("successful_result", { title: "Result", resultData: successfulResult });
    });
};
```

In [Express Tutorial Part 3: Using a Database (with Mongoose)](/en-US/docs/Learn/Server-side/Express_Nodejs/mongoose#database_apis_are_asynchronous) we explained how we want to make asynchronous database queries using `await`/`async`, which will throw exceptions if the associated promise is rejected.

Throwing exceptions will break the route controller function. It may or may not crash the server, but you certainly won't have proper error handling.

## A solution

In order for code that throws exceptions to work with Express 4 we need to write our controller functions such that exceptions are caught and passed on to the normal Express middleware.
One way to do that would be put a `try...catch` block around our code as shown:

```js
exports.some_function = (req, res, next) => {
  try {
    const successfulResult = await AsyncFunction();
    res.render("successful_result", { title: "Result", resultData: successfulResult });
  }
  catch e {
    return next(err);
  }
};
```

We could write a wrapper function to avoid some of that boilerplate, but for this tutorial we'll instead use the [express-async-handler](https://www.npmjs.com/package/express-async-handler) module that already provides the needed code.

## Using express-async-handler

The [express-async-handler](https://www.npmjs.com/package/express-async-handler) module is installed by entering the following command:

```bash
npm install --save express-async-handler
```

The module is then required into controller modules like this:

```js
const asyncHandler = require('express-async-handler')
```

You then use the handler as shown below.
Note how much simpler the code is than the previous versions, now that you don't have to think about callbacks or catching the error and returning it with `next`.

```js
exports.some_function = asyncHandler(async (req, res, next) => {
    const successfulResult = await AsyncFunction();
    res.render("successful_result", { title: "Result", resultData: successfulResult });
});
```

That's it!
You can now install `express-async-handler` into the local library if you want.
You could also update our controller modules to `require()` the `express-async-handler` module and update each of the route controllers functions that we created in [Express Tutorial Part 4: Routes and controllers](/en-US/docs/Learn/Server-side/Express_Nodejs/routes).
However we'll be revisiting each of these in the following topics, so you don't need to!

## Next steps

- Return to [Express Tutorial Part 5: Displaying library data](/en-US/docs/Learn/Server-side/Express_Nodejs/Displaying_data).
- Proceed to the next subarticle of part 5: [The LocalLibrary base template](/en-US/docs/Learn/Server-side/Express_Nodejs/Displaying_data/LocalLibrary_base_template).
