---
title: "Permissions-Policy: focus-without-user-activation directive"
short-title: focus-without-user-activation
slug: Web/HTTP/Reference/Headers/Permissions-Policy/focus-without-user-activation
page-type: http-permissions-policy-directive
status:
  - experimental
browser-compat: http.headers.Permissions-Policy.focus-without-user-activation
sidebar: http
---

{{SeeCompatTable}}

The HTTP {{HTTPHeader("Permissions-Policy")}} header **`focus-without-user-activation`** directive controls whether a document can move focus without {{glossary("Transient activation", "transient user activation")}}.
This lets an embedding page prevent embedded content from taking focus without user interaction.

The directive applies to:

- Programmatic focus changes, such as calls to {{domxref("HTMLElement.focus()")}} and {{domxref("Window.focus()")}}.
- Automatic focus through the [`autofocus`](/en-US/docs/Web/HTML/Reference/Global_attributes/autofocus) attribute.
- Focus changes when showing a {{htmlelement("dialog")}} or [popover](/en-US/docs/Web/HTML/Reference/Global_attributes/popover).

When the policy disallows this feature, these focus changes require transient user activation in the target document.
Calls to `focus()` that are blocked have no effect.
The policy does not prevent dialogs or popovers from opening, and does not affect user-initiated focus changes, such as clicking an element or pressing the <kbd>Tab</kbd> key.

> [!NOTE]
> In Chromium, a frame that already contains focus can still move focus within its own subtree, even when the policy disallows this feature.
> A focused parent frame can also pass focus to a child iframe.
> Chromium's existing restriction on `autofocus` in cross-origin iframes still applies: allowing this feature does not enable `autofocus` in those frames.

## Syntax

```http
Permissions-Policy: focus-without-user-activation=<allowlist>;
```

- `<allowlist>`
  - : A list of origins for which permission is granted to use the feature. See [`Permissions-Policy` > Syntax](/en-US/docs/Web/HTTP/Reference/Headers/Permissions-Policy#syntax) for more details.

## Default policy

The default allowlist for `focus-without-user-activation` is `self`.

> [!NOTE]
> Chromium uses a default allowlist of `*` instead of the specification's `self`.
> Set an explicit policy to restrict the feature in cross-origin iframes.
> See [Chromium bug 587978069](https://crbug.com/587978069).

## Examples

### Requiring user activation for focus changes

The following response header disallows focus without user activation in the document and all its embedded iframes:

```http
Permissions-Policy: focus-without-user-activation=()
```

To restrict only a specific iframe, use its {{htmlelement("iframe", "allow", "#allow")}} attribute:

```html
<iframe
  src="https://example.com/embed"
  title="Embedded content"
  allow="focus-without-user-activation 'none'"></iframe>
```

Users can still focus elements in the iframe through normal keyboard and pointer interaction.

### Allowing focus changes in a trusted iframe

The following header allows focus without user activation in the embedding page and in content from `https://example.com`, but not in other origins:

```http
Permissions-Policy: focus-without-user-activation=(self "https://example.com")
```

The embedding page also grants the feature to the trusted iframe using its `allow` attribute:

```html
<iframe
  src="https://example.com/embed"
  title="Trusted embedded content"
  allow="focus-without-user-activation"></iframe>
```

The iframe's `allow` attribute cannot override a restriction set by the response header.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{HTTPHeader("Permissions-Policy")}} header
- [Permissions Policy](/en-US/docs/Web/HTTP/Guides/Permissions_Policy)
- [Features gated by user activation](/en-US/docs/Web/Security/Defenses/User_activation)
- {{domxref("HTMLElement.focus()")}}, {{domxref("Window.focus()")}}
- [`autofocus`](/en-US/docs/Web/HTML/Reference/Global_attributes/autofocus) attribute
