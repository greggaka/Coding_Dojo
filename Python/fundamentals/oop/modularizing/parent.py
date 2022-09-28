local_val = "magical unicorns"
def square(x):
    return x * x
class User:
    def __init__(self, name):
        self.name = name
    def say_hello(self):
        return "hello"

print(square(5))
user1 = User('John')
print(user1.name)
print(user1.say_hello())
print(__name__)

if __name__ == "__main__":
    print("the file is being executed directly")
else:
    print("the file is being executed bc it is imported by another file. The file is called: ", __name__)