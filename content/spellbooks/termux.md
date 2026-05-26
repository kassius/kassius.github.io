
```sh
ls
```

## `gimme()` function

```zsh
function gimme() {
. . echo -n $@ | monospace_ascii | termux-clipboard-set \
. . && termux-clipboard-get
}
```

> [!info] gimme to me baby
> uses [[monospace_ascii]]

## retrieve architecture

```zsh
dpkg --print-architecture
```

[source](https://www.reddit.com/r/termux/comments/uxb312/comment/i9ww65g/?utm_source=share&utm_medium=web3x&utm_name=web3xcss&utm_term=1&utm_content=share_button)