import { useEffect, useState } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import axios from 'axios'

const ProductDetailScreen = ({ route }) => {
  const { productId } = route.params
  const [product, setProduct] = useState(null)

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(`https://proweb.leoproti.com.br/produtos/${productId}`)
        setProduct(response.data)
      } catch (error) {
        console.error('Erro ao buscar produto:', error)
      }
    }

    fetchProduct()
  }, [productId])

  if (!product) {
    return (
      <View style={styles.container}>
        <Text>Carregando...</Text>
      </View>
    )
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{product.nome}</Text>
      <Text>Preço: R$ {product.preco}</Text>
      <Text>Descrição: {product.descricao}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  title: {
    fontSize: 24,
    marginBottom: 16,
  },
})

export default ProductDetailScreen