iTerm


command                  | description
---                     | ---
`ctrl+C`                | cancels line
`ctrl+L`               |	to clear
`top`	                | shows activity of computer
`ps`	                | what programs are running
`man *command*	`     | manual page of command
`q`	                  | breaks out of manual page
`alias woman=man`	    | makes so that you can type woman to execute the `man command`
`ls -l	long`        | listing of files, gives more information
`cat *file*`	       | opens the file
`ls -a	`            | show all files (inc hidden)
`touch *name*`	     | makes a file called name
`echo “text” >> name	` | puts the word text into the file name
`cat *`	               | Wildcard: everything. Show everything
`cat b*`               |	shows everything starting with b
`cat *m`                |	shows everything ending with m
`cat *a*	`             | show something with a in it anywhere
`echo *`                 |	shows the names of all the files. Basically the same thing as “ls”
`open .`                |	open the current directory
`mv file destination`   |	move file to destination (works for whole folders as well)
`rm file`               |	removes file
`find .`              	| shows all files and files inside of folders
`rmdir`                 |	removes the directory if it is empty
`rm -r directory`	       | removes the directory and everything inside of it
`grep word location`    |	searches the contents of location for the word word
`wc file`                |	word count (lines, words, characters)
`cp` |	copy
`history`               |	prints history of commands you have put in
`head file`             | show the first 10 lines of the file
`tail file`             |	show the last 10 lines of the file
`history >> myFile`      |	send the output of history into the file nyFile, or create myFile if it doesn’t exist
`history | head`         |	shows the first 10 lines of history (combines the commands)
`cat * | wc -w`           | print all the files in the directory, and then find the wordcount of them all combined
`sort x`	| sorts contents of x in alphabetical order
`cat * | sort >> filename`	| sort all the files in the directory and save it into filename
`unzip filepath`          |	unzips the file into the directory you’re in
`more file`               |	like cat but you press space to move on
`less file`               |	like more just up and down arrow to scroll, quit by pressing q
`open -a “Atom”`          |	open the application atom
`atom ~/.bash_profile`     |	opens the file that opens when you open bash- where you can save alias’. Can change colouring etc too
`cp -r filePath destinationPath` |
`# Control -r` | ?? search your console history interactively
`touch foo{wow,cool,sick}bar` | make lots of files with similar names quickly. Will create 3 files called: foowowbar, foocoolbar, foosickbar
`control+a` | brings you to front of line. E gets you to end.

If you need to use ‘’ indoor string, use “” to define, or vice versa

`command+/ `		
turns selected into comment

`<meta charset=“utf-8”>	`		
this will allow us to use emojis and degree signs and stuff


`git config --global core.editor "atom --wait"`
configure git to open atom as default text editor

`git config --global user.email 	`
to check
or
`git config --global user.email "email@example.com"`
configure email

`command+shift_d`
duplicates line

```
ln -s '/Applications/Sublime Text.app/Contents/SharedSupport/bin/subl' /usr/local/bin/subl
sets up so you can you “subl .” to top the project in sublime
```

Emmet
- install through packages
- `p.hotdog`
- `p.hotdog.vegan`
```
div.brothers>ul>li.brother*3>p.biography
    <div class="brothers">
          <ul>
            <li class="brother">
              <p class="biography"></p>
            </li>
            <li class="brother">
              <p class="biography"></p>
            </li>
            <li class="brother">
              <p class="biography"></p>
            </li>
          </ul>
        </div>

  ```

If you have something with position relative, the children with position absolute will be absolute based off the parent.

`box-sizing: 	border-box`	calculates padding and border in width and height. add to all in; `* {}`

### Input (with jQuery)

`$().on('focus', function)` |
`$().on('blur', function)` |
`autofocus` | this is added in the HTML tag to make it automatically focussed, so the user can just start typing
`$().on('keypress', function)` | Fires before it updates the value, so it shows the value before. This is so we can preventDefault()
`$().on('keyup', function)` | this fires after. you can call `$().value()` to get value as typed
`$().on('change', function)` | this only fires after you un-blur- so when you click off, it will fire

```
$().on('keyup', function (event) {

  if (event.keyCode === 13) {
    //this happens on enter

    //to clear the input after enter
    $(this).val("");
  }

  });
```

#### Finding mouse location
`clientX` `client Y` | relative to window
`offsetX` `offsetY` | relative to parent object
`??` | relative to entire screen, not just window

#### Window
`window.innerHeight` | this returns the height of the window
`$().css('opacity', opacity)` | where opacity is a defined number, you can set the css of an image

#### Cacheing
Cacheing is the idea of saving a copy. Fetching stuff from the DOM is expensive, so reduce the number of calls by saving it in a variable
`const $bill = $('#bill')`
