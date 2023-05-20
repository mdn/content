---
title: Permissions Policy
slug: Web/HTTP/Permissions_Policy
page-type: guide
browser-compat: http.headers.Permissions-Policy
---

{{HTTPSidebar}}

**Permissions Policy** provides mechanisms for web developers to explicitly declare what functionality can and cannot be used on a website. You define a set of "policies" that restrict what APIs the site's code can access or modify the browser's default behavior for certain features. This allows you to enforce best practices, even as the codebase evolves — as well as more safely compose third-party content.

Permissions Policy is similar to {{Glossary("CSP", "Content Security Policy")}} but controls features instead of security behavior.

Examples of what you can do with Permissions Policy:

- Change the default behavior of autoplay on mobile and third-party videos.
- Restrict a site from using sensitive devices like the camera, microphone, or speakers.
- Allow iframes to use the [Fullscreen API](/en-US/docs/Web/API/Fullscreen_API).
- Stop items from being scripted if they are not visible in the viewport, to improve performance.

> **Note:** Permissions Policy used to be called Feature Policy. The name has changed, and so has the HTTP header syntax, so bear this in mind if you have used Feature Policy in the past, and check the browser support tables. The `<iframe allow=" ... ">` syntax has stayed the same.

## Concepts and usage

The web provides functionality and APIs that may have privacy or security risks if abused. In such cases, you may wish to strictly limit how functionality is used on a website. In each case, there should be an intuitive or non-breaking way for web developers to detect and handle cases where a feature is disabled.

Some approaches include:

- "Permission denied" is returned for JavaScript APIs that require user permission grants.
- JavaScript APIs that provide access to features return `false` values or throw an error.
- APIs are not even exposed, as though they don't exist.
- Options that control the feature behavior have different default values.

> **Note:** Newly-introduced features may have an explicit API to signal the state. Existing features that later integrate with Permissions Policy will typically use existing mechanisms.

Permissions Policy allows you to control which origins can use which features, both on the top-level page and in embedded {{htmlelement("iframe")}}s. The aim is to enforce best practices for good user experiences and provide granular control over _sensitive_ or _powerful_ features (meaning features that a user is required to give express permission for usage of, before related code can be executed).

Permissions Policy provides two ways to specify policies:

