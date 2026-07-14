import pygame
from pygame.locals import *

pygame.init()
pygame.font.init()

screen = pygame.display.set_mode([600,700])

white = (255, 255, 255)
black = (0, 0, 0)
red = (255, 0, 0)
font = pygame.font.SysFont('Arial', 30)

screen.fill(white)

pygame.draw.line(screen, black, (200, 0), (200, 600), 10)
pygame.draw.line(screen, black, (400, 0), (400, 600), 10)
pygame.draw.line(screen, black, (0, 200), (600, 200), 10)
pygame.draw.line(screen, black, (0, 400), (600, 400), 10)
pygame.draw.rect(screen, black, (0, 600, 600, 100))

one = False
two = False
three = False
four = False
five = False
six = False
seven = False
eight = False
nine = False
a = False
s = False
d = False
f = False
g = False
h = False
j = False
k = False
l = False
x = False

text_surface = font.render("O has won!", True, white)
text_rect = text_surface.get_rect(center = (300, 650))
text_surface2 = font.render("X has won!", True, white)
text_rect2 = text_surface.get_rect(center = (300, 650))
text_surface3 = font.render("Somebody Won!", True, white)
text_rect3 = text_surface.get_rect(center = (300, 300))


running = True

while running:
  for event in pygame.event.get():
    if event.type == pygame.QUIT:
        running = False
    
    if event.type == KEYDOWN:
        if event.unicode == "1":
            if a:
                one = False
            elif x:
                one = False
            else:
                one = True
                if one:
                    pygame.draw.circle(screen, black, (100, 100), 75)
                    pygame.draw.circle(screen, white, (100, 100), 65)
        if event.unicode == "2":
            if s:
                two = False
            elif x:
                two = False
            else:
                two = True
                if two:
                    pygame.draw.circle(screen, black, (300, 100), 75)
                    pygame.draw.circle(screen, white, (300, 100), 65)
        if event.unicode == "3":
            if  d:
                three = False
            elif x:
                three = False
            else:
                three = True
                if three:
                    pygame.draw.circle(screen, black, (500, 100), 75)
                    pygame.draw.circle(screen, white, (500, 100), 65)
        if event.unicode == "4":
            if f:
                four = False
            elif x:
                four = False
            else:
                four = True
                if four:
                    pygame.draw.circle(screen, black, (100, 300), 75)
                    pygame.draw.circle(screen, white, (100, 300), 65)
        if event.unicode == "5":
            if g:
                five = False
            elif x:
                five = False
            else:
                five = True
                if five:
                    pygame.draw.circle(screen, black, (300, 300), 75)
                    pygame.draw.circle(screen, white, (300, 300), 65)
        if event.unicode == "6":
            if h:
                six = False
            elif x:
                six = False
            else:
                six = True
                if six:
                    pygame.draw.circle(screen, black, (500, 300), 75)
                    pygame.draw.circle(screen, white, (500, 300), 65)
        if event.unicode == "7":
            if j:
                seven = False
            elif x:
                seven = False
            else:
                seven = True
                if seven:
                    pygame.draw.circle(screen, black, (100, 500), 75)
                    pygame.draw.circle(screen, white, (100, 500), 65)
        if event.unicode == "8":
            if k:
                eight = False
            elif x:
                eight = False
            else:
                eight = True
                if eight:
                    pygame.draw.circle(screen, black, (300, 500), 75)
                    pygame.draw.circle(screen, white, (300, 500), 65)
        if event.unicode == "9":
            if l:
                nine = False
            elif x:
                nine = False
            else:
                nine = True
                if nine:
                    pygame.draw.circle(screen, black, (500, 500), 75)
                    pygame.draw.circle(screen, white, (500, 500), 65)
        
        if event.unicode == "q":
            if one:
                a = False
            elif x:
                a = False
            else:
                a = True
                if a:
                    pygame.draw.line(screen, black, (25, 25), (175, 175), 15)
                    pygame.draw.line(screen, black, (175, 25), (25, 175), 15)
        if event.unicode == "w":
            if two:
                s = False
            elif x:
                s = False
            else:
                s = True
                if s:
                    pygame.draw.line(screen, black, (225, 25), (375, 175), 15)
                    pygame.draw.line(screen, black, (375, 25), (225, 175), 15)
        if event.unicode == "e":
            if three:
                d = False
            elif x:
                d = False
            else:
                d = True
                if d:
                    pygame.draw.line(screen, black, (425, 25), (575, 175), 15)
                    pygame.draw.line(screen, black, (575, 25), (425, 175), 15)
        if event.unicode == "r":
            if four:
                f = False
            elif x:
                f = False
            else:
                f = True
                if f:
                    pygame.draw.line(screen, black, (25, 225), (175, 375), 15)
                    pygame.draw.line(screen, black, (175, 225), (25, 375), 15)
        if event.unicode == "t":
            if five:
                g = False
            elif x:
                g = False
            else:
                g = True
                if g:
                    pygame.draw.line(screen, black, (225, 225), (375, 375), 15)
                    pygame.draw.line(screen, black, (375, 225), (225, 375), 15)
        if event.unicode == "y":
            if six:
                h = False
            elif x:
                h = False
            else:
                h = True
                if h:
                    pygame.draw.line(screen, black, (425, 225), (575, 375), 15)
                    pygame.draw.line(screen, black, (575, 225), (425, 375), 15)
        if event.unicode == "u":
            if seven:
                j = False
            elif x:
                j = False
            else:
                j = True
                if j:
                    pygame.draw.line(screen, black, (25, 425), (175, 575), 15)
                    pygame.draw.line(screen, black, (175, 425), (25, 575), 15)
        if event.unicode == "i":
            if eight:
                k = False
            elif x:
                k = False
            else:
                k = True
                if k:
                    pygame.draw.line(screen, black, (225, 425), (375, 575), 15)
                    pygame.draw.line(screen, black, (375, 425), (225, 575), 15)
        if event.unicode == "o":
            if nine:
                l = False
            elif x:
                l = False
            else:
                l = True
                if l:
                    pygame.draw.line(screen, black, (425, 425), (575, 575), 15)
                    pygame.draw.line(screen, black, (575, 425), (425, 575), 15)
        
    if one and two and three:
        pygame.draw.line(screen, red, (12.5, 100), (587.5, 100), 10)
        screen.blit(text_surface, text_rect)
        x = True
    if four and five and six:
        pygame.draw.line(screen, red, (12.5, 300), (587.5, 300), 10)
        screen.blit(text_surface, text_rect)
        x = True
    if seven and eight and nine:
        pygame.draw.line(screen, red, (12.5, 500), (587.5, 500), 10)
        screen.blit(text_surface, text_rect)
        x = True
    if one and four and seven:
        pygame.draw.line(screen, red, (100, 12.5), (100, 587.5), 10)
        screen.blit(text_surface, text_rect)
        x = True
    if two and five and eight:
        pygame.draw.line(screen, red, (300, 12.5), (300, 587.5), 10)
        screen.blit(text_surface, text_rect)
        x = True
    if  three and six and nine:
        pygame.draw.line(screen, red, (500, 12.5), (500, 587.5), 10)
        screen.blit(text_surface, text_rect)
        x = True
    if one and five and nine:
        pygame.draw.line(screen, red, (12.5, 12.5), (587.5, 587.5), 10)
        screen.blit(text_surface, text_rect)
        x = True
    if three and five and seven:
        pygame.draw.line(screen, red, (587.5, 12.5), (12.5, 587.5), 10)
        screen.blit(text_surface, text_rect)
        x = True

    if a and s and d:
        pygame.draw.line(screen, red, (12.5, 100), (587.5, 100), 10)
        screen.blit(text_surface2, text_rect2)
        x = True
    if f and g and h:
        pygame.draw.line(screen, red, (12.5, 300), (587.5, 300), 10)
        screen.blit(text_surface2, text_rect2)
        x = True
    if j and k and l:
        pygame.draw.line(screen, red, (12.5, 500), (587.5, 500), 10)
        screen.blit(text_surface2, text_rect2)
        x = True
    if a and f and j:
        pygame.draw.line(screen, red, (100, 12.5), (100, 587.5), 10)
        screen.blit(text_surface2, text_rect2)
        x = True
    if s and g and k:
        pygame.draw.line(screen, red, (300, 12.5), (300, 587.5), 10)
        screen.blit(text_surface2, text_rect2)
        x = True
    if d and h and l:
        pygame.draw.line(screen, red, (500, 12.5), (500, 587.5), 10)
        screen.blit(text_surface2, text_rect2)
        x = True
    if a and g and l:
        pygame.draw.line(screen, red, (12.5, 12.5), (587.5, 587.5), 10)
        screen.blit(text_surface2, text_rect2)
        x = True
    if d and g and j:
        pygame.draw.line(screen, red, (587.5, 12.5), (12.5, 587.5), 10)
        screen.blit(text_surface2, text_rect2)
        x = True

  pygame.display.flip()

pygame.quit()