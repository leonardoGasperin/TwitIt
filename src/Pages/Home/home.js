import React, { useState } from 'react';
import { Image, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { commonStyles } from '../../styles/CustomStyles';


export default function Home({navigation}) {
    const [usrName, setUsrName] = useState("");
    const [postMessenge, setPostMessenge] = useState("");
    const [dtRecord, setDtRecord] = useState("");
    const homeLogo = 'https://o.remove.bg/downloads/5f264a69-688f-4316-a5ab-fa619779adf2/twitter-removebg-preview.png'

    const cancel = () => {
        setUsrName("");
        setPostMessenge("");
        navigateTo("Home");
    }
    const save = () => {
        setDtRecord(new Date());
        ///TODO
        ///Fetch para salvar na web api a postagem
        navigateTo("AppBottomTabNav");
    }

    const navigateTo = (page) => {
        navigation.navigate(page);
    }

    return (
        <View style={commonStyles.container}>
          <Text style={{...commonStyles.labels, ...commonStyles.logoText}}>TwitIt</Text>
          <Image source={{uri: homeLogo}} style={commonStyles.logo}/>
          <Text style={commonStyles.labels}>Apelido:</Text>
          <TextInput style={commonStyles.textBox} placeholder='Apelido'
              value={usrName}
              onChangeText={setUsrName}
              maxLength={16}
              keyboardType='ascii-capable'
          />
          <Text style={commonStyles.labels}>Seu TwitIt:</Text>
          <TextInput placeholder='TwitIt!'
              value={postMessenge}
              onChangeText={setPostMessenge}
              multiline={true}
              numberOfLines={10}
              style={{...commonStyles.textBox, ...commonStyles.TextAreaBox}}
          />
          <View style={commonStyles.rowComponents}>
              <TouchableOpacity style={{...commonStyles.cancelBtn, ...commonStyles.button}} onPress={cancel} >
                  <Text style={commonStyles.btnText}>Cancelar</Text>
              </TouchableOpacity>
              <TouchableOpacity style={{...commonStyles.confirmBtn, ...commonStyles.button}} onPress={save} >
                  <Text style={commonStyles.btnText}>Postar</Text>
              </TouchableOpacity>
          </View>
      </View>
    );
}