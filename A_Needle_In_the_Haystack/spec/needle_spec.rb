require 'needle'

describe  'find_needle' do
  it 'returns "found the needle at position 0" when there is only one needle' do
    expect(find_needle(['needle'])).to eq('found the needle at position 0')
  end
end