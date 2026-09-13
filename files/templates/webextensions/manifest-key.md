---
title: key_name
slug: Mozilla/Add-ons/WebExtensions/manifest.json/key_name
page-type: webextension-manifest-key
# Add status if the key is deprecated or experimental, otherwise remove the status field
status:
  - deprecated
  - experimental
browser-compat: webextensions.manifest.key_name
sidebar: addonsidebar
---

<!-- If this manifest key is experimental, include the following macro -->

{{SeeCompatTable}}

<!-- If this manifest key is deprecated, include a warning with replacement info -->

> [!WARNING]
> This manifest key is deprecated. Use [`replacement_key`](/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/replacement_key) instead.

<!-- Write one or two sentences describing what the manifest key is used for. Use the backtick-quoted key name as the subject. -->

The `key_name` manifest key is used to …

## Syntax

<!-- Show one or more representative usages of the key. -->
<!-- For simple keys (string, boolean, array of strings), simplify this to just "key_name": "value" and remove the object form. -->

```json-nolint
"key_name": {
  "property": "value",
  "other_property": "value"
}
```

### Values

<!-- Describe the key's value using a definition list. -->
<!-- For simple keys, replace the object description and nested properties below with a direct description, e.g.: -->
<!--   - `key_name`                        -->
<!--     - : A string that specifies …     -->

- `key_name`
  - : An object that specifies … It can have the following properties:
    - `property`
      - : A string that … This property is required.
    - `other_property` {{optional_inline}}
      - : A string that …

## Description

<!-- Add a detailed description of what the key does, how it interacts with other keys or APIs, its default behavior, etc. -->
<!-- This section can be omitted for simple keys where the introduction and syntax are sufficient. -->
<!-- Note the manifest version(s) this key applies to, e.g.: "This key is available in Manifest V3 and later." -->
<!-- Note whether the key is required or optional. -->

## Examples

### Example title

<!-- Provide one or more realistic manifest snippets. Each example must have an H3 heading with a descriptive title. -->

```json
{
  "key_name": {
    "property": "value"
  }
}
```

## Example extensions

<!-- If there are relevant complete extensions in the webextensions-examples repo, list them here -->
<!-- Remove this section if there are no relevant example extensions -->

- [example-extension-name](https://github.com/nicolo-ribaudo/webextensions-examples/tree/main/example-extension-name)

## Browser compatibility

{{Compat}}

<!-- Add see also links as appropriate -->

## See also

- [Related manifest key](/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/…)
- [Related API](/en-US/docs/Mozilla/Add-ons/WebExtensions/API/…)
