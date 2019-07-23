# RUBY

`ruby -v` prints version of ruby


### to install the ruby version manager:

- x code clt
- brew (brew needs x code to install)
```
/usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
```
- rvm (rvm needs brew to install)
```
curl -sSL https://get.rvm.io | bash -s stable
```

- ruby (needs rvm to install). ruby-lang.org to find latest stable version of RUBY
```
rvm install ruby-2.6.3
```
- tell ruby to use this new version by default
```
rvm --default use 2.6.3
```
-------
_brew_

`brew install sl`

`brew install tree`
-------
If you're doing a tutorial, e.g. if they say `sudo gem install pry`. Don't write sudo as we have installed it differently.


`irb` or `pry` | interactive ruby. In command line you can type this to execute ruby interactively.
`.chomp` | removes the last new line
`.to_s` | to string
`.to_i` | to integer
`.to_f` | to float

To create a constant, the variable is in all uppercase. THIS_IS_A_CONSTANT

## Arrays

`array.new(15, "hotdogs")` |

`array_name = []` |

`%w(word1 word2 word3)` | a shortcut for making an array, give it a list of words and it will turn it into an array

`.length` `.size` `.count` | find length of an array

`.push` `.pop` | add and remove last element of array, respectively

`array.last` | return the last element in array.

`array.first` | return the first element in array.

`array[1..3]` | returns range of values from 1 to 3

`array.at 0` is the same as `bros[0]` |

`array.fetch 0` | does the same as above, but crashes program if there is no value there.

`(1..20).to_a` | returns an array of numbers from 1 to 20

`array.take 5` | returns the first 5 values of the array, in an array. Similar to head

`array.drop 5` | ignore the first 5, and give me everything past that.

[1, 2, 3] + [4, 5, 6] | returns a new array with all the values. Same with subtraction.

`array << "text"` | appends text to the array. (adds to end)

`array.shift` | removes first element. `unshift` inserts in beginning

`bros.insert 3, "text"` | makes room for text so it is the third element in the array (doesnt replace, moves everything along)

`array.delete_at 2` | deletes at the index 2. Doesnt put a nill in there, everything shifts around.

`array.delete "text"` | deletes the specific value "text"

`bros.uniq` | gives back unique values- removes duplicates

`array.shuffle` | randomly sorts array

`!` | add ! at the end of a function e.g. `array.shuffle!` to make it destructive i.e. overwrite array

`array.sample 7` | gives random sample of array (returns seven values)


## Loops

```
array.each do |variable|
   puts variable
 end
 ```

 loops through array, variable representing each value in the array. Much like "i"
 
