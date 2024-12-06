---
title: Filtering our to-do items
slug: Learn_web_development/Core/Frameworks_libraries/Angular_filtering
page-type: learn-module-chapter
---

{{LearnSidebar}}{{PreviousMenuNext("Learn_web_development/Core/Frameworks_libraries/Angular_item_component","Learn_web_development/Core/Frameworks_libraries/Angular_building", "Learn_web_development/Core/Frameworks_libraries")}}

Now let's move on to adding functionality to allow users to filter their to-do items, so they can view active, completed, or all items.

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

In `app.component.html`, add the following HTML below the **Add** button but above the section that lists the items.
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

{{PreviousMenuNext("Learn_web_development/Core/Frameworks_libraries/Angular_item_component","Learn_web_development/Core/Frameworks_libraries/Angular_building", "Learn_web_development/Core/Frameworks_libraries")}}
