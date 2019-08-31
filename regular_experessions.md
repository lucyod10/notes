# Regular Expressions

```
/oo/ =~ "bhjbcoooooool"
```
returns the number of the character which matches. Else return nil.

```
/oo/i
```
makes case insensitive.

## Meta characters

#### `.` - any character

e.g. `"Betty" =~ /Bet.y/`

#### (a|b) - or

`/(fred|barney)/` - will find an occurence of either fred or barney.

#### [ ] - single character or

`/[0123456789]/` - looks for a single character within the []

can also write `/[0-9]/`, or `/[a-k]/`

e.g. `"fred" =~ /[Ff]red/` - will search for either Fred or fred

## Quantifiers

How often a character should appear.

`?` - 0 or 1 ocurrences

`+` - 1+ occurences

`*` = 0+ occurences

e.g. `"Fred-Barney" =~ /Fred-*Barney/` searches for 0 or more `-`

`.*` - any old junk matcher. Will search for any character, any number of times.
