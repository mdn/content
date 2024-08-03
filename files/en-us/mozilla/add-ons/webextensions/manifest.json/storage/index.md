---
title: storage
slug: Mozilla/Add-ons/WebExtensions/manifest.json/storage
page-type: webextension-manifest-key
browser-compat: webextensions.manifest.storage
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
      <td>2 or higher</td>
    </tr>
    <tr>
      <th scope="row">Example</th>
      <td>
        <pre class="brush: json">
"storage": {
  "managed_schema": "schema.json"
}</pre
        >
      </td>
    </tr>
  </tbody>
</table>

Use the `storage` key to specify the name of the schema file that defines the structure of data in managed storage.

Managed data declares the enterprise policies supported by the app. Policies are analogous to options but are configured by a system administrator instead of the user, enabling the app to be configured for all users of an organization.

After declaring the policies, they are read from the {{WebExtAPIRef("storage.managed")}} API. However, if a policy value does not conform to the schema, then it is not published by the `storage.managed` API. It's up to the app to enforce the policies configured by the administrator.

> [!NOTE]
> Firefox does not define a schema for managed storage, see {{WebExtAPIRef("storage.managed")}} for more details.

The `storage` key is an object that has the following required property:

<table class="standard-table">
  <tbody>
    <tr>
      <td><code>managed_schema</code></td>
      <td>
        <p>
          A <code>String</code> specifying the full path of the file within the
          extension that defines the schema of the manage storage.
        </p>
      </td>
    </tr>
  </tbody>
</table>

## Browser compatibility

{{Compat}}

> [!NOTE]
>
> This page includes details from the Chrome developer website page [Manifest for storage areas](https://developer.chrome.com/docs/extensions/mv2/manifest/storage/) included here under the Creative Commons Attribution 3.0 United States License.
