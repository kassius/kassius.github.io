https://gist.github.com/iacchus/5e5a4c3f0badf49e87ced15ef84889bd

* **encode** — Encode the string using the codec registered for encoding.

  ```python
  encode(encoding='utf-8', errors='strict')
  ```
    
      encoding
        The encoding in which to encode the string.
      errors
        The error handling scheme to use for encoding errors.
        The default is 'strict' meaning that encoding errors raise a
        UnicodeEncodeError.  Other possible values are 'ignore', 'replace' and
        'xmlcharrefreplace' as well as any other name registered with
        codecs.register_error that can handle UnicodeEncodeErrors.

  
  | Part | Description |
  |------|-------------|
  | 1 | <div>Encode the string using the codec registered for encoding.</div> |
  | 2 | <div>  encoding
      The encoding in which to encode the string.
    errors
      The error handling scheme to use for encoding errors.
      The default is 'strict' meaning that encoding errors raise a
      UnicodeEncodeError.  Other possible values are 'ignore', 'replace' and
      'xmlcharrefreplace' as well as any other name registered with
      codecs.register_error that can handle UnicodeEncodeErrors.</div> |
---

* **replace** — Return a copy with all occurrences of substring old replaced by new.

  ```python
  replace(old, new, count=-1, /)
  ```
    
      count
        Maximum number of occurrences to replace.
        -1 (the default value) means replace all occurrences.
    
    If the optional argument count is given, only the first count occurrences are
    replaced.

  
  | Part | Description |
  |------|-------------|
  | 1 | <div>Return a copy with all occurrences of substring old replaced by new.</div> |
  | 2 | <div>  count
      Maximum number of occurrences to replace.
      -1 (the default value) means replace all occurrences.</div> |
  | 3 | <div>If the optional argument count is given, only the first count occurrences are
  replaced.</div> |
---

* **split** — Return a list of the substrings in the string, using sep as the separator string.

  ```python
  split(sep=None, maxsplit=-1)
  ```
    
      sep
        The separator used to split the string.
    
        When set to None (the default value), will split on any whitespace
        character (including \n \r \t \f and spaces) and will discard
        empty strings from the result.
      maxsplit
        Maximum number of splits.
        -1 (the default value) means no limit.
    
    Splitting starts at the front of the string and works to the end.
    
    Note, str.split() is mainly useful for data that has been intentionally
    delimited.  With natural text that includes punctuation, consider using
    the regular expression module.

  
  | Part | Description |
  |------|-------------|
  | 1 | <div>Return a list of the substrings in the string, using sep as the separator string.</div> |
  | 2 | <div>  sep
      The separator used to split the string.</div> |
  | 3 | <div>    When set to None (the default value), will split on any whitespace
      character (including \n \r \t \f and spaces) and will discard
      empty strings from the result.
    maxsplit
      Maximum number of splits.
      -1 (the default value) means no limit.</div> |
  | 4 | <div>Splitting starts at the front of the string and works to the end.</div> |
  | 5 | <div>Note, str.split() is mainly useful for data that has been intentionally
  delimited.  With natural text that includes punctuation, consider using
  the regular expression module.</div> |
---

* **rsplit** — Return a list of the substrings in the string, using sep as the separator string.

  ```python
  rsplit(sep=None, maxsplit=-1)
  ```
    
      sep
        The separator used to split the string.
    
        When set to None (the default value), will split on any whitespace
        character (including \n \r \t \f and spaces) and will discard
        empty strings from the result.
      maxsplit
        Maximum number of splits.
        -1 (the default value) means no limit.
    
    Splitting starts at the end of the string and works to the front.

  
  | Part | Description |
  |------|-------------|
  | 1 | <div>Return a list of the substrings in the string, using sep as the separator string.</div> |
  | 2 | <div>  sep
      The separator used to split the string.</div> |
  | 3 | <div>    When set to None (the default value), will split on any whitespace
      character (including \n \r \t \f and spaces) and will discard
      empty strings from the result.
    maxsplit
      Maximum number of splits.
      -1 (the default value) means no limit.</div> |
  | 4 | <div>Splitting starts at the end of the string and works to the front.</div> |
---

