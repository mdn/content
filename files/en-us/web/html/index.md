### Using the `command` attribute with `<dialog>`

The `command` attribute allows buttons to control dialog behavior without needing JavaScript event listeners.

```html
<dialog id="myDialog">
  <p>This is a dialog box</p>
  <button command="close">Close</button>
</dialog>

<button command="show-modal" commandfor="myDialog">
  Open dialog
</button>
```

In this example:

- `command="show-modal"` opens the dialog as a modal
- `command="close"` closes the dialog
- `commandfor` links the button to the dialog element

This simplifies interaction by reducing the need for manual JavaScript handling.
