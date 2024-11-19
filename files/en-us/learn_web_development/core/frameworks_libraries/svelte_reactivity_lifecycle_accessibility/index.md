---
title: "Advanced Svelte: Reactivity, lifecycle, accessibility"
slug: Learn_web_development/Core/Frameworks_libraries/Svelte_reactivity_lifecycle_accessibility
page-type: learn-module-chapter
---

{{LearnSidebar}}
{{PreviousMenuNext("Learn_web_development/Core/Frameworks_libraries/Svelte_components","Learn_web_development/Core/Frameworks_libraries/Svelte_stores", "Learn_web_development/Core/Frameworks_libraries")}}

In the last article we added more features to our to-do list and started to organize our app into components. In this article we will add the app's final features and further componentize our app. We will learn how to deal with reactivity issues related to updating objects and arrays. To avoid common pitfalls, we'll have to dig a little deeper into Svelte's reactivity system. We'll also look at solving some accessibility focus issues, and more besides.

<table>
  <tbody>
    <tr>
      <th scope="row">Prerequisites:</th>
      <td>
        <p>
          At minimum, it is recommended that you are familiar with the core
          <a href="/en-US/docs/Learn_web_development/Core/Structuring_content">HTML</a>,
          <a href="/en-US/docs/Learn_web_development/Core/Styling_basics">CSS</a>, and
          <a href="/en-US/docs/Learn_web_development/Core/Scripting">JavaScript</a> languages, and
          have knowledge of the
          <a
            href="/en-US/docs/Learn_web_development/Getting_started/Environment_setup/Command_line"
            >terminal/command line</a
          >.
        </p>
        <p>
          You'll need a terminal with node and npm installed to compile and build
          your app.
        </p>
      </td>
    </tr>
    <tr>
      <th scope="row">Objective:</th>
      <td>
        Learn some advanced Svelte techniques involving solving reactivity
        issues, keyboard accessibility problems to do with component lifecycle,
        and more.
      </td>
    </tr>
  </tbody>
</table>

We'll focus on some accessibility issues involving focus management. To do so, we'll utilize some techniques for accessing DOM nodes and executing methods like [`focus()`](/en-US/docs/Web/API/HTMLElement/focus) and [`select()`](/en-US/docs/Web/API/HTMLInputElement/select). We will also see how to declare and clean up event listeners on DOM elements.

We also need to learn a bit about component lifecycle to understand when these DOM nodes get mounted and unmounted from the DOM and how we can access them. We will also learn about the `action` directive, which will allow us to extend the functionality of HTML elements in a reusable and declarative way.

Finally, we will learn a bit more about components. So far, we've seen how components can share data using props, and communicate with their parents using events and two-way data binding. Now we will see how components can also expose methods and variables.

The following new components will be developed throughout the course of this article:

- `MoreActions`: Displays the _Check All_ and _Remove Completed_ buttons, and emits the corresponding events required to handle their functionality.
- `NewTodo`: Displays the `<input>` field and _Add_ button for adding a new to-do.
- `TodosStatus`: Displays the "x out of y items completed" status heading.

## Code along with us

### Git

Clone the GitHub repo (if you haven't already done it) with:

```bash
git clone https://github.com/opensas/mdn-svelte-tutorial.git
```

Then to get to the current app state, run

```bash
cd mdn-svelte-tutorial/05-advanced-concepts
```

Or directly download the folder's content:

```bash
npx degit opensas/mdn-svelte-tutorial/05-advanced-concepts
```

Remember to run `npm install && npm run dev` to start your app in development mode.

### REPL

To code along with us using the REPL, start at

<https://svelte.dev/repl/76cc90c43a37452e8c7f70521f88b698?version=3.23.2>

## Working on the MoreActions component

Now we'll tackle the _Check All_ and _Remove Completed_ buttons. Let's create a component that will be in charge of displaying the buttons and emitting the corresponding events.

1. Create a new file, `components/MoreActions.svelte`.
2. When the first button is clicked, we'll emit a `checkAll` event to signal that all the to-dos should be checked/unchecked. When the second button is clicked, we'll emit a `removeCompleted` event to signal that all of the completed to-dos should be removed. Put the following content into your `MoreActions.svelte` file:

   ```svelte
   <script>
     import { createEventDispatcher } from "svelte";
     const dispatch = createEventDispatcher();

     let completed = true;

     const checkAll = () => {
       dispatch("checkAll", completed);
       completed = !completed;
     };

     const removeCompleted = () => dispatch("removeCompleted");
   </script>

   <div class="btn-group">
     <button type="button" class="btn btn__primary" on:click={checkAll}>{completed ? 'Check' : 'Uncheck'} all</button>
     <button type="button" class="btn btn__primary" on:click={removeCompleted}>Remove completed</button>
   </div>
   ```

   We've also included a `completed` variable to toggle between checking and unchecking all tasks.

3. Back over in `Todos.svelte`, we are going to import our `MoreActions` component and create two functions to handle the events emitted by the `MoreActions` component.

   Add the following import statement below the existing ones:

   ```js
   import MoreActions from "./MoreActions.svelte";
   ```

4. Then add the described functions at the end of the `<script>` section:

   ```js
   const checkAllTodos = (completed) =>
     todos.forEach((t) => (t.completed = completed));

   const removeCompletedTodos = () =>
     (todos = todos.filter((t) => !t.completed));
   ```

5. Now go to the bottom of the `Todos.svelte` markup section and replace the `<div class="btn-group">` element that we copied into `MoreActions.svelte` with a call to the `MoreActions` component, like so:

   ```svelte
   <!-- MoreActions -->
   <MoreActions
     on:checkAll={(e) => checkAllTodos(e.detail)}
     on:removeCompleted={removeCompletedTodos}
   />
   ```

6. OK, let's go back into the app and try it out. You'll find that the _Remove Completed_ button works fine, but the _Check All_/_Uncheck All_ button just silently fails.

To find out what is happening here, we'll have to dig a little deeper into Svelte reactivity.

## Reactivity gotchas: updating objects and arrays

To see what's happening we can log the `todos` array from the `checkAllTodos()` function to the console.

1. Update your existing `checkAllTodos()` function to the following:

   ```js
   const checkAllTodos = (completed) => {
     todos.forEach((t) => (t.completed = completed));
     console.log("todos", todos);
   };
   ```

2. Go back to your browser, open your DevTools console, and click _Check All_/_Uncheck All_ a few times.

You'll notice that the array is successfully updated every time you press the button (the `todo` objects' `completed` properties are toggled between `true` and `false`), but Svelte is not aware of that. This also means that in this case, a reactive statement like `$: console.log('todos', todos)` won't be very useful.

