## Get key code for `ydotool`

1. Command to get the key's name
    ```sh
    sudo libinput record
    ```
2. File to look for the code
    ```sh
    vim /usr/include/linux/input-event-codes.h
    ```

## Get full file path

```sh
readlink -f file.txt
```

## Get total size of a  directory

### using `du` (disk usage)

```sh
du -sh .
```

or

```sh
du -sh /path/to/directory
```

**-s** summarize

**-h** human readable

### using `ncdu` (ncurses disk usage)


```sh
ncdu.
```

or

```sh
ncdu -sh /path/to/directory
```

### using `tree`

```sh
tree -h --du
```

### List subdirectories, order by largest first

This is an example; change the depth as needed

```sh
du -h --max-depth 3 | sort -hr | less
```