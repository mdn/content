---
title: Information contained in a WebIDL file
slug: MDN/Writing_guidelines/Howto/Write_an_API_reference/Information_contained_in_a_WebIDL_file
page-type: mdn-writing-guide
---

{{MDNSidebar}}

When writing documentation about an API, the sources of information are many: the specifications describe what should be implemented as well as the model, and the implementations describe what has actually been put in the browsers. WebIDL files are a very condensed way of giving a lot, but not all, of the information about the API. This document provides a reference to help understand WebIDL syntax.

IDL stands for **_Interface Definition Language_** and it is designed to describe APIs. In the wider world of computing there are several kinds of IDL. In the world of browsers, the IDL we use is called _WebIDL_. Two kinds of WebIDL are available: the one given in the WebIDL spec, and the one implemented in browsers. The spec is the canonical reference, and the browser WebIDL describes what is actually implemented in a particular browser, and contains additional things such as annotations, information about non-standard elements, and browser-specific extensions to the IDL specification.

## Where to find WebIDL files

WebIDL can be found in multiple locations:

- Each specification contains WebIDL inside the text: it is a very convenient way to convey precise definition. These describe the syntax of the API. Though the canonical reference, we have to keep in mind that they may differ from the actual implementation. On MDN we want to be practical and document what the Web platform really is, not what it ideally should be. So double check what is there with implementations (and don't hesitate to file bugs if you discover incoherence).
- Three browser engines use (modified) WebIDL as part as their toolchain: Gecko, Chromium/Blink, and WebCore/WebKit. Pre-Chromium versions of Edge used it internally, but these are unfortunately not public.

  - For Gecko, all WebIDL files are grouped in a single directory: <https://dxr.mozilla.org/mozilla-central/source/dom/webidl/>. Their extension is `.webidl`. There are other `*.idl` files in the Gecko source tree but they are not WebIDL, so you can ignore them. Older versions of Gecko have some of their WebIDL scattered around somewhat, and may even use Mozilla's IDL instead of WebIDL to describe some Web interfaces, but this won't be a problem in any recent Gecko code.
  - For Chromium, they are located in two locations, both subtrees of the source code's [`renderer/`](https://source.chromium.org/chromium/chromium/src/+/master:third_party/blink/renderer/) directory: [`core/`](https://source.chromium.org/chromium/chromium/src/+/master:third_party/blink/renderer/core/) and [`modules/`](https://source.chromium.org/chromium/chromium/src/+/master:third_party/blink/renderer/modules/). Chromium source code has IDL files in other locations, but these are part of the testing system and not relevant to API implementations.
  - For WebCore, they are scattered around the source code, so you need to dig a bit more: E.g. <https://github.com/WebKit/webkit/blob/master/Source/WebCore/html/DOMTokenList.idl>

## Different dialects of WebIDL

WebIDL is defined in [its specification](https://heycam.github.io/webidl/). But it has been designed to be extended to convey more information, and browser vendors have done so:

- For Gecko, Mozilla created the [documentation](https://firefox-source-docs.mozilla.org/dom/webIdlBindings/index.html) of its dialectal WebIDL.
- For Chromium, Google also created a [document](https://www.chromium.org/blink/webidl/) to describe its extensions.
- For WebCore, Apple also made available a [page](https://trac.webkit.org/wiki/WebKitIDL) for its dialect.

> **Note:** We describe here only the subset of WebIDL which is most useful when writing documentation. There are many more annotations useful for implementers; refer to the four documents linked above to have a complete overview.

## Interfaces

This section explains the WebIDL syntax that describes overall API features.

### Name of the interface

The interface name is the string that appears after the keyword `interface` and before the next opening bracket (`'{'`) or colon (`':'`).

```webidl
interface URL {};
```

Each WebIDL interface, being a true interface or a mixin, has its own page in the documentation, listing every constructor, property and method defined for it.

### Inheritance chain

The parent, if any, of a given interface is defined after the interface name, following a colon (`':'`). There can be only one parent per interface.

```webidl
interface HTMLMediaElement : HTMLElement {…}
```

The inheritance chain is listed automatically in the sidebar (using the \\{{APIRef}} macro). It can also be added as an SVG image via the macro \\{{InheritanceDiagram}}.

### Mixins

Some properties or methods are available to several interfaces. To prevent redefinition they are defined in special WebIDL interfaces called _mixins_.

As of September 2019, mixin syntax was updated. In the new syntax, you use `interface mixin` to define a mixin interface, like so:

```webidl
interface MyInterface {};

interface mixin MyMixin {
  void somethingMixedIn();
}
```

You then use the `includes` keyword to say that the properties defined inside a mixin are available on an interface:

```webidl
MyInterface includes MyMixin;
```

Mixins have no inheritance and cannot include other mixins. They do however support partials, so you will see things like this:

```webidl
interface MyInterface {};
interface mixin MyMixin {};

partial interface mixin MyMixin {
  void somethingMixedIn();
};

MyInterface includes MyMixin;
```

For documentation purposes, MDN hides mixins. They are abstract and specification-only constructs.
You can't see them in the browser console and it is more useful to know on which real interfaces methods and properties are implemented on.

If you encounter a mixin in IDL, like [HTMLHyperlinkElementUtils](https://html.spec.whatwg.org/multipage/links.html#htmlhyperlinkelementutils),
search for the interfaces that implement the mixin, for example
[HTMLAnchorElement](https://html.spec.whatwg.org/multipage/text-level-semantics.html#htmlanchorelement), and document the mixin members directly on those interfaces.

In practice this means instead of documenting `HTMLHyperlinkElementUtils`,
docs are added to the concrete interfaces, like [`HTMLAnchorElement`](/en-US/docs/Web/API/HTMLAnchorElement)
and [`HTMLAreaElement`](/en-US/docs/Web/API/HTMLAreaElement).

See the following two pages that document `HTMLHyperlinkElementUtils.hash` accordingly:

- [`HTMLAnchorElement.hash`](/en-US/docs/Web/API/HTMLAnchorElement/hash)
- [`HTMLAreaElement.hash`](/en-US/docs/Web/API/HTMLAreaElement/hash)

For compat data, consult the [data guideline for mixins in BCD](https://github.com/mdn/browser-compat-data/blob/main/docs/data-guidelines.md).

### Old mixin syntax

In the old-style WebIDL mixin syntax, which you still might encounter in some places, mixins are prefixed using the `[NoInterfaceObject]` annotation:

```webidl
[NoInterfaceObject]
   interface MyMixin {…}
```

In the old-style syntax, mixins implemented on an interface are defined using the `implements` keyword.

```webidl
MyInterface implements MyMixin;
```

### Availability in window and workers

Availability in Web workers (of any type) and on the Window scope is defined using an annotation: `[Exposed=(Window,Worker)]`. The annotation applies to the partial interface it is listed with.

```webidl
[Exposed=(Window,Worker)]
interface Performance {
   [DependsOn=DeviceState, Affects=Nothing]
   DOMHighResTimeStamp now();
};

[Exposed=Window]
partial interface Performance {
   [Constant]
   readonly attribute PerformanceTiming timing;
   [Constant]
   readonly attribute PerformanceNavigation navigation;

   jsonifier;
};
```

In this case `Performance.now()` is available on the `Window` scope and to any worker, while `Performance.timing`, `Performance.navigation` and `Performance.toJSON()` are not available to Web workers.

The most common values for the `[Exposed]` are:

- `Window`
  - : The partial interface is available to the {{domxref('Window')}} global scope.
- `Worker`
  - : The partial interface is available to any kind of worker, that is if the global scope is a descendant of {{domxref('WorkerGlobalScope')}} — {{domxref('DedicatedWorkerGlobalScope')}}, {{domxref('SharedWorkerGlobalScope')}}, or {{domxref('ServiceWorkerGlobalScope')}} (It also is available to `ChromeWorker`, but we don't document this as they are not visible on the Web and are internal to Firefox.)
- `DedicatedWorker`
  - : The partial interface is available to the {{domxref('DedicatedWorkerGlobalScope')}} only.
- `SharedWorker`
  - : The partial interface is available to the {{domxref('SharedWorkerGlobalScope')}} only.
- `ServiceWorker`
  - : The partial interface is available to the {{domxref('ServiceWorkerGlobalScope')}} only.

Another value is possible, like `System`, but this has a [special meaning](/en-US/docs/Mozilla/WebIDL_bindings#exposed) and doesn't need to be documented.

Note that these possible values are themselves defined in WebIDL files. Interfaces may have a `[Global=xyz]` annotation. It means that when an object of this type is used as a global scope, any interface, property or method, with `xyz` as a value of `[Exposed]` is available.

```webidl
[Global=(Worker,DedicatedWorker), Exposed=DedicatedWorker]
interface DedicatedWorkerGlobalScope : WorkerGlobalScope {…}
```

Here, it is defined that when the global scope is of type `DedicatedWorkerGlobalScope`, that is if we are in a dedicated worker, any interface, property or method exposed – using the `[Exposed]` annotation – to `Worker` or `DedicatedWorker` is available.

### Preferences

> **Note:** this information is specific to Gecko and should only be used in the Browser compatibility section.

In Gecko, the availability of a partial interface, including its constructor, properties and methods may be controlled by a preference (usually called a "pref"). This is marked in the WebIDL too.

```webidl
[Pref="media.webspeech.synth.enabled"]
interface SpeechSynthesis {
   readonly attribute boolean pending;
   readonly attribute boolean speaking;
   readonly attribute boolean paused;
};
```

Here `media.webspeech.synth.enabled` controls the `SpeechSynthesis` interface and its properties (the full listing has more than 3.)

> **Note:** the default value of the preference is not available directly in the WebIDL (it can be different from one product using Gecko to another.)

### Available only in system code

Some interface features might only be available in browser internal system code, or chrome code. To signify this, in Gecko we use \[ChromeOnly], for example the property propName in the following example is only callable via chrome code:

```webidl
interface MyInterface {
  [ChromeOnly]
  readonly attribute PropValue propName;
};
```

## Properties

You can recognize the definition of a property by the presence of the `attribute` keyword.

### Name of the property

```webidl
readonly attribute MediaError? error;
```

In the above example the name of the property is `error`; in the docs we will refer to it as `HTMLMediaElement.error` as it belongs to the `HTMLMediaElement` interface. Linking to the page is either done **with** the interface prefix using \\{{domxref('HTMLMediaElement.error')}} or **without** the prefix using \\{{domxref('HTMLMediaElement.error', 'error')}} when the context is obvious and unambiguous.

### Type of the property

```webidl
readonly attribute MediaError? error;
```

The property value is an object of type `MediaError`. The question mark (`'?'`) indicates that it can take a value of `null`, and the documentation must explain _when_ this may occur. If no question mark is present, the `error` property can't be `null`.

### Writing permissions on the property

```webidl
readonly attribute MediaError? error;
```

If the keyword `readonly` is present, the property can't be modified. It must be marked as read-only:

- In the interface, by adding the \\{{ReadOnlyInline}} macro next to its definition term.
- In the first sentence of its own page, by starting the description with: _The read-only **`HTMLMediaElement.error`** property…_
- By adding the `Read-only` tag to its own page.
- By starting its description in the interface page with _Returns…_

> **Note:** Only read-only properties can be described as 'returning' a value. Non read-only properties can also be used to set a value.

### Throwing exceptions

```webidl
[SetterThrows]
            attribute DOMString src;
```

In some cases, like when some values are illegal, setting a new value can lead to an exception being raised. This is marked using the `[SetterThrows]` annotation. When this happens, the Syntax section of the property page _must_ have an Exceptions subsection. The list of exceptions and the conditions to have them thrown are listed, as textual information, in the specification of that API.

Note that some exceptions are not explicitly marked but are defined by the JavaScript bindings. [Trying to set an illegal enumerated value](https://heycam.github.io/webidl/#es-enumeration) (mapped to a JavaScript {{jsxref('String')}}) raises a {{jsxref('TypeError')}} exception. This must be documented, but is only implicitly marked in the WebIDL document.

It is uncommon to have getters throwing exceptions, though it happens in a few cases. In this case the `[GetterThrows]` annotation is used. Here also, the Syntax section of the property page _must_ have an Exceptions subsection.

```webidl
partial interface Blob {
  [GetterThrows]
  readonly attribute unsigned long long size;
};
```

### Not throwing exceptions

When the semantics of Webidl is not followed, an exception is often thrown, even without `[SetterThrows]` or `[GetterThrows]` set. For example, in strict mode, if we try to set a read-only property to a new value, that is to call its implicit setter, a read-only property will throw in strict mode.

Mostly for compatibility purpose, this behavior is sometimes annoying. To prevent this by creating a no-op setter (that is by silently ignoring any attempt to set the property to a new value), the `[LenientSetter]` annotation can be used.

```webidl
partial interface Document {
  [LenientSetter]
  readonly attribute boolean fullscreen;
  [LenientSetter]
  readonly attribute boolean fullscreenEnabled;
};
```

In these cases, an extra sentence is added to the description of the property. E.g

_Although this property is read-only, it will not throw if it is modified (even in strict mode); the setter is a no-operation and it will be ignored._

### New objects or references

The return value of a property can be either a copy of an internal object, a newly created synthetic object, or a reference to an internal object.

Basic objects with types like {{jsxref("String")}} (being an IDL `DOMString`, or other), {{jsxref("Number")}} (being an IDL `byte`, `octet`, `unsigned int`, or other), and {{jsxref("Boolean")}} are always copied and nothing special has to be noted about them (it is natural behavior expected by a JavaScript developer.)

For interface objects, the default is to return a _reference_ to the internal object. This has to be mentioned both in the short description in the interface page, and in the description in the specific sub-pages.

> **Note:** The keyword `readonly` used with a property returning an object applies to the reference (the internal object cannot be changed.) The properties of the returned object can be changed, even if they are marked as read-only in the relevant interface.

Sometimes an API must return a _new_ object, or a _copy_ of an internal one. This case is indicated in the WebIDL using the `[NewObject]` annotation.

```webidl
[NewObject]
   readonly attribute TimeRanges buffered;
```

In this case, each call to `buffered` returns a different object: changing it will not change the internal value, and a change in the internal value will not affect each object instance. In the documentation, we will mark it by using the adjective _new_ next to object:

_The **`HTMLMediaElement.buffered`** read-only property returns a new \\{{domxref("TimeRanges")}} object that…_

and

- _\\{{domxref("HTMLMediaElement.buffered")}}\\{{ReadOnlyInline}}_
  - : _Returns a new \\{{domxref("TimeRanges")}} object that …_

In the case of a reference to a collection object (like `HTMLCollection`, `HTMLFormElementsCollection`, or `HTMLOptionsCollection`, always without `[NewObject]`), we make it explicit that changes to the underlying object will be available via the returned reference. To mark this, we qualify the collection as a **live** `HTMLCollection` (or `HTMLFormElementsCollections`, or `HTMLOptionsCollection`), both in the interface description and in the subpage.

E.g.

- \\{{domxref("HTMLFormElement.elements")}}\\{{ReadOnlyInline}}
  - : Returns a live \\{{domxref("HTMLFormControlsCollection")}} containing…

### Availability in workers

Individual property availability in workers is also found in the WebIDL. For a property, the default is the same availability as the `interface` (that is available to {{domxref('Window')}} context only if nothing special is marked) or as the `partial interface` it is defined in.

For documentation, the subpage must contain a sentence indicating if it is available or not in Web workers, right before the "Syntax" section.

### Preferences

> **Note:** This information is specific to Gecko and should only be used in the Browser compatibility section.

In Gecko, the availability of some properties may be controlled by a preference. This is marked in the WebIDL too.

```webidl
[Pref="media.webvtt.enabled"]
    readonly attribute TextTrackList? textTracks;
```

Here `media.webvtt.enabled` controls the `textTracks` property.

> **Note:** The default value of the preference is not available directly in the WebIDL (it can be different from one product using Gecko to another).

## Methods

You can recognize the definition of a method by the presence of parentheses after the name.

### Name of the method

```webidl
DOMString canPlayType(DOMString type);
```

The name of the method is `canPlayType`, and we will refer to it as `HTMLMediaElement.canPlayType()` (with the parentheses that indicate that it is a method) in the docs, as it belongs to the `HTMLMediaElement` interface. Linking to the page is either done **with** the interface prefix using \\{{domxref('HTMLMediaElement.canPlayType()')}}, or **without** the prefix using \\{{domxref('HTMLMediaElement.canPlayType', 'canPlayType()')}} when the context is obvious and unambiguous. The parentheses should always be included.

### Parameters

```js
TextTrack addTextTrack(TextTrackKind kind,
                       optional DOMString label = "",
                       optional DOMString language = "");
```

The parameters of a method are listed in the Syntax section of the method sub-page. They are listed in the WebIDL in order, between the parenthesis, as a comma-separated list. Each parameter has a name (indicated above) and a type (e.g. a `'?'` means that the `null` value is valid.) If marked `optional`, the parameter is optional to include in a method call and must have the \\{{OptionalInline}} flag included when it is listed in the Syntax section. The parameter's default value is listed after the equality sign (`'='`).

### Type of the return value

```webidl
DOMString canPlayType(DOMString type);
```

The return value type is indicated first inside the parentheses — in the above case the value is an object of type `DOMString`. if followed by a question mark (`'?'`), a value of `null` can be returned too, and the documentation must explain _when_ this may happen. If no question mark is present, like here, the return value can't be `null`.

The keyword `void` means that there is no return value. It is not a return value type. If the WebIDL entry reads `void`, the _Return value_ section in the docs should contain only a simple "None.".

### Throwing exceptions

```webidl
[Throws]
   void fastSeek(double time);
```

Some methods can throw exceptions. This is marked using the `[Throws]` annotation. When this happens, the Syntax section of the method page _must_ have an Exceptions subsection. The list of exceptions and the conditions to have them thrown are listed, as textual information, in the specification of that API.

Note that some exceptions are not explicitly marked but are defined by the JavaScript bindings. [Trying to set an illegal enumerated value](https://heycam.github.io/webidl/#es-enumeration) (mapped to a JavaScript {{jsxref('String')}}) as a parameter will raise a {{jsxref('TypeError')}} exception. This must be documented, but it is only implicitly marked in the WebIDL document.

Have a look at one of these [_Exceptions_ sections](/en-US/docs/Web/API/SubtleCrypto/importKey#exceptions).

### Availability in workers

Individual method availability in workers is also found in the WebIDL. For a method, the default is the same availability as the `interface` (that is available to {{domxref('Window')}} context only if nothing special is marked) or as the `partial interface` it is defined it.

For the documentation, the sub-page must contain a sentence indicating if it is available in Web workers, right before the Syntax section.

### Preferences

> **Note:** this information is specific to Gecko and should only be used in the Browser compatibility section.

In Gecko, the availability of some properties may be controlled by a preference. This is marked in the WebIDL too.

```webidl
[Pref="media.webvtt.enabled"]
   TextTrack addTextTrack(TextTrackKind kind,
                          optional DOMString label = "",
                          optional DOMString language = "");
```

Here `media.webvtt.enabled` controls the `addTextTrack()` method.

> **Note:** The default value of the preference is not available directly in the WebIDL (it can be different from one product using Gecko to another.)

## Special methods

Some methods are not listed as regular methods in WebIDL but instead as special keywords, which translate to specific standard JavaScript methods.

### toString() and toJSON()

A stringifier specifies how an object based on an interface is resolved in contexts expecting a string. (See the [Stringifiers](#stringifiers) section.) Additionally, the keyword is mapped to `toString()` and defined as:

```webidl
stringifier;
```

The `toString()` method is listed just like any other method of the interface and has its own sub-page (E.g. {{domxref("Range.toString()")}})

A jsonifier is mapped to `toJSON()` and defined as:

```webidl
jsonifier; // Gecko version
serializer; // Standard version
```

The `toJSON()` method is listed just like any other method of the interface and has its own sub-page (E.g. {{domxref("Performance.toJSON()")}})

> **Note:** the WebIDL specification uses `serializer` instead of `jsonifier`. This is not used in Gecko — only the non-standard likely early proposal `jsonifier` is found in mozilla-central.

### Iterator-like methods

An interface may be defined as _iterable_, meaning that it will have the following methods: `entries()`, `keys()`, `values()` and `forEach()`. They also supports the use of {{jsxref("Statements/for...of", "for...of")}} on an object implementing this interface.

There are two kinds of iteration possible: the _value iterator_ and the _pair iterator._

#### Value iterator

```webidl
iterable<valueType>
```

The iterator will iterate over values of type _valueType_. The generated methods will be:

- `entries()`, which returns an [`iterator`](/en-US/docs/Web/JavaScript/Reference/Iteration_protocols) on the indexes (that are `unsigned long`).
- `values()`, which returns an [`iterator`](/en-US/docs/Web/JavaScript/Reference/Iteration_protocols) on the values.
- `keys()`, which returns an [`iterator`](/en-US/docs/Web/JavaScript/Reference/Iteration_protocols) on the keys, that are its indexes (that are `unsigned long`). In the case of value iterators, `keys()` and `entries()` are identical.
- `forEach()`, which returns an [`iterator`](/en-US/docs/Web/JavaScript/Reference/Iteration_protocols) on the keys that calls a given callback function one for each entry in the list.

Such an iterator allows to use the syntax `for (const p in object)` as a shorthand of `for (const p in object.entries())`. We add a sentence about it in the interface description.

> **Note:** the value pairs to iterate over can be defined in two different ways:
>
> 1. Outside the webidl file, in the prose accompanying it. Such a prose is in the spec and usually starts with: _"The [values to iterate over](https://heycam.github.io/webidl/#dfn-values-to-iterate-over)…"_.
> 2. In the webidl file, implicitly, if the interface supports indexed properties, that is when the interface has a `getter` methods with a parameter of type `unsigned long`.

#### Pair iterator

```webidl
iterable<keyType, valueType>
```

The iterator will iterate over values of type _valueType_, with keys of type _keyType_. The generated methods will be:

- `entries()` that returns an [`iterator`](/en-US/docs/Web/JavaScript/Reference/Iteration_protocols) on the indexes (of type _keyType_). E.g. {{domxref('FormData.entries()')}}
- `values()` that returns an [`iterator`](/en-US/docs/Web/JavaScript/Reference/Iteration_protocols) on the values. E.g. {{domxref('FormData.values()')}}
- `keys()` that returns an [`iterator`](/en-US/docs/Web/JavaScript/Reference/Iteration_protocols) on the keys. E.g. {{domxref('FormData.keys()')}}
- Once [Firefox bug 1216751](https://bugzil.la/1216751) lands, `forEach()`.

Such an iterator allows to use the syntax `for (const p in object)` as a shorthand of `for (const p in object.entries())`. We add a sentence about it in the interface description. E.g. {{domxref('FormData')}}.

> **Note:** the value pairs to iterate over are _not_ defined in the webidl file, but in the prose accompanying it. Such a prose is in the spec and usually starts with: _"The [value pairs to iterate over](https://heycam.github.io/webidl/#dfn-value-pairs-to-iterate-over)…"_
>
> E.g, for {{domxref('FormData')}} you find in the spec: _"The [value pairs to iterate over](https://heycam.github.io/webidl/#dfn-value-pairs-to-iterate-over) are the [entries](https://xhr.spec.whatwg.org/#concept-formdata-entry) with the key being the [name](https://xhr.spec.whatwg.org/#concept-formdata-entry-name) and the value the [value](https://xhr.spec.whatwg.org/#concept-formdata-entry-value). "_

### Set-like methods

An interface may be defined as _set-like_, meaning that it represents an _ordered set of values_ will have the following methods: `entries()`, `keys()`, `values()`, `forEach(),` and `has()` (it also has the `size` property). They also supports the use of {{jsxref("Statements/for...of", "for...of")}} on an object implementing this interface. The set-like can be prefixed `readonly` or not. If not read-only, the methods to modify the set are also implemented: `add()`, `clear()`, and `delete()`.

```webidl
setlike<valueType>
```

The generated properties will be:

- `entries()` that returns an [`iterator`](/en-US/docs/Web/JavaScript/Reference/Iteration_protocols) on the indexes. E.g. {{domxref('NodeList.entries()')}}.
- `values()` that returns an [`iterator`](/en-US/docs/Web/JavaScript/Reference/Iteration_protocols) on the values. E.g. {{domxref('NodeList.values()')}}.
- `keys()` that returns an [`iterator`](/en-US/docs/Web/JavaScript/Reference/Iteration_protocols) on the keys. E.g. {{domxref('NodeList.keys()')}},
- `forEach()`.

In cases where the set-like declaration is not prefixed by read-only, the following methods are also generated:

- `add()` that adds an entry. E.g. the `.add()` method of {{domxref('FontFaceSet')}}.
- `clear()` that empties the set-like structure. E.g. the `.clear()` method of {{domxref('FontFaceSet')}}.
- `delete()` that removes an entry. E.g. the `.delete()` method of {{domxref('FontFaceSet')}}.

Such an set interface also allows to use the syntax `for (const p in object)` as a shorthand of `for (const p in object.entries())`.

## Special Behaviors

Some IDL members indicate special behaviors that should be noted on appropriate pages.

### Stringifiers

In addition to adding the `toString()` method to an interface as described in [toString() and toJSON()](#tostring_and_tojson), stringifiers also indicate that an object instance, when used as a string, returns a string other than the default. (The default is usually a JSON representation of the object). Exactly how depends on the way it is specified in the IDL. Regardless of the how, the non-default behavior should be described on the interface page.

When the `stringifier` keyword accompanies an attribute name, referencing the object name has the same result as referencing the attribute name. Consider the following IDL:

```webidl
interface InterfaceIdentifier {
  stringifier attribute DOMString DOMString name;
};
```

For a class based on this interface, the following lines of code below are equivalent. The behavior should be noted on the property page in addition to the interface page.

```js
console.log(interfaceIdentifier);
console.log(interfaceIdentifier.name);
```

When the `stringifier` keyword is used by itself, an object of the interface may be used as above, but the behavior is defined in source code.

```webidl
interface InterfaceIdentifier {
  stringifier;
};
```

To learn what an interface reference actually does, refer to the interface's spec or experiment with the interface to determine its output.

## Constructors

Constructors are a little bit hidden in WebIDL: they are listed as annotations of the main interface.

### Unnamed constructors

This is the most common case for constructors. The constructor of a given interface A, can be used as `a = new A(parameters);`

```webidl
[Constructor, Func="MessageChannel::Enabled",
  Exposed=(Window,Worker)]
    interface MessageChannel {…};
```

A constructor with the same interface is defined using the `Constructor` annotation on the interface. There can be parenthesis and a list of parameters or not (like in the above example.) We document all the unnamed constructors on a sub-page — for example the above is given the slug _Web/API/MessageChannel/MessageChannel_ and the title `MessageChannel()`.

Another example of an unnamed constructor, with parameters:

```webidl
[Constructor(DOMString type, optional MessageEventInit eventInitDict),
 Exposed=(Window,Worker,System)]
   interface MessageEvent : Event {…};
```

There can also be several unnamed constructors, differing by their parameter lists. All syntax is documented in one single sub-page.

```webidl
[Constructor(DOMString url, URL base),
 Constructor(DOMString url, optional DOMString base),
 Exposed=(Window,Worker)]
    interface URL {};
```

### Named constructors

```webidl
[NamedConstructor=Image(optional unsigned long width, optional unsigned long height)]
    interface HTMLImageElement : HTMLElement {…
```

A named constructor is a constructor that has a different name than that of its interface. For example `new Image(…)` creates a new `HTMLImageElement` object. They are defined in the WebIDL using the `NamedConstructor` annotation on the interface, followed by the name of the constructor after the equality sign (`'='`) and the parameter inside the parenthesis, in the same format as you'll see for methods.

There can be several named constructors for a specific interface, but this is extremely rare; in such a case we include one sub-page per name.

### New constructor syntax

As of September 2019, WebIDL constructor syntax was updated. Constructor syntax no longer involves an extended attribute on the interface:

```webidl
[Constructor(DOMString str)]
    interface MyInterface {
      ...
};
```

New specs instead use a method-like syntax named `constructor` with no explicitly-defined return type, written like so:

```webidl
interface MyInterface {
  constructor(DOMString str);
};
```

This means extended attributes can now be specified on the constructor, and it is no longer assumed that all constructors throw. If a constructor does throw, `[Throws]` will be used to indicate that:

```webidl
interface MyInterface {
  [Throws] constructor();
};
```

It is unlikely that _all_ specs will be updated to use the new syntax, so you'll probably encounter both out in the wild. We will therefore continue to cover both types of syntax here.

### Availability in workers

Constructors have the same availability as the interface, or partial interface, they are defined on. The sub-page provides this information in the same way as for a method.

### Preferences

Constructors are controlled by the same preference as the interface, or partial interface, they are defined on. The sub-page provides this information in the same way as for a method.
