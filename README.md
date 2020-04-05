TypeScript React "pullstate" Async Actions Demo
==================================================

Use `createAsyncAction` of pullstate, we can avoid using `useState` to handle async actions。

But how can we implement "Click on a button to run an async action" with it?
See `RemoteHello2.tsx`, the "FIXME" part.

PS:
Pullstate doesn't have a ideal way to handle this for now:

https://github.com/lostpebble/pullstate/issues/39

Author gives an workaround but we need to pass argument twice.

```
npm install
npm run demo
```

It will open page on browser automatically.
