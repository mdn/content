---
title: Sec-Speculation-Tags
slug: Web/HTTP/Reference/Headers/Sec-Speculation-Tags
page-type: http-header
status:
  - experimental
browser-compat: http.headers.Sec-Speculation-Tags
---

{{HTTPSidebar}}{{SeeCompatTable}}

The HTTP **`Sec-Speculation-Tags`** {{Glossary("request header")}} provides one or `tag` values from the [speculation rules](/en-US/docs/Web/API/Speculation_Rules_API) which would have resulted in the speculation. This allows a server to identify which rule(s) covered the speculation and potentially block the speculations.

For example, a CDN may automatically insert speculation rules, but to avoid unintended consequences block speculations for resources that are not cached in the CDN. The `Sec-Speculation-Tags` allows the CDN to differentiate between the rules it has inserted (which should be blocked in this case), and speculation rules added by the site owner (which should not be blocked).

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
Speculation-Rules: <tag-list>
```

## Directives

- `<tag-list>`
  - : A comma-separated list of tags indicating [Speculation Rules API](/en-US/docs/Web/API/Speculation_Rules_API) rules that may have initiated this request. See [Speculation rules JSON representation](/en-US/docs/Web/HTML/Element/script/type/speculationrules#speculation_rules_json_representation) for the syntax reference.

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

If a speculation happens from speculation rule with no tag then `null` is sent in the `Speculation-Rules` header.

```http
Speculation-Rules: null
```

### Speculation from a rule with a tag

```html
<script type="speculationrules">
  {
    "prefetch": [
      {
        "tag": "my-rules",
        "urls": ["next.html", "next2.html"]
      }
    ]
  }
</script>
```

If a speculation happens from speculation rule with a tag then the tag name is sent in the `Speculation-Rules` header.

```http
Speculation-Rules: "my-rules"
```

### Speculation from multiple rules

```html
<script type="speculationrules">
  {
    "prefetch": [
      {
        "tag": "my-rules",
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
        "tag": "cdn-rules",
        "urls": ["next.html", "next.html"],
        "eagerness": "conservative"
      }
    ]
  }
</script>
```

If a speculation is triggered by multiple speculation rules then all tags will be included. For example if the speculation is initiated with the by hovering over the link (`"eagerness": "moderate"`), then only the `my-rules` tag will be sent:

```http
Speculation-Rules: "my-rules"
```

But if the link is clicked immeadiately, without waiting for the 200 milliseconds hover, then both rules would have triggered a speculation so both tags will be includes in the header:

```http
Speculation-Rules: "my-rules" "cdn-rules"
```

### Speculation from multiple rules wiht and without tags

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
        "tag": "cdn-rules",
        "urls": ["next.html", "next.html"],
        "eagerness": "conservative"
      }
    ]
  }
</script>
```

Similar to the previous example, if the link is clicked immeadiately, without waiting for the 200 milliseconds hover, then both rules would have triggered a speculation so both tags will be includes in the header and `null` will be sent for any rules without a tag:

```http
Speculation-Rules: null "cdn-rules"
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Speculation Rules API](/en-US/docs/Web/API/Speculation_Rules_API)
- [`<script type="speculationrules">`](/en-US/docs/Web/HTML/Element/script/type/speculationrules)
