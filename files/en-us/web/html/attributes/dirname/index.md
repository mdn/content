---
title: "HTML attribute: dirname"
slug: Web/HTML/Attributes/dirname
page-type: html-attribute
browser-compat:
  - html.elements.textarea.dirname
  - html.elements.input.dirname
---

{{HTMLSidebar}}

The **`dirname`** attribute can be used on {{htmlelement("textarea")}} and {{htmlelement("input")}} elements and describes the directionality of the element's text content during form submission.
The browser uses this attribute's value to determine whether text the user has entered is left-to-right or right-to-left oriented.
When used, the element's text directionality value is included in form submission data along with the `dirname` attribute's value as the name of the field.

## Usage notes

The `dirname` attribute can be used on any {{htmlelement("textarea")}} element, or any {{htmlelement("input")}} element with {{htmlelement("input/text", "text")}}, {{htmlelement("input/search", "search")}}, {{htmlelement("input/tel", "tel")}}, {{htmlelement("input/url", "url")}}, or {{htmlelement("input/email", "email")}} type.

The format of the submitted data is `{dirname_value}={direction}` where `{dirname_value}` is the value of the `dirname` attribute and `{direction}` is the directionality of the text.
For example, if the user enters "Hello" in an element with the attributes `name="comment"` and `dirname="comment-direction"`, the URL-encoded form submission data for `GET` requests will be `comment=Hello&comment-direction=ltr`.
The directionality is one of the following:

- `rtl`
  - : The text entered by the user is in a right-to-left writing direction.
- `ltr`
  - : The text entered by the user is in a left-to-right writing direction.

If no text directionality is specified, the user agent will use the directionality of the parent element containing the form, and if that is not specified, the default directionality of the user agent.

## Examples

### Textarea element directionality

In this example, the `dir="auto"` attribute on the textarea element allows the text directionality to be determined automatically based on the text entered by the user:

```html
<form method="get" action="https://www.example.com/submit">
  <textarea name="comment" dir="auto" dirname="comment-direction">سيب</textarea>
  <button type="submit">Send my greetings</button>
</form>
```

When the user submits the form, the user agent includes two fields, one called `comment` with the value "سيب", and one called `comment-direction` with the value "rtl".
The URL-encoded submission body looks like this:

```url
https://www.example.com/submit?comment=%D8%B3%D9%8A%D8%A8&comment-direction=rtl
```

### Input element directionality

In this example, the `dir="auto"` attribute on the input element allows the text directionality to be determined automatically based on the text entered by the user:

```html
<form method="get" action="https://www.example.com/submit">
  <input
    type="text"
    name="comment-input"
    dir="auto"
    dirname="comment-direction"
    value="Hello" />
  <button type="submit">Send my greetings</button>
</form>
```

When the user submits the form, the user agent includes two fields, one called `comment-input` with the value "Hello", and one called `comment-direction` with the value "ltr":

```url
https://www.example.com/submit?comment-input=Hello&comment-direction=ltr
```

### Inheriting directionality

The following `<input>` and `<textarea>` elements do not have a `dir` attribute, so they inherit the explicit directionality of their parent element, which is `rtl`:

```html
<div dir="rtl">
  <form method="get" action="https://www.example.com/submit">
    <input
      type="text"
      name="user"
      dirname="user-direction"
      value="LTR Username" />
    <textarea name="comment" dirname="comment-direction">LTR Comment</textarea>
    <button type="submit">Post Comment</button>
  </form>
</div>
```

The URL-encoded submission body looks like this:

```url
https://www.example.com/submit?user=LTR+Username&user-direction=rtl&comment=LTR+Comment&comment-direction=rtl
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [`dir` attribute](/en-US/docs/Web/HTML/Global_attributes/dir)
- {{htmlelement("input")}}
- {{htmlelement("textarea")}}
