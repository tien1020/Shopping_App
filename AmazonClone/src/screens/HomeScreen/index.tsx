import React, {useEffect, useState} from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import ProductItem from '../../components/ProductItem';
import { DataStore } from 'aws-amplify';
import { Product } from '../../models';
// import products from '../../data/products';

const HomeScreen = ({searchValue}:{searchValue:string}) => {
    const [products, setProducts] = useState<Product[]>([]);

    useEffect(() =>{
        DataStore.query(Product).then(setProducts);
    },[])
    return (
        <View style={styles.page}>
            {/* Render Product Component */}
           
            <FlatList
                data={products}
                renderItem = {({item}) => <ProductItem item={item} />}
                showsVerticalScrollIndicator={false}
                />
        </View>
    );
};

const styles = StyleSheet.create({
    page: {
        padding: 10,
        flex:1,
    },

});
export default HomeScreen