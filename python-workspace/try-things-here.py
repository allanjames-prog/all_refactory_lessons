# x = lambda a : a + 10
# print(x(5))

# def myfunc(n):
#   return lambda a : a * n

# mydoubler = myfunc(2)

# print(mydoubler(11))


# class shop:
#   def __init__(self, groceries, electronics, stationary):
#     self.groceries = groceries
#     self.electronics = electronics
#     self.stationary = stationary

#   def business(self):
#     print(f"I am going to buy some {self.groceries} and {self.electronics} then bring the {self.stationary} home ")

# shop1 = shop("tomatoes", "cables", "books")
# shop1.business()


class Animal:
  def __init__(self, speak):
    self.speak = speak