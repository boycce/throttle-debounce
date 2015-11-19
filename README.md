# Throttle-Debounce
Throttle/debounce your functions.

This is the same as Ben Alman's jquery-throttle-debounce, but with a few alterations and no jQuery references.

Throttle/debounce allows you to rate-limit your functions in multiple useful ways. Passing a delay and callback to throttle returns a new function that will execute no more than once every delay milliseconds. Passing a delay and callback to debounce returns a new function that will execute only once, coalescing multiple sequential calls into a single execution at either the very beginning or end.

# License

MIT © Ricky Boyce
