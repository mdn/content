---
title: "Document: ariaNotify() method"
short-title: ariaNotify()
slug: Web/API/Document/ariaNotify
page-type: web-api-instance-method
status:
  - experimental
  - non-standard
browser-compat: api.Document.ariaNotify
---

{{ApiRef("DOM")}}{{SeeCompatTable}}{{non-standard_header}}

The **`ariaNotify()`** method of the {{domxref("Document")}} interface specifies that a given string of text should be announced by a {{glossary("screen reader")}} if available and activated.

## Syntax

```js-nolint
ariaNotify(announcement)
ariaNotify(announcement, options)
```

### Parameters

- `announcement`
  - : A string specifying the text to be announced.
- `options` {{optional_inline}}
  - : An options object containing the following properties:
    - `priority`
      - : An enumerated value specifying the priority of the announcement. Possible values are:
        - `normal`
          - : The announcement has normal priority. It will be spoken after any announcement that a screen reader is currently making.
        - `high`
          - : The announcement has high priority. It will be spoken immediately, interrupting any announcement that a screen reader is currently making.

### Return value

None ({{jsxref("undefined")}}).

## Description

The **`ariaNotify()`** method can be used to programmatically trigger a screen reader announcement. This method provides similar functionality to [ARIA live regions](/en-US/docs/Web/Accessibility/ARIA/Guides/Live_regions), with some advantages:

- Live regions can only make announcements following changes to the DOM, whereas an `ariaNotify()` announcement can be made at any time.
- Live region announcements involve reading out the updated content of the changed DOM node, whereas `ariaNotify()` announcement content can be defined independently of DOM content.

Developers often work around the limitations of live regions using hidden DOM nodes with live regions set on them, which have their contents updated with the content to be announced. This is inefficient and error-prone, and `ariaNotify()` provides a way to avoid such issues.

Some screen readers will read out multiple `ariaNotify()` announcements in order, but this cannot be guaranteed across all screen readers and platforms. Normally, only the most recent announcement is spoken. It is more reliable to combine multiple announcements into one.

For example, the following calls:

```js
document.ariaNotify("Hello there.");
document.ariaNotify("The time is now 8 o'clock.");
```

would be better combined:

```js
document.ariaNotify("Hello there. The time is now 8 o'clock.");
```

`ariaNotify()` announcements do not require {{glossary("transient activation")}}; you should take care not to spam screen reader users with too many notifications, as this could create a bad user experience.

### Announcement priorities

An `ariaNotify()` announcement with `priority: high` set is announced before an `ariaNotify()` announcement with `priority: normal` set.

`ariaNotify()` announcements are roughly equivalent to ARIA live region announcements as follows:

- `ariaNotify()` `priority: high`: `aria-live="assertive"`.
- `ariaNotify()` `priority: normal`: `aria-live="polite"`.

However, `aria-live` announcements will take priority over `ariaNotify()` announcements.

### Language selection

Screen readers choose an appropriate voice with which to read `ariaNotify()` announcements (in terms of accent, pronunciation, etc.) based on the language specified in the {{htmlelement("html")}} element's [`lang`](/en-US/docs/Web/HTML/Reference/Global_attributes/lang) attribute, or the user agent's default language if no `lang` attribute is set.

### Permissions policy integration

Usage of `ariaNotify()` in a document or {{htmlelement("iframe")}} can be controlled by an {{httpheader("Permissions-Policy/aria-notify", "aria-notify")}} [Permission Policy](/en-US/docs/Web/HTTP/Guides/Permissions_Policy).

Specifically, where a defined policy blocks usage, any announcements created using `ariaNotify()` silently fail (they will not be sent).

## Examples

### Basic `ariaNotify()` usage

This example includes a {{htmlelement("button")}} that fires a screen reader announcement when clicked.

```html live-sample___basic-arianotify
<button>Press</button>
```

```css hidden live-sample___basic-arianotify
html,
body {
  height: 100%;
}

body {
  display: flex;
  justify-content: center;
  align-items: center;
}
```

```js live-sample___basic-arianotify
document.querySelector("button").addEventListener("click", () => {
  document.ariaNotify("Hi there, I'm Ed Winchester.");
});
```

#### Result

The output is as follows:

{{EmbedLiveSample("basic-arianotify", "100%", 60, , , , "aria-notify")}}

Try activating a screen reader and then pressing the button. You should hear "Hi there, I'm Ed Winchester." spoken by the screen reader.

### Accessible shopping list example

This example is a shopping list that allows you to add and remove items, and keeps track of the total cost of all items. When an item is added or removed, screen readers will read out an announcement to say what item was added/removed, and what the updated total is.

#### HTML

Our HTML features a {{htmlelement("form")}} containing two {{htmlelement("input")}} elements — one `text` input to enter item names into, and one `number` input to enter prices into. Both inputs are [`required`](/en-US/docs/Web/HTML/Reference/Attributes/required), and the `number` input has a [`step`](/en-US/docs/Web/HTML/Reference/Attributes/step) value of `0.01` to stop non-price values (like large decimals) being entered.

