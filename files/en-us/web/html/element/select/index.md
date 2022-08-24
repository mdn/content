---
title: '<select>: The HTML Select element'
slug: Web/HTML/Element/select
tags:
  - Element
  - Forms
  - HTML
  - HTML forms
  - Reference
  - Web
browser-compat: html.elements.select
---

{{HTMLRef}}

The **`<select>`** [HTML](/en-US/docs/Web/HTML) element represents a control that provides a menu of options.

{{EmbedInteractiveExample("pages/tabbed/select.html", "tabbed-standard")}}

The above example shows typical `<select>` usage. It is given an `id` attribute to enable it to be associated with a {{htmlelement("label")}} for accessibility purposes, as well as a `name` attribute to represent the name of the associated data point submitted to the server. Each menu option is defined by an {{htmlelement("option")}} element nested inside the `<select>`.

Each `<option>` element should have a {{htmlattrxref("value", "option")}} attribute containing the data value to submit to the server when that option is selected. If no `value` attribute is included, the value defaults to the text contained inside the element. You can include a {{htmlattrxref("selected", "option")}} attribute on an `<option>` element to make it selected by default when the page first loads.

The `<select>` element has some unique attributes you can use to control it, such as `multiple` to specify whether multiple options can be selected, and `size` to specify how many options should be shown at once. It also accepts most of the general form input attributes such as `required`, `disabled`, `autofocus`, etc.

You can further nest `<option>` elements inside {{htmlelement("optgroup")}} elements to create separate groups of options inside the dropdown.

