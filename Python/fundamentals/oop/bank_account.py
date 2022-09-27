class BankAccount:
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
    
    # @classmethod
    # def bank_account_info(cls)

account1 = BankAccount (.04, 100)
account2 = BankAccount (.05, 1000)

account1.deposit(100).deposit(100).deposit(100).withdraw(25).yield_interest().display_account_info() #output: $390.00
account2.deposit(1000).deposit(1000).withdraw(125).withdraw(125).withdraw(125).withdraw(125).yield_interest().display_account_info() #output: 2625.00
