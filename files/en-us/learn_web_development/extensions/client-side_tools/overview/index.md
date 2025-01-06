---
title: Client-side tooling overview
slug: Learn_web_development/Extensions/Client-side_tools/Overview
page-type: learn-module-chapter
---

{{LearnSidebar}}

{{NextMenu("Learn_web_development/Extensions/Client-side_tools/Package_management", "Learn_web_development/Extensions/Client-side_tools")}}

In this article, we provide an overview of modern web tooling, what kinds of tools are available and where you'll meet them in the lifecycle of web app development, and how to find help with individual tools.

<table>
  <tbody>
    <tr>
      <th scope="row">Prerequisites:</th>
      <td>
        Familiarity with the core <a href="/en-US/docs/Learn_web_development/Core/Structuring_content">HTML</a>,
        <a href="/en-US/docs/Learn_web_development/Core/Styling_basics">CSS</a>, and
        <a href="/en-US/docs/Learn_web_development/Core/Scripting">JavaScript</a> languages.
      </td>
    </tr>
    <tr>
      <th scope="row">Objective:</th>
      <td>
        To understand what types of client-side tooling there are, and how to
        find tools and get help with them.
      </td>
    </tr>
  </tbody>
</table>

## Overview of modern tooling

Writing software for the web has become more sophisticated through the ages. Although it is still entirely reasonable to write HTML, CSS, and JavaScript "by hand" there is now a wealth of tools that developers can use to speed up the process of building a website, or app.

There are some extremely well-established tools that have become common "household names" amongst the development community, and new tools are being written and released every day to solve specific problems. You might even find yourself writing a piece of software to aid your own development process, to solve a specific problem that existing tools don't already seem to handle.

