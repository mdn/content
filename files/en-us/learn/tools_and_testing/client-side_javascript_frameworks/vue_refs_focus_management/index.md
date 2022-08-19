---
title: Focus management with Vue refs
slug: >-
  Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Vue_refs_focus_management
tags:
  - Beginner
  - Frameworks
  - JavaScript
  - Learn
  - client-side
  - focus management
  - refs
  - Vue
---
{{LearnSidebar}}{{PreviousMenuNext("Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Vue_conditional_rendering","Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Vue_resources", "Learn/Tools_and_testing/Client-side_JavaScript_frameworks")}}

We are nearly done with Vue. The last bit of functionality to look at is focus management, or put another way, how we can improve our app's keyboard accessibility. We'll look at using **Vue refs** to handle this — an advanced feature that allows you to have direct access to the underlying DOM nodes below the virtual DOM, or direct access from one component to the internal DOM structure of a child component.

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
      <td>To learn how to handle focus management using Vue refs.</td>
    </tr>
  </tbody>
</table>

## The focus management problem

While we do have working edit functionality, we aren't providing a great experience for non-mouse users. Specifically, when a user activates the "Edit" button, we remove the "Edit" button from the DOM, but we don't move the user's focus anywhere, so in effect it just disappears. This can be disorienting for keyboard and non-visual users.

To understand what's currently happening:

1. Reload your page, then press

    <kbd>Tab</kbd>

    . You should see a focus outline on the input for adding new to-do items.

2. Press

    <kbd>Tab</kbd>

    again. The focus should move to the "Add" button.

3. Hit it again, and it'll be on the first checkbox. One more time, and focus should be on the first "Edit" button.
4. Activate the "Edit" button by pressing

    <kbd>Enter</kbd>

    . The checkbox will be replaced with our edit component, but the focus outline will be gone.

This behavior can be jarring. In addition, what happens when you press <kbd>Tab</kbd> again varies depending on the browser you're using. Similarly, if you save or cancel your edit, focus will disappear again as you move back to the non-edit view.

To give users a better experience, we'll add code to control the focus so that it gets set to the edit field when the edit form is shown. We'll also want to put focus back on the "Edit" button when a user cancels or saves their edit. In order to set focus, we need to understand a little bit more about how Vue works internally.

## Virtual DOM and refs

Vue, like some other frameworks, uses a virtual DOM (VDOM) to manage elements. This means that Vue keeps a representation of all of the nodes in our app in memory. Any updates are first performed on the in-memory nodes, and then all the changes that need to be made to the actual nodes on the page are synced in a batch.

Since reading and writing actual DOM nodes is often more expensive than virtual nodes, this can result in better performance. However, it also means you often should not edit your HTML elements directly through native browser APIs (like [`Document.getElementById`](/en-US/docs/Web/API/Document/getElementById)) when using frameworks, because it results in the VDOM and real DOM going out of sync.

