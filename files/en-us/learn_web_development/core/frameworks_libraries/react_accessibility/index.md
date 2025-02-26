---
title: Accessibility in React
slug: Learn_web_development/Core/Frameworks_libraries/React_accessibility
page-type: learn-module-chapter
---

{{LearnSidebar}}

{{PreviousMenuNext("Learn_web_development/Core/Frameworks_libraries/React_interactivity_filtering_conditional_rendering","Learn_web_development/Core/Frameworks_libraries/React_resources", "Learn_web_development/Core/Frameworks_libraries")}}

In our final tutorial article, we'll focus on (pun intended) accessibility, including focus management in React, which can improve usability and reduce confusion for both keyboard-only and screen reader users.

<table>
  <tbody>
    <tr>
      <th scope="row">Prerequisites:</th>
      <td>
        Familiarity with the core <a href="/en-US/docs/Learn_web_development/Core/Structuring_content">HTML</a>,
        <a href="/en-US/docs/Learn_web_development/Core/Styling_basics">CSS</a>, and
        <a href="/en-US/docs/Learn_web_development/Core/Scripting">JavaScript</a> languages, and the <a href="/en-US/docs/Learn_web_development/Getting_started/Environment_setup/Command_line">terminal/command line</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Learning outcomes:</th>
      <td>Implementing keyboard accessibility in React.</td>
    </tr>
  </tbody>
</table>

## Including keyboard users

At this point, we've implemented all the features we set out to implement. Users can add a new task, check and uncheck tasks, delete tasks, or edit task names. Also, they can filter their task list by all, active, or completed tasks.

Or, at least, they can do all of these things with a mouse. Unfortunately, these features are not very accessible to keyboard-only users. Let's explore this now.

## Exploring the keyboard usability problem

Start by clicking on the input at the top of our app, as if you're going to add a new task. You'll see a thick, dashed outline around that input. This outline is your visual indicator that the browser is currently focused on this element. Press the <kbd>Tab</kbd> key, and you will see the outline appear around the "Add" button beneath the input. This shows you that the browser's focus has moved.

Press <kbd>Tab</kbd> a few more times, and you will see this dashed focus indicator move between each of the filter buttons. Keep going until the focus indicator is around the first "Edit" button. Press <kbd>Enter</kbd>.

The `<Todo />` component will switch templates, as we designed, and you'll see a form that lets us edit the name of the task.

But where did our focus indicator go?

When we switch between templates in our `<Todo />` component, we completely remove the elements from the old template and replace them with the elements from the new template. That means the element that we were focused on no longer exists, so there's no visual cue as to where the browser's focus is. This could confuse a wide variety of users — particularly users who rely on the keyboard, or users who use assistive technology.

To improve the experience for keyboard and assistive technology users, we should manage the browser's focus ourselves.

### Aside: a note on our focus indicator

If you click the "All", "Active", or "Completed" filter buttons with your mouse, you _won't_ see a visible focus indicator, but you will do if you move between them with the <kbd>Tab</kbd> key on your keyboard. Don't worry — your code isn't broken!

Our CSS file uses the [`:focus-visible`](/en-US/docs/Web/CSS/:focus-visible) pseudo-class to provide custom styling for the focus indicator, and the browser uses a set of internal rules to determine when to show it to the user. Generally, the browser _will_ show a focus indicator in response to keyboard input, and _might_ show it in response to mouse input. `<button>` elements _don't_ show a focus indicator in response to mouse input, while `<input>` elements _do_.

The behavior of `:focus-visible` is more selective than the older [`:focus`](/en-US/docs/Web/CSS/:focus) pseudo-class, with which you might be more familiar. `:focus` shows a focus indicator in many more situations, and you can use it instead of or in combination with `:focus-visible` if you prefer.

## Focusing between templates

When a user changes the `<Todo />` template from viewing to editing, we should focus on the `<input>` used to rename it; when they change back from editing to viewing, we should move focus back to the "Edit" button.

### Targeting our elements

Up to this point, we've been writing JSX components and letting React build the resulting DOM behind the scenes. Most of the time, we don't need to target specific elements in the DOM because we can use React's state and props to control what gets rendered. To manage focus, however, we _do_ need to be able to target specific DOM elements.

This is where the `useRef()` hook comes in.

First, change the `import` statement at the top of `Todo.jsx` so that it includes `useRef`:

