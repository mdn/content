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

> [!NOTE]
> Speculation rules can be defined inside external text files referenced by the {{httpheader("Speculation-Rules")}} HTTP header, using the same [JSON representation provided below](#speculation_rules_json_representation). Specifying an HTTP header is useful in cases where developers are not able to directly modify the document itself.

## Syntax

```html
<script type="speculationrules">
  // JSON object defining rules
</script>
```

> [!NOTE]
> The `src`, `async`, `nomodule`, `defer`, `crossorigin`, `integrity`, and `referrerpolicy` attributes must not be specified.

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
        "where": { "href_matches": "/next" },
        "eagerness": "eager"
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

> [!NOTE]
> Consult the [Speculation Rules API](/en-US/docs/Web/API/Speculation_Rules_API) main page for full details on how to use prefetch and prerender effectively.

Each action field contains an array, which in turn contains one or more objects. Each object contains a single rule defining a set of URLs and related parameters.

Each object can contain the following properties:

- `"source"`

  - : A string indicating the source of the URLs to which the rule applies. This is optional because the value can always be inferred from other properties.

    This can be one of:

    - `"document"`
      - : Specifies that the URLs will be matched from navigation links in the associated document (as defined in {{htmlelement("a")}} and {{htmlelement("area")}} elements), based on the conditions described by a `"where"` key. Note that the presence of a `"where"` key implies `"source": "document"`, so it is optional.
    - `"list"`
      - : Specifies that the URLs will come from a list, specified in the `"urls"` key. Note that the presence of a `"urls"` key implies `"source": "list"`, so it is optional.

- `"urls"` {{experimental_inline}}

  - : An array of strings representing a list of URLs to apply the rule to. These can be absolute or relative URLs. Relative URLs will be parsed relative to the document base URL (if inline in a document) or relative to the external resource URL (if externally fetched). `"urls"` and `"where"` cannot both be set in the same rule.

- `"where"` {{experimental_inline}}

  - : An object representing the conditions by which the rule matches URLs contained in the associated document. Effectively, the `"where"` object represents a test that is performed on every link on the page to see whether the speculation rule is applied to it. `"where"` and `"urls"` cannot both be set in the same rule.

    This object can contain exactly one of the following properties:

    - `"href_matches"`
      - : A string containing a URL pattern, or an array containing multiple URL pattern strings, which follow the standard [URL Pattern API syntax](/en-US/docs/Web/API/URL_Pattern_API). Links in the document whose URLs match the pattern(s) will have the rule applied.
    - `"relative_to"`
      - : In the case of an `"href_matches"` condition, this can specify where you want that condition to be matched relative to. This works in exactly the same way as the [rule-level `"relative_to"` key](#relative_to_2), except that it only affects a single `"href_matches"` condition inside a `"where"` key.
    - `"selector_matches"`
      - : A string containing a [CSS selector](/en-US/docs/Web/CSS/CSS_selectors), or an array containing multiple CSS selectors. Links in the document matched by those selectors will have the rule applied.
    - `"and"`
      - : An array containing one or more objects containing conditions (`"href_matches"`, `"selector_matches"`, `"and"`, `"not"`, or `"or"`), all of which must match for the rule to be applied to them.
    - `"not"`
      - : An object containing one condition (`"href_matches"`, `"selector_matches"`, `"and"`, `"not"`, or `"or"`) which, if it matches, will _not_ have the rule applied to it. All links that _do not_ match the condition _will_ have the rule applied.
    - `"or"`
      - : An array containing one or more objects containing conditions (`"href_matches"`, `"selector_matches"`, `"and"`, `"not"`, or `"or"`), any of which can match for the rule to be applied to them.

    `"where"` conditions can be nested multiple levels deep to create complex conditions, or you can choose to split them into separate rules to keep them simple. See [where examples](#where_syntax_examples) for more explanation, and multiple examples of use.

- `"eagerness"` {{experimental_inline}}

  - : A string providing a hint to the browser as to how eagerly it should prefetch/prerender link targets in order to balance performance advantages against resource overheads. Possible values are:

    - `"immediate"`
      - : The author thinks the link is very likely to be followed, and/or the document may take significant time to fetch. Prefetch/prerender should start as soon as possible, subject only to considerations such as user preferences and resource limits.
    - `"eager"`
      - : The author wants to prefetch/prerender a large number of navigations, as early as possible. Prefetch/prerender should start on any slight suggestion that a link may be followed. For example, the user could move their mouse cursor towards the link, hover/focus it for a moment, or pause scrolling with the link in a prominent place.
    - `"moderate"`
      - : The author is looking for a balance between `eager` and `conservative`. Prefetch/prerender should start when there is a reasonable suggestion that the user will follow a link in the near future. For example, the user could scroll a link into the viewport and hover/focus it for some time.
    - `"conservative"`
      - : The author wishes to get some benefit from speculative loading with a fairly small tradeoff of resources. Prefetch/prerender should start only when the user is starting to click on the link, for example on {{domxref("Element.mousedown_event", "mousedown")}} or {{domxref("Element.pointerdown_event", "pointerdown")}}.

    If `"eagerness"` is not explicitly specified, list (`"urls"`) rules default to `immediate` and document (`"where"`) rules default to `conservative`. The browser takes this hint into consideration along with its own heuristics, so it may select a link that the author has hinted as less eager than another, if the less eager candidate is considered a better choice.

- `"expects_no_vary_search"` {{experimental_inline}}

  - : A string providing a hint to the browser as to what {{httpheader("No-Vary-Search")}} header value will be set on responses for documents that it is receiving prefetch/prerender requests for. The browser can use this to determine ahead of time whether it is more useful to wait for an existing prefetch/prerender to finish, or start a new fetch request when the speculation rule is matched. See the [`"expects_no_vary_search"` example](#expects_no_vary_search_example) for more explanation of how this can be used.

- `"referrer_policy"` {{experimental_inline}}

  - : A string representing a specific referrer policy string to use when requesting the URLs specified in the rule — see [`Referrer-Policy`](/en-US/docs/Web/HTTP/Headers/Referrer-Policy) for possible values. The purpose of this is to allow the referring page to set a stricter policy specifically for the speculative request than the policy the page already has set (either by default, or by using `Referrer-Policy`).

    > [!NOTE]
    > A cross-site prefetch requires a referrer policy that is at least as strict as the default `"strict-origin-when-cross-origin"` value — so `"strict-origin-when-cross-origin"`, `"same-origin"`, `"strict-origin"`, or `"no-referrer"`. A laxer policy set in the speculation rules will override a stricter policy set on the referring page as long as it is still sufficiently strict for the cross-site case.

    > [!NOTE]
    > In the case of document rules, the matched link's specified referrer policy (e.g. using the [`referrerpolicy`](/en-US/docs/Web/HTML/Element/a#referrerpolicy) attribute) will be used, unless the rule specifies a policy that overrides it.

- `"relative_to"` {{experimental_inline}}

  - : A string specifying where you want links matched by URL to be matched relative to. The value can be one of:

    - `document`
      - : URLs should be matched relative to the document the speculation rules are being set on.
    - `ruleset`
      - : URLs should be matched relative to the file the rules are specified in. This is the default value.

    This key setting is only relevant for rules defined in an external file (set using the {{httpheader("Speculation-Rules")}} header). When rules are specified inside the same document they are being set for (i.e. in an inline `<script>` element), it makes no difference.

- `"requires"` {{experimental_inline}}

  - : An array of strings representing capabilities of the browser parsing the rule, which must be available if the rule is to be applied to the specified URLs.

    > [!WARNING]
    > Prefetches will automatically fail in browsers that cannot meet a specified requirement, even if they support the [Speculation Rules API](/en-US/docs/Web/API/Speculation_Rules_API).

    Possible values are:

    - `"anonymous-client-ip-when-cross-origin"`
      - : (prefetch-only) Specifies that the rule matches only if the user agent can prevent the client IP address from being visible to the origin server if a cross-origin prefetch request is issued. Exactly how this works is dependent on browser implementation specifics. For example:
        - Chrome's implementation hides the IP address using a Google-owned proxy, therefore by default it only works for Google-controlled referrers (since in that case, sending the URLs of the destination to Google is not an additional privacy leak). When used on a non-Google-owned site, rules that include this will only match for users that turn on "Enhanced preloading" in `chrome://settings/preloading`.
        - Other Chromium-based browsers will have to provide their own solutions. Thorough testing in all target browsers is advised.
        - A future Safari implementation may possibly use something along the lines of [iCloud Private Relay](https://support.apple.com/en-us/102602).
        - A future Firefox implementation might use something based on the [Mozilla VPN](https://www.mozilla.org/en-US/products/vpn/) product.

> [!NOTE]
> As speculation rules use a `<script>` element, they need to be explicitly allowed in the [`Content-Security-Policy`](/en-US/docs/Web/HTTP/Headers/Content-Security-Policy) [`script-src`](/en-US/docs/Web/HTTP/Headers/Content-Security-Policy/script-src) directive if the site includes it. This is done by adding the `"inline-speculation-rules"` value along with a hash- or nonce-source.

## Examples

### Prefetch and prerender in the same set of rules

The basic examples shown in the description section included separate speculation rules defined for prefetch and prerender. It is possible to define both in a single set of rules:

```html
<script type="speculationrules">
  {
    "prefetch": [
      {
        "urls": ["next.html", "next2.html"],
        "requires": ["anonymous-client-ip-when-cross-origin"],
        "referrer_policy": "no-referrer"
      }
    ],
    "prerender": [
      {
        "where": { "selector_matches": ".product-link" },
        "eagerness": "eager"
      }
    ]
  }
</script>
```

> [!NOTE]
> This code snippet provides a list (`"urls"`) rule and a document (`"where"`) rule example.

### Multiple rule sets

It is also allowable to include multiple sets of rules in a single HTML file:

```html
<script type="speculationrules">
  {
    "prefetch": [
      {
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
        "where": { "selector_matches": ".product-link" },
        "eagerness": "eager"
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
      "urls": ["one.html"]
    },
    {
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

### `where` syntax examples

A document-sourced rule contains a `"where"` property, which is an object containing criteria that define which links in the document are matched. Effectively, the `"where"` object represents a test that is performed on every link on the page to see whether the speculation rule is applied to it.

The most basic version will match a single URL pattern or CSS selector:

```json
{ "where": { "href_matches": "/next" } }
```

```json
{ "where": { "selector_matches": ".important-link" } }
```

`"href_matches"` and `"selector_matches"` can also be set to an array of values, so multiple URL patterns or CSS selectors can be matched simultaneously:

```json
{ "where": { "href_matches": ["/next", "/profile"] } }
```

```json
{ "where": { "selector_matches": [".important-link", "#unique-link"] } }
```

URL patterns and selectors can also contain wildcard (`*`) characters, allowing a single value to match multiple URLs. For example, the object below could match `user/`, `user/settings`, `user/stats`, etc.

```json
{ "where": { "href_matches": "/user/*" } }
```

[Search parameters (or query strings)](/en-US/docs/Web/API/URL/search) can also be targeted in `href_matches`. For example, the object below could match all same-origin URLs with a `category` search parameter (as the first or a subsequent parameter):

```json
{ "where": { "href_matches": "/*\\?*(^|&)category=*" } }
```

Any condition can be negated by placing it inside a `"not"` condition — this means that, when matched, a link _won't_ have the speculation rule applied to it, but when _not_ matched, it _will_. The following example will cause all links that _don't_ match the URL pattern `/logout` to have the rule applied to them, but not links that match `/logout`:

```json
{ "where": { "not": { "href_matches": "/logout" } } }
```

#### Combining multiple `"where"` conditions with `"and"` or `"or"`

Multiple conditions can be combined inside `"and"` or `"or"` conditions — these take the value of arrays containing multiple conditions, all or any of which (respectively) have to match for the speculation rules to apply to a link. Using `"and"` or `"or"`, conditions can be nested multiple levels deep — there is no specified limit on allowed nesting levels.

It is useful to think of the `"where"` object as being equivalent to an `if` statement. So

```plain
{ and: [A, B, { or: [C, { not: D }] }] }
```

is equivalent to

```plain
if (A && B && (C || !D)) {
  apply speculation rule
}
```

In the following complete speculation rule example, all same-origin pages are marked for prefetching except those known to be problematic — the `/logout` page, and any links marked up with a class of `.no-prerender`:

```html
<script type="speculationrules">
  {
    "prefetch": [
      {
        "where": {
          "and": [
            { "href_matches": "/*" },
            { "not": { "href_matches": "/logout" } },
            { "not": { "selector_matches": ".no-prerender" } }
          ]
        }
      }
    ]
  }
</script>
```

> [!NOTE]
> The `where` pattern above does not include cross-site links, which are supported for prefetching (provided the user has no cookies set for the destination site, to protect against tracking) but not for prerendering.

### `"relative_to"` example

For rule sets that are externally fetched (i.e. via the {{httpheader("Speculation-Rules")}}) response header, URLs in list rules and URL patterns in document rules are parsed relative to the containing external text file's URL by default. To parse URLs in a list rule relative to the document's base URL, `"relative_to"` is used like this:

```json
{
  "urls": ["/home", "/about"],
  "relative_to": "document"
}
```

For document rules, `"relative_to"` can be paired directly with `"href_matches"` and the document's base URL would only be used for patterns in that particular condition:

```json
{
  "where": {
    "or": [
      { "href_matches": "/home", "relative_to": "document" },
      { "href_matches": "/about" }
    ]
  }
}
```

In the above example, only the first `"href_matches"` will be matched relative to the document's base URL.

`relative_to` is mainly relevant if the speculation rules JSON file is on a different origin to the document you wish to apply them to:

1. If the document is located at `https://example.com/some/subpage.html` and the rules are at `https://example.com/resources/rules.json`, then `/home` always equates to `https://example.com/home` regardless of whether `relative_to` is set to `document` or `ruleset`.

2. However, if the document is located at `https://example.com/some/subpage.html` and the rules are at `https://other.example/resources/rules.json` (for example, on a third-party or cookieless resource origin), then:

   - `"relative_to": "document"` will cause `/home` to equate to `https://example.com/home`.
   - `"relative_to": "ruleset"` will cause `/home` to equate to `https://other.example/home`.

   This is the typical use case for `"relative_to"`.

3. Another potential (but rarer) use case is when your URLs are specified in the form `home` instead of `/home`. If the document is located at `https://example.com/some/subpage.html` and the rules are at `https://example.com/resources/rules.json`, then:

   - `"relative_to": "document"` would cause `home` to equate to `https://example.com/some/home`.
   - `"relative_to": "ruleset"` would cause `home` to equate to `https://example.com/resources/home`.

### `"expects_no_vary_search"` example

Consider the case of a user directory landing page, `/users`, which has an `id` parameter added to bring up information on a specific user, for example `/users?id=345`. Whether this URL should be considered identical for caching purposes depends on the behavior of the application:

1. If this parameter has the effect of loading a completely new page containing the information for the specified user, then the URL should be cached separately.
2. If this parameter has the effect of highlighting the specified user on the same page, and perhaps revealing a pullout panel displaying their data, then the URL should be considered the same for caching purposes. This could result in performance improvements around the loading of the user pages and could be achieved via a {{httpheader("No-Vary-Search")}} with a value of `params=("id")`.

How does this affect speculation rules? Consider the following code:

```html
<script type="speculationrules">
  {
    "prefetch": [
      {
        "urls": ["/users"]
      }
    ]
  }
</script>
<a href="/users?id=345">User Bob</a>
```

What would happen in this case when the user starts a navigation to `/users?id=345` when the headers for the prefetch of `/users` have not been received yet? At this point, the browser doesn't know what the `No-Vary-Search` value will be, if anything. If there was no `No-Vary-Search` value set, and the application behavior was more like Option 1 above, the prefetch would be wasted and the browser would need to go and fetch the separate `/users?id=345` page from scratch.

To solve this, we can provide a hint as to what the page author expects the `No-Vary-Search` value to be. A speculation rule can have an `"expects_no_vary_search"` field, which contains a string representation of the expected header value:

```html
<script type="speculationrules">
  {
    "prefetch": [
      {
        "urls": ["/users"],
        "expects_no_vary_search": "params=(\"id\")"
      }
    ]
  }
</script>
<a href="/users?id=345">User Bob</a>
```

This indicates that Option 2 described above is what the server is expected to produce. If a navigation starts while there is an ongoing prefetch of `/users`, this informs the browser that it is appropriate to wait for the prefetch, instead of immediately starting another fetch for `/users?id=345`.

Document rules can also be used in conjunction with `"expects_no_vary_search"`, depending on the pattern used. For example, in the case of:

```html
<script type="speculationrules">
  {
    "prefetch": [
      {
        { "where": { "href_matches": "/users?id=*" } },
        "expects_no_vary_search": "params=(\"id\")"
      }
    ]
  }
</script>
<a href="/users?id=012">User Bill</a>
<a href="/users?id=345">User Bob</a>
<a href="/users?id=678">User Ben</a>
```

If a link is hovered over, the browser will start prefetching that specific link.

If the user hovers over another link before the prefetch completes, the `expects_no_vary_search` pattern tells the browser that there is no need to cancel the current prefetch, because all `/users` URLs with `id` URL parameter values effectively point to the same page for this context (and for caching purposes).

> [!WARNING]
> Additional care must be taken when using prerender with `No-Vary-Search` since the page may initially be prerendered with different URL parameters. `No-Vary-Search` is used for URL parameters that deliver the same resource from the server, but are used by the client for various reasons (client-side rendering, UTM parameters for analytics measurement, etc.). As the initial prerender may be for different URL parameters, any code depending on them should only run after prerender activation.

### `eagerness` example

The following set of document rules shows how `eagerness` can be used to hint at the eagerness with which the browser should prerender each matching set of links.

```html
<script type="speculationrules">
  {
    "prerender": [
      {
        "where": { "href_matches": "/*" },
        "eagerness": "conservative"
      },
      {
        "where": { "selector_matches": ".product-link" },
        "eagerness": "eager"
      }
    ]
  }
</script>
```

Here we are hinting that:

- All same-site links contained in the document should be conservatively prerendered (i.e. when the user starts to activate them).
- Any product links (in this case, those with a `class` of `.product-link`) in the document should be eagerly prerendered (i.e. if the user makes any kind of move towards navigating to them).

> [!NOTE]
> The effects of eagerness settings are less useful for list rules. By default, list rule URLs are prefetched/prerendered immediately as soon as the rules are parsed, which is what you'd expect — they are intended for explicit listing of high-priority URLs that you want to make available as soon as possible. For this reason, `eager` has the same effect as `immediate` in current implementations. Lower eagerness settings are for prefetching/prerendering when links are interacted with, and for these you are more likely to use document rules to find them on the page.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Prerender pages in Chrome for instant page navigations](https://developer.chrome.com/docs/web-platform/prerender-pages) on developer.chrome.com
- [Speculative loading](/en-US/docs/Web/Performance/Speculative_loading)
- [Speculation Rules API](/en-US/docs/Web/API/Speculation_Rules_API)
