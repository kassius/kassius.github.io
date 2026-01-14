(possibly incomplete)

## termux packages

```sh
pkg install nodejs libvips
```

### also termux packages

```sh
pkg install git build-essential
```

add here the compiling pkgs etc

## fixing node-gyp

```sh
mkdir ~/.gyp && echo "{'variables': {'android_ndk_path': ''}}" > ~/.gyp/include.gypi
```
[Source](https://www.reddit.com/r/termux/comments/1ewjj35/comment/lj11tnj/?utm_source=share&utm_medium=web3x&utm_name=web3xcss&utm_term=1&utm_content=share_button)

## finding the arch

```sh
dpkg --print-architecture
```
[Source](https://www.reddit.com/r/termux/comments/uxb312/comment/i9ww65g/?utm_source=share&utm_medium=web3x&utm_name=web3xcss&utm_term=1&utm_content=share_button)

## npm installing / building `sharp`

```sh
npm --os=linux --cpu=aarch64 --libc=bionic install
```