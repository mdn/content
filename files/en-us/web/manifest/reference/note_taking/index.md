---
title: note_taking
slug: Web/Manifest/Reference/note_taking
page-type: web-manifest-member
status:
  - experimental
browser-compat: html.manifest.note_taking
---

{{QuickLinksWithSubpages("/en-US/docs/Web/Manifest/Reference")}}{{SeeCompatTable}}

The `note_taking` member identifies a web app as a note-taking app and defines related information, for example a URL pointing to functionality for taking a new note. This enables operating systems to integrate the app's note taking functionality, for example including a "New note" option in the app's context menu, or providing the app as an option for taking a note in other apps.

### Values

An object, which may contain the following values:

- `new_note_url` {{experimental_inline}}

  - : A string representing the URL the developer would prefer the user agent to load when the user wants to take a new note via the web app. This value is a hint, and different implementations may choose to ignore it or provide it as a choice in appropriate places. The `new_note_url` is parsed with the app's manifest URL as its base URL and is ignored if not within the [scope](/en-US/docs/Web/Manifest/Reference/scope) of the manifest.

## Examples

```json
{
  "name": "My Note Taking App",
  "description": "You can take notes!",
  "icons": [
    {
      "src": "icon/hd_hi",
      "sizes": "128x128"
    }
  ],
  "start_url": "/index.html",
  "display": "standalone",
  "note_taking": {
    "new_note_url": "/new_note.html"
  }
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
