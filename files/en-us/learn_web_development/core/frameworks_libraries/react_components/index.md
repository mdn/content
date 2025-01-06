---
title: Componentizing our React app
slug: Learn_web_development/Core/Frameworks_libraries/React_components
page-type: learn-module-chapter
---

{{LearnSidebar}}

{{PreviousMenuNext("Learn_web_development/Core/Frameworks_libraries/React_todo_list_beginning","Learn_web_development/Core/Frameworks_libraries/React_interactivity_events_state", "Learn_web_development/Core/Frameworks_libraries")}}

At this point, our app is a monolith. Before we can make it do things, we need to break it apart into manageable, descriptive components. React doesn't have any hard rules for what is and isn't a component – that's up to you! In this article we will show you a sensible way to break our app up into components.

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
      <td>
        A sensible way of breaking our todo list app into components.
      </td>
    </tr>
  </tbody>
</table>

## Defining our first component

Defining a component can seem tricky until you have some practice, but the gist is:

- If it represents an obvious "chunk" of your app, it's probably a component
- If it gets reused often, it's probably a component.

That second bullet is especially valuable: making a component out of common UI elements allows you to change your code in one place and see those changes everywhere that component is used. You don't have to break everything out into components right away, either. Let's take the second bullet point as inspiration and make a component out of the most reused, most important piece of the UI: a todo list item.

## Make a `<Todo />`

Before we can make a component, we should create a new file for it. In fact, we should make a directory just for our components. Make sure you're in the root of your app before you run these commands!

```bash
# create a `components` directory
mkdir src/components
# within `components`, create a file called `Todo.jsx`
touch src/components/Todo.jsx
```

Don't forget to restart your development server if you stopped it to run the previous commands!

Let's add a `Todo()` function in `Todo.jsx`. Here, we define a function and export it:

```jsx
function Todo() {}

export default Todo;
```

This is OK so far, but our component should return something useful! Go back to `src/App.jsx`, copy the first [`<li>`](/en-US/docs/Web/HTML/Element/li) from inside the unordered list, and paste it into `Todo.jsx` so that it reads like this:

```jsx
function Todo() {
  return (
    <li className="todo stack-small">
      <div className="c-cb">
        <input id="todo-0" type="checkbox" defaultChecked />
        <label className="todo-label" htmlFor="todo-0">
          Eat
        </label>
      </div>
      <div className="btn-group">
        <button type="button" className="btn">
          Edit <span className="visually-hidden">Eat</span>
        </button>
        <button type="button" className="btn btn__danger">
          Delete <span className="visually-hidden">Eat</span>
        </button>
      </div>
    </li>
  );
}

export default Todo;
```

Now we have something we can use. In `App.jsx`, add the following line at the top of the file to import `Todo`:

```jsx
import Todo from "./components/Todo";
```

With this component imported, you can replace all of the `<li>` elements in `App.jsx` with `<Todo />` component calls. Your `<ul>` should read like this:

```jsx
<ul
  role="list"
  className="todo-list stack-large stack-exception"
  aria-labelledby="list-heading">
  <Todo />
  <Todo />
  <Todo />
</ul>
```

When you return to your app, you'll notice something unfortunate: your list now repeats the first task three times!

![Our todo list app, with todo components repeating because the label is hardcoded into the component](todo-list-repeating-todos.png)

We don't only want to eat; we have other things to — well — to do. Next we'll look at how we can make different component calls render unique content.

## Make a unique `<Todo />`

Components are powerful because they let us re-use pieces of our UI, and refer to one place for the source of that UI. The problem is, we don't typically want to reuse all of each component; we want to reuse most parts, and change small pieces. This is where props come in.

### What's in a `name`?

In order to track the names of tasks we want to complete, we should ensure that each `<Todo />` component renders a unique name.

In `App.jsx`, give each `<Todo />` a name prop. Let's use the names of our tasks that we had before:

```jsx
<Todo name="Eat" />
<Todo name="Sleep" />
<Todo name="Repeat" />
```

