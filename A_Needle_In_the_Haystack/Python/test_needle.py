import pytest
from needle import find_needle

def test_find_needle():
  assert find_needle(["needle"]) == 'Found needle at position 0'
