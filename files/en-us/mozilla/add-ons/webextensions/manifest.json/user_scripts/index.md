---
title: user_scripts
slug: Mozilla/Add-ons/WebExtensions/manifest.json/user_scripts
page-type: webextension-manifest-key
browser-compat: webextensions.manifest.user_scripts
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
  "user_scripts": {
    "api_script": "apiscript.js",
  }
</pre
        >
      </td>
    </tr>
  </tbody>
</table>

Instructs the browser to load a script packaged in the extension, known as the API script, this script is used to export a set of custom API methods for use in user scripts. The API script path, relative to the manifest.json file, is defined as a `string` in `"api_script"`.

> **Note:** The `user_script` key is required for the {{WebExtAPIRef("userScripts")}} API to function, even if no API script is specified. For example. `user_scripts: {}`.

The API script:

- runs in the content processes.
- has access to the window and document globals related to the webpage it is attached to.
- has access to the same subset of WebExtension APIs usually available in a content script.

The script executes automatically on any webpage defined in `matches` by {{WebExtAPIRef("userScripts.register")}}. However, this is before the user script sandbox object is created and the custom API methods can be exported.

To export the custom API methods, the script listens for {{WebExtAPIRef("userScripts.onBeforeScript")}} and then export the custom API methods.

Not every user script may need to consume all of the custom API methods. You can, therefore, include details of the APIs needed in `scriptMetadata` when running {{WebExtAPIRef("userScripts.register")}}. The API script then accesses the `scriptMetadata` through the `script` parameter received by the {{WebExtAPIRef("userScripts.onBeforeScript")}} listener (as `script.metadata`).

## Browser compatibility

{{Compat}}

## See also

- {{WebExtAPIRef("userScripts")}}
- {{WebExtAPIRef("contentScripts")}}
