---
title: API reference sidebars
slug: MDN/Writing_guidelines/Howto/Write_an_API_reference/Sidebars
tags:
  - meta
  - writing-guide
---
{{MDNSidebar}}

You are able to include a custom sidebar on API reference pages it so that it displays links to related Interfaces, tutorials, and other resources relevant just to that API.
This article explains how.

## Creating a sidebar

You need to take the following three steps to create your API sidebar:

1. Create your API reference pages.
2. Add an entry for your particular API into the [`GroupData.json`](https://github.com/mdn/content/blob/main/files/jsondata/GroupData.json) file.
3. Use the [`APIRef`](https://github.com/mdn/yari/blob/main/kumascript/macros/APIRef.ejs) macro to insert the sidebar into each page you want to display it on.

Let's run through each of these steps in turn.
The example we'll refer to in this article is the [Fetch API](/en-US/docs/Web/API/Fetch_API).

### Adding an entry to GroupData.json

The `GroupData.json` file holds all the data relating to what links should appear in API reference sidebars.
When invoked, the `APIRef` macro takes an API name given to it as a parameter, looks up that name in `GroupData.json`, builds an appropriate sidebar, and inserts it into the page.

To add an entry to `GroupData.json`, you need to:

1. Make sure you have a [GitHub](https://github.com/) account.
2. Fork the MDN content repo, create a new branch to contain your changes, and clone the repo locally.
3. Checkout your new branch before starting work, and make sure you push changes to it after finishing.
4. Create a pull request so that the MDN team can review your work, and ask for changes if necessary.

The `GroupData.json` file can be found inside the `files/jsondata/` directory.
Looking at it, you'll see a giant JSON structure, with each API having its own member.
The name is the API name, and the value is an object containing several sub-members defining the sidebar links to be created.

For example, look at the [Fetch API](/en-US/docs/Web/API/Fetch_API) page on MDN.
The corresponding entry in `GroupData.json` looks like this:

```json
"Fetch API": {
    "overview":   [ "Fetch API"],
    "interfaces": [ "Headers",
                    "Request",
                    "Response",
                    "FetchController",
                    "FetchObserver",
                    "FetchSignal",
                    "ObserverCallback" ],
    "methods":    [ "fetch()" ],
    "properties": [],
    "events":     []
},
```

As you can see, we've used "Fetch API" for the name, and inside the object value we include a number of sub-members.

#### Sub-members to include inside a GroupData entry

This section lists all the sub-members you could include in a `GroupData` entry.

Note that most of the values included inside the listed sub-members equate to both the link text, and slugs appended to the end of the main API index page —  `https://developer.mozilla.org/<language-code>/docs/Web/API` — to create the final URL for the displayed link.
So for example, "Response" will result in a link being created like so:

```html
<li><a href="/en-US/docs/Web/API">Response</a></li>
```

There are a few exceptions.
For example the "guides" sub-member contains one or more sets of link information (title and slug) that defines links to associated guides/tutorials.
In this case the slugs are appended to the end of the MDN docs root — `https://developer.mozilla.org/_<language-code>/docs` — allowing an article anywhere on MDN to be included.

Here are the available members.
These are all technically optional, but it is strongly encouraged that instead of omitting them, you include empty arrays.

1. `"overview"` — the value is an array, inside of which you include the slug of the API overview page, if there is one.
   "Fetch API" results in a link being made to [https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API](/en-US/docs/Web/API/Fetch_API).
2. `"interfaces"` — the value is an array in which you should list all of the interfaces that form part of that API.
   "Response" results in a link being made to [https://developer.mozilla.org/en-US/docs/Web/API/Response](/en-US/docs/Web/API/Response).
3. `"methods"` — the value is an array that should contain any methods the spec adds to interfaces associated with other APIs, such as instantiation methods created on {{domxref("Navigator")}} or {{domxref("Window")}}.
   If there are a huge number of methods, you might want to consider only listing the most popular ones, or putting them first in the list.
   "fetch()" results in a link being made to [https://developer.mozilla.org/en-US/docs/Web/API/fetch](/en-US/docs/Web/API/fetch).
   Do _not_ list methods that are members of interfaces that are members of interfaces that are owned by the same API.
4. `"properties"` — the value is an array that should contain all of the properties associated with the API.
   This can include properties that are members of interfaces defined in the API spec, and properties the API defines on other interfaces.
   If there are a huge number of properties, you might want to consider only listing the most popular ones, or putting them first in the list.
   "Headers.append" results in a link being made to [https://developer.mozilla.org/en-US/docs/Web/API/Headers/append](/en-US/docs/Web/API/Headers/append).
5. `"events"` — the value is an array that should contain all of the events associated with the API, defined in the API spec, or elsewhere.
   If there are a huge number of events, you might want to consider only listing the most popular ones, or putting them first in the list.
   "animationstart" results in a link being made to [https://developer.mozilla.org/en-US/docs/Web/Events/animationstart](/en-US/docs/Web/API/HTMLElement/animationstart_event).
6. `"guides"` — the value is an array containing one or more objects that define links to guides explain how to use the API.
   Each object contains two sub-members — "url", which contains the partial URL pointing to the guide article, and "title", which defines the link test for the link.
   As an example, the following object:

    ```json
    { "url":   "/docs/Web/API/Detecting_device_orientation",
    "title": "Detecting device orientation" }
    ```

    Creates a link with the title "Detecting device orientation", which points to [https://developer.mozilla.org/en-US/docs/Web/Events/Detecting_device_orientation](/en-US/docs/Web/Events/Detecting_device_orientation).

7. `"dictionaries"` — an array of strings listing all of the dictionaries which are part of the API.
   Generally, only dictionaries used by more than one property or method should be listed here, unless they are of special significance or are likely to require being referenced from multiple pages.
   "CryptoKeyPair" results in a link to [https://developer.mozilla.org/en-US/docs/Web/API/CryptoKeyPair](/en-US/docs/Web/API/CryptoKeyPair).
   > **Note:** MDN is moving away from separately documenting dictionaries.
   > Where possible, these are now described as objects in the places where they are used.
8. `"types"` — an array of typedefs and enumerated types defined by the API.
   You may choose to only list those that are of special importance or are referenced from multiple pages, in order to keep the list short.
   > **Note:** MDN is moving away from separately documenting typedefs.
   > Where possible, these are now described as values in the places where they are used.
9. `"callbacks"` — the value is an array containing a list of all the defined callback types for the API.
   You may find it unnecessary to use this group at all, even on APIs that include callback types, as often they are not useful to document separately.

## Tags used by sidebars

Some sub-members are automatically discovered from child pages, based on page tags.
Pages under the top-level API are crawled each time the sidebar is rendered, and entries are automatically created for methods ("Method" tag), properties ("Property" tag), and constructors ("Constructor" tag).

Sub-members are automatically decorated with warning icons based on tags as well.
Decorations are added for experimental ("Experimental" tag), non-standard ("Non Standard" or "Non-standard" tag), or deprecated ("Deprecated" tag) sub-members.

Further information about tag-based processing is available [in the APIRef source](https://github.com/mdn/yari/blob/main/kumascript/macros/APIRef.ejs).

## Inserting the sidebar

Once you've added an entry for your API into `GroupData.json`, submitted it as a pull request and had the change accepted into the main repo, you can include it in your API reference pages using the [`APIRef`](https://github.com/mdn/yari/blob/main/kumascript/macros/APIRef.ejs) macro, which takes the name you used for your API in GroupData as a parameter.
As an example, the [WebVR API](/en-US/docs/Web/API/WebVR_API)'s sidebar is included in its pages with the following:

```plain
\{{APIRef("WebVR API")}}
```
