import Tag from '../Tag'

import { Card, Descricao, Titulo } from './styles'

const Product = () => (
  <Card>
    <img src="https://placehold.co/222x250" />
    <Titulo>Nome do jogo</Titulo>
    <Tag>Categoria</Tag>
    <Tag>Windows</Tag>
    <Descricao>
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequatur,
      ipsum molestias. Natus necessitatibus accusantium maiores veritatis
      blanditiis a quisquam soluta, similique mollitia culpa ut dolorem dolores
      quasi incidunt aliquam dignissimos?
    </Descricao>
  </Card>
)

export default Product
