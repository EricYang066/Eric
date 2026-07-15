print("Welcome to the Adventure Bot!")
name = input("What is your name, adventurer?")
print("Hello " +  name + ", your journey shall now commence...")

inventory = []

while "quit" not in inventory and "win" not in inventory and "die" not in inventory:
  print("\nWalking along an old road in the middle of nowhere. You see ancient ruins in the the distance.")
  decision = input("\nDo you wish to follow a split in the road to the ruins? (yes/no)").lower()
  if decision == "yes":
    print("\nFollowing the road, you arrive at your destination.")
    print("A large village of burnt houses climbing up a mountain where a castle laid utterly obliterated.")
    choice = input("\nDo you wish to hike upwards to the castle? (yes/no)").lower()
    if choice == "yes":
      print("\nAs you arrive at the steps up to the castle, you hear a cold voice.")
      print("Should you wish to turn back, no harm shall befall you.")
      print("Should you wish to remain, you shall only be driven away.")
      choice2 = input("\nDo you wish to keep going? (yes/no)").lower()
      if choice2 == "yes":
        print("\nYou ascend to the gates of the castle where you hear the cold voice once more.")
        print("This shall be your final warning.")
        print("Turn back or die standing.")
        choice4 = input("Do you wish to keep going deeper into the castle.")
        if choice4 == "yes":
          print("\nYou feel the castle shake and a shiver down your spine.")
          print("The ruins of it seem to glow a faint red with the edges searing hot.")
          print("You find some stone tablets that contained information about what went on here.")
          choice5 = input("Do you wish to view what was on the stone tablets? (yes/no)").lower()
          if choice5 == "yes":
            print("\nThe tablets speak of the tale of the Great Dragon Teryxx, the Maneater.")
            print("It flew into the village and held everything sacred to the villagers hostage and threatened their lives.")
            print("It demanded all the treasure of the and one 10 villagers to be sacrificed to it every day of the entire village goes down in flames and smoke")
            print("Then, a group of powerful heroes showed up to the village after a week of the dargon's reign.")
            print("And they proposed the idea that they would slay the dragon in return for half the treasure.")
            print("With no other option, the villagers agreed.")
            print("Then, the next day the dragon flew into the village and said.")
            print("How dare anybody do this! And regurgitated the bodies of the heroes.")
            print("Then the tablets words became written out of scratch marks of a great claw.")
            print("And you will be next, adventurer.")
            choice8 = input("\nDo you wish to keep on going? (yes/no)").lower()
            if choice8 == "yes":
              print("\nYou stumble upon a large chamber filled with a mountain of gold and countless pieces fo jewelry.")
              print("\nYou see the top of a large spiky throne topped with one large spike and more spiky pieces of jewelry on the mountain of gold.")
              print("Suddenly, you were struck by an invisible object.")
              print("\nThe dragon appears before you.")
              print("You...")
              print("You have a death wish.")
              choice9 = input("\nWhich do you wish to say? (Wait a moment!/Burn in hell, wyrm!)")
              if choice9 == "Wait a moment!":
                print("\nWhat could you possibly offer I, the maneater to spare your life, adventurer?")
                choice10 = input("Which do you wish to say? (Information on how to further protect yourself./Die you enlarged lizard!)")
                if choice10 == "Information on how to further protect yourself.":
                  print("\nLike what?")
                  choice11 = input("Which do you wish to say? (We all know that dragons have a soft belly so if you cover yourself with gold by laying on your pile of gold then you get more armor./Kill yourself you ugly beast!)")
                  if choice11 =="We all know that dragons have a soft belly so if you cover yourself with gold by laying on your pile of gold then you get more armor.":
                    print("\nAlright I suppose.")
                    print("It laid on its pile of gold.")
                    print("This is very uncomfortable")
                    print("The dragon got up but the gold fell of his belly.")
                    print("The dragon laid on the pile of gold once more, but this time, it drove the spikes so deep inside of it that it died laying on its mound of treasure.")
                    choice12 = input("Do you wish to take some gold? (yes/no)").lower()
                    if choice12 == "yes":
                      print("\nAn explosion knocks you off of your feet with a ringing in your ears.")
                      print("Along with the ringing from the explosion you also the cold voice of the dragon mock you for being fooled so easily.")
                      inventory.append("die")
                    else:
                      print("\nYou leave the castle in one piece and with your limbs intact.")
                      inventory.append("win")
                  else:
                    print("\nPrepare to meet your maker!")
                    inventory.append("die")
                else:
                  print("\nPrepare to meet your maker!")
                  inventory.append("die")
              else:
                print("\nPrepare to meet your maker!")
                inventory.append("die")
            else:
              print("A giant claw goes through you chest")
              print("You hear the cold voice for the very last time.")
              print("You saw, and now you must die.")
              inventory.append("die")
          else:
            print("\nYou move on without the information on the tablets.")
            choice13 = input("\nDo you wish to keep on going? (yes/no)").lower()
            if choice13 == "yes":
              print("\nYou stumble upon a large chamber filled with a mountain of gold and countless pieces fo jewelry.")
              print("\nYou see the top of a large spiky throne topped with one large spike and more spiky pieces of jewelry on the mountain of gold.")
              print("Suddenly, you were struck by an invisible object.")
              print("\nThe dragon appears before you.")
              print("You...")
              print("You have a death wish.")
              choice14 = input("\nWhich do you wish to say? (Wait a moment!/Burn in hell, wyrm!)")
              if choice14 == "Wait a moment!":
                print("\nWhat could you possibly offer I, the maneater to spare your life, adventurer?")
                choice15 = input("Which do you wish to say? (Information on how to further protect yourself./Die you enlarged lizard!)")
                if choice15 == "Information on how to further protect yourself.":
                  print("\nLike what?")
                  choice16 = input("Which do you wish to say? (We all know that dragons have a soft belly so if you cover yourself with gold by laying on your pile of gold then you get more armor./Kill yourself you ugly beast!)")
                  if choice16 =="We all know that dragons have a soft belly so if you cover yourself with gold by laying on your pile of gold then you get more armor.":
                    print("\nAlright I suppose.")
                    print("It laid on its pile of gold.")
                    print("This is very uncomfortable")
                    print("The dragon got up but the gold fell of his belly.")
                    print("The dragon laid on the pile of gold once more, but this time, it drove the spikes so deep inside of it that it died laying on its mound of treasure.")
                    choice17 = input("Do you wish to take some gold? (yes/no)").lower()
                    if choice17 == "yes":
                      print("\nAn explosion knocks you off of your feet with a ringing in your ears.")
                      print("Along with the ringing from the explosion you also the cold voice of the dragon mock you for being fooled so easily.")
                      inventory.append("die")
                    else:
                      print("\nYou leave the castle in one piece and with your limbs intact.")
                      inventory.append("win")
                  else:
                    print("\nPrepare to meet your maker!")
                    inventory.append("die")
                else:
                  print("\nPrepare to meet your maker!")
                  inventory.append("die")
              else:
                print("\nPrepare to meet your maker!")
                inventory.append("die")
            else:
              print("A giant claw goes through you chest")
              print("You hear the cold voice for the very last time.")
              print("You saw, and now you must die.")
              inventory.append("die")
        else:
          choice7 = input("\nDo you wish to explore the village? (yes/no)").lower()
          if choice7 == "yes":
            print("\nThe village had a giant lake which provided a water supply to the village.")
            print("The village had a mountain to its back where the castle of the village layed.")
            print("This was likely a key natural protection for the villagers because if raiders came, the villagers could hide in their castle.")
            print("The reason why the castle was so well protected was because the mountain acted as a natural barricade for invaders from the rear of the village.")
            print("On top of that, the walls of the castle were also tall and sheer which made it impossible to scale.")
            print("The castle of the village also had many food stores and water stores that the village could fall back on.")
            print("With that being said, what could have possible caused all of this destruction?")
          else:
            print("Your adventure comes to an end.")
            inventory.append("quit")
      else:
        choice6 = input("\nDo you wish to explore the village? (yes/no)").lower()
        if choice6 == "yes":
          print("\nThe village had a giant lake which provided a water supply to the village.")
          print("The village had a mountain to its back where the castle of the village layed.")
          print("This was likely a key natural protection for the villagers because if raiders came, the villagers could hide in their castle.")
          print("The reason why the castle was so well protected was because the mountain acted as a natural barricade for invaders from the rear of the village.")
          print("On top of that, the walls of the castle were also tall and sheer which made it impossible to scale.")
          print("The castle of the village also had many food stores and water stores that the village could fall back on.")
          print("With that being said, what could have possible caused all of this destruction?")
        else:
          print("Your adventure comes to an end.")
          inventory.append("quit")
    else:
      choice3 = input("\nDo you wish to explore the village? (yes/no)").lower()
      if choice3 == "yes":
        print("\nThe village had a giant lake which provided a water supply to the village.")
        print("The village had a mountain to its back where the castle of the village layed.")
        print("This was likely a key natural protection for the villagers because if raiders came, the villagers could hide in their castle.")
        print("The reason why the castle was so well protected was because the mountain acted as a natural barricade for invaders from the rear of the village.")
        print("On top of that, the walls of the castle were also tall and sheer which made it impossible to scale.")
        print("The castle of the village also had many food stores and water stores that the village could fall back on.")
        print("With that being said, what could have possible caused all of this destruction?")
      else:
        print("Your adventure comes to an end.")
        inventory.append("quit")
  else:
    print("\nYou go along the road opposite to the one leading to the ruins.")
    print("You lose your status as an adventurer and never get to know what went on in those ruins.")
    print("You were driven away by the mere sight of a challenge in the distance.")
    inventory.append("quit")
if "quit" in inventory:
  print("\nYou shall live the rest of your days cursed by the power of a thousand suns!")
if "die" in inventory:
  print("\nYou died!")
if "win" in inventory:
  print("\nYou succeeded in conquering the maneater dragon.")
  print("You win!")