It is easy to become overwhelmed by the sheer number of tools that can be included in a single project. Equally, a single configuration file for a tool like [webpack](https://webpack.js.org/) can be hundreds of lines long, most of which are magical incantations that seem to do the job but which only a master engineer will fully understand!

From time to time, even the most experienced of web developers get stuck on a tooling problem; it is possible to waste hours attempting to get a tooling pipeline working before even touching a single line of application code. If you have found yourself struggling in the past, then don't worry — you are not alone.

In these articles, we won't answer every question about web tooling, but we will provide you with a useful starting point of understanding the fundamentals, which you can then build from. As with any complex topic, it is good to start small, and gradually work your way up to more advanced uses.

## The modern tooling ecosystem

Today's modern developer tooling ecosystem is huge, so it's useful to have a broad idea of what main problems the tools are solving. If you jump on your favorite search engine and look for "front-end developer tools" you're going to hit a huge spectrum of results ranging from text editors, to browsers, to the type of pens you can use to take notes.

Though your choice of code editor is certainly a tooling choice, this series of articles will go beyond that, focusing on developer tools that help you produce web code more efficiently. We'll recommend a few particular tools and the following tutorials will show you how to use them. They are tools that are popular and standard at the time of writing. This does not preclude you from using other tools, if you are aware of their relative advantages.

From a high-level perspective, you can put client-side tools into the following four broad categories of problems to solve:

- **Environment** — Tools that help you set up your development environment, such as installing and running other tools.
- **Safety net** — Tools that are useful during your code development.
- **Transformation** — Tools that transform code in some way, e.g. turning an intermediate language into JavaScript that a browser can understand.
- **Post-development** — Tools that are useful after you have written your code, such as testing and deployment tools.

Let's look at each one of these in more detail.

### Environment

The editor, operating system, and browser are all development environments. We will assume that you have already settled down with a choice you are most comfortable with. However, before installing and running other tools, there are yet two choices to make:

- Where you are going to run the tools on. Most tools that are run locally are written in JavaScript, so you need a JavaScript interpreter on your computer that can be invoked from the command line (not the one in your browser). [Node.js](https://nodejs.org/) remains the industry standard and we will use it. [Bun](https://bun.sh/) is intended as a drop-in replacement for Node.js, known for its speed and powerful APIs.
- How you are going to install the tools, in other words, the _package manager_. Node provides [npm](https://www.npmjs.com/) by default, so we will use it. [Yarn](https://yarnpkg.com/) and [pnpm](https://pnpm.io/) are other popular choices, each with their own advantages such as speed, project management, etc.

### Safety net

These are tools that make the code you write a little better.

This part of the tooling should be specific to your own development environment, though it's not uncommon for companies to have some kind of policy or pre-baked configuration available to install so that all their developers are using the same processes.

This includes anything that makes your development process easier for generating stable and reliable code. Safety net tooling should also help you either prevent mistakes or correct mistakes automatically without having to build your code from scratch each time.

A few very common safety net tool types you will find being used by developers are as follows.

#### Linters

**Linters** are tools that check through your code and tell you about any errors that are present, what error types they are, and what code lines they are present on. Often linters can be configured to not only report errors, but also report any violations of a specified style guide that your team might be using (for example code that is using the wrong number of spaces for indentation, or using [template literals](/en-US/docs/Web/JavaScript/Reference/Template_literals) rather than regular string literals).

[ESLint](https://eslint.org/) is the industry standard JavaScript linter — a highly configurable tool for catching potential syntax errors and encouraging "best practices" throughout your code. Some companies and projects have also [shared their ESLint configs](https://www.npmjs.com/search?q=keywords:eslintconfig).

You can also find linting tools for other languages, such as [stylelint](https://stylelint.io/).

#### Source code control

Also known as **version control systems** (VCS), **source code control** is essential for backing work up and working in teams. A typical VCS involves having a local version of the code that you make changes to. You then "push" changes to a "master" version of the code inside a remote repository stored on a server somewhere. There is usually a way of controlling and coordinating what changes are made to the "master" copy of the code, and when, so a team of developers doesn't end up overwriting each other's work all the time.

[Git](https://git-scm.com/) is the source code control system that most people use these days. It is primarily accessed via the command line but can be accessed via friendly user interfaces. With your code in a git repository, you can push it to your own server instance, or use a hosted source control website such as [GitHub](https://github.com/), [GitLab](https://about.gitlab.com/), or [Bitbucket](https://bitbucket.org/product/).

We'll be using GitHub in this module. You can find more information about it at [Git and GitHub](/en-US/docs/Learn_web_development/Core/Version_control).

#### Code formatters

Code formatters are somewhat related to linters, except that rather than point out errors in your code, they usually tend to make sure your code is formatted correctly, according to your style rules, ideally automatically fixing errors that they find.

[Prettier](https://prettier.io/) is a very popular example of a code formatter, which we'll make use of later on in the module.

#### Type checkers

Type checkers are tools that help you write more reliable code by checking that your code is using the right types of data in the right places. This prevents common classes of bugs such as accessing nonexistent properties, unexpected `undefined`, etc.

[TypeScript](https://www.typescriptlang.org/) is the de facto standard type checker for JavaScript. It provides its own type annotation syntax and is somewhat a language in its own right, so we won't be covering it in this module.

### Transformation

This stage of your web app lifecycle typically allows you to code in either "future code" (such as the latest CSS or JavaScript features that might not have native support in browsers yet) or code using another language entirely, such as TypeScript. Transformation tools will then generate browser-compatible code for you, to be used in production.

Generally, web development is thought of as three languages: [HTML](/en-US/docs/Learn_web_development/Core/Structuring_content), [CSS](/en-US/docs/Learn_web_development/Core/Styling_basics), and [JavaScript](/en-US/docs/Learn_web_development/Core/Scripting), and there are transformation tools for all of these languages. Transformation offers three main benefits (amongst others):

1. The ability to write code using the latest language features and have that transformed into code that works on everyday devices. For example, you might want to write JavaScript using cutting-edge new language features, but still have your final production code work on older browsers that don't support those features. Good examples here include:

   - [Babel](https://babeljs.io/): A JavaScript compiler that allows developers to write their code using cutting-edge JavaScript, which Babel then takes and converts into old-fashioned JavaScript that more browsers can understand. Developers can also write and publish [plugins for Babel](https://babeljs.io/docs/plugins).
   - [PostCSS](https://postcss.org/): Does the same kind of thing as Babel, but for cutting-edge CSS features. If there isn't an equivalent way to do something using older CSS features, PostCSS will install a JavaScript polyfill to emulate the CSS effect you want.

2. The option to write your code in an entirely different language and have it transformed into a web-compatible language. For example:

   - [Sass/SCSS](https://sass-lang.com/): This CSS extension allows you to use variables, nested rules, mixins, functions, and many other features, some of which are available in native CSS (such as variables), and some of which aren't.
   - [TypeScript](https://www.typescriptlang.org/): TypeScript is a superset of JavaScript that offers a bunch of additional features. The TypeScript compiler converts TypeScript code to JavaScript when building for production.
   - Frameworks such as [React](https://react.dev/), [Ember](https://emberjs.com/), and [Vue](https://vuejs.org/): Frameworks provide a lot of functionality for free and allow you to use it via custom syntax built on top of vanilla JavaScript. In the background, the framework's JavaScript code works hard to interpret this custom syntax and render it as a final web app.

3. Optimization. This is provided by _bundlers_, which are tools that get your code ready for production, for example by "[tree-shaking](/en-US/docs/Glossary/Tree_shaking)" to make sure only the parts of your code libraries that you are actually using are put into your final production code, or "[minifying](/en-US/docs/Glossary/Minification)" to remove all the whitespace in your production code, making it as small as possible before it is uploaded to a server. For example:

   - [Webpack](https://webpack.js.org/) has been the most popular bundler for a long time, featuring a huge number of plugins and a powerful configuration system. However, it is also known for being quite complex to set up, and is slow compared to more modern alternatives.
   - [Vite](https://vite.dev/) is a more modern build tool that is popular for its speed, simplicity, and richness of features.

### Post development

Post-development tooling ensures that your software makes it to the web and continues to run. This includes the deployment processes, testing frameworks, auditing tools, and more.

This stage of the development process is one that you want the least amount of active interaction with so that once it is configured, it runs mostly automatically, only popping up to say hello if something has gone wrong.

#### Testing tools

These generally take the form of a tool that will automatically run tests against your code to make sure it is correct before you go any further (for example, when you attempt to push changes to a GitHub repo). This can include linting, but also more sophisticated procedures like unit tests, where you run part of your code, making sure they behave as they should.

- Frameworks for writing tests include [Jest](https://jestjs.io/), [Mocha](https://mochajs.org/), and [Jasmine](https://jasmine.github.io/).
- Automated test running and notification systems include [Travis CI](https://www.travis-ci.com/), [Jenkins](https://www.jenkins.io/), [Circle CI](https://circleci.com/), and [others](https://en.wikipedia.org/wiki/List_of_build_automation_software#Continuous_integration).

#### Deployment tools

Deployment systems allow you to get your website published, are available for both static and dynamic sites, and commonly tend to work alongside testing systems. For example, a typical toolchain will wait for you to push changes to a remote repo, run some tests to see if the changes are OK, and then if the tests pass, automatically deploy your app to a production site.

[GitHub Pages](https://pages.github.com/) is nicely integrated with GitHub itself and is free for all public repos. Other services, such as [Netlify](https://www.netlify.com/) and [Vercel](https://vercel.com/), are also very popular, featuring generous free tier quotas, smooth deployment workflows, and GitHub integration.

#### Others

There are several other tool types available to use in the post-development stage, including [Code Climate](https://codeclimate.com/) for gathering code quality metrics, the [Webhint browser extension](https://webhint.io/docs/user-guide/extensions/extension-browser/) for performing runtime analysis of cross-browser compatibility and other checks, [GitHub bots](https://probot.github.io/) for providing more powerful GitHub functionality, [Updown](https://updown.io/) for providing app uptime monitoring, and so many more!

### Some thoughts about tooling types

There's certainly an order in which the different tooling types apply in the development lifecycle, but rest assured that you don't _have_ to have all of these in place to release a website. In fact, you don't need any of these. However, including some of these tools in your process will improve your own development experience and likely improve the overall quality of your code.

It often takes some time for new developer tools to settle down in their complexity. One of the best-known tools, webpack, has a reputation for being overly complicated to work with, but in the latest major release, there was a huge push to simplify common usage so the configuration required is reduced down to an absolute minimum.

There's definitely no silver bullet that will guarantee success with tools, but as your experience increases you'll find workflows that work _for you_ or for your team and their projects. Once all the kinks in the process are flattened out, your toolchain should be something you can forget about and it _should_ just work.

## How to choose and get help with a particular tool

Most tools tend to get written and released in isolation, so although there's almost certainly help available it's never in the same place or format. It can therefore be hard to find help with using a tool, or even to choose what tool to use. The knowledge about which are the best tools to use is a bit tribal, meaning that if you aren't already in the web community, it is hard to find out exactly which ones to go for! This is one reason we wrote this series of articles, to hopefully provide that first step that is hard to find otherwise.

You'll probably need a combination of the following things:

- Experienced teachers, mentors, fellow students, or colleagues that have some experience, have solved such problems before, and can give advice.
- A useful specific place to search. General web searches for front-end developer tools are generally useless unless you already know the name of the tool you are searching for.

  - If you are using the npm package manager to manage your dependencies for example, it is a good idea to go to the [npm homepage](https://www.npmjs.com/) and search for the type of tool you are looking for, for example try searching for "date" if you want a date formatting utility, or "formatter" if you are searching for a general code formatter. Pay attention to the popularity, quality, and maintenance scores, and how recently the package was last updated. Also click through to the tool pages to find out how many monthly downloads a package has, and whether it has good documentation that you can use to figure out whether it does what you need it to do. Based on these criteria, the [date-fns library](https://www.npmjs.com/package/date-fns) looks like a good date formatting tool to use. You'll see this tool in action and learn more about package managers in general in Chapter 3 of this module.
  - If you are looking for a plugin to integrate tool functionality into your code editor, look at the code editor's plugins/extensions page — see [VS Code extensions](https://marketplace.visualstudio.com/vscode), for example. Have a look at the featured extensions on the front page, and again, try searching for the kind of extension you want (or the tool name, for example search for "ESLint" on the VS Code extensions page). When you get results, have a look at information such as how many stars or downloads the extension has, as an indicator of its quality.

- Development-related forums to ask questions on about what tools to use, for example [MDN Learn Discourse](https://discourse.mozilla.org/c/mdn/learn/250), or [Stack Overflow](https://stackoverflow.com/).

When you've chosen a tool to use, the first port of call should be the tool project homepage. This could be a full-blown website or it might be a single readme document in a code repository. The [date-fns docs](https://date-fns.org/docs/Getting-Started) for example are pretty good, complete, and easy to follow. Some documentation however can be rather technical and academic and not a good fit for your learning needs.

Instead, you might want to find some dedicated tutorials on getting started with particular types of tools. A great starting place is to search websites like [CSS Tricks](https://css-tricks.com/), [Dev](https://dev.to/), [freeCodeCamp](https://www.freecodecamp.org/), and [Smashing Magazine](https://www.smashingmagazine.com/), as they're tailored to the web development industry.

Again, you'll probably go through several different tools as you search for the right ones for you, trying them out to see if they make sense, are well-supported, and do what you want them to do. This is fine — it is all good for learning, and the road will get smoother as you get more experience.

## Summary

That rounds off our gentle introduction to the topic of client-side web tooling, from a high level. Next up we will look at package managers.

{{NextMenu("Learn_web_development/Extensions/Client-side_tools/Package_management", "Learn_web_development/Extensions/Client-side_tools")}}
