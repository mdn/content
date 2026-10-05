---
title: JavaScript frameworks and libraries
slug: Learn_web_development/Core/Frameworks_libraries
page-type: learn-module
sidebar: learnsidebar
---

{{NextMenu("Learn_web_development/Core/Frameworks_libraries/Introduction", "Learn_web_development/Core")}}

JavaScript frameworks are an essential part of modern front-end web development, providing developers with tried and tested tools for building scalable, interactive web applications. Many modern companies use frameworks as a standard part of their tooling, so many front-end development jobs now require framework experience. This set of articles provides a comfortable starting point to help you begin learning frameworks.

As an aspiring front-end developer, it can be hard to work out where to begin when learning frameworks — there are so many frameworks to choose from, new ones appear all the time, they mostly work in a similar way but do some things differently, and there are some specific things to be careful about when using frameworks.

We are not aiming to exhaustively teach you everything you need to know about React/ReactDOM, or any other specific framework; the framework teams' own docs (and other resources) do that job already. Instead, we want to back up and first answer more fundamental questions such as:

- Why should I use a framework? What problems do they solve for me?
- What questions should I ask when trying to choose a framework? Do I even need to use a framework?
- What features do frameworks have? How do they work in general, and how do frameworks' implementations of these features differ?
- How do they relate to "vanilla" JavaScript or HTML?

After that, we'll provide some tutorials covering the essentials of React, a popular framework choice, to provide you with enough context and familiarity to start going into greater depth yourself. We want you to go forward and learn about frameworks in a pragmatic way that doesn't forget about web platform fundamental best practices such as accessibility.

> [!NOTE]
> Scrimba's [Libraries/Frameworks](https://scrimba.com/learn-react-c0e/~033a?via=mdn) <sup>[_MDN learning partner_](/en-US/docs/MDN/Writing_guidelines/Learning_content#partner_links_and_embeds)</sup> interactive tutorial provides a useful summary of frameworks versus libraries, a brief history of libraries and frameworks on the web, and some background information specifically on React.

## Prerequisites

You should really learn the basics of the core web languages first before attempting to move on to learning client-side frameworks — [HTML](/en-US/docs/Learn_web_development/Core/Structuring_content), [CSS](/en-US/docs/Learn_web_development/Core/Styling_basics), and especially [JavaScript](/en-US/docs/Learn_web_development/Core/Scripting).

Your code will be richer and more professional as a result, and you'll be able to troubleshoot problems with more confidence if you understand the fundamental web platform features that the frameworks are building on top of.

## Introductory tutorials

- [Introduction to client-side frameworks](/en-US/docs/Learn_web_development/Core/Frameworks_libraries/Introduction)
  - : We begin our look at frameworks with a general overview of the area, looking at a brief history of JavaScript and frameworks, why frameworks exist and what they give us, how to start thinking about choosing a framework to learn, and what alternatives there are to client-side frameworks.
- [Framework main features](/en-US/docs/Learn_web_development/Core/Frameworks_libraries/Main_features)
  - : Each major JavaScript framework has a different approach to updating the DOM, handling browser events, and providing an enjoyable developer experience. This article will explore the main features of "the big 4" frameworks, looking at how frameworks tend to work from a high level and the differences between them.

## React tutorials

> [!NOTE]
> React tutorials last tested in January 2023, with React/ReactDOM 18.2.0 and create-react-app 5.0.1.
>
> If you need to check your code against our version, you can find a finished version of the sample React app code in our [todo-react repository](https://github.com/mdn/todo-react). For a running live version, see <https://mdn.github.io/todo-react/>.

- [Getting started with React](/en-US/docs/Learn_web_development/Core/Frameworks_libraries/React_getting_started)
  - : In this article we will say hello to React. We'll discover a little bit of detail about its background and use cases, set up a basic React toolchain on our local computer, and create and play with a simple starter app, learning a bit about how React works in the process.
- [Beginning our React ToDo app](/en-US/docs/Learn_web_development/Core/Frameworks_libraries/React_todo_list_beginning)
  - : Let's say that we've been tasked with creating a proof-of-concept in React – an app that allows users to add, edit, and delete tasks they want to work on, and also mark tasks as complete without deleting them. This article will walk you through putting the basic `App` component structure and styling in place, ready for individual component definition and interactivity, which we'll add later.
- [Componentizing our React app](/en-US/docs/Learn_web_development/Core/Frameworks_libraries/React_components)
  - : At this point, our app is a monolith. Before we can make it do things, we need to break it apart into manageable, descriptive components. React doesn't have any hard rules for what is and isn't a component – that's up to you! In this article, we will show you a sensible way to break our app up into components.
- [React interactivity: Events and state](/en-US/docs/Learn_web_development/Core/Frameworks_libraries/React_interactivity_events_state)
  - : With our component plan worked out, it's now time to start updating our app from a completely static UI to one that actually allows us to interact and change things. In this article we'll do this, digging into events and state along the way.
- [React interactivity: Editing, filtering, conditional rendering](/en-US/docs/Learn_web_development/Core/Frameworks_libraries/React_interactivity_filtering_conditional_rendering)
  - : As we near the end of our React journey (for now at least), we'll add the finishing touches to the main areas of functionality in our Todo list app. This includes allowing you to edit existing tasks and filtering the list of tasks between all, completed, and incomplete tasks. We'll look at conditional UI rendering along the way.
- [Accessibility in React](/en-US/docs/Learn_web_development/Core/Frameworks_libraries/React_accessibility)
  - : In our final tutorial article, we'll focus on (pun intended) accessibility, including focus management in React, which can improve usability and reduce confusion for both keyboard-only and screen reader users.
- [React resources](/en-US/docs/Learn_web_development/Core/Frameworks_libraries/React_resources)
  - : Our final article provides you with a list of React resources that you can use to go further in your learning.

## Other framework choices

If you don't want to start learning frameworks using React, then you are welcome to make another choice.

We'd recommend looking at the following as alternatives:

- [Angular](https://angular.dev/): Get started with the [Angular tutorial](https://angular.dev/tutorials/learn-angular).
- [Ember](https://emberjs.com/): Get started with the [Learning Ember.js docs](https://emberjs.com/learn/).
- [Svelte](https://svelte.dev/): Get started with the [Svelte tutorial](https://svelte.dev/tutorial/svelte/welcome-to-svelte).
- [Vue](https://vuejs.org/): Get started with the [Vue Quick Start](https://vuejs.org/guide/quick-start.html).

We want to say this upfront — we've **not** chosen the frameworks mentioned previously because we think they are the best, or because we endorse them in any way. We just think they score highly on the following criteria, which should be considered when starting to invest time in learning new software:

- They are well-supported and will be around for a while: Like with any software tool, it is good to stick with actively-developed choices that are likely to not be discontinued next week, and which will be desirable additions to your skill set when looking for a job.
- They have strong communities and good documentation: It is very important to be able to get help with learning a complex subject, especially when you are just starting out.

{{NextMenu("Learn_web_development/Core/Frameworks_libraries/Introduction", "Learn_web_development/Core")}}