For further examples, see [The native form widgets: Drop-down content](/en-US/docs/Learn/Forms/Other_form_controls#drop-down_controls).

## Attributes

This element includes the [global attributes](/en-US/docs/Web/HTML/Global_attributes).

- {{htmlattrdef("autocomplete")}}
  - : A string providing a hint for a {{Glossary("user agent", "user agent's")}} autocomplete feature. See [The HTML autocomplete attribute](/en-US/docs/Web/HTML/Attributes/autocomplete) for a complete list of values and details on how to use autocomplete.
- {{htmlattrdef("autofocus")}}
  - : This Boolean attribute lets you specify that a form control should have input focus when the page loads. Only one form element in a document can have the `autofocus` attribute.
- {{htmlattrdef("disabled")}}
  - : This Boolean attribute indicates that the user cannot interact with the control. If this attribute is not specified, the control inherits its setting from the containing element, for example {{htmlelement("fieldset")}}; if there is no containing element with the `disabled` attribute set, then the control is enabled.
- {{htmlattrdef("form")}}

  - : The {{HTMLElement("form")}} element to associate the `<select>` with (its _form owner_). The value of this attribute must be the {{htmlattrxref("id")}} of a `<form>` in the same document. (If this attribute is not set, the `<select>` is associated with its ancestor `<form>` element, if any.)

    This attribute lets you associate `<select>` elements to `<form>`s anywhere in the document, not just inside a `<form>`. It can also override an ancestor `<form>` element.

- {{htmlattrdef("multiple")}}
  - : This Boolean attribute indicates that multiple options can be selected in the list. If it is not specified, then only one option can be selected at a time. When `multiple` is specified, most browsers will show a scrolling list box instead of a single line dropdown.
- {{htmlattrdef("name")}}
  - : This attribute is used to specify the name of the control.
- {{htmlattrdef("required")}}
  - : A Boolean attribute indicating that an option with a non-empty string value must be selected.
- {{htmlattrdef("size")}}

  - : If the control is presented as a scrolling list box (e.g. when `multiple` is specified), this attribute represents the number of rows in the list that should be visible at one time. Browsers are not required to present a select element as a scrolled list box. The default value is `0`.

    > **Note:** According to the HTML specification, the default value for size should be `1`; however, in practice, this has been found to break some web sites, and no other browser currently does that, so Mozilla has opted to continue to return `0` for the time being with Firefox.

## Usage notes

### Selecting multiple options

On a desktop computer, there are a number of ways to select multiple options in a `<select>` element with a `multiple` attribute:

Mouse users can hold the <kbd>Ctrl</kbd>, <kbd>Command</kbd>, or <kbd>Shift</kbd> keys (depending on what makes sense for your operating system) and then click multiple options to select/deselect them.

> **Warning:** The mechanism for selecting multiple non-contiguous items via the keyboard described below currently only seems to work in Firefox.
>
> On macOS, the <kbd>Ctrl</kbd> + <kbd>Up</kbd> and <kbd>Ctrl</kbd> + <kbd>Down</kbd> shortcuts conflict with the OS default shortcuts for _Mission Control_ and _Application windows_, so you'll have to turn these off before it will work.

Keyboard users can select multiple contiguous items by:

- Focusing on the `<select>` element (e.g. using

  <kbd>Tab</kbd>

  ).

- Selecting an item at the top or bottom of the range they want to select using the

  <kbd>Up</kbd>

  and

  <kbd>Down</kbd>

  cursor keys to go up and down the options.

- Holding down the

  <kbd>Shift</kbd>

  key and then using the

  <kbd>Up</kbd>

  and

  <kbd>Down</kbd>

  cursor keys to increase or decrease the range of items selected.

Keyboard users can select multiple non-contiguous items by:

- Focusing on the `<select>` element (e.g. using

  <kbd>Tab</kbd>

  ).

- Holding down the

  <kbd>Ctrl</kbd>

  key then using the

  <kbd>Up</kbd>

  and

  <kbd>Down</kbd>

  cursor keys to change the "focused" select option, i.e. the one that will be selected if you choose to do so. The "focused" select option is highlighted with a dotted outline, in the same way as a keyboard-focused link.

- Pressing

  <kbd>Space</kbd>

  to select/deselect "focused" select options.

## Styling with CSS

The `<select>` element is notoriously difficult to style productively with CSS. You can affect certain aspects like any element — for example, manipulating the [box model](/en-US/docs/Learn/CSS/Building_blocks/The_box_model), the [displayed font](/en-US/docs/Web/CSS/CSS_Fonts), etc., and you can use the {{cssxref("appearance")}} property to remove the default system `appearance`.

However, these properties don't produce a consistent result across browsers, and it is hard to do things like line different types of form element up with one another in a column. The `<select>` element's internal structure is complex, and hard to control. If you want to get full control, you should consider using a library with good facilities for styling form widgets, or try rolling your own dropdown menu using non-semantic elements, JavaScript, and [WAI-ARIA](/en-US/docs/Learn/Accessibility/WAI-ARIA_basics) to provide semantics.

For more useful information on styling `<select>`, see:

- [Styling HTML forms](/en-US/docs/Learn/Forms/Styling_web_forms)
- [Advanced styling for HTML forms](/en-US/docs/Learn/Forms/Advanced_form_styling)

Also see the "Customizing select styles" example below for an example of you could attempt a simple `<select>` styling.

## Examples

### Basic select

The following example creates a very simple dropdown menu, the second option of which is selected by default.

```html
<!-- The second value will be selected initially -->
<select name="choice">
  <option value="first">First Value</option>
  <option value="second" selected>Second Value</option>
  <option value="third">Third Value</option>
</select>
```

{{EmbedLiveSample("Basic_select", "", "100")}}

### Advanced select with multiple features

The follow example is more complex, showing off more features you can use on a `<select>` element:

```html
<label>Please choose one or more pets:
  <select name="pets" multiple size="4">
    <optgroup label="4-legged pets">
      <option value="dog">Dog</option>
      <option value="cat">Cat</option>
      <option value="hamster" disabled>Hamster</option>
    </optgroup>
    <optgroup label="Flying pets">
      <option value="parrot">Parrot</option>
      <option value="macaw">Macaw</option>
      <option value="albatross">Albatross</option>
    </optgroup>
  </select>
</label>
```

{{EmbedLiveSample("Advanced_select_with_multiple_features", "", "100")}}

You'll see that:

- Multiple options are selectable because we've included the `multiple` attribute.
- The `size` attribute causes only 4 lines to display at a time; you can scroll to view all the options.
- We've included {{htmlelement("optgroup")}} elements to divide the options up into different groups. This is a purely visual grouping, its visualization generally consists of the group name being bolded, and the options being indented.
- The "Hamster" option includes a `disabled` attribute and therefore can't be selected at all.

### Customizing select styles

This example shows how you could use some CSS and JavaScript to provide extensive custom styling for a `<select>` box.

This example basically:

- Clones the `<select>`'s context (the [`<option>`s](/en-US/docs/Web/HTML/Element/option)) in a parent wrapper and reimplements the standard expected behavior using additional HTML elements and JavaScript. This includes basic tab behavior to provide keyboard accessibility.
- Maps some standards native `attributes` to `data-attributes` of the new elements in order to manage state and CSS.

> **Note:** Not all native features are supported, it's a Proof of Concept. IT starts from standard HTML but the same results can be achieved starting from JSON data, custom HTML, or other solutions.

#### HTML

```html
<form>
  <fieldset>
    <legend>Standard controls</legend>
    <select name="1A" id="select" autocomplete="off" required>
      <option>Carrots</option>
      <option>Peas</option>
      <option>Beans</option>
      <option>Pneumonoultramicroscopicsilicovolcanoconiosis</option>
    </select>
  </fieldset>
  <fieldset id="custom">
    <legend>Custom controls</legend>
    <select name="2A" id="select" autocomplete="off" required>
      <option>Carrots</option>
      <option>Peas</option>
      <option>Beans</option>
      <option>Pneumonoultramicroscopicsilicovolcanoconiosis</option>
    </select>
  </fieldset>
</form>
```

#### CSS

```css
body {
  font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif
}

.select:focus {
  border-color: blue;
}

html body form fieldset#custom div.select[data-multiple] div.header {
  display: none;
}

html body form fieldset#custom div.select div.header {
  content: '↓';
  display: inline-flex;
  align-items: center;
  padding: 0;
  position: relative;
}

html body form fieldset#custom div.select div.header::after {
  content: '↓';
  align-self: stretch;
  display: flex;
  align-content: center;
  justify-content: center;
  justify-items: center;
  align-items: center;
  padding: 0.5em;
}

html body form fieldset#custom div.select div.header:hover::after {
  background-color: blue;
}

.select .header select {
  appearance: none;
  font-family: inherit;
  font-size: inherit;
  padding: 0;
  border-width: 0;
  width: 100%;
  flex: 1;
  display: none;
}

.select .header select optgroup {
  display: none;
}

.select select div.option {
  display: none;
}

html body form fieldset#custom div.select {
  user-select: none;
  box-sizing: border-box;
  position: relative;
  border-radius: 4px;
  border-style: solid;
  border-width: 0;
  border-color: gray;
  width: auto;
  display: inline-block;
}

html body form fieldset#custom div.select:focus {
  border-color: blue;
}

html body form fieldset#custom div.select:hover {
  border-color: blue;
}

html body form fieldset#custom div.select[data-open] {
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
}

html body form fieldset#custom div.select[data-open] datalist {
  display: initial;
}

html body form fieldset#custom div.select datalist {
  appearance: none;
  position: absolute;
  border-style: solid;
  border-width: 1px;
  border-color: gray;
  left: 0;
  display: none;
  width: 100%;
  box-sizing: border-box;
  z-index: 2;
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
}

html body form fieldset#custom div.select datalist div.option {
  background-color: white;
  margin-bottom: 1px;
  cursor: pointer;
  padding: 0.5em;
  border-width: 0;
}

html body form fieldset#custom div.select datalist div.option:hover {
  background-color: blue;
  color: white;
}

html body form fieldset#custom div.select datalist div.option:focus {
  background-color: blue;
  color: white;
}

html body form fieldset#custom div.select datalist div.option:checked {
  background-color: blue;
  color: white;
}

html
  body
  form
  fieldset#custom
  div.select
  div.optgroup
  div.option[data-disabled] {
  color: gray;
}

html
  body
  form
  fieldset#custom
  div.select
  div.optgroup
  div.option[data-checked] {
  background-color: blue;
  color: white;
}

html body form fieldset#custom div.select div.optgroup div.label {
  font-weight: bold;
}

html body form fieldset#custom div.select div.optgroup div.option div.label {
  font-weight: normal;
  padding: 0.25em;
}

html body form fieldset#custom div.select div.header {
  flex: 1;
  display: flex;
  width: auto;
  box-sizing: border-box;
  border-width: 1px;
  border-style: inherit;
  border-color: inherit;
  border-radius: inherit;
}

html body form fieldset#custom div.select div.header span {
  flex: 1;
  padding: 0.5em;
}
```

#### JavaScript

```js
const selects = custom.querySelectorAll('select');
for (const select of selects) {
  const div = document.createElement('div');
  const header = document.createElement('div');
  const datalist = document.createElement('datalist');
  const optgroups = select.querySelectorAll('optgroup');
  const span = document.createElement('span');
  const options = select.options;
  const parent = select.parentElement;
  const multiple = select.hasAttribute('multiple');
  function onclick(e) {
    const disabled = this.hasAttribute('data-disabled');
    select.value = this.dataset.value;
    span.innerText = this.dataset.label;
    if (disabled) return;
    if (multiple) {
      if (e.shiftKey) {
        const checked = this.hasAttribute("data-checked");
        if (checked) {
          this.removeAttribute("data-checked");
        } else {
          this.setAttribute("data-checked", "");
        }
      } else {
        const options = div.querySelectorAll('.option');
        for (let i = 0; i < options.length; i++) {
          const option = options[i];
          option.removeAttribute("data-checked");
        }
        this.setAttribute("data-checked", "");
      }
    }
  }

  function onkeyup(e) {
    e.preventDefault();
    e.stopPropagation();
    if (e.keyCode === 13) {
      this.click();
    }
  }

  div.classList.add('select');
  header.classList.add('header');
  div.tabIndex = 1;
  select.tabIndex = -1;
  span.innerText = select.label;
  header.appendChild(span);

  for (const attribute of select.attributes) {
    div.dataset[attribute.name] = attribute.value;
  }
  for (let i = 0; i < options.length; i++) {
    const option = document.createElement('div');
    const label = document.createElement('div');
    const o = options[i];
    for (const attribute of o.attributes) {
      option.dataset[attribute.name] = attribute.value;
    }
    option.classList.add('option');
    label.classList.add('label');
    label.innerText = o.label;
    option.dataset.value = o.value;
    option.dataset.label = o.label;
    option.onclick = onclick;
    option.onkeyup = onkeyup;
    option.tabIndex = i + 1;
    option.appendChild(label);
    datalist.appendChild(option);
  }
  div.appendChild(header);
  for (const o of optgroups) {
    const optgroup = document.createElement('div');
    const label = document.createElement('div');
    const options = o.querySelectorAll('option');

    Object.assign(optgroup, o);
    optgroup.classList.add('optgroup');
    label.classList.add('label');
    label.innerText = o.label;
    optgroup.appendChild(label);
    div.appendChild(optgroup);
    for (const o of options) {
      const option = document.createElement('div');
      const label = document.createElement('div');

      for (const attribute of o.attributes) {
        option.dataset[attribute.name] = attribute.value;
      }
      option.classList.add('option');
      label.classList.add('label');
      label.innerText = o.label;
      option.tabIndex = i + 1;
      option.dataset.value = o.value;
      option.dataset.label = o.label;
      option.onclick = onclick;
      option.onkeyup = onkeyup;
      option.tabIndex = i + 1;
      option.appendChild(label);
      optgroup.appendChild(option);
    }
  }

  div.onclick = (e) => {
    e.preventDefault();
  };

  parent.insertBefore(div, select);
  header.appendChild(select);
  div.appendChild(datalist);
  datalist.style.top = `${header.offsetTop + header.offsetHeight}px`;

  div.onclick = (e) => {
    if (!multiple) {
      const open = this.hasAttribute("data-open");
      e.stopPropagation();
      if (open) {
        div.removeAttribute("data-open");
      } else {
        div.setAttribute("data-open", "");
      }
    }
  };

  div.onkeyup = (event) => {
    event.preventDefault();
    if (event.keyCode === 13) {
      div.click();
    }
  };

  document.addEventListener('click', (e) => {
    if (div.hasAttribute("data-open")) {
      div.removeAttribute("data-open");
    }
  });

  const width = Math.max(...Array.from(options).map((e) => {
    span.innerText = e.label;
    return div.offsetWidth;
  }));

  console.log(width);
  div.style.width = `${width}px`;
}
document.forms[0].onsubmit = (e) => {
  const data = new FormData(this);
  e.preventDefault();
  submit.innerText = JSON.stringify([...data.entries()]);
};
```

#### Result

{{EmbedGHLiveSample("html-examples/custom-select", '100%', 300)}}

## Technical summary

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a href="/en-US/docs/Web/Guide/HTML/Content_categories"
          >Content categories</a
        >
      </th>
      <td>
        <a href="/en-US/docs/Web/Guide/HTML/Content_categories#flow_content"
          >Flow content</a
        >,
        <a href="/en-US/docs/Web/Guide/HTML/Content_categories#phrasing_content"
          >phrasing content</a
        >,
        <a
          href="/en-US/docs/Web/Guide/HTML/Content_categories#interactive_content"
          >interactive content</a
        >,
        <a href="/en-US/docs/Web/Guide/HTML/Content_categories#form_listed"
          >listed</a
        >,
        <a href="/en-US/docs/Web/Guide/HTML/Content_categories#form_labelable"
          >labelable</a
        >,
        <a href="/en-US/docs/Web/Guide/HTML/Content_categories#form_resettable"
          >resettable</a
        >, and
        <a href="/en-US/docs/Web/Guide/HTML/Content_categories#form_submittable"
          >submittable</a
        >
        <a href="/en-US/docs/Web/Guide/HTML/Content_categories#form-associated_"
          >form-associated </a
        >element
      </td>
    </tr>
    <tr>
      <th scope="row">Permitted content</th>
      <td>
        Zero or more {{HTMLElement("option")}} or
        {{HTMLElement("optgroup")}} elements.
      </td>
    </tr>
    <tr>
      <th scope="row">Tag omission</th>
      <td>{{no_tag_omission}}</td>
    </tr>
    <tr>
      <th scope="row">Permitted parents</th>
      <td>
        Any element that accepts
        <a href="/en-US/docs/Web/Guide/HTML/Content_categories#phrasing_content"
          >phrasing content</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Implicit ARIA role</th>
      <td>
        {{ARIARole("combobox")}} with <strong>no</strong>
        <code>multiple</code> attribute and <strong>no</strong>
        <code>size</code> attribute greater than 1, otherwise
        {{ARIARole("listbox")}}
      </td>
    </tr>
    <tr>
      <th scope="row">Permitted ARIA roles</th>
      <td>
        {{ARIARole("menu")}} with <strong>no</strong>
        <code>multiple</code> attribute and <strong>no</strong>
        <code>size</code> attribute greater than 1, otherwise no
        <code>role</code> permitted
      </td>
    </tr>
    <tr>
      <th scope="row">DOM interface</th>
      <td>{{domxref("HTMLSelectElement")}}</td>
    </tr>
  </tbody>
</table>

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- Events fired by `<select>`: {{domxref("HTMLElement/change_event", "change")}}, {{domxref("HTMLElement/input_event", "input")}}
- The {{HTMLElement("option")}} element
- The {{HTMLElement("optgroup")}} element
