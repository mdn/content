---
title: Vue resources
slug: Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Vue_resources
page-type: learn-module-chapter
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Vue_conditional_rendering","Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Svelte_getting_started", "Learn/Tools_and_testing/Client-side_JavaScript_frameworks")}}

Now we'll round off our study of Vue by giving you a list of resources that you can use to go further in your learning, plus some other useful tips.

<table>
  <tbody>
    <tr>
      <th scope="row">Prerequisites:</th>
      <td>
        <p>
          Familiarity with the core <a href="/en-US/docs/Learn/HTML">HTML</a>,
          <a href="/en-US/docs/Learn/CSS">CSS</a>, and
          <a href="/en-US/docs/Learn/JavaScript">JavaScript</a> languages,
          knowledge of the
          <a
            href="/en-US/docs/Learn/Tools_and_testing/Understanding_client-side_tools/Command_line"
            >terminal/command line</a
          >.
        </p>
        <p>
          Vue components are written as a combination of JavaScript objects that
          manage the app's data and an HTML-based template syntax that maps to
          the underlying DOM structure. For installation, and to use some of the
          more advanced features of Vue (like Single File Components or render
          functions), you'll need a terminal with node + npm installed.
        </p>
      </td>
    </tr>
    <tr>
      <th scope="row">Objective:</th>
      <td>
        To learn where to go to find further information on Vue, to continue
        your learning.
      </td>
    </tr>
  </tbody>
</table>

## Further resources

Here's where you should go to learn more about Vue:

- [Vue Docs](https://vuejs.org/) — The main Vue site. Contains comprehensive documentation, including examples, cookbooks, and reference material. This is the best place to start learning Vue in depth.
- [Vue GitHub Repo](https://github.com/vuejs/vue) — The Vue code itself. This is where you can report issues and/or contribute directly to the Vue codebase. Studying the Vue source code can help you better understand how the framework works, and write better code.
- [Vue Forum](https://forum.vuejs.org/) — The official forum for getting help with Vue.
- [Vue CLI Docs](https://cli.vuejs.org/) — Documentation for the Vue CLI. This contains information on customizing and extending the output you are generating via the CLI.
- [NuxtJS](https://nuxtjs.org/) — NuxtJS is a Server-Side Vue Framework, with some architectural opinions that can be useful to creating maintainable applications, even if you don't use any of the Server Side Rendering features it provides. This site provides detailed documentation on using NuxtJS.
- [Vue Mastery](https://www.vuemastery.com/courses/) — A paid education platform that specializes in Vue, including some free lessons.
- [Vue School](https://vueschool.io/) — Another paid education platform specializing in Vue.

## Building and publishing your Vue app

The Vue CLI also provides us with tools for preparing our app for publishing to the web. You can do this like so:

- If your local server is still running, end it by pressing <kbd>Ctrl</kbd> \+ <kbd>C</kbd> in the terminal.

- Next, run the `npm run build` (or `yarn build`) in the console.

This will create a new `dist` directory containing all of your production ready files. To publish your site to the web, copy the contents of this folder to your hosting environment.

> **Note:** The Vue CLI docs also include a [specific guide on how to publish your app](https://cli.vuejs.org/guide/deployment.html#platform-guides) to many of the common hosting platforms.

## Vue 2

Vue 2 support will end on December 31st, 2023 and the default Vue version for all CLI tools is version 3 and above.
The [Composition API](https://vuejs.org/guide/extras/composition-api-faq.html) works as an alternative to the property-based API where you use a `setup()` function is used on the component. Only what you return from this function is available in your `<template>`s. You are required to be explicit about "reactive" properties when using this API. Vue handles this for you using the [Options API](https://vuejs.org/guide/extras/composition-api-faq.html#trade-offs). This makes the new API typically considered a more advanced use case.

If you're upgrading from Vue 2, it's recommended you take a look at the [Vue 3 migration guide](https://v3-migration.vuejs.org/).

{{PreviousMenuNext("Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Vue_conditional_rendering","Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Svelte_getting_started", "Learn/Tools_and_testing/Client-side_JavaScript_frameworks")}}
