<py-script>
def hello_world_script():
    print("Hello World")
    print('=========================')
</py-script>


<py-script>
def math_script():
    print(int(50) * int(50) % int(66))
    print('=========================')
</py-script>
 

<py-script>
def list_script():
    list = ['bob', 'kwame', 'josephine', 'claire']
    for x in list:
        print(x)
    print('=========================')
</py-script>


<py-script>
def validate_username():
    while True:
        try:

            ## get users name
            username_input = str(input())
            if len(username_input) >= int(2):
                username_split = username_input.split()
                username_join = ''.join([str(item) for item in username_split])

                # namelist = []
                # namelist.append(username_split[0])
                # namelist.append(username_split[1])
                # print(namelist)

                # if are alphabet characters run nested if statement
                if (username_split[0].isalpha()) == True:
                    if (username_split[1].isalpha()) == True:

                        # access user input via 2 elements
                        if username_split[0] != False:
                            fname = str(username_split[0]).title()
                            if username_split[1] != False:
                                lname =  str(username_split[1]).title()

                                # for i in range(0,int(len(username_split))):
                                #     # print the value of i
                                #     print(i)
                                #     # print value of list
                                # print(username_split[i])

                                if len(username_join) > int(25):
                                    print("You have entered more than 25 characters.\nPlease make sure that you have only \nentered your full name.")
                                    print('=========================================')
                                elif len(username_join) == int(0):
                                    print("You haven't entered anything.")
                                    print('=============================')
                                elif len(username_join) < int(4):
                                    print("You have entered less than 4 characters.\nPlease make sure that you have entered \nyour first name and surname.")
                                    print('=======================================')
                                else:
                                    usermsg = "Thank you {} {} for entering your name"
                                    print(usermsg.format(fname, lname))
                                    print('==============================================')
                            else:
                                print("Please enter your full name.")
                                print('============================')
                
                elif (username_split[0].isalpha()) == False:
                    if (username_split[1].isalpha()) == False:
                        print("No numbers or symbols please.")
                        print('=============================')
                elif (username_split[0] != True ):
                    if (username_split[1] != True ):
                        print("No numbers or symbols please.")
                        print('============================')
                else:
                    print("Please enter your full name.")
                    print('============================')

            elif username_input == '':
                print("Please enter your full name.")
            else:
                print("Please enter your full name.")



            break
        except IndexError:
            print("Fullname required.")
            print('==================')
            continue
        finally:
            break

</py-script>



<py-script>
def datetime_script():
    today = datetime.datetime.now()
    print(today.strftime("%A"), today.strftime("%d"), today.strftime("%B"), today.strftime("%Y"))
</py-script>