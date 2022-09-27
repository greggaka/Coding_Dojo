class User:
    def __init__(self, first_name, last_name, email, age):
        self.first_name = first_name
        self.last_name = last_name
        self.email = email
        self.age = age
        self.is_rewards_member = False
        self.gold_card_points = 0
        
    def display_info(self):
        print (self.first_name)
        print (self.last_name)
        print (self.email)
        print (self.age)
        print (self.is_rewards_member)
        print (self.gold_card_points)
        
    def enroll(self):
        if self.is_rewards_member == True:
            print("User already a member")
        else:
            self.is_rewards_member = True
            self.gold_card_points = 200
        
    def spend_points (self, amount):
        if amount <= self.gold_card_points:
            self.gold_card_points -= amount
        else:
            print ("Not enough points!")
        

user1 = User('John', 'Smith', 'jsmith@gmail', 30) #creates user1 INSTANCE
user1.enroll() #enrolls user1; rewards_member = TRUE, goldcard_points = 200
user1.spend_points (50) #subtracts 50 points; user1.gold_card_points = 150
user1.display_info() #prints and displays info for user1

user2 = User ('Jane', 'Doe', 'jdoe@gmail', 22) #creates user2 INSTANCE
user2.enroll() #enrolls user2; rewards_member = TRUE, goldcard_points = 200
user2.spend_points(80) #subtracts 80 points; user1.gold_card_points = 120
user2.display_info() #prints and displays info for user2

user3 = User ('Todd', 'Tom', 'ttom@gmail', 40) #creates user3 INSTANCE
user3.display_info() #prints and displays info for user1
user3.spend_points(40) # tries to subtracts 40 points; user3.gold_card_points = 0; prints "Not enough points!"
