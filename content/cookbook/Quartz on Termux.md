> [!warning]
> This article is a personal annotation and is possibly and probably incomplete

I have to build [sharp](https://sharp.pixelplumbing.com/) dependency manually when updating quartz from Termux; here I'm posting some annotations for myself, so I don't forget what I need to do to build it in future updates like happened to me these days.

## building `sharp`

* [Cross-platform](https://sharp.pixelplumbing.com/install/#cross-platform)
* [Custom libvips](https://sharp.pixelplumbing.com/install/#custom-libvips)
* [Building from source](https://sharp.pixelplumbing.com/install/#building-from-source)

## `sharp` dependencies

- C++17 compiler
- [node-addon-api](https://www.npmjs.com/package/node-addon-api) version 7+
- [node-gyp](https://github.com/nodejs/node-gyp#installation) version 9+ and its dependencies

[source](https://sharp.pixelplumbing.com/install/#building-from-source)

## extra documentation

### npm-install

* [--cpu](https://docs.npmjs.com/cli/v9/commands/npm-install#cpu)
* [--os](https://docs.npmjs.com/cli/v9/commands/npm-install#os)
* ~~--libc~~

### package.json

* [cpu](https://docs.npmjs.com/cli/v11/configuring-npm/package-json#cpu)
* [libc](https://docs.npmjs.com/cli/v11/configuring-npm/package-json#libc)
* [os](https://docs.npmjs.com/cli/v11/configuring-npm/package-json#os)

## termux packages

```sh
pkg install nodejs libvips
```

### also termux packages

```sh
pkg install git build-essential
```

add here the compiling pkgs etc

## fixing node-gyp (`sharp` dependency)

```sh
mkdir ~/.gyp && echo "{'variables': {'android_ndk_path': ''}}" > ~/.gyp/include.gypi
```
[source](https://www.reddit.com/r/termux/comments/1ewjj35/comment/lj11tnj/?utm_source=share&utm_medium=web3x&utm_name=web3xcss&utm_term=1&utm_content=share_button)

## finding the arch

```sh
dpkg --print-architecture
```
[source](https://www.reddit.com/r/termux/comments/uxb312/comment/i9ww65g/?utm_source=share&utm_medium=web3x&utm_name=web3xcss&utm_term=1&utm_content=share_button)

## installing `sharp` build dependencies

```sh
npm install --save --os=linux --cpu=aarch64 --libc=bionic node-addon-api node-gyp
```
[source](https://sharp.pixelplumbing.com/install/#building-from-source)

## npm installing quartz / building `sharp`

```sh
npm --os=linux --cpu=aarch64 --libc=bionic install
```
[source](https://quartz.jzhao.xyz/#-get-started)

## checking installed `sharp` version

```sh
npm ls sharp
```

## upgrading quartz

```sh
npx --os=linux --cpu=aarch64 --libc=bionic quartz update
```
[source](https://quartz.jzhao.xyz/upgrading)
