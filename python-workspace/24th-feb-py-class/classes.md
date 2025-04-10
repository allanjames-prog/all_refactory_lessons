
## 🧠 What is a Class?

A **class** is like a **blueprint** for creating **objects**.  
It defines the structure (attributes) and behaviors (methods) that the objects will have.

---

## 🔹 Defining a Class

```python
class Person:
    pass
```

- The `class` keyword is used to define a class.
- `Person` is the name of the class.
- `pass` means "do nothing" — just a placeholder for now.

---

## 🔸 Class with Attributes and Methods

```python
class Person:
    def __init__(self, name, age):
        self.name = name
        self.age = age

    def greet(self):
        print(f"Hello, my name is {self.name} and I’m {self.age} years old.")
```

### Key Parts:
- `__init__`: The **constructor** method — runs automatically when you create a new object.
- `self`: Refers to the **current object** being created.
- `self.name` and `self.age`: Attributes of the object.
- `greet`: A method that performs an action.

---

## 🔹 Creating an Object from a Class

```python
p1 = Person("Alice", 22)
p1.greet()  # Output: Hello, my name is Alice and I’m 22 years old.
```

---

## 🧱 Class vs Object

| Class | Object |
|-------|--------|
| Blueprint | Actual thing |
| Defines attributes & methods | Stores real data |
| Created using `class` | Created by calling the class |
| Doesn’t occupy memory | Occupies memory |

---

## 🔸 Class Variables vs Instance Variables

```python
class Dog:
    species = "Canine"  # class variable (shared by all)

    def __init__(self, name):
        self.name = name  # instance variable (unique)

d1 = Dog("Rex")
d2 = Dog("Buddy")

print(d1.species)  # Canine
print(d2.name)     # Buddy
```

---

## 🔹 Adding Methods to a Class

```python
class Calculator:
    def add(self, a, b):
        return a + b

    def subtract(self, a, b):
        return a - b

c = Calculator()
print(c.add(10, 5))       # 15
print(c.subtract(10, 5))  # 5
```

---

## 🔸 Inheritance (Important in OOP)

You can create a **child class** that inherits from a **parent class**:

```python
class Animal:
    def speak(self):
        print("Animal sound")

class Dog(Animal):
    def bark(self):
        print("Woof!")

d = Dog()
d.speak()  # Inherited from Animal
d.bark()   # Defined in Dog
```

---

## 🔹 Special Methods (a.k.a Dunder Methods)

| Method | Purpose |
|--------|---------|
| `__init__` | Constructor |
| `__str__` | String representation |
| `__len__` | Custom length behavior |
| `__del__` | Destructor |

```python
class Book:
    def __init__(self, title):
        self.title = title

    def __str__(self):
        return f"Book: {self.title}"

b = Book("Python Basics")
print(b)  # Book: Python Basics
```

---

## 🧩 Encapsulation, Abstraction, Inheritance, Polymorphism

These 4 are the **pillars of OOP (Object-Oriented Programming)**:

1. **Encapsulation** – Wraps data + methods into one unit (the class).
2. **Abstraction** – Hides complex logic and shows only essentials.
3. **Inheritance** – Child classes can reuse code from parent classes.
4. **Polymorphism** – Different classes can have methods with the same name but different behavior.

---

## ✅ Summary Table

| Concept         | Description |
|----------------|-------------|
| `class`         | Defines a class |
| `object`        | Instance of a class |
| `__init__`      | Constructor method |
| `self`          | Refers to current object |
| `attribute`     | Data stored in an object |
| `method`        | Function in a class |
| `inheritance`   | One class inherits from another |
| `encapsulation` | Bundling data and methods |
| `abstraction`   | Hiding complex implementation |
| `polymorphism`  | Same method, different behavior |

