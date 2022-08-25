---
title: Architecture
slug: Web/Accessibility/Architecture
tags:
  - Accessibility
  - Developing Mozilla
---
## Introduction

The implementation of text and embedded objects in Mozilla is clever but confusing. Here is a bit of history and an explanation.

Mozilla exposes a document containment hierarchy with text and embedded objects. Sometimes the embedded object is really just another text container with more embedded objects.

However in accessibility hierarchies such as ATK and IAccessible2, text is not exposed in leaf nodes as it is in a W3C DOM. The text is actually exposed via a special text interface in the parent of the text nodes. It is concatenated together with all its sibling text nodes, and embedded objects between the text nodes are exposed as the unicode embedded object character `\xfffc`. One reason for this is that there are fewer nodes to pass across process, and that improves performance.

## Node types

- Text content (ROLE_TEXT) objects are implemented by nsTextAccessible. Their text is actually exposed in their parent `nsHyperTextAccessible` via nsIAccessibleText. When the hierarchy is finally exposed to ATK they are stripped out. They are in the nsIAccessible hierarchy to make it easy for `nsHyperTextAccessible` to piece its final text representation together. They are kept in IAccessible2 for backward compatibility with MSAA clients that expect text in leaf nodes.
- HTML
  (ROLE_WHITESPACE) objects are implemented by `nsHTMLBRAccessible`. They end up getting exposed as `\n` in their parent `nsHyperTextAccessible`. When the hierarchy is finally exposed to ATK they are stripped out as leaf nodes, but the \n remains in the containing text. They are in the `nsIAccessible` hierarchy to make it easy for `nsHyperTextAccessible` to piece its text representation together.
- Everything else uses whatever `nsAccessible`-derived implementation that's appropriate. If it has text siblings, then it gets exposed as the unicode char for an embedded object, which is `\xfffc` within the parent `nsHyperTextAccessible`. In addition, `nsIAccessibleHyperLink` is implemented on any non-text child inside a container that also has text. This allows AT's to find its position within that text, because the hyperlink interface exposes a start and end index. In fact, the end index will always be 1 larger than the start index, because the object is always represented by a single `\xfffc` character. If you want to know that something is really a link, check to see if it is ROLE_LINK.
- HTML containers are implemented by `nsHyperTextAccessible`. They support the `nsIAccessibleHyperText` is implemented on any container element that has both text and embedded objects for accessible children.

## Why HyperLink is often not a link

As explained above, anything that is embedded in text implements the Hyperlink interface.

