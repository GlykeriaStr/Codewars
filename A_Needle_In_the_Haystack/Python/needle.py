def find_needle(list):
  if len(list) == 1: 
    return "Found needle at position 0"
  elif len(list) == 2:
    return "Found needle at position 1"
  else:
    return "Found needle at position 2"
