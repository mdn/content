---
title: Kanban board with drag and drop
slug: Web/API/HTML_Drag_and_Drop_API/Kanban_board
page-type: guide
---

{{DefaultAPISidebar("HTML Drag and Drop API")}}

As mentioned on [the landing page](/en-US/docs/Web/API/HTML_Drag_and_Drop_API#concepts_and_usage), the Drag and Drop API simultaneously models three use cases: dragging elements within a page, dragging data out of a page, and dragging data into a page. This tutorial demonstrates the first use case: dragging elements within a page. We will be implementing a Kanban application, similar to the functionality provided by [GitHub projects](https://docs.github.com/en/issues/planning-and-tracking-with-projects/learning-about-projects/about-projects) or [Trello](https://trello.com/).

## Basic page layout

Because we are mainly demonstrating dragging and reordering here, we will omit some dynamic aspects of a real Kanban board, such as adding and removing tasks. Instead, all our columns and tasks will be hardcoded in the HTML.

```html live-sample___kanban
<div class="container">
  <div class="task-column">
    <h2>To Do</h2>
    <ul class="tasks">
      <li class="task" draggable="true">Find out where Soul Stone is</li>
    </ul>
  </div>
  <div class="task-column">
    <h2>In Progress</h2>
    <ul class="tasks">
      <li class="task" draggable="true">Collect Time Stone from Dr. Strange</li>
      <li class="task" draggable="true">Collect Mind Stone from Vision</li>
      <li class="task" draggable="true">
        Collect Reality Stone from the Collector
      </li>
    </ul>
  </div>
  <div class="task-column">
    <h2>Done</h2>
    <ul class="tasks">
      <li class="task" draggable="true">Collect Power Stone from Xandar</li>
      <li class="task" draggable="true">Collect Space Stone from Asgard</li>
    </ul>
  </div>
</div>
```

```css live-sample___kanban
body {
  font-family: "Arial", sans-serif;
}

.container {
  display: flex;
  gap: 0.5rem;
}

.task-column {
  border: 1px solid #cccccc;
  border-radius: 5px;
  margin: 10px;
  padding: 10px;
  flex: 1;
}

.tasks {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  list-style: none;
  padding: 0;
}

.task-column h2 {
  text-align: center;
}

.task {
  background-color: #f9f9f9;
  border: 1px solid #eeeeee;
  border-radius: 3px;
  padding: 8px;
  cursor: grab;
}

.task:active {
  cursor: grabbing;
}

@media (width < 600px) {
  .container {
    flex-direction: column;
  }
}
```

This defines the basic structure and styles for our application. The tasks are each made [draggable](/en-US/docs/Web/API/HTML_Drag_and_Drop_API#draggable_items), but they don't do anything when dragged yet.

## Declaring drop targets

We want to make the task columns into valid [drop targets](/en-US/docs/Web/API/HTML_Drag_and_Drop_API#drop_target) for the dragged tasks. As a baseline, we need to listen for {{domxref("HTMLElement/dragover_event", "dragover")}} and cancel it. However, we take care and only cancel the event if the drag event is dragging a task—if we are trying to drop anything else, the column should not be a drop target.

First, all columns will be retrieved in a global variable.

```js live-sample___kanban
const columns = document.querySelectorAll(".task-column");
```

Then, the following temporary code will be added to the `dragover` event of each column.

```js
columns.forEach((column) => {
  column.addEventListener("dragover", (event) => {
    // Test a custom type we will set later
    if (event.dataTransfer.types.includes("task")) {
      event.preventDefault();
    }
  });
});
```

Now, when a task is dragged over a column, you may see a [cursor effect](/en-US/docs/Web/API/HTML_Drag_and_Drop_API/Drag_operations#drop_effects) such as a plus sign indicating that the task will be copied when dropped, because copying is the default action. Later, we will change this indicator because the task will actually be moved.

## Moving elements

Now we implement the core functionality: the ability to move tasks between columns. It consists of two steps: add the dragged element to the target column and remove it from the source column.

We track the dragged element and the source column this way: on `dragstart`, we mark the dragged task with an `id`. Then on `drop`, we can use this ID to identify the task and remove it from the source column. Finally we remember to remove the ID on `dragend` so we don't create duplicate IDs on a later drag.

```js live-sample___kanban
const tasks = document.querySelectorAll(".task");

tasks.forEach((task) => {
  task.addEventListener("dragstart", (event) => {
    task.id = "dragged-task";
    event.dataTransfer.effectAllowed = "move";
    // Custom type to identify a task drag
    event.dataTransfer.setData("task", "");
  });

  task.addEventListener("dragend", (event) => {
    task.removeAttribute("id");
  });
});
```

There are other options, such as giving each item a unique ID and then storing this ID inside the [`dataTransfer`](/en-US/docs/Web/API/HTML_Drag_and_Drop_API/Drag_data_store), or storing a reference to the DOM element in a global variable. All these approaches have roughly the same effect.

Because tasks are always supposed to be moved and never copied or linked, we also set the {{domxref("DataTransfer.effectAllowed")}} property to `"move"` so that it is the only effect allowed. This change updates the cursor effect to indicate a move operation. Furthermore we set a `dataTransfer` item of type `task` which is used to identify the dragged task as shown earlier.

As mentioned in [drop effects](/en-US/docs/Web/API/HTML_Drag_and_Drop_API/Drag_operations#drop_effects), you may only set `effectAllowed` in the `dragstart` handler for the draggable element.

Now, we can actually trigger the move action inside the {{domxref("HTMLElement/drop_event", "drop")}} handler on the target column. We can identify the dragged task by its ID, remove it from the DOM tree using {{domxref("Element.remove()")}}, and then reinsert it at the target column. Because we only allow dropping if the drag is actually dropping a task, we can proceed with confidence that `draggedTask` must exist.

```js
columns.forEach((column) => {
  column.addEventListener("drop", (event) => {
    event.preventDefault();

    const draggedTask = document.getElementById("dragged-task");
    draggedTask.remove();
    column.children[1].appendChild(draggedTask);
  });
});
```

At this point, the core UX is already there, and you can drag tasks between columns.

## Inserting at a particular location

Currently, the dropped task is always inserted at the end of the column regardless of where we dropped it. We now improve the dropping logic so it's inserted at the drop location instead. But how should we map the drop location to an insertion index in the target column? This is a judgment call, but we will use the following heuristic (feel free to pick your own): the item will be inserted at the index of the item that the cursor is hovering over. If the cursor is above the first item or below the last item, it will be inserted at the beginning or end of the column, respectively. If the cursor is between two items, it will be inserted at the index of the item below the cursor.

In order to make the drop location obvious, we will add a [visual indicator](/en-US/docs/Web/API/HTML_Drag_and_Drop_API/Drag_operations#custom_drop_feedback) for the drop location. This can be done by inserting a placeholder element at the drop location, which will be replaced by the dragged task when the drop occurs. First define the creator function for the placeholder:

```css live-sample___kanban
.placeholder {
  border: 1px solid #cccccc;
  border-radius: 3px;
}
```

```js live-sample___kanban
function makePlaceholder(draggedTask) {
  const placeholder = document.createElement("li");
  placeholder.classList.add("placeholder");
  placeholder.style.height = `${draggedTask.offsetHeight}px`;
  return placeholder;
}
```

This indicator will be moved around on {{domxref("HTMLElement/dragover_event", "dragover")}}. This is the most complex of all, so we've extracted it into a separate function. The previous code for the `dragover` event has been moved to this function. We first get the elements we need, safely aborting if `draggedTask` is `null` (which happens if the drag is not a task):

```js live-sample___kanban
function movePlaceholder(event) {
  if (event.dataTransfer.types.includes("task")) {
    event.preventDefault();
  }
  const draggedTask = document.getElementById("dragged-task");
  if (!draggedTask) return;
  const column = event.currentTarget;
  const tasks = column.children[1];
  const existingPlaceholder = column.querySelector(".placeholder");
```

If there's already a placeholder, and the cursor is still inside it, we don't need to change anything. Note that we don't remove the existing placeholder at this point, because that would change the page's layout and potentially cause a flicker. We only change the layout once we've fully determined the new position.

```js live-sample___kanban
if (existingPlaceholder) {
  const placeholderRect = existingPlaceholder.getBoundingClientRect();
  if (
    placeholderRect.top <= event.clientY &&
    placeholderRect.bottom >= event.clientY
  ) {
    return;
  }
}
```

Otherwise, we search for the first task that is not fully above the cursor. This task may either be the very first task if the cursor is above all items, the task that's containing the cursor, or the task below the cursor if the cursor is between two items. Our placeholder should be placed at the location of this task. Note that we only compare the Y coordinates: even if the cursor is in left or right margins, it should still be considered as being over the task. After finding the appropriate insertion point, we decide a few things:

- If the insertion point is already the placeholder, then we don't need to change anything. Note that this is not entirely the same as the condition above: this one might be true if the cursor is immediately above the placeholder between two items.
- If, when the drop happens, the dragged item will be placed exactly where it started, we shouldn't indicate a placeholder at all. This happens when the placeholder is to be placed immediately next to the dragged task, so we check if either we are inserting immediately before `draggedTask` (`task === draggedTask`) or after it (`task.previousElementSibling === draggedTask`). In this case, we still remove the existing placeholder, if there's any.
- Finally, we insert the placeholder at the determined position.

```js live-sample___kanban
for (const task of tasks.children) {
  if (task.getBoundingClientRect().bottom >= event.clientY) {
    if (task === existingPlaceholder) return;
    existingPlaceholder?.remove();
    if (task === draggedTask || task.previousElementSibling === draggedTask)
      return;
    tasks.insertBefore(
      existingPlaceholder ?? makePlaceholder(draggedTask),
      task,
    );
    return;
  }
}
```

If the above loop did not find a suitable task, it means all existing tasks are above the cursor, and we need to insert the placeholder at the end. Again, we don't add the placeholder if the dragged task is already the last item.

```js live-sample___kanban
  existingPlaceholder?.remove();
  if (tasks.lastElementChild === draggedTask) return;
  tasks.append(existingPlaceholder ?? makePlaceholder(draggedTask));
}
```

Finally, the placeholder is removed on {{domxref("HTMLElement/dragleave_event", "dragleave")}} or {{domxref("HTMLElement/drop_event", "drop")}}. Note that the `dragleave` is fired when the cursor leaves the column to enter its child element. Because we only want to remove the placeholder when the cursor leaves the column entirely, we need to check if the {{domxref("MouseEvent/relatedTarget", "relatedTarget")}}, which is the element we are moving into, is a child of the column.

The `drop` handler modifies what we implemented in [Moving elements](#moving_elements). Instead of appending the task at the end, we need to insert it in the middle, and we leverage the placeholder's position to do that.

```js live-sample___kanban
columns.forEach((column) => {
  column.addEventListener("dragover", movePlaceholder);
  column.addEventListener("dragleave", (event) => {
    // If we are moving into a child element,
    // we aren't actually leaving the column
    if (column.contains(event.relatedTarget)) return;
    const placeholder = column.querySelector(".placeholder");
    placeholder?.remove();
  });
  column.addEventListener("drop", (event) => {
    event.preventDefault();

    const draggedTask = document.getElementById("dragged-task");
    const placeholder = column.querySelector(".placeholder");
    if (!placeholder) return;
    draggedTask.remove();
    column.children[1].insertBefore(draggedTask, placeholder);
    placeholder.remove();
  });
});
```

## Graying out the original task

During the course of the drag, it may appear that the original task is still in its place. To give a visual indication that the task is being moved, we can apply a "grayed out" effect. It's also common to just remove it from the DOM, but that might mess with all the other DOM measurement logic we've set up, so we can use CSS to achieve the desired effect. This is straightforward because we already have a stable ID for the dragged task.

```css live-sample___kanban
#dragged-task {
  opacity: 0.2;
}
```

## Result

{{EmbedLiveSample("kanban", "", 400)}}

## See also

- [HTML Drag and Drop API](/en-US/docs/Web/API/HTML_Drag_and_Drop_API)
- [Drag Operations](/en-US/docs/Web/API/HTML_Drag_and_Drop_API/Drag_operations)
