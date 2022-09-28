class User:
    
    def __init__(self, first_name, last_name, email, age):
        self.first_name = first_name
        self.last_name = last_name
        self.email = email
        self.age = age
        self.is_rewards_member = False
        self.gold_card_points = 0
        self.account = BankAccount (int_rate=0.02, balance=0)
        
    def display_info(self):
        print (f"First Name: {self.first_name}")
        print (f"Last Name: {self.last_name}")
        print (f"Email: {self.email}")
        print (f'Age: {self.age}')
        print (f'Is rewards member: {self.is_rewards_member}')
        print (f'Gold Card Points: {self.gold_card_points}')
        return self
        
    def enroll(self):
        if self.is_rewards_member == True:
            print("User already a member")
        else:
            self.is_rewards_member = True
            self.gold_card_points = 200
        return self
        
    def spend_points (self, amount):
        if amount <= self.gold_card_points:
            self.gold_card_points -= amount
        else:
            print ("Not enough points!")
        return self
    
    def make_deposit (self ,amount):
        self.account.deposit(amount)
        print (self.account.balance)
        return self
    
    def make_withdraw (self, amount):
        self.account.withdraw(amount)
        print (self.account.balance)
        return self
        
    def display_user_balance (self):
        self.account.display_account_info()
        return self

class BankAccount:
    checking_account_balance = 0
    savings_account_balance = 0
    
    #class attributes
    interest_rate = .02 
    balance = 0
    account_info =[]
    
    #instance attributes
    def __init__(self, int_rate, balance):
        self.int_rate = int_rate
        self.balance = balance
    
    def deposit(self, amount):
        self.balance += amount
        return(self)
    
    def withdraw(self, amount):
        if (self.balance < amount):
            print ('Insufficient funds: Charging a $5 fee')
            self.balance -= 5
        else:
            self.balance -= amount
        return self
    
    def display_account_info (self):
        print(f'Balance: ${self.balance}')
        return self
    
    def yield_interest(self):
        if (self.balance > 0):
            self.balance += self.balance * self.int_rate
        return self 

user1 = User('John', 'Smith', 'jsmith@gmail', 30)
user1.display_info().enroll().spend_points(50).display_info() 

user2 = User ('Jane', 'Doe', 'jdoe@gmail', 22)
user2.enroll().spend_points(80).display_info()

user3 = User ('Todd', 'Tom', 'ttom@gmail', 40)
user3.display_info().spend_points(40)

user3.make_deposit(100)
user3.make_withdraw(50)
user3.display_user_balance()