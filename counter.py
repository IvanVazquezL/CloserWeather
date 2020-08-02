import json
from collections import Counter

with open('city.list.json',encoding="utf-8") as f:
  data = json.load(f)

# print(data)

c = Counter(player["country"] for player in data)

print(c)

listCountries = list(c.keys())

print(" ")
print("List of Countries")
listCountries.sort()
print(listCountries)
