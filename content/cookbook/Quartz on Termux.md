==possibly and probably incomplete==

I have to build [sharp](https://sharp.pixelplumbing.com/) dependency manually when updating quartz from Termux; here I'm posting some annotations for myself, so I don't forget what I need to do tp build sharp in future updates – like happened to me actually.

## building sharp

* [Cross-platform](https://sharp.pixelplumbing.com/install/#cross-platform)
* [Custom libvips](https://sharp.pixelplumbing.com/install/#custom-libvips)
* [Building from source](https://sharp.pixelplumbing.com/install/#building-from-source)

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