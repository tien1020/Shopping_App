import React, {useEffect, useState} from 'react';
import { Text, ScrollView, ActivityIndicator, FlatList } from 'react-native';
import{Picker} from '@react-native-picker/picker';
import { useRoute, useNavigation } from '@react-navigation/native';
import { DataStore, Auth } from 'aws-amplify';
import { Product, CartProduct } from '../../models';
import styles from './styles';
import QuantitySelector from '../../components/QuantitySelector';

import Button from '../../components/Button';
import ImageCarousel from '../../components/ImageCarousel';
import OfferExtraDetailBoxItem from '../../components/OfferExtraDetailBoxItem';
import OfferExtraDetailTableItem from '../../components/OfferExtraDetailsTableItem';

const ProductScreen = () => {
    const [product, setProduct] = useState<Product | undefined>(undefined);
    const [selectedOption, setSelectedOption] = useState<string | undefined>(undefined);
    const [quantity, setQuantity] = useState(1);
    // const [extraDetails, setExtraDetails] = useState<extraDetails | undefined>(undefined);

    const navigation = useNavigation();
    const route = useRoute();

    useEffect(()=> {
        if (!route.params?.id){
            return;
        }
        DataStore.query(Product, route.params.id).then(setProduct)
    },[route.params?.id]);

    useEffect(()=>{
        if(product?.options){
            setSelectedOption(product.options[0]);
        }
    }, [product])

    // useEffect(()=>{
    //     if(extraDetails?.sortIndex){
    //         setExtraDetails(extraDetails.sortIndex[0]);
    //     }
    // }, [product])

    const onAddToCart = async () => {
        const userData = await Auth.currentAuthenticatedUser();
        if (!product || !userData) {
            return;
        }
        const newCartProduct = new CartProduct({
            userSub: userData.attributes.sub,
            quantity,
            option: selectedOption || null,
            productID: product.id,
        })

       await DataStore.save(newCartProduct)
       navigation.navigate('shoppingCart');
    }

    if (!product){
        return <ActivityIndicator />
    }
    return (
        <ScrollView style={styles.root}>
            <Text style={styles.title}>{product.title}</Text>

            {/* Image carousel */}
            <ImageCarousel images={product.images}/>
            {/* Option selector */}
            <Picker
                selectedValue={selectedOption}
                onValueChange={(itemValue) => 
                setSelectedOption(itemValue)}>
                {product.options.map(option => (
                <Picker.Item label={option} value={option}/>
                ))}
                
            </Picker>

            {/* Price */}
            <Text style={styles.price}>from ${product.price.toFixed(2)}
                    {product.oldPrice && <Text style={styles.oldPrice}> ${product.oldPrice.toFixed(2)}</Text>}
                    </Text>
            {/* Description */}
            <Text style={styles.description}>{product.description}</Text> 
            
            
            {/* Quantity selector */}
                <QuantitySelector quantity={quantity} setQuantity={setQuantity}/>

            {/* Button */}
            {/* <FlatList 
                data={extraDetails}
                renderItem = {({item}) => <OfferExtraDetailBoxItem item={item} />}
            /> */}
            

            <OfferExtraDetailBoxItem />
            <OfferExtraDetailTableItem />

             <Button 
             text={'Add To Cart'} 
             onPress={onAddToCart}
             
                containerStyles={{backgroundColor: '#e3c905'}}
             />
             <Button text={'Buy Now'} onPress={()=> {console.warn('Buy Now')}} />
             
        </ScrollView>
   
    );
};
export default ProductScreen