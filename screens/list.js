import {
    FlatList,
    Image,
    Text,
    TouchableOpacity,
    View,
    Modal,
    StyleSheet,
    Pressable,
} from "react-native";
import { useState } from "react";
// Dummmy Data (Array of Object)
const datas = [
    {
    id: 1,
    title: "Dorong Pengembangan UMKM, IT Telkom Surabaya Gandeng UD Rozi dalam Pembuatan Website",
    image:"https://ittelkom-sby.ac.id/wp-content/uploads/2022/10/Salinan-IMG_0823-768x512.jpg",
    },
    {
    id: 2,
    title: "Mahasiswa ITTelkom Surabaya Menang Kompetisi di New Delhi",
    image:"https://ittelkom-sby.ac.id/wp-content/uploads/2022/10/asdfghjk-768x492.jpg",
    },
    {
    id: 3,
    title: "Benarkah Generasi Baru Generasi Strawberi? Ayo Belajar Growth Mindset dari Kampus ITTelkom Surabaya",
    image: "https://ittelkom-sby.ac.id/wp-content/uploads/2022/10/asdfghkl-768x472.jpg",
    },
    {
    id: 4,
    title: "4 Industri Tahan Resesi! Pastikan Kemampuanmu Termasuk Di Dalamnya",
    image: "https://ittelkom-sby.ac.id/wp-content/uploads/2022/10/mbacay-768x512.jpg",
    },
    {
    id: 5,
    title:
    "Selamat Datang Mahasiswa Baru, PKKMB ITTelkom Surabaya Berlangsung Secara Luring",
    image: "https://ittelkom-sby.ac.id/wp-content/uploads/2022/09/DSC_1931-768x512.jpg",
    },
    {
    id: 6,
    title:
    "Dorong Pengembangan UMKM, IT Telkom Surabaya Gandeng UD Rozi dalam Pembuatan Website",
    image: "https://ittelkom-sby.ac.id/wp-content/uploads/2022/10/Salinan-IMG_0823-768x512.jpg",
    },
    {
    id: 7,
    title: "Mahasiswa ITTelkom Surabaya Menang Kompetisi di New Delhi",
    image: "https://ittelkom-sby.ac.id/wp-content/uploads/2022/10/asdfghjk-768x492.jpg",
    },
    {
    id: 8,
    title:
    "Benarkah Generasi Baru Generasi Strawberi? Ayo Belajar Growth Mindset dari Kampus ITTelkom Surabaya",
    image: "https://ittelkom-sby.ac.id/wp-content/uploads/2022/10/asdfghkl-768x472.jpg",
    },
    {
    id: 9,
    title: "4 Industri Tahan Resesi! Pastikan Kemampuanmu Termasuk Di Dalamnya",
    image: "https://ittelkom-sby.ac.id/wp-content/uploads/2022/10/mbacay-768x512.jpg",
    },
    {
    id: 10,
    title:
    "Selamat Datang Mahasiswa Baru, PKKMB ITTelkom Surabaya Berlangsung Secara Luring",
    image: "https://ittelkom-sby.ac.id/wp-content/uploads/2022/09/DSC_1931-768x512.jpg",
    },
];
// Functional Component
const List = () => {
    const [ModalVisible, setModalVisible] = useState(false);
    const [itemSelect, setItemSelect] = useState('variabel kosong');

    console.log(itemSelect);
    // Arrow Function with destructured argument
    const renderItem = ({ item }) => {
        return (
            <TouchableOpacity style={styles.view} onPress={() => {setModalVisible(true); setItemSelect(item)}}>
                <View>
                    <Modal
                        animationType="none"
                        transparent={true}
                        visible={ModalVisible}
                        onRequestClose={() =>{
                        setModalVisible(!ModalVisible);
                        }}>
                            <View style={styles.modalView}>
                                <Image style={styles.modalImage} source={{ uri: itemSelect.image }} />
                                <Text>{itemSelect ? itemSelect.title : 'test'}</Text>
                                <View style={{  alignItems: 'center'}}>
                            <Pressable
                            style={[ styles.button, styles.buttonClose ]}
                            onPress={() => setModalVisible(!ModalVisible)}>
                            <Text style={{ padding: 5 }}>Tutup</Text>
                            </Pressable>
                                </View>
                            </View>
                    </Modal>
                    <Image source={{ uri: item.image }} style={styles.image} />
                    <Text style={styles.text}>{item.title}</Text>
                </View>
            </TouchableOpacity>
        );
    };
    return (
        <FlatList
        data={datas}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        />
    );
};
// Styles
const styles = StyleSheet.create({
    view: {
    padding: 15,
    borderBottomColor: "#dddddd",
    borderBottomWidth: 1,
    },
    image: {
    height: 200,
    width: null,
    },
    text: {
    fontSize: 18,
    paddingTop: 10,
    },
    modalView: {
        justifyContent: 'center',
        alignItems: 'center',
        margin: 20,
        marginTop:160,
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 30,
        alignItems: 'center',
        shadowColor: '#0d0d0d',
        shadowOffset: {
          width: 0,
          height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 4,
      elevation: 5,
    },
    button: {
      borderRadius: 10,
      padding: 10,
      marginTop:5,
      elevation: 2,
    },
    buttonOpen: {
      backgroundColor: '#F194FF',
    },
    buttonClose: {
      backgroundColor: '#fa0a0a',
    },
    modalImage: {
        height: 250,
        width: '80%',
        borderRadius: 8,
        marginBottom: 20,
    },
});
export default List;
    