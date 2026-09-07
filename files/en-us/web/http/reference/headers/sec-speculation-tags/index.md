---
title: Sec-Speculation-Tags header
short-title: Sec-Speculation-Tags
slug: Web/HTTP/Reference/Headers/Sec-Speculation-Tags
page-type: http-header
status:
  - experimental
browser-compat: http.headers.Sec-Speculation-Tags
sidebar: http
---

{{SeeCompatTable}}

The HTTP **`Sec-Speculation-Tags`** {{Glossary("request header")}} contains one or more `tag` values from the [speculation rules](/en-US/docs/Web/API/Speculation_Rules_API) that resulted in the speculation. This allows a server to identify which rule(s) caused a speculation and potentially block them.

For example, a CDN may automatically insert speculation rules, but block speculations for resources not cached in the CDN to avoid unintended consequences. The `Sec-Speculation-Tags` header allows the CDN to differentiate between the rules it has inserted (which should be blocked in this case) and speculation rules added by the site owner (which should not be blocked).

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header type</th>
      <td>{{Glossary("Request header")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden request header")}}</th>
      <td>Yes (<code>Sec-</code> prefix)</td>
    </tr>
  </tbody>
</table>

## Syntax

```http
Sec-Speculation-Tags: <tag-list>
```

## Directives

- `<tag-list>`
  - : A comma-separated list of tags indicating [Speculation Rules API](/en-US/docs/Web/API/Speculation_Rules_API) rules that may have initiated this request. See [Speculation rules JSON representation](/en-US/docs/Web/HTML/Reference/Elements/script/type/speculationrules#speculation_rules_json_representation) for the syntax reference.

## Examples

### Speculation from a rule with no explicit tag

```html
<script type="speculationrules">
  {
    "prefetch": [
      {
        "urls": ["next.html", "next2.html"]
      }
    ]
  }
</script>
```

If a speculation happens due to a speculation rule with no tag, then `null` is sent in the `Sec-Speculation-Tags` header.

```http
Sec-Speculation-Tags: null
```

### Speculation from a rule with a tag

```html
<script type="speculationrules">
  {
    "prefetch": [
      {
        "tag": "my-rule",
        "urls": ["next.html", "next2.html"]
      }
    ]
  }
</script>
```

If a speculation happens due to a speculation rule with a tag, the tag name is sent in the `Sec-Speculation-Tags` header.

```http
Sec-Speculation-Tags: "my-rule"
```

### Speculation from a rule with multiple tags

The `tag` can be set at multiple levels:

```html
<script type="speculationrules">
  {
    "tag": "my-ruleset",
    "prefetch": [
      {
        "tag": "my-rule",
        "urls": ["next.html", "next2.html"]
      }
    ]
  }
</script>
```

All matching tags are sent in the `Sec-Speculation-Tags` header, so in this case, both `"my-ruleset"` and `"my-rule"` would be sent:

```http
Sec-Speculation-Tags: "my-ruleset", "my-rule"
```

### Speculation from multiple rules

```html
<script type="speculationrules">
  {
    "prefetch": [
      {
        "tag": "my-rule",
        "urls": ["next.html", "next2.html"],
        "eagerness": "moderate"
      }
    ]
  }
</script>
<script type="speculationrules">
  {
    "prefetch": [
      {
        "tag": "cdn-rule",
        "urls": ["next.html", "next.html"],
        "eagerness": "conservative"
      }
    ]
  }
</script>
```

In this example, if the speculation is initiated by the user hovering over the link for 200 milliseconds (`"eagerness": "moderate"`), then only the `my-rule` tag will be sent in the header:

```http
Sec-Speculation-Tags: "my-rule"
```

However, if the link is clicked immediately, without waiting for the 200 millisecond hover, then both rules would have triggered a speculation, therefore both tags will be included in the header:

```http
Sec-Speculation-Tags: "my-rule", "cdn-rule"
```

### Speculation from multiple rules with and without tags

```html
<script type="speculationrules">
  {
    "prefetch": [
      {
        "urls": ["next.html", "next2.html"],
        "eagerness": "moderate"
      }
    ]
  }
</script>
<script type="speculationrules">
  {
    "prefetch": [
      {
        "tag": "cdn-rule",
        "urls": ["next.html", "next.html"],
        "eagerness": "conservative"
      }
    ]
  }
</script>
```

Similar to the previous example, if the link is clicked immediately without waiting for the 200 millisecond hover, both rules would have triggered a speculation, therefore both tags will be included in the header. However, because the first rule does not include a `tag` field, it is represented in the header with a `null` value:

```http
Sec-Speculation-Tags: null, "cdn-rule"
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Speculation Rules API](/en-US/docs/Web/API/Speculation_Rules_API)
- [`<script type="speculationrules">`](/en-US/docs/Web/HTML/Reference/Elements/script/type/speculationrules)
