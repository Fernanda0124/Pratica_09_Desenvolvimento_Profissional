import { useEffect, useState } from 'react'
import { Container, Row, Col, Card, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import axios from 'axios'

const Home = () => {
  const [products, setProducts] = useState([])

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('https://proweb.leoproti.com.br/produtos')
        setProducts(response.data)
      } catch (error) {
        console.error('Erro ao buscar produtos:', error)
      }
    }

    fetchProducts()
  }, [])

  return (
    <Container>
      <h1>Produtos</h1>
      <Row>
        {products.map(product => (
          <Col key={product.id} sm={6} md={4} lg={3}>
            <Card style={{ marginBottom: '1rem' }}>
              <Card.Body>
                <Card.Title>{product.nome}</Card.Title>
                <Card.Text>R$ {product.preco}</Card.Text>
                <Link to={`/product/${product.id}`}>
                  <Button variant="primary">Ver Detalhes</Button>
                </Link>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  )
}

export default Home