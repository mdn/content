---
title: "<dialog>: The Dialog element"
slug: Web/HTML/Element/dialog
page-type: html-element
browser-compat: html.elements.dialog
---

{{HTMLSidebar}}

The **`<dialog>`** [HTML](/en-US/docs/Web/HTML) element represents a modal or non-modal dialog box or other interactive component, such as a dismissible alert, inspector, or subwindow.

The HTML `<dialog>` element is used to create both modal and non-modal dialog boxes. Modal dialog boxes interrupt interaction with the rest of the page being inert, while non-modal dialog boxes allow interaction with the rest of the page.

JavaScript should be used to display the `<dialog>` element. Use the {{domxref("HTMLDialogElement.showModal()", ".showModal()")}} method to display a modal dialog and the {{domxref("HTMLDialogElement.show()", ".show()")}} method to display a non-modal dialog. The dialog box can be closed using the {{domxref("HTMLDialogElement.close()", ".close()")}} method or using the [`dialog`](/en-US/docs/Web/HTML/Element/form#method) method when submitting a `<form>` that is nested within the `<dialog>` element. Modal dialogs can also be closed by pressing the <kbd>Esc</kbd> key.

## Attributes

This element includes the [global attributes](/en-US/docs/Web/HTML/Global_attributes).

> [!WARNING]
> The `tabindex` attribute must not be used on the `<dialog>` element. See [usage notes](#usage_notes).

- `open`

  - : Indicates that the dialog box is active and is available for interaction. If the `open` attribute is not set, the dialog box will not be visible to the user.
    It is recommended to use the `.show()` or `.showModal()` method to render dialogs, rather than the `open` attribute. If a `<dialog>` is opened using the `open` attribute, it is non-modal.

    > [!NOTE]
    > While you can toggle between the open and closed states of non-modal dialog boxes by toggling the presence of the `open` attribute, this approach is not recommended.

## Usage notes

- HTML {{HTMLElement("form")}} elements can be used to close a dialog box if they have the attribute `method="dialog"` or if the button used to submit the form has [`formmethod="dialog"`](/en-US/docs/Web/HTML/Element/input#formmethod) set. When a `<form>` within a `<dialog>` is submitted via the `dialog` method, the dialog box closes, the states of the form controls are saved but not submitted, and the {{domxref("HTMLDialogElement.returnValue", "returnValue")}} property gets set to the value of the button that was activated.
- The CSS {{cssxref('::backdrop')}} pseudo-element can be used to style the backdrop of a modal dialog, which is displayed behind the `<dialog>` element when the dialog is displayed using the {{domxref("HTMLDialogElement.showModal()")}} method. For example, this pseudo-element could be used to blur, darken, or otherwise obfuscate the inert content behind the modal dialog.
- The [`autofocus`](/en-US/docs/Web/HTML/Global_attributes/autofocus) attribute should be added to the element the user is expected to interact with immediately upon opening a modal dialog. If no other element involves more immediate interaction, it is recommended to add `autofocus` to the close button inside the dialog, or the dialog itself if the user is expected to click/activate it to dismiss.
- Do not add the `tabindex` property to the `<dialog>` element as it is not interactive and does not receive focus. The dialog's contents, including the close button contained in the dialog, can receive focus and be interactive.

## Accessibility

When implementing a dialog, it is important to consider the most appropriate place to set user focus. When using {{domxref("HTMLDialogElement.showModal()")}} to open a `<dialog>`, focus is set on the first nested focusable element. Explicitly indicating the initial focus placement by using the [`autofocus`](/en-US/docs/Web/HTML/Global_attributes/autofocus) attribute will help ensure initial focus is set on the element deemed the best initial focus placement for any particular dialog. When in doubt, as it may not always be known where initial focus could be set within a dialog, particularly for instances where a dialog's content is dynamically rendered when invoked, the `<dialog>` element itself may provide the best initial focus placement.

Ensure a mechanism is provided to allow users to close the dialog. The most robust way to ensure that all users can close the dialog is to include an explicit button to do so, such as a confirmation, cancellation, or close button.

By default, a dialog invoked by the `showModal()` method can be dismissed by pressing the <kbd>Esc</kbd> key. A non-modal dialog does not dismiss via the <kbd>Esc</kbd> key by default, and depending on what the non-modal dialog represents, it may not be desired for this behavior. Keyboard users expect the <kbd>Esc</kbd> key to close modal dialogs; ensure that this behavior is implemented and maintained. If multiple modal dialogs are open, pressing the <kbd>Esc</kbd> key should close only the last shown dialog. When using `<dialog>`, this behavior is provided by the browser.

While dialogs can be created using other elements, the native `<dialog>` element provides usability and accessibility features that must be replicated if you use other elements for a similar purpose. If you're creating a custom dialog implementation, ensure that all expected default behaviors are supported and proper labeling recommendations are followed.

The `<dialog>` element is exposed by browsers in a manner similar to custom dialogs that use the ARIA [role="dialog"](/en-US/docs/Web/Accessibility/ARIA/Roles/dialog_role) attribute. `<dialog>` elements invoked by the `showModal()` method implicitly have [aria-modal="true"](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-modal), whereas `<dialog>` elements invoked by the `show()` method or displayed using the `open` attribute or by changing the default `display` of a `<dialog>` are exposed as `[aria-modal="false"]`. When implementing modal dialogs, everything other than the `<dialog>` and its contents should be rendered inert using the [`inert`](/en-US/docs/Web/HTML/Global_attributes/inert) attribute. When using `<dialog>` along with the `HTMLDialogElement.showModal()` method, this behavior is provided by the browser.

## Examples

### HTML-only dialog

This example demonstrates the creation of a non-modal dialog by using only HTML. Because of the boolean `open` attribute in the `<dialog>` element, the dialog appears open when the page loads. The dialog can be closed by clicking the "OK" button because the `method` attribute in the `<form>` element is set to `"dialog"`. In this case, no JavaScript is needed to close the form.

```html
<dialog open>
  <p>Greetings, one and all!</p>
  <form method="dialog">
    <button>OK</button>
  </form>
</dialog>
```

#### Result

{{EmbedLiveSample("HTML-only_dialog", "100%", 200)}}

> [!NOTE]
> Reload the page to reset the output.

This dialog is initially open because of the presence of the `open` attribute. Dialogs that are displayed using the `open` attribute are non-modal. After clicking "OK", the dialog gets dismissed, leaving the Result frame empty. When the dialog is dismissed, there is no method provided to reopen it. For this reason, the preferred method to display non-modal dialogs is by using the {{domxref("HTMLDialogElement.show()")}} method. It is possible to toggle the display of the dialog by adding or removing the boolean `open` attribute, but it is not the recommended practice.

### Creating a modal dialog

This example demonstrates a modal dialog with a [gradient](/en-US/docs/Web/CSS/gradient) backdrop. The `.showModal()` method opens the modal dialog when the "Show the dialog" button is activated. The dialog can be closed by pressing the <kbd>Esc</kbd> key or via the `close()` method when the "Close" button within the dialog is activated.

When a dialog opens, the browser, by default, gives focus to the first element that can be focused within the dialog. In this example, the [`autofocus`](/en-US/docs/Web/HTML/Global_attributes/autofocus) attribute is applied to the "Close" button, giving it focus when the dialog opens, as this is the element we expect the user will interact with immediately after the dialog opens.

#### HTML

```html
<dialog>
  <button autofocus>Close</button>
  <p>This modal dialog has a groovy backdrop!</p>
</dialog>
<button>Show the dialog</button>
```

#### CSS

We can style the backdrop of the dialog by using the {{cssxref('::backdrop')}} pseudo-element.

```css
::backdrop {
  background-image: linear-gradient(
    45deg,
    magenta,
    rebeccapurple,
    dodgerblue,
    green
  );
  opacity: 0.75;
}
```

#### JavaScript

The dialog is opened modally using the `.showModal()` method and closed using the `.close()` or `.requestClose()` methods.

```js
const dialog = document.querySelector("dialog");
const showButton = document.querySelector("dialog + button");
const closeButton = document.querySelector("dialog button");

// "Show the dialog" button opens the dialog modally
showButton.addEventListener("click", () => {
  dialog.showModal();
});

// "Close" button closes the dialog
closeButton.addEventListener("click", () => {
  dialog.close();
});
```

#### Result

{{EmbedLiveSample("Creating_a_modal_dialog", "100%", 200)}}

When the modal dialog is displayed, it appears above any other dialogs that might be present. Everything outside the modal dialog is inert and interactions outside the dialog are blocked. Notice that when the dialog is open, with the exception of the dialog itself, interaction with the document is not possible; the "Show the dialog" button is mostly obfuscated by the almost opaque backdrop of the dialog and is inert.

### Handling the return value from the dialog

This example demonstrates the [`returnValue`](/en-US/docs/Web/API/HTMLDialogElement/returnValue) of the `<dialog>` element and how to close a modal dialog by using a form. By default, the `returnValue` is the empty string or the value of the button that submits the form within the `<dialog>` element, if there is one.

This example opens a modal dialog when the "Show the dialog" button is activated. The dialog contains a form with a {{HTMLElement("select")}} and two {{HTMLElement("button")}} elements, which default to `type="submit"`. An event listener updates the value of the "Confirm" button when the select option changes. If the "Confirm" button is activated to close the dialog, the current value of the button is the return value. If the dialog is closed by pressing the "Cancel" button, the `returnValue` is `cancel`.

When the dialog is closed, the return value is displayed under the "Show the dialog" button. If the dialog is closed by pressing the <kbd>Esc</kbd> key, the `returnValue` is not updated, and the `close` event doesn't occur, so the text in the {{HTMLElement("output")}} is not updated.

#### HTML

```html
<!-- A modal dialog containing a form -->
<dialog id="favDialog">
  <form>
    <p>
      <label>
        Favorite animal:
        <select>
          <option value="default">Choose…</option>
          <option>Brine shrimp</option>
          <option>Red panda</option>
          <option>Spider monkey</option>
        </select>
      </label>
    </p>
    <div>
      <button value="cancel" formmethod="dialog">Cancel</button>
      <button id="confirmBtn" value="default">Confirm</button>
    </div>
  </form>
</dialog>
<p>
  <button id="showDialog">Show the dialog</button>
</p>
<output></output>
```

#### JavaScript

```js
const showButton = document.getElementById("showDialog");
const favDialog = document.getElementById("favDialog");
const outputBox = document.querySelector("output");
const selectEl = favDialog.querySelector("select");
const confirmBtn = favDialog.querySelector("#confirmBtn");

// "Show the dialog" button opens the <dialog> modally
showButton.addEventListener("click", () => {
  favDialog.showModal();
});

// "Cancel" button closes the dialog without submitting because of [formmethod="dialog"], triggering a close event.
favDialog.addEventListener("close", (e) => {
  outputBox.value =
    favDialog.returnValue === "default"
      ? "No return value."
      : `ReturnValue: ${favDialog.returnValue}.`; // Have to check for "default" rather than empty string
});

// Prevent the "confirm" button from the default behavior of submitting the form, and close the dialog with the `close()` method, which triggers the "close" event.
confirmBtn.addEventListener("click", (event) => {
  event.preventDefault(); // We don't want to submit this fake form
  favDialog.close(selectEl.value); // Have to send the select box value here.
});
```

#### Result

{{EmbedLiveSample("Handling the return value from the dialog", "100%", 300)}}

The above examples demonstrate the following three methods of closing modal dialogs:

- By submitting the form within the dialog form using the `dialog` method (as seen in the [HTML-only example](#html-only_dialog)).
- By pressing the <kbd>Esc</kbd> key.
- By calling the {{domxref("HTMLDialogElement.close()")}} method (as seen in the [modal example](#creating_a_modal_dialog)).
  In this example, the "Cancel" button closes the dialog via the `dialog` form method and the "Confirm" button closes the dialog via the {{domxref("HTMLDialogElement.close()")}} method.

The "Cancel" button includes the [`formmethod="dialog"`](/en-US/docs/Web/HTML/Element/input/submit#formmethod) attribute, which overrides the {{HTMLElement("form")}}'s default {{HTTPMethod("GET")}} method. When a form's method is [`dialog`](#usage_notes), the state of the form is saved but not submitted, and the dialog gets closed.

Without an `action`, submitting the form via the default {{HTTPMethod("GET")}} method causes a page to reload. We use JavaScript to prevent the submission and close the dialog with the {{domxref("event.preventDefault()")}} and {{domxref("HTMLDialogElement.close()")}} methods, respectively.

It is important to provide a closing mechanism within every `dialog` element. The <kbd>Esc</kbd> key does not close non-modal dialogs by default, nor can one assume that a user will even have access to a physical keyboard (e.g., someone using a touch screen device without access to a keyboard).

### Closing a dialog with a required form input

When a form inside a dialog has a required input, the user agent will only let you close the dialog once you provide a value for the required input. To close such dialog, either use the [`formnovalidate`](/en-US/docs/Web/HTML/Element/input#formnovalidate) attribute on the close button or call the `close()` method on the dialog object when the close button is clicked.

```html
<dialog id="dialog">
  <form method="dialog">
    <p>
      <label>
        Favorite animal:
        <input type="text" required />
      </label>
    </p>
    <div>
      <input type="submit" id="normal-close" value="Normal close" />
      <input
        type="submit"
        id="novalidate-close"
        value="Novalidate close"
        formnovalidate />
      <input type="submit" id="js-close" value="JS close" />
    </div>
  </form>
</dialog>
<p>
  <button id="show-dialog">Show the dialog</button>
</p>
<output></output>
```

```css hidden
[type="submit"] {
  margin-right: 1rem;
}
```

#### JavaScript

```js
const showBtn = document.getElementById("show-dialog");
const dialog = document.getElementById("dialog");
const jsCloseBtn = dialog.querySelector("#js-close");

showBtn.addEventListener("click", () => {
  dialog.showModal();
});

jsCloseBtn.addEventListener("click", (e) => {
  e.preventDefault();
  dialog.close();
});
```

#### Result

{{EmbedLiveSample("Closing a dialog with a required form input", "100%", 300)}}

From the output, we see it is impossible to close the dialog using the _Normal close_ button. But the dialog can be closed if we bypass the form validation using the `formnovalidate` attribute on the _Cancel_ button. Programmatically, `dialog.close()` will also close such dialog.

### Animating dialogs

`<dialog>`s are set to [`display: none;`](/en-US/docs/Web/CSS/display) when hidden and `display: block;` when shown, as well as being removed from / added to the {{glossary("top layer")}} and the [accessibility tree](/en-US/docs/Web/Performance/How_browsers_work#building_the_accessibility_tree). Therefore, for `<dialog>` elements to be animated the {{cssxref("display")}} property needs to be animatable. [Supporting browsers](/en-US/docs/Web/CSS/display#browser_compatibility) animate `display` with a variation on the [discrete animation type](/en-US/docs/Web/CSS/CSS_animated_properties#discrete). Specifically, the browser will flip between `none` and another value of `display` so that the animated content is shown for the entire animation duration.

So for example:

- When animating `display` from `none` to `block` (or another visible `display` value), the value will flip to `block` at `0%` of the animation duration so it is visible throughout.
- When animating `display` from `block` (or another visible `display` value) to `none`, the value will flip to `none` at `100%` of the animation duration so it is visible throughout.

> [!NOTE]
> When animating using [CSS transitions](/en-US/docs/Web/CSS/CSS_transitions), [`transition-behavior: allow-discrete`](/en-US/docs/Web/CSS/transition-behavior) needs to be set to enable the above behavior. This behavior is available by default when animating with [CSS animations](/en-US/docs/Web/CSS/CSS_animations); an equivalent step is not required.

#### Transitioning dialog elements

When animating `<dialog>`s with CSS transitions, the following features are required:

- [`@starting-style`](/en-US/docs/Web/CSS/@starting-style) at-rule
  - : Provides a set of starting values for properties set on the `<dialog>` that you want to transition from every time it is opened. This is needed to avoid unexpected behavior. By default, CSS transitions only occur when a property changes from one value to another on a visible element; they are not triggered on elements' first style updates, or when the `display` type changes from `none` to another type.
- [`display`](/en-US/docs/Web/CSS/display) property
  - : Add `display` to the transitions list so that the `<dialog>` will remain as `display: block` (or another visible `display` value set on the dialog's open state) for the duration of the transition, ensuring the other transitions are visible.
- [`overlay`](/en-US/docs/Web/CSS/overlay) property
  - : Include `overlay` in the transitions list to ensure the removal of the `<dialog>` from the top layer is deferred until the transition completes, again ensuring the transition is visible.
- {{cssxref("transition-behavior")}} property
  - : Set `transition-behavior: allow-discrete` on the `display` and `overlay` transitions (or on the {{cssxref("transition")}} shorthand) to enable discrete transitions on these two properties that are not by default animatable.

Here is a quick example to show what this might look like.

##### HTML

The HTML contains a `<dialog>` element, plus a button to show the dialog. Additionally, the `<dialog>` element contains another button to close itself.

```html
<dialog id="dialog">
  Content here
  <button class="close">close</button>
</dialog>

<button class="show">Show Modal</button>
```

##### CSS

In the CSS, we include a `@starting-style` block that defines the transition starting styles for the `opacity` and `transform` properties, transition end styles on the `dialog:open` state, and default styles on the default `dialog` state to transition back to once the `<dialog>` has appeared. Note how the `<dialog>`'s `transition` list includes not only these properties, but also the `display` and `overlay` properties, each with `allow-discrete` set on them.

We also set a starting style value for the {{cssxref("background-color")}} property on the [`::backdrop`](/en-US/docs/Web/CSS/::backdrop) that appears behind the `<dialog>` when it opens, to provide a nice darkening animation. The `dialog:open::backdrop` selector selects only the backdrops of `<dialog>` elements when the dialog is open.

```css
/* Open state of the dialog  */
dialog:open {
  opacity: 1;
  transform: scaleY(1);
}

/* Closed state of the dialog   */
dialog {
  opacity: 0;
  transform: scaleY(0);
  transition:
    opacity 0.7s ease-out,
    transform 0.7s ease-out,
    overlay 0.7s ease-out allow-discrete,
    display 0.7s ease-out allow-discrete;
  /* Equivalent to
  transition: all 0.7s allow-discrete; */
}

/* Before open state  */
/* Needs to be after the previous dialog:open rule to take effect,
    as the specificity is the same */
@starting-style {
  dialog:open {
    opacity: 0;
    transform: scaleY(0);
  }
}

/* Transition the :backdrop when the dialog modal is promoted to the top layer */
dialog::backdrop {
  background-color: rgb(0 0 0 / 0%);
  transition:
    display 0.7s allow-discrete,
    overlay 0.7s allow-discrete,
    background-color 0.7s;
  /* Equivalent to
  transition: all 0.7s allow-discrete; */
}

dialog:open::backdrop {
  background-color: rgb(0 0 0 / 25%);
}

/* This starting-style rule cannot be nested inside the above selector
because the nesting selector cannot represent pseudo-elements. */

@starting-style {
  dialog:open::backdrop {
    background-color: rgb(0 0 0 / 0%);
  }
}
```

> [!NOTE]
> In browsers that don't support the {{cssxref(":open")}} pseudo-class, you can use the attribute selector `dialog[open]` to style the `<dialog>` element when it is in the open state.

##### JavaScript

The JavaScript adds event handlers to the show and close buttons causing them to show and close the `<dialog>` when they are clicked:

```js
const dialogElem = document.getElementById("dialog");
const showBtn = document.querySelector(".show");
const closeBtn = document.querySelector(".close");

showBtn.addEventListener("click", () => {
  dialogElem.showModal();
});

closeBtn.addEventListener("click", () => {
  dialogElem.close();
});
```

##### Result

The code renders as follows:

{{ EmbedLiveSample("Transitioning dialog elements", "100%", "200") }}

> [!NOTE]
> Because `<dialog>`s change from `display: none` to `display: block` each time they are shown, the `<dialog>` transitions from its `@starting-style` styles to its `dialog:open` styles every time the entry transition occurs. When the `<dialog>` closes, it transitions from its `dialog:open` state to the default `dialog` state.
>
> It is possible for the style transition on entry and exit to be different in such cases. See our [Demonstration of when starting styles are used](/en-US/docs/Web/CSS/@starting-style#demonstration_of_when_starting_styles_are_used) example for a proof of this.

#### dialog keyframe animations

When animating a `<dialog>` with CSS keyframe animations, there are some differences to note from transitions:

- You don't provide a `@starting-style`.
- You include the `display` value in a keyframe; this will be the `display` value for the entirety of the animation, or until another non-`none` display value is encountered.
- You don't need to explicitly enable discrete animations; there is no equivalent to `allow-discrete` inside keyframes.
- You don't need to set `overlay` inside keyframes either; the `display` animation handles the animation of the `<dialog>` from shown to hidden.

Let's have a look at an example so you can see what this looks like.

##### HTML

First, the HTML contains a `<dialog>` element, plus a button to show the dialog. Additionally, the `<dialog>` element contains another button to close itself.

```html
<dialog id="dialog">
  Content here
  <button class="close">close</button>
</dialog>

<button class="show">Show Modal</button>
```

##### CSS

The CSS defines keyframes to animate between the closed and shown states of the `<dialog>`, plus the fade-in animation for the `<dialog>`'s backdrop. The `<dialog>` animations include animating `display` to make sure the actual visible animation effects remain visible for the whole duration. Note that it wasn't possible to animate the backdrop fade out — the backdrop is immediately removed from the DOM when the `<dialog>` is closed, so there is nothing to animate.

```css
dialog {
  animation: fade-out 0.7s ease-out;
}

dialog:open {
  animation: fade-in 0.7s ease-out;
}

dialog:open::backdrop {
  animation: backdrop-fade-in 0.7s ease-out forwards;
}

/* Animation keyframes */

@keyframes fade-in {
  0% {
    opacity: 0;
    transform: scaleY(0);
    display: none;
  }

  100% {
    opacity: 1;
    transform: scaleY(1);
    display: block;
  }
}

@keyframes fade-out {
  0% {
    opacity: 1;
    transform: scaleY(1);
    display: block;
  }

  100% {
    opacity: 0;
    transform: scaleY(0);
    display: none;
  }
}

@keyframes backdrop-fade-in {
  0% {
    background-color: rgb(0 0 0 / 0%);
  }

  100% {
    background-color: rgb(0 0 0 / 25%);
  }
}

body,
button {
  font-family: system-ui;
}
```

##### JavaScript

Finally, the JavaScript adds event handlers to the buttons to enable showing and closing the `<dialog>`:

```js
const dialogElem = document.getElementById("dialog");
const showBtn = document.querySelector(".show");
const closeBtn = document.querySelector(".close");

showBtn.addEventListener("click", () => {
  dialogElem.showModal();
});

closeBtn.addEventListener("click", () => {
  dialogElem.close();
});
```

##### Result

The code renders as follows:

{{ EmbedLiveSample("dialog keyframe animations", "100%", "200") }}

## Technical summary

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a href="/en-US/docs/Web/HTML/Content_categories">Content categories</a>
      </th>
      <td>
        <a href="/en-US/docs/Web/HTML/Content_categories#flow_content">Flow content</a>,
        <a href="/en-US/docs/Web/HTML/Element/Heading_Elements#sectioning_roots">sectioning root</a>
      </td>
    </tr>
    <tr>
      <th scope="row">Permitted content</th>
      <td>
        <a href="/en-US/docs/Web/HTML/Content_categories#flow_content">Flow content</a>
      </td>
    </tr>
    <tr>
      <th scope="row">Tag omission</th>
      <td>None, both the starting and ending tag are mandatory.</td>
    </tr>
    <tr>
      <th scope="row">Permitted parents</th>
      <td>
        Any element that accepts
        <a href="/en-US/docs/Web/HTML/Content_categories#flow_content">flow content</a>
      </td>
    </tr>
    <tr>
      <th scope="row">Implicit ARIA role</th>
      <td>
        <a href="/en-US/docs/Web/Accessibility/ARIA/Roles/dialog_role">dialog</a>
      </td>
    </tr>
    <tr>
      <th scope="row">Permitted ARIA roles</th>
      <td><a href="/en-US/docs/Web/Accessibility/ARIA/Roles/alertdialog_role"><code>alertdialog</code></a></td>
    </tr>
    <tr>
      <th scope="row">DOM interface</th>
      <td>{{domxref("HTMLDialogElement")}}</td>
    </tr>
  </tbody>
</table>

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("HTMLDialogElement")}} interface
- {{domxref("HTMLDialogElement/close_event", "close")}} event of the `HTMLDialogElement` interface
- {{domxref("HTMLDialogElement/cancel_event", "cancel")}} event of the `HTMLDialogElement` interface
- {{domxref("HTMLDialogElement/open", "open")}} property of the `HTMLDialogElement` interface
- [`inert`](/en-US/docs/Web/HTML/Global_attributes/inert) global attribute for HTML elements
- {{CSSXref("::backdrop")}} CSS pseudo-element
- [Web forms](/en-US/docs/Learn_web_development/Extensions/Forms) in the Learn area
