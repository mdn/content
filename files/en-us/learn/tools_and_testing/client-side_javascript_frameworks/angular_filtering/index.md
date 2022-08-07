---
title: Filtering our to-do items
slug: Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Angular_filtering
tags:
  - Beginner
  - Frameworks
  - JavaScript
  - Learn
  - client-side
  - Angular
  - Filtering
---
{{LearnSidebar}}{{PreviousMenuNext("Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Angular_item_component","Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Angular_building", "Learn/Tools_and_testing/Client-side_JavaScript_frameworks")}}

Now let's move on to adding functionality to allow users to filter their to-do items, so they can view active, completed, or all items.

<table>
  <tbody>
    <tr>
      <th scope="row">Prerequisites:</th>
      <td>
        Familiarity with the core <a href="/en-US/docs/Learn/HTML">HTML</a>,
        <a href="/en-US/docs/Learn/CSS">CSS</a>, and
        <a href="/en-US/docs/Learn/JavaScript">JavaScript</a> languages,
        knowledge of the
        <a
          href="/en-US/docs/Learn/Tools_and_testing/Understanding_client-side_tools/Command_line"
          >terminal/command line</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Objective:</th>
      <td>To add filtering functionality to our app.</td>
    </tr>
  </tbody>
</table>

## Our filtering code

Filtering items builds on the `filter` property, which you previously added to `app.component.ts`:

```ts
filter: 'all' | 'active' | 'done' = 'all';
```

The default value for filter is `all`, but it can also be `active` or `done`.

## Adding filter controls

In `app.component.html`, add the following HTML before the **Add** button but above the section that lists the items.
In the following snippet, the existing sections in your HTML are in comments so you can see exactly where to put the buttons.

```html
<!-- <button class="btn-primary" (click)="addItem(newItem.value)">Add</button>
 -->

  <!-- Buttons that show all, still to do, or done items on click -->
  <div class="btn-wrapper">
    <button
      class="btn btn-menu"
      [class.active]="filter == 'all'"
      (click)="filter = 'all'">
      All
    </button>

    <button
      class="btn btn-menu"
      [class.active]="filter == 'active'"
      (click)="filter = 'active'">
      To Do
    </button>

    <button
      class="btn btn-menu"
      [class.active]="filter == 'done'"
      (click)="filter = 'done'">
      Done
    </button>
  </div>

  <!-- <h2>\{{items.length}} item(s)</h2>
        <ul>... -->
```

Clicking the buttons changes the `filter` values, which determines the `items` that show as well as the styles that Angular applies to the active button.

- If the user clicks the **All** button, all of the items show.
- If the user clicks the **To do** button, only the items with a `done` value of `false` show.
- If the user clicks the **Done** button, only the items with a `done` value of `true` show.

A class attribute binding, using square brackets, `[]`, controls the text color of the buttons.
The class binding, `[class.active]`, applies the `active` class when the value of `filter` matches the expression.
For example, when the user clicks the **Done** button, which sets the `filter` value to `done`, the class binding expression of `filter == 'done'` evaluates to `true`.
When the `filter` value is `done`, Angular applies the `active` class to the **Done** button to make the text color green.
As soon as the user clicks on one of the other buttons, the value a `filter` is no longer `done`, so the green text color no longer applies.

## Summary

That was quick! Since you already had the `filter` code in `app.component.ts`, all you had to do was edit the template in order to provide controls for filtering the items. Our next — and last — article looks at how to build your Angular app ready for production, and provides further resources to carry on your learning journey.

{{PreviousMenuNext("Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Angular_item_component","Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Angular_building", "Learn/Tools_and_testing/Client-side_JavaScript_frameworks")}}

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
