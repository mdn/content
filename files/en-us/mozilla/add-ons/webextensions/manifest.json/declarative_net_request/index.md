---
title: declarative_net_request
slug: Mozilla/Add-ons/WebExtensions/manifest.json/declarative_net_request
browser-compat: webextensions.manifest.declarative_net_request
---

{{AddonSidebar}}

<table class="fullwidth-table standard-table">
  <tbody>
    <tr>
      <th scope="row">Type</th>
      <td><code>Object</code></td>
    </tr>
    <tr>
      <th scope="row">Mandatory</th>
      <td>No</td>
    </tr>
    <tr>
      <th scope="row">Manifest version</th>
      <td>2</td>
    </tr>
    <tr>
      <th scope="row">Example</th>
      <td>
        <pre class="brush: json">
"declarative_net_request" : {
  "rule_resources" : [{
    "id": "ruleset",
    "enabled": true,
    "path": "rules.json"
  }]
}</pre
        >
      </td>
    </tr>
  </tbody>
</table>

Specify static rulesets for use with {{WebExtAPIRef("declarativeNetRequest")}}.

## Syntax

The `"declarative_net_request"` key is an object that must contain the `"rule_resources"` property, an array that must include at least one object with these properties:

<table class="fullwidth-table standard-table">
  <thead>
    <tr>
      <th scope="col">Name</th>
      <th scope="col">Type</th>
      <th scope="col">Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>"id"</code></td>
      <td><code>String</code></td>
      <td>A non-empty string uniquely identifying the ruleset. IDs beginning with '_' are reserved for internal use.</td>
    </tr>
    <tr>
      <td><code>"enabled"</code></td>
      <td><code>Boolean</code></td>
      <td>Whether the ruleset is enabled by default.</td>
    </tr>
    <tr>
      <td><code>"path"</code></td>
      <td><code>String</code></td>
      <td>The path of the JSON ruleset relative to the extension directory. See the <a href="/docs/Mozilla/Add-ons/WebExtensions/API/declarativeNetRequest#rules">Rules</a> section of the `declarativeNetRequest` API for information on the content of the ruleset JSON file.</td>
    </tr>
  </tbody>
</table>

## Example

```json
"declarative_net_request" : {
  "rule_resources" : [{
    "id": "ruleset_1",
    "enabled": true,
    "path": "rules_1.json"
  }, {
    "id": "ruleset_2",
    "enabled": false,
    "path": "rules_2.json"
  }]
}
```

## Browser compatibility

{{Compat}}
