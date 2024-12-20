---
title: Express web framework (Node.js/JavaScript)
slug: Learn_web_development/Extensions/Server-side/Express_Nodejs
page-type: learn-module
---

{{LearnSidebar}}

{{NextMenu("Learn_web_development/Extensions/Server-side/Express_Nodejs/Introduction", "Learn_web_development/Extensions/Server-side/Express_Nodejs")}}

Express is a popular unopinionated web framework, written in JavaScript and hosted within the Node.js runtime environment. This module explains some of the key benefits of the framework, how to set up your development environment and how to perform common web development and deployment tasks.

## Prerequisites

Before starting this module you will need to understand what server-side web programming and web frameworks are, ideally by reading the topics in our [Server-side website programming first steps](/en-US/docs/Learn_web_development/Extensions/Server-side/First_steps) module. A general knowledge of programming concepts and [JavaScript](/en-US/docs/Web/JavaScript) is highly recommended, but not essential to understanding the core concepts.

> [!NOTE]
> This website has many useful resources for learning JavaScript _in the context of client-side development_: [JavaScript](/en-US/docs/Web/JavaScript), [JavaScript Guide](/en-US/docs/Web/JavaScript/Guide), [JavaScript Basics](/en-US/docs/Learn_web_development/Getting_started/Your_first_website/Adding_interactivity), [JavaScript](/en-US/docs/Learn_web_development/Core/Scripting) (learning). The core JavaScript language and concepts are the same for server-side development on Node.js and this material will be relevant. Node.js offers [additional APIs](https://nodejs.org/dist/latest-v10.x/docs/api/) for supporting functionality that is useful in browserless environments (e.g., to create HTTP servers and access the file system), but does not support JavaScript APIs for working with the browser and DOM.
>
> This series of articles will provide some information about working with Node.js and Express, and there are numerous other excellent resources on the Internet and in books — some of these linked from [How do I get started with Node.js](https://stackoverflow.com/questions/2353818/how-do-i-get-started-with-node-js/5511507) (Stack Overflow) and [What are the best resources for learning Node.js?](https://www.quora.com/What-is-the-greatest-resource-for-learning-Node-js-for-a-newbie) (Quora).

## Tutorials

- [Express/Node introduction](/en-US/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/Introduction)
  - : In this first Express article we answer the questions "What is Node?" and "What is Express?" and give you an overview of what makes the Express web framework special. We'll outline the main features and show you some of the main building blocks of an Express application (although at this point you won't yet have a development environment in which to test it).
- [Setting up a Node (Express) development environment](/en-US/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/development_environment)
  - : Now that you know what Express is for, we'll show you how to set up and test a Node/Express development environment on Windows, Linux (Ubuntu), and macOS. Whatever common operating system you are using, this article should give you what you need to be able to start developing Express apps.
- [Express Tutorial: The Local Library website](/en-US/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/Tutorial_local_library_website)
  - : The first article in our practical tutorial series explains what you'll learn and provides an overview of the "local library" example website we'll be working through and evolving in subsequent articles.
- [Express Tutorial Part 2: Creating a skeleton website](/en-US/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/skeleton_website)
  - : This article shows how you can create a "skeleton" website project, which you can then go on to populate with site-specific routes, templates/views, and databases.
- [Express Tutorial Part 3: Using a Database (with Mongoose)](/en-US/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/mongoose)
  - : This article briefly introduces databases for Node/Express. It then goes on to show how we can use [Mongoose](https://mongoosejs.com/) to provide database access for the _LocalLibrary_ website. It explains how object schema and models are declared, the main field types, and basic validation. It also briefly shows a few of the main ways you can access model data.
- [Express Tutorial Part 4: Routes and controllers](/en-US/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/routes)
  - : In this tutorial we'll set up routes (URL handling code) with "dummy" handler functions for all the resource endpoints that we'll eventually need in the _LocalLibrary_ website. On completion, we'll have a modular structure for our route handling code, that we can extend with real handler functions in the following articles. We'll also have a really good understanding of how to create modular routes using Express.
- [Express Tutorial Part 5: Displaying library data](/en-US/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/Displaying_data)
  - : We're now ready to add the pages that display the _LocalLibrary_ website books and other data. The pages will include a home page that shows how many records we have of each model type and list and detail pages for all of our models. Along the way, we'll gain practical experience in getting records from the database and using templates.
- [Express Tutorial Part 6: Working with forms](/en-US/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/forms)
  - : In this tutorial we'll show you how to work with [HTML Forms](/en-US/docs/Learn_web_development/Extensions/Forms) in Express, using Pug, and in particular how to write forms to create, update, and delete documents from the database.
- [Express Tutorial Part 7: Deploying to production](/en-US/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/deployment)
  - : Now you've created an awesome _LocalLibrary_ website, you're going to want to install it on a public web server so that it can be accessed by library staff and members over the Internet. This article provides an overview of how you might go about finding a host to deploy your website, and what you need to do in order to get your site ready for production.

## Adding more tutorials

All existing tutorials are listed above, but if you would like to extend this module, some other interesting topics to cover include:

- Using sessions.
- User authentication.
- User authorization and permissions.
- Testing an Express web application.
- Web security for Express web applications.

An assessment for the module would also make a wonderful addition!

{{NextMenu("Learn_web_development/Extensions/Server-side/Express_Nodejs/Introduction", "Learn_web_development/Extensions/Server-side/Express_Nodejs")}}