Instead, if you need to access the underlying DOM nodes (like when setting focus), you can use **[Vue refs](https://v2.vuejs.org/v2/api/#ref)**. For custom Vue components, you can also use refs to directly access the internal structure of a child component, however this should be done with caution as it can make code harder to reason about and understand.

To use a ref in a component, you add a `ref` attribute to the element that you want to access, with a string identifier for the value of the attribute. It's important to note that a ref needs to be unique within a component. No two elements rendered at the same time should have the same ref.

### Adding a ref to our app

So, let's attach a ref to our "Edit" button in `ToDoItem.vue`. Update it like this:

```html
<button type="button" class="btn" ref="editButton" @click="toggleToItemEditForm">
  Edit
  <span class="visually-hidden">\{{label}}</span>
</button>
```

To access the value associated with our ref, we use the `$refs` property provided on our component instance. To see the value of the ref when we click our "Edit" button, add a `console.log()` to our `toggleToItemEditForm()` method, like so:

```js
toggleToItemEditForm() {
  console.log(this.$refs.editButton);
  this.isEditing = true;
}
```

If you activate the "Edit" button at this point, you should see an HTML `<button>` element referenced in your console.

## Vue's $nextTick() method

We want to set focus on the "Edit" button when a user saves or cancels their edit. To do that, we need to handle focus in the `ToDoItem` component's `itemEdited()` and `editCancelled()` methods.

For convenience, create a new method which takes no arguments called `focusOnEditButton()`. Inside it, assign your `ref` to a variable, and then call the `focus()` method on the ref.

```js
focusOnEditButton() {
  const editButtonRef = this.$refs.editButton;
  editButtonRef.focus();
}
```

Next, add a call to `this.focusOnEditButton()` at the end of the `itemEdited()` and `editCancelled()` methods:

```js
itemEdited(newItemName) {
  this.$emit("item-edited", newItemName);
  this.isEditing = false;
  this.focusOnEditButton();
},
editCancelled() {
  this.isEditing = false;
  this.focusOnEditButton();
},
```

Try editing and then saving/cancelling a to-do item via your keyboard. You'll notice that focus isn't being set, so we still have a problem to solve. If you open your console, you'll see an error raised along the lines of _"can't access property "focus", editButtonRef is undefined"_. This seems weird. Your button ref was defined when you activated the "Edit" button, but now it's not. What is going on?

Well, remember that when we change `isEditing` to `true`, we no longer render the section of the component featuring the "Edit" button. This means there's no element to bind the ref to, so it becomes `undefined`.

You might now be thinking "hey, don't we set `isEditing=false` before we try to access the `ref`, so therefore shouldn't the `v-if` now be displaying the button?" This is where the virtual DOM comes into play. Because Vue is trying to optimize and batch changes, it won't immediately update the DOM when we set `isEditing` to `false`. So when we call `focusOnEditButton()`, the "Edit" button has not been rendered yet.

Instead, we need to wait until after Vue undergoes the next DOM update cycle. To do that, Vue components have a special method called `$nextTick()`. This method accepts a callback function, which then executes after the DOM updates.

Since the `focusOnEditButton()` method needs to be invoked after the DOM has updated, we can wrap the existing function body inside a `$nextTick()` call.

```js
focusOnEditButton() {
  this.$nextTick(() => {
    const editButtonRef = this.$refs.editButton;
    editButtonRef.focus();
  });
}
```

Now when you activate the "Edit" button and then cancel or save your changes via the keyboard, focus should be returned to the "Edit" button. Success!

## Vue lifecycle methods

Next, we need to move focus to the edit form's `<input>` element when the "Edit" button is clicked. However, because our edit form is in a different component to our "Edit" button, we can't just set focus inside the "Edit" button's click event handler. Instead, we can use the fact that we remove and re-mount our `ToDoItemEditForm` component whenever the "Edit" button is clicked to handle this.

So how does this work? Well, Vue components undergo a series of events, known as a **lifecycle**. This lifecycle spans from all the way before elements are _created_ and added to the VDOM (_mounted_), until they are removed from the VDOM (_destroyed_).

Vue lets you run methods at various stages of this lifecycle using **lifecycle methods**. This can be useful for things like data fetching, where you may need to get your data before your component renders, or after a property changes. The list of lifecycle methods are below, in the order that they fire.

1. `beforeCreate()` — Runs before the instance of your component is created. Data and events are not yet available.
2. `created()` — Runs after your component is initialized but before the component is added to the VDOM. This is often where data fetching occurs.
3. `beforeMount()` — Runs after your template is compiled, but before your component is rendered to the actual DOM.
4. `mounted()` — Runs after your component is mounted to the DOM. Can access `refs` here.
5. `beforeUpdate()` — Runs whenever data in your component changes, but before the changes are rendered to the DOM.
6. `updated()` — Runs whenever data in your component has changed and after the changes are rendered to the DOM.
7. `beforeDestroy()` — Runs before a component is removed from the DOM.
8. `destroyed()` — Runs after a component has been removed from the DOM.
9. `activated()` — Only used in components wrapped in a special `keep-alive` tag. Runs after the component is activated.
10. `deactivated()` — Only used in components wrapped in a special `keep-alive` tag. Runs after the component is deactivated.

> **Note:** The Vue Docs provide a [nice diagram for visualizing when these hooks happen](https://v2.vuejs.org/v2/guide/instance.html#Lifecycle-Diagram). This article from the [Digital Ocean Community Blog dives into the lifecycle methods more deeply](https://www.digitalocean.com/community/tutorials/vuejs-component-lifecycle).

Now that we've gone over the lifecycle methods, let's use one to trigger focus when our `ToDoItemEditForm` component is mounted.

In `ToDoItemEditForm.vue`, attach `ref="labelInput"` to the `<input>` element, like so:

```html
<input :id="id" ref="labelInput" type="text" autocomplete="off" v-model.lazy.trim="newName" />
```

Next, add a `mounted()` property just inside your component object — **note that this should not be put inside the `methods` property, but rather at the same hierarchy level as `props`, `data()`, and `methods`.** Lifecycle methods are special methods that sit on their own, not alongside the user-defined methods. This should take no inputs. Note that you cannot use an arrow function here since we need access to `this` to access our `labelInput` ref.

```js
mounted() {

}
```

Inside your `mounted()` method, assign your `labelInput` ref to a variable, and then call the `focus()` function of the ref. You don't have to use `$nextTick` here because the component has already been added to the DOM when `mounted()` is called.

```js
mounted() {
   const labelInputRef = this.$refs.labelInput;
   labelInputRef.focus();
}
```

Now when you activate the "Edit" button with your keyboard, focus should immediately be moved to the edit `<input>`.

## Handling focus when deleting to-do items

There's one more place we need to consider focus management: when a user deletes a to-do. When clicking the "Edit" button, it makes sense to move focus to the edit name text box, and back to the "Edit" button when canceling or saving from the edit screen.

However, unlike with the edit form, we don't have a clear location for focus to move to when an element is deleted. We also need a way to provide assistive technology users with information that confirms that an element was deleted.

We're already tracking the number of elements in our list heading — the `<h2>` in `App.vue` — and it's associated with our list of to-do items. This makes it a reasonable place to move focus to when we delete a node.

First, we need to add a ref to our list heading. We also need to add a `tabindex="-1"` to it — this makes the element programmatically focusable (i.e. it can be focused via JavaScript), when by default it is not.

Inside `App.vue`, update your `<h2>` as follows:

```html
 <h2 id="list-summary" ref="listSummary" tabindex="-1">\{{listSummary}}</h2>
```

> **Note:** [`tabindex`](/en-US/docs/Web/HTML/Global_attributes/tabindex) is a really powerful tool for handling certain accessibility problems. However, it should be used with caution. Over-using `tabindex="-1"` can cause problems for all sorts of users, so only use it exactly where you need to. You should also almost never use `tabindex` > = `0`, as it can cause problems for users since it can make the DOM flow and the tab-order mismatch, and/or add non-interactive elements to the tab order. This can be confusing to users, especially those using screen readers and other assistive technology.

Now that we have a `ref` and have let browsers know that we can programmatically focus the `<h2>`, we need to set focus on it. At the end of `deleteToDo()`, use the `listSummary` ref to set focus on the `<h2>`. Since the `<h2>` is always rendered in the app, you do not need to worry about using `$nextTick` of lifecycle methods to handle focusing it.

```js
deleteToDo(toDoId) {
    const itemIndex = this.ToDoItems.findIndex((item) => item.id === toDoId);
    this.ToDoItems.splice(itemIndex, 1);
    this.$refs.listSummary.focus();
}
```

Now, when you delete an item from your list, focus should be moved up to the list heading. This should provide a reasonable focus experience for all of our users.

## Summary

So that's it for focus management, and for our app! Congratulations for working your way through all our Vue tutorials. In the next article we'll round things off with some further resources to take your Vue learning further.

> **Note:** If you need to check your code against our version, you can find a finished version of the sample Vue app code in our todo-vue repository. For a running live version, see <https://mdn.github.io/todo-vue/dist/>.

{{PreviousMenuNext("Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Vue_conditional_rendering","Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Vue_resources", "Learn/Tools_and_testing/Client-side_JavaScript_frameworks")}}

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
