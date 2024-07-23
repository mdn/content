---
title: "<textarea>: The Textarea element"
slug: Web/HTML/Element/textarea
page-type: html-element
browser-compat: html.elements.textarea
---

{{HTMLSidebar}}

The **`<textarea>`** [HTML](/en-US/docs/Web/HTML) element represents a multi-line plain-text editing control, useful when you want to allow users to enter a sizeable amount of free-form text, for example a comment on a review or feedback form.

{{EmbedInteractiveExample("pages/tabbed/textarea.html", "tabbed-standard")}}

The above example demonstrates a number of features of `<textarea>`:

- An `id` attribute to allow the `<textarea>` to be associated with a {{htmlelement("label")}} element for accessibility purposes
- A `name` attribute to set the name of the associated data point submitted to the server when the form is submitted.
- `rows` and `cols` attributes to allow you to specify an exact size for the `<textarea>` to take. Setting these is a good idea for consistency, as browser defaults can differ.
- Default content entered between the opening and closing tags. `<textarea>` does not support the `value` attribute.

The `<textarea>` element also accepts several attributes common to form `<input>`s, such as `autocapitalize`, `autocomplete`, `autofocus`, `disabled`, `placeholder`, `readonly`, and `required`.

## Attributes

This element includes the [global attributes](/en-US/docs/Web/HTML/Global_attributes).

- `autocapitalize`

  - : Controls whether inputted text is automatically capitalized and, if so, in what manner. See the [`autocapitalize`](/en-US/docs/Web/HTML/Global_attributes/autocapitalize) global attribute page for more information.

- [`autocomplete`](/en-US/docs/Web/HTML/Attributes/autocomplete)

  - : This attribute indicates whether the value of the control can be automatically completed by the browser. Possible values are:

    - `off`: The user must explicitly enter a value into this field for every use, or the document provides its own auto-completion method; the browser does not automatically complete the entry.
    - `on`: The browser can automatically complete the value based on values that the user has entered during previous uses.

    If the `autocomplete` attribute is not specified on a `<textarea>` element, then the browser uses the `autocomplete` attribute value of the `<textarea>` element's form owner. The form owner is either the {{HTMLElement("form")}} element that this `<textarea>` element is a descendant of or the form element whose `id` is specified by the `form` attribute of the input element. For more information, see the [`autocomplete`](/en-US/docs/Web/HTML/Element/form#autocomplete) attribute in {{HTMLElement("form")}}.

- `autocorrect` {{non-standard_inline}}

  - : A string which indicates whether to activate automatic spelling correction and processing of text substitutions (if any are configured) while the user is editing this `textarea`. Permitted values are:

    - `on`
      - : Enable automatic spelling correction and text substitutions.
    - `off`
      - : Disable automatic spelling correction and text substitutions.

- `autofocus`
  - : This Boolean attribute lets you specify that a form control should have input focus when the page loads. Only one form-associated element in a document can have this attribute specified.
- `cols`
  - : The visible width of the text control, in average character widths. If it is specified, it must be a positive integer. If it is not specified, the default value is `20`.
- [`dirname`](/en-US/docs/Web/HTML/Attributes/dirname)
  - : This attribute is used to indicate the text directionality of the element contents.
    For more information, see the [`dirname` attribute](/en-US/docs/Web/HTML/Attributes/dirname).
- [`disabled`](/en-US/docs/Web/HTML/Attributes/disabled)
  - : This Boolean attribute indicates that the user cannot interact with the control. If this attribute is not specified, the control inherits its setting from the containing element, for example {{ HTMLElement("fieldset") }}; if there is no containing element when the `disabled` attribute is set, the control is enabled.
- `form`
  - : The form element that the `<textarea>` element is associated with (its "form owner"). The value of the attribute must be the `id` of a form element in the same document. If this attribute is not specified, the `<textarea>` element must be a descendant of a form element. This attribute enables you to place `<textarea>` elements anywhere within a document, not just as descendants of form elements.
