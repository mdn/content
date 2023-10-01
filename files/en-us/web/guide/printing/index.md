---
title: Printing
slug: Web/Guide/Printing
page-type: guide
---

<section id="Quick_links">
  {{ListSubpagesForSidebar("/en-US/docs/Web/Guide")}}
</section>

There may be times in which your website or application would like to improve the user's experience when printing content. There are a number of possible scenarios:

- You wish to adjust layout to take advantage of the size and shape of the paper.
- You wish to use different styles to enhance the appearance of your content on paper.
- You wish to use higher resolution images for a better result.
- You want to adjust the user experience of printing, such as presenting a specially-formatted version of your content before printing begins.

There may be other cases in which you want to manage the printing process, but these are some of the most common scenarios. This article provides tips and techniques for helping your web content print better.

## Using a print style sheet

Add the following to your {{HTMLElement("head")}} tag.

```html
<link href="/path/to/print.css" media="print" rel="stylesheet" />
```

## Using media queries to improve layout

You can use the CSS {{cssxref("@media")}} at-rule to set a different appearance for your webpage when it is printed on paper and when it is displayed on the screen. The `print` option sets the styles that will be used when the content is printed.

Add this at the end of your stylesheet. Note that specificity and precedence rules still apply:

```css
@media print {
  /* All your print styles go here */
  #header,
  #footer,
  #nav {
    display: none !important;
  }
}
```

## Detecting print requests

Browsers send {{domxref("Window/beforeprint_event", "beforeprint")}} and {{domxref("Window/afterprint_event", "afterprint")}} events to let content determine when printing may have occurred. You can use this to adjust the user interface presented during printing (such as by displaying or hiding user interface elements during the print process).

## Examples

Here are some common examples.

### Automatically close the window when finished

The following example will close the window after the user has printed its contents:

```js
window.addEventListener("afterprint", () => self.close);
```

### Print an external page without opening it

If you want to be able to print an external page without opening it, you can utilize a hidden {{HTMLElement("iframe")}} (see: [HTMLIFrameElement](/en-US/docs/Web/API/HTMLIFrameElement)), automatically removing it after the user prints its contents. The following is a possible example which will print a file named `externalPage.html`:

#### HTML

```html
<button id="print_external">Print external page!</button>
```

#### JavaScript

```js
function setPrint() {
  const closePrint = () => {
    document.body.removeChild(this);
  };
  this.contentWindow.onbeforeunload = closePrint;
  this.contentWindow.onafterprint = closePrint;
  this.contentWindow.print();
}

document.getElementById("print_external").addEventListener("click", () => {
  const hideFrame = document.createElement("iframe");
  hideFrame.onload = setPrint;
  hideFrame.style.display = "none"; // hide iframe
  hideFrame.src = "external-page.html";
  document.body.appendChild(hideFrame);
});
```

## See also

- [`window.print`](/en-US/docs/Web/API/Window/print)
- {{ domxref("window.beforeprint_event", "beforeprint") }} event
- {{ domxref("window.afterprint_event", "afterprint") }} event
- [Media queries](/en-US/docs/Web/CSS/CSS_media_queries/Using_media_queries)
- {{cssxref("@media")}}
