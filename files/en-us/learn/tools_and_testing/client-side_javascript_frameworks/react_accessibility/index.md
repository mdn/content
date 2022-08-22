---
title: Accessibility in React
slug: Learn/Tools_and_testing/Client-side_JavaScript_frameworks/React_accessibility
tags:
  - Accessibility
  - Beginner
  - Frameworks
  - JavaScript
  - Learn
  - React
  - client-side
  - focus management
  - keyboard
---
{{LearnSidebar}}{{PreviousMenuNext("Learn/Tools_and_testing/Client-side_JavaScript_frameworks/React_interactivity_filtering_conditional_rendering","Learn/Tools_and_testing/Client-side_JavaScript_frameworks/React_resources", "Learn/Tools_and_testing/Client-side_JavaScript_frameworks")}}

In our final tutorial article, we'll focus on (pun intended) accessibility, including focus management in React, which can improve usability and reduce confusion for both keyboard-only and screen reader users.

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
      </td>
    </tr>
    <tr>
      <th scope="row">Objective:</th>
      <td>To learn about implementing keyboard accessibility in React.</td>
    </tr>
  </tbody>
</table>

## Including keyboard users

At this point, we've accomplished all of the features we set out to implement. A user can add a new task, check and uncheck tasks, delete tasks, or edit task names. And they can filter their task list by all, active, or completed tasks.

Or, at least: they can do all of these things with a mouse. Unfortunately, these features are not very accessible to keyboard-only users. Let's explore this now.

## Exploring the keyboard usability problem

Start by clicking on the input at the top of our app, as if you're going to add a new task. You'll see a thick, dashed outline around that input. This outline is your visual indicator that the browser is currently focused on this element. Press the <kbd>Tab</kbd> key, and you will see the outline appear around the "Add" button beneath the input. This shows you that the browser's focus has moved.

Press <kbd>Tab</kbd> a few more times, and you will see this dashed focus indicator move between each of the filter buttons. Keep going until the focus indicator is around the first "Edit" button. Press <kbd>Enter</kbd>.

The `<Todo />` component will switch templates, as we designed, and you'll see a form that lets us edit the name of the task.

But where did our focus indicator go?

When we switch between templates in our `<Todo />` component, we completely remove the elements that were there before to replace them with something else. That means the element that we were focused on vanishes, and nothing is in focus at all. This could confuse a wide variety of users — particularly users who rely on the keyboard, or users who use a screen reader.

To improve the experience for keyboard and screen-reader users, we should manage the browser's focus ourselves.

## Focusing between templates

When a user toggles a `<Todo/>` template from viewing to editing, we should focus on the `<input>` used to rename it; when they toggle back from editing to viewing, we should move focus back to the "Edit" button.

### Targeting our elements

In order to focus on an element in our DOM, we need to tell React which element we want to focus on and how to find it. React's [`useRef`](https://reactjs.org/docs/hooks-reference.html#useref) hook creates an object with a single property: `current`. This property can be a reference to anything we want and look that reference up later. It's particularly useful for referring to DOM elements.

Change the `import` statement at the top of `Todo.js` so that it includes `useRef`:

```js
import React, { useRef, useState } from "react";
```

Then, create two new constants beneath the hooks in your `Todo()` function. Each should be a ref – one for the "Edit" button in the view template and one for the edit field in the editing template.

```js
const editFieldRef = useRef(null);
const editButtonRef = useRef(null);
```

These refs have a default value of `null` because they will not have value until we attach them to their respective elements. To do that, we'll add an attribute of `ref` to each element, and set their values to the appropriately named `ref` objects.

The textbox `<input>` in your editing template should be updated like this:

```js
<input
  id={props.id}
  className="todo-text"
  type="text"
  value={newName}
  onChange={handleChange}
  ref={editFieldRef}
/>
```

The "Edit" button in your view template should read like this:

```js
<button
  type="button"
  className="btn"
  onClick={() => setEditing(true)}
  ref={editButtonRef}
>
  Edit <span className="visually-hidden">{props.name}</span>
</button>
```

### Focusing on our refs with useEffect

