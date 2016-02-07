## RogerThat

A fleet of Linux containers responds with "Hello, World" in the programming language of the user's choice.

The key is in knowing how to communicate with a container.

For example, if you wanted to talk to a PHP container, you would enter: 

    echo "Hello, PHP!";

To talk to a Scala container, you would enter:
    
    println("Hello, Scala!")

<img src="./doc/user-interface.png" alt="User Interface" height="300px">

### Usage

Once you successfully communicate with a container, you can do some work in the environment via the CLI or user interface.

For example:

    $foo = 100;
    $bar = 'percent';
    echo $foo , ' ' , $bar;

The application was created for developers.

Programming languages supported include:

- *[C](http://www.open-std.org/JTC1/SC22/WG14/)* `puts()`
- *[C++](http://www.open-std.org/JTC1/SC22/WG21/)* `std::cout`
- *[C#](http://www.open-std.org/JTC1/SC22/WG21/)* `Console.WriteLine()`
- [Bash](https://www.gnu.org/software/bash/) `echo`
- [HTML](https://www.w3.org/html/)
- JavaScript - [Node.js](https://nodejs.org/en/) `console.log()`
- [PHP](https://secure.php.net/) `echo`
- [Python](https://www.python.org/) `print`
- [Ruby](https://www.ruby-lang.org/en/) `puts`
- [Scala](http://www.scala-lang.org/) `println()`