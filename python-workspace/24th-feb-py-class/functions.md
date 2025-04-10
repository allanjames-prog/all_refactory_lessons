

## 🔹 Python Functions - Full Guide

### ✅ What is a Function?

A **function** is a block of code that runs only when it is **called**.

- Functions help avoid repetition and make code reusable.
- You can **pass data** (called *parameters* or *arguments*) into a function.
- Functions can also **return values** as results.

---

### 🔸 Creating a Function

In Python, functions are created using the `def` keyword:

```python
def my_function():
    print("Hello from a function")
```

---

### 🔸 Calling a Function

To **call** a function, use its name followed by parentheses:

```python
my_function()
```

---

### 🔸 Parameters vs Arguments

- **Parameter** = the variable in the function definition.
- **Argument** = the value passed during the function call.

```python
def greet(name):  # name is a parameter
    print("Hello", name)

greet("James")    # "James" is an argument
```

---

### 🔸 Number of Arguments

Functions must be called with the **correct number of arguments**, unless defaults or variable-length arguments are used.

```python
def full_name(fname, lname):
    print(fname + " " + lname)

full_name("John", "Doe")  # ✅
# full_name("John")       # ❌ Error: Missing argument
```

---

## 🧩 Flexible Function Arguments

### ⭐ Arbitrary Positional Arguments (`*args`)

Use `*args` when you don't know how many arguments will be passed. These arguments are received as a **tuple**.

```python
def children(*kids):
    print("The youngest is", kids[2])

children("Ann", "Ben", "Cathy")
```

---

### ⭐ Keyword Arguments

You can specify arguments using key = value format. Order doesn't matter.

```python
def kids(child1, child2, child3):
    print("The youngest is", child3)

kids(child1="Tom", child2="Jerry", child3="Spike")
```

---

### ⭐ Arbitrary Keyword Arguments (`**kwargs`)

Use `**kwargs` to accept any number of keyword arguments. They’re stored in a **dictionary**.

```python
def profile(**person):
    print("Last name is", person["lname"])

profile(fname="Alex", lname="Smith")
```

---

## ⚙️ Default Parameter Values

You can assign a **default value** to parameters.

```python
def country_origin(country="Norway"):
    print("I am from", country)

country_origin("India")
country_origin()  # Uses default
```

---

## 🧾 Passing Data Types as Arguments

Any data type (list, string, number, etc.) can be passed to a function.

```python
def print_items(items):
    for x in items:
        print(x)

fruits = ["apple", "banana", "cherry"]
print_items(fruits)
```

---

## 🔄 Return Statement

Functions can **return values** using the `return` keyword.

```python
def multiply(x):
    return 5 * x

print(multiply(3))
print(multiply(5))
```

---

## 🚫 The `pass` Statement

Use `pass` if you want a function with no content (to avoid syntax errors):

```python
def placeholder():
    pass
```

---

## 🎯 Positional-Only Arguments

Use `/` in the function signature to force **positional-only** arguments.

```python
def show(x, /):
    print(x)

show(3)          # ✅
# show(x=3)      # ❌ Error
```

---

## 🧭 Keyword-Only Arguments

Use `*` to specify **keyword-only** arguments.

```python
def show(*, x):
    print(x)

show(x=3)        # ✅
# show(3)        # ❌ Error
```

---

## 🔄 Combine Positional and Keyword Only

You can combine both styles:

```python
def my_function(a, b, /, *, c, d):
    print(a + b + c + d)

my_function(1, 2, c=3, d=4)
```

---

## 🔁 Recursion

A function can call **itself** (known as recursion). Be careful—it must have a base condition to avoid infinite loops.

```python
def factorial(n):
    if n == 1:
        return 1
    else:
        return n * factorial(n - 1)

print(factorial(5))  # 120
```

---

## 🧠 Lambda Functions (Anonymous Functions)

Short functions can be written using `lambda`:

```python
square = lambda x: x * x
print(square(5))  # Output: 25
```

You can pass lambdas into other functions:

```python
def operate(x, func):
    return func(x)

print(operate(4, lambda x: x + 3))  # Output: 7
```

---

## 📦 Nested Functions

Functions can be defined inside other functions.

```python
def outer():
    def inner():
        print("Inner function")
    inner()

outer()
```

---

## 🔃 Function Scope (LEGB Rule)

Python follows the **LEGB** rule to find variable names:
- **L**: Local
- **E**: Enclosing
- **G**: Global
- **B**: Built-in

Example:

```python
x = "global"

def outer():
    x = "enclosing"
    def inner():
        x = "local"
        print(x)
    inner()

outer()  # Prints "local"
```

---

## 🔗 Global Keyword

Use `global` to modify a global variable inside a function:

```python
x = 5

def change():
    global x
    x = 10

change()
print(x)  # Output: 10
```

---

## ✨ Decorators (Advanced)

Functions that modify other functions:

```python
def decorator_func(func):
    def wrapper():
        print("Before")
        func()
        print("After")
    return wrapper

@decorator_func
def say_hello():
    print("Hello!")

say_hello()
```

