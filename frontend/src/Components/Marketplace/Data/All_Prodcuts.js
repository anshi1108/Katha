let all_products = [
    // Handwoven Textiles
    {
      id: 1,
      name: "Handwoven Saree",
      category: "handwoven",
      image: "https://th.bing.com/th/id/OIP.IqzqVQMRi-5oAbRUBvujSAHaJT?w=202&h=254&c=7&r=0&o=5&dpr=1.5&pid=1.7",
      new_price: 120.00,
      old_price: 150.00,
    },
    {
      id: 2,
      name: "Handwoven Shawl",
      category: "handwoven",
      image: "https://th.bing.com/th/id/OIP.QVYf0uE0vX-t0J5c96ofxwHaLH?rs=1&pid=ImgDetMain",
      new_price: 80.00,
      old_price: 100.00,
    },

    {
        id: 3,
        name: "Handwoven Shawl",
        category: "handwoven",
        image: " https://img1.etsystatic.com/027/1/6535951/il_fullxfull.586982725_lyhg.jpg",
        new_price: 80.00,
        old_price: 100.00,
      },
    
    {id: 4,
      name: "Handwoven Saree",
      category: "handwoven",
      image: "https://th.bing.com/th/id/OIP.SLetbwi54N3Q7tOGwhEVCQHaKm?w=202&h=289&c=7&r=0&o=5&dpr=1.5&pid=1.7",
      new_price: 80.00,
      old_price: 100.00,
    },

    {id: 5,
        name: "Handwoven Saree",
        category: "handwoven",
        image: "https://th.bing.com/th/id/OIP.DM3MkCalI-iLKKPRtocXqAHaLG?w=202&h=302&c=7&r=0&o=5&dpr=1.5&pid=1.7",
        new_price: 80.00,
        old_price: 100.00,
      },

   
    // Handicrafts
    {
      id: 6,
      name: "Handcrafted Vase",
      category: "handicrafts",
      image: "https://i.etsystatic.com/24703533/r/il/98c2d6/2607713307/il_1588xN.2607713307_j786.jpg",
      new_price: 45.00,
      old_price: 60.00,
    },
    {
        id: 7,
        name: "Handcrafted Vase",
        category: "handicrafts",
        image: "https://madeheart.com/media/productphoto/512/64757607/1_042_DSC_0062.jpg",
        new_price: 45.00,
        old_price: 60.00,
      },
      {
        id: 8,
        name: "Handcrafted Vase",
        category: "handicrafts",
        image: "https://i.pinimg.com/originals/e3/02/d9/e302d9b508695d7fd057a52df71fa069.jpg",
        new_price: 45.00,
        old_price: 60.00,
      },
    {
      id: 9,
      name: "Handcrafted Pottery",
      category: "handicrafts",
      image: "https://i.pinimg.com/originals/07/ea/26/07ea26daff92060e354e33c139e9692c.jpg",
      new_price: 30.00,
      old_price: 40.00,
    },
    {
        id: 10,
        name: "Handcrafted Pottery",
        category: "handicrafts",
        image: "https://assets.bigcartel.com/product_images/228937541/IMG_1823.jpg?auto=format&fit=max&h=1200&w=1200",
        new_price: 45.00,
        old_price: 60.00,
      },
    // Jewelry
    {
      id: 11,
      name: "Gold Necklace",
      category: "jewellery",
      image: "https://th.bing.com/th/id/OIP.TasBeLq_TefRYtbFG_8CKQHaHa?rs=1&pid=ImgDetMain",
      new_price: 250.00,
      old_price: 300.00,
    },
    {
        id: 12,
        name: "Gold Necklace",
        category: "jewellery",
        image: "https://th.bing.com/th/id/OIP.TasBeLq_TefRYtbFG_8CKQHaHa?rs=1&pid=ImgDetMain",
        new_price: 250.00,
        old_price: 300.00,
      },
      {
        id: 13,
        name: "Gold Necklace",
        category: "jewellery",
        image: "https://th.bing.com/th/id/OIP.FxdbUxK_7rjyCt9t2-5IiQAAAA?rs=1&pid=ImgDetMain",
        new_price: 250.00,
        old_price: 300.00,
      },
    {
      id: 14,
      name: "Diamond Necklace",
      category: "jewellery",
      image: "https://a.1stdibscdn.com/archivesE/upload/j_25702/j_169029321662549797294/j_16902932_1662549798439_bg_processed.jpg?disable=upscale&auto=webp&quality=60&width=610",
      new_price: 400.00,
      old_price: 500.00,
    },
    {
        id: 15,
        name: "Diamond Necklace",
        category: "jewellery",
        image: "https://jahan.ch/wp-content/uploads/2020/07/Emerald-Necklace-3024920-PES-i-b-Cropped1.jpg",
        new_price: 400.00,
        old_price: 500.00,
      },
    // Paintings
    {
      id: 16,
      name: "Abstract Painting",
      category: "paintings",
      image: "https://indianartideas.in/photo/201611071211380662007001478500898.JPG",
      new_price: 200.00,
      old_price: 250.00,
    },
    {
      id: 17,
      name: "Landscape Art",
      category: "paintings",
      image: "https://th.bing.com/th/id/OIP.ARSHPunZe5JGyAlFRA1IGQHaFj?rs=1&pid=ImgDetMain",
      new_price: 150.00,
      old_price: 200.00,
    },
    {
        id: 18,
        name: "Abstract Painting",
        category: "paintings",
        image: "https://th.bing.com/th/id/R.52333c8e4a264d62978659cbfeac7100?rik=L119dO9D6IVY1g&riu=http%3a%2f%2fwww.indiaart.com%2fPaintings%2f17%2fLarge%2f680.jpg&ehk=pExPIDWFH3LdG5CukWzBY7JhIfZtFlqn0dz6tErW0k8%3d&risl=&pid=ImgRaw&r=0",
        new_price: 200.00,
        old_price: 250.00,
      },
      {
        id: 19,
        name: "Abstract Painting",
        category: "paintings",
        image: "https://i.etsystatic.com/31562114/c/2421/2421/289/0/il/ea14b5/6097601799/il_600x600.6097601799_4aez.jpg",
        new_price: 200.00,
        old_price: 250.00,
      },
      {
        id: 20,
        name: "Landscape Art",
        category: "paintings",
        image: "https://th.bing.com/th/id/OIP.vyJYeltvFJtKDw5_vLiM1QHaHc?rs=1&pid=ImgDetMain",
        new_price: 150.00,
        old_price: 200.00,
      },
    // Beauty Products
    {
      id: 21,
      name: "Organic Skin Care",
      category: "beautyproducts",
      image: "https://th.bing.com/th/id/OIP.LlAr4ZjDCDlrhhgCqpGpBwAAAA?w=305&h=196&c=7&r=0&o=5&dpr=1.5&pid=1.7",
      new_price: 25.00,
      old_price: 30.00,
    },
    {
      id: 22,
      name: "Herbal Shampoo",
      category: "beautyproducts",
      image: "https://th.bing.com/th/id/OIP._CftnkUeNFN9c5Lp0yCYZQHaDF?rs=1&pid=ImgDetMain",
      new_price: 15.00,
      old_price: 20.00,
    },
    {
        id: 23,
        name: "Herbal Shampoo",
        category: "beautyproducts",
        image: " https://th.bing.com/th/id/OIP.aXrB7vKWdWiGOv6OTmr_HgHaE7?w=279&h=185&c=7&r=0&o=5&dpr=1.5&pid=1.7",
        new_price: 15.00,
        old_price: 20.00,
    },
    {
        id: 24,
        name: "Herbal Shampoo",
        category: "beautyproducts",
        image: " https://th.bing.com/th/id/OIP.68udeyXNEBSkHW6QZjfDzQHaDZ?w=336&h=160&c=7&r=0&o=5&dpr=1.5&pid=1.7",
        new_price: 15.00,
        old_price: 20.00,
    },

    {
        id: 25,
        name: "Organic Skin Care",
        category: "beautyproducts",
        image: "https://i.pinimg.com/originals/26/17/17/26171721be87da214165d3646a17a767.jpg",
        new_price: 25.00,
        old_price: 30.00,
      },
   
    // Spices
    {
      id: 26,
      name: "Organic Spice kit",
      category: "spices",
      image: "https://www.redstickspice.com/cdn/shop/files/spice_jars_tins_4500x.png?v=1668218876",
      new_price: 10.00,
      old_price: 12.00,
    },
    {
      id: 27,
      name: "Organic Spice kit",
      category: "spices",
      image: "https://images-platform.99static.com/4VTdAFvYl0MEnotlTSIv9lZ1YEA=/94x0:1903x1809/fit-in/590x590/99designs-contests-attachments/88/88751/attachment_88751010",
      new_price: 12.00,
      old_price: 15.00,
    },

    {
        id: 28,
        name: "Organic Spice kit",
        category: "spices",
        image: "https://th.bing.com/th/id/OIP.UEjuuY2NoXmgsyaKB7kP5AHaHa?w=1600&h=1600&rs=1&pid=ImgDetMain",
        new_price: 10.00,
        old_price: 12.00,
      },
    
      {
        id: 29,
        name: "Organic Spice kit",
        category: "spices",
        image: "https://mir-s3-cdn-cf.behance.net/projects/404/2bc6fc186221009.Y3JvcCwxNDQ0LDExMzAsMTA3LDA.jpg",
        new_price: 10.00,
        old_price: 12.00,
      },
      {
        id: 30,
        name: "Organic Spice kit",
        category: "spices",
        image: "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/90a53319791637.562e054df35a0.jpg",
        new_price: 10.00,
        old_price: 12.00,
      },
    // Pooja Supplies
    {
      id: 31,
      name: "Pooja Thali Set",
      category: "pooja",
      image: "https://m.media-amazon.com/images/I/91WuphicNYL._SL1500_.jpg",
      new_price: 5.00,
      old_price: 7.00,
    },
    {
      id: 32,
      name: "Pooja Thali Set",
      category: "pooja",
      image: "https://th.bing.com/th/id/OIP.WmczogIV47_RHjmyLYrSjAHaG-?w=188&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7",
      new_price: 30.00,
      old_price: 40.00,
    },

    {
        id: 33,
        name: "Pooja Thali Set",
        category: "pooja",
        image: "https://i.pinimg.com/originals/e1/d3/97/e1d397c16b7c7c75ff159fe4929c32df.jpg",
        new_price: 30.00,
        old_price: 40.00,
    },


    {
        id: 34,
        name: "Pooja Thali Set",
        category: "pooja",
        image: "https://astrologyvastutalks.com/wp-content/uploads/2022/06/Janmashtami-Puja-kit-450x450.jpg",
        new_price: 30.00,
        old_price: 40.00,
    },
    {
        id: 35,
        name: "Pooja Thali Set",
        category: "pooja",
        image: "https://4.imimg.com/data4/JJ/XN/MY-35976917/dsc_0454-1000x1000.jpg",
        new_price: 30.00,
        old_price: 40.00,
    },
    
    // Festival Decor
    {
      id: 36,
      name: "Diwali",
      category: "festival",
      image: "https://th.bing.com/th/id/OIP.cPR730Jt9hK7vkv2rlcSfgHaEY?rs=1&pid=ImgDetMain",
      new_price: 20.00,
      old_price: 25.00,
    },
    {
        id: 37,
        name: "Diwali",
        category: "festival",
        image: "https://images-na.ssl-images-amazon.com/images/I/71J-G%2B4enSL._SL1500_.jpg",
        new_price: 20.00,
        old_price: 25.00,
      },
    {
      id: 38,
      name: "Diwali",
      category: "festival",
      image: "https://th.bing.com/th/id/OIP.yVXAN0on15Av4hDagz66SwHaE9?rs=1&pid=ImgDetMain4",
      new_price: 15.00,
      old_price: 20.00,
    },
  ];
  
  export default all_products;
  