* **join** — Concatenate any number of strings.

  ```python
  join(iterable, /)
  ```
    
    The string whose method is called is inserted in between each given string.
    The result is returned as a new string.
    
    Example: '.'.join(['ab', 'pq', 'rs']) -> 'ab.pq.rs'

  
  | Part | Description |
  |------|-------------|
  | 1 | <div>Concatenate any number of strings.</div> |
  | 2 | <div>The string whose method is called is inserted in between each given string.
  The result is returned as a new string.</div> |
  | 3 | <div>Example: '.'.join(['ab', 'pq', 'rs']) -> 'ab.pq.rs'</div> |
---

* **capitalize** — Return a capitalized version of the string.

  ```python
  capitalize()
  ```
    
    More specifically, make the first character have upper case and the rest lower
    case.

  
  | Part | Description |
  |------|-------------|
  | 1 | <div>Return a capitalized version of the string.</div> |
  | 2 | <div>More specifically, make the first character have upper case and the rest lower
  case.</div> |
---

* **casefold** — Return a version of the string suitable for caseless comparisons.

  ```python
  casefold()
  ```
    


  
  | Part | Description |
  |------|-------------|
  | 1 | <div>Return a version of the string suitable for caseless comparisons.</div> |
---

* **title** — Return a version of the string where each word is titlecased.

  ```python
  title()
  ```
    
    More specifically, words start with uppercased characters and all remaining
    cased characters have lower case.

  
  | Part | Description |
  |------|-------------|
  | 1 | <div>Return a version of the string where each word is titlecased.</div> |
  | 2 | <div>More specifically, words start with uppercased characters and all remaining
  cased characters have lower case.</div> |
---

* **center** — Return a centered string of length width.

  ```python
  center(width, fillchar=' ', /)
  ```
    
    Padding is done using the specified fill character (default is a space).

  
  | Part | Description |
  |------|-------------|
  | 1 | <div>Return a centered string of length width.</div> |
  | 2 | <div>Padding is done using the specified fill character (default is a space).</div> |
---

* **count** — S.count(sub[, start[, end]]) -> int

      Return the number of non-overlapping occurrences of substring sub in
    string S[start:end].  Optional arguments start and end are
    interpreted as in slice notation.

  
  | Part | Description |
  |------|-------------|
  | 1 | <div>S.count(sub[, start[, end]]) -> int</div> |
  | 2 | <div>Return the number of non-overlapping occurrences of substring sub in
  string S[start:end].  Optional arguments start and end are
  interpreted as in slice notation.</div> |
---

* **expandtabs** — Return a copy where all tab characters are expanded using spaces.

  ```python
  expandtabs(tabsize=8)
  ```
    
    If tabsize is not given, a tab size of 8 characters is assumed.

  
  | Part | Description |
  |------|-------------|
  | 1 | <div>Return a copy where all tab characters are expanded using spaces.</div> |
  | 2 | <div>If tabsize is not given, a tab size of 8 characters is assumed.</div> |
---

* **find** — S.find(sub[, start[, end]]) -> int

      Return the lowest index in S where substring sub is found,
    such that sub is contained within S[start:end].  Optional
    arguments start and end are interpreted as in slice notation.
    
    Return -1 on failure.

  
  | Part | Description |
  |------|-------------|
  | 1 | <div>S.find(sub[, start[, end]]) -> int</div> |
  | 2 | <div>Return the lowest index in S where substring sub is found,
  such that sub is contained within S[start:end].  Optional
  arguments start and end are interpreted as in slice notation.</div> |
  | 3 | <div>Return -1 on failure.</div> |
---

* **partition** — Partition the string into three parts using the given separator.

  ```python
  partition(sep, /)
  ```
    
    This will search for the separator in the string.  If the separator is found,
    returns a 3-tuple containing the part before the separator, the separator
    itself, and the part after it.
    
    If the separator is not found, returns a 3-tuple containing the original string
    and two empty strings.

  
  | Part | Description |
  |------|-------------|
  | 1 | <div>Partition the string into three parts using the given separator.</div> |
  | 2 | <div>This will search for the separator in the string.  If the separator is found,
  returns a 3-tuple containing the part before the separator, the separator
  itself, and the part after it.</div> |
  | 3 | <div>If the separator is not found, returns a 3-tuple containing the original string
  and two empty strings.</div> |