- [`maxlength`](/en-US/docs/Web/HTML/Attributes/maxlength)
  - : The maximum string length (measured in UTF-16 code units) that the user can enter. If this value isn't specified, the user can enter an unlimited number of characters.
- [`minlength`](/en-US/docs/Web/HTML/Attributes/minlength)
  - : The minimum string length (measured in UTF-16 code units) required that the user should enter.
- `name`
  - : The name of the control.
- [`placeholder`](/en-US/docs/Web/HTML/Attributes/placeholder)

  - : A hint to the user of what can be entered in the control. Carriage returns or line-feeds within the placeholder text must be treated as line breaks when rendering the hint.

    > **Note:** Placeholders should only be used to show an example of the type of data that should be entered into a form; they are _not_ a substitute for a proper {{HTMLElement("label")}} element tied to the input. See [`<input>` labels](/en-US/docs/Web/HTML/Element/input#labels) for a full explanation.

- [`readonly`](/en-US/docs/Web/HTML/Attributes/readonly)
  - : This Boolean attribute indicates that the user cannot modify the value of the control. Unlike the `disabled` attribute, the `readonly` attribute does not prevent the user from clicking or selecting in the control. The value of a read-only control is still submitted with the form.
- [`required`](/en-US/docs/Web/HTML/Attributes/required)
  - : This attribute specifies that the user must fill in a value before submitting a form.
- `rows`
  - : The number of visible text lines for the control. If it is specified, it must be a positive integer. If it is not specified, the default value is 2.
- `spellcheck`

  - : Specifies whether the `<textarea>` is subject to spell checking by the underlying browser/OS. The value can be:

    - `true`: Indicates that the element needs to have its spelling and grammar checked.
    - `default` : Indicates that the element is to act according to a default behavior, possibly based on the parent element's own `spellcheck` value.
    - `false` : Indicates that the element should not be spell checked.

- `wrap`

  - : Indicates how the control should wrap the value for form submission. Possible values are:

    - `hard`: The browser automatically inserts line breaks (CR+LF) so that each line is no longer than the width of the control; the [`cols`](#cols) attribute must be specified for this to take effect
    - `soft`: The browser ensures that all line breaks in the entered value are a `CR+LF` pair, but no additional line breaks are added to the value.
    - `off` {{non-standard_inline}}: Like `soft` but changes appearance to `white-space: pre` so line segments exceeding `cols` are not wrapped and the `<textarea>` becomes horizontally scrollable.

    If this attribute is not specified, `soft` is its default value.

## Styling with CSS

`<textarea>` is a [replaced element](/en-US/docs/Web/CSS/Replaced_element) — it has intrinsic dimensions, like a raster image. By default, its {{cssxref("display")}} value is `inline-block`. Compared to other form elements it is relatively easy to style, with its box model, fonts, color scheme, etc. being easily manipulable using regular CSS.

[Styling HTML forms](/en-US/docs/Learn/Forms/Styling_web_forms) provides some useful tips on styling `<textarea>`s.

### Baseline inconsistency

The HTML specification doesn't define where the baseline of a `<textarea>` is, so different browsers set it to different positions. For Gecko, the `<textarea>` baseline is set on the baseline of the first line of the textarea, on another browser it may be set on the bottom of the `<textarea>` box. Don't use {{cssxref("vertical-align")}}`: baseline` on it; the behavior is unpredictable.

### Controlling whether a textarea is resizable

In most browsers, `<textarea>`s are resizable — you'll notice the drag handle in the right-hand corner, which can be used to alter the size of the element on the page. This is controlled by the {{ cssxref("resize") }} CSS property — resizing is enabled by default, but you can explicitly disable it using a `resize` value of `none`:

```css
textarea {
  resize: none;
}
```

### Styling valid and invalid values

Valid and invalid values of a `<textarea>` element (e.g. those within, and outside the bounds set by `minlength`, `maxlength`, or `required`) can be highlighted using the {{cssxref(":valid")}} and {{cssxref(":invalid")}} pseudo-classes. For example, to give your textarea a different border depending on whether it is valid or invalid:

```css
textarea:invalid {
  border: 2px dashed red;
}

textarea:valid {
  border: 2px solid lime;
}
```

## Examples

### Basic example

The following example shows a textarea with a set number of rows and columns, some default content, and CSS styles that prevent users from resizing the element more than 500px wide and 130px high:

```html
<textarea name="textarea" rows="5" cols="15">Write something here</textarea>
```

```css
textarea {
  max-height: 130px;
  max-width: 500px;
}
```

#### Result

{{EmbedLiveSample('Basic_example')}}

### Example using "minlength" and "maxlength"

This example has a minimum and maximum number of characters — of 10 and 20 respectively. Try it and see.

```html
<textarea name="textarea" rows="5" cols="30" minlength="10" maxlength="20">
Write something here…
</textarea>
```

```css
textarea {
  max-height: 130px;
  max-width: 500px;
}
```

#### Result

{{EmbedLiveSample('Example using "minlength" and "maxlength"')}}

Note that `minlength` doesn't stop the user from removing characters so that the number entered goes past the minimum, but it does make the value entered into the `<textarea>` invalid. Also note that even if you have a `minlength` value set (3, for example), an empty `<textarea>` is still considered valid unless you also have the `required` attribute set.

### Example using "placeholder"

This example has a placeholder set. Notice how it disappears when you start typing into the box.

```html
<textarea
  name="textarea"
  rows="5"
  cols="30"
  placeholder="Comment text."></textarea>
```

```css
textarea {
  max-height: 130px;
  max-width: 500px;
}
```

#### Result

{{EmbedLiveSample('Example using "placeholder"')}}

> **Note:** Placeholders should only be used to show an example of the type of data that should be entered into a form; they are _not_ a substitute for a proper {{HTMLElement("label")}} element tied to the input. See [`<input>` labels](/en-US/docs/Web/HTML/Element/input#labels) for a full explanation.

### Disabled and readonly textareas

This example shows two `<textarea>`s — one is [`readonly`](/en-US/docs/Web/HTML/Attributes/readonly) and one is [`disabled`](/en-US/docs/Web/HTML/Attributes/disabled).
You cannot edit the contents of either element, but the `readonly` element is focusable and its value is submitted in forms.
The `disabled` element's value is not submitted and it's not focusable.

```html
<textarea name="textarea" rows="5" cols="30" readonly>
I am a read-only textarea.
</textarea>
<textarea name="textarea" rows="5" cols="30" disabled>
I am a disabled textarea.
</textarea>
```

```css
textarea {
  display: block;
  resize: horizontal;
  max-width: 500px;
}
```

#### Result

{{EmbedLiveSample('disabled_and_readonly_textareas', '', '230')}}

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
          >Interactive content</a
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
          >form-associated</a
        >
        element.
      </td>
    </tr>
    <tr>
      <th scope="row">Permitted content</th>
      <td>Text</td>
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
        <code
          ><a href="/en-US/docs/Web/Accessibility/ARIA/Roles/textbox_role"
            >textbox</a
          ></code
        >
      </td>
    </tr>
    <tr>
      <th scope="row">Permitted ARIA roles</th>
      <td>No <code>role</code> permitted</td>
    </tr>
    <tr>
      <th scope="row">DOM interface</th>
      <td>{{domxref("HTMLTextAreaElement")}}</td>
    </tr>
  </tbody>
</table>

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- Other form-related elements:
  - {{ HTMLElement("form") }}
  - {{ HTMLElement("button") }}
  - {{ HTMLElement("datalist") }}
  - {{ HTMLElement("legend") }}
  - {{ HTMLElement("label") }}
  - {{ HTMLElement("select") }}
  - {{ HTMLElement("optgroup") }}
  - {{ HTMLElement("option") }}
  - {{ HTMLElement("input") }}
  - {{ HTMLElement("fieldset") }}
  - {{ HTMLElement("output") }}
  - {{ HTMLElement("progress") }}
  - {{ HTMLElement("meter") }}
