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
[Source](https://www.reddit.com/r/termux/comments/1ewjj35/gyp_error/)

## finding the arch

```sh
dpkg --print-architecture
```

## npm installing / building `sharp`

```sh
npm --os=linux --cpu=aarch64 --libc=bionic install
```