---

* **index** — S.index(sub[, start[, end]]) -> int

      Return the lowest index in S where substring sub is found,
    such that sub is contained within S[start:end].  Optional
    arguments start and end are interpreted as in slice notation.
    
    Raises ValueError when the substring is not found.

  
  | Part | Description |
  |------|-------------|
  | 1 | <div>S.index(sub[, start[, end]]) -> int</div> |
  | 2 | <div>Return the lowest index in S where substring sub is found,
  such that sub is contained within S[start:end].  Optional
  arguments start and end are interpreted as in slice notation.</div> |
  | 3 | <div>Raises ValueError when the substring is not found.</div> |
---

* **ljust** — Return a left-justified string of length width.

  ```python
  ljust(width, fillchar=' ', /)
  ```
    
    Padding is done using the specified fill character (default is a space).

  
  | Part | Description |
  |------|-------------|
  | 1 | <div>Return a left-justified string of length width.</div> |
  | 2 | <div>Padding is done using the specified fill character (default is a space).</div> |
---

* **lower** — Return a copy of the string converted to lowercase.

  ```python
  lower()
  ```
    


  
  | Part | Description |
  |------|-------------|
  | 1 | <div>Return a copy of the string converted to lowercase.</div> |
---

* **lstrip** — Return a copy of the string with leading whitespace removed.

  ```python
  lstrip(chars=None, /)
  ```
    
    If chars is given and not None, remove characters in chars instead.

  
  | Part | Description |
  |------|-------------|
  | 1 | <div>Return a copy of the string with leading whitespace removed.</div> |
  | 2 | <div>If chars is given and not None, remove characters in chars instead.</div> |
---

* **rfind** — S.rfind(sub[, start[, end]]) -> int

      Return the highest index in S where substring sub is found,
    such that sub is contained within S[start:end].  Optional
    arguments start and end are interpreted as in slice notation.
    
    Return -1 on failure.

  
  | Part | Description |
  |------|-------------|
  | 1 | <div>S.rfind(sub[, start[, end]]) -> int</div> |
  | 2 | <div>Return the highest index in S where substring sub is found,
  such that sub is contained within S[start:end].  Optional
  arguments start and end are interpreted as in slice notation.</div> |
  | 3 | <div>Return -1 on failure.</div> |
---

* **rindex** — S.rindex(sub[, start[, end]]) -> int

      Return the highest index in S where substring sub is found,
    such that sub is contained within S[start:end].  Optional
    arguments start and end are interpreted as in slice notation.
    
    Raises ValueError when the substring is not found.

  
  | Part | Description |
  |------|-------------|
  | 1 | <div>S.rindex(sub[, start[, end]]) -> int</div> |
  | 2 | <div>Return the highest index in S where substring sub is found,
  such that sub is contained within S[start:end].  Optional
  arguments start and end are interpreted as in slice notation.</div> |
  | 3 | <div>Raises ValueError when the substring is not found.</div> |
---

* **rjust** — Return a right-justified string of length width.

  ```python
  rjust(width, fillchar=' ', /)
  ```
    
    Padding is done using the specified fill character (default is a space).

  
  | Part | Description |
  |------|-------------|
  | 1 | <div>Return a right-justified string of length width.</div> |
  | 2 | <div>Padding is done using the specified fill character (default is a space).</div> |
---

* **rstrip** — Return a copy of the string with trailing whitespace removed.

  ```python
  rstrip(chars=None, /)
  ```
    
    If chars is given and not None, remove characters in chars instead.

  
  | Part | Description |
  |------|-------------|
  | 1 | <div>Return a copy of the string with trailing whitespace removed.</div> |
  | 2 | <div>If chars is given and not None, remove characters in chars instead.</div> |
---

* **rpartition** — Partition the string into three parts using the given separator.

  ```python
  rpartition(sep, /)
  ```
    
    This will search for the separator in the string, starting at the end. If
    the separator is found, returns a 3-tuple containing the part before the
    separator, the separator itself, and the part after it.
    
    If the separator is not found, returns a 3-tuple containing two empty strings
    and the original string.

  
  | Part | Description |
  |------|-------------|
  | 1 | <div>Partition the string into three parts using the given separator.</div> |
  | 2 | <div>This will search for the separator in the string, starting at the end. If
  the separator is found, returns a 3-tuple containing the part before the
  separator, the separator itself, and the part after it.</div> |
  | 3 | <div>If the separator is not found, returns a 3-tuple containing two empty strings
  and the original string.</div> |
