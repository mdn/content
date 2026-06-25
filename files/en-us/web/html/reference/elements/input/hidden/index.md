---
title: '`<input type="hidden">` HTML attribute value'
short-title: <input type="hidden">
slug: Web/HTML/Reference/Elements/input/hidden
page-type: html-attribute-value
browser-compat: html.elements.input.type_hidden
sidebar: htmlsidebar
---

{{HTMLElement("input")}} elements of type **`hidden`** allow web developers to include data in a form that is not visually accessible to users when a form is submitted. For example, the ID of the content that is currently being ordered or edited, or a unique security token. Hidden inputs are completely invisible in the rendered page, but are still submitted as any other form input. While the data is not presented to users in the rendered content, it is still accessible in the HTML output and is editable to users using tools such as their [browser's developer tools](https://developer.mozilla.org/en-US/docs/Learn_web_development/Howto/Tools_and_setup/What_are_browser_developer_tools).

> [!NOTE]
> The {{domxref("Element/input_event", "input")}} and {{domxref("HTMLElement/change_event", "change")}} events do not apply to this input type. Hidden inputs cannot be focused even using JavaScript (e.g., `hiddenInput.focus()`).

## Value

The {{HTMLElement("input")}} element's [`value`](/en-US/docs/Web/HTML/Reference/Elements/input#value) attribute holds a string that contains the hidden data you want to include when the form is submitted to the server. This value is not presented to the user via the user interface.

> [!WARNING]
> While the value isn't displayed to the user in the page's content, it is visible—and can be edited—using any browser's developer tools or "View Source" functionality. Do not rely on `hidden` inputs as a form of security.

## Additional attributes

In addition to the attributes common to all {{HTMLElement("input")}} elements, `hidden` inputs offer the following attributes.

### name

This is actually one of the common attributes, but it has a special meaning available for hidden inputs. Normally, the [`name`](/en-US/docs/Web/HTML/Reference/Elements/input#name) attribute functions on hidden inputs just like on any other input. However, when the form is submitted, a hidden input whose `name` is set to `_charset_` will automatically be reported with the value set to the character encoding used to submit the form.

## Using hidden inputs

As mentioned above, hidden inputs can be used anywhere that you want to include data the user can't see along with the form when it's submitted to the server. Let's look at some examples that illustrate its use.

### Tracking edited content

One of the most common uses for hidden inputs is to keep track of what database record needs to be updated when an edit form is submitted. A typical workflow looks like this:

1. User decides to edit some content they have control over, such as a blog post, or a product entry. They get started by pressing the edit button.
2. The content to be edited is taken from the database and loaded into an HTML form to allow the user to make changes.
3. After editing, the user submits the form, and the updated data is sent back to the server to be updated in the database.

The idea here is that during step 2, the ID of the record being updated is kept in a hidden input. When the form is submitted in step 3, the ID is automatically sent back to the server with the record content. The ID lets the site's server-side component know exactly which record needs to be updated with the submitted data.

You can see a full example of what this might look like in the [Examples](#examples) section below.

### Improving website security

One common use of hidden input fields is to store Cross-Site Request Forgery (CSRF) tokens, which help protect websites against [CSRF attacks](/en-US/docs/Web/Security/Attacks/CSRF).

> [!NOTE]
> Data placed in a hidden input is not inherently secured. Its value is still observable by the end user. You need to use well-designed secrets to actually secure your website.

## Validation

Hidden inputs don't participate in constraint validation; they have no real value to be constrained.

## Examples

Let's look at how we might implement a version of the edit form we described earlier (see [Tracking edited content](#tracking_edited_content)), using a hidden input to remember the ID of the record being edited.

The edit form's HTML might look a bit like this:

```html
<form>
  <div>
    <label for="title">Post title:</label>
    <input type="text" id="title" name="title" value="My excellent blog post" />
  </div>
  <div>
    <label for="content">Post content:</label>
    <textarea id="content" name="content" cols="60" rows="5">
This is the content of my excellent blog post. I hope you enjoy it!
    </textarea>
  </div>
  <div>
    <button type="submit">Update post</button>
  </div>
  <input type="hidden" id="postId" name="postId" value="34657" />
</form>
```

Let's also add some CSS:

```css
html {
  font-family: sans-serif;
}

form {
  width: 500px;
}

div {
  display: flex;
  margin-bottom: 10px;
}

label {
  flex: 2;
  line-height: 2;
  text-align: right;
  padding-right: 20px;
}

input,
textarea {
  flex: 7;
  font-family: sans-serif;
  font-size: 1.1rem;
  padding: 5px;
}

textarea {
  height: 60px;
}
```

The server would set the value of the hidden input with the ID `postID` to the ID of the post in its database before sending the form to the user's browser and would use that information when the form is returned to know which database record to update with modified information. No scripting is needed in the content to handle this.

The output looks like this:

{{ EmbedLiveSample('Examples', '100%', 200) }}

> [!NOTE]
> You can also find the example on GitHub (see the [source code](https://github.com/mdn/learning-area/blob/main/html/forms/hidden-input-example/index.html), and also [see it running live](https://mdn.github.io/learning-area/html/forms/hidden-input-example/index.html)).

When submitted, the form data sent to the server will look something like this:

`title=My+excellent+blog+post&content=This+is+the+content+of+my+excellent+blog+post.+I+hope+you+enjoy+it!&postId=34657`

Even though the hidden input cannot be seen at all, its data is still submitted.

## Technical summary

<table class="properties">
  <tbody>
    <tr>
      <td><strong><a href="#value">Value</a></strong></td>
      <td>
        A string representing the value of the hidden
        data you want to pass back to the server.
      </td>
    </tr>
    <tr>
      <td><strong>Events</strong></td>
      <td>None.</td>
    </tr>
    <tr>
      <td><strong>Supported Common Attributes</strong></td>
      <td><a href="/en-US/docs/Web/HTML/Reference/Elements/input#autocomplete"><code>autocomplete</code></a></td>
    </tr>
    <tr>
      <td><strong>IDL attributes</strong></td>
      <td><code>value</code></td>
    </tr>
    <tr>
      <td><strong>DOM interface</strong></td>
      <td><p>{{domxref("HTMLInputElement")}}</p></td>
    </tr>
    <tr>
      <td><strong>Implicit ARIA Role</strong></td>
      <td><a href="https://w3c.github.io/html-aria/#dfn-no-corresponding-role">no corresponding role</a></td>
    </tr>
  </tbody>
</table>

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [HTML forms guide](/en-US/docs/Learn_web_development/Extensions/Forms)
- {{HTMLElement("input")}} and the {{domxref("HTMLInputElement")}} interface it's based upon
