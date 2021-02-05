import React, { useState } from "react";
import { Text, View, TextInput, Button, Platform } from "react-native";
import { useForm, Controller } from "react-hook-form";
import * as ImagePicker from "expo-image-picker";
import api from "../../service/index";

export default function AlterarAluno() {
  const { control, handleSubmit, errors } = useForm();
  const [image, setImage] = useState(null);
  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    setImage(result.uri);

    if (!result.cancelled) {
      console.log(result.cancelled);
    }
  };
  const { providerId } = route.params;

  const onSubmit = (data) => {
    const FormAluno = {
      ...data,
      img: image,
    };
    api.post(`${providerId}`, FormAluno);
  };

  return (
    <View>
      <Button title="Pick an image from camera roll" onPress={pickImage} />

      <Controller
        control={control}
        render={({ onChange, onBlur, value }) => (
          <TextInput
            style={{}}
            onBlur={onBlur}
            onChangeText={(value) => onChange(value)}
            value={value}
          />
        )}
        name="firstName"
        rules={{ required: true }}
        defaultValue=""
      />
      {errors.firstName && <Text>This is required.</Text>}

      <Controller
        control={control}
        render={({ onChange, onBlur, value }) => (
          <TextInput
            style={{}}
            onBlur={onBlur}
            onChangeText={(value) => onChange(value)}
            value={value}
          />
        )}
        name="lastName"
        defaultValue=""
      />

      <Button title="Submit" onPress={handleSubmit(onSubmit)} />
    </View>
  );
}
