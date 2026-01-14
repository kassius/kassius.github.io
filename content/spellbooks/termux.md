
```sh
ls
```

## `gimme()` function

```zsh
function gimme() { echo -n $@ | monospace_ascii | termux-clipboard-set && termux-clipboard-get }
```

> [!info] gimme to me baby
> uses [[monospace_ascii]]