To use our refs for their intended purpose, we need to import another React hook: [`useEffect()`](https://reactjs.org/docs/hooks-reference.html#useeffect). `useEffect()` is so named because it runs after React renders a given component, and will run any side-effects that we'd like to add to the render process, which we can't run inside the main function body. `useEffect()` is useful in the current situation because we cannot focus on an element until after the `<Todo />` component renders and React knows where our refs are.

Change the import statement of `Todo.js` again to add `useEffect`:

```js
import React, { useEffect, useRef, useState } from "react";
```

`useEffect()` takes a function as an argument; this function is executed after the component renders. Let's see this in action; put the following `useEffect()` call just above the `return` statement in the body of `Todo()`, and pass into it a function that logs the words "side effect" to your console:

```js
useEffect(() => {
  console.log("side effect");
});
```

To illustrate the difference between the main render process and code run inside `useEffect()`, add another log – put this one below the previous addition:

```js
console.log("main render");
```

Now, open the app in your browser. You should see both messages in your console, with each one repeating three times. Note how "main render" logged first, and "side effect" logged second, even though the "side effect" log appears first in the code.

```
main render (3)                                     Todo.js:100
side effect (3)                                     Todo.js:98
```

That's it for our experimentation for now. Delete `console.log("main render")` now, and lets move on to implementing our focus management.

### Focusing on our editing field

Now that we know our `useEffect()` hook works, we can manage focus with it. As a reminder, we want to focus on the editing field when we switch to the editing template.

Update your existing `useEffect()` hook so that it reads like this:

```js
useEffect(() => {
  if (isEditing) {
    editFieldRef.current.focus();
  }
}, [isEditing]);
```

These changes make it so that, if `isEditing` is true, React reads the current value of the `editFieldRef` and moves browser focus to it. We also pass an array into `useEffect()` as a second argument. This array is a list of values `useEffect()` should depend on. With these values included, `useEffect()` will only run when one of those values changes. We only want to change focus when the value of `isEditing` changes.

Try it now, and you'll see that when you click an "Edit" button, focus moves to the corresponding edit `<input>`!

### Moving focus back to the edit button

At first glance, getting React to move focus back to our "Edit" button when the edit is saved or cancelled appears deceptively easy. Surely we could add a condition to our `useEffect` to focus on the edit button if `isEditing` is `false`? Let's try it now — update your `useEffect()` call like so:

```js
useEffect(() => {
  if (isEditing) {
    editFieldRef.current.focus();
  } else {
    editButtonRef.current.focus();
  }
}, [isEditing]);
```

This kind of mostly works. Head back to your browser and you'll see that your focus moves between Edit `<input>` and "Edit" button as you start and end an edit. However, you may have noticed a new problem — the "Edit" button in the final `<Todo />` component is focussed immediately on page load, before we even interact with the app!

Our `useEffect()` hook is behaving exactly as we designed it: it runs as soon as the component renders, sees that `isEditing` is `false`, and focuses the "Edit" button. Because there are three instances of `<Todo />`, we see focus on the last "Edit" button.

We need to refactor our approach so that focus changes only when `isEditing` changes from one value to another.

## More robust focus management

In order to meet our refined criteria, we need to know not just the value of `isEditing`, but also _when that value has changed_. In order to do that, we need to be able to read the previous value of the `isEditing` constant. Using pseudocode, our logic should be something like this:

```
if (wasNotEditingBefore && isEditingNow) {
  focusOnEditField()
}
if (wasEditingBefore && isNotEditingNow) {
  focusOnEditButton()
}
```

The React team had discussed [ways to get a component's previous state](https://reactjs.org/docs/hooks-faq.html#how-to-get-the-previous-props-or-state), and has provided an example custom hook we can use for the job.

Paste the following code near the top of `Todo.js`, above your `Todo()` function.

```js
function usePrevious(value) {
  const ref = useRef();
  useEffect(() => {
    ref.current = value;
  });
  return ref.current;
}
```

Now we'll define a `wasEditing` constant beneath the hooks at the top of `Todo()`. We want this constant to track the previous value of `isEditing`, so we call `usePrevious` with `isEditing` as an argument:

```js
const wasEditing = usePrevious(isEditing);
```

With this constant, we can update our `useEffect()` hook to implement the pseudocode we discussed before — update it as follows:

```js
useEffect(() => {
  if (!wasEditing && isEditing) {
    editFieldRef.current.focus();
  }
  if (wasEditing && !isEditing) {
    editButtonRef.current.focus();
  }
}, [wasEditing, isEditing]);
```

Note that the logic of `useEffect()` now depends on `wasEditing`, so we provide it in the array of dependencies.

Again try using the "Edit" and "Cancel" buttons to toggle between the templates of your `<Todo />` component; you'll see the browser focus indicator move appropriately, without the problem we discussed at the start of this section.

## Focusing when the user deletes a task

There's one last keyboard experience gap: when a user deletes a task from the list, the focus vanishes. We're going to follow a pattern similar to our previous changes: we'll make a new ref, and utilize our `usePrevious()` hook, so that we can focus on the list heading whenever a user deletes a task.

### Why the list heading?

Sometimes, the place we want to send our focus to is obvious: when we toggled our `<Todo />` templates, we had an origin point to "go back" to — the "Edit" button. In this case however, since we're completely removing elements from the DOM, we have no place to go back to. The next best thing is an intuitive location somewhere nearby. The list heading is our best choice because it's close to the list item the user will delete, and focusing on it will tell the user how many tasks are left.

### Creating our ref

Import the `useRef()` and `useEffect()` hooks into `App.js` — you'll need them both below:

```js
import React, { useState, useRef, useEffect } from "react";
```

Then declare a new ref inside the `App()` function. Just above the `return` statement is a good place:

```js
const listHeadingRef = useRef(null);
```

### Prepare the heading

Heading elements like our `<h2>` are not usually focusable. This isn't a problem — we can make any element programmatically focusable by adding the attribute [`tabindex="-1"`](/en-US/docs/Web/HTML/Global_attributes/tabindex) to it. This means _only focusable with JavaScript_. You can't press <kbd>Tab</kbd> to focus on an element with a tabindex of `-1` the same way you could do with a [`<button>`](/en-US/docs/Web/HTML/Element/button) or [`<a>`](/en-US/docs/Web/HTML/Element/a) element (this can be done using `tabindex="0"`, but that's not really appropriate in this case).

Let's add the `tabindex` attribute — written as `tabIndex` in JSX — to the heading above our list of tasks, along with our `headingRef`:

```js
<h2 id="list-heading" tabIndex="-1" ref={listHeadingRef}>
  {headingText}
</h2>
```

> **Note:** The `tabindex` attribute is great for accessibility edge-cases, but you should take **great care** to not overuse it. Only apply a `tabindex` to an element when you're absolutely sure that making it focusable will benefit your user in some way. In most cases, you should be utilizing elements that can naturally take focus, such as buttons, anchors, and inputs. Irresponsible usage of `tabindex` could have a profoundly negative impact on keyboard and screen-reader users!

### Getting previous state

We want to focus on the element associated with our ref (via the `ref` attribute) only when our user deletes a task from their list. That's going to require the `usePrevious()` hook we already used earlier on. Add it to the top of your `App.js` file, just below the imports:

```js
function usePrevious(value) {
  const ref = useRef();
  useEffect(() => {
    ref.current = value;
  });
  return ref.current;
}
```

Now add the following, above the `return` statement inside the `App()` function:

```js
const prevTaskLength = usePrevious(tasks.length);
```

Here we are invoking `usePrevious()` to track the length of the tasks state, like so:

> **Note:** Since we're now utilizing `usePrevious()` in two files, a good efficiency refactor would be to move the `usePrevious()` function into its own file, export it from that file, and import it where you need it. Try doing this as an exercise once you've got to the end.

### Using `useEffect()` to control our heading focus

Now that we've stored how many tasks we previously had, we can set up a `useEffect()` hook to run when our number of tasks changes, which will focus the heading if the number of tasks we have now is less than with it previously was — i.e. we deleted a task!

Add the following into the body of your `App()` function, just below your previous additions:

```js
useEffect(() => {
  if (tasks.length - prevTaskLength === -1) {
    listHeadingRef.current.focus();
  }
}, [tasks.length, prevTaskLength]);
```

We only try to focus on our list heading if we have fewer tasks now than we did before. The dependencies passed into this hook ensure it will only try to re-run when either of those values (the number of current tasks, or the number of previous tasks) changes.

Now, when you delete a task in your browser, you will see our dashed focus outline appear around the heading above the list.

## Finished!

You've just finished building a React app from the ground up! Congratulations! The skills you've learned here will be a great foundation to build on as you continue working with React.

Most of the time, you can be an effective contributor to a React project even if all you do is think carefully about components and their state and props. Remember to always write the best HTML you can.

`useRef()` and `useEffect()` are somewhat advanced features, and you should be proud of yourself for using them! Look out for opportunities to practice them more, because doing so will allow you to create inclusive experiences for users. Remember: our app would have been inaccessible to keyboard users without them!

> **Note:** If you need to check your code against our version, you can find a finished version of the sample React app code in our [todo-react repository](https://github.com/mdn/todo-react). For a running live version, see <https://mdn.github.io/todo-react-build/>.

In the very last article we'll present you with a list of React resources that you can use to go further in your learning.

{{PreviousMenuNext("Learn/Tools_and_testing/Client-side_JavaScript_frameworks/React_interactivity_filtering_conditional_rendering","Learn/Tools_and_testing/Client-side_JavaScript_frameworks/React_resources", "Learn/Tools_and_testing/Client-side_JavaScript_frameworks")}}

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