- The {{httpheader("Permissions-Policy")}} HTTP header, to control feature usage in received responses and any embedded content within the page (which includes {{htmlelement("iframe")}}s).
- The {{htmlelement("iframe")}} [`allow`](/en-US/docs/Web/HTML/Element/iframe#attributes) attribute, to control feature usage only in specific {{htmlelement("iframe")}}s.

These are separate but related — see [Inheritance of policies for embedded content](#inheritance_of_policies_for_embedded_content) for details.

> **Note:** Scripts can programmatically query information about the permission policy via the {{DOMxRef("FeaturePolicy")}} object located at either {{DOMxRef("Document.featurePolicy")}} or {{DOMxRef("HTMLIFrameElement.featurePolicy")}}.

To control each feature, you write a policy that consists of:

- A **directive** that identifies the name of the feature to control. See the [list of the different available directives](/en-US/docs/Web/HTTP/Headers/Permissions-Policy#directives).
- An **allowlist**, which is a list of origins that the feature should be controlled in. You can enable a feature for all or specific origins, or block its usage in all origins.

See below for multiple examples.

## Relationship with the Permissions API

Permissions Policy and the {{domxref("Permissions API", "Permissions API", "", "nocode")}} are closely-related, but different. The features that have their permissions controlled by both these technologies overlap.

- Permissions Policy allows a server to set whether a feature can be used in a particular document (or embedded `<frame>`s within it). These are referred to as **policy-controlled** features — see the [list of Permissions Policy directives](/en-US/docs/Web/HTTP/Headers/Permissions-Policy#directives).
- The Permissions API gates access to features based on user-granted permissions. These features are recorded in the [Permissions Registry](https://w3c.github.io/permissions-registry/).

The identifying string used for each feature is kept consistent across both, for example, `geolocation` for the {{domxref("Geolocation API", "Geolocation API", "", "nocode")}}. Most of the API features in the Permissions Registry also have a corresponding Permissions Policy directive. One exception is the {{domxref("Notifications API", "Notifications API", "", "nocode")}}.

Generally when a Permissions Policy blocks the use of a powerful feature, the user won't even be asked for permission to use it, and the Permissions API {{domxref("Permissions.query", "query()")}} method will return a {{domxref("PermissionStatus.state", "state")}} value of `denied`.

See also [Permissions > Relationship to the Permissions Policy specification](https://w3c.github.io/permissions/#relationship-to-permissions-policy).

## allowlists

An allowlist is a list of origins that takes one or more of the following values contained in parentheses, separated by spaces:

- `*`: The feature will be allowed in this document, and all nested browsing contexts (`<iframe>`s) regardless of their origin.
- `()` (empty allowlist): The feature is disabled in top-level and nested browsing contexts. The equivalent for `<iframe>` `allow` attributes is `'none'`.
- `self`: The feature will be allowed in this document, and in all nested browsing contexts (`<iframe>`s) in the same origin only. The feature is not allowed in cross-origin documents in nested browsing contexts. `self` can be considered shorthand for `https://your-site.example.com`. The equivalent for `<iframe>` `allow` attributes is `self`.
- `src`: The feature will be allowed in this `<iframe>`, as long as the document loaded into it comes from the same origin as the URL in its {{HTMLElement('iframe','src','#Attributes')}} attribute. This value is only used in the `<iframe>` `allow` attribute, and is the _default_ `allowlist` value in `<iframe>`s.
- `"<origin>"`: The feature is allowed for specific origins (for example, `"https://a.example.com"`). Origins should be separated by spaces. Note that origins in `<iframe>` allow attributes are not quoted.

The values `*` and `()` may only be used on their own, while `self` and `src` may be used in combination with one or more origins.

> **Note:** Directives have a default allowlist, which is always one of `*`, `self`, or `none` for the `Permissions-Policy` HTTP header, and governs the default behavior if they are not explicitly listed in a policy. These are specified on the individual [directive reference pages](/en-US/docs/Web/HTTP/Headers/Permissions-Policy#directives). For `<iframe>` `allow` attributes , the default behavior is always `src`.

Where supported, you can include wildcards in Permissions Policy origins. This means that instead of having to explicitly specify several different subdomains in an allowlist, you can specify them all in a single origin with a wildcard.

So instead of

```http
("https://example.com" "https://a.example.com" "https://b.example.com" "https://c.example.com")
```

You can specify

```http
("https://example.com" "https://*.example.com")
```

> **Note:** `"https://*.example.com"` does not match `"https://example.com"`.

allowlist examples:

- `*`
- `()`
- `(self)`
- `(src)`
- `("https://a.example.com")`
- `("https://a.example.com" "https://b.example.com")`
- `(self "https://a.example.com" "https://b.example.com")`
- `(src "https://a.example.com" "https://b.example.com")`
- `("https://*.example.com")`

## Permissions-Policy header syntax

The general syntax looks like this:

```http
Permissions-Policy: <directive>=<allowlist>
```

So for example to block all access to geolocation, you would do this:

```http
Permissions-Policy: geolocation=()
```

Or to allow access to a subset of origins, you'd do this:

```http
Permissions-Policy: geolocation=(self "https://a.example.com" "https://b.example.com")
```

Several features can be controlled at the same time by sending the header with a comma-separated list of policies, or by sending a separate header for each policy.

For example, the following are equivalent:

```http
Permissions-Policy: picture-in-picture=(), geolocation=(self https://example.com), camera=*;

Permissions-Policy: picture-in-picture=()
Permissions-Policy: geolocation=(self https://example.com)
Permissions-Policy: camera=*
```

## iframe syntax

For an `<iframe>` to have a feature enabled its allowed origin must also be in the allowlist for the parent page. Because of this [inheritance behavior](#inheritance_of_policies_for_embedded_content), it is a good idea to specify the widest acceptable support for a feature in the HTTP header, and then specify the subset of support you need in each `<iframe>`.

The general syntax looks like this:

```html
<iframe src="<origin>" allow="<directive> <allowlist>"></iframe>
```

So for example to block all access to geolocation, you would do this:

```html
<iframe src="https://example.com" allow="geolocation 'none'"></iframe>
```

To apply a policy to the current origin and others, you'd do this:

```html
<iframe
  src="https://example.com"
  allow="geolocation 'self' https://a.example.com https://b.example.com"></iframe>
```

This is important: By default, if an `<iframe>` navigates to another origin, the policy is not applied to the origin that the `<iframe>` navigates to. By listing the origin that the `<iframe>` navigates to in the `allow` attribute, the Permissions Policy that was applied to the original `<iframe>` will be applied to the origin the `<iframe>` navigates to.

Several features can be controlled at the same time by including a semi-colon-separated list of policy directives inside the `allow` attribute.

```html
<iframe
  src="https://example.com"
  allow="geolocation 'self' https://a.example.com https://b.example.com; fullscreen 'none'"></iframe>
```

It is worth giving the `src` value a special mention. We mentioned above that using this allowlist value will mean that the associated feature will be allowed in this `<iframe>`, as long as the document loaded into it comes from the same origin as the URL in its {{HTMLElement('iframe','src','#Attributes')}} attribute. This value is the _default_ `allowlist` value for features listed in `allow`, so the following are equivalent:

```html
<iframe src="https://example.com" allow="geolocation 'src'">
  <iframe src="https://example.com" allow="geolocation"></iframe
></iframe>
```

> **Note:** As you'll have noticed, the syntax for `<iframe>` policies is a bit different to the syntax for `Permissions-Policy` headers. The former still uses the same syntax as the older Feature Policy specification, which was superseded by Permissions Policy.

## Inheritance of policies for embedded content

Scripts inherit the policy of their browsing context, regardless of their origin. That means that top-level scripts inherit the policy from the main document.

All `<iframe>`s inherit the policy of their parent page. If the `<iframe>` has an `allow` attribute _and_ the parent page has a {{HTTPHeader("Permissions-Policy")}}, the policies of the parent page and the `allow` attribute are combined, using the most restrictive subset. For an `<iframe>` to have a feature enabled, the origin must be in the allowlist for both the parent page and the `allow` attribute.

Disabling a feature in a policy is a one-way toggle. If a feature has been disabled for a child frame by its parent frame, the child cannot re-enable it, and neither can any of the child's descendants.

## Examples

### Combining HTTP header and `<iframe>` policies

For example, let's say that we wanted to enable geolocation usage on our own origin, and in embedded content coming from our trusted ad network. We could set up the page-wide Permissions Policy like this:

```http
Permissions-Policy: geolocation=(self https://trusted-ad-network.com)
```

Over in our ad `<iframe>`s, we could set access to the `https://trusted-ad-network.com` origin like this:

```html
<iframe src="https://trusted-ad-network.com" allow="geolocation"></iframe>
```

If a different origin ended up getting loaded into `<iframe>`, it would not have access to geolocation:

```html
<iframe src="https://rogue-origin-example.com" allow="geolocation"></iframe>
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{HTTPHeader("Permissions-Policy")}} HTTP header
- {{HTMLElement("iframe", "allow", "#Attributes")}} attribute on iframes
- [Controlling browser features with Permissions Policy](https://developer.chrome.com/en/docs/privacy-sandbox/permissions-policy/): use guide that also contains several demo links.
- [Permissions/Feature policies on chromestatus.com](https://chromestatus.com/features#component%3A%20Blink%3EFeaturePolicy)
- [Privacy, permissions, and information security](/en-US/docs/Web/Privacy)
