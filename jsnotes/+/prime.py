# series of prime number-300
for i in range(1,30):
    for j in range(2,i):
        if i%j==0:
            break
        else:
            print(i,end=",")