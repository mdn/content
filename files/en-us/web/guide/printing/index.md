---
title: Printing
slug: Web/Guide/Printing
tags:
  - DOM
  - Guide
  - NeedsContent
  - NeedsRelocation
  - printing
---
There may be times in which your web site or application would like to improve the user's experience when printing content. There are a number of possible scenarios:

- You wish to adjust layout to take advantage of the size and shape of the paper.
- You wish to use different styles to enhance the appearance of your content on paper.
- You wish to use higher resolution images for a better result.
- You want to adjust the user experience of printing, such as presenting a specially-formatted version of your content before printing begins.

There may be other cases in which you want to manage the printing process, but these are some of the most common scenarios. This article provides tips and techniques for helping your web content print better.

## Using a print style sheet

Add the following to your {{HTMLElement("head")}} tag.

    <link href="/path/to/print.css" media="print" rel="stylesheet" />

## Using media queries to improve layout

## Detecting print requests

Some browsers (including Firefox 6 and later and Internet Explorer) send `beforeprint` and `afterprint` events to let content determine when printing may have occurred. You can use this to adjust the user interface presented during printing (such as by displaying or hiding user interface elements during the print process).

> **Note:** You can also use [`window.onbeforeprint`](/en-US/docs/Web/API/WindowEventHandlers/onbeforeprint) and [`window.onafterprint`](/en-US/docs/Web/API/WindowEventHandlers/onafterprint) to assign handlers for these events, but using {{domxref("EventTarget.addEventListener()")}} is preferred.

## Examples

Here are some common examples.

#### Open and automatically close a popup window when finished

If you want to be able to automatically close a [popup window](/en-US/docs/Web/API/Window/open) (for example, the printer-friendly version of a document) after the user prints its contents, you can use code like this:

```html
<!doctype html>
<html>
<head>
  <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" /> <title>JavaScript Window Close Example </title>
  <script type="text/javascript">
    function popuponclick() {
      my_window = window.open('', 'mywindow', 'status=1,width=350,height=150');
      my_window.document.write('<html><head><title>Print Me</title></head>');
      my_window.document.write('<body onafterprint="self.close()">');
      my_window.document.write('<p>When you print this window, it will close afterward.</p>');
      my_window.document.write('</body></html>');
  }
  </script>
</head>
<body>
  <p>To try out the <code>afterprint</code> event, click the link below to open
  the window to print. You can also try changing the code to use <code>beforeprint</code>
  to see the difference.</p>
  <p><a href="javascript: popuponclick()">Open Popup Window</a></p>
</body>
</html>
```

[View Live Examples](https://media.prod.mdn.mozit.cloud/samples/domref/printevents.html)

### Print an external page without opening it

If you want to be able to print an external page without opening it, you can utilize a hidden {{HTMLElement("iframe")}} (see: [HTMLIFrameElement](/en-US/docs/Web/API/HTMLIFrameElement)), automatically removing it after the user prints its contents. The following is a possible example which will print a file named `externalPage.html`:

```html
<!doctype html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
<title>MDN Example</title>
<script type="text/javascript">
function closePrint () {
  document.body.removeChild(this.__container__);
}

function setPrint () {
  this.contentWindow.__container__ = this;
  this.contentWindow.onbeforeunload = closePrint;
  this.contentWindow.onafterprint = closePrint;
  this.contentWindow.focus(); // Required for IE
  this.contentWindow.print();
}

function printPage (sURL) {
  var oHideFrame = document.createElement("iframe");
  oHideFrame.onload = setPrint;
  oHideFrame.style.position = "fixed";
  oHideFrame.style.right = "0";
  oHideFrame.style.bottom = "0";
  oHideFrame.style.width = "0";
  oHideFrame.style.height = "0";
  oHideFrame.style.border = "0";
  oHideFrame.src = sURL;
  document.body.appendChild(oHideFrame);
}
</script>
</head>

<body>
  <p><span onclick="printPage('externalPage.html');" style="cursor:pointer;text-decoration:underline;color:#0000ff;">Print external page!</span></p>
</body>
</html>
```

> **Note:** Older versions of Internet Explorer cannot print the contents of a hidden {{HTMLElement("iframe")}}.

## See also

- [`window.print`](/en-US/docs/Web/API/Window/print)
- [`window.onbeforeprint`](/en-US/docs/Web/API/WindowEventHandlers/onbeforeprint)
- [`window.onafterprint`](/en-US/docs/Web/API/WindowEventHandlers/onafterprint)
- [Media queries](/en-US/docs/Web/CSS/Media_Queries/Using_media_queries "CSS/Media queries")
- {{cssxref("@media")}}
