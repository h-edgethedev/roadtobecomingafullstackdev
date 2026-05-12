pin= 250322

for password in range(1000000):
    if pin==password:
        print(f"Pincode cracked: {password}")
        print(password)
        break
