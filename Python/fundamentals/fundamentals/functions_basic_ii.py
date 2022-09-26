#1. Countdown
def countdown(x):
    list1=[]
    for x in range (x,-1,-1):
        list1.append(x)
    return list1

print(countdown(10))

#2 Print and Return
def print_and_return(list1):
    print(list1[0])
    return(list1[1])

print (print_and_return([3,10]))


#3. First Plus Length
def first_plus_length (list1):
    sum = list1[0] + list1[len(list1)-1]
    return sum

print(first_plus_length([1,2,3,4,5]))

#4. Values Greater than second
def values_greater_than_second(list1):
    if (len(list1) < 2):
        return False
    else:
        count = 0
        list2 =[]
        for i in range (0, len(list1), 1):
            if list1[i] > list1[1]:
                count += 1
                list2.append(list1[i])
        print (count)
        return list2

print(values_greater_than_second([3]))
print(values_greater_than_second([5,2,3,2,1,4]))

#5. This Length, That Value
def length_and_value(size1, value1):
    list_length = []
    list_length.append(value1)
    list_length = list_length * size1
    return list_length

print (length_and_value(4,7))
print (length_and_value(6,2))