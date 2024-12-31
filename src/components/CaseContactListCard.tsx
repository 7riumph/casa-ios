import { View, Text, TouchableOpacity } from 'react-native';

import Button from './Button';

import tw from 'twrnc';

const CaseContactListCard = ({ item, navigation }) => {
  return (
    <TouchableOpacity style={tw`py-3`}>

     <Button
	buttonStyle={tw`flex justify-center items-center w-80 h-[20] bg-[#ffffff] rounded-3xl font-bold shadow-lg`}	
	textStyle={tw`text-xl font-bold text-black`}
        title={item.name}
        onPress={() => navigation.navigate('CaseContactDetailScreen')}
      />

    

    </TouchableOpacity>
  );
};

export default CaseContactListCard;
