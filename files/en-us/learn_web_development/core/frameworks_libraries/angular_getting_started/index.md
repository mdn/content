---
title: Getting started with Angular
slug: Learn_web_development/Core/Frameworks_libraries/Angular_getting_started
page-type: learn-module-chapter
---

{{LearnSidebar}}

{{NextMenu("Learn_web_development/Core/Frameworks_libraries/Angular_todo_list_beginning", "Learn_web_development/Core/Frameworks_libraries")}}

It is now time to look at Google's Angular framework, another popular option that you'll come across often. In this article we look at what Angular has to offer, install the prerequisites and set up a sample app, and look at Angular's basic architecture.

> [!NOTE]
> This tutorial targets [Angular version 18](https://angular.dev/overview) and was last revised in August 2024 (`Angular CLI: 18.2.1`).

<table>
  <tbody>
    <tr>
      <th scope="row">Prerequisites:</th>
      <td>
        Familiarity with the core <a href="/en-US/docs/Learn_web_development/Core/Structuring_content">HTML</a>,
        <a href="/en-US/docs/Learn_web_development/Core/Styling_basics">CSS</a>, and
        <a href="/en-US/docs/Learn_web_development/Core/Scripting">JavaScript</a> languages,
        knowledge of the
        <a
          href="/en-US/docs/Learn_web_development/Getting_started/Environment_setup/Command_line"
          >terminal/command line</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Objective:</th>
      <td>
        To setup a local Angular development environment, create a starter app,
        and understand the basics of how it works.
      </td>
    </tr>
  </tbody>
</table>

## What is Angular?

Angular is a framework and development platform, built on [TypeScript](https://www.typescriptlang.org/). It is used for creating single-page web applications. As a platform, Angular includes:

- A component-based framework for building scalable web applications
- A collection of well-integrated libraries that cover a wide variety of features, including routing, forms management, client-server communication, and more
- A suite of developer tools to help you develop, build, test, and update your code

When you build applications with Angular, you're taking advantage of a platform that can scale from single-developer projects to enterprise-level applications. Angular is designed to make updating as easy as possible, so you can take advantage of the latest developments with a minimum of effort. Best of all, the Angular ecosystem consists of a diverse group of over 1.7 million developers, library authors, and content creators.

Before you start exploring the Angular platform, you should know about the Angular CLI. The Angular CLI is the fastest, easiest, and recommended way to develop Angular applications. The Angular CLI makes a number of tasks easy. Here are some example commands that you'll use frequently:

| Command                                           | Description                                                           |
| ------------------------------------------------- | --------------------------------------------------------------------- |
| [`ng build`](https://angular.dev/cli/build)       | Compiles an Angular app into an output directory.                     |
| [`ng serve`](https://angular.dev/cli/serve)       | Builds and serves your application, rebuilding on file changes.       |
| [`ng generate`](https://angular.dev/cli/generate) | Generates or modifies files based on a schematic.                     |
| [`ng test`](https://angular.dev/cli/test)         | Runs unit tests on a given project.                                   |
| [`ng e2e`](https://angular.dev/cli/e2e)           | Builds and serves an Angular application, then runs end-to-end tests. |

You'll find the Angular CLI to be a valuable tool for building out your applications.

## What you'll build

This tutorial series guides you through building a to-do list application. Via this application you'll learn how to use Angular to manage, edit, add, delete, and filter items.

## Prerequisites

To install Angular on your local system, you need the following:

- **Node.js**

  Angular requires a [active LTS or maintenance LTS](https://nodejs.org/en/about/previous-releases) version of Node.js. For information about specific version requirements, see the [Version compatibility](https://angular.dev/reference/versions) page.

  For more information on installing Node.js, see [nodejs.org](https://nodejs.org/en/download/package-manager).
  If you are unsure what version of Node.js runs on your system, run `node -v` in a terminal window.

- **npm package manager**

  Angular, the Angular CLI, and Angular applications depend on [npm packages](https://docs.npmjs.com/getting-started/what-is-npm/) for many features and functions.
  To download and install npm packages, you need an npm package manager.
  This guide uses the [npm client](https://docs.npmjs.com/cli/install/) command line interface, which is installed with `Node.js` by default.
  To check that you have the npm client installed, run `npm -v` in a terminal window.

## Creating an Angular application

You can use the Angular CLI to run commands in your terminal for generating, building, testing, and deploying Angular applications.
To install the Angular CLI globally, run the following command in your terminal:

```bash
npm install -g @angular/cli
```

Angular CLI commands all start with `ng`, followed by what you'd like the CLI to do.
Create a new directory where you want to build your app, and switch to the directory in the terminal. Then use the following [`ng new`](https://angular.dev/cli/new) command to create a new application called `todo`:

```bash
ng new todo --routing=false --style=css --ssr=false
```

The `ng new` command creates a minimal starter Angular application.
The additional flags, `--routing` and `--style`, and `--ssr` define how to handle navigation and styles in the application, and configures server-side rendering.
This tutorial describes these features later in more detail.

The first time you run `ng`, you may be asked if you want to enable terminal [autocompletion](https://angular.dev/cli/completion) and analytics.
Autocompletion is convenient because pressing <kbd>TAB</kbd> while typing `ng` commands will show possible options and will autocomplete arguments.

You can also decide if you want to allow analytics about the CLI usage to be sent to Angular maintainers at Google.
To find out more about analytics, see the [Angular `ng analytics` CLI documentation](https://angular.dev/cli/analytics).

To run your `todo` application, navigate into your new project with the `cd` command and run `ng serve`:

```bash
cd todo
ng serve
```

In the browser, navigate to `http://localhost:4200/` to see your new starter application.
If you change any of the source files, the application automatically reloads.

While `ng serve` is running, open a second terminal tab or terminal window to run commands without stopping the server.
If at any point you would like to stop serving your application, press `Ctrl+c` in the terminal that's running the `ng serve` command.

## Get familiar with your Angular application

The application source files that this tutorial focuses on are in `src/app`:

```plain
src/app
├── app.component.css
├── app.component.html
├── app.component.spec.ts
├── app.component.ts
└── app.config.ts
```

Key files that the CLI generates automatically are the following:

1. `app.component.ts`: Also known as the class, contains the logic for the application's main page.
2. `app.component.html`: Contains the HTML for `AppComponent`. The contents of this file are also known as the template.
   The template determines the view or what you see in the browser.
3. `app.component.css`: Contains the styles for `AppComponent`. You use this file when you want to define styles that only apply to a specific component, as opposed to your application overall.

A component in Angular is made up of three main parts—the template, styles, and the class.
For example, `app.component.ts`, `app.component.html`, and `app.component.css` together constitute the `AppComponent`.
This structure separates the logic, view, and styles so that the application is more maintainable and scalable.
In this way, you are using the best practices from the very beginning.

The Angular CLI also generates a file for component testing called `app.component.spec.ts`, but this tutorial doesn't go into testing, so you can ignore that file.
Whenever you generate a component, the CLI creates these files in a directory with the name you specify and we'll see an example of that later.

To learn more about testing, see the [Angular testing guide](https://angular.dev/guide/testing).

## The structure of an Angular application

Angular is built with TypeScript.
TypeScript is a superset of JavaScript meaning that any valid JavaScript is valid TypeScript.
TypeScript offers typing and a more concise syntax than plain JavaScript, which gives you a tool for creating more maintainable code and minimizing bugs.

Components are the building blocks of an Angular application.
A component includes a TypeScript class that has a `@Component()` decorator.

### The decorator

You use the `@Component()` decorator to specify metadata (HTML template and styles) about a class.

### The class

The class is where you put any logic your component needs.
This code can include functions, event listeners, properties, and references to services to name a few.
The class is in a file with a name such as `feature.component.ts`, where `feature` is the name of your component.
So, you could have files with names such as `header.component.ts`, `signup.component.ts`, or `feed.component.ts`.
You create a component with a `@Component()` decorator that has metadata that tells Angular where to find the HTML and CSS.
A typical component is as follows:

```js
import { Component } from "@angular/core";

@Component({
  selector: "app-item",
  standalone: true,
  imports: [],
  // the following metadata specifies the location of the other parts of the component
  templateUrl: "./item.component.html",
  styleUrl: "./item.component.css",
})
export class ItemComponent {
  // code goes here
}
```

This component is called `ItemComponent`, and its selector is `app-item`.
You use a selector just like regular HTML tags by placing it within other templates, i.e. `<app-item></app-item>`.
When a selector is in a template, the browser renders the template of that component whenever an instance of the selector is encountered.
This tutorial guides you through creating two components and using one within the other.

> [!NOTE]
> The name of the component above is `ItemComponent` which is also the name of the class.
> The names are the same simply because a component is nothing but a class supplemented by a TypeScript decorator.

Angular's component model offers strong encapsulation and an intuitive application structure.
Components also make your application easier to unit test and can improve the overall readability of your code.

### The HTML template

Every component has an HTML template that declares how that component renders.
You can define this template either inline or by file path.

To refer to an external HTML file, use the `templateUrl` property:

```js
@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
})
export class AppComponent {
  // code goes here
}
```

To write inline HTML, use the `template` property and write your HTML within backticks:

```js
@Component({
  selector: "app-root",
  template: `<h1>To do application</h1>`,
})
export class AppComponent {
  // code goes here
}
```

Angular extends HTML with additional syntax that lets you insert dynamic values from your component.
Angular automatically updates the rendered DOM when your component's state changes.
One use of this feature is inserting dynamic text, as shown in the following example.

```html
<h1>\{{ title }}</h1>
```

The double curly braces instruct Angular to interpolate the contents within them.
The value for `title` comes from the component class:

```js-nolint
import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  standalone: true,
  imports: [],
  template: "<h1>\{{ title }}</h1>",
  styleUrl: "./app.component.css",
})
export class AppComponent {
  title = "To do application";
}
```

When the application loads the component and its template, the browser sees the following:

```html
<h1>To do application</h1>
```

### Styles

A component can inherit global styles from the application's `styles.css` file and augment or override them with its own styles.
You can write component-specific styles directly in the `@Component()` decorator or specify the path to a CSS file.

To include the styles directly in the component decorator, use the `styles` property:

```js
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: ['h1 { color: red; }']
})
```

Typically, a component uses styles in a separate file.
You can use the `styleUrl` property with the path to the CSS file as a string or `styleUrls` with an array of strings if there are multiple CSS stylesheets you want to include:

```js
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
```

With component-specific styles, you can organize your CSS so that it is easily maintainable and portable.

### Standalone components

It's recommended to [make components standalone](https://angular.dev/guide/components/importing#standalone-components) unless a project already makes use of [NgModules](https://angular.dev/guide/ngmodules) (Angular modules) to organize code.
This tutorial uses [standalone components](https://angular.dev/guide/components/importing#standalone-components) which are easier to start with.

It's common to import [`CommonModule`](https://angular.dev/api/common/CommonModule) so that your component can make use of common [directives](https://angular.dev/guide/directives) and [pipes](https://angular.dev/guide/pipes).

```js
import { Component } from "@angular/core";
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [CommonModule],
})
```

## Summary

That's it for your first introduction to Angular. At this point you should be set up and ready to build an Angular app, and have a basic understanding of how Angular works. In the next article we'll deepen that knowledge and start to build up the structure of our to-do list application.

{{NextMenu("Learn_web_development/Core/Frameworks_libraries/Angular_todo_list_beginning", "Learn_web_development/Core/Frameworks_libraries")}}
