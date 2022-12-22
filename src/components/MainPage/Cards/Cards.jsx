import React from 'react';
import Row from 'react-bootstrap/Row';
import Goods from './Goods/Goods';
import c from './Cards.module.css';

function Cards() {

let goodsData = [
  {id: 1, goodsUrl: 'https://cdn.pixabay.com/photo/2016/08/16/10/18/dragon-1597583_1280.png', name: 'Зелений чай', text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia aspernatur incidunt sapiente aperiam eaque voluptates eos saepe obcaecati quae consequatur enim perspiciatis ab esse, cupiditate hic assumenda dolores doloremque explicabo."},
  {id: 2, goodsUrl: 'https://cdn.pixabay.com/photo/2017/01/31/23/42/animal-2028258_1280.png', name: 'Чорний чай', text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia aspernatur incidunt sapiente aperiam eaque voluptates eos saepe obcaecati quae consequatur enim perspiciatis ab esse, cupiditate hic assumenda dolores doloremque explicabo."},
  {id: 3, goodsUrl: 'https://cdn.pixabay.com/photo/2016/08/16/10/18/dragon-1597583_1280.png', name: 'Одноразовий чай', text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia aspernatur incidunt sapiente aperiam eaque voluptates eos saepe obcaecati quae consequatur enim perspiciatis ab esse, cupiditate hic assumenda dolores doloremque explicabo.!"},
  {id: 4, goodsUrl: 'https://cdn.pixabay.com/photo/2017/01/31/23/42/animal-2028258_1280.png', name: 'Фіто-чай', text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia aspernatur incidunt sapiente aperiam eaque voluptates eos saepe obcaecati quae consequatur enim perspiciatis ab esse, cupiditate hic assumenda dolores doloremque explicabo.!"},
  {id: 5, goodsUrl: 'https://cdn.pixabay.com/photo/2016/08/16/10/18/dragon-1597583_1280.png', name: 'Листя полуниці', text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia aspernatur incidunt sapiente aperiam eaque voluptates eos saepe obcaecati quae consequatur enim perspiciatis ab esse, cupiditate hic assumenda dolores doloremque explicabo."},
  {id: 6, goodsUrl: 'https://cdn.pixabay.com/photo/2017/01/31/23/42/animal-2028258_1280.png', name: 'Інші продукти ', text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia aspernatur incidunt sapiente aperiam eaque voluptates eos saepe obcaecati quae consequatur enim perspiciatis ab esse, cupiditate hic assumenda dolores doloremque explicabo."},
  ]

  let goodsElements = goodsData.map(g => (
    <Goods goodsUrl={g.goodsUrl} name={g.name} text={g.text}/>
  ))

  return (
    <Row xs={1} md={3} className="g-4">
      {goodsElements}
    </Row>
  );
}

// function Goods(props) {
//   return (  
//     <Card>
//       <Card.Img variant="top" src="holder.js/100px160" />
//       <Card.Body>
//         <Card.Title>Card title</Card.Title>
//         <Card.Text>
//            This is a longer card with supporting text below as a natural
//             lead-in to additional content. This content is a little bit
//             longer.
//         </Card.Text>
//       </Card.Body>
//     </Card>     
//   );
// }

export default Cards;