```jsx
import { useRef, useState } from "react";
```

`useRef()` creates an object with a single property: `current`. Refs can store any values we want them to, and we can look up those values later. We can even store references to DOM elements, which is exactly what we're going to do here.

Next, create two new constants beneath the `useState()` hooks in your `Todo()` function. Each should be a ref – one for the "Edit" button in the view template and one for the edit field in the editing template.

```jsx
const editFieldRef = useRef(null);
const editButtonRef = useRef(null);
```

These refs have a default value of `null` to make it clear that they'll be empty until they're attached to their DOM elements. To attach them to their elements, we'll add the special `ref` attribute to each element's JSX, and set the values of those attributes to the appropriately named `ref` objects.

Update the `<input>` in your editing template so that it reads like this:

```jsx
<input
  id={props.id}
  className="todo-text"
  type="text"
  value={newName}
  onChange={handleChange}
  ref={editFieldRef}
/>
```

Update the "Edit" button in your view template so that it reads like this:

```jsx
<button
  type="button"
  className="btn"
  onClick={() => setEditing(true)}
  ref={editButtonRef}>
  Edit <span className="visually-hidden">{props.name}</span>
</button>
```

Doing this will populate our `editFieldRef` and `editButtonRef` with references to the DOM elements they're attached to, but _only_ after React has rendered the component. Test that out for yourself: add the following line somewhere in the body of your `Todo()` function, below where `editButtonRef` is initialized:

```jsx
console.log(editButtonRef.current);
```

You'll see that the value of `editButtonRef.current` is `null` when the component first renders, but if you click an "Edit" button, it will log the `<button>` element to the console. This is because the ref is populated only after the component renders, and clicking the "Edit" button causes the component to re-render. Be sure to delete this log before moving on.

> [!NOTE]
> Your logs will appear 6 times because we have 3 instances of `<Todo />` in our app and React renders our components twice in development.

We're getting closer! To take advantage of our newly referenced elements, we need to use another React hook: `useEffect()`.

### Implementing `useEffect()`

