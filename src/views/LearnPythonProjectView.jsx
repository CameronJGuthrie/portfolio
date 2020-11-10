import React from 'react';

import Paragraph from '../components/Paragraph';
import ProjectContainer from '../components/ProjectContainer';

const LearnPythonProject = (props) => {
  return (
    <ProjectContainer name='Learn Python' isDone={true}>
      <Paragraph date='Nov 11, 2020'>
        As of today, I have not written a single line of python code. The weather is terrible, so I’ve decided to learn python instead of going outside. 
      </Paragraph>
      <Paragraph>
        My goal is to become proficient in the language in one day. I will start at 8:00 am and finish at about 3:00 pm, giving myself some time for lunch.
      </Paragraph>
      <Paragraph>
        I expect that it will be similar to other languages I’ve used, such as Java, C and Javascript but I’m also expecting there to be a few surprises too.
      </Paragraph>
      <Paragraph>   
        I will write down what I found new, what was interesting to me, and what challenged me or frustrated me during this process. I will also be just writing generic language features that I think will be useful for me in the future.
      </Paragraph>
      <Paragraph date='8:00 AM'>
      My first course of action was to use google. ‘learn python’ I asked google. 
      Google showed me the way; learnpython.org, which seemed a good place to start. The site features some interactive python code which allows you to edit and run in the browser.
      </Paragraph>
      <Paragraph>
      Immediately, I find out that Python does not believe in curly braces, instead choosing to worship indentation. These indentations are measured in spaces.
      </Paragraph>
      <Paragraph>
      The code looks much emptier than other languages I have used, there are no characters to denote the end of line, like the semicolon is used in traditional languages such as C and Java.
      </Paragraph>
      <Paragraph>        
Almost straight away I am unable to create an else if statement the way I have done in the past. I will have to try again later. Also, at the end of an if expression such as x == 2, there is a colon : marking the end of the if expression, and marking the start of the if body.
      </Paragraph>
      <Paragraph>
      I have found how to do the else-if statement. The key word is not else and if next to each other, but is a combined elif. I suppose this is to save space in the code. The keyword for the tailing else statement is just else, as I expected.
      </Paragraph>
      <Paragraph>
      Now, I move on to data types. I am pleased that strings can use single and double quotes, as single quotes in my opinion make the code look much nicer. However, If I want to use apostrophes in the string, I must use double quotes. To concatenate strings, the + symbol is used, like it is in Java.
      </Paragraph>
      <Paragraph>
      Something I’m sad about is that I can’t mix operators for strings and numbers. So when printing I cannot have print(string + number + string). In other languages I’ve used, the number is implicitly converted to string to allow the concatenation.
      </Paragraph>
      <Paragraph>
      I’m now introduced to lists, which take the syntax of what I’m used to calling an array. I was curious about the differences between the two, and did some quick research (https://www.pythoncentral.io/the-difference-between-a-list-and-an-array/). It turns out that you can perform arithmetic functions on arrays, but not lists. This, I thought, was pretty cool because it allows the programmer to do something like myarray / 3.0, and all elements in the array are divided by 3.
      </Paragraph>
      <Paragraph>
      Adding data to lists. To add data to a list, I can call the append method for that list, and pass in the value to be stored. Seems simple enough, and similar to a push method for a stack.
      </Paragraph>
      <Paragraph>   
      Some cool new operators:
      </Paragraph>
      <Paragraph>
      a, b = 3, 4 multi-assignment
      </Paragraph>
      <Paragraph>
      x ** y  where y is the exponent part.
      </Paragraph>
      <Paragraph>
      “String” * x  to repeat a string x times
      </Paragraph>
      <Paragraph>
      [1,2,3] + [4,5,6] to concatenate a list
      </Paragraph>
      <Paragraph>
      [1,2,3] * x  to repeat a list x times
      </Paragraph>
      <Paragraph>
      string[x:y]  to slice a string from index x to y, inclusive x, exclusive y
      </Paragraph>
      <Paragraph>
      Some operators for strings which I think will be very useful if I need to manipulate strings:<br/>
      string.index(toFind)<br/>
      string.len()<br/>
      string.count(toCount)<br/>
      string.upper()<br/>
      string.lower()<br/>
      string.startswith()<br/>
      string.endswith()<br/>
      rt into a list<br/>
      string[::-1] to reverse a string
      </Paragraph>
      <Paragraph>
      Formatting strings for printing using % and modifiers was something from C which I found a bit tedious. Unfortunately for me it’s also in Python, but I can still use the + concatenation operator to print strings if I want to. I’m hopeful that these modifiers are easier to remember than in C.
      </Paragraph>
      <Paragraph>
      If I want to include multiple parameters, I must use a tuple to do so. This tuple can be stored in  a variable.
print(“%s is %d years old” % (name, age))
      </Paragraph>
      <Paragraph>
      Python objects have a repr method, which sounds exactly like Java’s toString method. It is automatically called when using %s in a format string.
      </Paragraph>
      <Paragraph>
      The most basic argument specifiers are 
%s - String (or an object with a string representation)<br/>
%d - Integers<br/>
%f - Floating point numbers<br/>
%.(number of digits)f - Floating point with num digits<br/>
%x/%X - Integers in hex (lower/UPPER case)
      </Paragraph>
      <Paragraph>
      Python uses keywords and and or instead of the symbolic operators && and ||. It also has an operator in which can check if a value is inside of a list. Python has a dummy function called pass which is used as a placeholder function and does nothing. There is an operator, is, which seems like JavaScripts triple equals operator, and checks that the object’s instances are the same. Instead of an exclamation mark, keyword not is used to flip true and false logic.
      </Paragraph>
      <Paragraph>
      The first hour was quite useful, and I was mainly focused on learning the syntax.
      </Paragraph>
      <Paragraph date='9:00 AM'>
      I now tackle loops. There is a for x in X loop. A while loop, and a break statement which exits the loop. What is new is the addition of a continue and else statement as a part of the loops.
The break statement will exit the loop without triggering the else statement, however if the loop’s condition fails then the else statement is triggered. The continue function returns to the condition of the loop without breaking out.
      </Paragraph>
      <Paragraph>
      Functions, finally. Using the def keyword I am able to define a function. I tested to see whether the last value computed was returned, but this is not the case, and an explicit return keyword is required.
      </Paragraph>
      <Paragraph>
      Objects can have variables and also have methods. At this point, I wondered if functions were first class objects or just simply attached to them. Several sources told me that yes, functions are first class objects, and can be passed around and manipulated. I’m looking forward to learning the lambda syntax in python now. Object variables must be given some initial value, and cannot have an empty value.
      </Paragraph>
      <Paragraph>
      To instantiate a class object, I have to call the class like it's a function with Class(). For some reason, functions within classes require a parameter to act as self, even if they don’t require functionality from the class. In writing this, I realize that forcing this self reference to be a parameter will raise some questions if the self reference is not used at all. This would mean that the object method doesn’t need to be a function of an object, because it does not interact with that object at all.
      </Paragraph>
      <Paragraph>
      Dictionary. I know this as a map, and in Python curly braces denote a dictionary. Key pairs are created like x : y. X can be any type of hashable data, such as numbers, strings or objects. Y can be any data. At this point I discover that keywords true and false must have the first character capitalised: True, and False. To iterate through a dictionary, use the syntax
for key, value in dictionary.items():
      </Paragraph>
      <Paragraph>
      There is a del keyword for deleting items and you simply del dictionary[key] to remove that pair. The dictionary also has a pop method, which does the same thing. dictionary.pop(key)
      </Paragraph>
      <Paragraph>
      Modules. Modules are python files with the .py extension. The import keyword is used to import files. If you only want one function from that file, I can instead prefix from file import object.
To import all, I need to replace object with *.
I can also rename imported objects with the as Keyoword. This is similar to what I’ve done in typescript with the imports at the top of the file. Something I need to be aware of is that modules are only initialised once, and so any data I have used in multiple places will be shared.
      </Paragraph>
      <Paragraph>
      Packages. To create a package, I must create a special __init__.py file inside of a directory. This allows Python to know that that directory is a package. To import a module from inside of the package, import package.module or import module from package
      </Paragraph>
      <Paragraph>
      The dir function allows the programmer to know what functions a module has. This is pretty cool, I’ve not used something like this in the past before. It is used like dir(module) and returns an iterable list.
The sorted function looks pretty useful, and returns a new list with the values sorted. The sort function modifies the original list instead. 
      </Paragraph>
      <Paragraph>
      Its coming up on 10 o’clock, and according to learnpython.org I have now “got the basics down”. Almost everything was very straightforward to me, the exception being the modules and packages section. I had to read that section a few times to really understand what I was looking at.
      </Paragraph>
      <Paragraph>
      After a quick coffee break, I will go through the Advanced section on learnpython.org.
      </Paragraph>
      <Paragraph date='10:10 AM'>
      I’m partway through my instant coffee, which is pretty average, and ready to learn some more advanced aspects of Python. First though, I will go over a couple of advanced data types that could come in handy.
      </Paragraph>
      <Paragraph>
      I start with something strange sounding. Numpy. Numpy sounds like one of the less intelligent seven dwarves. Numpy in python is a module, and with it I can perform arithmetic on arrays. To declare a numpy array, derefernce the numpy import and call the array function with the parameter being a list.
      </Paragraph>
      <Paragraph>
      Similar to arithmetic, numpy arrays can perform subsets. For example, height[height > 1.7] returns a subset of heights greater than 1.7 from the original list.
      </Paragraph>
      <Paragraph>
      Data Frame. A module called Pandas has a really cool feature that allows displaying of dictionaries as tabular information. I’m not sure what the practical use of this is in computation, but it’s certainly nice to look at. The index or left hand column can be customized too with the index function.
      </Paragraph>
      <Paragraph>
      Panda Series is like a data frame without the column headers. To use it, I must use one pair of square brackets df[‘column_name’]. To instead print a Panda DataFrame, I use two pairs of brackets df[[‘column_name’]]. I can have multiple columns in a DataFrame df[[‘col_1’, ‘col2’]]
      </Paragraph>
      <Paragraph>
      loc and iloc are functions? attached to panda which select data.  Loc is label based and iloc is index based.<br/>
panda.iloc[2]<br/>
panda.loc[‘NZ’]
      </Paragraph>
      <Paragraph>
      Upon closer inspection and a bit of thought, these aren’t functions, they are properties because they use square brackets not parenthesis.
      </Paragraph>
      <Paragraph>
      Thats it for these advanced data types. I don’t have much to say about them, except that the panda DataFrames made me feel like I was making a database.
      </Paragraph>
      <Paragraph date='10:30 AM'>
      Generators. In real life, I know a generator as something that burns fuel and creates electricity. In programming, it probably doesn’t burn anything, but still creates something anyway.
      </Paragraph>
      <Paragraph>
      Generators in Python make use of the yield keyword, and are something I have not come across before. The yield keyword seems to be a polite return. It returns a value, but doesn’t self destruct like a normal function does. It just pauses for a while until it is called again. It keeps yielding some sort of value until it has executed its whole body.
      </Paragraph>
      <Paragraph>
      If failed horribly at making the fibonacci using a generator. My instincts keep going towards recursive method. After some googling, I got it though.
      </Paragraph>
      <Paragraph>
      List Comprehensions.<br/> This one is really cool in my opinion. It adds an operator within a list that performs a function on a list and returns a new list.
[function for x in list if condition] 
      </Paragraph>
      <Paragraph>
      Function Arguments
Functions can have multiple arguments. Okay, simple enough. Functions can also have a variable number of arguments if the last argument has a star * prefixed. This argument is a list and contains anything passed in passed that point.
      </Paragraph>
      <Paragraph>
      Using double star prefix **, named parameters can be passed in. I’ve written an example:<br/>
def bar(arg1, arg2, arg3, **options)<br/>
	options.get(“name”).<br/>
<br/>
bar(1,2,3, name=”Cameron”)<br/>
      </Paragraph>
      <Paragraph>
      Regular Expressions<br/>
I’ve had trouble creating reliable regular expressions in the past. In python, regular expressions are created by prefixing a string literal with r: r”regex”
| is the OR operator.
^ matches text at the beginning of the line. 
. matches any non-newline character
? matches un-greedily, meaning as few as possible.
* Means 0 to infinite repetitions
      </Paragraph>
      <Paragraph>
      I dislike using regular expressions, I find them really difficult to understand unless I look closely at them. That said, for security reasons they are very useful in preventing malicious activity by sending rubbish characters.
      </Paragraph>
      <Paragraph>
      Exceptions <br/>
Python uses a try except block. This is the same as Java’s try catch block. It also has finally and uses keywords raise to throw an exception.
      </Paragraph>
      <Paragraph>
      This python language feature has the most similar feature implementation to other language I’ve used. I only spent 5 minutes on this section because as far as I can see, it is the same as what I’m used to.
      </Paragraph>
      <Paragraph>
      Sets<br/>
Sets are like lists, but with no duplicate entries. In university, I studied set theory in multiple papers, and this is the programmatic implementation of that. To create a set the set function is used, and a list is passed in.
      </Paragraph>
      <Paragraph>
      JSON can either be represented by string or by object. By object, it is represented by nested lists and dictionaries, and python has some methods that can be applied to it.
      </Paragraph>
      <Paragraph>
      Json has a loads method that takes a string and returns the object. The opposite operation is dumps. My understanding is that you only need to encode a json string when passing something to another program.
      </Paragraph>
      <Paragraph>
      Json.loads to decode string
      </Paragraph>
      <Paragraph>
      Json.dumps to encode string
      </Paragraph>
      <Paragraph>
      Partial Functions<br/>
My first thoughts are ‘How can you have half a function?’. But then I started reading.
Partial functions are hard to explain. My best explanation is that it obfuscates part of the functions parameters. This would allow you for example to re-use a function that calculate’s volume to also calculate area.
<br/>
def vol(x,y,z)<br/>
	Return x * y * z<br/>
  <br/>
  Area = partial(vol, 1)<br/>
      </Paragraph>
      <Paragraph>
      The default value 1 replaces the x in the vol function
      </Paragraph>
      <Paragraph>         
It’s coming up on midday, I will take a break now and resume after lunch.
      </Paragraph>
      <Paragraph date='1:00 PM'>
      I’ve had lunch, took the dog for a little walk, and played a few rounds of Among Us to really get me thinking. Back to Python though.
      </Paragraph>
      <Paragraph>
      Closures<br/>
Python allows me to put functions inside of functions. This seems confusing, but one example of how this can be used is returning a function’s child function as the return data. This is similar to JavaScript, in that functions can be defined and passed around freely.
      </Paragraph>
      <Paragraph>
      Decorators<br/>
This section really is quite advanced. I’ve been trying to understand if for almost 45 minutes and I still don’t really get what the point of a decorator is, how it works or what situation one is useful. I’m going to skip decorators for now, and come back to them later during a python project.
      </Paragraph>
      <Paragraph>
      Map, Filter, Reduce<br/>
Map and Filter are functions that can be performed on lists. The syntax is map(func,list) but it returns some extra stuff about the function passed in. To convert it back into a list, calling list(map(…)) returns just the list. Filter does what it says, and behaves the same as map.
      </Paragraph>
      <Paragraph>
      Reduce is a bit different. It takes in 2 parameters, a function, a list, an optional third parameter for the initial value for the first function call. The function passed into reduce must contain 2 parameters, and the result is that function being called once for each item in the list. The first parameter is the list value, and the second value is the result of the last function call result. The optional parameter represents the second parameter for the very first run, before any function has been executed.
      </Paragraph>
      <Paragraph>
      I’m now finished with learnpython.org, and I think I have enough knowledge to start coding in Python.
      </Paragraph>
      <Paragraph date='2:00 PM'>
      I now have to think of some cool project to do with Python, so I will go and look for some ideas. I’m thinking a console application.
      </Paragraph>
      <Paragraph>
      I have just realised I don’t know how to write Python code from files on my computer, so I need to figure out how to do that before anything else.
      </Paragraph>
      <Paragraph>
      I have installed python from their website, and if I understand correctly, I can run python from the terminal. Well, I was wrong. During installation, an IDE was installed for Python called IDLE.
I can open, edit, save and run .py files using IDLE.
      </Paragraph>
      <Paragraph>
      I plan to create my own text based adventure to practice my new knowledge. I’ll put this in another project though, the heavy rain has caused a leak in my room and I need to make sure nothing is damaged by the water.
      </Paragraph>
    </ProjectContainer>
  )
};

export default LearnPythonProject;