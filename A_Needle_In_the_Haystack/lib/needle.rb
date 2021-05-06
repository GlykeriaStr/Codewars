def find_needle(array)
  array.each_with_index { |word, index| return "found the needle at position #{index}" if word == "needle" }
end