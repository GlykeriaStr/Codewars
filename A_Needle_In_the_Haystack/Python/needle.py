def find_needle(list):
  for i in list:
    if i == 'needle':
      return f"Found needle at position {list.index('needle')}"
  
