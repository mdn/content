---
title: Django Web Framework (Python)
slug: Learn_web_development/Extensions/Server-side/Django
page-type: learn-module
---

{{LearnSidebar}}

{{NextMenu("Learn_web_development/Extensions/Server-side/Django/Introduction", "Learn_web_development/Extensions/Server-side/Django")}}

Django is an extremely popular and fully featured server-side web framework, written in Python. This module shows you why Django is one of the most popular web server frameworks, how to set up a development environment, and how to start using it to create your own web applications.

## Prerequisites

Before starting this module you don't need to have any knowledge of Django. Ideally, you would need to understand what server-side web programming and web frameworks are by reading the topics in our [Server-side website programming first steps](/en-US/docs/Learn_web_development/Extensions/Server-side/First_steps) module.

A general knowledge of programming concepts and [Python](/en-US/docs/Glossary/Python) is recommended, but is not essential to understanding the core concepts.

> [!NOTE]
> Python is one of the easiest programming languages for novices to read and understand. That said, if you want to understand this module better, there are numerous free books and tutorials available on the internet to help you out (new programmers might want to check out the [Python for Non Programmers](https://wiki.python.org/moin/BeginnersGuide/NonProgrammers) page on the python.org wiki).

## Tutorials

- [Django introduction](/en-US/docs/Learn_web_development/Extensions/Server-side/Django/Introduction)
  - : In this first Django article we answer the question "What is Django?" and give you an overview of what makes this web framework special. We'll outline the main features, including some advanced functionality that we won't have time to cover in detail in this module. We'll also show you some of the main building blocks of a Django application, to give you an idea of what it can do before you set it up and start playing.
- [Setting up a Django development environment](/en-US/docs/Learn_web_development/Extensions/Server-side/Django/development_environment)
  - : Now that you know what Django is for, we'll show you how to set up and test a Django development environment on Windows, Linux (Ubuntu), and macOS — whatever common operating system you are using, this article should give you what you need to be able to start developing Django apps.
- [Django Tutorial: The Local Library website](/en-US/docs/Learn_web_development/Extensions/Server-side/Django/Tutorial_local_library_website)
  - : The first article in our practical tutorial series explains what you'll learn, and provides an overview of the "local library" — an example website we'll be working through and evolving in subsequent articles.
- [Django Tutorial Part 2: Creating a skeleton website](/en-US/docs/Learn_web_development/Extensions/Server-side/Django/skeleton_website)
  - : This article shows how you can create a "skeleton" website project, which you can then go on to populate with site-specific settings, URLs, models, views, and templates.
- [Django Tutorial Part 3: Using models](/en-US/docs/Learn_web_development/Extensions/Server-side/Django/Models)
  - : This article shows how to define models for the _LocalLibrary_ website — models represent the data structures we want to store our app's data in, and also allow Django to store data in a database for us (and modify it later on). It explains what a model is, how it is declared, and some of the main field types. It also briefly shows a few of the main ways you can access model data.
- [Django Tutorial Part 4: Django admin site](/en-US/docs/Learn_web_development/Extensions/Server-side/Django/Admin_site)
  - : Now that we've created models for the _LocalLibrary_ website, we'll use the Django Admin site to add some "real" book data. First, we'll show you how to register the models with the admin site, then we'll show you how to login and create some data. At the end, we show some ways in which you can further improve the presentation of the admin site.
- [Django Tutorial Part 5: Creating our home page](/en-US/docs/Learn_web_development/Extensions/Server-side/Django/Home_page)
  - : We're now ready to add the code to display our first full page — a home page for the _LocalLibrary_ that shows how many records we have of each model type, and provides sidebar navigation links to our other pages. Along the way we'll gain practical experience in writing basic URL maps and views, getting records from the database, and using templates.
- [Django Tutorial Part 6: Generic list and detail views](/en-US/docs/Learn_web_development/Extensions/Server-side/Django/Generic_views)
  - : This tutorial extends our _LocalLibrary_ website, adding list and detail pages for books and authors. Here we'll learn about generic class-based views, and show how they can reduce the amount of code you have to write for common use cases. We'll also go into URL handling in greater detail, showing how to perform basic pattern matching.
- [Django Tutorial Part 7: Sessions framework](/en-US/docs/Learn_web_development/Extensions/Server-side/Django/Sessions)
  - : This tutorial extends our _LocalLibrary_ website, adding a session-based visit-counter to the home page. This is a relatively simple example, but it does show how you can use the session framework to provide persistent behavior for anonymous users on your own sites.
- [Django Tutorial Part 8: User authentication and permissions](/en-US/docs/Learn_web_development/Extensions/Server-side/Django/Authentication)
  - : In this tutorial we'll show you how to allow users to login to your site with their own accounts, and how to control what they can do and see based on whether or not they are logged in and their _permissions_. As part of this demonstration, we'll extend the _LocalLibrary_ website, adding login and logout pages, and user- and staff-specific pages for viewing books that have been borrowed.
- [Django Tutorial Part 9: Working with forms](/en-US/docs/Learn_web_development/Extensions/Server-side/Django/Forms)
  - : In this tutorial we'll show you how to work with [HTML Forms](/en-US/docs/Learn_web_development/Extensions/Forms) in Django, and in particular the easiest way to write forms to create, update and delete model instances. As part of this demonstration, we'll extend the _LocalLibrary_ website so that librarians can renew books, and create, update, and delete authors using our own forms (rather than using the admin application).
- [Django Tutorial Part 10: Testing a Django web application](/en-US/docs/Learn_web_development/Extensions/Server-side/Django/Testing)
  - : As websites grow they become harder to test manually — not only is there more to test, but, as the interactions between components become more complex, a small change in one area can require many additional tests to verify its impact on other areas. One way to mitigate these problems is to write automated tests, which can easily and reliably be run every time you make a change. This tutorial shows how to automate _unit testing_ of your website using Django's test framework.
- [Django Tutorial Part 11: Deploying Django to production](/en-US/docs/Learn_web_development/Extensions/Server-side/Django/Deployment)
  - : Now you've created (and tested) an awesome _LocalLibrary_ website, you're going to want to install it on a public web server so that it can be accessed by library staff and members over the internet. This article provides an overview of how you might go about finding a host to deploy your website, and what you need to do in order to get your site ready for production.
- [Django web application security](/en-US/docs/Learn_web_development/Extensions/Server-side/Django/web_application_security)
  - : Protecting user data is an essential part of any website design. We previously explained some of the more common security threats in the article [Web security](/en-US/docs/Web/Security) — this article provides a practical demonstration of how Django's built-in protections handle such threats.

## Assessments

The following assessment will test your understanding of how to create a website using Django, as described in the tutorials listed above.

- [DIY Django mini blog](/en-US/docs/Learn_web_development/Extensions/Server-side/Django/django_assessment_blog)
  - : In this assessment you'll use some of the knowledge you've learned from this module to create your own blog.

{{NextMenu("Learn_web_development/Extensions/Server-side/Django/Introduction", "Learn_web_development/Extensions/Server-side/Django")}}
