---
title: "CryptoKey: extractable property"
short-title: extractable
slug: Web/API/CryptoKey/extractable
page-type: web-api-instance-property
browser-compat: api.CryptoKey.extractable
---

{{APIRef("Web Crypto API")}}{{SecureContext_Header}}{{AvailableInWorkers}}

The read-only **`extractable`** property of the {{DOMxRef("CryptoKey")}} interface indicates whether or not the key may be extracted using [`SubtleCrypto.exportKey()`](/en-US/docs/Web/API/SubtleCrypto/exportKey) or [`SubtleCrypto.wrapKey()`](/en-US/docs/Web/API/SubtleCrypto/wrapKey).

If the key cannot be exported, [`exportKey()`](/en-US/docs/Web/API/SubtleCrypto/exportKey) or [`wrapKey()`](/en-US/docs/Web/API/SubtleCrypto/wrapKey) will throw an exception if used to extract it.

## Value

A boolean value that is `true` if the key can be exported and `false` if not.

## Examples

In this example, the _Export_ button is disabled, and no listener added, if the key cannot be exported.

```js
// Export the given key and write it into the "exported-key" space.
async function exportCryptoKey(key) {
  const exported = await window.crypto.subtle.exportKey("raw", key);
  const exportedKeyBuffer = new Uint8Array(exported);

  const exportKeyOutput = document.querySelector(".exported-key");
  exportKeyOutput.textContent = `[${exportedKeyBuffer}]`;
}

// Enable or disable the exportButton if the key is extractable or not
function setExportButton(key) {
  const exportButton = document.querySelector(".raw");

  // Disable the button if the key is not extractable
  exportButton.disabled = !key.extractable;
  if (key.extractable) {
    // Add an event listener to extract the key
    exportButton.addEventListener("click", () => {
      exportCryptoKey(key);
    });
  }
}

// Generate an encrypt/decrypt secret key,
// then enable and set up an event listener on the "Export" button.
window.crypto.subtle
  .generateKey(
    {
      name: "AES-GCM",
      length: 256,
    },
    true,
    ["encrypt", "decrypt"],
  )
  .then(setExportButton(key));
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
