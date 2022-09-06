---
title: Using Feature Policy
slug: Web/HTTP/Feature_Policy/Using_Feature_Policy
tags:
  - Feature Policy
  - Feature-Policy
  - HTTP
  - Permissions
  - Privileges
  - Reference
  - Security
  - access
  - delegation
  - header
---
{{HTTPSidebar}}

[Feature Policy](/en-US/docs/Web/HTTP/Feature_Policy) allows you to control which origins can use which features, both in the top-level page and in embedded frames. Essentially, you write a policy, which is an allowed list of origins for each feature. For every feature controlled by Feature Policy, the feature is only enabled in the current document or frame if its origin matches the allowed list of origins.

For each policy-controlled feature, the browser maintains a list of origins for which the feature is enabled, known as an allowlist. If you do not specify a policy for a feature, then a default allowlist will be used. The default allowlist is specific to each feature.

> **Note:** The `Feature-Policy` header has now been renamed to `Permissions-Policy` in the spec, and this article will eventually be updated to reflect that change.

## Writing a policy

A policy is described using a set of individual policy directives. A policy directive is a combination of a defined feature name, and an allowlist of origins that can use the feature. Features within a policy are separated by semicolons.

### allowlist

An `allowlist` is a list of origins that takes one or more of the following values, separated by spaces:

- `*`: The feature will be allowed in this document, and all nested browsing contexts (iframes) regardless of their origin.
- `'self'`: The feature will be allowed in this document, and in all nested browsing contexts (iframes) in the same origin.
- `'src'`: (In an iframe `allow` attribute only) The feature will be allowed in this iframe, as long as the document loaded into it comes from the same origin as the URL in the iframe's {{HTMLElement('iframe','src','#Attributes')}} attribute.

  > **Note:** The `'src'` origin is used in the iframe `allow` attribute only, and is the _default_ `allowlist` value.

- `'none'`: The feature is disabled in top-level and nested browsing contexts.
- \<origin(s)>: The feature is allowed for specific origins (for example, `https://example.com`). Origins should be separated by a space.

The values `*` (enable for all origins) or `'none'` (disable for all origins) may only be used alone, while `'self'` and `'src'` may be used with one or more origins.

Features are each defined to have a default allowlist, which is one of:

- `*`: The feature is allowed by default in top-level browsing contexts and all nested browsing contexts (iframes).
- `'self'`: The feature is allowed by default in top-level browsing contexts and in nested browsing contexts (iframes) in the same origin. The feature is not allowed in cross-origin documents in nested browsing contexts.
- `'none'`: The feature is disabled in top-level and nested browsing contexts.

## Specifying your policy

Feature Policy provides two ways to specify policies to control features:

- The {{httpheader('Feature-Policy')}} HTTP header.
- The {{htmlattrxref("allow", "iframe")}} attribute on {{htmlelement("iframe")}}s.

The primary difference between the HTTP header and the `allow` attribute is that the allow attribute only controls features within an iframe. The header controls features in the response and any embedded content within the page.

### The Feature-Policy HTTP header

You can send the `Feature-Policy` HTTP header with the response of a page. The value of this header is a policy to be enforced by the browser for the given page. It has the following structure.

```bash
Feature-Policy: <feature name> <allowlist of origin(s)>
```

For example, to block all content from using the Geolocation API across your site:

```bash
Feature-Policy: geolocation 'none'
```

Several features can be controlled at the same time by sending the HTTP header with a semicolon-separated list of policy directives, or by sending a separate header for each policy.

For example, the following are equivalent:

```bash
Feature-Policy: unsized-media 'none'; geolocation 'self' https://example.com; camera *;

Feature-Policy: unsized-media 'none'
Feature-Policy: geolocation 'self' https://example.com
Feature-Policy: camera *;
```

### The iframe allow attribute

The second way to use Feature Policy is for controlling content within an iframe. Use the `allow` attribute to specify a policy list for embedded content.

For example, allow all browsing contexts within this iframe to use fullscreen:

```html
<iframe src="https://example.com/…" allow="fullscreen"></iframe>
```

The default `<iframe>` [allowlist](#allowlist) value is `'src'`, so this is equivalent to:

```html
<iframe src="https://example.com/…" allow="fullscreen 'src'"></iframe>
```

This example allows `<iframe>` content on a particular origin to access the user's location:

```html
<iframe src="https://google-developers.appspot.com/demos/…"
        allow="geolocation https://google-developers.appspot.com"></iframe>
```

Similar to the HTTP header, several features can be controlled at the same time by specifying a semicolon-separated list of policy directives.

For example, this blocks the `<iframe>` from using the camera and microphone:

```html
<iframe allow="camera 'none'; microphone 'none'">
```

## Inheritance of policy for embedded content

Scripts inherit the policy of their browsing context, regardless of their origin. That means that top-level scripts inherit the policy from the main document.

All iframes inherit the policy of their parent page. If the iframe has an `allow` attribute, the policies of the parent page and the `allow` attribute are combined, using the most restrictive subset. For an iframe to have a feature enabled, the origin must be in the allowlist for both the parent page and the allow attribute.

Disabling a feature in a policy is a one-way toggle. If a feature has been disabled for a child frame by its parent frame, the child cannot re-enable it, and neither can any of the child's descendants.

## Enforcing best practices for good user experiences

It's difficult to build a website that uses all the latest best practices and provides great performance and user experiences. As the website evolves, it can become even harder to maintain the user experience over time. You can use feature policies to specify the desired best practices, and rely on the browser to enforce the policies to prevent regressions.

There are several policy-controlled features designed to represent functionality that can negatively impact the user experience. These features include:

- Layout-inducing Animations
- Unoptimized (poorly compressed) images
- Oversized images
- Synchronous scripts
- Synchronous XMLHttpRequest
- Unsized media

To avoid breaking existing web content, the default for such policy-controlled features is to allow the functionality to be used by all origins. That is, the default allowlist is `'*'` for each feature. Preventing the use of the sub-optimal functionality requires explicitly specifying a policy that disables the features.

For new content, you can start developing with a policy that disables all the features. This approach ensures that none of the functionality is introduced. When applying a policy to existing content, testing is likely required to verify it continues to work as expected. This is especially important for embedded or third-party content that you do not control.

To turn on the enforcement of all the best practices, specify the policy as below.

Send the following the HTTP header:

```bash
Feature-Policy: layout-animations 'none'; unoptimized-images 'none'; oversized-images 'none'; sync-script 'none'; sync-xhr 'none'; unsized-media 'none';
```

Using the `<iframe>` `allow` attribute:

```html
<iframe src="https://example.com/…" allow="layout-animations 'none'; unoptimized-images 'none'; oversized-images 'none'; sync-script 'none'; sync-xhr 'none'; unsized-media 'none';"></iframe>
```

## See also

- [Feature Policy](/en-US/docs/Web/HTTP/Feature_Policy)
- {{HTTPHeader("Feature-Policy")}} header
- {{HTMLElement('iframe','allow','#Attributes')}} attribute on iframes
- {{HTTPHeader("Content-Security-Policy")}} header
- {{HTTPHeader("Referrer-Policy")}} header
- [Privacy, permissions, and information security](/en-US/docs/Web/Privacy)
