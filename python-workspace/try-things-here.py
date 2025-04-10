# x = lambda a : a + 10
# print(x(5))

# def myfunc(n):
#   return lambda a : a * n

# mydoubler = myfunc(2)

# print(mydoubler(11))


class shop:
  def __init__(self, groceries, electronics, stationary):
    self.groceries = groceries
    self.electronics = electronics
    self.stationary = stationary

  def business(self):
    print(f"I would like to start a {self.electronics} shop aside my ")
