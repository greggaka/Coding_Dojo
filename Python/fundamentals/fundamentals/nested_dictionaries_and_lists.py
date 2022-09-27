# #1. Update Values in Dictionaries and Lists
# Change the value 10 in x to 15. Once you're done, x should now be [ [5,2,3], [15,8,9] ].
x = [ [5,2,3], [10,8,9] ] 
x[1][0] = 15
print (x)

# # Change the last_name of the first student from 'Jordan' to 'Bryant'
students = [
     {'first_name':  'Michael', 'last_name' : 'Jordan'},
     {'first_name' : 'John', 'last_name' : 'Rosales'}
]
students[0]["last_name"] = "Bryant"
print(students)

# # In the sports_directory, change 'Messi' to 'Andres'
sports_directory = {
    'basketball' : ['Kobe', 'Jordan', 'James', 'Curry'],
    'soccer' : ['Messi', 'Ronaldo', 'Rooney']
}
sports_directory["soccer"][0] = "Andres"
print(sports_directory)

# # Change the value 20 in z to 30
z = [ {'x': 10, 'y': 20} ]
z[0]["y"] = 30
print(z)

#-------------------------------------------
#2 Iterate Through a List of Dictionaries
students = [
        {'first_name':  'Michael', 'last_name' : 'Jordan'},
        {'first_name' : 'John', 'last_name' : 'Rosales'},
        {'first_name' : 'Mark', 'last_name' : 'Guillen'},
        {'first_name' : 'KB', 'last_name' : 'Tonel'}
    ]

def iterateDictionary(list1):
    for i in range (0, len(list1)):
        print ("first_name - " + list1[i]["first_name"] + ", " "last_name - " + list1[i]["last_name"])

iterateDictionary(students) 
# should output: (it's okay if each key-value pair ends up on 2 separate lines;
# bonus to get them to appear exactly as below!)
# first_name - Michael, last_name - Jordan
# first_name - John, last_name - Rosales
# first_name - Mark, last_name - Guillen
# first_name - KB, last_name - Tonel

#-------------------------------------------
#3. Get Values from a List of Dictionaries
def iterateDictionary2(key_name, some_list):
    for i in range (0, len(some_list), 1):
        print(some_list[i][key_name])

iterateDictionary2("first_name", students)
iterateDictionary2("last_name", students)

#-------------------------------------------
#4. Iterate Through a Dictionary with List Values
dojo = {
    'locations': ['San Jose', 'Seattle', 'Dallas', 'Chicago', 'Tulsa', 'DC', 'Burbank'],
    'instructors': ['Michael', 'Amy', 'Eduardo', 'Josh', 'Graham', 'Patrick', 'Minh', 'Devon']
}

def print_info(some_dict):
    for i in some_dict: # will iterate through keys, first "locations", then "instructors"
        #string concatentation of length of values plus key ^^
        print(f"{len(some_dict[i])} {i.upper()}") #len(some_dict) = 2 (refers to keys); #len(i) = length of string of the key (9 for 'location',11 for 'instrucotrs'); #len(some_dict[i]) = number of values in key i
        for j in range (0, len(some_dict[i]), 1): #for loop to iterate through values
            print(some_dict[i][j]) #object[key][value]


print_info(dojo)
# output:
# 7 LOCATIONS
# San Jose
# Seattle
# Dallas
# Chicago
# Tulsa
# DC
# Burbank
    
# 8 INSTRUCTORS
# Michael
# Amy
# Eduardo
# Josh
# Graham
# Patrick
# Minh
# Devon
