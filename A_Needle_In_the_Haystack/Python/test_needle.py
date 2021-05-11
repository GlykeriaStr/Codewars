import pytest
from needle import find_needle

def test_find_needle():
  assert find_needle(["needle"]) == 'Found needle at position 0'
  assert find_needle(["hay", "needle"]) == 'Found needle at position 1'
  assert find_needle(["hay", "hay", "needle"]) == 'Found needle at position 2'
  assert find_needle(["hay", "hay", "hay", "needle"]) == 'Found needle at position 3'
  with pytest.raises(Exception) as e_info:
    find_needle(["hay"]) 