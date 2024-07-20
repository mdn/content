---
title: How to turn off form autocompletion
slug: Web/Security/Practical_implementation_guides/Turning_off_form_autocompletion
page-type: guide
---

{{QuickLinksWithSubpages("/en-US/docs/Web/Security")}}

This article explains how to disable autocomplete for form fields on a website.

## Understanding autocompletion and autofill

By default, browsers remember information that the user submits through {{HTMLElement("input")}} fields on websites. This enables browsers to offer autocompletion (that is, suggest possible completions for fields that the user has started typing in) or autofill (that is, pre-populate certain fields upon load).

These features are usually enabled by default, but they can be a privacy concern for users, so browsers can let users disable them. However, some data submitted in forms is either not useful beyond the current interaction (for example, a one-time pin) or contains sensitive information (for example, a unique government identifier or credit card security code). As the website author, you may prefer the browser not to remember the values for such fields, even if the browser's autocomplete feature is enabled.

> **Note:** [WCAG 2.1 Success Criterion 1.3.5: Identify Input Purpose](https://www.w3.org/WAI/WCAG21/Understanding/identify-input-purpose.html) does not require that autocomplete or autofill features must work; it only requires that form fields that relate to specific personal user information are programmatically identified. This means that the criterion can still be met (by adding the relevant [`autocomplete`](/en-US/docs/Web/HTML/Attributes/autocomplete) attributes to individual form fields) even when autocompletion for the form itself has been turned off.

## Disabling autocompletion

To disable autocompletion in forms, you can set the [`autocomplete`](/en-US/docs/Web/HTML/Attributes/autocomplete) attribute to `"off"`:

```plain
autocomplete="off"
```

You can do this either for an entire form, or for specific input elements in a form:

```html-nolint
<form method="post" action="/form" autocomplete="off">
  …
</form>
```

```html
<form method="post" action="/form">
  …
  <div>
    <label for="cc">Credit card:</label>
    <input type="text" id="cc" name="cc" autocomplete="off" />
  </div>
</form>
```

Setting `autocomplete="off"` on fields has two effects:

- It tells the browser not to save data inputted by the user for later autocompletion on similar forms, though heuristics for complying vary by browser.
- It stops the browser from caching form data in the session history. When form data is cached in session history, the information filled in by the user is shown in the case where the user has submitted the form and clicked the Back button to go back to the original form page.

If a browser keeps on making suggestions even after setting autocomplete to off, then you have to change the `name` attribute of the `<input>` element.

## Managing autofill for login fields

Modern browsers implement integrated password management: when the user enters a username and password for a site, the browser offers to remember it for the user. When the user visits the site again, the browser autofills the login fields with the stored values.

Additionally, the browser enables the user to choose a master password that the browser will use to encrypt stored login details.

Even without a master password, in-browser password management is generally seen as a net gain for security. Since users do not have to remember passwords that the browser stores for them, they are able to choose stronger passwords than they would otherwise.

For this reason, many modern browsers do not support `autocomplete="off"` for login fields:

- If a site sets `autocomplete="off"` on a {{HTMLElement("form")}} element and the form includes username and password input fields, the browser will still offer to remember this login. If the user agrees, the browser will autofill those fields the next time the user visits the page.
- If a site sets `autocomplete="off"` for username and password {{HTMLElement("input")}} fields, the browser will still offer to remember this login. If the user agrees, the browser will autofill those fields the next time the user visits the page.

If you are defining a user management page where a user can specify a new password for another person, and therefore, you want to prevent autofilling of password fields, you can use `autocomplete="new-password"`.

This attribute is a hint to browsers; some may not comply with it.
