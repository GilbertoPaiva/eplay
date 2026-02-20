import Section from '../Section'

import { Items, Item } from './styles'

import zelda from '../../assets/images/banner-homem-aranha.png'

const Gallery = () => (
  <Section title="Galeria" background="black">
    <Items>
      <Item>
        <img src={zelda} alt="Imagem do jogo Zelda" />
      </Item>
      <Item>
        <img src={zelda} alt="Imagem do jogo Zelda" />
      </Item>
      <Item>
        <img src={zelda} alt="Imagem do jogo Zelda" />
      </Item>
      <Item>
        <img src={zelda} alt="Imagem do jogo Zelda" />
      </Item>
    </Items>
  </Section>
)

export default Gallery
