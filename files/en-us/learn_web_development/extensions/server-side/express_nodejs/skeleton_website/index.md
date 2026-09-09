---
title: "Express Tutorial Part 2: Creating a skeleton website"
short-title: "2: Skeleton website"
slug: Learn_web_development/Extensions/Server-side/Express_Nodejs/skeleton_website
page-type: learn-module-chapter
sidebar: learnsidebar
---

{{PreviousMenuNext("Learn_web_development/Extensions/Server-side/Express_Nodejs/Tutorial_local_library_website", "Learn_web_development/Extensions/Server-side/Express_Nodejs/mongoose", "Learn_web_development/Extensions/Server-side/Express_Nodejs")}}

This second article in our [Express Tutorial](/en-US/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/Tutorial_local_library_website) shows how you can create a "skeleton" website project which you can then go on to populate with site-specific routes, templates/views, and database calls.

<table>
  <tbody>
    <tr>
      <th scope="row">Prerequisites:</th>
      <td>
        <a href="/en-US/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/development_environment">Set up a Node development environment</a>.
          Review the Express Tutorial.
      </td>
    </tr>
    <tr>
      <th scope="row">Objective:</th>
      <td>
        To add routes, templates, and server code to an Express project.
      </td>
    </tr>
  </tbody>
</table>

## Overview

This article builds on the project configuration from [Setting up a Node development environment](/en-US/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/development_environment). We'll add the server, routes, and templates to create the framework for our [Local Library website](/en-US/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/Tutorial_local_library_website), to which we'll later add all the other code needed by the site.

The following sections explain the choice of view/CSS options, provide the code to copy into each project file, and show how to run the website to verify that it works.

## Choosing the project components

In this tutorial, we've made all the decisions for you about which library to use for each task. In your own project, you will need to make the decisions yourself, so we offer a basic overview about the ecosystem landscape. The [Package management](/en-US/docs/Learn_web_development/Extensions/Client-side_tools/Package_management) tutorial has a higher-level explanation of the aspects to consider.

### What view engine should I use?

