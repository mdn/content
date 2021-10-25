---
title: MDN conventions and definitions
slug: MDN/Guidelines/Conventions_definitions
tags:
  - Documentation
  - Guide
  - Guidelines
  - MDN
  - MDN Meta
---
{{MDNSidebar}}

This article defines some conventions and definitions that are commonly used on MDN, which might not be obvious to some people when they come across them in the documentation.

## Definitions

### Deprecated and obsolete

**Deprecated** and **obsolete** are common terms associated with technologies and specifications, but what do they mean?

- Deprecated
  - : On MDN, the term **deprecated** is used to mark an API or technology that is no longer recommended, but is still implemented and may still work.
    More recently, we've updated it to the definition used in our [browser-compat-data project](https://github.com/mdn/browser-compat-data/blob/master/schemas/compat-data-schema.md#status-information), which is that "the feature is no longer recommended. It might be removed in the future or might only be kept for compatibility purposes. Avoid using this functionality."
- Obsolete
  - : On MDN, the term **obsolete** was used to mark an API or technology that is not only no longer recommended, but also no longer implemented in browsers.
    This was, however, confusing — it is similar to **deprecated**, and the distinction is not very helpful (you still shouldn't use it in a production site).
    We are, therefore, not using it anymore, and any instances you come across should be removed/replaced by the term **deprecated**.

### Experimental

**Experimental** can mean different things depending on the context you hear or read it in.
When a technology is described as experimental on MDN, it means that the technology is nascent and immature, and currently in the process of being added to the Web platform (or considered for addition).

One or both of these will be true:

- It is implemented and enabled by default in less than two modern major browsers.
- Its defining spec is likely to change significantly, in backwards-incompatible ways (i.e. it may break existing code that relies on the feature).

If one or both of these definitions is true, then you should think carefully before you start using that technology in any kind of production project (i.e. not just a demo or experiment).
See also the definition of experimental in our [browser-compat-data project](https://github.com/mdn/browser-compat-data/blob/master/schemas/compat-data-schema.md#status-information).

Conversely, an item is no longer experimental when:

- It is implemented in two or more major browsers; or
- Its defining spec is unlikely to change in ways that will break the web.

The _or_ is important here — usually if a technology is supported across several major browsers, the spec will be stable, but this is not always the case.
And some technologies will have a stable spec and be well-used, but have no native support in browsers ([IMSC](/en-US/docs/Related/IMSC), for example).

### Archived pages

Archived pages are pages that are stored in the MDN [Archive of obsolete content](/en-US/docs/Archive).
These pages contain information out-of-date enough that it is not directly useful to anyone anymore.

Most commonly, these concern Mozilla projects that have been discontinued and shouldn't be relied on anymore.
But we don't delete them because they form a useful historical record, and some of the patterns or ideas contained within might be useful for future work.
A good example is the [B2G (Firefox OS) project](/en-US/docs/Archive/B2G_OS).

#### When should a page be archived?

A page should be archived if it fits the above description.
To archive a page, you should use the "Move page feature" (_Advanced > Move this article_) to move the page into the Archive page tree (/en-US/docs/Archive).
You might not have the permissions to use this feature, and before you start archiving pages you should discuss it with the MDN community first — talk to us on our [Discourse forum](https://discourse.mozilla.org/c/mdn).

### Deleted pages

Deleted pages are pages that have been explicitly deleted from MDN — see for example the [`SharedKeyframeList`](/en-US/docs/Web/API/SharedKeyframeList) interface and [`SharedKeyframeList()`](/en-US/docs/Web/API/SharedKeyframeList/SharedKeyframeList) constructor.
These pages contain information that is not useful in any way anymore, and/or might be incorrect to the point where keeping it available might be confusing or bad for people to know.

These might be:

- Reference pages for API features that were removed from the specification before they were implemented in any browsers.
- Articles covering techniques that were later shown to be bad practice and superseded by better techniques.
- Articles containing information that were later replaced by other, better quality articles.
- Articles containing content that is inappropriate for MDN.
- Translations that are old, out-of-date, and difficult to fix, meaning that the English version is preferrable and starting a new translation would be an easier option.

#### When should a page be deleted?

A page should be deleted if it fits the above description.
To delete a page, you should use the "Delete this page feature" (_Advanced > Delete this page_) to delete the page.
You will probably not have the permissions to use this feature, and when thinking about deleting pages you should discuss it with the MDN community first — talk to us on our [Discourse forum](https://discourse.mozilla.org/c/mdn).

### When to document new technologies

On MDN, we are constantly looking to document new web standards technologies as appropriate.
We try to strike a balance between publishing the documentation early enough so developers can learn about new features as soon as they need to, and publishing it late enough so that the technology is mature and stable so the docs won't need constant updates or rapid removal.

In general, our definition of the earliest we'll consider documenting a new technology is:

_"When the feature is on a standards track and is implemented somewhere."_

You should definitely consider documenting a new technology if:

- It is specified in a specification document published under a reliable standards organization (such as W3C, WHATWG, Khronos, IETF, etc.), which has reached a reasonable level of stability (e.g. a W3C working draft or candidate recommendation, or the spec is looking to be fairly stable judging by the flow of issues filed against it).
- It is implemented consistently in at least one browser, with other browser developers showing signs of interest (such as an active ticket or "intent to implement" process in effect).

You should be more wary of documenting a new technology (but should still consider it if it makes sense) if it:

- Doesn't have a spec, or the spec is a rough note that looks liable to change.
- One or zero browsers currently implement it, and non-supporting browsers are not showing signs of interest in implementing it (you can gauge this by asking engineers who work on those browsers, looking at browser bug trackers and mailing lists, etc.).

You should not consider documenting a new technology if it:

- Is not a web-exposed technology and/or is completely proprietary.
- Is already showing signs of being deprecated, or superseded by a similar feature.

## Conventions

### When something is removed from the specification

Sometimes during the development of a new specification, or over the course of the evolution of living standards such as HTML, new elements, methods, properties, and so forth are added to the specification, stay there for a while, then get removed again.
Sometimes this happens very quickly, and sometimes these new items remain in the specification for months or even years before being removed.
This can make it tricky to decide how to handle the removal of the item from the spec.
Here are some guidelines to help you decide what to do.

> **Note:** For the purposes of this discussion, the word "item" is used to mean anything which can be part of a specification: an element or an attribute of an element, an interface or any individual method, property, or other member of an interface, and so forth.

- If the item was _never_ implemented in a release version of _any_ browser—even behind a preference or flag—delete any references to the item from the documentation.

  - If the item has any documentation pages describing only that one item (such as {{domxref("RTCPeerConnection.close()")}}), delete that page.
    If the removed item is an interface, this means removing any subpages describing the properties and methods on that interface as well.
  - Remove the item from any lists of properties, attributes, methods, and so forth.
    For methods of an interface, that means to remove it from the "Methods" section on the interface's overview page, for example.
  - Search the text of the overview page for that interface, element, etc. for any references to the removed item.
    Remove those references, being sure not to leave weird grammar issues or other problems with the text.
    This may mean not just deleting words but rewriting a sentence or paragraph to make more sense.
    It may also mean removing entire sections of content if the description of the item's use is lengthy.
  - Similarly, look for any discussion of the item in the guides and tutorials about the relevant API or technology.
    Remove those references, being sure not to leave weird grammar issues or other problems with the text.
    This may mean not just deleting words but rewriting a sentence or paragraph to make more sense.
    It may also mean removing entire sections of content if the description of the item's use is lengthy.
  - Search MDN for references to the removed item, in case there are discussions elsewhere.
    It's unlikely that there are, since if it was never implemented, it's unlikely to be widely discussed.
    Remove those mentions as well.
  - If the [Browser Compatibility Data repository's](https://github.com/mdn/browser-compat-data) JSON files contain data for the removed items, delete those objects from the JSON code and submit a PR with that change, explaining why in the commit message and the PR description.
    Be careful to check that you don't break the JSON syntax while doing this.

- If the item was implemented in any release version of any one or more browsers—but _only_ behind a preference or flag—do not delete the item from the documentation immediately.
  Instead, mark the item as deprecated as follows:

  - If the item has any documentation pages describing only that one item (such as {{domxref("RTCPeerConnection.close()")}}), add the [`deprecated_header`](https://github.com/mdn/yari/blob/main/kumascript/macros/Deprecated_Header.ejs) macro to the top of the page and add the {{tag("Deprecated")}} tag to the page's list of tags.
  - On the overview page for the element, interface, or API, find the list of items which includes the item that's been removed from the specification and add the [`deprecated_inline`](https://github.com/mdn/yari/blob/main/kumascript/macros/Deprecated_Inline.ejs) macro after the item's name in that list.
  - Search the informative text of the overview page for that interface, element, etc. for any references to the removed item.
    Add warning boxes in appropriate places with text along the lines of "\[whatever] has been removed from the specification and will be removed from browsers soon.
    See \[link to page] for a new way to do this."
  - Similarly, look for any discussion of the item in the guides and tutorials about the relevant API or technology. Add similar warnings.
  - Search MDN for references to the removed item, in case there are discussions elsewhere.
    Add similar warning boxes there as well.
  - At some point in the future, a decision may be made to actually remove the item from the documentation; we don't normally do this but if the item was especially unutilized or uninteresting, we may decide to do so.
  - Update any relevant entries in the [Browser Compatibility Data repo](https://github.com/mdn/browser-compat-data) to reflect the obsolescence of the item(s) affected.

- If the item was implemented in one or more release builds of browsers—without requiring a preference or flag to be changed—mark the item as deprecated, as follows:

  - If the item has any documentation pages describing only that one item (such as {{domxref("RTCPeerConnection.close()")}}), add the [`deprecated_header`](https://github.com/mdn/yari/blob/main/kumascript/macros/Deprecated_Header.ejs) macro to the top of the page and add the {{tag("Deprecated")}} tag to the page's list of tags.
  - On the overview page for the element, interface, or API, find the list of items which includes the item that's been removed from the specification and add the [`deprecated_inline`](https://github.com/mdn/yari/blob/main/kumascript/macros/Deprecated_Inline.ejs) macro after the item's name in that list.
  - Search the informative text of the overview page for that interface, element, etc. for any references to the removed item.
    Add warning boxes in appropriate places with text along the lines of "\[whatever] has been removed from the specification and is deprecated.
    It may be removed from browsers in the future, so you should not use it.
    See \[link to page] for a new way to do this."
  - Similarly, look for any discussion of the item in the guides and tutorials about the relevant API or technology. Add similar warnings.
  - Search MDN for references to the removed item, in case there are discussions elsewhere.
    Add similar warning boxes there as well.
  - It's unlikely that these items will be removed from the documentation anytime soon, if ever.
    It's possible, however, that some or all of the material may be moved to the [Archive](/en-US/docs/Archive) section of the site.
  - Update any relevant entries in the [Browser Compatibility Data repo](https://github.com/mdn/browser-compat-data) to reflect the deprecation of the item(s) affected.

Please use common sense with wording of warning messages and other changes to text suggested by the guidelines above.
Different items will require different wording and handling of the situation.
When in doubt, feel free to ask for advice on the [MDN Web Docs chat room](https://chat.mozilla.org/#/room/#mdn:mozilla.org) on [Matrix](https://wiki.mozilla.org/Matrix), or on the [MDN Web Docs discussion forum](https://discourse.mozilla.org/c/mdn).

### Copying content within MDN

Sometimes, you need to reuse the same text on multiple pages (or you want to use one page's content as a template for another page).
You have three options:

- If you want to copy an entire page:

  1. While viewing the page you want to copy, on the **Advanced** (gear) menu, choose  **[Clone this page](/en-US/docs/MDN/Contribute/Howto/Create_and_edit_pages#clone_of_an_existing_page)**.
     This opens the editor UI for a new page, with the contents of the cloned page already populated.
  2. Enter a new **Title** and **Slug** for the cloned page.
  3. Edit the contents of the page as needed, and save as usual.

- If you want to copy just part of a page, **don't just visit the page and copy from it**.
  This introduces unwanted additional bits of HTML into the destination page, and somebody will have to clean that up, you or another editor.
  Nobody wants that.
  To copy part of an MDN page to another page:

  1. On the source page, click the **Edit** button on the source page.
  2. **Copy the content you want to reuse from within the editor UI.**
  3. Click **Discard** to exit the editor UI for that page.
  4. Open the editor UI for page where you want to paste.
  5. Paste the content from the clipboard.

  > **Note:** Chrome does not generally include the classes applied to content when copying and pasting across documents in our editor.
  > You need to review the content after doing this and re-apply the lost styles.
  > Check tables, syntax boxes, syntax highlighting, and hidden sections of content in particular.

- Sometimes you literally want to use the same content on many pages.
  In this case, you might be best off placing the content in one page, then using the [`page`](https://github.com/mdn/yari/blob/main/kumascript/macros/page.ejs) macro to transclude the material from one page into another.
  This way, whenever the text on the source page is updated, the destination page will update as well (that is, this will happen on a forced-refresh or when the target page goes through a scheduled rebuild).

#### Copying content from elsewhere

Often, there is useful content about a topic somewhere on the web besides on MDN.
However, copying such content can be fraught with difficulties, both legal and technical.

On the technical level, search engines typically penalize a site in their rankings for reproducing content available elsewhere.
Therefore, it is preferable to have original content on MDN, to enhance the search engine ranking of MDN's content.
You can link to the existing content from MDN.

On the legal level, you must be authorized to contribute the content, and it must be licensed and attributed in a way that is compatible with [MDN's license](/en-US/docs/MDN/About#copyrights_and_licenses).

- **If you created the existing content** (for your own purposes and not as work-for-hire), and you are willing to contribute it to MDN under MDN's license, this is the easiest case, and you are free to contribute the content.
- **If the copyright for the content belongs to someone else**, it must be licensed and attributed compatibly with MDN's license.
  It is often not easy for someone who is not a lawyer to determine what licenses are compatible.
  To be on the safe side, contact a member of the [MDN staff team](https://wiki.mozilla.org/MDN#Staff_Team), who may consult Mozilla's Legal team for guidance if necessary.

#### How to communicate a spec conflict

Note that sometimes (but rarely) there is a conflict between different spec versions (usually W3C versus WHATWG), e.g. one version might have a feature listed as deprecated, while the other doesn't.
In such cases, consider what the reality is — i.e. what browsers are actually doing — and write an "important" note to summarize that latest status.
For example, as of Jan 2019 the [`inputmode`](/en-US/docs/Web/HTML/Global_attributes/inputmode) global attribute has a conflict, which was summarized like so:

> **Warning:** Spec conflict: The [WHATWG spec lists `inputmode`](https://html.spec.whatwg.org/multipage/interaction.html#attr-inputmode), and modern browsers are working towards supporting it.
> The [W3C HTML 5.2 spec](https://www.w3.org/TR/html52/index.html#contents) however no longer lists it (i.e. marks it as obsolete).
> You should consider the WHATWG definition as correct, until a consensus is reached.=
