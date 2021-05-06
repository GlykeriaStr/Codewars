def find_needle(array)
  raise 'No needle found' unless array.include?('needle')
  array.each_with_index { |word, index| return "found the needle at position #{index}" if word == "needle" }
end