---

* **splitlines** — Return a list of the lines in the string, breaking at line boundaries.

  ```python
  splitlines(keepends=False)
  ```
    
    Line breaks are not included in the resulting list unless keepends is given and
    true.

  
  | Part | Description |
  |------|-------------|
  | 1 | <div>Return a list of the lines in the string, breaking at line boundaries.</div> |
  | 2 | <div>Line breaks are not included in the resulting list unless keepends is given and
  true.</div> |
---

* **strip** — Return a copy of the string with leading and trailing whitespace removed.

  ```python
  strip(chars=None, /)
  ```
    
    If chars is given and not None, remove characters in chars instead.

  
  | Part | Description |
  |------|-------------|
  | 1 | <div>Return a copy of the string with leading and trailing whitespace removed.</div> |
  | 2 | <div>If chars is given and not None, remove characters in chars instead.</div> |
---

* **swapcase** — Convert uppercase characters to lowercase and lowercase characters to uppercase.

  ```python
  swapcase()
  ```
    


  
  | Part | Description |
  |------|-------------|
  | 1 | <div>Convert uppercase characters to lowercase and lowercase characters to uppercase.</div> |
---

* **translate** — Replace each character in the string using the given translation table.

  ```python
  translate(table, /)
  ```
    
      table
        Translation table, which must be a mapping of Unicode ordinals to
        Unicode ordinals, strings, or None.
    
    The table must implement lookup/indexing via __getitem__, for instance a
    dictionary or list.  If this operation raises LookupError, the character is
    left untouched.  Characters mapped to None are deleted.

  
  | Part | Description |
  |------|-------------|
  | 1 | <div>Replace each character in the string using the given translation table.</div> |
  | 2 | <div>  table
      Translation table, which must be a mapping of Unicode ordinals to
      Unicode ordinals, strings, or None.</div> |
  | 3 | <div>The table must implement lookup/indexing via __getitem__, for instance a
  dictionary or list.  If this operation raises LookupError, the character is
  left untouched.  Characters mapped to None are deleted.</div> |
---

* **upper** — Return a copy of the string converted to uppercase.

  ```python
  upper()
  ```
    


  
  | Part | Description |
  |------|-------------|
  | 1 | <div>Return a copy of the string converted to uppercase.</div> |
---

* **startswith** — S.startswith(prefix[, start[, end]]) -> bool

      Return True if S starts with the specified prefix, False otherwise.
    With optional start, test S beginning at that position.
    With optional end, stop comparing S at that position.
    prefix can also be a tuple of strings to try.

  
  | Part | Description |
  |------|-------------|
  | 1 | <div>S.startswith(prefix[, start[, end]]) -> bool</div> |
  | 2 | <div>Return True if S starts with the specified prefix, False otherwise.
  With optional start, test S beginning at that position.
  With optional end, stop comparing S at that position.
  prefix can also be a tuple of strings to try.</div> |
---

* **endswith** — S.endswith(suffix[, start[, end]]) -> bool

      Return True if S ends with the specified suffix, False otherwise.
    With optional start, test S beginning at that position.
    With optional end, stop comparing S at that position.
    suffix can also be a tuple of strings to try.

  
  | Part | Description |
  |------|-------------|
  | 1 | <div>S.endswith(suffix[, start[, end]]) -> bool</div> |
  | 2 | <div>Return True if S ends with the specified suffix, False otherwise.
  With optional start, test S beginning at that position.
  With optional end, stop comparing S at that position.
  suffix can also be a tuple of strings to try.</div> |
---

* **removeprefix** — Return a str with the given prefix string removed if present.

  ```python
  removeprefix(prefix, /)
  ```
    
    If the string starts with the prefix string, return string[len(prefix):].
    Otherwise, return a copy of the original string.

  
  | Part | Description |
  |------|-------------|
  | 1 | <div>Return a str with the given prefix string removed if present.</div> |
  | 2 | <div>If the string starts with the prefix string, return string[len(prefix):].
  Otherwise, return a copy of the original string.</div> |