When your browser refreshes, you will see… the exact same thing as before. We gave our `<Todo />` some props, but we aren't using them yet. Let's go back to `Todo.jsx` and remedy that.

First modify your `Todo()` function definition so that it takes `props` as a parameter. You can `console.log()` your props if you'd like to check that they are being received by the component correctly.

Once you're confident that your component is getting its props, you can replace every occurrence of `Eat` with your `name` prop by reading `props.name`. Remember: `props.name` is a JSX expression, so you'll need to wrap it in curly braces.

Putting all that together, your `Todo()` function should read like this:

```jsx
function Todo(props) {
  return (
    <li className="todo stack-small">
      <div className="c-cb">
        <input id="todo-0" type="checkbox" defaultChecked={true} />
        <label className="todo-label" htmlFor="todo-0">
          {props.name}
        </label>
      </div>
      <div className="btn-group">
        <button type="button" className="btn">
          Edit <span className="visually-hidden">{props.name}</span>
        </button>
        <button type="button" className="btn btn__danger">
          Delete <span className="visually-hidden">{props.name}</span>
        </button>
      </div>
    </li>
  );
}

export default Todo;
```

_Now_ your browser should show three unique tasks. Another problem remains though: they're all still checked by default.

![Our todo list, with different todo labels now they are passed into the components as props](todo-list-unique-todos.png)

### Is it `completed`?

In our original static list, only `Eat` was checked. Once again, we want to reuse _most_ of the UI that makes up a `<Todo />` component, but change one thing. That's a good job for another prop! Give your first `<Todo />` call a boolean prop of `completed`, and leave the other two as they are.

```jsx
<Todo name="Eat" completed />
<Todo name="Sleep" />
<Todo name="Repeat" />
```

As before, we must go back to `Todo.jsx` to actually use these props. Change the `defaultChecked` attribute on the `<input />` so that its value is equal to the `completed` prop. Once you're done, the Todo component's `<input />` element will read like this:

```jsx
<input id="todo-0" type="checkbox" defaultChecked={props.completed} />
```

And your browser should update to show only `Eat` being checked:

![Our todo list app, now with differing checked states - some checkboxes are checked, others not](todo-list-differing-checked-states.png)

If you change each `<Todo />` component's `completed` prop, your browser will check or uncheck the equivalent rendered checkboxes accordingly.

### Gimme some `id`, please

We have still _another_ problem: our `<Todo />` component gives every task an `id` attribute of `todo-0`. This is bad for a couple of reasons:

- [`id` attributes](/en-US/docs/Web/HTML/Global_attributes/id) must be unique (they are used as unique identifiers for document fragments, by CSS, JavaScript, etc.).
- When `id`s are not unique, the functionality of [label elements](/en-US/docs/Web/HTML/Element/label) can break.

The second problem is affecting our app right now. If you click on the word "Sleep" next to the second checkbox, you'll notice the "Eat" checkbox toggles instead of the "Sleep" checkbox. This is because every checkbox's `<label>` element has an `htmlFor` attribute of `todo-0`. The `<label>`s only acknowledge the first element with a given `id` attribute, which causes the problem you see when clicking on the other labels.

We had unique `id` attributes before we created the `<Todo />` component. Let's bring them back, following the format of `todo-i`, where `i` gets larger by one every time. Update the `Todo` component instances inside `App.jsx` to add in `id` props, as follows:

```jsx
<Todo name="Eat" id="todo-0" completed />
<Todo name="Sleep" id="todo-1" />
<Todo name="Repeat" id="todo-2" />
```

> [!NOTE]
> The `completed` prop is last here because it is a boolean with no assignment. This is purely a stylistic convention. The order of props does not matter because props are JavaScript objects, and JavaScript objects are unordered.

Now go back to `Todo.jsx` and make use of the `id` prop. It needs to replace the `<input />` element's `id` attribute value, as well as its `<label>`'s `htmlFor` attribute value:

```jsx
<div className="c-cb">
  <input id={props.id} type="checkbox" defaultChecked={props.completed} />
  <label className="todo-label" htmlFor={props.id}>
    {props.name}
  </label>
</div>
```

With these fixes in place, clicking on the labels next to each checkbox will do what we expect – check and uncheck the checkboxes next to those labels.

## So far, so good?

We're making good use of React so far, but we could do better! Our code is repetitive. The three lines that render our `<Todo />` component are almost identical, with only one difference: the value of each prop.

We can clean up our code with one of JavaScript's core abilities: iteration. To use iteration, we should first re-think our tasks.

## Tasks as data

Each of our tasks currently contains three pieces of information: its name, whether it has been checked, and its unique ID. This data translates nicely to an object. Since we have more than one task, an array of objects would work well in representing this data.

In `src/main.jsx`, declare a new `const` beneath the final import, but above `ReactDOM.createRoot()`:

```jsx
const DATA = [
  { id: "todo-0", name: "Eat", completed: true },
  { id: "todo-1", name: "Sleep", completed: false },
  { id: "todo-2", name: "Repeat", completed: false },
];
```

> [!NOTE]
> If your text editor has an [ESLint](https://eslint.org/) plugin, you may see a warning on this `DATA` const. This warning comes from the ESLint configuration supplied by the Vite template we used, and it doesn't apply to this code. You can safely suppress the warning by adding `// eslint-disable-next-line` to the line above the `DATA` const.

Next, we'll pass `DATA` to `<App />` as a prop, called `tasks`. Update your `<App />` component call inside `src/main.jsx` to read like this:

```jsx
<App tasks={DATA} />
```

The `DATA` array is now available inside the App component as `props.tasks`. You can `console.log()` it to check, if you'd like.

> **Note:** `ALL_CAPS` constant names have no special meaning in JavaScript; they're a convention that tells other developers "this data will never change after being defined here".

## Rendering with iteration

To render our array of objects, we have to turn each object into a `<Todo />` component. JavaScript gives us an array method for transforming items into something else: [`Array.prototype.map()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map).

Inside `App.jsx`, create a new `const` above the `App()` function's `return` statement called `taskList`. Let's start by transforming each task in the `props.tasks` array into its `name`. The `?.` operator lets us perform [optional chaining](/en-US/docs/Web/JavaScript/Reference/Operators/Optional_chaining) to check if `props.tasks` is `undefined` or `null` before attempting to create a new array of task names:

```jsx
const taskList = props.tasks?.map((task) => task.name);
```

Let's try replacing all the children of the `<ul>` with `taskList`:

```jsx
<ul
  role="list"
  className="todo-list stack-large stack-exception"
  aria-labelledby="list-heading">
  {taskList}
</ul>
```

This gets us some of the way towards showing all the components again, but we've got more work to do: the browser currently renders each task's name as plain text. We're missing our HTML structure — the `<li>` and its checkboxes and buttons!

![Our todo list app with the todo item labels just shown bunched up on one line](todo-list-unstructured-names.png)

To fix this, we need to return a `<Todo />` component from our `map()` function — remember that JSX is JavaScript, so we can use it alongside any other, more familiar JavaScript syntax. Let's try the following instead of what we have already:

```jsx
const taskList = props.tasks?.map((task) => <Todo />);
```

Look again at your app; now our tasks look more like they used to, but they're missing the names of the tasks themselves. Remember that each task we map over contains the `id`, `name`, and `completed` properties we want to pass into our `<Todo />` component. If we put that knowledge together, we get code like this:

```jsx
const taskList = props.tasks?.map((task) => (
  <Todo id={task.id} name={task.name} completed={task.completed} />
));
```

Now the app looks like it did before, and our code is less repetitive.

## Unique keys

Now that React is rendering our tasks out of an array, it has to keep track of which one is which in order to render them properly. React tries to do its own guesswork to keep track of things, but we can help it out by passing a `key` prop to our `<Todo />` components. `key` is a special prop that's managed by React – you cannot use the word `key` for any other purpose.

Because keys should be unique, we're going to re-use the `id` of each task object as its key. Update your `taskList` constant like so:

```jsx
const taskList = props.tasks?.map((task) => (
  <Todo
    id={task.id}
    name={task.name}
    completed={task.completed}
    key={task.id}
  />
));
```

**You should always pass a unique key to anything you render with iteration.** Nothing obvious will change in your browser, but if you do not use unique keys, React will log warnings to your console and your app may behave strangely!

## Componentizing the rest of the app

Now that we've got our most important component sorted out, we can turn the rest of our app into components. Remembering that components are either obvious pieces of UI, reused pieces of UI, or both, we can make two more components:

- `<Form />`
- `<FilterButton />`

Since we know we need both, we can batch some of the file creation work together in one terminal command. Run this command in your terminal, taking care that you're in the root directory of your app:

```bash
touch src/components/{Form,FilterButton}.jsx
```

### The `<Form />`

Open `components/Form.jsx` and do the following:

- Declare a `Form()` function and export it at the end of the file.
- Copy the `<form>` tags and everything between them from inside `App.jsx`, and paste them inside `Form()`'s `return` statement.

Your `Form.jsx` file should read like this:

```jsx
function Form() {
  return (
    <form>
      <h2 className="label-wrapper">
        <label htmlFor="new-todo-input" className="label__lg">
          What needs to be done?
        </label>
      </h2>
      <input
        type="text"
        id="new-todo-input"
        className="input input__lg"
        name="text"
        autoComplete="off"
      />
      <button type="submit" className="btn btn__primary btn__lg">
        Add
      </button>
    </form>
  );
}

export default Form;
```

### The `<FilterButton />`

Do the same things you did to create `Form.jsx` inside `FilterButton.jsx`, but call the component `FilterButton()` and copy the HTML for the first button inside `<div className="filters btn-group stack-exception">` from `App.jsx` into the `return` statement.

The file should read like this:

```jsx
function FilterButton() {
  return (
    <button type="button" className="btn toggle-btn" aria-pressed="true">
      <span className="visually-hidden">Show </span>
      <span>all </span>
      <span className="visually-hidden"> tasks</span>
    </button>
  );
}

export default FilterButton;
```

> [!NOTE]
> You might notice that we are making the same mistake here as we first made for the `<Todo />` component, in that each button will be the same. That's fine! We're going to fix up this component later on, in [Back to the filter buttons](/en-US/docs/Learn_web_development/Core/Frameworks_libraries/React_interactivity_filtering_conditional_rendering#back_to_the_filter_buttons).

## Importing all our components

Let's make use of our new components. Add some more `import` statements to the top of `App.jsx` and reference the components we've just made. Then, update the `return` statement of `App()` so that it renders our components.

When you're done, `App.jsx` will read like this:

```jsx
import Form from "./components/Form";
import FilterButton from "./components/FilterButton";
import Todo from "./components/Todo";

function App(props) {
  const taskList = props.tasks?.map((task) => (
    <Todo
      id={task.id}
      name={task.name}
      completed={task.completed}
      key={task.id}
    />
  ));
  return (
    <div className="todoapp stack-large">
      <h1>TodoMatic</h1>
      <Form />
      <div className="filters btn-group stack-exception">
        <FilterButton />
        <FilterButton />
        <FilterButton />
      </div>
      <h2 id="list-heading">3 tasks remaining</h2>
      <ul
        role="list"
        className="todo-list stack-large stack-exception"
        aria-labelledby="list-heading">
        {taskList}
      </ul>
    </div>
  );
}

export default App;
```

With this in place, your React app should render basically the same as it did before, but using your shiny new components.

## Summary

And that's it for this article — we've gone into depth on how to break up your app nicely into components and render them efficiently. Next we'll look at handling events in React, and start adding some interactivity.

{{PreviousMenuNext("Learn_web_development/Core/Frameworks_libraries/React_todo_list_beginning","Learn_web_development/Core/Frameworks_libraries/React_interactivity_events_state", "Learn_web_development/Core/Frameworks_libraries")}}