To find out why this is happening, we need to understand how reactivity works in Svelte when updating arrays and objects.

Many web frameworks use the virtual DOM technique to update the page. Basically, the virtual DOM is an in-memory copy of the contents of the web page. The framework updates this virtual representation, which is then synced with the "real" DOM. This is much faster than directly updating the DOM and allows the framework to apply many optimization techniques.

These frameworks, by default, basically re-run all our JavaScript on every change against this virtual DOM, and apply different methods to cache expensive calculations and optimize execution. They make little to no attempt to understand what our JavaScript code is doing.

Svelte doesn't use a virtual DOM representation. Instead, it parses and analyzes our code, creates a dependency tree, and then generates the required JavaScript to update only the parts of the DOM that need to be updated. This approach usually generates optimal JavaScript code with minimal overhead, but it also has its limitations.

Sometimes Svelte cannot detect changes to variables being watched. Remember that to tell Svelte that a variable has changed, you have to assign it a new value. A simple rule to keep in mind is that **The name of the updated variable must appear on the left-hand side of the assignment.**

For example, in the following piece of code:

```js
const foo = obj.foo;
foo.bar = "baz";
```

Svelte won't update references to `obj.foo.bar`, unless you follow it up with `obj = obj`. That's because Svelte can't track object references, so we have to explicitly tell it that `obj` has changed by issuing an assignment.

> [!NOTE]
> If `foo` is a top-level variable, you can easily tell Svelte to update `obj` whenever `foo` is changed with the following reactive statement: `$: foo, obj = obj`. With this we are defining `foo` as a dependency, and whenever it changes Svelte will run `obj = obj`.

In our `checkAllTodos()` function, when we run:

```js
todos.forEach((t) => (t.completed = completed));
```

Svelte will not mark `todos` as changed because it does not know that when we update our `t` variable inside the `forEach()` method, we are also modifying the `todos` array. And that makes sense, because otherwise Svelte would be aware of the inner workings of the `forEach()` method; the same would therefore be true for any method attached to any object or array.

Nevertheless, there are different techniques that we can apply to solve this problem, and all of them involve assigning a new value to the variable being watched.

As we already saw, we could just tell Svelte to update the variable with a self-assignment, like this:

```js
const checkAllTodos = (completed) => {
  todos.forEach((t) => (t.completed = completed));
  todos = todos;
};
```

This will solve the problem. Internally Svelte will flag `todos` as changed and remove the apparently redundant self-assignment. Apart from the fact that it looks weird, it's perfectly OK to use this technique, and sometimes it's the most concise way to do it.

We could also access the `todos` array by index, like this:

```js
const checkAllTodos = (completed) => {
  todos.forEach((t, i) => (todos[i].completed = completed));
};
```

Assignments to properties of arrays and objects — e.g. `obj.foo += 1` or `array[i] = x` — work the same way as assignments to the values themselves. When Svelte analyzes this code, it can detect that the `todos` array is being modified.

Another solution is to assign a new array to `todos` containing a copy of all the to-dos with the `completed` property updated accordingly, like this:

```js
const checkAllTodos = (completed) => {
  todos = todos.map((t) => ({ ...t, completed }));
};
```