Below the form we have an [unordered list](/en-US/docs/Web/HTML/Reference/Elements/ul) to render added items in, and a {{htmlelement("p")}} element to display the total cost.

```html live-sample___shopping-list
<h1><code>ariaNotify</code> demo: shopping list</h1>

<form>
  <div>
    <label for="item">Enter item name</label>
    <input type="text" name="item" id="item" required />
  </div>
  <div>
    <label for="price">Enter item price</label>
    <input type="number" name="price" id="price" step="0.01" required />
  </div>
  <div>
    <button>Submit</button>
  </div>
</form>

<hr />

<ul></ul>

<p>Total: £0.00</p>
```

```css hidden live-sample___shopping-list
html {
  box-sizing: border-box;
  font: 1.2em / 1.5 system-ui;
}

body {
  width: 600px;
  margin: 0 auto;
}

form {
  padding: 0 50px;
}

div {
  display: flex;
  margin-bottom: 20px;
}

label {
  flex: 2;
}

input {
  flex: 4;
  padding: 5px;
}

form button {
  padding: 5px 10px;
  font-size: 1em;
  border-radius: 10px;
  border: 1px solid gray;
}

li {
  margin-bottom: 10px;
}

li button {
  font-size: 0.6rem;
  margin-left: 10px;
}
```

#### JavaScript

Our script starts with several constant definitions to store references to the `<form>`, our two `<input>` elements, and our `<ul>` and `<p>` elements. We also include a `total` variable to store the total price of all items.

```js live-sample___shopping-list
const form = document.querySelector("form");
const item = document.querySelector("input[type='text']");
const price = document.querySelector("input[type='number']");
const priceList = document.querySelector("ul");
const totalOutput = document.querySelector("p");

let total = 0;
```

In our next code block, we define a function called `updateTotal()` that has one job — it updates the price displayed in the `<p>` element to equal the current value of the `total` variable:

```js live-sample___shopping-list
function updateTotal() {
  totalOutput.textContent = `Total: £${Number(total).toFixed(2)}`;
}
```

Next, we define a function called `addItemToList()`. Inside the function body we first create an {{htmlelement("li")}} element to store a newly-added item. We store the item name and price in [`data-*`](/en-US/docs/Web/HTML/Reference/Global_attributes/data-*) attributes on the element, and make its text content equal to a string containing the item and price. We also create a {{htmlelement("button")}} element with text of "Remove &lt;item-name>", then append the list item to the unordered list, and the button to the list item.

The second major part of the function body is a `click` event listener definition on the button. When the button is clicked, we first grab a reference to the button's parent node — the list item it is inside. We then subtract the number contained in the list item's `data-price` attribute from the `total` variable, call the `updateTotal()` function to update the shown total price, then call `ariaNotify()` to announce the item that was removed, and what the new total is. Finally, we remove the list item from the DOM.

```js live-sample___shopping-list
function addItemToList(item, price) {
  const listItem = document.createElement("li");
  listItem.setAttribute("data-item", item);
  listItem.setAttribute("data-price", price);
  listItem.textContent = `${item}: £${Number(price).toFixed(2)}`;
  const btn = document.createElement("button");
  btn.textContent = `Remove ${item}`;

  priceList.appendChild(listItem);
  listItem.appendChild(btn);

  btn.addEventListener("click", (e) => {
    const listItem = e.target.parentNode;
    total -= Number(listItem.getAttribute("data-price"));
    updateTotal();
    document.ariaNotify(
      `${listItem.getAttribute(
        "data-item",
      )} removed. Total is now £${total.toFixed(2)}.`,
      {
        priority: "high",
      },
    );
    listItem.remove();
  });
}
```

Our final code block add a `submit` event listener to the `<form>`. Inside the handler function, we first call {{domxref("Event.preventDefault", "preventDefault()")}} on the event object to stop the form submitting. We then call `addItemToList()` to display the new item and its price in the list, add the price to the `total` variable, call the `updateTotal()` to update the displayed total, then call `ariaNotify()` to announce the item that was added, and what the new total is. Finally, we clear out the current input field values ready for the next item to be added.

```js live-sample___shopping-list
form.addEventListener("submit", (e) => {
  e.preventDefault();

  addItemToList(item.value, price.value);
  total += Number(price.value);
  updateTotal();

  document.ariaNotify(
    `Item ${item.value}, price £${
      price.value
    }, added to list. Total is now £${total.toFixed(2)}.`,
    {
      priority: "high",
    },
  );

  item.value = "";
  price.value = "";
});
```

#### Result

The output is as follows:

{{EmbedLiveSample("shopping-list", "100%", 500, , , , "aria-notify")}}

Try activating a screen reader and then adding and removing some items. You should hear them announced by the screen reader.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("Element.ariaNotify()")}}
- [ARIA live regions](/en-US/docs/Web/Accessibility/ARIA/Guides/Live_regions)
