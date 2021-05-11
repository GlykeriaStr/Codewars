def find_needle(list):
  if 'needle' not in list:
    raise Exception 
  for i in list:
    if i == 'needle':
      return f"Found needle at position {list.index('needle')}"
  
