## 🗝️ **Key-Value Pairs in Python**

A **key-value pair** consists of:

- 🔑 **Key**: A unique identifier (e.g., `"name"`, `"age"`).
- 📦 **Value**: The data associated with that key (e.g., `"Allan"`, `25`, or a list).

### 📌 **Example**
```python
student = {"name": "Allan", "age": 25, "city": "Kampala"}
# "name" → Key | "Allan" → Value
# More pairs: "age": 25, "city": "Kampala"
```

---

## 🛠️ **1. Creating Dictionaries (Key-Value Pairs)**

### Method 1: Using `{}`  
```python
person = {
    "name": "James",
    "age": 30,
    "city": "Nairobi"
}
```

### Method 2: Using `dict()`  
```python
person = dict(name="James", age=30, city="Nairobi")
```

### Method 3: Creating Empty Dictionary  
```python
person = {}
person["name"] = "James"
person["age"] = 30
person["city"] = "Nairobi"
```

---

## 🔍 **2. Accessing Values**

### Using Square Brackets
```python
print(person["name"])  # James
# ❗ Raises KeyError if key not found
```

### Using `get()` Method
```python
print(person.get("name"))  # James
print(person.get("gender", "Not Found"))  # Not Found
```

---

## 🔄 **3. Modifying Dictionary**

```python
person["age"] = 31  # Update value
person["country"] = "Kenya"  # Add new key-value pair
```

---

## ❌ **4. Removing Key-Value Pairs**

```python
del person["city"]       # Removes key "city"
age = person.pop("age")  # Removes and returns value of "age"
```

---

## 🔁 **5. Looping Through a Dictionary**

### Loop through keys
```python
for key in person:
    print(key)
```

### Loop through values
```python
for value in person.values():
    print(value)
```

### Loop through key-value pairs
```python
for key, value in person.items():
    print(f"{key}: {value}")
```

---

## ✅ **6. Checking for a Key**

```python
if "name" in person:
    print("Key exists!")
```

---

## ⚙️ **7. Dictionary Methods Overview**

| Method | Description |
|--------|-------------|
| `keys()` | Returns all keys |
| `values()` | Returns all values |
| `items()` | Returns key-value pairs as tuples |
| `get(key, default)` | Returns value or default |
| `pop(key, default)` | Removes and returns value |
| `update(dict2)` | Merges another dictionary |

### Example:
```python
print(person.keys())     # dict_keys(['name', 'country'])
print(person.values())   # dict_values(['James', 'Kenya'])
print(person.items())    # dict_items([('name', 'James'), ('country', 'Kenya')])
```

---

## 🧩 **8. Nested Dictionaries**

```python
students = {
    "student1": {"name": "Allan", "age": 22},
    "student2": {"name": "Dorothy", "age": 23}
}
print(students["student1"]["name"])  # Allan
```

---

## 📚 **9. Other Structures with Key-Value Pairs**

### List of Dictionaries
```python
people = [
    {"name": "Alice", "age": 28},
    {"name": "Bob", "age": 25}
]
```

### Tuples for Key-Value Pairs
```python
pairs = (("name", "James"), ("age", 30))
person = dict(pairs)
```

---

## 🚀 **10. Use Cases**

- 🗃️ Databases (user data)
- 🌐 API Responses (JSON)
- ⚙️ Configuration files
- ⚡ Caching (fast data access)

---

## 🔄 **11. Converting to/from JSON**

### Convert Dictionary → JSON
```python
import json
data = {"name": "James", "age": 30}
json_data = json.dumps(data)
print(json_data)  # {"name": "James", "age": 30}
```

### Convert JSON → Dictionary
```python
dict_data = json.loads(json_data)
print(dict_data["name"])  # James
```

---

## 🎯 **Relevance of Key-Value Pairs**

- Essential for efficient **data storage & retrieval**.
- Used widely in **Python dictionaries**, **JSON**, and **APIs**.
- `.keys()`, `.values()`, `.items()` make iteration and data handling clean and powerful.

