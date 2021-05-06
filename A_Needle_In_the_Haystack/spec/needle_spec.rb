require 'needle'

describe  'find_needle' do
  it 'returns "found the needle at position 0" when there is only one needle' do
    expect(find_needle(['needle'])).to eq('found the needle at position 0')
  end

  it 'returns "found the needle at position 1" when passed ["hay","needle"] ' do
    expect(find_needle(['hay','needle'])).to eq('found the needle at position 1')
  end

  it 'returns "found the needle at position 2" when passed ["hay","hay","needle"] ' do
    expect(find_needle(['hay', 'hay', 'needle'])).to eq('found the needle at position 2')
  end
end