While it is odd to call non-link objects a link, this was a necessary compromise in the [newatk design](https://website-archive.mozilla.org/www.mozilla.org/access/access/unix/new-atk.html) because it is necessary to know where objects exist within their containing text. Previously the hyper link interface was really only for links, but the design could not fully represent an HTML document hierarchy. Keeping the link name of the interface is unfortunate but necessary for backwards compatibility, without introducing superfluous interfaces.

## API comparison

- `nsIAccessible` (internal). When you have an `nsIAccessibleHyperText`, you can ask for its links, which is the subset of children from the `nsIAccessible` hierarchy that are not text or whitespace.
- `ATK`: Same as `nsIAccessible`, except that text and whitespace leaf nodes are not exposed. The children of any Hypertext object are an exact match to the links it exposes. The implementation doesn't create AtkObjects for a whitespace or text leaf nsIAccessibles. See the [ATK uses of IsEmbeddedObject()](http://mxr.mozilla.org/seamonkey/search?string=isembeddedobject&find=atk&findi=&filter=&tree=seamonkey) for more information on how we do this.
- `IAccessible2`: Same as `nsIAccessible`. Text and whitespace leaf nodes are exposed, but are redundant with the information in the parent object's `nsIAccessibleText`. This is done for backward compatibility with older MSAA clients which didn't have access to a text interface. The children of a Hypertext object are a superset of the links it exposes. The new system makes it easier to show caret positions etc., which will be an improvement in IA2 over MSAA.

## Example

Take the following HTML code:

```html
<div>Hello<a href="http://www.mozilla.org/access">My link<img src="image.gif">is cool</a>Bye</div>
```

Both the {{HTMLElement('a')}} and {{HTMLElement('img')}} are hyperlinks Also, both the {{HTMLElement('div')}} and {{HTMLElement('a')}} are hypertexts So the {{HTMLElement('a')}} is both a hypertext and a hyperlink, because it contains text and is contained within text.

This means that we have an exact mirror to the dom, but text lives in the parents instead of in the leaves, which now don't really provide additional useful information. They are only provided under MSAA/IA2 for backward compatibility.

## Implementation classes

Here are some notes on the classes we use:

[nsHyperTextAccessible](http://lxr.mozilla.org/seamonkey/find?string=nshypertextacc) is for any container that may wrap both text and embedded object:

- `nsIAccessibleText` is supported if there is potentially any text in the container
- `nsIAccessibleHyperText` is supported if there is potentially text and embedded objects together in the container.
- `nsIAccessibleEditableText` is supported if the area is potentially editable. If it's actually editable it will also provide `STATE_EDITABLE`.

[`nsAccessible`](http://lxr.mozilla.org/seamonkey/find?string=nsAccessible%5C.) still represents any node in the tree. If the node is embedded in a parent that is an `nsIAccessibleHyperText`, the node will be exposed as an `nsIAccessibleHyperLink`. Consumers can use this interface to determine the position of the object in the parent's text.

[`nsTextAccessible`](http://lxr.mozilla.org/seamonkey/find?string=nstextaccessible) serves 2 purposes

- it is used by `nsHyperTextAccessible` to collect information about itself
- it is still exposed in MSAA for backward compatibility by old windows assistive technologies. Those AT's don't yet know about any `IAccessibleText` yet, and want to see the hierarchy how they always did — with text in leaf nodes.

## How does an AT deal with text

### (A) To get the embedded object for an embedded object char:

1. `linkIndex = IAHyperText::getLinkIndex(offset)`
2. `IAHyperLink\*object = IAHyperText::getLink(linkIndex)`
3. `IAccessible\* accessible = QI/QS(object)`

### (B) To get the offset in the parent text for a given embedded object:

1. `QI/QA` to `IAHyperLink`
2. If not successful, then it is not embedded in text, so it's position in parent should be determined just by `IA2::indexInParent`, which will return its child offset within the parent. Examples of objects not embedded in text are the child options in list boxes and combo boxes.
3. otherwise, use `IAHyperLink::getStartIndex()` to find the index in parent. In Firefox, the results of getEndIndex will always be the startIndex + 1, because links are always just represented by a single embedded object character

### (C) To get the next char fom a given offset in an accessible text:

1. If current `char` is `0` (end of string), then we are on a hard line break: get next node (typical depth first search), and set the current offset = 0
2. `IAText::ch = getCharacterAtOffset(++offset);`
3. If `ch` == embedded object char (`0xfffc`) then get object for that offset (see A above), then set the current offset to -1, and go to step 2
4. if `ch == 0` then we must determine whether we're on a hard line break:

    1. If the current accessible's `IA2` role is `SECTION`, `HEADING` or `PARAGRAPH then we are on a hard line break, so stop
    2. get the offset in the parent text for this object (see B above), and then repeat step (C)2 above

5. done

### (D) To get the next word or line:

1. Look one character ahead.
2. If the next character does not exist, proceed to the next accessible in depth first search order and recurse on the first character until a non-embed is found.
3. If the current character falls within a text substring, locate the line ending of that substring or the next embed, whichever comes first:

    1. Get the current line start and end offsets.
    2. Compute the item offset relative to the start of this line
    3. Search forward from the starting offset for an embed character
    4. If an embed character is found, continue processing with offset = index plus the line start index
    5. If an embed character is not found:

        1. If the line ending is equal to one less than the length of all text in the accessible, proceed to the next accessible in dept first search order and recurse on the first character until a non-embed is found.
        2. Otherwise, continue processing with offset = the index at the end of the line.

    6. If the character at the offset is an embed, proceed to its corresponding accessible and recurse on the first character until a non-embed is found.
    7. Otherwise, the offset marks the start of a new line.

Navigating to the next word follows a similar pattern. Navigating previous requires returning to the embed character in the parent accessible when the point of regard reaches the end of text in the corresponding child accessible for the embed.

See [http://svn.gnome.org/viewcvs/lsr/tru...py?view=markup](http://svn.gnome.org/viewcvs/lsr/trunk/src/Adapters/ATSPI/HypertextAdapter.py?view=markup) for a BSD implementation.

### (E) To grab a subtree of content:

Although under Windows text content is still exposed in leaf nodes of   `ROLE_TEXT`, it is no longer necessary to visit those nodes. Therefore for parent nodes that support the HyperText interface, it is more performant to grab the text from the AccessibleText interface and then only visit the link children. The HyperLink interface can be used to grab the children. Using this technique is about twice as fast as visiting all nodes in the tree, according to tests run by the developers of NVDA.

### (F) To get the line of text at the caret:

Many editors, including the Mozilla editor, have a strange issue with caret offsets. The caret can sometimes visually appear at the end of a line, but logically it is on the first character on the next line. You can test this in a given editor by pressing the End key on a line, to see whether the caret is shown past the End of the line. To doublecheck, hit the Delete key and see if it removes the first char of the next line.

Therefore, as the user arrows up and down, if you use the AccessibleText::caretOffset and retrieve the line with that offset, you may not get the line with the visual caret returned. You are getting the line starting with the logical caret offset, which may be the next line.

To get around this problem, Mozilla allows the magic value of `-2` to be passed into `AccessibleText/AccessibleHyperText` methods that take a character offset. This value of `-2` means, use the caret position. Not only can this save extra calls, but it will always return the visual line of text when used with the getText methods and line boundaries.

The following magic offsets are useful to define in your code:

- `#define CHAR_OFFSET_END_OF_LINE = -1`
- `#define CHAR_OFFSET_CARET = -2`

## More information

Many more details on the Mozilla document hierarchy are in the [original design document for newatk](https://website-archive.mozilla.org/www.mozilla.org/access/access/unix/new-atk.html). There are also details on the [general implementation of Mozilla accessibility architecture](https://www-archive.mozilla.org/access/architecture).
