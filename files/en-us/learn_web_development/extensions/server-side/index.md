---
title: Server-side website programming
slug: Learn_web_development/Extensions/Server-side
page-type: learn-topic
---

{{LearnSidebar}}

The **_Dynamic Websites_** – **Server-side programming** topic is a series of modules that show how to create dynamic websites; websites that deliver customized information in response to HTTP requests. The modules provide a general introduction to server-side programming, along with specific beginner-level tutorials on how to use the Django (Python) and Express (Node.js/JavaScript) web frameworks to create basic applications.

Most major websites use some kind of server-side technology to dynamically display data as required. For example, imagine how many products are available on Amazon, and imagine how many posts have been written on Facebook. Displaying all of these using different static pages would be extremely inefficient, so instead such sites display static templates (built using [HTML](/en-US/docs/Learn_web_development/Core/Structuring_content), [CSS](/en-US/docs/Learn_web_development/Core/Styling_basics), and [JavaScript](/en-US/docs/Learn_web_development/Core/Scripting)), and then dynamically update the data displayed inside those templates when needed, such as when you want to view a different product on Amazon.

In the modern world of web development, learning about server-side development is highly recommended.

## Prerequisites

Getting started with server-side programming is usually easier than client-side development, because dynamic websites tend to perform a lot of very similar operations (retrieving data from a database and displaying it in a page, validating user-entered data and saving it in a database, checking user permissions and logging users in, etc.), and are constructed using web frameworks that make these and other common web server operations easy.

Basic knowledge of programming concepts (or of a particular programming language) is useful, but not essential. Similarly, expertise in client-side coding is not required, but a basic knowledge will help you work better with the developers creating your client-side web "front end".

You will need to understand "how the web works". We recommend that you first read the following topics:

- [What is a web server](/en-US/docs/Learn_web_development/Howto/Web_mechanics/What_is_a_web_server)
- [What software do I need to build a website?](/en-US/docs/Learn_web_development/Howto/Tools_and_setup/What_software_do_I_need)
- [How do you upload files to a web server?](/en-US/docs/Learn_web_development/Howto/Tools_and_setup/Upload_files_to_a_web_server)

With that basic understanding, you'll be ready to work your way through the modules in this section.

## Modules

This topic contains the following modules. You should start with the first module, then go on to one of the following modules, which show how to work with two very popular server-side languages using appropriate web frameworks.

- [Server-side website programming first steps](/en-US/docs/Learn_web_development/Extensions/Server-side/First_steps)
  - : This module provides technology-agnostic information about server-side website programming such as "what is it?", "how does it differ from client-side programming?", and "why is it useful?". This module also outlines some of the more popular server-side web frameworks and gives guidance on how to select the best one for your site. Lastly, an introduction to web server security is provided.
- [Django Web Framework (Python)](/en-US/docs/Learn_web_development/Extensions/Server-side/Django)
  - : Django is an extremely popular and fully featured server-side web framework, written in Python. The module explains why Django is such a good web server framework, how to set up a development environment and how to perform common tasks with it.
- [Express Web Framework (Node.js/JavaScript)](/en-US/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs)
  - : Express is a popular web framework, written in JavaScript and hosted within the Node.js runtime environment. The module explains some of the key benefits of this framework, how to set up your development environment and how to perform common web development and deployment tasks.

## See also

- [Node server without framework](/en-US/docs/Learn_web_development/Extensions/Server-side/Node_server_without_framework)
  - : This article provides a simple static file server built with pure Node.js, for those of you not wanting to use a framework.
- [Properly configuring server MIME types](/en-US/docs/Learn_web_development/Extensions/Server-side/Configuring_server_MIME_types)
  - : Configuring your server to send the correct {{Glossary("MIME type", "MIME types")}} (also known as media types or content types) to browsers is important for browsers to be able to properly process and display the content.
    It is also important to prevent malicious content from masquerading as benign content.
- [Apache Configuration: .htaccess](/en-US/docs/Learn_web_development/Extensions/Server-side/Apache_Configuration_htaccess)
  - : Apache .htaccess files allow users to configure directories of the web server they control without modifying the main configuration file.
