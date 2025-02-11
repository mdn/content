---
title: "<select>: The HTML Select element"
slug: Web/HTML/Element/select
page-type: html-element
browser-compat: html.elements.select
---

{{HTMLSidebar}}

The **`<select>`** [HTML](/en-US/docs/Web/HTML) element represents a control that provides a menu of options.

{{EmbedInteractiveExample("pages/tabbed/select.html", "tabbed-standard")}}

The above example shows typical `<select>` usage. It is given an `id` attribute to enable it to be associated with a {{htmlelement("label")}} for accessibility purposes, as well as a `name` attribute to represent the name of the associated data point submitted to the server. Each menu option is defined by an {{htmlelement("option")}} element nested inside the `<select>`.

Each `<option>` element should have a [`value`](/en-US/docs/Web/HTML/Element/option#value) attribute containing the data value to submit to the server when that option is selected. If no `value` attribute is included, the value defaults to the text contained inside the element. You can include a [`selected`](/en-US/docs/Web/HTML/Element/option#selected) attribute on an `<option>` element to make it selected by default when the page first loads. If no `selected` attribute is specified, the first `<option>` element will be selected by default.

A `<select>` element is represented in JavaScript by an {{domxref("HTMLSelectElement")}} object, and this object has a {{domxref("HTMLSelectElement.value", "value")}} property which contains the value of the selected `<option>`.

The `<select>` element has some unique attributes you can use to control it, such as `multiple` to specify whether multiple options can be selected, and `size` to specify how many options should be shown at once. It also accepts most of the general form input attributes such as `required`, `disabled`, `autofocus`, etc.

You can further nest {{HTMLElement("option")}} elements inside {{HTMLElement("optgroup")}} elements to create separate groups of options inside the dropdown. You can also include {{HTMLElement("hr")}} elements to create separators that add visual breaks between options.

For further examples, see [The native form widgets: Drop-down content](/en-US/docs/Learn_web_development/Extensions/Forms/Other_form_controls#drop-down_controls).

## Attributes

This element includes the [global attributes](/en-US/docs/Web/HTML/Global_attributes).

- [`autocomplete`](/en-US/docs/Web/HTML/Attributes/autocomplete)
  - : A string providing a hint for a {{Glossary("user agent", "user agent's")}} autocomplete feature. See [The HTML autocomplete attribute](/en-US/docs/Web/HTML/Attributes/autocomplete) for a complete list of values and details on how to use autocomplete.
- `autofocus`
  - : This Boolean attribute lets you specify that a form control should have input focus when the page loads. Only one form element in a document can have the `autofocus` attribute.
- [`disabled`](/en-US/docs/Web/HTML/Attributes/disabled)
  - : This Boolean attribute indicates that the user cannot interact with the control. If this attribute is not specified, the control inherits its setting from the containing element, for example {{htmlelement("fieldset")}}; if there is no containing element with the `disabled` attribute set, then the control is enabled.
- `form`

  - : The {{HTMLElement("form")}} element to associate the `<select>` with (its _form owner_). The value of this attribute must be the [`id`](/en-US/docs/Web/HTML/Global_attributes/id) of a `<form>` in the same document. (If this attribute is not set, the `<select>` is associated with its ancestor `<form>` element, if any.)

    This attribute lets you associate `<select>` elements to `<form>`s anywhere in the document, not just inside a `<form>`. It can also override an ancestor `<form>` element.

- [`multiple`](/en-US/docs/Web/HTML/Attributes/multiple)
  - : This Boolean attribute indicates that multiple options can be selected in the list. If it is not specified, then only one option can be selected at a time. When `multiple` is specified, most browsers will show a scrolling list box instead of a single line dropdown.
- `name`
  - : This attribute is used to specify the name of the control.
- [`required`](/en-US/docs/Web/HTML/Attributes/required)
  - : A Boolean attribute indicating that an option with a non-empty string value must be selected.
- [`size`](/en-US/docs/Web/HTML/Attributes/size)

  - : If the control is presented as a scrolling list box (e.g. when `multiple` is specified), this attribute represents the number of rows in the list that should be visible at one time. Browsers are not required to present a select element as a scrolled list box. The default value is `0`.

    > [!NOTE]
    > According to the HTML specification, the default value for size should be `1`; however, in practice, this has been found to break some websites, and no other browser currently does that, so Mozilla has opted to continue to return `0` for the time being with Firefox.

## Usage notes

### Selecting multiple options

On a desktop computer, there are a number of ways to select multiple options in a `<select>` element with a `multiple` attribute:

Mouse users can hold the <kbd>Ctrl</kbd>, <kbd>Command</kbd>, or <kbd>Shift</kbd> keys (depending on what makes sense for your operating system) and then click multiple options to select/deselect them.

> [!WARNING]
> The mechanism for selecting multiple non-contiguous items via the keyboard described below currently only seems to work in Firefox.
>
> On macOS, the <kbd>Ctrl</kbd> + <kbd>Up</kbd> and <kbd>Ctrl</kbd> + <kbd>Down</kbd> shortcuts conflict with the OS default shortcuts for _Mission Control_ and _Application windows_, so you'll have to turn these off before it will work.

Keyboard users can select multiple contiguous items by:

- Focusing on the `<select>` element (e.g. using <kbd>Tab</kbd>).
- Selecting an item at the top or bottom of the range they want to select using the <kbd>Up</kbd> and <kbd>Down</kbd> cursor keys to go up and down the options.
- Holding down the <kbd>Shift</kbd> key and then using the <kbd>Up</kbd> and <kbd>Down</kbd> cursor keys to increase or decrease the range of items selected.

Keyboard users can select multiple non-contiguous items by:

- Focusing on the `<select>` element (e.g. using <kbd>Tab</kbd>).
- Holding down the <kbd>Ctrl</kbd> key then using the <kbd>Up</kbd> and <kbd>Down</kbd> cursor keys to change the "focused" select option, i.e. the one that will be selected if you choose to do so. The "focused" select option is highlighted with a dotted outline, in the same way as a keyboard-focused link.
- Pressing <kbd>Space</kbd> to select/deselect "focused" select options.

## Styling with CSS

The `<select>` element is notoriously difficult to style productively with CSS. You can affect certain aspects like any element — for example, manipulating the [box model](/en-US/docs/Learn_web_development/Core/Styling_basics/Box_model), the [displayed font](/en-US/docs/Web/CSS/CSS_fonts), etc., and you can use the {{cssxref("appearance")}} property to remove the default system `appearance`.

However, these properties don't produce a consistent result across browsers, and it is hard to do things like line different types of form element up with one another in a column. The `<select>` element's internal structure is complex, and hard to control. If you want to get full control, you should consider using a library with good facilities for styling form widgets, or try rolling your own dropdown menu using non-semantic elements, JavaScript, and [WAI-ARIA](/en-US/docs/Learn_web_development/Core/Accessibility/WAI-ARIA_basics) to provide semantics.

You can also use the {{cssxref(":open")}} pseudo-class to style a `<select>` element when it is in the open state, that is, when the drop-down options list is displayed. This doesn't apply to multi-line `<select>` elements (those with the [`multiple`](/en-US/docs/Web/HTML/Attributes/multiple) attribute set) — they tend to render as a scrolling list box rather than a drop-down, so don't have an open state.

For more useful information on styling `<select>`, see:

- [Styling HTML forms](/en-US/docs/Learn_web_development/Extensions/Forms/Styling_web_forms)
- [Advanced styling for HTML forms](/en-US/docs/Learn_web_development/Extensions/Forms/Advanced_form_styling)
- The {{cssxref("field-sizing")}} property, which controls how `<select>` elements are sized in relation to their contained options.

## Accessibility

The `<hr>` within a `<select>` should be considered purely decorative, as they are currently not exposed within the accessibility tree and therefore not exposed to assistive technologies.

## Examples

### Basic select

The following example creates a three-value dropdown menu, the second option of which is selected by default.

```html
<!-- The second value will be selected initially -->
<select name="choice">
  <option value="first">First Value</option>
  <option value="second" selected>Second Value</option>
  <option value="third">Third Value</option>
</select>
```

#### Result

{{EmbedLiveSample("Basic_select", "", "100")}}

### Select with grouping options

The following example creates a dropdown menu with grouping using {{HTMLElement("optgroup")}} and {{HTMLElement("hr")}} to make it easier for the user to understand the content in the dropdown.

```html
<label for="hr-select">Your favorite food</label> <br />

<select name="foods" id="hr-select">
  <option value="">Choose a food</option>
  <hr />
  <optgroup label="Fruit">
    <option value="apple">Apples</option>
    <option value="banana">Bananas</option>
    <option value="cherry">Cherries</option>
    <option value="damson">Damsons</option>
  </optgroup>
  <hr />
  <optgroup label="Vegetables">
    <option value="artichoke">Artichokes</option>
    <option value="broccoli">Broccoli</option>
    <option value="cabbage">Cabbages</option>
  </optgroup>
  <hr />
  <optgroup label="Meat">
    <option value="beef">Beef</option>
    <option value="chicken">Chicken</option>
    <option value="pork">Pork</option>
  </optgroup>
  <hr />
  <optgroup label="Fish">
    <option value="cod">Cod</option>
    <option value="haddock">Haddock</option>
    <option value="salmon">Salmon</option>
    <option value="turbot">Turbot</option>
  </optgroup>
</select>
```

#### Result

{{EmbedLiveSample("select_with_grouping_options", "", "100")}}

### Advanced select with multiple features

The follow example is more complex, showing off more features you can use on a `<select>` element:

```html
<label>
  Please choose one or more pets:
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

#### Result

{{EmbedLiveSample("Advanced_select_with_multiple_features", "", "100")}}

You'll see that:

- Multiple options are selectable because we've included the `multiple` attribute.
- The `size` attribute causes only 4 lines to display at a time; you can scroll to view all the options.
- We've included {{htmlelement("optgroup")}} elements to divide the options up into different groups. This is a purely visual grouping, its visualization generally consists of the group name being bolded, and the options being indented.
- The "Hamster" option includes a `disabled` attribute and therefore can't be selected at all.

## Technical summary

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a href="/en-US/docs/Web/HTML/Content_categories"
          >Content categories</a
        >
      </th>
      <td>
        <a href="/en-US/docs/Web/HTML/Content_categories#flow_content"
          >Flow content</a
        >,
        <a href="/en-US/docs/Web/HTML/Content_categories#phrasing_content"
          >phrasing content</a
        >,
        <a
          href="/en-US/docs/Web/HTML/Content_categories#interactive_content"
          >interactive content</a
        >,
        <a href="/en-US/docs/Web/HTML/Content_categories#form_listed"
          >listed</a
        >,
        <a href="/en-US/docs/Web/HTML/Content_categories#form_labelable"
          >labelable</a
        >,
        <a href="/en-US/docs/Web/HTML/Content_categories#form_resettable"
          >resettable</a
        >, and
        <a href="/en-US/docs/Web/HTML/Content_categories#form_submittable"
          >submittable</a
        >
        <a href="/en-US/docs/Web/HTML/Content_categories#form-associated_"
          >form-associated </a
        >element
      </td>
    </tr>
    <tr>
      <th scope="row">Permitted content</th>
      <td>
        Zero or more {{HTMLElement("option")}},
        {{HTMLElement("optgroup")}} or {{HTMLElement("hr")}} elements.
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
        <a href="/en-US/docs/Web/HTML/Content_categories#phrasing_content"
          >phrasing content</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Implicit ARIA role</th>
      <td>
        <a href="/en-US/docs/Web/Accessibility/ARIA/Roles/combobox_role"><code>combobox</code></a> with <strong>no</strong>
        <code>multiple</code> attribute and <strong>no</strong>
        <code>size</code> attribute greater than 1, otherwise
        <a href="/en-US/docs/Web/Accessibility/ARIA/Roles/listbox_role"><code>listbox</code></a>
      </td>
    </tr>
    <tr>
      <th scope="row">Permitted ARIA roles</th>
      <td>
        <a href="/en-US/docs/Web/Accessibility/ARIA/Roles/menu_role"><code>menu</code></a> with <strong>no</strong>
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

- Events fired by `<select>`: {{domxref("HTMLElement/change_event", "change")}}, {{domxref("Element/input_event", "input")}}
- The {{HTMLElement("option")}} element
- The {{HTMLElement("optgroup")}} element
