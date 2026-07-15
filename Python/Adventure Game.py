import random

maze = {
  (0,0): "You are in a clearing with an open gate flanked by stone walls with vines running down them.",
  (0,1): "You are in an open clearing with a fountain and feral noises emanating from behind it.",
  (1,1): "You are in a sunny green with a tall grass in it.",
  (1,0): "You are in a foggy chamber.",
  (1,-1): "You are in a moist and dark room.",
  (0,-1): "You are in a cold and dry room with cobwebs in the corners of it.",
  (-1,-1): "You are in a arid and hot section full of sand.",
  (-1,1): "You are in a windy section with flowing water coming out of the walls.",
}
animals = {
  (0,1): "wolf",
  (1,1): "snake",
  (1,0): "bat",
  (1,-1): "rat",
  (0,-1): "spider"
}
potions = {
  (-1,-1): "Health potion",
  (-1,1): "Health potion"
}

position = (0,0)
health = 100
inventory = []

while health > 0:
  print("")
  if position in maze:
    print(maze[position])
    prevposition = position
  else:
    position = prevposition
    damage = random.randint(1,5)
    health -= damage
    print("You hit the wall and took " + str(damage) + " damage.")
    print("You are currently on " + str(health) + " health.")
    print("You stay where you are.")
    continue
  
  if position in animals:
    enemy = animals[position]
    print("You have encountered a wild " + enemy + "!")
    
    result = random.randint(1,2)
    if result == 1:
      print("You escaped the wild " + enemy + " without taking any damage!")
    else:
      print("You escaped the wild  " + enemy + " but took some damage!")
      damage = random.randint(10,20)
      health -= damage
      print("You were hit by the " + enemy + " and lost " + str(damage) + " health.")
      print("You are currently on " + str(health) + " health.")
      
  if position in potions:
    potion = potions[position]
    print("You found a " + potion + ".")
    
    choice = input("Would you like to use, store, or leave the potion? (use/store/leave)").lower()
    if choice == "use":
      if health == 100:
        print("You just wasted your health potion because you were on full health.")
        print("Your health is currently " + str(health) + ".")
      elif health == 99:
        health += 1
        print("Your health is currently " + str(health) + ".")
      elif health == 98:
        health += 2
        print("Your health is currently " + str(health) + ".")
      elif health == 97:
        health += 3
        print("Your health is currently " + str(health) + ".")
      elif health == 96:
        health += 4
        print("Your health is currently " + str(health) + ".")
      elif health == 95:
        health += 5
        print("Your health is currently " + str(health) + ".")
      elif health == 94:
        health += 6
        print("Your health is currently " + str(health) + ".")
      elif health == 93:
        health += 7
        print("Your health is currently " + str(health) + ".")
      elif health == 92:
        health += 8
        print("Your health is currently " + str(health) + ".")
      elif health == 91:
        health += 9
        print("Your health is currently " + str(health) + ".")
      else:
        health += 10
        print("Your health is currently " + str(health) + ".")
    elif choice == "store":
      inventory.append("Health Potion")
      print("You now have a health potion")
      print("Your inventory contains" + str(inventory))
      print("Well, you can never access your inventory again so...")
    else:
      print("You left the potion on the ground.")
      
  move = input("Which direction do you wish to go? (up/down/left/right): ").lower()
  x, y = position
  
  if move == "up":
    position  = (x, y + 1)
  elif move == "down":
    position = (x, y - 1)
  elif move == "left":
    position = (x - 1, y)
  elif move == "right":
    position = (x + 1, y)
  else:
    print("You stay where you are.")

print("")
print("You are currently on " + str(health) + " health, you died.")
print("Game Over!")