In this case we are using the [`map()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map) method, which returns a new array with the results of executing the provided function for each item. The function returns a copy of each to-do using [spread syntax](/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax) and overwrites the property of the completed value accordingly. This solution has the added benefit of returning a new array with new objects, completely avoiding mutating the original `todos` array.

> [!NOTE]
> Svelte allows us to specify different options that affect how the compiler works. The `<svelte:options immutable={true}/>` option tells the compiler that you promise not to mutate any objects. This allows it to be less conservative about checking whether values have changed and generate simpler and more performant code. For more information on `<svelte:options>`, check the [Svelte options documentation](https://svelte.dev/docs/special-elements#svelte-options).

All of these solutions involve an assignment in which the updated variable is on the left side of the equation. Any of this techniques will allow Svelte to notice that our `todos` array has been modified.

**Choose one, and update your `checkAllTodos()` function as required. Now you should be able to check and uncheck all your to-dos at once. Try it!**

## Finishing our MoreActions component

We will add one usability detail to our component. We'll disable the buttons when there are no tasks to be processed. To create this, we'll receive the `todos` array as a prop, and set the `disabled` property of each button accordingly.

1. Update your `MoreActions.svelte` component like this:

   ```svelte
   <script>
     import { createEventDispatcher } from 'svelte';
     const dispatch = createEventDispatcher();

     export let todos;

     let completed = true;

     const checkAll = () => {
       dispatch('checkAll', completed);
       completed = !completed;
     }

     const removeCompleted = () => dispatch('removeCompleted');

     $: completedTodos = todos.filter((t) => t.completed).length;
   </script>

   <div class="btn-group">
     <button type="button" class="btn btn__primary"
       disabled={todos.length === 0} on:click={checkAll}>{completed ? 'Check' : 'Uncheck'} all</button>
     <button type="button" class="btn btn__primary"
       disabled={completedTodos === 0} on:click={removeCompleted}>Remove completed</button>
   </div>
   ```

   We've also declared a reactive `completedTodos` variable to enable or disable the _Remove Completed_ button.

2. Don't forget to pass the prop into `MoreActions` from inside `Todos.svelte`, where the component is called:

   ```svelte
   <MoreActions {todos}
       on:checkAll={(e) => checkAllTodos(e.detail)}
       on:removeCompleted={removeCompletedTodos}
     />
   ```

## Working with the DOM: focusing on the details

Now that we have completed all of the app's required functionality, we'll concentrate on some accessibility features that will improve the usability of our app for both keyboard-only and screen reader users.

In its current state our app has a couple of keyboard accessibility problems involving focus management. Let's have a look at these issues.

## Exploring keyboard accessibility issues in our to-do app

Right now, keyboard users will find out that the focus flow of our app is not very predictable or coherent.

If you click on the input at the top of our app, you'll see a thick, dashed outline around that input. This outline is your visual indicator that the browser is currently focused on this element.

If you are a mouse user, you might have skipped this visual hint. But if you are working exclusively with the keyboard, knowing which control has focus is of vital importance. It tells us which control is going to receive our keystrokes.

If you press the <kbd>Tab</kbd> key repeatedly, you'll see the dashed focus indicator cycling between all the focusable elements on the page. If you move the focus to the _Edit_ button and press <kbd>Enter</kbd>, suddenly the focus disappears, and you can no longer tell which control will receive our keystrokes.

Moreover, if you press the <kbd>Escape</kbd> or <kbd>Enter</kbd> key, nothing happens. And if you click on _Cancel_ or _Save_, the focus disappears again. For a user working with the keyboard, this behavior will be confusing at best.

We'd also like to add some usability features, like disabling the _Save_ button when required fields are empty, giving focus to certain HTML elements or auto-selecting contents when a text input receives focus.

To implement all these features, we'll need programmatic access to DOM nodes to run functions like [`focus()`](/en-US/docs/Web/API/HTMLElement/focus) and [`select()`](/en-US/docs/Web/API/HTMLInputElement/select). We will also have to use [`addEventListener()`](/en-US/docs/Web/API/EventTarget/addEventListener) and [`removeEventListener()`](/en-US/docs/Web/API/EventTarget/removeEventListener) to run specific tasks when the control receives focus.

The problem is that all these DOM nodes are dynamically created by Svelte at runtime. So we'll have to wait for them to be created and added to the DOM in order to use them. To do so, we'll have to learn about the [component lifecycle](https://learn.svelte.dev/tutorial/onmount) to understand when we can access them — more on this later.

## Creating a NewTodo component

Let's begin by extracting our new to-do form out to its own component. With what we know so far we can create a new component file and adjust the code to emit an `addTodo` event, passing the name of the new to-do in with the additional details.

1. Create a new file, `components/NewTodo.svelte`.
2. Put the following contents inside it:

   ```svelte
   <script>
     import { createEventDispatcher } from 'svelte';
     const dispatch = createEventDispatcher();

     let name = '';

     const addTodo = () => {
       dispatch('addTodo', name);
       name = '';
     }

     const onCancel = () => name = '';

   </script>

   <form on:submit|preventDefault={addTodo} on:keydown={(e) => e.key === 'Escape' && onCancel()}>
     <h2 class="label-wrapper">
       <label for="todo-0" class="label__lg">What needs to be done?</label>
     </h2>
     <input bind:value={name} type="text" id="todo-0" autoComplete="off" class="input input__lg" />
     <button type="submit" disabled={!name} class="btn btn__primary btn__lg">Add</button>
   </form>
   ```

   Here we are binding the `<input>` to the `name` variable with `bind:value={name}` and disabling the _Add_ button when it is empty (i.e. no text content) using `disabled={!name}`. We are also taking care of the <kbd>Escape</kbd> key with `on:keydown={(e) => e.key === 'Escape' && onCancel()}`. Whenever the <kbd>Escape</kbd> key is pressed we run `onCancel()`, which just clears up the `name` variable.

3. Now we have to `import` and use it from inside the `Todos` component, and update the `addTodo()` function to receive the name of the new todo.

   Add the following `import` statement below the others inside `Todos.svelte`:

   ```js
   import NewTodo from "./NewTodo.svelte";
   ```

4. And update the `addTodo()` function like so:

   ```js
   function addTodo(name) {
     todos = [...todos, { id: newTodoId, name, completed: false }];
   }
   ```

   `addTodo()` now receives the name of the new to-do directly, so we no longer need the `newTodoName` variable to give it its value. Our `NewTodo` component takes care of that.

   > [!NOTE]
   > The `{ name }` syntax is just a shorthand for `{ name: name }`. This one comes from JavaScript itself and has nothing to do with Svelte, besides providing some inspiration for Svelte's own shorthands.

5. Finally for this section, replace the NewTodo form markup with a call to `NewTodo` component, like so:

   ```svelte
   <!-- NewTodo -->
   <NewTodo on:addTodo={(e) => addTodo(e.detail)} />
   ```

## Working with DOM nodes using the `bind:this={dom_node}` directive

Now we want the `<input>` element of the `NewTodo` component to re-gain focus every time the _Add_ button is pressed. For that we'll need a reference to the DOM node of the input. Svelte provides a way to do this with the `bind:this={dom_node}` directive. When specified, as soon as the component is mounted and the DOM node is created, Svelte assigns a reference to the DOM node to the specified variable.

We'll create a `nameEl` variable and bind it to the input using `bind:this={nameEl}`. Then inside `addTodo()`, after adding the new to-do we will call `nameEl.focus()` to refocus the `<input>` again. We will do the same when the user presses the <kbd>Escape</kbd> key, with the `onCancel()` function.

Update the contents of `NewTodo.svelte` like so:

```svelte
<script>
  import { createEventDispatcher } from 'svelte';
  const dispatch = createEventDispatcher();

  let name = '';
  let nameEl; // reference to the name input DOM node

  const addTodo = () => {
    dispatch('addTodo', name);
    name = '';
    nameEl.focus(); // give focus to the name input
  }

  const onCancel = () => {
    name = '';
    nameEl.focus(); // give focus to the name input
  }
</script>

<form on:submit|preventDefault={addTodo} on:keydown={(e) => e.key === 'Escape' && onCancel()}>
  <h2 class="label-wrapper">
    <label for="todo-0" class="label__lg">What needs to be done?</label>
  </h2>
  <input bind:value={name} bind:this={nameEl} type="text" id="todo-0" autoComplete="off" class="input input__lg" />
  <button type="submit" disabled={!name} class="btn btn__primary btn__lg">Add</button>
</form>
```

Try the app out: type a new to-do name in to the `<input>` field, press <kbd>tab</kbd> to give focus to the _Add_ button, and then hit <kbd>Enter</kbd> or <kbd>Escape</kbd> to see how the input recovers focus.

### Autofocusing our input

The next feature will add to our `NewTodo` component will be an `autofocus` prop, which will allow us to specify that we want the `<input>` field to be focused on page load.

1. Our first attempt is as follows: let's try adding the `autofocus` prop and just call `nameEl.focus()` from the `<script>` block. Update the first part of the `<script>` section of `NewTodo.svelte` (the first four lines) to look like this:

   ```svelte
   <script>
     import { createEventDispatcher } from 'svelte';
     const dispatch = createEventDispatcher();

     export let autofocus = false;

     let name = '';
     let nameEl; // reference to the name input DOM node

     if (autofocus) nameEl.focus();
   ```

2. Now go back to the `Todos` component and pass the `autofocus` prop into the `<NewTodo>` component call, like so:

   ```svelte
   <!-- NewTodo -->
   <NewTodo autofocus on:addTodo={(e) => addTodo(e.detail)} />
   ```

3. If you try your app out now, you'll see that the page is now blank, and in your DevTools web console you'll see an error along the lines of: `TypeError: nameEl is undefined`.

To understand what's happening here, let's talk some more about that [component lifecycle](https://learn.svelte.dev/tutorial/onmount) we mentioned earlier.

## Component lifecycle, and the `onMount()` function

When a component is instantiated, Svelte runs the initialization code (that is, the `<script>` section of the component). But at that moment, all the nodes that comprise the component are not attached to the DOM, in fact, they don't even exist.

So how can you know when the component has already been created and mounted on the DOM? The answer is that every component has a lifecycle that starts when it is created and ends when it is destroyed. There are a handful of functions that allow you to run code at key moments during that lifecycle.

The one you'll use most frequently is `onMount()`, which lets us run a callback as soon as the component has been mounted on the DOM. Let's give it a try and see what happens to the `nameEl` variable.

1. To start with, add the following line at the beginning of the `<script>` section of `NewTodo.svelte`:

   ```js
   import { onMount } from "svelte";
   ```

2. And these lines at the end of it:

   ```js
   console.log("initializing:", nameEl);
   onMount(() => {
     console.log("mounted:", nameEl);
   });
   ```

3. Now remove the `if (autofocus) nameEl.focus()` line to avoid throwing the error we were seeing before.
4. The app will now work again, and you'll see the following in your console:

   ```plain
   initializing: undefined
   mounted: <input id="todo-0" class="input input__lg" type="text" autocomplete="off">
   ```

   As you can see, while the component is initializing, `nameEl` is undefined, which makes sense because the `<input>` node doesn't even exist yet. After the component has been mounted, Svelte assigned a reference to the `<input>` DOM node to the `nameEl` variable, thanks to the `bind:this={nameEl} directive`.

5. To get the autofocus functionality working, replace the previous `console.log()`/`onMount()` block you added with this:

   ```js
   onMount(() => autofocus && nameEl.focus()); // if autofocus is true, we run nameEl.focus()
   ```

6. Go to your app again, and you'll now see the `<input>` field is focused on page load.

> [!NOTE]
> You can have a look at the other [lifecycle functions in the Svelte docs](https://svelte.dev/docs/svelte), and you can see them in action in the [interactive tutorial](https://learn.svelte.dev/tutorial/onmount).

## Waiting for the DOM to be updated with the `tick()` function

Now we will take care of the `Todo` component's focus management details. First of all, we want a `Todo` component's edit `<input>` to receive focus when we enter editing mode by pressing its _Edit_ button. In the same fashion as we saw earlier, we'll create a `nameEl` variable inside `Todo.svelte` and call `nameEl.focus()` after setting the `editing` variable to `true`.

1. Open the file `components/Todo.svelte` and add a `nameEl` variable declaration just below your editing and name declarations:

   ```js
   let nameEl; // reference to the name input DOM node
   ```

2. Now update your `onEdit()` function like so:

   ```js
   function onEdit() {
     editing = true; // enter editing mode
     nameEl.focus(); // set focus to name input
   }
   ```

3. And finally, bind `nameEl` to the `<input>` field by updating it like so:

   ```svelte
   <input
     bind:value={name}
     bind:this={nameEl}
     type="text"
     id="todo-{todo.id}"
     autocomplete="off"
     class="todo-text" />
   ```

4. However, when you try the updated app, you'll get an error along the lines of "TypeError: nameEl is undefined" in the console when you press a to-do's _Edit_ button.

So, what is happening here? When you update a component's state in Svelte, it doesn't update the DOM immediately. Instead, it waits until the next microtask to see if there are any other changes that need to be applied, including in other components. Doing so avoids unnecessary work and allows the browser to batch things more effectively.

In this case, when `editing` is `false`, the edit `<input>` is not visible because it does not exist in the DOM. Inside the `onEdit()` function we set `editing = true` and immediately afterwards try to access the `nameEl` variable and execute `nameEl.focus()`. The problem here is that Svelte hasn't yet updated the DOM.

One way to solve this problem is to use {{domxref("Window.setTimeout", "setTimeout()")}} to delay the call to `nameEl.focus()` until the next event cycle, and give Svelte the opportunity to update the DOM.

Try this now:

```js
function onEdit() {
  editing = true; // enter editing mode
  setTimeout(() => nameEl.focus(), 0); // asynchronous call to set focus to name input
}
```

The above solution works, but it is rather inelegant. Svelte provides a better way to handle these cases. The [`tick()` function](https://learn.svelte.dev/tutorial/tick) returns a promise that resolves as soon as any pending state changes have been applied to the DOM (or immediately, if there are no pending state changes). Let's try it now.

1. First of all, import `tick` at the top of the `<script>` section alongside your existing import:

   ```js
   import { tick } from "svelte";
   ```

2. Next, call `tick()` with [`await`](/en-US/docs/Web/JavaScript/Reference/Operators/await) from an [async function](/en-US/docs/Web/JavaScript/Reference/Statements/async_function); update `onEdit()` like so:

   ```js
   async function onEdit() {
     editing = true; // enter editing mode
     await tick();
     nameEl.focus();
   }
   ```

3. If you try it now you'll see that everything works as expected.

> [!NOTE]
> To see another example using `tick()`, visit the [Svelte tutorial](https://learn.svelte.dev/tutorial/tick).

## Adding functionality to HTML elements with the `use:action` directive

Next up, we want the name `<input>` to automatically select all text on focus. Moreover, we want to develop this in such a way that it could be easily reused on any HTML `<input>` and applied in a declarative way. We will use this requirement as an excuse to show a very powerful feature that Svelte provides us to add functionality to regular HTML elements: [actions](https://svelte.dev/docs/svelte-action).

To select the text of a DOM input node, we have to call [`select()`](/en-US/docs/Web/API/HTMLInputElement/select). To get this function called whenever the node gets focused, we need an event listener along these lines:

```js
node.addEventListener("focus", (event) => node.select());
```

And, in order to avoid memory leaks, we should also call the [`removeEventListener()`](/en-US/docs/Web/API/EventTarget/removeEventListener) function when the node is destroyed.

> [!NOTE]
> All this is just standard WebAPI functionality; nothing here is specific to Svelte.

We could achieve all this in our `Todo` component whenever we add or remove the `<input>` from the DOM, but we would have to be very careful to add the event listener after the node has been added to the DOM, and remove the listener before the node is removed from the DOM. In addition, our solution would not be very reusable.

That's where Svelte actions come into play. Basically they let us run a function whenever an element has been added to the DOM, and after removal from the DOM.

In our immediate use case, we will define a function called `selectOnFocus()` that will receive a node as a parameter. The function will add an event listener to that node so that whenever it gets focused it will select the text. Then it will return an object with a `destroy` property. The `destroy` property is what Svelte will execute after removing the node from the DOM. Here we will remove the listener to make sure we don't leave any memory leak behind.

1. Let's create the function `selectOnFocus()`. Add the following to the bottom of the `<script>` section of `Todo.svelte`:

   ```js
   function selectOnFocus(node) {
     if (node && typeof node.select === "function") {
       // make sure node is defined and has a select() method
       const onFocus = (event) => node.select(); // event handler
       node.addEventListener("focus", onFocus); // when node gets focus call onFocus()
       return {
         destroy: () => node.removeEventListener("focus", onFocus), // this will be executed when the node is removed from the DOM
       };
     }
   }
   ```

2. Now we need to tell the `<input>` to use that function with the [`use:action`](https://svelte.dev/docs/element-directives#use-action) directive:

   ```svelte
   <input use:selectOnFocus />
   ```

   With this directive we are telling Svelte to run this function, passing the DOM node of the `<input>` as a parameter, as soon as the component is mounted on the DOM. It will also be in charge of executing the `destroy` function when the component is removed from DOM. So with the `use` directive, Svelte takes care of the component's lifecycle for us.

   In our case, our `<input>` would end up like so: update the component's first label/input pair (inside the edit template) as follows:

   ```svelte
   <label for="todo-{todo.id}" class="todo-label">New name for '{todo.name}'</label>
   <input
     bind:value={name}
     bind:this={nameEl}
     use:selectOnFocus
     type="text"
     id="todo-{todo.id}"
     autocomplete="off"
     class="todo-text" />
   ```

3. Let's try it out. Go to your app, press a to-do's _Edit_ button, then <kbd>Tab</kbd> to take focus away from the `<input>`. Now click on the `<input>`, and you'll see that the entire input text is selected.

### Making the action reusable

Now let's make this function truly reusable across components. `selectOnFocus()` is just a function without any dependency on the `Todo.svelte` component, so we can just extract it to a file and use it from there.

1. Create a new file, `actions.js`, inside the `src` folder.
2. Give it the following content:

   ```js
   export function selectOnFocus(node) {
     if (node && typeof node.select === "function") {
       // make sure node is defined and has a select() method
       const onFocus = (event) => node.select(); // event handler
       node.addEventListener("focus", onFocus); // when node gets focus call onFocus()
       return {
         destroy: () => node.removeEventListener("focus", onFocus), // this will be executed when the node is removed from the DOM
       };
     }
   }
   ```

3. Now import it from inside `Todo.svelte`; add the following import statement just below the others:

   ```js
   import { selectOnFocus } from "../actions.js";
   ```

4. And remove the `selectOnFocus()` definition from `Todo.svelte`, since we no longer need it there.

### Reusing our action

To demonstrate our action's reusability, let's make use of it in `NewTodo.svelte`.

1. Import `selectOnFocus()` from `actions.js` in this file too, as before:

   ```js
   import { selectOnFocus } from "../actions.js";
   ```

2. Add the `use:selectOnFocus` directive to the `<input>`, like this:

   ```svelte
   <input
     bind:value={name}
     bind:this={nameEl}
     use:selectOnFocus
     type="text"
     id="todo-0"
     autocomplete="off"
     class="input input__lg" />
   ```

With a few lines of code we can add functionality to regular HTML elements in a very reusable and declarative way. It just takes an `import` and a short directive like `use:selectOnFocus` that clearly describes its purpose. And we can achieve this without the need to create a custom wrapper element like `TextInput`, `MyInput`, or similar. Moreover, you can add as many `use:action` directives as you want to an element.

Also, we didn't have to struggle with `onMount()`, `onDestroy()`, or `tick()` — the `use` directive takes care of the component lifecycle for us.

### Other actions improvements

In the previous section, while working with the `Todo` components, we had to deal with `bind:this`, `tick()`, and `async` functions just to give focus to our `<input>` as soon as it was added to the DOM.

1. This is how we can implement it with actions instead:

   ```js
   const focusOnInit = (node) =>
     node && typeof node.focus === "function" && node.focus();
   ```

2. And then in our markup we just need to add another `use:` directive:

   ```svelte
   <input bind:value={name} use:selectOnFocus use:focusOnInit />
   ```

3. Our `onEdit()` function can now be much simpler:

   ```js
   function onEdit() {
     editing = true; // enter editing mode
   }
   ```

As a last example before we move on, let's go back to our `Todo.svelte` component and give focus to the _Edit_ button after the user presses _Save_ or _Cancel_.

We could try just reusing our `focusOnInit` action again, adding `use:focusOnInit` to the _Edit_ button. But we'd be introducing a subtle bug. When you add a new to-do, the focus will be put on the _Edit_ button of the recently added to-do. That's because the `focusOnInit` action is running when the component is created.

That's not what we want — we want the _Edit_ button to receive focus only when the user has pressed _Save_ or _Cancel_.

1. So, go back to your `Todo.svelte` file.
2. First we'll create a flag named `editButtonPressed` and initialize it to `false`. Add this just below your other variable definitions:

   ```js
   let editButtonPressed = false; // track if edit button has been pressed, to give focus to it after cancel or save
   ```

3. Next we'll modify the _Edit_ button's functionality to save this flag, and create the action for it. Update the `onEdit()` function like so:

   ```js
   function onEdit() {
     editButtonPressed = true; // user pressed the Edit button, focus will come back to the Edit button
     editing = true; // enter editing mode
   }
   ```

4. Below it, add the following definition for `focusEditButton()`:

   ```js
   const focusEditButton = (node) => editButtonPressed && node.focus();
   ```

5. Finally we `use` the `focusEditButton` action on the _Edit_ button, like so:

   ```svelte
   <button type="button" class="btn" on:click={onEdit} use:focusEditButton>
     Edit<span class="visually-hidden"> {todo.name}</span>
   </button>
   ```

6. Go back and try your app again. At this point, every time the _Edit_ button is added to the DOM, the `focusEditButton` action is executed, but it will only give focus to the button if the `editButtonPressed` flag is `true`.

> [!NOTE]
> We have barely scratched the surface of actions here. Actions can also have reactive parameters, and Svelte lets us detect when any of those parameters change. So we can add functionality that integrates nicely with the Svelte reactive system. For a more detailed introduction to actions, consider checking out the [Svelte Interactive tutorial](https://learn.svelte.dev/tutorial/actions) or the [Svelte `use:action` documentation](https://svelte.dev/docs/element-directives#use-action).

## Component binding: exposing component methods and variables using the `bind:this={component}` directive

There's still one accessibility annoyance left. When the user presses the _Delete_ button, the focus vanishes.

The last feature we will be looking at in this article involves setting the focus on the status heading after a to-do has been deleted.

Why the status heading? In this case, the element that had the focus has been deleted, so there's not a clear candidate to receive focus. We've picked the status heading because it's near the list of to-dos, and it's a way to give a visual feedback about the removal of the task, as well as indicating what's happened to screen reader users.

First we'll extract the status heading to its own component.

1. Create a new file, `components/TodosStatus.svelte`.
2. Add the following contents to it:

   ```svelte
   <script>
     export let todos;

     $: totalTodos = todos.length;
     $: completedTodos = todos.filter((todo) => todo.completed).length;
   </script>

   <h2 id="list-heading">
     {completedTodos} out of {totalTodos} items completed
   </h2>
   ```

3. Import the file at the beginning of `Todos.svelte`, adding the following `import` statement below the others:

   ```js
   import TodosStatus from "./TodosStatus.svelte";
   ```

4. Replace the `<h2>` status heading inside `Todos.svelte` with a call to the `TodosStatus` component, passing `todos` to it as a prop, like so:

   ```svelte
   <TodosStatus {todos} />
   ```

5. You can also do a bit of cleanup, removing the `totalTodos` and `completedTodos` variables from `Todos.svelte`. Just remove the `$: totalTodos = …` and the `$: completedTodos = …` lines, and also remove the reference to `totalTodos` when we calculate `newTodoId` and use `todos.length` instead. To do this, replace the block that begins with `let newTodoId` with this:

   ```js
   $: newTodoId = todos.length ? Math.max(...todos.map((t) => t.id)) + 1 : 1;
   ```

6. Everything works as expected — we just extracted the last piece of markup to its own component.

Now we need to find a way to give focus to the `<h2>` status label after a to-do has been removed.

So far we saw how to send information to a component via props, and how a component can communicate with its parent by emitting events or using two-way data binding. The child component could get a reference to the `<h2>` node `using bind:this={dom_node}` and expose it to the outside using two-way data binding. But doing so would break the component encapsulation; setting focus on it should be its own responsibility.

So we need the `TodosStatus` component to expose a method that its parent can call to give focus to it. It's a very common scenario that a component needs to expose some behavior or information to the consumer; let's see how to achieve it with Svelte.

We've already seen that Svelte uses `export let varname = …` to [declare props](https://svelte.dev/docs/svelte-components#script-1-export-creates-a-component-prop). But if instead of using `let` you export a `const`, `class`, or `function`, it is read-only outside the component. Function expressions are valid props, however. In the following example, the first three declarations are props, and the rest are exported values:

```svelte
<script>
  export let bar = "optional default initial value"; // prop
  export let baz = undefined; // prop
  export let format = (n) => n.toFixed(2); // prop

  // these are readonly
  export const thisIs = "readonly"; // read-only export

  export function greet(name) {
    // read-only export
    alert(`Hello, ${name}!`);
  }

  export const greet = (name) => alert(`Hello, ${name}!`); // read-only export
</script>
```

With this in mind, let's go back to our use case. We'll create a function called `focus()` that gives focus to the `<h2>` heading. For that we'll need a `headingEl` variable to hold the reference to the DOM node, and we'll have to bind it to the `<h2>` element using `bind:this={headingEl}`. Our focus method will just run `headingEl.focus()`.

1. Update the contents of `TodosStatus.svelte` like so:

   ```svelte
   <script>
     export let todos;

     $: totalTodos = todos.length;
     $: completedTodos = todos.filter((todo) => todo.completed).length;

     let headingEl;

     export function focus() {
       // shorter version: export const focus = () => headingEl.focus()
       headingEl.focus();
     }
   </script>

   <h2 id="list-heading" bind:this={headingEl} tabindex="-1">
     {completedTodos} out of {totalTodos} items completed
   </h2>
   ```

   Note that we've added a `tabindex` attribute to the `<h2>` to allow the element to receive focus programmatically.

   As we saw earlier, using the `bind:this={headingEl}` directive gives us a reference to the DOM node in the variable `headingEl`. Then we use `export function focus()` to expose a function that gives focus to the `<h2>` heading.

   How can we access those exported values from the parent? Just as you can bind to DOM elements with the `bind:this={dom_node}` directive, you can also bind to component instances themselves with `bind:this={component}`. So, when you use `bind:this` on an HTML element, you get a reference to the DOM node, and when you do it on a Svelte component, you get a reference to the instance of that component.

2. So to bind to the instance of `TodosStatus`, we'll first create a `todosStatus` variable in `Todos.svelte`. Add the following line below your `import` statements:

   ```js
   let todosStatus; // reference to TodosStatus instance
   ```

3. Next, add a `bind:this={todosStatus}` directive to the call, as follows:

   ```svelte
   <!-- TodosStatus -->
   <TodosStatus bind:this={todosStatus} {todos} />
   ```

4. Now we can call the `exported focus()` method from our `removeTodo()` function:

   ```js
   function removeTodo(todo) {
     todos = todos.filter((t) => t.id !== todo.id);
     todosStatus.focus(); // give focus to status heading
   }
   ```

5. Go back to your app. Now if you delete any to-do, the status heading will be focussed. This is useful to highlight the change in numbers of to-dos, both to sighted users and screen reader users.

> [!NOTE]
> You might be wondering why we need to declare a new variable for component binding. Why can't we just call `TodosStatus.focus()`? You might have multiple `TodosStatus` instances active, so you need a way to reference each particular instance. That's why you have to specify a variable to bind each specific instance to.

## The code so far

### Git

To see the state of the code as it should be at the end of this article, access your copy of our repo like this:

```bash
cd mdn-svelte-tutorial/06-stores
```

Or directly download the folder's content:

```bash
npx degit opensas/mdn-svelte-tutorial/06-stores
```

Remember to run `npm install && npm run dev` to start your app in development mode.

### REPL

To see the current state of the code in a REPL, visit:

<https://svelte.dev/repl/d1fa84a5a4494366b179c87395940039?version=3.23.2>

## Summary

In this article we have finished adding all the required functionality to our app, plus we've taken care of a number of accessibility and usability issues. We also finished splitting our app into manageable components, each one with a unique responsibility.

In the meantime, we saw a few advanced Svelte techniques, like:

- Dealing with reactivity gotchas when updating objects and arrays
- Working with DOM nodes using `bind:this={dom_node}` (binding DOM elements)
- Using the component lifecycle `onMount()` function
- Forcing Svelte to resolve pending state changes with the `tick()` function
- Adding functionality to HTML elements in a reusable and declarative way with the `use:action` directive
- Accessing component methods using `bind:this={component}` (binding components)

In the next article we will see how to use stores to communicate between components, and add animations to our components.

{{PreviousMenuNext("Learn_web_development/Core/Frameworks_libraries/Svelte_components","Learn_web_development/Core/Frameworks_libraries/Svelte_stores", "Learn_web_development/Core/Frameworks_libraries")}}
