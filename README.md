A lightweight library for lazy loading `<script src="" />` tags. It will inject these tags runtime. Before injecting, it will check if the script already exists.

This is especially useful when you're mixing jQuery and jQuery plugins with SPA apps like Vue, React etc.

## Installation

```
yarn add lazy-load-script
```

## Usage

```javascript
import lazyLoad from "lazy-load-script";

lazyLoad("https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js")
  .then(() => lazyLoad("https://cdnjs.cloudflare.com/ajax/libs/jsgrid/1.5.3/jsgrid.min.js"))
  .then(() => doWork());
```
