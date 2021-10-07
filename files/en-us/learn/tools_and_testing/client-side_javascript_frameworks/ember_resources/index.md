---
title: Ember resources and troubleshooting
slug: Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Ember_resources
tags:
  - Beginner
  - Ember
  - Frameworks
  - JavaScript
  - Learn
  - client-side
  - resources
---
{{LearnSidebar}}
{{PreviousMenuNext("Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Ember_routing","Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Vue_getting_started", "Learn/Tools_and_testing/Client-side_JavaScript_frameworks")}}

Our final Ember article provides you with a list of resources that you can use to go further in your learning, plus some useful troubleshooting and other information.

<table>
  <tbody>
    <tr>
      <th scope="row">Prerequisites:</th>
      <td>
        <p>
          At minimum, it is recommended that you are familiar with the core
          <a href="/en-US/docs/Learn/HTML">HTML</a>,
          <a href="/en-US/docs/Learn/CSS">CSS</a>, and
          <a href="/en-US/docs/Learn/JavaScript">JavaScript</a> languages, and
          have knowledge of the
          <a
            href="/en-US/docs/Learn/Tools_and_testing/Understanding_client-side_tools/Command_line"
            >terminal/command line</a
          >.
        </p>
        <p>
          A deeper understanding of modern JavaScript features (such as classes,
          modules, etc), will be extremely beneficial, as Ember makes heavy use
          of them.
        </p>
      </td>
    </tr>
    <tr>
      <th scope="row">Objective:</th>
      <td>
        To provide further resource links and troubleshooting information.
      </td>
    </tr>
  </tbody>
</table>

## Further resources

