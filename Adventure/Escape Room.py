rooms = {
  (0,0): "Room 1 - A padlock locks the door to the west and a keypad locks the door to the east. There is an empty fountain in the middle of the room and a keypad on the wall to the north.",
  (0,1): "Room 6 - You escaped.",
  (1,0): "Room a1 - There is a padlock on the door to the south and a keypad on the wall. There is also a shelf there.",
  (1,-1): "Room b1 - A control pad lays in the middle of the room with differently colored levers.",
  (-1,0): "Room a2 - The door to the south is locked by a padlock, and there are different numbered paintings on it.",
  (-1,-1): "Room b2 - A pipe runs down from the ceiling."
}

position = (0,0)
inventory = []
max_moves = 15
one_padlock = False
one_keypad = False
fountain = False
a1_keypad = False
a1_padlock = False
blue_lever = False
red_lever = False
green_lever = False
yellow_lever = False
painting1 = False
painting2 = False
painting3 = False
a2_padlock = False
final_keypad = False

while position != (0,1) and max_moves >= 0:
  print("\nYou are in " + rooms[position])
  if position == (0,0):
    print("""\n  ☐
☐ ✛ ☐
☐   ☐
""")
  if position == (1,0):
    print("""\n  ☐
☐ ☐ ✛
☐   ☐
""")
  if position == (1,-1):
    print("""\n  ☐
☐ ☐ ☐
☐   ✛
""")
  if position == (-1,0):
    print("""\n  ☐
✛ ☐ ☐
☐   ☐
""")
  if position == (-1,-1):
    print("""\n  ☐
☐ ☐ ☐
✛   ☐
""")
  print("You have " + str(max_moves) + " moves left, so use them wisely.")
  print("")
  
  if position == (0,0) and not one_keypad and "note" not in inventory:
    choice = input("Do you wish to search the empty fountain? (yes/no): ").lower()
    if choice == "yes":
      inventory.append("note")
      print("The fountain has the number 2 to the west, 3 to the east, 5 to the north, and 8 to the south.")
      print("The fountain also held a note that says: 'Going counterclockwise is the key, from west to south.'")
    else:
      print("There may have been some necessary information in that fountain.")
  
  if position == (0,0) and "note" in inventory and not one_keypad:
    code = input("Enter the code to progress to the west: ")
    if code == "2538":
      one_keypad = True
      print("Correct.")
    else:
            print("Incorrect.")
  
  if position == (1,0) and "key" not in inventory:
    print("You see a key on the shelf.")
    choice2 = input("Do you wish to take the key? (yes/no): ").lower()
    if choice2 == "yes":
      inventory.append("key")
      print("You took the key.")
    else:
      print("That key could have been useful.")
  
  if position == (0,0) and "key" in inventory and not one_padlock:
    key = input("Do you wish to use your key on the padlock guarding the east? (yes/no): ").lower()
    if key == "yes":
      one_padlock = True
      print("You unlocked the door.")
    else:
      print("That may have been useful.")
  
  if position == (-1,0) and not painting1:
    choice3 = input("Do you wish to search the painting labeled '1'? (yes/no): ").lower()
    if choice3 == "yes":
      painting1 = True
      print("You found a hidden '3' on it.")
    else:
      print("That may have been useful.")
  
  if position == (-1,0) and painting1 and not painting2:
    choice4 = input("Do you wish to search the painting labeled '2'? (yes/no): ").lower()
    if choice4 == "yes":
      painting2 = True
      print("You found a hidden '6' on it.")
    else:
      print("That may have been useful.")
  
  if position == (-1,0) and painting1 and painting2 and not painting3:
    choice5 = input("Do you wish to search the painting labeled '3'? (yes/no): ").lower()
    if choice5 == "yes":
      painting3 = True
      print("You found a hidden '7' on it.")
    else:
      print("That may have been useful.")
  
  if position == (1,0) and painting1 and painting2 and painting3 and not a1_keypad:
    print("The keypad on the wall has the numbers '3', '1', and '2' on it.")
    knowledge = input("What is the code?: ")
    if knowledge == "736":
      a1_keypad = True
      print("Correct.")
      inventory.extend(["blue_key", "green_key", "note2"])
      print("A hidden latch on the wall opened to reveal a couple items.")
      print("You received a blue key labeled 'Use on the door' and a green key labeled 'Use on the other door'.")
      print("You also received a note that says: 'Flick those who are the same color of the keys'.")
    else:
      print("Incorrect.")
  
  if position == (1,0) and "blue_key" in inventory and not a1_padlock:
    choice5 = input("Do you wish to use the blue key on the door, your green key, or do you not wish to use your keys on the door at all? (blue/green/no): ").lower()
    if choice5 == "blue":
      a1_padlock = True
      print("The door unlocked.")
    elif choice5 == "green":
      print("The door stayed locked.")
    else:
      print("That may have been useful.")
  
  if position == (1,-1):
    while True:
      print("Current lever statuses: Blue(" + str(blue_lever) + "), Red(" + str(red_lever) + "), Green(" + str(green_lever) + "), Yellow(" + str(yellow_lever) + ")")
      lever_choice = input("Which lever do you want to switch? (blue/red/green/yellow/exit): ").lower()
      if lever_choice == "blue":
        blue_lever = not blue_lever
        print("You flicked the blue lever.")
      elif lever_choice == "red":
        red_lever = not red_lever
        print("You flicked the red lever.")
      elif lever_choice == "green":
        green_lever = not green_lever
        print("You flicked the green lever.")
      elif lever_choice == "yellow":
        yellow_lever = not yellow_lever
        print("You flicked the yellow lever.")
      elif lever_choice == "exit":
        if blue_lever and not red_lever and green_lever and not yellow_lever:
          print("You hear the jingle of keys emanating from the locked room adjacent to room a2.")
          break
        else:
          print("Nothing happened. Maybe try a different combination?")
          continue
  
  if position == (-1,0) and "green_key" in inventory:
    key2 = input("Do you wish to use the green key to unlock the door. (yes/no): ")
    if key2 == "yes":
      inventory.remove("green_key")
      a2_padlock = True
      print("The door unlocked.")
    else:
      print("That may have been useful.")
  
  if position == (-1,-1) and blue_lever and not red_lever and green_lever and not yellow_lever and not final_keypad:
    inventory.append("final_key")
    print("You found a key.")
    print("It seems to have fallen from the pipe.")
  
  if position == (0,0) and "final_key" in inventory and not final_keypad:
    choice6 = input("Do you wish to search the top of the fountain? (yes/no): ")
    if choice6 == "yes":
      print("You found a keyhole on the top of the fountain.")
      key3 = input("Do you wish to use your key on the top of the fountain? (yes/no): ")
      if key3 == "yes":
        inventory.append("final_note")
        print("Water rushes from the fountain and with it, a plastic note, it says: The product of the keypad codes for the door to room a1 and the keypad for the latch in the same room shall be the answer to your containment.")
      else:
        print("That may have been useful.")
    else:
      print("That may have been useful.")
  else:
    print("")
  
  if position == (0,0) and "final_note" in inventory:
    final_code = input("What is the code to the keypad on the wall?: ")
    if final_code == "1867968":
      final_keypad = True
      print("A hidden sliding door opens before you.")
      final_decision = input("Do you wish to leave? (yes/no): ")
      if final_decision == "yes":
        print("Then go upwards to be free!")
        print("")
      else:
        print("Damn.")
    else:
      print("Incorrect")
  
  move = input("Move (up/down/left/right): ").lower()
  x, y = position           
  
  if move == "up":
    previous_position = (x, y + 1)
    max_moves -= 1
  elif move == "down":
    previous_position = (x, y - 1)
    max_moves -= 1
  elif move == "left":
    previous_position = (x - 1, y)
    max_moves -= 1
  elif move == "right":
    previous_position = (x + 1, y)
    max_moves -= 1
  else:
    print("\nMake your move!.")
    continue
  
  if previous_position in rooms:
    position = previous_position
  else:
    print("\nYou bumped into a wall.")
    max_moves += 1
  
  if not one_padlock and position == (-1,0):
    position = (0,0)
    print("\nThat door is locked.")
    max_moves += 1
  if not one_keypad and position == (1,0):
    position = (0,0)
    print("\nThat door is locked.")
    max_moves += 1
  if not a1_padlock and position == (1,-1):
    position = (1,0)
    print("\nThat door is locked.")
    max_moves += 1
  if not a2_padlock and position == (-1,-1):
    position = (-1,0)
    print("\nThat door is locked.")
    max_moves += 1
  if not final_keypad and position == (0,1):
    position = (0,0)
    print("\nThat door is locked.")
    max_moves += 1

if position == (0,1):
  print("""\n  ✛
☐ ☐ ☐
☐   ☐
""")
  print("You have escaped.")

if max_moves < 0:
  print("\nYou have failed.")