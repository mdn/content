---
title: Middleware
slug: Glossary/Middleware
page-type: glossary-definition
tags:
  - CodingScripting
---

Middleware is a (loosely defined) term for any software or service that enables the parts of a system to communicate and manage data. It is the software that handles communication between components and input/output, so developers can focus on the specific purpose of their application.

In server-side web application frameworks, the term is often more specifically used to refer to pre-built software components that can be added to the framework's request/response processing pipeline, to handle tasks such as database access.

Middleware is required for helping developers in building applications more effectively and efficiently. The middleware will act as a connection between data, applications, and the users. When you are an organization with a multi-cloud environment, then middleware will make it more cost-effective for the development and running of the application at scale.

## How does Node.js middleware pattern work?
Middleware comes in the middle of the request and response cycle of the node.js execution. It also provides access to many functions like request and response objects with the Next function of the cycle.

Tasks that can be performed with the middleware functions include:

Making quick changes to the request and response objects
Calling the next middleware immediately as per the stack
Effectively executing any code
Automatically terminating the request-response cycle

![Screenshot_20230210_100144](https://user-images.githubusercontent.com/112061123/218144967-a925daff-3775-4fed-adef-3d3225abf42a.png)
When the active middleware function doesn’t stop the request-response cycle, it will call the next() function to pass on the control to the next middleware function, making sure that none of the requests are pending.

## What is Express middleware?
Middleware is an abstraction layer that works as an intermediate between the software layers. Express middleware is a function that is compiled during the lifecycle of the Express server. There is always a competition between Express and Koa for better middleware.
![Screenshot_20230210_100326](https://user-images.githubusercontent.com/112061123/218145303-e1a01db5-960c-4f1f-8a46-a2110cf80383.png)

Every middleware can access each HTTP request and respond to every path that it is attached to. Moreover, the middleware can end the HTTP request independently or transfer it to another middleware using the next function. It will allow you to categorize the code and generate reusable middleware, just like chaining.

# 1. Application-level middleware
In the application-level middleware, we consider an authentication middleware and how it can be created. When the user is not authenticated, it will not be possible to call the mentioned routes. When it is necessary to build an authentication for every GET, POST call, the development of an authentication middleware will follow.

When you receive the authentication request, the authentication middleware makes progress towards the authentication code logic that is available inside it. Once the authentication is successful, the rest of the route can be called using the next function. However, when it fails, you may not be able to perform the next route as the middleware will show errors.

# 2. Router-level middleware
Router-level middleware is almost like the application-level middleware and works in the same way. The difference is that it can generate and limit an instance using the Express.Router() function. You can make use of the router.use() and router.METHOD() functions to load router-level middleware.

# 3. Build-in middleware
The build-in middleware doesn't depend on the ‘Connect’ function and unlike the previous 4.X version types, Express now acts as a module. Generally, under the Express types of middleware, you can utilize these listed middleware functions:

json - a function that computes the incoming request by adding JSON payloads
static - a function that acts as a static asset to the application.

# 4. Error-handling middleware
Express.js is capable of handling any default errors and can also define error-handling middleware functions, which are similar to the other middleware functions. The major difference is the error-handling functions.

# 5. Third-party middleware
Sometimes, you will need to have some additional features in the backend operations. For that, you can install the Node.js module for the specific function and then apply the same to your application (either on the application or router level).

## See also

- [Middleware\_(distributed_applications)](<https://en.wikipedia.org/wiki/Middleware_(distributed_applications)>) on Wikipedia
- [Middleware](https://en.wikipedia.org/wiki/Middleware) on Wikipedia