Express supports a number of popular view/templating engines, including [EJS](https://www.npmjs.com/package/ejs), [Hbs](https://github.com/pillarjs/hbs), and [Pug](https://pugjs.org/api/getting-started.html). For information about configuring a template engine, see [Using template engines with Express](https://expressjs.com/en/guide/using-template-engines/) (Express docs) and the documentation for your target view engine.

Generally speaking, you should select a templating engine that delivers all the functionality you need and allows you to be productive sooner — or in other words, in the same way that you choose any other component! Some of the things to consider when comparing template engines:

- Time to productivity — If your team already has experience with a templating language then it is likely they will be productive faster using that language. If not, then you should consider the relative learning curve for candidate templating engines.
- Popularity and activity — Review the popularity of the engine and whether it has an active community. It is important to be able to get support when problems arise throughout the lifetime of the website.
- Style — Some template engines use specific markup to indicate inserted content within "ordinary" HTML, while others construct the HTML using a different syntax (for example, using indentation and block names).
- Performance/rendering time.
- Features — you should consider whether the engines you look at have the following features available:
  - Layout inheritance: Allows you to define a base template and then "inherit" just the parts of it that you want to be different for a particular page. This is typically a better approach than building templates by including a number of required components or building a template from scratch each time.
  - "Include" support: Allows you to build up templates by including other templates.
  - Concise variable and loop control syntax.
  - Ability to filter variable values at template level, such as making variables upper-case, or formatting a date value.
  - Ability to generate output formats other than HTML, such as JSON or XML.
  - Support for asynchronous operations and streaming.
  - Client-side features. If a templating engine can be used on the client this allows the possibility of having all or most of the rendering done client-side.

> [!NOTE]
> There are many resources on the Internet to help you compare the different options!

For this project, we'll use the [Pug](https://pugjs.org/api/getting-started.html) templating engine (previously called "Jade"), which we installed in the development environment tutorial.

### What CSS stylesheet engine should I use?

You can configure an Express project to use CSS stylesheet engines such as [LESS](https://lesscss.org/), [SASS](https://sass-lang.com/), and [Stylus](https://stylus-lang.com/).

> [!NOTE]
> CSS has some limitations that make certain tasks difficult. CSS stylesheet engines allow you to use more powerful syntax for defining your CSS and then compile the definition into plain-old CSS for browsers to use.

As with templating engines, you should use the stylesheet engine that will allow your team to be most productive. For this project, we'll use vanilla CSS as our CSS requirements are not sufficiently complicated to justify using anything else.

### What database should I use?

The code we'll add in this chapter doesn't use a database. _Express_ apps can use any [database mechanism](https://expressjs.com/en/guide/database-integration/) supported by _Node_ (_Express_ itself doesn't define any specific additional behavior/requirements for database management).

We'll discuss how to integrate with a database in a later article.

## Adding the application files

Open the **express-locallibrary-tutorial** directory you created in [Setting up a Node development environment](/en-US/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/development_environment). It already contains **package.json**, **package-lock.json**, **.gitignore**, and the installed dependencies in **node_modules**. Keep those files and settings; we'll now add the application code to that project.

```plain
express-locallibrary-tutorial
├── .gitignore
├── node_modules
│   └── [A lot of installed dependency files]
├── package-lock.json
└── package.json
```

### Directory structure

Create the following files (all empty text files):

- **app.js**
- **public/stylesheets/style.css**
- **routes/index.js**
- **routes/users.js**
- **server.js**
- **views/error.pug**
- **views/index.pug**
- **views/layout.pug**

If you are using Bash or a similar shell, you can create them all with this command:

```bash
mkdir -p public/stylesheets routes views && touch app.js public/stylesheets/style.css routes/{index,users}.js server.js views/{error,index,layout}.pug
```

Your project directory should now look like the following:

```plain
express-locallibrary-tutorial
├── .gitignore
├── app.js
├── node_modules
│   └── [A lot of installed dependency files]
├── package-lock.json
├── package.json
├── public
│   └── stylesheets
│       └── style.css
├── routes
│   ├── index.js
│   └── users.js
├── server.js
└── views
    ├── error.pug
    ├── index.pug
    └── layout.pug
```

The app routes are stored in separate modules under the **routes/** directory.
The templates are stored under the **views/** directory.

The following sections set up each file.

### server.js

The file **server.js** is the application entry point! Paste the following into the file:

```js
import { createServer } from "node:http";
import createDebug from "debug";

import app from "./app.js";

const debug = createDebug("express-locallibrary-tutorial:server");
const port = Number(process.env.PORT ?? 3000);
if (!Number.isInteger(port) || port < 0 || port > 65535)
  throw new RangeError("PORT must be an integer between 0 and 65535");
app.set("port", port);

const server = createServer(app);
server.on("error", (err) => {
  throw new Error("Failed to start server", { cause: err });
});
server.on("listening", () => {
  const address = server.address();
  debug(`Listening on port ${address.port}`);
});
server.listen(port);
```

The very first thing this does is `import` the "real" application entry point (**app.js**, in the project root) that sets up and returns the [`express()`](https://expressjs.com/en/api/) application object. The remainder of the code in this file sets up a node HTTP server with `app` set to a specific port (defined in an environment variable or 3000 if the variable isn't defined), and starts listening and reporting server errors and connections. For now you don't really need to know anything else about the code (everything in this file is "boilerplate"), but feel free to review it if you're interested.

### app.js

This file creates an `express` application object (named `app`, by convention), sets up the application with various settings and middleware, and then exports the app from the module. First, we import some useful node libraries into the file, including _http-errors_, _express_, and _morgan_. `node:path` is a core Node library for parsing file and directory paths. Then we `import` modules from our routes directory. These modules/files contain code for handling particular sets of related "routes" (URL paths). When we extend the skeleton application, for example to list all books in the library, we will add a new file for dealing with book-related routes.

```js
import path from "node:path";
import createError from "http-errors";
import express from "express";
import logger from "morgan";

import indexRouter from "./routes/index.js";
import usersRouter from "./routes/users.js";
```

> [!NOTE]
> At this point, we have just _imported_ the module; we haven't actually used its routes yet (this happens just a little bit further down the file).

Next, we create the `app` object using our imported _express_ module, and then use it to set up the view (template) engine. There are two parts to setting up the engine. First, we set the `"views"` value to specify the folder where the templates will be stored (in this case the subfolder **views/**). Then we set the `"view engine"` value to specify the template library (in this case "pug").

```js
const app = express();

// view engine setup
app.set("views", path.join(import.meta.dirname, "views"));
app.set("view engine", "pug");
```

The next set of functions call `app.use()` to add the _middleware_ libraries that we imported above into the request handling chain.
For example, `express.json()` and `express.urlencoded()` are needed to populate [`req.body`](https://expressjs.com/en/api/#req.body) with the form fields.
After these libraries we also use the `express.static` middleware, which makes _Express_ serve all the static files in the **/public** directory in the project root.

```js
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(import.meta.dirname, "public")));
```

Now that all the other middleware is set up, we add our (previously imported) route-handling code to the request handling chain. The imported code will define particular routes for the different _parts_ of the site:

```js
app.use("/", indexRouter);
app.use("/users", usersRouter);
```

> [!NOTE]
> The paths specified above (`"/"` and `"/users"`) are treated as a prefix to routes defined in the imported files.
> So for example, if the imported **users** module defines a route for `/profile`, you would access that route at `/users/profile`. We'll talk more about routes in a later article.

The last middleware in the file adds handler methods for errors and HTTP 404 responses.

```js
// catch 404 and forward to error handler
app.use((req, res, next) => {
  next(createError(404));
});

// error handler
app.use((err, req, res, next) => {
  if (res.headersSent) {
    next(err);
    return;
  }

  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};
  res.status(err.status ?? 500);
  res.render("error");
});
```

The Express application object (app) is now fully configured. The last step is to export it so it can be imported by **server.js**.

```js
export default app;
```

### Routes

The route file **routes/index.js** is the most basic route module structure.
First, it imports the `Router` object from the _express_ module.
Then it specifies a route on that object and lastly exports the router from the module (this is what allows the file to be imported into **app.js**).

```js
import { Router } from "express";

const router = Router();

export default router;
```

The route file **routes/users.js** is shown below.

```js
import { Router } from "express";

const router = Router();

router.get("/", (req, res) => {
  res.send("respond with a resource");
});

export default router;
```

It only has one additional line.
The route defines a callback that will be invoked whenever an HTTP `GET` request with the correct pattern is detected. The matching pattern is the route specified when the module is imported (`"/users"`) plus whatever is defined in this file (`"/"`). In other words, this route will be used when a URL of `/users/` is received.

> [!NOTE]
> Try this out by running the server with node and visiting the URL in your browser: `http://localhost:3000/users/`. You should see a message: 'respond with a resource'.

One thing of interest above is that the callback function has the third argument `next`, and is hence a middleware function rather than a simple route callback. While the code doesn't currently use the `next` argument, it may be useful in the future if you want to add multiple route handlers to the `'/'` route path.

### Views (templates)

The views (templates) are stored in the **views/** directory (as specified in **app.js**) and are given the file extension **.pug**. The method [`Response.render()`](https://expressjs.com/en/5x/api/#res.render) is used to render a specified template along with the values of named variables passed in an object, and then send the result as a response. In **routes/index.js**, add the following code above the `export` line, which uses the template "index" passing the template variable "title".

```js
router.get("/", (req, res, next) => {
  res.render("index", { title: "Express" });
});
```

The corresponding template for the above route is given below (**index.pug**). We'll talk more about the syntax later. All you need to know for now is that the `title` variable (with value `'Express'`) is inserted where specified in the template.

```pug
extends layout

block content
  h1= title
```

This template uses `extends layout` to reference the **views/layout.pug** file, which needs to contain the following:

```pug
doctype html
html(lang='en')
  head
    title= title
    meta(charset='utf-8')
    meta(name='viewport', content='width=device-width')
    link(rel='stylesheet', href='/stylesheets/style.css')
  body
    div(class='container-fluid')
      div(class='row')
        div(class='col-sm-10')
          block content
```

The **views/error.pug** file is rendered by the error handler in **app.js**. It contains the following:

```pug
extends layout

block content
  h1= message
  h2= error.status
  pre #{error.stack}
```

## Running the skeleton website

At this point, we have a complete skeleton project. The website doesn't actually _do_ very much yet, but it's worth running it to show that it works.

1. First, install the dependencies declared in **package.json**. You should already have them installed, but it's good to verify again.

   ```bash
   npm install
   ```

2. Then run the application.

   - On the Windows CMD prompt, use this command:

     ```batch
     SET DEBUG=express-locallibrary-tutorial:* & npm start
     ```

   - On Windows PowerShell, use this command:

     ```powershell
     $env:DEBUG = "express-locallibrary-tutorial:*"; npm start
     ```

     > [!NOTE]
     > PowerShell commands are not covered in this tutorial (The provided "Windows" commands assume you're using the Windows CMD prompt.)

   - On macOS or Linux, use this command:

     ```bash
     DEBUG=express-locallibrary-tutorial:* npm start
     ```

3. Then load `http://localhost:3000/` in your browser to access the app.

You should see a browser page that just contains the title "Express".

Congratulations! You now have a working Express application that can be accessed via port 3000.

> [!NOTE]
> You could also start the app just using the `npm start` command. Specifying the DEBUG variable as shown enables console logging/debugging. For example, when you visit the above page you'll see debug output like this:
>
> ```bash
> DEBUG=express-locallibrary-tutorial:* npm start
> ```
>
> ```plain
> > express-locallibrary-tutorial-test@1.0.0 start
> > node server.js
>
>   express-locallibrary-tutorial:server Listening on port 3000 +0ms
> GET / 200 78.072 ms - 315
> GET /stylesheets/style.css 200 1.647 ms - -
> ```

To restart the server automatically when you edit JavaScript files, stop it with **Ctrl+C** and use the `devstart` script you added in the development environment tutorial:

```bash
npm run devstart
```

Reload the browser to see your changes. During development, changes to views and stylesheets are served on the next request without restarting the server.

## Challenge yourself

Create a new route in **routes/users.js** that will display the text "_You're so cool_" at URL `/users/cool/`. Test it by running the server and visiting `http://localhost:3000/users/cool/` in your browser.

## Summary

You have now created a skeleton website project for the [Local Library](/en-US/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/Tutorial_local_library_website) and verified that it runs using _node_. Most importantly, you also understand how the project is structured, so you have a good idea where we need to make changes to add routes and views for our local library.

Next, we'll start modifying the skeleton so that it works as a library website.

## See also

- [Express application generator](https://expressjs.com/en/starter/generator/) (Express docs)
- [Using template engines with Express](https://expressjs.com/en/guide/using-template-engines/) (Express docs)

{{PreviousMenuNext("Learn_web_development/Extensions/Server-side/Express_Nodejs/Tutorial_local_library_website", "Learn_web_development/Extensions/Server-side/Express_Nodejs/mongoose", "Learn_web_development/Extensions/Server-side/Express_Nodejs")}}
