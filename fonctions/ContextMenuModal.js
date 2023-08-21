import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, TextInput } from 'react-native';
import Modal from 'react-native-modal';
import BouncyCheckbox from "react-native-bouncy-checkbox";

const ContextMenuModal = ({ isVisible, handleMenuSelection, handleGenerateOptimalRoute, closeModal }) => {
    const [distance, setDistance] = useState('100');
    const [checkboxState, setCheckbox] = useState(false)

    return (
        <Modal isVisible={isVisible} animationIn="slideInUp" animationOut="slideOutDown">
            <View style={styles.modalContainer}>
                <Text style={styles.modalTitle}>Quelle action souhaitez-vous réaliser ?</Text>

                <TouchableOpacity
                    style={styles.menuOption}
                    onPress={() => handleMenuSelection('takeCoordinates')} >
                    <Text style={styles.menuOptionText}>Prendre les coordonnées</Text>
                </TouchableOpacity>

                <Text style={styles.modalTitle}>Entrez la distance du RoadTrip souhaitée (en kilomètres):</Text>
                <TextInput
                    style={{ textAlign: 'center', marginBottom: 10, borderRadius: 10, borderWidth: 1, borderColor: 'gray', padding: 5 }}
                    keyboardType="numeric"
                    value={distance}
                    onChangeText={setDistance}
                />

                <BouncyCheckbox  
                    style={{justifyContent:"center", paddingBottom:7}}
                    size={25}
                    fillColor="pink"
                    text="boucle fermée"
                    textStyle= {{textDecorationLine: "none", color:'pink', fontWeight:'bold'}}
                    innerIconStyle={{ borderWidth: 2 }}
                    isChecked={checkboxState}
                    onPress={() => setCheckbox(!checkboxState)}
                />

                <TouchableOpacity
                    style={styles.menuOption}
                    onPress={() => handleGenerateOptimalRoute(distance, checkboxState)}
                >
                    <Text style={styles.menuOptionText}>Générer des tracés possibles</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={[styles.menuOption, { backgroundColor: 'red' }]}
                    onPress={closeModal}
                >
                    <Text style={styles.menuOptionText}>Annuler</Text>
                </TouchableOpacity>
            </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
    modalContainer: {
        backgroundColor: 'white',
        borderRadius: 10,
        padding: 16,
    },
    modalTitle: {
        textAlign: 'center',
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 16,
    },
    menuOption: {
        marginBottom: 10,
        backgroundColor: 'blue',
        borderRadius: 10,
        paddingVertical: 10,
    },
    menuOptionText: {
        textAlign: 'center',
        fontSize: 16,
        color: 'white',
    },
    butonOption: {
        borderRadius: 10,
    },

});

export default ContextMenuModal;
