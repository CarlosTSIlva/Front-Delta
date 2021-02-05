import React, { useEffect, useState, useCallback } from "react";

import { Text, View, Image, FlatList, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Container } from "./styles";

import api from "../../service/index";

export default function ListAlunos() {
  const { navigate } = useNavigation();
  const [alunos, setAlunos] = useState([]);
  const deleteUser = useCallback((aluno) => {
    api.delete(`/${aluno}`).then((response) => setAlunos(response.data));
  }, []);

  useEffect(() => {
    api.get("/").then((response) => console.log(response.data));
  }, []);

  const NavigateToAlunos = useCallback((providerId) => {
    navigate("Home", { providerId });
  }, []);

  return (
    <Container>
      <FlatList
        data={alunos}
        keyEstractor={(item) => item.id}
        renderItem={({ item: aluno }) => (
          <View
            style={{
              flexDirection: "row",
              borderWidth: 1,
              padding: 5,
              borderRadius: 10,
              marginTop: 20,
            }}
          >
            <TouchableOpacity onPress={() => NavigateToAlunos(aluno._id)}>
              <Image
                source={{
                  uri: aluno.image,
                }}
                style={{
                  width: 40,
                  height: 40,
                  borderRadius: 20,
                  marginRight: 15,
                }}
              />
              <View>
                <Text>Endereço: {aluno.name}</Text>
                <Text>Nome: {aluno.endereco} </Text>
              </View>
              <TouchableOpacity onPress={() => deleteUser(aluno._id)}>
                <Image
                  source={require("../../../assets/lixeiras.png")}
                  style={{ width: 40, height: 40, left: 3 }}
                />
              </TouchableOpacity>
            </TouchableOpacity>
          </View>
        )}
      />
    </Container>
  );
}
