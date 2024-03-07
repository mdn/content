---
title: Understanding client-side JavaScript frameworks
slug: Learn/Tools_and_testing/Client-side_JavaScript_frameworks
page-type: learn-module
---

{{LearnSidebar}}

JavaScript frameworks are an essential part of modern front-end web development, providing developers with tried and tested tools for building scalable, interactive web applications. Many modern companies use frameworks as a standard part of their tooling, so many front-end development jobs now require framework experience. In this set of articles, we are aiming to give you a comfortable starting point to help you begin learning frameworks.

As an aspiring front-end developer, it can be hard to work out where to begin when learning frameworks — there are so many frameworks to choose from, new ones appear all the time, they mostly work in a similar way but do some things differently, and there are some specific things to be careful about when using frameworks.

We are not aiming to exhaustively teach you everything you need to know about React/ReactDOM, or Vue, or some other specific framework; the framework teams' own docs (and other resources) do that job already. Instead, we want to back up and first answer more fundamental questions such as:

- Why should I use a framework? What problems do they solve for me?
- What questions should I ask when trying to choose a framework? Do I even need to use a framework?
- What features do frameworks have? How do they work in general, and how do frameworks' implementations of these features differ?
- How do they relate to "vanilla" JavaScript or HTML?

After that, we'll provide some tutorials covering the essentials of some of the different framework choices, to provide you with enough context and familiarity to start going into greater depth yourself. We want you to go forward and learn about frameworks in a pragmatic way that doesn't forget about web platform fundamental best practices such as accessibility.

**[Get started now, with "Introduction to client-side frameworks"](/en-US/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Introduction)**

## Prerequisites

You should really learn the basics of the core web languages first before attempting to move on to learning client-side frameworks — [HTML](/en-US/docs/Learn/HTML), [CSS](/en-US/docs/Learn/CSS), and especially [JavaScript](/en-US/docs/Learn/JavaScript).

Your code will be richer and more professional as a result, and you'll be able to troubleshoot problems with more confidence if you understand the fundamental web platform features that the frameworks are building on top of.

## Introductory guides

- [1. Introduction to client-side frameworks](/en-US/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Introduction)
  - : We begin our look at frameworks with a general overview of the area, looking at a brief history of JavaScript and frameworks, why frameworks exist and what they give us, how to start thinking about choosing a framework to learn, and what alternatives there are to client-side frameworks.
- [2. Framework main features](/en-US/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Main_features)
  - : Each major JavaScript framework has a different approach to updating the DOM, handling browser events, and providing an enjoyable developer experience. This article will explore the main features of "the big 4" frameworks, looking at how frameworks tend to work from a high level and the differences between them.

## React tutorials

