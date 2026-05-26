## Install the dependencies

```sh
pkg install clang python libffi openssl libsodium
```

## Install PyNaCl

From inside the virtual environment

```sh
SODIUM_INSTALL=system pip install pynacl 
```

[source](https://www.reddit.com/r/termux/comments/uczkwg/it_cant_build_wheel_for_pynacl_any_help/)