# jQuery Nearest

There have been few, but significant moments where `.find()` and `.children()` have just not been enough.  Instances where the opposite of `.closest()` were necessary.  Finding the 'nearest' recursive child element is an expensive task (heck, traversing the DOM in general makes me shiver), but on a rare occasion you'll find it a necessary task.  That's where `$().nearest()` debuts.

## Documentation

There's not much to document other than there is one argument, the "filter".

```js
$('body').nearest('.end-child');
```

The filter attribute is simply any CSS selector you might pass as a jQuery....query.