---

* **removesuffix** — Return a str with the given suffix string removed if present.

  ```python
  removesuffix(suffix, /)
  ```
    
    If the string ends with the suffix string and that suffix is not empty,
    return string[:-len(suffix)]. Otherwise, return a copy of the original
    string.

  
  | Part | Description |
  |------|-------------|
  | 1 | <div>Return a str with the given suffix string removed if present.</div> |
  | 2 | <div>If the string ends with the suffix string and that suffix is not empty,
  return string[:-len(suffix)]. Otherwise, return a copy of the original
  string.</div> |
---

* **isascii** — Return True if all characters in the string are ASCII, False otherwise.

  ```python
  isascii()
  ```
    
    ASCII characters have code points in the range U+0000-U+007F.
    Empty string is ASCII too.

  
  | Part | Description |
  |------|-------------|
  | 1 | <div>Return True if all characters in the string are ASCII, False otherwise.</div> |
  | 2 | <div>ASCII characters have code points in the range U+0000-U+007F.
  Empty string is ASCII too.</div> |
---

* **islower** — Return True if the string is a lowercase string, False otherwise.

  ```python
  islower()
  ```
    
    A string is lowercase if all cased characters in the string are lowercase and
    there is at least one cased character in the string.

  
  | Part | Description |
  |------|-------------|
  | 1 | <div>Return True if the string is a lowercase string, False otherwise.</div> |
  | 2 | <div>A string is lowercase if all cased characters in the string are lowercase and
  there is at least one cased character in the string.</div> |
---

* **isupper** — Return True if the string is an uppercase string, False otherwise.

  ```python
  isupper()
  ```
    
    A string is uppercase if all cased characters in the string are uppercase and
    there is at least one cased character in the string.

  
  | Part | Description |
  |------|-------------|
  | 1 | <div>Return True if the string is an uppercase string, False otherwise.</div> |
  | 2 | <div>A string is uppercase if all cased characters in the string are uppercase and
  there is at least one cased character in the string.</div> |
---

* **istitle** — Return True if the string is a title-cased string, False otherwise.

  ```python
  istitle()
  ```
    
    In a title-cased string, upper- and title-case characters may only
    follow uncased characters and lowercase characters only cased ones.

  
  | Part | Description |
  |------|-------------|
  | 1 | <div>Return True if the string is a title-cased string, False otherwise.</div> |
  | 2 | <div>In a title-cased string, upper- and title-case characters may only
  follow uncased characters and lowercase characters only cased ones.</div> |
---

* **isspace** — Return True if the string is a whitespace string, False otherwise.

  ```python
  isspace()
  ```
    
    A string is whitespace if all characters in the string are whitespace and there
    is at least one character in the string.

  
  | Part | Description |
  |------|-------------|
  | 1 | <div>Return True if the string is a whitespace string, False otherwise.</div> |
  | 2 | <div>A string is whitespace if all characters in the string are whitespace and there
  is at least one character in the string.</div> |
---

* **isdecimal** — Return True if the string is a decimal string, False otherwise.

  ```python
  isdecimal()
  ```
    
    A string is a decimal string if all characters in the string are decimal and
    there is at least one character in the string.

  
  | Part | Description |
  |------|-------------|
  | 1 | <div>Return True if the string is a decimal string, False otherwise.</div> |
  | 2 | <div>A string is a decimal string if all characters in the string are decimal and
  there is at least one character in the string.</div> |
---

* **isdigit** — Return True if the string is a digit string, False otherwise.

  ```python
  isdigit()
  ```
    
    A string is a digit string if all characters in the string are digits and there
    is at least one character in the string.

  
  | Part | Description |
  |------|-------------|
  | 1 | <div>Return True if the string is a digit string, False otherwise.</div> |
  | 2 | <div>A string is a digit string if all characters in the string are digits and there
  is at least one character in the string.</div> |
---

* **isnumeric** — Return True if the string is a numeric string, False otherwise.

  ```python
  isnumeric()
  ```
    
    A string is numeric if all characters in the string are numeric and there is at
    least one character in the string.

  
  | Part | Description |
  |------|-------------|
  | 1 | <div>Return True if the string is a numeric string, False otherwise.</div> |
  | 2 | <div>A string is numeric if all characters in the string are numeric and there is at
  least one character in the string.</div> |
