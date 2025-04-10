

## 🧠 What is an Object?

An **object** is an **instance of a class**. Once a class is defined, you can create objects from it.  
Each object can hold **its own data** and use **methods** defined in the class.

---

## 🔹 Creating an Object

```python
class Person:
    def __init__(self, name):
        self.name = name

# Create an object of the class
p1 = Person("Alice")

print(p1.name)  # Output: Alice
```

- `p1` is an object.
- It was created from the class `Person`.

---

## 🔸 Object Attributes

Attributes are variables that belong to the object. You define them using `self`.

```python
class Dog:
    def __init__(self, name, age):
        self.name = name
        self.age = age

dog1 = Dog("Rex", 5)
print(dog1.name)  # Rex
print(dog1.age)   # 5
```

You can also add attributes **after creation**:

```python
dog1.color = "brown"
print(dog1.color)  # brown
```

---

## 🔸 Object Methods

Methods are functions inside a class. You call them on an object.

```python
class Dog:
    def __init__(self, name):
        self.name = name

    def bark(self):
        print(self.name + " says woof!")

dog2 = Dog("Buddy")
dog2.bark()  # Output: Buddy says woof!
```

---

## 🟡 Built-in Object Functions

Python provides built-in functions that work on objects:

| Function | Description |
|----------|-------------|
| `type(obj)` | Returns the type (class) of an object |
| `isinstance(obj, Class)` | Checks if `obj` is an instance of `Class` |
| `dir(obj)` | Returns a list of all attributes/methods of the object |

```python
print(type(dog2))  # <class '__main__.Dog'>
print(isinstance(dog2, Dog))  # True
print(dir(dog2))  # Shows all attributes/methods
```

---

## 🔸 Modifying Object Properties

You can change an object’s attribute anytime:

```python
dog2.name = "Max"
print(dog2.name)  # Max
```

---

## 🔸 Deleting Object Properties

You can delete object attributes or the object itself:

```python
del dog2.name   # Deletes the name attribute
del dog2        # Deletes the dog2 object
```

---

## 🧩 Object-Oriented Concepts Related to Objects

1. **Encapsulation**  
   - Hiding internal details.
   - Use private/protected attributes with `_` or `__`.

2. **Inheritance**  
   - An object of a subclass inherits methods/attributes from a parent class.

3. **Polymorphism**  
   - Same method name, different behavior depending on object.

4. **Abstraction**  
   - Showing only essential features, hiding background details.

---

## 🔹 Example Putting It All Together

```python
class Vehicle:
    def __init__(self, brand, wheels):
        self.brand = brand
        self.wheels = wheels

    def description(self):
        return f"{self.brand} has {self.wheels} wheels."

v1 = Vehicle("Toyota", 4)
print(v1.description())  # Output: Toyota has 4 wheels.
```

---

## ✅ Summary

| Term | Meaning |
|------|---------|
| **Object** | Instance of a class |
| **Attribute** | Variable that holds data for the object |
| **Method** | Function defined inside the class |
| **Instance** | Another word for object |
| **Self** | Refers to the current object itself |

