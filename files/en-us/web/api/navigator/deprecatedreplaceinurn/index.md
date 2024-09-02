---
title: "Navigator: deprecatedReplaceInURN() method"
short-title: deprecatedReplaceInURN()
slug: Web/API/Navigator/deprecatedReplaceInURN
page-type: web-api-instance-method
status:
  - experimental
browser-compat: api.Navigator.deprecatedReplaceInURN
---

{{APIRef("Fenced Frame API")}}{{seecompattable}}

The **`deprecatedReplaceInURN()`** method of the {{domxref("Navigator")}} interface substitutes specified strings inside the mapped URL corresponding to a given opaque URN or `FencedFrameConfig`'s internal `url` property.

A `FencedFrameConfig` or opaque URN is returned from a source such as the [Protected Audience API](https://developers.google.com/privacy-sandbox/private-advertising/protected-audience) `runAdAuction()` method, and then set as the value of {{domxref("HTMLFencedFrameElement.config")}}. The content URL associated with the `FencedFrameConfig` or opaque URN is mapped to it internally by the browser, and can't be accessed via JavaScript.

However, you may wish to substitute parts of that internal URL. This is a common approach for passing runtime data into ad creatives to use in rendering. `deprecatedReplaceInURN()` has been made available as a temporary measure to enable that substitution for fenced frame URLs, helping ad tech providers to migrate existing implementations across to [privacy sandbox](https://developers.google.com/privacy-sandbox) APIs.

## Syntax

```js-nolint
deprecatedReplaceInURN(UrnOrConfig, replacements)
```

### Parameters

- `UrnOrConfig`
  - : A `FencedFrameConfig` object or a opaque URN for which you want to substitute parts of the corresponding internal URL.
- `replacements`
  - : An object containing one or more properties representing the substitutions you wish to make in the internal URL. Each property key is a URL subsection you wish to replace, and each property value is the string to replace it with. Note that:
    - The URL subsections to replace must be in one of the following formats:
      - `${string}`
      - `%%string%%`
    - If a URL subsection is in a correct format, but the subsection is not found in the URL, the returned promise still fulfills but no substitution is made.

### Return value

A {{jsxref("Promise")}} that fulfills with {{jsxref("undefined")}}.

### Exceptions

- `TypeError` {{domxref("DOMException")}}
  - : Thrown if:
    - `UrnOrConfig` is not a valid `FencedFrameConfig` object or opaque URN.
    - Any of the specified replacement keys do not match the allowed formats.

## Examples

The following call could be used to return an opaque URN:

```js
const exampleURN = await navigator.runAdAuction({
  ...auctionConfig,
  resolveToConfig: false,
});
```

You can then substitute URL subsections using a `deprecatedReplaceInURN()` call like the following:

```js
await navigator.deprecatedReplaceInURN(exampleURN, {
  "${foo}": "1",
  "${bar}": "2",
  "%%baz%%": "3",
});
```

If the internal URL associated with the URN is initially:

```http
https://example.com/a=${foo}&b=${bar}&c=%%baz%%
```

After the substitution it will become:

```http
https://example.com/a=1&b=2&c=3
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Fenced Frame API](/en-US/docs/Web/API/Fenced_frame_API)