---

* **isalpha** — Return True if the string is an alphabetic string, False otherwise.

  ```python
  isalpha()
  ```
    
    A string is alphabetic if all characters in the string are alphabetic and there
    is at least one character in the string.

  
  | Part | Description |
  |------|-------------|
  | 1 | <div>Return True if the string is an alphabetic string, False otherwise.</div> |
  | 2 | <div>A string is alphabetic if all characters in the string are alphabetic and there
  is at least one character in the string.</div> |
---

* **isalnum** — Return True if the string is an alpha-numeric string, False otherwise.

  ```python
  isalnum()
  ```
    
    A string is alpha-numeric if all characters in the string are alpha-numeric and
    there is at least one character in the string.

  
  | Part | Description |
  |------|-------------|
  | 1 | <div>Return True if the string is an alpha-numeric string, False otherwise.</div> |
  | 2 | <div>A string is alpha-numeric if all characters in the string are alpha-numeric and
  there is at least one character in the string.</div> |
---

* **isidentifier** — Return True if the string is a valid Python identifier, False otherwise.

  ```python
  isidentifier()
  ```
    
    Call keyword.iskeyword(s) to test whether string s is a reserved identifier,
    such as "def" or "class".

  
  | Part | Description |
  |------|-------------|
  | 1 | <div>Return True if the string is a valid Python identifier, False otherwise.</div> |
  | 2 | <div>Call keyword.iskeyword(s) to test whether string s is a reserved identifier,
  such as "def" or "class".</div> |
---

* **isprintable** — Return True if all characters in the string are printable, False otherwise.

  ```python
  isprintable()
  ```
    
    A character is printable if repr() may use it in its output.

  
  | Part | Description |
  |------|-------------|
  | 1 | <div>Return True if all characters in the string are printable, False otherwise.</div> |
  | 2 | <div>A character is printable if repr() may use it in its output.</div> |
---

* **zfill** — Pad a numeric string with zeros on the left, to fill a field of the given width.

  ```python
  zfill(width, /)
  ```
    
    The string is never truncated.

  
  | Part | Description |
  |------|-------------|
  | 1 | <div>Pad a numeric string with zeros on the left, to fill a field of the given width.</div> |
  | 2 | <div>The string is never truncated.</div> |
---

* **format** — S.format(*args, **kwargs) -> str

      Return a formatted version of S, using substitutions from args and kwargs.
    The substitutions are identified by braces ('{' and '}').

  
  | Part | Description |
  |------|-------------|
  | 1 | <div>S.format(*args, **kwargs) -> str</div> |
  | 2 | <div>Return a formatted version of S, using substitutions from args and kwargs.
  The substitutions are identified by braces ('{' and '}').</div> |
---

* **format_map** — S.format_map(mapping) -> str

      Return a formatted version of S, using substitutions from mapping.
    The substitutions are identified by braces ('{' and '}').

  
  | Part | Description |
  |------|-------------|
  | 1 | <div>S.format_map(mapping) -> str</div> |
  | 2 | <div>Return a formatted version of S, using substitutions from mapping.
  The substitutions are identified by braces ('{' and '}').</div> |
---

* **maketrans** — Return a translation table usable for str.translate().

      If there is only one argument, it must be a dictionary mapping Unicode
    ordinals (integers) or characters to Unicode ordinals, strings or None.
    Character keys will be then converted to ordinals.
    If there are two arguments, they must be strings of equal length, and
    in the resulting dictionary, each character in x will be mapped to the
    character at the same position in y. If there is a third argument, it
    must be a string, whose characters will be mapped to None in the result.

  
  | Part | Description |
  |------|-------------|
  | 1 | <div>Return a translation table usable for str.translate().</div> |
  | 2 | <div>If there is only one argument, it must be a dictionary mapping Unicode
  ordinals (integers) or characters to Unicode ordinals, strings or None.
  Character keys will be then converted to ordinals.
  If there are two arguments, they must be strings of equal length, and
  in the resulting dictionary, each character in x will be mapped to the
  character at the same position in y. If there is a third argument, it
  must be a string, whose characters will be mapped to None in the result.</div> |
---