- [Ember.JS Guides](https://guides.emberjs.com/release/)

  - [Tutorial: Super Rentals](https://guides.emberjs.com/release/tutorial/part-1/)

- [Ember.JS API Documentation](https://api.emberjs.com/ember/release)
- [Ember.JS Discord Server](https://discord.gg/emberjs) — a forum/chat server where you can meet the Ember community, ask for help, and help others!

## General troubleshooting, gotchas, and misconceptions

This is nowhere near an extensive list, but it is a list of things that came up around the time of writing (latest update, May 2020).

### How do I debug what's going on in the framework?

For _framework-specific_ things, there is the [ember-inspector add-on](https://guides.emberjs.com/release/ember-inspector/), which allows inspection of:

- Routes & Controllers
- Components
- Services
- Promises
- Data (i.e: from a remote API — from ember-data, by default)
- Deprecation Information
- Render Performance

For general JavaScript debugging, check out our [guides on JavaScript Debugging](/en-US/docs/Tools/Debugger)
as well as interacting with the [browser's other debugging tools](/en-US/docs/Tools). In any default Ember
project, there will be two main JavaScript files, `vendor.js` and `{app-name}.js`. Both of
these files are generated with sourcemaps, so when you open the `vendor.js` or `{app-name}.js` to search for relevant code, when a debugger is placed, the sourcemap will be loaded and the breakpoint will be placed in the pre-transpiled code for easier correlation to your project code.

For more information on sourcemaps, why they're needed, and what the ember-cli does with them, see the [Advanced Use: Asset Compilation](https://cli.emberjs.com/release/advanced-use/asset-compilation/) guide. Note that sourcemaps are enabled by default.

### `ember-data` comes pre-installed; do I need it?

Not at all. While `ember-data` solves _the most common problems_ that any app dealing with
data will run in to, it is possible to roll your own front-end data client. A common
alternative is to any fully-featured front-end data client is [The Fetch API](/en-US/docs/Web/API/Fetch_API/Using_Fetch).

Using the design patterns provided by the framework, a `Route` using `fetch()` would look something  like this:

```js
import Route from '@ember/routing/route';

export default class MyRoute extends Route {
  async model() {
    let response = await fetch('some/url/to/json/data');
    let json = await response.json();

    return {
      data: json
    };
  }
}
```

See more information on [specifying the `Route`'s model](https://guides.emberjs.com/release/routing/specifying-a-routes-model/) here.

### Why can't I just use JavaScript?

This is the _most_ common question Ember folks hear from people who have previous
experience with [React](/en-US/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/React_getting_started). While it is technically possible to use JSX, or any
other form of DOM creation, there has yet to be anything as robust as Ember's
templating system. The intentional minimalism forces certain decisions, and allows
for more consistent code, while keeping the template more structural rather than having them filled with bespoke logic.

See also: [ReactiveConf 2017: Secrets of the Glimmer VM](https://www.youtube.com/watch?v=nXCSloXZ-wc)

### What is the state of the `mut` helper?

`mut` was not covered in this tutorial and is really baggage from a transitional time when Ember was moving from two-way bound data to the more common and easier-to-reason-about one-way bound data flow. It could be thought of as a build-time transform that wraps its argument with a setter function.

More concretely, using `mut` allows for template-only settings functions to be declared:

```js
<Checkbox
  @value=\{{this.someData}}
  @onToggle=\{{fn (mut this.someData) (not this.someData)}}
/>
```

Whereas, without `mut`, a component class would be needed:

```js
import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class Example extends Component {
  @tracked someData = false;

  @action
  setData(newValue) {
    this.someData = newValue;
  }
}
```

Which would then be called in the template like so:

```js
<Checkbox @data=\{{this.someData}} @onChange=\{{this.setData}} />
```

Due to the conciseness of using `mut`, it may be desireable to reach for it. However, `mut` has unnatural semantics and has caused much confusion over the term of its existence.

There have been a couple of new ideas put together into the form of addons that use the public apis, [`ember-set-helper`](https://github.com/pzuraq/ember-set-helper) and [`ember-box`](https://github.com/pzuraq/ember-box). Both of these try to solve the problems of `mut`
by introducing more obvious / "less magic" concepts, avoiding build-time transforms and
implicit Glimmer VM behavior.

With `ember-set-helper`:

```js
<Checkbox
  @value=\{{this.someData}}
  @onToggle=\{{set this "someData" (not this.someData)}}
/>
```

With `ember-box`:

```js
\{{#let (box this.someData) as |someData|}}
  <Checkbox
    @value=\{{unwrap someData}}
    @onToggle=\{{update someData (not this.someData)}}
  />
\{{/let}}
```

Note that none of these solutions are particularly common among members of the community, and as a whole, people are still trying to figure out an ergonomic and simple API for setting data in a template-only context, without backing JS.

### What is the purpose of Controllers?

[Controllers](https://guides.emberjs.com/release/routing/controllers/) are [Singletons](https://en.wikipedia.org/wiki/Singleton_pattern), which may help manage the rendering context of the
active route. On the surface, they function much the same as the backing JavaScript of a Component. Controllers are (as of January 2020), the only way to manage URL Query Params.

Ideally, controllers should be fairly light in their responsibilities, delegating to Components
and Services where possible.

### What is the purpose of Routes?

A [Route](https://guides.emberjs.com/release/routing/defining-your-routes/) represents part of the URL when a user navigates from place to place in the app.
A Route has only a couple responsibilities:

- Load the _minimally required data_ to render the route (or view-sub-tree).
- Gate access to the route and redirect if needed.
- Handle loading and error states from the minimally required data.

A Route only has 3 lifecycle hooks, all of which are optional:

- `beforeModel` — gate access to the route.
- `model` — where data is loaded.
- `afterModel` — verify access.

Last, a Route has the ability to handle common events resulting from configuring the `model`:

- `loading` — what to do when the `model` hook is loading.
- `error` — what to do when an error is thrown from `model`.

Both `loading` and `error` can render default templates as well as customized templates defined elsewhere in the application, unifying loading/error states.

More information on [everything a Route can do is found in the API documentation](https://api.emberjs.com/ember/release/classes/Route/).

{{PreviousMenuNext("Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Ember_routing","Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Vue_getting_started", "Learn/Tools_and_testing/Client-side_JavaScript_frameworks")}}

## In this module

- [Introduction to client-side frameworks](/en-US/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Introduction)
- [Framework main features](/en-US/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Main_features)
- React

  - [Getting started with React](/en-US/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/React_getting_started)
  - [Beginning our React todo list](/en-US/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/React_todo_list_beginning)
  - [Componentizing our React app](/en-US/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/React_components)
  - [React interactivity: Events and state](/en-US/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/React_interactivity_events_state)
  - [React interactivity: Editing, filtering, conditional rendering](/en-US/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/React_interactivity_filtering_conditional_rendering)
  - [Accessibility in React](/en-US/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/React_accessibility)
  - [React resources](/en-US/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/React_resources)

- Ember

  - [Getting started with Ember](/en-US/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Ember_getting_started)
  - [Ember app structure and componentization](/en-US/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Ember_structure_componentization)
  - [Ember interactivity: Events, classes and state](/en-US/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Ember_interactivity_events_state)
  - [Ember Interactivity: Footer functionality, conditional rendering](/en-US/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Ember_conditional_footer)
  - [Routing in Ember](/en-US/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Ember_routing)
  - [Ember resources and troubleshooting](/en-US/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Ember_resources)

- Vue

  - [Getting started with Vue](/en-US/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Vue_getting_started)
  - [Creating our first Vue component](/en-US/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Vue_first_component)
  - [Rendering a list of Vue components](/en-US/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Vue_rendering_lists)
  - [Adding a new todo form: Vue events, methods, and models](/en-US/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Vue_methods_events_models)
  - [Styling Vue components with CSS](/en-US/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Vue_styling)
  - [Using Vue computed properties](/en-US/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Vue_computed_properties)
  - [Vue conditional rendering: editing existing todos](/en-US/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Vue_conditional_rendering)
  - [Focus management with Vue refs](/en-US/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Vue_refs_focus_management)
  - [Vue resources](/en-US/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Vue_resources)

- Svelte

  - [Getting started with Svelte](/en-US/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Svelte_getting_started)
  - [Starting our Svelte Todo list app](/en-US/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Svelte_Todo_list_beginning)
  - [Dynamic behavior in Svelte: working with variables and props](/en-US/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Svelte_variables_props)
  - [Componentizing our Svelte app](/en-US/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Svelte_components)
  - [Advanced Svelte: Reactivity, lifecycle, accessibility](/en-US/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Svelte_reactivity_lifecycle_accessibility)
  - [Working with Svelte stores](/en-US/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Svelte_stores)
  - [TypeScript support in Svelte](/en-US/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Svelte_TypeScript)
  - [Deployment and next steps](/en-US/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Svelte_deployment_next)

- Angular

  - [Getting started with Angular](/en-US/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Angular_getting_started)
  - [Beginning our Angular todo list app](/en-US/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Angular_todo_list_beginning)
  - [Styling our Angular app](/en-US/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Angular_styling)
  - [Creating an item component](/en-US/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Angular_item_component)
  - [Filtering our to-do items](/en-US/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Angular_filtering)
  - [Building Angular applications and further resources](/en-US/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Angular_building)
