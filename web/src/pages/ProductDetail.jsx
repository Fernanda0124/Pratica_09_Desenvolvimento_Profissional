import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Container, Card, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import axios from 'axios'

const ProductDetail = () => {
  const { id } = useParams()
  const [product, setProduct] = useState(null)

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(`https://proweb.leoproti.com.br/produtos/${id}`)
        setProduct(response.data)
      } catch (error) {
        console.error('Erro ao buscar produto:', error)
      }
    }

    fetchProduct()
  }, [id])

  if (!product) {
    return <Container>Carregando...</Container>
  }

  return (
    <Container>
      <Card>
        <Card.Body>
          <Card.Title>{product.nome}</Card.Title>
          <Card.Text>Preço: R$ {product.preco}</Card.Text>
          <Card.Text>Descrição: {product.descricao}</Card.Text>
          <Link to="/">
            <Button variant="secondary">Voltar</Button>
          </Link>
        </Card.Body>
      </Card>
    </Container>
  )
}

export default ProductDetail