> **Note:** React tutorials last tested in January 2023, with React/ReactDOM 18.2.0 and create-react-app 5.0.1.
>
> If you need to check your code against our version, you can find a finished version of the sample React app code in our [todo-react repository](https://github.com/mdn/todo-react). For a running live version, see <https://mdn.github.io/todo-react/>.

- [1. Getting started with React](/en-US/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/React_getting_started)
  - : In this article we will say hello to React. We'll discover a little bit of detail about its background and use cases, set up a basic React toolchain on our local computer, and create and play with a simple starter app, learning a bit about how React works in the process.
- [2. Beginning our React todo list](/en-US/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/React_todo_list_beginning)
  - : Let's say that we've been tasked with creating a proof-of-concept in React – an app that allows users to add, edit, and delete tasks they want to work on, and also mark tasks as complete without deleting them. This article will walk you through putting the basic `App` component structure and styling in place, ready for individual component definition and interactivity, which we'll add later.
- [3. Componentizing our React app](/en-US/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/React_components)
  - : At this point, our app is a monolith. Before we can make it do things, we need to break it apart into manageable, descriptive components. React doesn't have any hard rules for what is and isn't a component – that's up to you! In this article, we will show you a sensible way to break our app up into components.
- [4. React interactivity: Events and state](/en-US/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/React_interactivity_events_state)
  - : With our component plan worked out, it's now time to start updating our app from a completely static UI to one that actually allows us to interact and change things. In this article we'll do this, digging into events and state along the way.
- [5. React interactivity: Editing, filtering, conditional rendering](/en-US/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/React_interactivity_filtering_conditional_rendering)
  - : As we near the end of our React journey (for now at least), we'll add the finishing touches to the main areas of functionality in our Todo list app. This includes allowing you to edit existing tasks and filtering the list of tasks between all, completed, and incomplete tasks. We'll look at conditional UI rendering along the way.
- [6. Accessibility in React](/en-US/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/React_accessibility)
  - : In our final tutorial article, we'll focus on (pun intended) accessibility, including focus management in React, which can improve usability and reduce confusion for both keyboard-only and screen reader users.
- [7. React resources](/en-US/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/React_resources)
  - : Our final article provides you with a list of React resources that you can use to go further in your learning.

## Ember tutorials

> **Note:** Ember tutorials last tested in May 2020, with Ember/Ember CLI version 3.18.0.
>
> If you need to check your code against our version, you can find a finished version of the sample Ember app code in the [ember-todomvc-tutorial repository](https://github.com/NullVoxPopuli/ember-todomvc-tutorial/tree/master/steps/00-finished-todomvc/todomvc). For a running live version, see <https://nullvoxpopuli.github.io/ember-todomvc-tutorial/> (this also includes a few additional features not covered in the tutorial).

- [1. Getting started with Ember](/en-US/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Ember_getting_started)
  - : In our first Ember article we will look at how Ember works and what it's useful for, install the Ember toolchain locally, create a sample app, and then do some initial setup to get it ready for development.
- [2. Ember app structure and componentization](/en-US/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Ember_structure_componentization)
  - : In this article we'll get right on with planning out the structure of our TodoMVC Ember app, adding in the HTML for it, and then breaking that HTML structure into components.
- [3. Ember interactivity: Events, classes and state](/en-US/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Ember_interactivity_events_state)
  - : At this point we'll start adding some interactivity to our app, providing the ability to add and display new todo items. Along the way, we'll look at using events in Ember, creating component classes to contain JavaScript code to control interactive features, and setting up a service to keep track of the data state of our app.
- [4. Ember Interactivity: Footer functionality, conditional rendering](/en-US/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Ember_conditional_footer)
  - : Now it's time to start tackling the footer functionality in our app. Here we'll get the todo counter to update to show the correct number of todos still to complete, and correctly apply styling to completed todos (i.e. where the checkbox has been checked). We'll also wire up our "Clear completed" button. Along the way, we'll learn about using conditional rendering in our templates.
- [5. Routing in Ember](/en-US/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Ember_routing)
  - : In this article we learn about routing or URL-based filtering as it is sometimes referred to. We'll use it to provide a unique URL for each of the three todo views — "All", "Active", and "Completed".
- [6. Ember resources and troubleshooting](/en-US/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Ember_resources)
  - : Our final Ember article provides you with a list of resources that you can use to go further in your learning, plus some useful troubleshooting and other information.

## Vue tutorials

> **Note:** Vue tutorial last tested in January 2023, with Vue 3.2.45.
>
> If you need to check your code against our version, you can find a finished version of the sample Vue app code in our [todo-vue repository](https://github.com/mdn/todo-vue). For a running live version, see <https://mdn.github.io/todo-vue/>.

- [1. Getting started with Vue](/en-US/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Vue_getting_started)
  - : Now let's introduce Vue, the third of our frameworks. In this article, we'll look at a little bit of Vue background, learn how to install it and create a new project, study the high-level structure of the whole project and an individual component, see how to run the project locally, and get it prepared to start building our example.
- [2. Creating our first Vue component](/en-US/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Vue_first_component)
  - : Now it's time to dive deeper into Vue, and create our own custom component — we'll start by creating a component to represent each item in the todo list. Along the way, we'll learn about a few important concepts such as calling components inside other components, passing data to them via props and saving data state.
- [3. Rendering a list of Vue components](/en-US/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Vue_rendering_lists)
  - : At this point we've got a fully working component; we're now ready to add multiple `ToDoItem` components to our app. In this article we'll look at adding a set of todo item data to our `App.vue` component, which we'll then loop through and display inside `ToDoItem` components using the `v-for` directive.
- [4. Adding a new todo form: Vue events, methods, and models](/en-US/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Vue_methods_events_models)
  - : We now have sample data in place and a loop that takes each bit of data and renders it inside a `ToDoItem` in our app. What we really need next is the ability to allow our users to enter their own todo items into the app, and for that, we'll need a text `<input>`, an event to fire when the data is submitted, a method to fire upon submission to add the data and rerender the list, and a model to control the data. This is what we'll cover in this article.
- [5. Styling Vue components with CSS](/en-US/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Vue_styling)
  - : The time has finally come to make our app look a bit nicer. In this article, we'll explore the different ways of styling Vue components with CSS.
- [6. Using Vue computed properties](/en-US/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Vue_computed_properties)
  - : In this article we'll add a counter that displays the number of completed todo items, using a feature of Vue called computed properties. These work similarly to methods but only re-run when one of their dependencies changes.
- [7. Vue conditional rendering: editing existing todos](/en-US/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Vue_conditional_rendering)
  - : Now it is time to add one of the major parts of functionality that we're still missing — the ability to edit existing todo items. To do this, we will take advantage of Vue's conditional rendering capabilities — namely `v-if` and `v-else` — to allow us to toggle between the existing todo item view and an edit view where you can update todo item labels. We'll also look at adding functionality to delete todo items.
- [8. Vue refs and lifecycle methods for focus management](/en-US/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Vue_refs_focus_management)
  - : We are nearly done with Vue. The last bit of functionality to look at is focus management, or put another way, how we can improve our app's keyboard accessibility. We'll look at using Vue refs to handle this — an advanced feature that allows you to have direct access to the underlying DOM nodes below the virtual DOM, or direct access from one component to the internal DOM structure of a child component.
- [9. Vue resources](/en-US/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Vue_resources)
  - : Now we'll round off our study of Vue by giving you a list of resources that you can use to go further in your learning, plus some other useful tips.

## Svelte tutorials

> **Note:** Svelte tutorials last tested in August 2020, with Svelte 3.24.1.
>
> If you need to check your code against our version, you can find a finished version of the sample Svelte app code as it should be after each article, in our [mdn-svelte-tutorial](https://github.com/opensas/mdn-svelte-tutorial) repo. For a running live version, see our Svelte REPL at <https://svelte.dev/repl/378dd79e0dfe4486a8f10823f3813190?version=3.23.2>.

- [1. Getting started with Svelte](/en-US/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Svelte_getting_started)
  - : In this article we'll provide a quick introduction to the [Svelte framework](https://svelte.dev/). We will see how Svelte works and what sets it apart from the rest of the frameworks and tools we've seen so far. Then we will learn how to set up our development environment, create a sample app, understand the structure of the project, and see how to run it locally and build it for production.
- [2. Starting our Svelte Todo list app](/en-US/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Svelte_Todo_list_beginning)
  - : Now that we have a basic understanding of how things work in Svelte, we can start building our example app: a todo list. In this article we will first have a look at the desired functionality of our app, then we'll create a `Todos.svelte` component and put static markup and styles in place, leaving everything ready to start developing our To-Do list app features, which we'll go on to in subsequent articles.
- [3. Dynamic behavior in Svelte: working with variables and props](/en-US/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Svelte_variables_props)
  - : Now that we have our markup and styles ready we can start developing the required features for our Svelte To-Do list app. In this article we'll be using variables and props to make our app dynamic, allowing us to add and delete todos, mark them as complete, and filter them by status.
- [4. Componentizing our Svelte app](/en-US/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Svelte_components)
  - : The central objective of this article is to look at how to break our app into manageable components and share information between them. We'll componentize our app, then add more functionality to allow users to update existing components.
- [5. Advanced Svelte: Reactivity, lifecycle, accessibility](/en-US/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Svelte_reactivity_lifecycle_accessibility)
  - : In this article we will add the app's final features and further componentize our app. We will learn how to deal with reactivity issues related to updating objects and arrays. To avoid common pitfalls, we'll have to dig a little deeper into Svelte's reactivity system. We'll also look at solving some accessibility focus issues, and more besides.
- [6. Working with Svelte stores](/en-US/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Svelte_stores)
  - : In this article we will show another way to handle state management in Svelte — [Stores](https://learn.svelte.dev/tutorial/writable-stores). Stores are global data repositories that hold values. Components can subscribe to stores and receive notifications when their values change.
- [7. TypeScript support in Svelte](/en-US/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Svelte_TypeScript)
  - : We will now learn how to use TypeScript in Svelte applications. First we'll learn what TypeScript is and what benefits it can bring us. Then we'll see how to configure our project to work with TypeScript files. Finally we will go over our app and see what modifications we have to make to fully take advantage of TypeScript features.
- [8. Deployment and next steps](/en-US/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Svelte_deployment_next)
  - : In this final article we will look at how to deploy your application and get it online, and also share some of the resources that you should go on to, to continue your Svelte learning journey.

## Angular tutorials

> **Note:** Angular tutorials last tested in April 2021, with Angular CLI (NG) 11.2.5.

- [1. Getting started with Angular](/en-US/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Angular_getting_started)
  - : In this article we look at what Angular has to offer, install the prerequisites and set up a sample app, and look at Angular's basic architecture.
- [2. Beginning our Angular todo list app](/en-US/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Angular_todo_list_beginning)
  - : At this point, we are ready to start creating our to-do list application using Angular. The finished application will display a list of to-do items and includes editing, deleting, and adding features. In this article you will get to know your application structure, and work up to displaying a basic list of to-do items.
- [3. Styling our Angular app](/en-US/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Angular_styling)
  - : Now that we've got our basic application structure set up and started displaying something useful, let's switch gears and spend an article looking at how Angular handles styling of applications.
- [4. Creating an item component](/en-US/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Angular_item_component)
  - : Components provide a way for you to organize your application. This article walks you through creating a component to handle the individual items in the list, and adding check, edit, and delete functionality. The Angular event model is covered here.
- [5. Filtering our to-do items](/en-US/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Angular_filtering)
  - : Now let's move on to adding functionality to allow users to filter their to-do items, so they can view active, completed, or all items.
- [6. Building Angular applications and further resources](/en-US/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Angular_building)
  - : This final Angular article covers how to build an app ready for production, and provides further resources for you to continue your learning journey.

## Which frameworks did we choose?

We are publishing our initial set of articles with guides focusing on five frameworks. Four of them are very popular and well-established — React/ReactDOM, Ember, Vue, and Angular — whereas Svelte is a comparative newcomer that shows a lot of promise and has gained a lot of recent popularity.

There is a variety of reasons for this:

- They are popular choices that will be around for a while — like with any software tool, it is good to stick with actively-developed choices that are likely to not be discontinued next week, and which will be desirable additions to your skill set when looking for a job.
- They have strong communities and good documentation. It is very important to be able to get help with learning a complex subject, especially when you are just starting out.
- We don't have the resources to cover _all_ modern frameworks. That list would be very difficult to keep up-to-date anyway, as new ones appear all the time.
- As a beginner, trying to choose what to focus on out of the huge number of choices available is a very real problem. Keeping the list short is therefore helpful.

We want to say this upfront — we've **not** chosen the frameworks we are focusing on because we think they are the best, or because we endorse them in any way. We just think they score highly on the above criteria.

Note that we were hoping to have more frameworks included upon initial publication, but we decided to release the content and then add more framework guides later, rather than delay it longer. If your favorite framework is not represented in this content and you'd like to help change that, feel free to [discuss it with us](/en-US/docs/MDN/Community/Communication_channels)!
