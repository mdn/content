---
title: <script type="speculationrules">
slug: Web/HTML/Element/script/type/speculationrules
page-type: html-attribute-value
status:
  - experimental
browser-compat: html.elements.script.type.speculationrules
---

{{HTMLSidebar}}{{SeeCompatTable}}

The **`speculationrules`** value of the [`type`](/en-US/docs/Web/HTML/Element/script/type) attribute of the [`<script>` element](/en-US/docs/Web/HTML/Element/script) indicates that the body of the element contains speculation rules.

Speculation rules take the form of a JSON structure that determine what resources should be prefetched or prerendered by the browser. This is part of the {{domxref("Speculation Rules API", "", "", "nocode")}}.

## Syntax

```html
<script type="speculationrules">
  // JSON object defining rules
</script>
```

> **Note:** The `src`, `async`, `nomodule`, `defer`, `crossorigin`, `integrity`, and `referrerpolicy` attributes must not be specified.

### Exceptions

- `TypeError`
  - : The speculation rules definition is not a valid JSON object.

## Description

A `<script type="speculationrules">` element must contain a valid JSON structure that defines speculation rules. The following examples show separate prefetch and prerender rules:

```html
<script type="speculationrules">
  {
    "prefetch": [
      {
        "source": "list",
        "urls": ["next.html", "next2.html"],
        "requires": ["anonymous-client-ip-when-cross-origin"],
        "referrer_policy": "no-referrer"
      }
    ]
  }
</script>
```

```html
<script type="speculationrules">
  {
    "prerender": [
      {
        "source": "list",
        "urls": ["next3.html", "next4.html"]
      }
    ]
  }
</script>
```

### Speculation rules JSON representation

The JSON structure contains one or more fields at the top level, each one representing an action to define speculation rules for. At present the supported actions are:

- `"prefetch"` {{optional_inline}} {{experimental_inline}}
  - : Rules for potential future navigations that should have their associated document response body downloaded, leading to significant performance improvements when those documents are navigated to. Note that none of the subresources referenced by the page are downloaded.
- `"prerender"` {{optional_inline}} {{experimental_inline}}
  - : Rules for potential future navigations that should have their associated documents fully downloaded, rendered, and loaded into an invisible tab. This includes loading all subresources, running all JavaScript, and even loading subresources and performing data fetches started by JavaScript. When those documents are navigated to, navigations will be instant, leading to major performance improvements.

> **Note:** Consult the [Speculation Rules API](/en-US/docs/Web/API/Speculation_Rules_API) main page for full details on how to use prefetch and prerender effectively.

Each action field contains an array, which in turn contains one or more objects. Each object contains a single rule defining a set of URLs and related parameters.

Specifically, each object can contain the following properties:

- `"source"`
  - : A string representing the source of the URLs to which the rule applies. Possible values are:
    - `"list"`
      - : Denotes that the URLs will come from a specific list.
- `"urls"`
  - : An array of strings representing the list of URLs to apply the rule to. These can be absolute or relative URLs. Relative URLs will be parsed relative to the document base URL (if inline in a document) or relative to the external resource URL (if externally fetched).
- `"requires"` {{optional_inline}} {{experimental_inline}}

  - : An array of strings representing capabilities of the browser parsing the rule, which must be available if the rule is to be applied to the specified URLs.

    > **Warning:** Prefetches will automatically fail in browsers that cannot meet a specified requirement, even if they support the [Speculation Rules API](/en-US/docs/Web/API/Speculation_Rules_API).

    Possible values are:

    - `"anonymous-client-ip-when-cross-origin"`
      - : `"prefetch"`-only. Specifies that the rule matches only if the user agent can prevent the client IP address from being visible to the origin server if a cross-origin prefetch request is issued. Exactly how this works is dependent on browser implementation specifics. For example:
        - Chrome's implementation hides the IP address using a Google-owned proxy, therefore by default it only works for Google-controlled referrers (since in that case, sending the URLs of the destination to Google is not an additional privacy leak). When used on a non-Google-owned site, rules that include this will only match for users that turn on "Enhanced preloading" in `chrome://settings/preloading`.
        - Other Chromium-based browsers will have to provide their own solutions. Thorough testing in all target browsers is advised.
        - A future Safari implementation may possibly use something along the lines of [iCloud Private Relay](https://support.apple.com/en-us/102602).
        - A future Firefox implementation might use something based on the [Mozilla VPN](https://www.mozilla.org/en-US/products/vpn/) product.

- `"referrer_policy"` {{optional_inline}} {{experimental_inline}}
  - : A string representing a specific referrer policy string to use when requesting the URLs specified in the rule — see [`Referrer-Policy`](/en-US/docs/Web/HTTP/Headers/Referrer-Policy) for possible values. The purpose of this is to allow the referring page to set a stricter policy specifically for the speculative request than the policy the page already has set (either by default, or by using `Referrer-Policy`). A laxer policy set in the speculation rules will not override a stricter policy set on the referring page.

> **Note:** As speculation rules use a `<script>` element, they need to be explicitly allowed in the [`Content-Security-Policy`](/en-US/docs/Web/HTTP/Headers/Content-Security-Policy) [`script-src`](/en-US/docs/Web/HTTP/Headers/Content-Security-Policy/script-src) directive if the site includes it. This is done by adding the `"inline-speculation-rules"` value along with a hash- or nonce-source.

### Further examples

The earlier examples showed separate speculation rules defined for prefetch and prerender. It is possible to define both in a single set of rules:

```html
<script type="speculationrules">
  {
    "prefetch": [
      {
        "source": "list",
        "urls": ["next.html", "next2.html"],
        "requires": ["anonymous-client-ip-when-cross-origin"],
        "referrer_policy": "no-referrer"
      }
    ],
    "prerender": [
      {
        "source": "list",
        "urls": ["next3.html", "next4.html"]
      }
    ]
  }
</script>
```

It is also allowable to include multiple sets of rules in a single HTML file:

```html
<script type="speculationrules">
  {
    "prefetch": [
      {
        "source": "list",
        "urls": ["next.html", "next2.html"],
        "requires": ["anonymous-client-ip-when-cross-origin"],
        "referrer_policy": "no-referrer"
      }
    ]
  }
</script>
<script type="speculationrules">
  {
    "prerender": [
      {
        "source": "list",
        "urls": ["next3.html", "next4.html"]
      }
    ]
  }
</script>
```

And multiple rules in a single result set:

```js
<script type="speculationrules">
{
  "prerender": [
    {
      "source": "list",
      "urls": ["one.html"]
    },
    {
      "source": "list",
      "urls": ["two.html"]
    }
  ]
}
</script>
```

### Dynamic rule insertion

Below is an example that feature detects speculation rules and, if supported, dynamically adds a prerender speculation rule via JavaScript:

```js
if (
  HTMLScriptElement.supports &&
  HTMLScriptElement.supports("speculationrules")
) {
  const specScript = document.createElement("script");
  specScript.type = "speculationrules";
  const specRules = {
    prerender: [
      {
        source: "list",
        urls: ["/next.html"],
      },
    ],
  };
  specScript.textContent = JSON.stringify(specRules);
  console.log("added speculation rules to: next.html");
  document.body.append(specScript);
}
```

You can see this in action in this [prerender demos](https://prerender-demos.glitch.me/) page.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Prerender pages in Chrome for instant page navigations](https://developer.chrome.com/blog/prerender-pages/) on developer.chrome.com (2023)
- [Speculative loading](/en-US/docs/Web/Performance/Speculative_loading)
- [Speculation Rules API](/en-US/docs/Web/API/Speculation_Rules_API)
