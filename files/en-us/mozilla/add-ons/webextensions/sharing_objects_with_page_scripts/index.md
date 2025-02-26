---
title: Share objects with page scripts
slug: Mozilla/Add-ons/WebExtensions/Sharing_objects_with_page_scripts
page-type: guide
---

{{AddonSidebar}}

> [!NOTE]
> The techniques described in this section are only available in Firefox, and only from Firefox 49 onwards.

> [!WARNING]
> As an extension developer you should consider that scripts running in arbitrary web pages are hostile code whose aim is to steal the user's personal information, damage their computer, or attack them in some other way.
>
> The isolation between content scripts and scripts loaded by web pages is intended to make it more difficult for hostile web pages to do this.
>
> Since the techniques described in this section break down that isolation, they are inherently dangerous and should be used with great care.

As the [content scripts guide notes](/en-US/docs/Mozilla/Add-ons/WebExtensions/Content_scripts#dom_access), content scripts don't see changes made to the DOM by scripts loaded by web pages. This means that, for example, if a web page loads a library like jQuery, content scripts won't be able to use it, and have to load their own copy. Conversely, scripts loaded by web pages can't see changes made by content scripts.

However, Firefox provides some APIs that enable content scripts to:

- access JavaScript objects created by page scripts
- expose their own JavaScript objects to page scripts.

## Xray vision in Firefox

In Firefox, part of the isolation between content scripts and page scripts is implemented using a feature called "Xray vision". When a script in a more-privileged scope accesses an object that's defined in a less-privileged scope it sees only the "native version" of the object. Any [expando](/en-US/docs/Glossary/Expando) properties are invisible, and if any properties of the object have been redefined, it sees the original implementation, not the redefined version.

The purpose of this feature is to make it harder for the less-privileged script to confuse the more-privileged script by redefining the native properties of objects.

So, for example, when a content script accesses the page's [window](/en-US/docs/Web/API/Window), it won't see any properties the page script added to the window, and if the page script has redefined any existing properties of the window, the content script will see the original version.

## Accessing page script objects from content scripts

In Firefox, DOM objects in content scripts get an extra property `wrappedJSObject`. This is an "unwrapped" version of the object, which includes any changes made to that object by any page scripts.

Let's take an example. Suppose a web page loads a script:

```html
<!doctype html>
<html lang="en-US">
  <head>
    <meta charset="UTF-8" />
  </head>
  <body>
    <script src="main.js"></script>
  </body>
</html>
```

The script adds an expando property to the global `window`:

```js
// main.js

let foo = "I'm defined in a page script!";
```

Xray vision means that if a content script tries to access `foo`, it will be undefined:

```js
// content-script.js

console.log(window.foo); // undefined
```

In Firefox, content scripts can use `window.wrappedJSObject` to see the expando property:

```js
// content-script.js

console.log(window.wrappedJSObject.foo); // "I'm defined in a page script!"
```

Note that once you do this, you can no longer rely on any of this object's properties or functions being, or doing, what you expect. Any of them, even setters and getters, could have been redefined by untrusted code.

Also note that unwrapping is transitive: when you use `wrappedJSObject`, any properties of the unwrapped object are themselves unwrapped (and therefore unreliable). So it's good practice, once you've got the object you need, to rewrap it, which you can do like this:

```js
XPCNativeWrapper(window.wrappedJSObject.foo);
```

See the document on [Xray vision](https://firefox-source-docs.mozilla.org/dom/scriptSecurity/xray_vision.html) for much more detail on this.

## Sharing content script objects with page scripts

Firefox also provides APIs enabling content scripts to make objects available to page scripts. There are several approaches here:

- [`exportFunction()`](#exportfunction): export a function to page scripts.
- [`cloneInto()`](#cloneinto): export an object to page scripts.
- constructors from the page context

### exportFunction

Given a function defined in the content script, [`exportFunction()`](/en-US/docs/Mozilla/Add-ons/WebExtensions/Content_scripts/exportFunction) exports it to the page script's scope, so the page script can call it.

For example, let's consider an extension which has a background script like this:

```js
/*
Execute content script in the active tab.
*/
function loadContentScript() {
  browser.tabs.executeScript({
    file: "/content_scripts/export.js",
  });
}

/*
Add loadContentScript() as a listener to clicks
on the browser action.
*/
browser.browserAction.onClicked.addListener(loadContentScript);

/*
Show a notification when we get messages from
the content script.
*/
browser.runtime.onMessage.addListener((message) => {
  browser.notifications.create({
    type: "basic",
    title: "Message from the page",
    message: message.content,
  });
});
```

This does two things:

- execute a content script in the current tab, when the user clicks a browser action
- listen for messages from the content script, and display a [notification](/en-US/docs/Mozilla/Add-ons/WebExtensions/API/notifications) when the message arrives.

The content script looks like this:

```js
/*
Define a function in the content script's scope, then export it
into the page script's scope.
*/
function notify(message) {
  browser.runtime.sendMessage({ content: `Function call: ${message}` });
}

exportFunction(notify, window, { defineAs: "notify" });
```

This defines a function `notify()`, which just sends its argument to the background script. It then exports the function to the page script's scope. Now the page script can call this function:

```js
window.notify("Message from the page script!");
```

### cloneInto

Given an object defined in the content script, [cloneInto()](/en-US/docs/Mozilla/Add-ons/WebExtensions/Content_scripts/cloneInto) creates a clone of the object in the page script's scope, thereby making the clone accessible to page scripts. By default, this uses the [structured clone algorithm](/en-US/docs/Web/API/Web_Workers_API/Structured_clone_algorithm) to clone the object, meaning that functions in the object are not included in the clone. To include functions, pass the `cloneFunctions` option.

For example, here's a content script that defines an object that contains a function, then clones it into the page script's scope:

```js
/*
Create an object that contains functions in
the content script's scope, then clone it
into the page script's scope.

Because the object contains functions,
the cloneInto call must include
the `cloneFunctions` option.
*/
let messenger = {
  notify(message) {
    browser.runtime.sendMessage({
      content: `Object method call: ${message}`,
    });
  },
};

window.wrappedJSObject.messenger = cloneInto(messenger, window, {
  cloneFunctions: true,
});
```

Now page scripts see a new property on the window, `messenger`, which has a function `notify()`:

```js
window.messenger.notify("Message from the page script!");
```

### Constructors from the page context

On the xrayed window object pristine constructors for some built-in JavaScript objects such as `Object`, `Function` or `Proxy` and various DOM classes are available. `XMLHttpRequest` does not behave in this way, see the [XHR and fetch](/en-US/docs/Mozilla/Add-ons/WebExtensions/Content_scripts#xhr_and_fetch) section for details. They will create instances belonging to the page global's object hierarchy and then return an xray wrapper.

Since objects created this way already belong to the page and not the content script passing them back to the page will not require additional cloning or exporting.

```js
/* JavaScript built-ins */

const objA = new Object();
const objB = new window.Object();

console.log(
  objA instanceof Object, // true
  objB instanceof Object, // false
  objA instanceof window.Object, // false
  objB instanceof window.Object, // true
  "wrappedJSObject" in objB, // true; xrayed
);

objA.foo = "foo";
objB.foo = "foo"; // xray wrappers for plain JavaScript objects pass through property assignments
objB.wrappedJSObject.bar = "bar"; // unwrapping before assignment does not rely on this special behavior

window.wrappedJSObject.objA = objA;
window.wrappedJSObject.objB = objB; // automatically unwraps when passed to page context

window.eval(`
  console.log(objA instanceof Object);           // false
  console.log(objB instanceof Object);           // true

  try {
    console.log(objA.foo);
  } catch (error) {
    console.log(error);                       // Error: permission denied
  }
 
  try {
    objA.baz = "baz";
  } catch (error) {
    console.log(error);                       // Error: permission denied
  }

  console.log(objB.foo, objB.bar);               // "foo", "bar"
  objB.baz = "baz";
`);

/* other APIs */

const ev = new Event("click");

console.log(
  ev instanceof Event, // true
  ev instanceof window.Event, // true; Event constructor is actually inherited from the xrayed window
  "wrappedJSObject" in ev, // true; is an xrayed object
);

ev.propA = "propA"; // xray wrappers for native objects do not pass through assignments
ev.propB = "wrapper"; // define property on xray wrapper
ev.wrappedJSObject.propB = "unwrapped"; // define same property on page object
Reflect.defineProperty(
  // privileged reflection can operate on less privileged objects
  ev.wrappedJSObject,
  "propC",
  {
    get: exportFunction(() => {
      // getters must be exported like regular functions
      return "propC";
    }, window),
  },
);

window.eval(`
  document.addEventListener("click", (e) => {
    console.log(e instanceof Event, e.propA, e.propB, e.propC);
  });
`);

document.dispatchEvent(ev); // true, undefined, "unwrapped", "propC"
```

### Promise cloning

A Promise cannot be cloned directly using `cloneInto`, as Promise is not supported by the [structured clone algorithm](/en-US/docs/Web/API/Web_Workers_API/Structured_clone_algorithm). However, the desired result can be achieved using `window.Promise` instead of `Promise`, and then cloning the resolution value like this:

```js
const promise = new window.Promise((resolve) => {
  // if just a primitive, then cloneInto is not needed:
  // resolve("string is a primitive");

  // if not a primitive, such as an object, then the value must be cloned
  const result = { exampleKey: "exampleValue" };
  resolve(cloneInto(result, window));
});
// now the promise can be passed to the web page
```
