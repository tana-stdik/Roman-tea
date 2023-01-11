let state = {
  goodsPage:{
    goodsItem: [
      {id: 1, goodsUrl: 'images/1_Green_Tea.png', path:'/greenTea', name: 'Зелений чай', text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia aspernatur incidunt sapiente aperiam eaque voluptates eos saepe obcaecati quae consequatur enim perspiciatis ab esse, cupiditate hic assumenda dolores doloremque explicabo."},
      {id: 2, goodsUrl: 'images/2_Black_Tea.png', path:'/blackTea',
         name: 'Чорний чай', text: `"Чорний ферментований іван-чай (кипрей) в гранулах та листі, 
         не впливає на тиск. Великий вміст вітаміну С і мікроелементів, очищує кров, знижує жар, 
         має протизапальну та обволікуючу дію, що допомагає при гастриті. Нормалізує функцію ЖКТ. 
         Знижує інтоксикацію, є антиоксидантом та профілактичним засобом від онко-хвороб та хвороб 
         аденоми в чоловіків. Гарний замінник індійського, цейлонського та китайського чаю."`},
      {id: 3, goodsUrl: 'images/3_Disposable_Tea.png', path:'/disposableTea', name: 'Одноразовий чай', text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia aspernatur incidunt sapiente aperiam eaque voluptates eos saepe obcaecati quae consequatur enim perspiciatis ab esse, cupiditate hic assumenda dolores doloremque explicabo.!"},
      {id: 4, goodsUrl: 'images/4_Phyto_Tea.png', path:'/phytoTea', name: 'Фіто-чай', text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia aspernatur incidunt sapiente aperiam eaque voluptates eos saepe obcaecati quae consequatur enim perspiciatis ab esse, cupiditate hic assumenda dolores doloremque explicabo.!"},
      {id: 5, goodsUrl: 'images/5_Strawberry_Leaves.png', path:'/strawberryLeaves', name: 'Листя полуниці', text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia aspernatur incidunt sapiente aperiam eaque voluptates eos saepe obcaecati quae consequatur enim perspiciatis ab esse, cupiditate hic assumenda dolores doloremque explicabo."},
      {id: 6, goodsUrl: 'images/6_Other_Goods.png', path:'/otherGoods', name: 'Інші продукти ', text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia aspernatur incidunt sapiente aperiam eaque voluptates eos saepe obcaecati quae consequatur enim perspiciatis ab esse, cupiditate hic assumenda dolores doloremque explicabo."},
      ],
  },
  goodsPageGreenTea:{
    goodsItem: [
      {id: 1, goodsUrl: 'images/Green_Tea.png', price: 46, name: 'Зелений чай 1', text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia aspernatur incidunt sapiente aperiam eaque voluptates eos saepe obcaecati quae consequatur enim perspiciatis ab esse, cupiditate hic assumenda dolores doloremque explicabo."},
      {id: 2, goodsUrl: 'images/Green_Tea.png', price: 64, name: 'Зелений чай 2', text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia aspernatur incidunt sapiente aperiam eaque voluptates eos saepe obcaecati quae consequatur enim perspiciatis ab esse, cupiditate hic assumenda dolores doloremque explicabo.!"},
      {id: 3, goodsUrl: 'images/Green_Tea.png', price: 47, name: 'Зелений чай 3', text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia aspernatur incidunt sapiente aperiam eaque voluptates eos saepe obcaecati quae consequatur enim perspiciatis ab esse, cupiditate hic assumenda dolores doloremque explicabo.!"},
      {id: 4, goodsUrl: 'images/Green_Tea.png', price: 46, name: 'Зелений чай 4', text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia aspernatur incidunt sapiente aperiam eaque voluptates eos saepe obcaecati quae consequatur enim perspiciatis ab esse, cupiditate hic assumenda dolores doloremque explicabo.!"},
      {id: 5, goodsUrl: 'images/Green_Tea.png', price: 73, name: 'Зелений чай 5', text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia aspernatur incidunt sapiente aperiam eaque voluptates eos saepe obcaecati quae consequatur enim perspiciatis ab esse, cupiditate hic assumenda dolores doloremque explicabo."},
      {id: 6, goodsUrl: 'images/Green_Tea.png', price: 85, name: 'Зелений чай 6', text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia aspernatur incidunt sapiente aperiam eaque voluptates eos saepe obcaecati quae consequatur enim perspiciatis ab esse, cupiditate hic assumenda dolores doloremque explicabo."},
      ],
  },
  goodsPageBlackTea:{
    goodsItem: [
      {id: 1, goodsUrl: 'images/Black_Tea.png', price: 67, name: 'Чорний чай 1', text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia aspernatur incidunt sapiente aperiam eaque voluptates eos saepe obcaecati quae consequatur enim perspiciatis ab esse, cupiditate hic assumenda dolores doloremque explicabo."},
      {id: 2, goodsUrl: 'images/Black_Tea.png', price: 75, name: 'Чорний чай 2', text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia aspernatur incidunt sapiente aperiam eaque voluptates eos saepe obcaecati quae consequatur enim perspiciatis ab esse, cupiditate hic assumenda dolores doloremque explicabo.!"},
      {id: 3, goodsUrl: 'images/Black_Tea.png', price: 45, name: 'Чорний чай 3', text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia aspernatur incidunt sapiente aperiam eaque voluptates eos saepe obcaecati quae consequatur enim perspiciatis ab esse, cupiditate hic assumenda dolores doloremque explicabo.!"},
      {id: 4, goodsUrl: 'images/Black_Tea.png', price: 76, name: 'Чорний чай 4', text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia aspernatur incidunt sapiente aperiam eaque voluptates eos saepe obcaecati quae consequatur enim perspiciatis ab esse, cupiditate hic assumenda dolores doloremque explicabo.!"},
      {id: 5, goodsUrl: 'images/Black_Tea.png', price: 55, name: 'Чорний чай 5', text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia aspernatur incidunt sapiente aperiam eaque voluptates eos saepe obcaecati quae consequatur enim perspiciatis ab esse, cupiditate hic assumenda dolores doloremque explicabo."},
      {id: 6, goodsUrl: 'images/Black_Tea.png', price: 68, name: 'Чорний чай 6', text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia aspernatur incidunt sapiente aperiam eaque voluptates eos saepe obcaecati quae consequatur enim perspiciatis ab esse, cupiditate hic assumenda dolores doloremque explicabo."},
      ],
  },
  goodsPageDisposableTea:{
    goodsItem: [
      {id: 1, goodsUrl: 'images/Disposable_Tea.png', price: 56, name: 'Одноразовий чай 1', text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia aspernatur incidunt sapiente aperiam eaque voluptates eos saepe obcaecati quae consequatur enim perspiciatis ab esse, cupiditate hic assumenda dolores doloremque explicabo."},
      {id: 2, goodsUrl: 'images/Disposable_Tea.png', price: 75, name: 'Одноразовий чай 2', text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia aspernatur incidunt sapiente aperiam eaque voluptates eos saepe obcaecati quae consequatur enim perspiciatis ab esse, cupiditate hic assumenda dolores doloremque explicabo.!"},
      {id: 3, goodsUrl: 'images/Disposable_Tea.png', price: 46, name: 'Одноразовий чай 3', text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia aspernatur incidunt sapiente aperiam eaque voluptates eos saepe obcaecati quae consequatur enim perspiciatis ab esse, cupiditate hic assumenda dolores doloremque explicabo.!"},
      {id: 4, goodsUrl: 'images/Disposable_Tea.png', price: 86, name: 'Одноразовий чай 4', text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia aspernatur incidunt sapiente aperiam eaque voluptates eos saepe obcaecati quae consequatur enim perspiciatis ab esse, cupiditate hic assumenda dolores doloremque explicabo.!"},
      {id: 5, goodsUrl: 'images/Disposable_Tea.png', price: 57, name: 'Одноразовий чай 5', text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia aspernatur incidunt sapiente aperiam eaque voluptates eos saepe obcaecati quae consequatur enim perspiciatis ab esse, cupiditate hic assumenda dolores doloremque explicabo."},
      {id: 6, goodsUrl: 'images/Disposable_Tea.png', price: 46, name: 'Одноразовий чай 6', text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia aspernatur incidunt sapiente aperiam eaque voluptates eos saepe obcaecati quae consequatur enim perspiciatis ab esse, cupiditate hic assumenda dolores doloremque explicabo."},
      ],
  },
  goodsPagePhytoTea:{
    goodsItem: [
      {id: 1, goodsUrl: 'images/Phyto_Tea.png', price: 56, name: 'Фіто-чай 1', text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia aspernatur incidunt sapiente aperiam eaque voluptates eos saepe obcaecati quae consequatur enim perspiciatis ab esse, cupiditate hic assumenda dolores doloremque explicabo."},
      {id: 2, goodsUrl: 'images/Phyto_Tea.png', price: 75, name: 'Фіто-чай 2', text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia aspernatur incidunt sapiente aperiam eaque voluptates eos saepe obcaecati quae consequatur enim perspiciatis ab esse, cupiditate hic assumenda dolores doloremque explicabo.!"},
      {id: 3, goodsUrl: 'images/Phyto_Tea.png', price: 76, name: 'Фіто-чай 3', text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia aspernatur incidunt sapiente aperiam eaque voluptates eos saepe obcaecati quae consequatur enim perspiciatis ab esse, cupiditate hic assumenda dolores doloremque explicabo.!"},
      {id: 4, goodsUrl: 'images/Phyto_Tea.png', price: 89, name: 'Фіто-чай 4', text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia aspernatur incidunt sapiente aperiam eaque voluptates eos saepe obcaecati quae consequatur enim perspiciatis ab esse, cupiditate hic assumenda dolores doloremque explicabo.!"},
      {id: 5, goodsUrl: 'images/Phyto_Tea.png', price: 76, name: 'Фіто-чай 5', text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia aspernatur incidunt sapiente aperiam eaque voluptates eos saepe obcaecati quae consequatur enim perspiciatis ab esse, cupiditate hic assumenda dolores doloremque explicabo."},
      {id: 6, goodsUrl: 'images/Phyto_Tea.png', price: 58, name: 'Фіто-чай 6', text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia aspernatur incidunt sapiente aperiam eaque voluptates eos saepe obcaecati quae consequatur enim perspiciatis ab esse, cupiditate hic assumenda dolores doloremque explicabo."},
      ],
  },
  goodsPageStrawberryLeaves:{
    goodsItem: [
      {id: 1, goodsUrl: 'images/Strawberry_Leaves.png', price: 46, name: 'Листя полуниці 1', text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia aspernatur incidunt sapiente aperiam eaque voluptates eos saepe obcaecati quae consequatur enim perspiciatis ab esse, cupiditate hic assumenda dolores doloremque explicabo."},
      {id: 2, goodsUrl: 'images/Strawberry_Leaves.png', price: 65, name: 'Листя полуниці 2', text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia aspernatur incidunt sapiente aperiam eaque voluptates eos saepe obcaecati quae consequatur enim perspiciatis ab esse, cupiditate hic assumenda dolores doloremque explicabo.!"},
      {id: 3, goodsUrl: 'images/Strawberry_Leaves.png', price: 75, name: 'Листя полуниці 3', text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia aspernatur incidunt sapiente aperiam eaque voluptates eos saepe obcaecati quae consequatur enim perspiciatis ab esse, cupiditate hic assumenda dolores doloremque explicabo.!"},
      {id: 4, goodsUrl: 'images/Strawberry_Leaves.png', price: 45, name: 'Листя полуниці 4', text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia aspernatur incidunt sapiente aperiam eaque voluptates eos saepe obcaecati quae consequatur enim perspiciatis ab esse, cupiditate hic assumenda dolores doloremque explicabo.!"},
      {id: 5, goodsUrl: 'images/Strawberry_Leaves.png', price: 97, name: 'Листя полуниці 5', text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia aspernatur incidunt sapiente aperiam eaque voluptates eos saepe obcaecati quae consequatur enim perspiciatis ab esse, cupiditate hic assumenda dolores doloremque explicabo."},
      {id: 6, goodsUrl: 'images/Strawberry_Leaves.png', price: 64, name: 'Листя полуниці 6', text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia aspernatur incidunt sapiente aperiam eaque voluptates eos saepe obcaecati quae consequatur enim perspiciatis ab esse, cupiditate hic assumenda dolores doloremque explicabo."},
      ],
  },
  goodsPageOtherGoods:{
    goodsItem: [
      {id: 1, goodsUrl: 'images/Other_Goods.png', price: 375, name: 'Інші продукти 1', text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia aspernatur incidunt sapiente aperiam eaque voluptates eos saepe obcaecati quae consequatur enim perspiciatis ab esse, cupiditate hic assumenda dolores doloremque explicabo."},
      {id: 2, goodsUrl: 'images/Other_Goods.png', price: 463, name: 'Інші продукти 2', text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia aspernatur incidunt sapiente aperiam eaque voluptates eos saepe obcaecati quae consequatur enim perspiciatis ab esse, cupiditate hic assumenda dolores doloremque explicabo.!"},
      {id: 3, goodsUrl: 'images/Other_Goods.png', price: 265, name: 'Інші продукти 3', text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia aspernatur incidunt sapiente aperiam eaque voluptates eos saepe obcaecati quae consequatur enim perspiciatis ab esse, cupiditate hic assumenda dolores doloremque explicabo.!"},
      {id: 4, goodsUrl: 'images/Other_Goods.png', price: 548, name: 'Інші продукти 4', text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia aspernatur incidunt sapiente aperiam eaque voluptates eos saepe obcaecati quae consequatur enim perspiciatis ab esse, cupiditate hic assumenda dolores doloremque explicabo.!"},
      {id: 5, goodsUrl: 'images/Other_Goods.png', price: 673, name: 'Інші продукти 5', text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia aspernatur incidunt sapiente aperiam eaque voluptates eos saepe obcaecati quae consequatur enim perspiciatis ab esse, cupiditate hic assumenda dolores doloremque explicabo."},
      {id: 6, goodsUrl: 'images/Other_Goods.png', price: 479, name: 'Інші продукти 6', text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia aspernatur incidunt sapiente aperiam eaque voluptates eos saepe obcaecati quae consequatur enim perspiciatis ab esse, cupiditate hic assumenda dolores doloremque explicabo."},
      ],
  }
}

export default state;