[`useEffect()`](https://react.dev/reference/react/useEffect) is so named because it runs any side-effects that we'd like to add to the render process but which can't be run inside the main function body. `useEffect()` runs right after a component renders, meaning the DOM elements we referenced in the previous section will be available for us to use.

Change the import statement of `Todo.jsx` again to add `useEffect`:

```jsx
import { useEffect, useRef, useState } from "react";
```

`useEffect()` takes a function as an argument; this function is executed _after_ the component renders. To demonstrate this, put the following `useEffect()` call just above the `return` statement in the body of `Todo()`, and pass a function into it that logs the words "side effect" to your console:

```jsx
useEffect(() => {
  console.log("side effect");
});
```

To illustrate the difference between the main render process and code run inside `useEffect()`, add another log – put this one below the previous addition:

```jsx
console.log("main render");
```

Now, open the app in your browser. You should see both messages in your console, with each one repeating multiple times. Note how "main render" logged first, and "side effect" logged second, even though the "side effect" log appears first in the code.

```plain
main render                                     Todo.jsx
side effect                                     Todo.jsx
```

Again, the logs are ordered this way because code inside `useEffect()` runs _after_ the component renders. This takes some getting used to, just keep it in mind as you move forward. For now, delete `console.log("main render")` and we'll move on to implementing our focus management.

### Focusing on our editing field

Now that we know our `useEffect()` hook works, we can manage focus with it. As a reminder, we want to focus on the editing field when we switch to the editing template.

Update your existing `useEffect()` hook so that it reads like this:

```jsx
useEffect(() => {
  if (isEditing) {
    editFieldRef.current.focus();
  }
}, [isEditing]);
```

These changes make it so that, if `isEditing` is true, React reads the current value of the `editFieldRef` and moves browser focus to it. We also pass an array into `useEffect()` as a second argument. This array is a list of values `useEffect()` should depend on. With these values included, `useEffect()` will only run when one of those values changes. We only want to change focus when the value of `isEditing` changes.

Try it now: use the <kbd>Tab</kbd> key to navigate to one of the "Edit" buttons, then press <kbd>Enter</kbd>. You should see the `<Todo />` component switch to its editing template, and the browser focus indicator should appear around the `<input>` element!

### Moving focus back to the edit button

At first glance, getting React to move focus back to our "Edit" button when the edit is saved or cancelled appears deceptively easy. Surely we could add a condition to our `useEffect` to focus on the edit button if `isEditing` is `false`? Let's try it now — update your `useEffect()` call like so:

```jsx
useEffect(() => {
  if (isEditing) {
    editFieldRef.current.focus();
  } else {
    editButtonRef.current.focus();
  }
}, [isEditing]);
```

This kind of works. If you use your keyboard to trigger the "Edit" button (remember: <kbd>Tab</kbd> to it and press <kbd>Enter</kbd>), you'll see that your focus moves between the Edit `<input>` and "Edit" button as you start and end an edit. However, you may have noticed a new problem — the "Edit" button in the final `<Todo />` component is focused immediately on page load before we even interact with the app!

Our `useEffect()` hook is behaving exactly as we designed it: it runs as soon as the component renders, sees that `isEditing` is `false`, and focuses the "Edit" button. There are three instances of `<Todo />`, and focus is given to the "Edit" button of the one that renders last.

We need to refactor our approach so that focus changes only when `isEditing` changes from one value to another.

## More robust focus management

To meet our refined criteria, we need to know not just the value of `isEditing`, but also _when that value has changed_. To do that, we need to be able to read the previous value of the `isEditing` constant. Using pseudocode, our logic should be something like this:

```jsx
if (wasNotEditingBefore && isEditingNow) {
  focusOnEditField();
} else if (wasEditingBefore && isNotEditingNow) {
  focusOnEditButton();
}
```

The React team has discussed [ways to get a component's previous state](https://legacy.reactjs.org/docs/hooks-faq.html#how-to-get-the-previous-props-or-state), and provided an example hook we can use for the job.

### Enter `usePrevious()`

Paste the following code near the top of `Todo.jsx`, above your `Todo()` function.

```jsx
function usePrevious(value) {
  const ref = useRef();
  useEffect(() => {
    ref.current = value;
  });
  return ref.current;
}
```

`usePrevious()` is a _custom hook_ that tracks a value across renders. It:

1. Uses the `useRef()` hook to create an empty `ref`.
2. Returns the `ref`'s `current` value to the component that called it.
3. Calls `useEffect()` and updates the value stored in `ref.current` after each rendering of the calling component.

The behavior of `useEffect()` is key to this functionality. Because `ref.current` is updated inside a `useEffect()` call, it's always one step behind whatever value is in the component's main render cycle – hence the name `usePrevious()`.

### Using `usePrevious()`

Now we can define a `wasEditing` constant to track the previous value of `isEditing`; this is achieved by calling `usePrevious` with `isEditing` as an argument. Add the following inside `Todo()`, below the `useRef` lines:

```jsx
const wasEditing = usePrevious(isEditing);
```

You can see how `usePrevious()` behaves by adding a console log beneath this line:

```jsx
console.log(wasEditing);
```

In this log, the `current` value of `wasEditing` will always be the previous value of `isEditing`. Click on the "Edit" and "Cancel" button a few times to watch it change, then delete this log when you're ready to move on.

With this `wasEditing` constant, we can update our `useEffect()` hook to implement the pseudocode we discussed before:

```jsx
useEffect(() => {
  if (!wasEditing && isEditing) {
    editFieldRef.current.focus();
  } else if (wasEditing && !isEditing) {
    editButtonRef.current.focus();
  }
}, [wasEditing, isEditing]);
```

Note that the logic of `useEffect()` now depends on `wasEditing`, so we provide it in the array of dependencies.

Try using your keyboard to activate the "Edit" and "Cancel" buttons in the `<Todo />` component; you'll see the browser focus indicator move appropriately, without the problem we discussed at the start of this section.

## Focusing when the user deletes a task

There's one last keyboard experience gap: when a user deletes a task from the list, the focus vanishes. We're going to follow a pattern similar to our previous changes: we'll make a new ref, and utilize our `usePrevious()` hook, so that we can focus on the list heading whenever a user deletes a task.

### Why the list heading?

Sometimes, the place we want to send our focus to is obvious: when we toggled our `<Todo />` templates, we had an origin point to "go back" to — the "Edit" button. In this case however, since we're completely removing elements from the DOM, we have no place to go back to. The next best thing is an intuitive location somewhere nearby. The list heading is our best choice because it's close to the list item the user will delete, and focusing on it will tell the user how many tasks are left.

### Creating our ref

Import the `useRef()` and `useEffect()` hooks into `App.jsx` — you'll need them both below:

```jsx
import { useState, useRef, useEffect } from "react";
```

Next, declare a new ref inside the `App()` function, just above the `return` statement:

```jsx
const listHeadingRef = useRef(null);
```

### Prepare the heading

Heading elements like our `<h2>` are not usually focusable. This isn't a problem — we can make any element programmatically focusable by adding the attribute [`tabindex="-1"`](/en-US/docs/Web/HTML/Global_attributes/tabindex) to it. This means _only focusable with JavaScript_. You can't press <kbd>Tab</kbd> to focus on an element with a tabindex of `-1` the same way you could do with a [`<button>`](/en-US/docs/Web/HTML/Element/button) or [`<a>`](/en-US/docs/Web/HTML/Element/a) element (this can be done using `tabindex="0"`, but that's not appropriate in this case).

Let's add the `tabindex` attribute — written as `tabIndex` in JSX — to the heading above our list of tasks, along with our `listHeadingRef`:

```jsx
<h2 id="list-heading" tabIndex="-1" ref={listHeadingRef}>
  {headingText}
</h2>
```

> [!NOTE]
> The `tabindex` attribute is excellent for accessibility edge cases, but you should take **great care** not to overuse it. Only apply a `tabindex` to an element when you're sure that making it focusable will benefit your user somehow. In most cases, you should utilize elements that can naturally take focus, such as buttons, anchors, and inputs. Irresponsible usage of `tabindex` could have a profoundly negative impact on keyboard and screen reader users!

### Getting previous state

We want to focus on the element associated with our ref (via the `ref` attribute) only when our user deletes a task from their list. That's going to require the `usePrevious()` hook we used earlier on. Add it to the top of your `App.jsx` file, just below the imports:

```jsx
function usePrevious(value) {
  const ref = useRef();
  useEffect(() => {
    ref.current = value;
  });
  return ref.current;
}
```

Now add the following, above the `return` statement inside the `App()` function:

```jsx
const prevTaskLength = usePrevious(tasks.length);
```

Here we are invoking `usePrevious()` to track the previous length of the tasks array.

> [!NOTE]
> Since we're now utilizing `usePrevious()` in two files, it might be more efficient to move the `usePrevious()` function into its own file, export it from that file, and import it where you need it. Try doing this as an exercise once you've got to the end.

### Using `useEffect()` to control our heading focus

Now that we've stored how many tasks we previously had, we can set up a `useEffect()` hook to run when our number of tasks changes, which will focus the heading if the number of tasks we have now is less than it previously was — that is, we deleted a task!

Add the following into the body of your `App()` function, just below your previous additions:

```jsx
useEffect(() => {
  if (tasks.length < prevTaskLength) {
    listHeadingRef.current.focus();
  }
}, [tasks.length, prevTaskLength]);
```

We only try to focus on our list heading if we have fewer tasks now than we did before. The dependencies passed into this hook ensure it will only try to re-run when either of those values (the number of current tasks, or the number of previous tasks) changes.

Now, when you use your keyboard to delete a task in your browser, you will see our dashed focus outline appear around the heading above the list.

## Finished!

You've just finished building a React app from the ground up! Congratulations! The skills you've learned here will be a great foundation to build on as you continue working with React.

Most of the time, you can be an effective contributor to a React project even if all you do is think carefully about components and their state and props. Remember to always write the best HTML you can.

`useRef()` and `useEffect()` are somewhat advanced features, and you should be proud of yourself for using them! Look out for opportunities to practice them more, because doing so will allow you to create inclusive experiences for users. Remember: our app would have been inaccessible to keyboard users without them!

> [!NOTE]
> If you need to check your code against our version, you can find a finished version of the sample React app code in our [todo-react repository](https://github.com/mdn/todo-react). For a running live version, see <https://mdn.github.io/todo-react/>.

In the very last article we'll present you with a list of React resources that you can use to go further in your learning.

{{PreviousMenuNext("Learn_web_development/Core/Frameworks_libraries/React_interactivity_filtering_conditional_rendering","Learn_web_development/Core/Frameworks_libraries/React_resources", "Learn_web_development/Core/Frameworks_libraries")}}
