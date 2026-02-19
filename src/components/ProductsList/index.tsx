import Product from '../Product'

import { Container, List } from './styles'

export type Props = {
  title: string
  background: 'gray' | 'black'
}

const ProductsList = ({ title, background }: Props) => (
  <Container background={background}>
    <div className="container">
      <h2>{title}</h2>
      <List>
        <Product
          category="Ação"
          description="GTA V é um jogo de ação e aventura em mundo aberto desenvolvido pela Rockstar North."
          image="https://placehold.co/222x250"
          infos={['-10%', 'R$ 150']}
          system="Windows"
          title="GTA V"
        />
        <Product
          category="RPG"
          description="The Witcher 3 é um jogo de RPG de ação em mundo aberto desenvolvido pela CD Projekt RED."
          image="https://placehold.co/222x250"
          infos={['-50%', 'R$ 100']}
          system="Windows"
          title="The Witcher 3"
        />
        <Product
          category="Estratégia"
          description="Total War é uma série de jogos de estratégia em tempo real."
          image="https://placehold.co/222x250"
          infos={['-30%', 'R$ 120']}
          system="Windows"
          title="Total War"
        />
        <Product
          category="Simulação"
          description="Cities: Skylines é um jogo de simulação de cidade desenvolvido pela Colossal Order."
          image="https://placehold.co/222x250"
          infos={['-20%', 'R$ 80']}
          system="Windows"
          title="Cities: Skylines"
        />
      </List>
    </div>
  </Container>
)

export default ProductsList
