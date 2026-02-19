import Banner from '../../components/Banner'
import ProductsList from '../../components/ProductsList'
import Game from '../../models/Game'

import resident from '../../assets/images/resident.png'
import diablo from '../../assets/images/diablo.png'
import zelda from '../../assets/images/zelda.png'
import starWars from '../../assets/images/star_wars.png'

const promocoes: Game[] = [
  {
    id: 1,
    title: 'Resident Evil 4',
    category: 'Ação',
    system: 'PS4',
    description:
      'O clássico jogo de terror de sobrevivência retorna com gráficos e jogabilidade aprimorados. Enfrente hordas de inimigos e descubra os segredos sombrios de uma vila infestada.',
    image: resident,
    infos: ['10%', 'R$ 179,99']
  },
  {
    id: 2,
    title: 'Resident Evil 4',
    category: 'Ação',
    system: 'PS4',
    description:
      'O clássico jogo de terror de sobrevivência retorna com gráficos e jogabilidade aprimorados. Enfrente hordas de inimigos e descubra os segredos sombrios de uma vila infestada.',
    image: resident,
    infos: ['10%', 'R$ 179,99']
  },
  {
    id: 3,
    title: 'Resident Evil 4',
    category: 'Ação',
    system: 'PS4',
    description:
      'O clássico jogo de terror de sobrevivência retorna com gráficos e jogabilidade aprimorados. Enfrente hordas de inimigos e descubra os segredos sombrios de uma vila infestada.',
    image: resident,
    infos: ['10%', 'R$ 179,99']
  },
  {
    id: 4,
    title: 'Resident Evil 4',
    category: 'Ação',
    system: 'PS4',
    description:
      'O clássico jogo de terror de sobrevivência retorna com gráficos e jogabilidade aprimorados. Enfrente hordas de inimigos e descubra os segredos sombrios de uma vila infestada.',
    image: resident,
    infos: ['10%', 'R$ 179,99']
  }
]

const emBreve: Game[] = [
  {
    id: 5,
    title: 'Diablo III',
    category: 'RPG',
    system: 'PC',
    description:
      'Mergulhe em um mundo de escuridão e caos enquanto enfrenta hordas de demônios e monstros. Personalize seu personagem, colete itens poderosos e desafie chefes épicos.',
    image: diablo,
    infos: ['20%', 'R$ 79,99']
  },
  {
    id: 6,
    title: 'The Legend of Zelda: Breath of the Wild',
    category: 'Aventura',
    system: 'Nintendo Switch',
    description:
      'Explore um vasto mundo aberto cheio de segredos, quebra-cabeças e inimigos desafiadores. Use suas habilidades para sobreviver e salvar o reino de Hyrule.',
    image: zelda,
    infos: ['15%', 'R$ 249,99']
  },
  {
    id: 7,
    title: 'Star Wars Jedi: Fallen Order',
    category: 'Ação/Aventura',
    system: 'PS4',
    description:
      'Assuma o papel de um jovem Padawan em fuga após a Ordem 66. Explore planetas icônicos, enfrente inimigos perigosos e descubra os segredos da Força.',
    image: starWars,
    infos: ['25%', 'R$ 149,99']
  },
  {
    id: 8,
    title: 'Resident Evil 4',
    category: 'Ação',
    system: 'PS4',
    description:
      'O clássico jogo de terror de sobrevivência retorna com gráficos e jogabilidade aprimorados. Enfrente hordas de inimigos e descubra os segredos sombrios de uma vila infestada.',
    image: resident,
    infos: ['10%', 'R$ 179,99']
  }
]

const Home = () => (
  <>
    <Banner />
    <ProductsList games={promocoes} title="Promoções" background="gray" />
    <ProductsList games={emBreve} title="Em breve" background="black" />
  </>
)

export default Home
