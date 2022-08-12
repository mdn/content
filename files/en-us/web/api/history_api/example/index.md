---
title: Ajax navigation example
slug: Web/API/History_API/Example
page-type: guide
---
This is an example of an AJAX website composed only of three pages (_first_page.php_, _second_page.php_ and _third_page.php_). To see how it works, please create the following files (or git clone [https://github.com/giabao/mdn-ajax-nav-example.git](https://github.com/giabao/mdn-ajax-nav-example) ):

> **Note:** For fully integrating the {{HTMLElement("form")}} elements within this _mechanism_, please take a look at the paragraph [Submitting forms and uploading files](/en-US/docs/Web/API/XMLHttpRequest/Using_XMLHttpRequest#submitting_forms_and_uploading_files).

**first_page.php**:

```php
<?php
    $page_title = "First page";

    $as_json = false;
    if (isset($_GET["view_as"]) && $_GET["view_as"] == "json") {
        $as_json = true;
        ob_start();
    } else {
?>
<!DOCTYPE html>
<html lang="en-US">
<head>
<?php
        include "include/header.php";
        echo "<title>" . $page_title . "</title>";
?>
</head>

<body>

<?php include "include/before_content.php"; ?>

<p>This paragraph is shown only when the navigation starts from <strong>first_page.php</strong>.</p>

<div id="ajax-content">
<?php } ?>

    <p>This is the content of <strong>first_page.php</strong>.</p>

<?php
    if ($as_json) {
        echo json_encode(array("page" => $page_title, "content" => ob_get_clean()));
    } else {
?>
</div>

<p>This paragraph is shown only when the navigation starts from <strong>first_page.php</strong>.</p>

<?php
        include "include/after_content.php";
        echo "</body>\n</html>";
    }
?>
```

**second_page.php**:

```php
<?php
    $page_title = "Second page";

    $as_json = false;
    if (isset($_GET["view_as"]) && $_GET["view_as"] == "json") {
        $as_json = true;
        ob_start();
    } else {
?>
<!DOCTYPE html>
<html lang="en-US">
<head>
<?php
        include "include/header.php";
        echo "<title>" . $page_title . "</title>";
?>
</head>

<body>

<?php include "include/before_content.php"; ?>

<p>This paragraph is shown only when the navigation starts from <strong>second_page.php</strong>.</p>

<div id="ajax-content">
<?php } ?>

    <p>This is the content of <strong>second_page.php</strong>.</p>

<?php
    if ($as_json) {
        echo json_encode(array("page" => $page_title, "content" => ob_get_clean()));
    } else {
?>
</div>

<p>This paragraph is shown only when the navigation starts from <strong>second_page.php</strong>.</p>

<?php
        include "include/after_content.php";
        echo "</body>\n</html>";
    }
?>
```

**third_page.php**:

```php
<?php
    $page_title = "Third page";
    $page_content = "<p>This is the content of <strong>third_page.php</strong>. This content is stored into a PHP variable.</p>";

    if (isset($_GET["view_as"]) && $_GET["view_as"] == "json") {
        echo json_encode(array("page" => $page_title, "content" => $page_content));
    } else {
?>
<!DOCTYPE html>
<html lang="en-US">
<head>
<?php
        include "include/header.php";
        echo "<title>" . $page_title . "</title>";
?>
</head>

<body>

<?php include "include/before_content.php"; ?>

<p>This paragraph is shown only when the navigation starts from <strong>third_page.php</strong>.</p>

<div id="ajax-content">
<?php echo $page_content; ?>
</div>

<p>This paragraph is shown only when the navigation starts from <strong>third_page.php</strong>.</p>

<?php
        include "include/after_content.php";
        echo "</body>\n</html>";
    }
?>
```

**css/style.css**:

```css
#ajax-loader {
    position: fixed;
    display: table;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
}

#ajax-loader > div {
    display: table-cell;
    width: 100%;
    height: 100%;
    vertical-align: middle;
    text-align: center;
    background-color: #000000;
    opacity: 0.65;
}
```

**include/after_content.php**:

```php
<p>This is the footer. It is shared between all Ajax pages.</p>
```

**include/before_content.php**:

```php
<p>
[ <a class="ajax-nav" href="first_page.php">First example</a>
| <a class="ajax-nav" href="second_page.php">Second example</a>
| <a class="ajax-nav" href="third_page.php">Third example</a>
| <a class="ajax-nav" href="unexisting.php">Unexisting page</a> ]
</p>
```

**include/header.php**:

```html
<meta charset="UTF-8" />
<script src="js/ajax_nav.js"></script>
<link rel="stylesheet" href="css/style.css" />
```

**js/ajax_nav.js**:

```js
"use strict";

const ajaxRequest = new (function () {
    let req;
    let isLoading = false;
    let updateURL = false;

    /* customizable constants */
    const targetId = "ajax-content";
    const viewKey = "view_as";
    const ajaxClass = "ajax-nav";

    /* not customizable constants */
    const searchRegex = /\?.*$/;
    const hostRegex = /^[^?]*\?*&*/;
    const viewRegex = new RegExp(`&${viewKey}\\=[^&]*|&*$`, "i");
    const endQstMarkRegex = /\?$/;
    const loadingBox = document.createElement("div");
    const cover = document.createElement("div");
    const loadingImg = new Image();
    const pageInfo = {
        title: null,
        url: location.href,
    };
    /* http://www.iana.org/assignments/http-status-codes/http-status-codes.xml */
    const HTTP_STATUS = {
        100: "Continue",
        101: "Switching Protocols",
        102: "Processing",
        200: "OK",
        201: "Created",
        202: "Accepted",
        203: "Non-Authoritative Information",
        204: "No Content",
        205: "Reset Content",
        206: "Partial Content",
        207: "Multi-Status",
        208: "Already Reported",
        226: "IM Used",
        300: "Multiple Choices",
        301: "Moved Permanently",
        302: "Found",
        303: "See Other",
        304: "Not Modified",
        305: "Use Proxy",
        306: "Reserved",
        307: "Temporary Redirect",
        308: "Permanent Redirect",
        400: "Bad Request",
        401: "Unauthorized",
        402: "Payment Required",
        403: "Forbidden",
        404: "Not Found",
        405: "Method Not Allowed",
        406: "Not Acceptable",
        407: "Proxy Authentication Required",
        408: "Request Timeout",
        409: "Conflict",
        410: "Gone",
        411: "Length Required",
        412: "Precondition Failed",
        413: "Request Entity Too Large",
        414: "Request-URI Too Long",
        415: "Unsupported Media Type",
        416: "Requested Range Not Satisfiable",
        417: "Expectation Failed",
        422: "Unprocessable Entity",
        423: "Locked",
        424: "Failed Dependency",
        425: "Unassigned",
        426: "Upgrade Required",
        427: "Unassigned",
        428: "Precondition Required",
        429: "Too Many Requests",
        430: "Unassigned",
        431: "Request Header Fields Too Large",
        500: "Internal Server Error",
        501: "Not Implemented",
        502: "Bad Gateway",
        503: "Service Unavailable",
        504: "Gateway Timeout",
        505: "HTTP Version Not Supported",
        506: "Variant Also Negotiates (Experimental)",
        507: "Insufficient Storage",
        508: "Loop Detected",
        509: "Unassigned",
        510: "Not Extended",
        511: "Network Authentication Required",
    };

    function closeReq() {
        loadingBox.parentNode && document.body.removeChild(loadingBox);
        isLoading = false;
    }

    function abortReq() {
        if (!isLoading) {
            return;
        }
        req.abort();
        closeReq();
    }

    function ajaxError() {
        alert("Unknown error.");
    }

    function ajaxLoad() {
        let msg;
        const status = this.status;
        switch (status) {
            case 200:
                msg = JSON.parse(this.responseText);
                document.title = pageInfo.title = msg.page;
                document.getElementById(targetId).innerHTML = msg.content;
                if (updateURL) {
                    history.pushState(pageInfo, pageInfo.title, pageInfo.url);
                    updateURL = false;
                }
                break;
            default:
                msg = `${status}: ${HTTP_STATUS[status] || "Unknown"}`;
                switch (Math.floor(status / 100)) {
                    /*
                    case 1:
                        // Informational 1xx
                        console.log("Information code " + vMsg);
                        break;
                    case 2:
                        // Successful 2xx
                        console.log("Successful code " + vMsg);
                        break;
                    case 3:
                        // Redirection 3xx
                        console.log("Redirection code " + vMsg);
                        break;
                    */
                    case 4:
                        /* Client Error 4xx */
                        alert(`Client Error #${msg}`);
                        break;
                    case 5:
                        /* Server Error 5xx */
                        alert(`Server Error #${msg}`);
                        break;
                    default:
                        /* Unknown status */
                        ajaxError();
                }
        }
        closeReq();
    }

    function filterURL(url, viewMode) {
        return (
            url.replace(searchRegex, "") +
            (
                `?${
                url
                    .replace(hostRegex, "&")
                    .replace(viewRegex, viewMode ? `&${viewKey}=${viewMode}` : "")
                    .slice(1)}`
            ).replace(endQstMarkRegex, "")
        );
    }

    function getPage(page) {
        if (isLoading) {
            return;
        }
        req = new XMLHttpRequest();
        isLoading = true;
        req.onload = ajaxLoad;
        req.onerror = ajaxError;
        if (page) {
            pageInfo.url = filterURL(page, null);
        }
        req.open("get", filterURL(pageInfo.url, "json"), true);
        req.send();
        loadingBox.parentNode || document.body.appendChild(loadingBox);
    }

    function requestPage(url) {
        if (history.pushState) {
            updateURL = true;
            getPage(url);
        } else {
            /* Ajax navigation is not supported */
            location.assign(url);
        }
    }

    function processLink() {
        if (this.className === ajaxClass) {
            requestPage(this.href);
            return false;
        }
        return true;
    }

    function init() {
        pageInfo.title = document.title;
        history.replaceState(pageInfo, pageInfo.title, pageInfo.url);
        for (const link of document.links) {
            link.onclick = processLink;
        };
    }

    loadingBox.id = "ajax-loader";
    cover.onclick = abortReq;
    loadingImg.src = "data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==";
    cover.appendChild(loadingImg);
    loadingBox.appendChild(cover);

    onpopstate = (event) => {
        updateURL = false;
        pageInfo.title = event.state.title;
        pageInfo.url = event.state.url;
        getPage();
    };

    window.addEventListener("load", init, false);

    // Public methods

    this.open = requestPage;
    this.stop = abortReq;
    this.rebuildLinks = init;
})();
```

For more information, please see: [Working with the History API](/en-US/docs/Web/API/History_API/Working_with_the_History_API).

## See also

- {{ domxref("window.history") }}
- {{domxref("Window/popstate_event", "popstate")}} event
