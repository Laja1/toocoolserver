const { ApolloServer } = require("@apollo/server");
const { startStandaloneServer } = require("@apollo/server/standalone");

const typeDefs = `
  type Brands {

    id: ID!
brandName: String
brandCover: String
brandMotto: String
    logo: String!
    products: [Product]
    slug: String!

  }

  type Product {
    id:ID!
    brandProductName: String!
    brandProductimage: String!
    images: [String]
    brandProductPrice: Int!
  }

  type Query {
    brand: [Brands]
    product(slug: String): Brands
  }



`;

const brand = [
  {
    id: 1,
    slug: "WeBloodBrothers",
    brandName: "WeBloodBrothers",
    brandCover:
      "https://scontent.cdninstagram.com/v/t51.29350-15/398266337_1522490605175349_220684154524778919_n.jpg?stp=dst-jpg_e35&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDE3OTguc2RyIn0&_nc_ht=scontent.cdninstagram.com&_nc_cat=109&_nc_ohc=WioAWxIH5NwAX83bJ7f&edm=APs17CUBAAAA&ccb=7-5&ig_cache_key=MzIyNzc5NjQwMjEwMjg4MDk2Mw%3D%3D.2-ccb7-5&oh=00_AfBHq5C4bsm-mUcs2IC6a_DdXKdBY1x8Nlbdsd9sXgV1jA&oe=65ED0899&_nc_sid=10d13b",
    logo: "https://scontent.cdninstagram.com/v/t51.2885-19/275242425_648819119566048_5381673723199894110_n.jpg?stp=dst-jpg_s150x150&_nc_ht=scontent.cdninstagram.com&_nc_cat=104&_nc_ohc=3Jd2_yg9eW4AX-EwjhT&edm=APs17CUBAAAA&ccb=7-5&oh=00_AfAeLYtGHwfahui2zadyGiq9-uRP4Xm8ekjEuoGyyxAw5Q&oe=65EB08F8&_nc_sid=10d13b",
    brandMotto: "United We Stand",
    products: [
      {
        id: 1,
        brandProductName: "Seek First Thy Kingdom",
        brandProductimage:
          "https://scontent.cdninstagram.com/v/t51.29350-15/421952612_917608806685732_6204640045184986581_n.jpg?stp=dst-jpg_e35&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDE4MDAuc2RyIn0&_nc_ht=scontent.cdninstagram.com&_nc_cat=104&_nc_ohc=yS8xhv-qz4IAX8xcr4S&edm=APs17CUBAAAA&ccb=7-5&ig_cache_key=MzI4ODY1NzEzMjMxNDAzNTY2MA%3D%3D.2-ccb7-5&oh=00_AfDcPgNzJJTTbTil_6D3zXEVb2GqMjQoYnnSjAOURuDqzA&oe=65EC4643&_nc_sid=10d13b",
        brandProductPrice: 10000,
        images: [
          "https://scontent.cdninstagram.com/v/t51.29350-15/420657147_910649506964034_9143675866023978291_n.jpg?stp=dst-jpg_e35&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDE4MDAuc2RyIn0&_nc_ht=scontent.cdninstagram.com&_nc_cat=106&_nc_ohc=tG965QHDp9EAX8vnJXX&edm=APs17CUBAAAA&ccb=7-5&ig_cache_key=MzI4NjU5NTg4ODQzODUzOTUxNA%3D%3D.2-ccb7-5&oh=00_AfAx5pKjp2ANXHB3c-5USEQ9QvKqKGGSnlvOwTQ0gz7NPg&oe=65EB5503&_nc_sid=10d13b",
          "https://scontent.cdninstagram.com/v/t51.29350-15/420499107_753425996304175_6494886621838392795_n.jpg?stp=dst-jpg_e35&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDE4MDAuc2RyIn0&_nc_ht=scontent.cdninstagram.com&_nc_cat=107&_nc_ohc=WbJA5-QzUm4AX8HUZ7S&edm=APs17CUBAAAA&ccb=7-5&ig_cache_key=MzI4NjU5NTg4ODQ0NjgxOTYwNw%3D%3D.2-ccb7-5&oh=00_AfBs50QsvAUyQVe4ysYf1UX-lhw1uVuqh0Ek3AEj0Jz3OA&oe=65EC8817&_nc_sid=10d13b",
          "https://scontent.cdninstagram.com/v/t51.29350-15/420493619_268631976057458_2401811498308353828_n.jpg?stp=dst-jpg_e35&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDE4MDAuc2RyIn0&_nc_ht=scontent.cdninstagram.com&_nc_cat=102&_nc_ohc=5PRgL8yYivwAX8J0zBZ&edm=APs17CUBAAAA&ccb=7-5&ig_cache_key=MzI4NjU5NTg4ODc1NzI0ODA0NA%3D%3D.2-ccb7-5&oh=00_AfBfOBCkRLk5egxzH_lhfiU83HFJdhheKljLrkdy2tq4Uw&oe=65EC48A1&_nc_sid=10d13b",
          "https://scontent.cdninstagram.com/v/t51.29350-15/420646906_393386226535186_8459946037984059705_n.jpg?stp=dst-jpg_e35&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDE4MDAuc2RyIn0&_nc_ht=scontent.cdninstagram.com&_nc_cat=110&_nc_ohc=XxUrzY74kHMAX_x28mC&edm=APs17CUBAAAA&ccb=7-5&ig_cache_key=MzI4NjU5NTg4ODc0ODY5NTA0MA%3D%3D.2-ccb7-5&oh=00_AfCvKYO_azmFn5oU2Zk0M0vBFapzI4DSsu7mbqPnmFgPnw&oe=65EC0013&_nc_sid=10d13b",
        ],
      },
      {
        id: 2,
        brandProductName: "Hockey Jersey",
        brandProductimage:
          "https://scontent.cdninstagram.com/v/t51.29350-15/405770877_7098168463562450_7112941450232575436_n.jpg?stp=dst-jpg_e35&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDE3OTguc2RyIn0&_nc_ht=scontent.cdninstagram.com&_nc_cat=102&_nc_ohc=dqtS8V2DbOAAX96an-Z&edm=APs17CUBAAAA&ccb=7-5&ig_cache_key=MzI1MDM5NTIxMjg1OTgxMDcyMw%3D%3D.2-ccb7-5&oh=00_AfDxtiT4eXgYRDZJn4VmCENZFpIhbmnpYgbv1eeSfwYnCQ&oe=65EC6064&_nc_sid=10d13b",
        images: [
          "https://scontent.cdninstagram.com/v/t51.29350-15/407387562_586380436955388_5253753611060446905_n.jpg?stp=dst-jpg_e35&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDE3OTguc2RyIn0&_nc_ht=scontent.cdninstagram.com&_nc_cat=100&_nc_ohc=ckWfikx3o8AAX_5tgN8&edm=APs17CUBAAAA&ccb=7-5&ig_cache_key=MzI1MDM5NTIxMjg1OTgyMTQ0NQ%3D%3D.2-ccb7-5&oh=00_AfCfoNtoYqGCN4kRKiqehdRQFp_ZIfJCvjIbZ4CS9loNCA&oe=65EBC235&_nc_sid=10d13b",
          "https://scontent.cdninstagram.com/v/t51.29350-15/405770877_7098168463562450_7112941450232575436_n.jpg?stp=dst-jpg_e35&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDE3OTguc2RyIn0&_nc_ht=scontent.cdninstagram.com&_nc_cat=102&_nc_ohc=dqtS8V2DbOAAX96an-Z&edm=APs17CUBAAAA&ccb=7-5&ig_cache_key=MzI1MDM5NTIxMjg1OTgxMDcyMw%3D%3D.2-ccb7-5&oh=00_AfDxtiT4eXgYRDZJn4VmCENZFpIhbmnpYgbv1eeSfwYnCQ&oe=65EC6064&_nc_sid=10d13b",
          "https://scontent.cdninstagram.com/v/t51.29350-15/393113853_365297349513802_5964985318986008049_n.jpg?stp=dst-jpg_e35&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDE3OTguc2RyIn0&_nc_ht=scontent.cdninstagram.com&_nc_cat=110&_nc_ohc=jggCPdLMIq0AX93hDcQ&edm=APs17CUBAAAA&ccb=7-5&ig_cache_key=MzI1MDM5NTIxMzE1MzMyODA4MQ%3D%3D.2-ccb7-5&oh=00_AfCZV1ejronUesKfXcSZePek13DmGW1K8o_BYBV-xUFlNQ&oe=65EB472D&_nc_sid=10d13b",
          "https://scontent.cdninstagram.com/v/t51.29350-15/405782755_1390839758224225_2386385641847312853_n.jpg?stp=dst-jpg_e35&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDE3OTguc2RyIn0&_nc_ht=scontent.cdninstagram.com&_nc_cat=101&_nc_ohc=Xrwgoq4dNhkAX9JzMY-&edm=APs17CUBAAAA&ccb=7-5&ig_cache_key=MzI1MDM5NTIxMjk0MzUyNTQ5Mg%3D%3D.2-ccb7-5&oh=00_AfBIQqGAWS_JwCEmOUlMstxJ3nDISMHPkPsLHB8abSCuvA&oe=65EB99FE&_nc_sid=10d13b",
        ],
        brandProductPrice: 10000,
      },
      {
        id: 3,
        brandProductName: "Batman Tee",
        brandProductimage:
          "https://scontent.cdninstagram.com/v/t51.29350-15/429981125_772482514941927_8281498572439568011_n.jpg?stp=dst-jpg_e35&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDE4MDAuc2RyIn0&_nc_ht=scontent.cdninstagram.com&_nc_cat=103&_nc_ohc=VScAB5gVZToAX-un57R&edm=APs17CUBAAAA&ccb=7-5&ig_cache_key=MzMxMTQ0NTYxNTI4NTY4MTgwNw%3D%3D.2-ccb7-5&oh=00_AfDx4lVP0F9KdWgwfftCsZ6fRqms_N7D4NqUtbCsg3x36Q&oe=65EB4B35&_nc_sid=10d13b",
        images: [
          "https://scontent.cdninstagram.com/v/t51.29350-15/429847162_365629143063915_11370214939207338_n.jpg?stp=dst-jpg_e35&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDE4MDAuc2RyIn0&_nc_ht=scontent.cdninstagram.com&_nc_cat=103&_nc_ohc=FjWkXJQWc88AX_jqQ0t&edm=APs17CUBAAAA&ccb=7-5&ig_cache_key=MzMxMTQ0NTYxNTI4NTg5MzM4NA%3D%3D.2-ccb7-5&oh=00_AfAKFU-Bvx7h7Gka0GjtNvYUd_T6khV77UPLTJiU2bSxig&oe=65EC8AD1&_nc_sid=10d13b",
          "https://scontent.cdninstagram.com/v/t51.29350-15/429847162_365629143063915_11370214939207338_n.jpg?stp=dst-jpg_e35&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDE4MDAuc2RyIn0&_nc_ht=scontent.cdninstagram.com&_nc_cat=103&_nc_ohc=FjWkXJQWc88AX_jqQ0t&edm=APs17CUBAAAA&ccb=7-5&ig_cache_key=MzMxMTQ0NTYxNTI4NTg5MzM4NA%3D%3D.2-ccb7-5&oh=00_AfAKFU-Bvx7h7Gka0GjtNvYUd_T6khV77UPLTJiU2bSxig&oe=65EC8AD1&_nc_sid=10d13b",
          "https://scontent.cdninstagram.com/v/t51.29350-15/429981125_772482514941927_8281498572439568011_n.jpg?stp=dst-jpg_e35&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDE4MDAuc2RyIn0&_nc_ht=scontent.cdninstagram.com&_nc_cat=103&_nc_ohc=VScAB5gVZToAX-un57R&edm=APs17CUBAAAA&ccb=7-5&ig_cache_key=MzMxMTQ0NTYxNTI4NTY4MTgwNw%3D%3D.2-ccb7-5&oh=00_AfDx4lVP0F9KdWgwfftCsZ6fRqms_N7D4NqUtbCsg3x36Q&oe=65EB4B35&_nc_sid=10d13b",
          "https://scontent.cdninstagram.com/v/t51.29350-15/429885383_632269745709900_1137097610625239776_n.jpg?stp=dst-jpg_e35&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDE4MDAuc2RyIn0&_nc_ht=scontent.cdninstagram.com&_nc_cat=100&_nc_ohc=L_1zOPSsHKIAX8_jMVj&edm=APs17CUBAAAA&ccb=7-5&ig_cache_key=MzMxMTQ0NTYxNTU4Nzg0NjI2Ng%3D%3D.2-ccb7-5&oh=00_AfBQe0aAnf04x7fIrbXKUd-20KstoGIsHH8PPGB42CZ4yg&oe=65ECBBEC&_nc_sid=10d13b",
        ],
        brandProductPrice: 10000,
      },
      {
        id: 4,
        brandProductName: "Join The Clan",
        brandProductimage:
          "https://scontent.cdninstagram.com/v/t51.29350-15/193669402_3969986693048962_7777146569669072011_n.jpg?stp=dst-jpg_e35&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDE0Mzkuc2RyIn0&_nc_ht=scontent.cdninstagram.com&_nc_cat=110&_nc_ohc=bQL5oBkm8K0AX-GERGg&edm=APs17CUBAAAA&ccb=7-5&ig_cache_key=MjU4NDQ3MTE5NDI1MzA3NTIyNA%3D%3D.2-ccb7-5&oh=00_AfAIs4NMpLqj8nx16blpBZvTgWv3b3nvN-1YGCOUBE4Ifg&oe=65ECC434&_nc_sid=10d13b",

        images: [
          "https://scontent.cdninstagram.com/v/t51.29350-15/193669402_3969986693048962_7777146569669072011_n.jpg?stp=dst-jpg_e35&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDE0Mzkuc2RyIn0&_nc_ht=scontent.cdninstagram.com&_nc_cat=110&_nc_ohc=bQL5oBkm8K0AX-GERGg&edm=APs17CUBAAAA&ccb=7-5&ig_cache_key=MjU4NDQ3MTE5NDI1MzA3NTIyNA%3D%3D.2-ccb7-5&oh=00_AfAIs4NMpLqj8nx16blpBZvTgWv3b3nvN-1YGCOUBE4Ifg&oe=65ECC434&_nc_sid=10d13b",

          "https://scontent.cdninstagram.com/v/t51.29350-15/193955026_334533838092224_1445683116161041603_n.jpg?stp=dst-jpg_e35&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDE0NDAuc2RyIn0&_nc_ht=scontent.cdninstagram.com&_nc_cat=108&_nc_ohc=EajhM_c6iOUAX9SZpcP&edm=APs17CUBAAAA&ccb=7-5&ig_cache_key=MjU4NDQ3MTE5NDI5NDk4NzA3Nw%3D%3D.2-ccb7-5&oh=00_AfAB8LutZfJkC6cynKQsM9oVdiBXs86BjmO8dJ5zCG9Aqg&oe=65EBA353&_nc_sid=10d13b",

          "https://scontent.cdninstagram.com/v/t51.29350-15/194479770_246365257286451_8210419427342959789_n.jpg?stp=dst-jpg_e35&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDE0NDAuc2RyIn0&_nc_ht=scontent.cdninstagram.com&_nc_cat=103&_nc_ohc=_J3BkuTGagIAX-HM1p0&edm=APs17CUBAAAA&ccb=7-5&ig_cache_key=MjU4NDQ3MTE5NDI3ODIzOTk4NQ%3D%3D.2-ccb7-5&oh=00_AfBUaB2XV0zIiuLXq7GI6YqlZkzuZr_LP2McdkKtD1sauw&oe=65ECFA5D&_nc_sid=10d13b",

          "https://scontent.cdninstagram.com/v/t51.29350-15/194354933_272632754648865_6138147424899669688_n.jpg?stp=dst-jpg_e35&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDE0NDAuc2RyIn0&_nc_ht=scontent.cdninstagram.com&_nc_cat=109&_nc_ohc=o3oK3cfg6DgAX_4NMFu&edm=APs17CUBAAAA&ccb=7-5&ig_cache_key=MjU4NDQ3MTE5NDI3ODA4NTYyNQ%3D%3D.2-ccb7-5&oh=00_AfCZvtn0OJ7rzVX79groSlQRB3wb5M-1i-5KstXGFr5j1w&oe=65EB6936&_nc_sid=10d13b",
        ],
        brandProductPrice: 10000,
      },
    ],
  },

  {
    id: 2,
    slug: "Brk Academy",
    brandName: "Brk Academy",
    brandCover:
      "https://scontent.cdninstagram.com/v/t51.29350-15/394273788_351950023944237_5415049532697276714_n.jpg?stp=dst-jpg_e35&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDA2eDE3NTcuc2RyIn0&_nc_ht=scontent.cdninstagram.com&_nc_cat=109&_nc_ohc=8L5PzNroeooAX-cH2_v&edm=APs17CUBAAAA&ccb=7-5&ig_cache_key=MzIxOTMyNjg1MjQzMjY2MTUwOQ%3D%3D.2-ccb7-5&oh=00_AfCMiz-wMHk1MAPI8MWIRygQ4QGgHUMai82kR5g2-NC1Pw&oe=65EB60F3&_nc_sid=10d13b",
    logo: "https://scontent-los2-1.cdninstagram.com/v/t51.2885-19/194983658_853983801929896_3448874707843458180_n.jpg?stp=dst-jpg_s320x320&_nc_ht=scontent-los2-1.cdninstagram.com&_nc_cat=104&_nc_ohc=6O8azxWLdd0AX_bQgG3&edm=AOQ1c0wBAAAA&ccb=7-5&oh=00_AfCC7tdndzeWe81sMP5GFXrPwxZoI05tKynUTk7v2YiH5g&oe=65EBC0F1&_nc_sid=8b3546",
    brandMotto: "Spread Love And Positivity",
    products: [
      {
        id: 1,
        brandProductName: "Brk Retro Jersey",
        brandProductimage:
          "https://scontent.cdninstagram.com/v/t51.29350-15/417186438_687052410286513_1275783866342726849_n.jpg?stp=dst-jpg_e35&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDE3OTguc2RyIn0&_nc_ht=scontent.cdninstagram.com&_nc_cat=101&_nc_ohc=vTb4uEFDvcMAX9wibOV&edm=APs17CUBAAAA&ccb=7-5&ig_cache_key=MzI3NTI5NzQzMDg4NDc3Mjg0NA%3D%3D.2-ccb7-5&oh=00_AfCwMOiceo5Fb6SW-hV6Gatf_OIennN4jlXJMt6ARN3jzg&oe=65EB86D9&_nc_sid=10d13b",
        brandProductPrice: 40000,
        images: [
          "https://scontent.cdninstagram.com/v/t51.29350-15/417186438_687052410286513_1275783866342726849_n.jpg?stp=dst-jpg_e35&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDE3OTguc2RyIn0&_nc_ht=scontent.cdninstagram.com&_nc_cat=101&_nc_ohc=vTb4uEFDvcMAX9wibOV&edm=APs17CUBAAAA&ccb=7-5&ig_cache_key=MzI3NTI5NzQzMDg4NDc3Mjg0NA%3D%3D.2-ccb7-5&oh=00_AfCwMOiceo5Fb6SW-hV6Gatf_OIennN4jlXJMt6ARN3jzg&oe=65EB86D9&_nc_sid=10d13b",
          "https://scontent.cdninstagram.com/v/t51.29350-15/417186438_687052410286513_1275783866342726849_n.jpg?stp=dst-jpg_e35&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDE3OTguc2RyIn0&_nc_ht=scontent.cdninstagram.com&_nc_cat=101&_nc_ohc=vTb4uEFDvcMAX9wibOV&edm=APs17CUBAAAA&ccb=7-5&ig_cache_key=MzI3NTI5NzQzMDg4NDc3Mjg0NA%3D%3D.2-ccb7-5&oh=00_AfCwMOiceo5Fb6SW-hV6Gatf_OIennN4jlXJMt6ARN3jzg&oe=65EB86D9&_nc_sid=10d13b",
          "https://scontent.cdninstagram.com/v/t51.29350-15/417194123_1496290384551126_9222081720297168109_n.jpg?stp=dst-jpg_e35&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDE3OTguc2RyIn0&_nc_ht=scontent.cdninstagram.com&_nc_cat=106&_nc_ohc=Qm4NSKVv5h0AX9_T4y9&edm=APs17CUBAAAA&ccb=7-5&ig_cache_key=MzI3NTI5NzQzMDg5MzE2OTgyOA%3D%3D.2-ccb7-5&oh=00_AfA-hBCrXuQXU6dWT8kK49kJFFzy5hLV62NOgdJstr6pHw&oe=65ECC88D&_nc_sid=10d13b",
          "https://scontent.cdninstagram.com/v/t51.29350-15/417426714_930793702094220_3300402134744269056_n.jpg?stp=dst-jpg_e35&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDE3OTguc2RyIn0&_nc_ht=scontent.cdninstagram.com&_nc_cat=100&_nc_ohc=ME5JByX-75kAX9wbYfy&edm=APs17CUBAAAA&ccb=7-5&ig_cache_key=MzI3NTI5NzQzMDg4NDY3MDM4NA%3D%3D.2-ccb7-5&oh=00_AfDAltoYeuJiVVWHkue6qJMxagKmQ_zEQbFChwq1GIAUkw&oe=65EBB220&_nc_sid=10d13b",
          "https://scontent.cdninstagram.com/v/t51.29350-15/416895460_1112254116451957_2101394281225736064_n.jpg?stp=dst-jpg_e35&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDE3OTguc2RyIn0&_nc_ht=scontent.cdninstagram.com&_nc_cat=101&_nc_ohc=WohPsPfJGYUAX-q90at&edm=APs17CUBAAAA&ccb=7-5&ig_cache_key=MzI3NTI5NzQzMDg4NDgzNjYwMw%3D%3D.2-ccb7-5&oh=00_AfC_WdiqW8YE0XGl0_JWO-nE2SPLOUXdLzCFw2Xrt1IS1g&oe=65ED0BFA&_nc_sid=10d13b",
        ],
      },

      {
        id: 2,
        brandProductName: "Osadebe Catholic Jersey",
        brandProductimage:
          "https://scontent.cdninstagram.com/v/t51.29350-15/418047157_2624165401092175_4011145983563249332_n.jpg?stp=dst-jpg_e35&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDE3OTguc2RyIn0&_nc_ht=scontent.cdninstagram.com&_nc_cat=107&_nc_ohc=wNr15AxRtoAAX9jKnPo&edm=APs17CUBAAAA&ccb=7-5&ig_cache_key=MzI3NTgzODIyNzA4NjQxMzU3NQ%3D%3D.2-ccb7-5&oh=00_AfBvEzrcmAgObB7HG7jhtB5Gm85jn4coK6kCdTHbd-sM3Q&oe=65EC2CFE&_nc_sid=10d13b",
        images: [
          "https://scontent.cdninstagram.com/v/t51.29350-15/417385529_729649142430783_1840447346072046918_n.jpg?stp=dst-jpg_e35_p720x720&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDE3OTguc2RyIn0&_nc_ht=scontent.cdninstagram.com&_nc_cat=103&_nc_ohc=c924KU5ZRLAAX9caCop&edm=APs17CUBAAAA&ccb=7-5&ig_cache_key=MzI3NTgzODIyNzA5NDc2MzA1MQ%3D%3D.2-ccb7-5&oh=00_AfByX3PJYtB2dpm6JKWPjPJ3azPm1icg67IIEx83fkp5pA&oe=65ECE2B6&_nc_sid=10d13b",
          "https://scontent.cdninstagram.com/v/t51.29350-15/417728185_1012194916529154_3733672043662903917_n.jpg?stp=dst-jpg_e35&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDE3OTguc2RyIn0&_nc_ht=scontent.cdninstagram.com&_nc_cat=106&_nc_ohc=dW76OVvSE0oAX8jTSh5&edm=APs17CUBAAAA&ccb=7-5&ig_cache_key=MzI3NTgzODIyNzA5NDgzMjM4OA%3D%3D.2-ccb7-5&oh=00_AfBY6w6oaKA97occgwdEvNVBt9gtKSR3WkvHybITlrSerQ&oe=65EB77D4&_nc_sid=10d13b",
          "https://scontent.cdninstagram.com/v/t51.29350-15/418047157_2624165401092175_4011145983563249332_n.jpg?stp=dst-jpg_e35&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDE3OTguc2RyIn0&_nc_ht=scontent.cdninstagram.com&_nc_cat=107&_nc_ohc=wNr15AxRtoAAX9jKnPo&edm=APs17CUBAAAA&ccb=7-5&ig_cache_key=MzI3NTgzODIyNzA4NjQxMzU3NQ%3D%3D.2-ccb7-5&oh=00_AfBvEzrcmAgObB7HG7jhtB5Gm85jn4coK6kCdTHbd-sM3Q&oe=65EC2CFE&_nc_sid=10d13b",
          "https://scontent.cdninstagram.com/v/t51.29350-15/417399098_777653921066639_3780024657751597073_n.jpg?stp=dst-jpg_e35&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDE3OTguc2RyIn0&_nc_ht=scontent.cdninstagram.com&_nc_cat=111&_nc_ohc=Zk2N2BwVnI4AX9kU9U0&edm=APs17CUBAAAA&ccb=7-5&ig_cache_key=MzI3NTgzODIyNzA5NDgwMjEzNA%3D%3D.2-ccb7-5&oh=00_AfDHEDw4HGBQgaidy709eZYtWb6GbOosMLS_WeoNWm9oOQ&oe=65EBADA8&_nc_sid=10d13b",
        ],
        brandProductPrice: 55000,
      },
      {
        id: 3,
        brandProductName: "Brk x Revamp Mesh Shorts",
        brandProductimage:
          "https://scontent.cdninstagram.com/v/t51.29350-15/417900923_1853048758457732_5320940674269641615_n.jpg?stp=dst-jpg_e35&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDE3OTguc2RyIn0&_nc_ht=scontent.cdninstagram.com&_nc_cat=108&_nc_ohc=lpewR9le3_wAX9ggTCv&edm=APs17CUBAAAA&ccb=7-5&ig_cache_key=MzI3NTgzNzY3MzkzMzExMTgyMA%3D%3D.2-ccb7-5&oh=00_AfChJmsc9M6glfuQcWdZmkwh8O9EuvKTFsHy-2hFDoQ0hQ&oe=65ECE0BC&_nc_sid=10d13b",
        images: [
          "https://scontent.cdninstagram.com/v/t51.29350-15/416685704_840868131147234_8451326786865560469_n.jpg?stp=dst-jpg_e35&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDE3OTguc2RyIn0&_nc_ht=scontent.cdninstagram.com&_nc_cat=106&_nc_ohc=l4Gvvb9tVooAX_cN_xA&edm=APs17CUBAAAA&ccb=7-5&ig_cache_key=MzI3NTgzNzY3MzkzMzIyOTQxNw%3D%3D.2-ccb7-5&oh=00_AfA7FRoCQfNKys7zyTOntalKyfCZa7B4CBxu2QzZ6V5Pig&oe=65EC1D1E&_nc_sid=10d13b",

          "https://scontent.cdninstagram.com/v/t51.29350-15/417900923_1853048758457732_5320940674269641615_n.jpg?stp=dst-jpg_e35&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDE3OTguc2RyIn0&_nc_ht=scontent.cdninstagram.com&_nc_cat=108&_nc_ohc=lpewR9le3_wAX9ggTCv&edm=APs17CUBAAAA&ccb=7-5&ig_cache_key=MzI3NTgzNzY3MzkzMzExMTgyMA%3D%3D.2-ccb7-5&oh=00_AfChJmsc9M6glfuQcWdZmkwh8O9EuvKTFsHy-2hFDoQ0hQ&oe=65ECE0BC&_nc_sid=10d13b",

          "https://scontent.cdninstagram.com/v/t51.29350-15/417476541_213924728455917_4261902348824257256_n.jpg?stp=dst-jpg_e35&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDE3OTguc2RyIn0&_nc_ht=scontent.cdninstagram.com&_nc_cat=109&_nc_ohc=LOXKcspYEOgAX-DLCjW&edm=APs17CUBAAAA&ccb=7-5&ig_cache_key=MzI3NTgzNzY3MzkzMzExNTEwOQ%3D%3D.2-ccb7-5&oh=00_AfCdJKmy9n8yPux7jmL3Dfbu30Q6pfYzM7BjsI-T-jaFHg&oe=65EB7815&_nc_sid=10d13b",

          "https://scontent.cdninstagram.com/v/t51.29350-15/417956946_354589350645636_5139097081064022136_n.jpg?stp=dst-jpg_e35_p720x720&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDE3OTguc2RyIn0&_nc_ht=scontent.cdninstagram.com&_nc_cat=100&_nc_ohc=ZXOWPj11AJAAX-obyFK&edm=APs17CUBAAAA&ccb=7-5&ig_cache_key=MzI3NTgzNzY3MzkzMzI4MDgyMw%3D%3D.2-ccb7-5&oh=00_AfDDM9KOy-8SWpg71acJhUK5ZiMxuLQaC_Wdfu0QUsaRWA&oe=65ECA883&_nc_sid=10d13b",
        ],
        brandProductPrice: 30000,
      },
      {
        id: 4,
        brandProductName: "BRK/WESTNORTH GASOLINE TEE",
        brandProductimage:
          "https://scontent.cdninstagram.com/v/t51.29350-15/416489490_341405625347031_7236190749780014573_n.jpg?stp=dst-jpg_e35&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDE3OTguc2RyIn0&_nc_ht=scontent.cdninstagram.com&_nc_cat=103&_nc_ohc=vkqm0SrKTWsAX__wvhn&edm=APs17CUBAAAA&ccb=7-5&ig_cache_key=MzI3MzgzMzkyNjA5NzA4NDUzNQ%3D%3D.2-ccb7-5&oh=00_AfDguu4j6LysVEBFpYo7FXJNYpRQM26trI12clV06YS-0w&oe=65EC672C&_nc_sid=10d13b",

        images: [
          "https://scontent.cdninstagram.com/v/t51.29350-15/416489490_341405625347031_7236190749780014573_n.jpg?stp=dst-jpg_e35&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDE3OTguc2RyIn0&_nc_ht=scontent.cdninstagram.com&_nc_cat=103&_nc_ohc=vkqm0SrKTWsAX__wvhn&edm=APs17CUBAAAA&ccb=7-5&ig_cache_key=MzI3MzgzMzkyNjA5NzA4NDUzNQ%3D%3D.2-ccb7-5&oh=00_AfDguu4j6LysVEBFpYo7FXJNYpRQM26trI12clV06YS-0w&oe=65EC672C&_nc_sid=10d13b",

          "https://scontent.cdninstagram.com/v/t51.29350-15/416434373_181295925041281_1013504903275337987_n.jpg?stp=dst-jpg_e35&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDE3OTguc2RyIn0&_nc_ht=scontent.cdninstagram.com&_nc_cat=101&_nc_ohc=Ftb6vQcpaa0AX-r25F9&edm=APs17CUBAAAA&ccb=7-5&ig_cache_key=MzI3MzgzMzkyNjA4MDE0NDE5Nw%3D%3D.2-ccb7-5&oh=00_AfDhpVnh30KVTWSLt1xnU2UkByyMDtP7784gfTML38TrGw&oe=65ECF697&_nc_sid=10d13b",

          "https://scontent.cdninstagram.com/v/t51.29350-15/416611110_1336292374437701_3631023857045954592_n.jpg?stp=dst-jpg_e35&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDE3OTguc2RyIn0&_nc_ht=scontent.cdninstagram.com&_nc_cat=105&_nc_ohc=xrW-RFt2Gy0AX_uPd5E&edm=APs17CUBAAAA&ccb=7-5&ig_cache_key=MzI3MzgzMzkyNTc3ODE0MTQ2Nw%3D%3D.2-ccb7-5&oh=00_AfATYAJlKk-mg_5wsoK5yK9ExXzvUo1t93YwjJR74_JydA&oe=65EC1CE5&_nc_sid=10d13b",

          "https://scontent.cdninstagram.com/v/t51.29350-15/416922973_906561627514954_5330843096369107404_n.jpg?stp=dst-jpg_e35&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDE3OTguc2RyIn0&_nc_ht=scontent.cdninstagram.com&_nc_cat=110&_nc_ohc=Y9ONwawPfZQAX8NJNTb&edm=APs17CUBAAAA&ccb=7-5&ig_cache_key=MzI3MzgzMzkyNTc2OTkyOTQ5OA%3D%3D.2-ccb7-5&oh=00_AfBJFdzN8ffShsRqKvTLDBxXOMnJar8YMGhy4demP2B_QQ&oe=65EBF8EC&_nc_sid=10d13b",
        ],
        brandProductPrice: 25000,
      },
    ],
  },

  {
    id: 3,
    slug: "Clapped Boys",
    brandName: "Clapped Boys",
    brandCover:
      "https://scontent.cdninstagram.com/v/t51.29350-15/411071176_1066048508041854_5909614886409337209_n.jpg?stp=dst-jpg_e35&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDE3OTguc2RyIn0&_nc_ht=scontent.cdninstagram.com&_nc_cat=106&_nc_ohc=vZM1QuYAJdQAX9GorL5&edm=APs17CUBAAAA&ccb=7-5&ig_cache_key=MzI1ODUwMDEyMzc0MDc2NTk4OQ%3D%3D.2-ccb7-5&oh=00_AfCJyZ1RIrjCvwzSQkWU8qjChR3HFc0vkVRBDiNevrfrAA&oe=65EDC605&_nc_sid=10d13b",
    logo: "https://scontent-los2-1.cdninstagram.com/v/t51.2885-19/317428311_684871003074700_4410710922221987957_n.jpg?stp=dst-jpg_s320x320&_nc_ht=scontent-los2-1.cdninstagram.com&_nc_cat=104&_nc_ohc=TDEi3mwvBaIAX9VROia&edm=AOQ1c0wBAAAA&ccb=7-5&oh=00_AfCvXqz-1bqgHXqqhcM9m6b8fooMRr5vu_udWpzHcwEtTA&oe=65EC964B&_nc_sid=8b3546",
    brandMotto: "GO CLAPPED OR GO HOME!",
    products: [
      {
        id: 1,
        brandProductName: "Join The Mob",
        brandProductimage:
          "https://scontent.cdninstagram.com/v/t51.29350-15/400519269_2602668563240530_8584301494442865519_n.jpg?stp=dst-jpg_e35_p720x720&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDE4MDAuc2RyIn0&_nc_ht=scontent.cdninstagram.com&_nc_cat=110&_nc_ohc=BZs_jk0m0NEAX9hHa-H&edm=APs17CUBAAAA&ccb=7-5&ig_cache_key=MzIzMzg1NzM0ODM5MTA5MTkxNw%3D%3D.2-ccb7-5&oh=00_AfAFgIIJRkKvVeFvK4leYXLXVSK4L_UXYvcyBDdlKCxvJg&oe=65ECF5FE&_nc_sid=10d13b",
        brandProductPrice: 40000,
        images: [
          "https://scontent.cdninstagram.com/v/t51.29350-15/400519269_2602668563240530_8584301494442865519_n.jpg?stp=dst-jpg_e35_p720x720&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDE4MDAuc2RyIn0&_nc_ht=scontent.cdninstagram.com&_nc_cat=110&_nc_ohc=BZs_jk0m0NEAX9hHa-H&edm=APs17CUBAAAA&ccb=7-5&ig_cache_key=MzIzMzg1NzM0ODM5MTA5MTkxNw%3D%3D.2-ccb7-5&oh=00_AfAFgIIJRkKvVeFvK4leYXLXVSK4L_UXYvcyBDdlKCxvJg&oe=65ECF5FE&_nc_sid=10d13b",
          "https://scontent.cdninstagram.com/v/t51.29350-15/401278094_1400885524109751_8254365685464817935_n.jpg?stp=dst-jpg_e35_p720x720&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDE4MDAuc2RyIn0&_nc_ht=scontent.cdninstagram.com&_nc_cat=103&_nc_ohc=ZiYgV33P2WEAX-bn8MT&edm=APs17CUBAAAA&ccb=7-5&ig_cache_key=MzIzMzg1NzM0ODcwMTQ2MDI3MA%3D%3D.2-ccb7-5&oh=00_AfDfBV8yVvWyRKVdxX0oulV2DqAlU_TKrJCHiy0RoQrBDQ&oe=65EBBB3A&_nc_sid=10d13b",
          "https://scontent.cdninstagram.com/v/t51.29350-15/400496876_327453263359281_3189870973122964182_n.jpg?stp=dst-jpg_e35&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDE4MDAuc2RyIn0&_nc_ht=scontent.cdninstagram.com&_nc_cat=109&_nc_ohc=j9LArp4euOkAX8gYtRd&edm=APs17CUBAAAA&ccb=7-5&ig_cache_key=MzIzMzg1NzM0ODM4MjY2Njg2Mw%3D%3D.2-ccb7-5&oh=00_AfCZ4g5k_KnOk966tU7hVVBSzHCBDqssaFdpfpFAEgWwJA&oe=65ED0BEA&_nc_sid=10d13b",
          "https://scontent.cdninstagram.com/v/t51.29350-15/369953848_996305631445379_8996728414697895194_n.jpg?stp=dst-jpg_e35&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDE4MDAuc2RyIn0&_nc_ht=scontent.cdninstagram.com&_nc_cat=111&_nc_ohc=vlAXK4VKIgwAX9B8ng-&edm=APs17CUBAAAA&ccb=7-5&ig_cache_key=MzIzMzg1NzM0ODM5OTM4NzY0OQ%3D%3D.2-ccb7-5&oh=00_AfD-7yWCL3OIry5u3r3k2ZS_uVMb024mrPaeN6dEprVAUw&oe=65EBDDB1&_nc_sid=10d13b",
        ],
      },

      {
        id: 2,
        brandProductName: "Go Clapped Tee",
        brandProductimage:
          "https://scontent.cdninstagram.com/v/t51.29350-15/318008242_146949941432785_6588595156995190736_n.jpg?stp=dst-jpg_e35_p720x720&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDE3OTIuc2RyIn0&_nc_ht=scontent.cdninstagram.com&_nc_cat=101&_nc_ohc=mDOTUtcTspkAX8HbGz5&edm=APs17CUBAAAA&ccb=7-5&ig_cache_key=Mjk4NTMzNDg2MzQ4NDA4Mjk0Mg%3D%3D.2-ccb7-5&oh=00_AfCBQ3Q0RXauBt83V7Gv_OMQIie6f2AMt4gwv9F_q1jueQ&oe=65EC8C53&_nc_sid=10d13b",
        images: [
          "https://scontent.cdninstagram.com/v/t51.29350-15/318008242_146949941432785_6588595156995190736_n.jpg?stp=dst-jpg_e35_p720x720&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDE3OTIuc2RyIn0&_nc_ht=scontent.cdninstagram.com&_nc_cat=101&_nc_ohc=mDOTUtcTspkAX8HbGz5&edm=APs17CUBAAAA&ccb=7-5&ig_cache_key=Mjk4NTMzNDg2MzQ4NDA4Mjk0Mg%3D%3D.2-ccb7-5&oh=00_AfCBQ3Q0RXauBt83V7Gv_OMQIie6f2AMt4gwv9F_q1jueQ&oe=65EC8C53&_nc_sid=10d13b",

          "https://scontent.cdninstagram.com/v/t51.29350-15/317755696_207671818322387_6012700860920343948_n.jpg?stp=dst-jpg_e35&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDE3OTIuc2RyIn0&_nc_ht=scontent.cdninstagram.com&_nc_cat=111&_nc_ohc=41x37fIK35oAX8rBQob&edm=APs17CUBAAAA&ccb=7-5&ig_cache_key=Mjk4NTMzNDg2MzYzNDkxNTEzMw%3D%3D.2-ccb7-5&oh=00_AfADe4u1PPI5d8O-0b094Dm9_cUNKxCJ59gB09GMKIu2fQ&oe=65EB7A0F&_nc_sid=10d13b",

          "https://scontent.cdninstagram.com/v/t51.29350-15/318140505_708396177109226_509942156864980451_n.jpg?stp=dst-jpg_e35&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDE3OTIuc2RyIn0&_nc_ht=scontent.cdninstagram.com&_nc_cat=102&_nc_ohc=KBaEBY5nm6sAX-YgJbS&edm=APs17CUBAAAA&ccb=7-5&ig_cache_key=Mjk4NTMzNDg2MzU4NDc0MjI0MA%3D%3D.2-ccb7-5&oh=00_AfC6mhsnTtZHTqMtEtg2dRbs-99GQNZjkfq38ylyS4s28w&oe=65EBE2A5&_nc_sid=10d13b",

          "https://scontent.cdninstagram.com/v/t51.29350-15/317989495_684630119824363_4636887831826547335_n.jpg?stp=dst-jpg_e35&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDE3OTIuc2RyIn0&_nc_ht=scontent.cdninstagram.com&_nc_cat=107&_nc_ohc=yBT9wNBrUp8AX_6aGeL&edm=APs17CUBAAAA&ccb=7-5&ig_cache_key=Mjk4NTMzMzU0NTMyMzMwNzU3MQ%3D%3D.2-ccb7-5&oh=00_AfCy8eiG8bWoXFmjSwxal0mGijd2RE8M_vCRhszhgp2Dwg&oe=65EB9257&_nc_sid=10d13b",
        ],
        brandProductPrice: 55000,
      },
      {
        id: 3,
        brandProductName: "Clapped Shit",
        brandProductimage:
          "https://scontent.cdninstagram.com/v/t51.29350-15/274950048_1550553548657939_1695427210340414493_n.jpg?stp=dst-jpg_e35_p720x720&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDE3NTkuc2RyIn0&_nc_ht=scontent.cdninstagram.com&_nc_cat=111&_nc_ohc=GDKtuxWaFjcAX-6hnMw&edm=APs17CUBAAAA&ccb=7-5&ig_cache_key=Mjc4MzgyNDQzOTk0NzU3NDE4Mw%3D%3D.2-ccb7-5&oh=00_AfDFFC3eElbtZX280nai1BgJrYkE5c3yBCsbYL5QiNHCnA&oe=65EA9641&_nc_sid=10d13b",
        images: [
          "https://scontent.cdninstagram.com/v/t51.29350-15/274950048_1550553548657939_1695427210340414493_n.jpg?stp=dst-jpg_e35_p720x720&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDE3NTkuc2RyIn0&_nc_ht=scontent.cdninstagram.com&_nc_cat=111&_nc_ohc=GDKtuxWaFjcAX-6hnMw&edm=APs17CUBAAAA&ccb=7-5&ig_cache_key=Mjc4MzgyNDQzOTk0NzU3NDE4Mw%3D%3D.2-ccb7-5&oh=00_AfDFFC3eElbtZX280nai1BgJrYkE5c3yBCsbYL5QiNHCnA&oe=65EA9641&_nc_sid=10d13b",

          "https://scontent.cdninstagram.com/v/t51.29350-15/275014091_284968493745711_2354031003337824854_n.jpg?stp=dst-jpg_e35&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDE3NzUuc2RyIn0&_nc_ht=scontent.cdninstagram.com&_nc_cat=103&_nc_ohc=1Q7gtW1tplYAX_J-RoU&edm=APs17CUBAAAA&ccb=7-5&ig_cache_key=Mjc4MzgyNDg0NzM2NTY4NTY2MQ%3D%3D.2-ccb7-5&oh=00_AfD7n3WO4TiOChnifZDGgBVx6vX_6cwKSsABBZb7stSdkw&oe=65EACC49&_nc_sid=10d13b",

          "https://scontent.cdninstagram.com/v/t51.29350-15/275036501_489058302761403_7198760898447684212_n.jpg?stp=dst-jpg_e35&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDE0NDAuc2RyIn0&_nc_ht=scontent.cdninstagram.com&_nc_cat=103&_nc_ohc=unk2S_OTA58AX_-E8Lu&edm=APs17CUBAAAA&ccb=7-5&ig_cache_key=Mjc4MzgyNTE2MjEyMzAwNDc4OA%3D%3D.2-ccb7-5&oh=00_AfA_HoAohTvj2-SRSDQ35Q4WIY-zL9mvH0Wo19XbJJj3MQ&oe=65EC11E3&_nc_sid=10d13b",

          "https://scontent.cdninstagram.com/v/t51.29350-15/275100505_436069261649006_8440515060953205994_n.jpg?stp=dst-jpg_e35&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDE0NDAuc2RyIn0&_nc_ht=scontent.cdninstagram.com&_nc_cat=102&_nc_ohc=PjTUpFeJf6EAX9N5NF4&edm=APs17CUBAAAA&ccb=7-5&ig_cache_key=Mjc4MzgyNTE2MjEzOTcyMTM1MQ%3D%3D.2-ccb7-5&oh=00_AfCE5_fkSO0DM6f88y7jFL-zqg1WTUCb7WJEYBrEMn3wyg&oe=65ED0D4C&_nc_sid=10d13b",
        ],
        brandProductPrice: 30000,
      },
    ],
  },

  {
    id: 4,
    slug: "Severe Nature",
    brandName: "Severe Nature",
    brandCover:
      "https://scontent.cdninstagram.com/v/t51.29350-15/243787121_251644836888697_3530998005911301128_n.jpg?stp=dst-jpg_e35&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDE4MDAuc2RyIn0&_nc_ht=scontent.cdninstagram.com&_nc_cat=101&_nc_ohc=zwAQESvnU9IAX8pyjb4&edm=APs17CUBAAAA&ccb=7-5&ig_cache_key=MjY3NDI1NzU0MTAzODU4NDU5Nw%3D%3D.2-ccb7-5&oh=00_AfCX040EAQEetzDatoOYCFXaQXhoRu1vOYpyWRXjAKmYUg&oe=65EE15CB&_nc_sid=10d13b",
    logo: "https://scontent-los2-1.cdninstagram.com/v/t51.2885-19/285897188_969164697084076_6708409492982733118_n.jpg?stp=dst-jpg_s320x320&_nc_ht=scontent-los2-1.cdninstagram.com&_nc_cat=104&_nc_ohc=Wk-QBQgxP60AX-LgZNx&edm=AOQ1c0wBAAAA&ccb=7-5&oh=00_AfBHp_5ScJA6VdAZueaT8QyIbMH76Ctq4hoZRdUXBiDklg&oe=65EC4E13&_nc_sid=8b3546",
    brandMotto: "Nature",
    products: [
      {
        id: 1,
        brandProductName: "Severe Nature’s Boxers",
        brandProductimage:
          "https://scontent.cdninstagram.com/v/t39.30808-6/414082706_18294669346145884_5626229249873728893_n.jpg?stp=dst-jpg_e15&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDE4MDAuc2RyIn0&_nc_ht=scontent.cdninstagram.com&_nc_cat=104&_nc_ohc=Vd1KFv-5A50AX-hNQF_&edm=APs17CUAAAAA&ccb=7-5&ig_cache_key=MzI2ODYzMjYwMTM5ODgwMTQyNg%3D%3D.2-ccb7-5&oh=00_AfCQfG3y__Okzqz_QAS_mS8jY7RIfkz9DB9QVeFpq9cp4w&oe=65ED8B5D&_nc_sid=10d13b",
        brandProductPrice: 40000,
        images: [
          "https://scontent.cdninstagram.com/v/t39.30808-6/414082706_18294669346145884_5626229249873728893_n.jpg?stp=dst-jpg_e15&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDE4MDAuc2RyIn0&_nc_ht=scontent.cdninstagram.com&_nc_cat=104&_nc_ohc=Vd1KFv-5A50AX-hNQF_&edm=APs17CUAAAAA&ccb=7-5&ig_cache_key=MzI2ODYzMjYwMTM5ODgwMTQyNg%3D%3D.2-ccb7-5&oh=00_AfCQfG3y__Okzqz_QAS_mS8jY7RIfkz9DB9QVeFpq9cp4w&oe=65ED8B5D&_nc_sid=10d13b",
          "https://scontent.cdninstagram.com/v/t39.30808-6/415059365_18294669355145884_8202189798822706223_n.jpg?stp=dst-jpg_e15&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDE4MDAuc2RyIn0&_nc_ht=scontent.cdninstagram.com&_nc_cat=104&_nc_ohc=gCsNd5e-Ix0AX8asAdc&edm=APs17CUAAAAA&ccb=7-5&ig_cache_key=MzI2ODYzMjYwMTM5ODc3NjQzNA%3D%3D.2-ccb7-5&oh=00_AfC8QgMef7Toa4WETKxejvukThrKdqaD8WTVHSOE5RnN3A&oe=65EC8160&_nc_sid=10d13b",
          "https://scontent.cdninstagram.com/v/t39.30808-6/415112188_18294669403145884_4866638213387975702_n.jpg?stp=dst-jpg_e35_p720x720_sh0.08&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDE4MDAuc2RyIn0&_nc_ht=scontent.cdninstagram.com&_nc_cat=104&_nc_ohc=aws-OiIchNwAX-RXhWl&edm=APs17CUAAAAA&ccb=7-5&ig_cache_key=MzI2ODYzMjYwMTM4MjA1MDU4MQ%3D%3D.2-ccb7-5&oh=00_AfDdK2iMPncCoyzsUa8zA53o4Wcn3Syg6rQKW0c8hv73qg&oe=65ED08AE&_nc_sid=10d13b",
          "https://scontent.cdninstagram.com/v/t39.30808-6/414048514_18294669424145884_6581380638291599336_n.jpg?stp=dst-jpg_e15&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDE4MDAuc2RyIn0&_nc_ht=scontent.cdninstagram.com&_nc_cat=104&_nc_ohc=DBYv_KEZdpYAX94tk8S&edm=APs17CUAAAAA&ccb=7-5&ig_cache_key=MzI2ODYzMjYwMTQwNzIwMzIwOQ%3D%3D.2-ccb7-5&oh=00_AfDrWoTxuaZaJfNOIMedJsqA_sudzTbn49xTGgwYeuvTzg&oe=65EC8C23&_nc_sid=10d13b",
          "https://scontent.cdninstagram.com/v/t39.30808-6/415102055_18294669436145884_7489202506323982009_n.jpg?stp=dst-jpg_e15&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDE4MDAuc2RyIn0&_nc_ht=scontent.cdninstagram.com&_nc_cat=104&_nc_ohc=4FQTYBP7k2EAX82xlgR&edm=APs17CUAAAAA&ccb=7-5&ig_cache_key=MzI2ODYzMjYwMTM5ODc3NDYyMg%3D%3D.2-ccb7-5&oh=00_AfDXXUEWIHr_a1gpU49_IxWfL63dkawuXb1au2J7H5CMRg&oe=65EDC0BA&_nc_sid=10d13b",
        ],
      },

      {
        id: 2,
        brandProductName: "Severe Nature ‘Bushman’",
        brandProductimage:
          "https://scontent.cdninstagram.com/v/t39.30808-6/377551668_18279121534145884_8267564354243374341_n.jpg?stp=dst-jpg_e15&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDE4MDAuc2RyIn0&_nc_ht=scontent.cdninstagram.com&_nc_cat=104&_nc_ohc=CH8filWSdQoAX9w55_y&edm=APs17CUAAAAA&ccb=7-5&ig_cache_key=MzE4NzUwNDgyNTEyODUyMTA0OA%3D%3D.2-ccb7-5&oh=00_AfDzKYvtexe6QMUPFTd_TmNk47rHbXY9d8_WVWlie4DaQA&oe=65ECE101&_nc_sid=10d13b",
        images: [
          "https://scontent.cdninstagram.com/v/t39.30808-6/377551668_18279121534145884_8267564354243374341_n.jpg?stp=dst-jpg_e15&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDE4MDAuc2RyIn0&_nc_ht=scontent.cdninstagram.com&_nc_cat=104&_nc_ohc=CH8filWSdQoAX9w55_y&edm=APs17CUAAAAA&ccb=7-5&ig_cache_key=MzE4NzUwNDgyNTEyODUyMTA0OA%3D%3D.2-ccb7-5&oh=00_AfDzKYvtexe6QMUPFTd_TmNk47rHbXY9d8_WVWlie4DaQA&oe=65ECE101&_nc_sid=10d13b",
          "https://scontent.cdninstagram.com/v/t39.30808-6/376642365_18279121537145884_4751687362626480211_n.jpg?stp=dst-jpg_e15&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDE4MDAuc2RyIn0&_nc_ht=scontent.cdninstagram.com&_nc_cat=104&_nc_ohc=ShP60mCMMdwAX8zt-B3&edm=APs17CUAAAAA&ccb=7-5&ig_cache_key=MzE4NzUwNDgyNTEyODYwMjkyNw%3D%3D.2-ccb7-5&oh=00_AfC7SeYqZJ7FeXAwTN7MKSWpVXaXni6AfY0ZezzgtrtsBQ&oe=65EDA39E&_nc_sid=10d13b",
          "https://scontent.cdninstagram.com/v/t39.30808-6/376625079_18279121546145884_3829492912987949178_n.jpg?stp=dst-jpg_e15&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDE4MDAuc2RyIn0&_nc_ht=scontent.cdninstagram.com&_nc_cat=104&_nc_ohc=6pXg4k1WEvQAX9M9Afy&edm=APs17CUAAAAA&ccb=7-5&ig_cache_key=MzE4NzUwNDgyNTEyODUyNTExMQ%3D%3D.2-ccb7-5&oh=00_AfDxZyqegTgJcoZtBpwjH5KcvPYZJgDrqtFLMa9llpE19w&oe=65EE2F44&_nc_sid=10d13b",
          "https://scontent.cdninstagram.com/v/t39.30808-6/376567252_18279121555145884_304988883280230583_n.jpg?stp=dst-jpg_e15&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDE4MDAuc2RyIn0&_nc_ht=scontent.cdninstagram.com&_nc_cat=104&_nc_ohc=eacCqZY32N4AX8pvrnn&edm=APs17CUAAAAA&ccb=7-5&ig_cache_key=MzE4NzUwNDgyNTQ1NTY3MDM5MQ%3D%3D.2-ccb7-5&oh=00_AfDRRzJ9yAUGSgenA3ySkjr0-fndWjeU7QeMdiSgwWm0Xw&oe=65ED6DF2&_nc_sid=10d13b",
          "https://scontent.cdninstagram.com/v/t39.30808-6/375191102_18278969368145884_5275421580382809358_n.jpg?stp=dst-jpg_e15&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDE4MDAuc2RyIn0&_nc_ht=scontent.cdninstagram.com&_nc_cat=104&_nc_ohc=KlTFdG3jDicAX9H8Vjq&edm=APs17CUAAAAA&ccb=7-5&ig_cache_key=MzE4NjcwNTY5MTEwNjczMTI4OA%3D%3D.2-ccb7-5&oh=00_AfCWzhgM4l3fA6eKEsnJXaAhmbChIXIMqfdA5jT5Hq41ew&oe=65EB29F4&_nc_sid=10d13b",
        ],
        brandProductPrice: 55000,
      },
      {
        id: 3,
        brandProductName: "Forevernature",
        brandProductimage:
          "https://scontent-lhr6-2.cdninstagram.com/v/t39.30808-6/362015761_18271942096145884_6873699941854340555_n.jpg?stp=dst-jpg_e15&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDE4MDAuc2RyIn0&_nc_ht=scontent-lhr6-2.cdninstagram.com&_nc_cat=104&_nc_ohc=L00W7wU-hR8AX9xEKWr&edm=APs17CUAAAAA&ccb=7-5&ig_cache_key=MzE1MTIwMjQxOTQ4MzAxNzA2Nw%3D%3D.2-ccb7-5&oh=00_AfAkchUmAehV2NDPDt-cGl_XQAF6w0r3Hnmz0FtTCFIUGw&oe=65EC64B3&_nc_sid=10d13b",
        images: [
          "https://scontent-lhr6-2.cdninstagram.com/v/t39.30808-6/362015761_18271942096145884_6873699941854340555_n.jpg?stp=dst-jpg_e35_p720x720_sh0.08&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDE4MDAuc2RyIn0&_nc_ht=scontent-lhr6-2.cdninstagram.com&_nc_cat=104&_nc_ohc=L00W7wU-hR8AX9xEKWr&edm=APs17CUAAAAA&ccb=7-5&ig_cache_key=MzE1MTIwMjQxOTQ4MzAxNzA2Nw%3D%3D.2-ccb7-5&oh=00_AfA8JrWSJtz7wlURAIH80YU8vfHaThgqb3pOyw0yU23eSw&oe=65EC64B3&_nc_sid=10d13b",
          "https://scontent-lhr6-2.cdninstagram.com/v/t39.30808-6/361972687_18271942111145884_3992280977483759454_n.jpg?stp=dst-jpg_e15&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDE4MDAuc2RyIn0&_nc_ht=scontent-lhr6-2.cdninstagram.com&_nc_cat=104&_nc_ohc=z4q0UFp4j8wAX_mloZG&edm=APs17CUAAAAA&ccb=7-5&ig_cache_key=MzE1MTIwMjQxOTQ4MzAxNzM1Mw%3D%3D.2-ccb7-5&oh=00_AfALeSFOB624BYDBtbW9kLCC2TxO5xSsulUls2iCK8TLvA&oe=65ED2071&_nc_sid=10d13b",
          "https://scontent-lhr6-2.cdninstagram.com/v/t39.30808-6/361999155_18271942120145884_5379113747083955513_n.jpg?stp=dst-jpg_e15&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDE4MDAuc2RyIn0&_nc_ht=scontent-lhr6-2.cdninstagram.com&_nc_cat=104&_nc_ohc=sopm4rB0HFcAX8kP8Gh&edm=APs17CUAAAAA&ccb=7-5&ig_cache_key=MzE1MTIwMjQxOTQ3NDU3NzQ1NA%3D%3D.2-ccb7-5&oh=00_AfC5yOzQSY3g6osJ9I4Y1DFztPMGgWrhASNBRqXn5QtO5A&oe=65ECB2B2&_nc_sid=10d13b",
          "https://scontent-lhr6-2.cdninstagram.com/v/t39.30808-6/361650963_18271942129145884_7365852082347636568_n.jpg?stp=dst-jpg_e15&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDE4MDAuc2RyIn0&_nc_ht=scontent-lhr6-2.cdninstagram.com&_nc_cat=104&_nc_ohc=dohAVAaj_KUAX-J8a2T&edm=APs17CUAAAAA&ccb=7-5&ig_cache_key=MzE1MTIwMjQxOTkxMDY3MjA4MA%3D%3D.2-ccb7-5&oh=00_AfCh5xUgD9jeN8HkwfXVez82yGa4-sckVgdAOh2zk86wqw&oe=65EDAC8B&_nc_sid=10d13bs",
        ],
        brandProductPrice: 30000,
      },
    ],
  },
  {
    id: 6,
    slug: "nine.",
    brandName: "nine.",
    brandCover:
      "https://scontent-los2-1.cdninstagram.com/v/t51.29350-15/395723719_314459577967618_5478896254783542442_n.jpg?stp=dst-jpg_e35&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDk2MC5zZHIifQ&_nc_ht=scontent-los2-1.cdninstagram.com&_nc_cat=110&_nc_ohc=6jto63QD50cAX-LFwGW&edm=ALQROFkBAAAA&ccb=7-5&ig_cache_key=MzIyMzY3MTEyNzMzMDcyNjgxOA%3D%3D.2-ccb7-5&oh=00_AfCt5hf2shuq_jJ10Xwmfj-Ft9DWZGw27PQuTZuabVHnEQ&oe=65ED6BB8&_nc_sid=fc8dfb",
    logo: "https://scontent-los2-1.cdninstagram.com/v/t51.2885-19/422234504_1437227286905929_642003909993193857_n.jpg?stp=dst-jpg_s320x320&_nc_ht=scontent-los2-1.cdninstagram.com&_nc_cat=101&_nc_ohc=7ban-sA75SsAX_IMLwT&edm=AOQ1c0wBAAAA&ccb=7-5&oh=00_AfAZyGkuap_MifPNL2DrtzzeIfRyU8x_tTdbOCGYNGZZdg&oe=65ECD48A&_nc_sid=8b3546",
    brandMotto: "turndasix!",
    products: [
      {
        id: 1,
        brandProductName: "FUCK NINE TEE",
        brandProductimage:
          "https://scontent.cdninstagram.com/v/t51.29350-15/324893822_1131365447560460_8939515620044635345_n.jpg?stp=dst-jpg_e35&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDE3OTkuc2RyIn0&_nc_ht=scontent.cdninstagram.com&_nc_cat=108&_nc_ohc=gFhRcmqIP2wAX_xhn1-&edm=APs17CUBAAAA&ccb=7-5&ig_cache_key=MzAxNTAzNTIwNDg2MTMyNTA5Mw%3D%3D.2-ccb7-5&oh=00_AfA0HcXpnVSDPiM8Qjij35DuaLjlUwcIvKDDrN4aw0Hi5w&oe=65EDBA8A&_nc_sid=10d13b",

        images: [
          "https://scontent.cdninstagram.com/v/t51.29350-15/324893822_1131365447560460_8939515620044635345_n.jpg?stp=dst-jpg_e35&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDE3OTkuc2RyIn0&_nc_ht=scontent.cdninstagram.com&_nc_cat=108&_nc_ohc=gFhRcmqIP2wAX_xhn1-&edm=APs17CUBAAAA&ccb=7-5&ig_cache_key=MzAxNTAzNTIwNDg2MTMyNTA5Mw%3D%3D.2-ccb7-5&oh=00_AfA0HcXpnVSDPiM8Qjij35DuaLjlUwcIvKDDrN4aw0Hi5w&oe=65EDBA8A&_nc_sid=10d13b",

          "https://scontent.cdninstagram.com/v/t51.29350-15/324946352_8650927831615796_4770915516905479658_n.jpg?stp=dst-jpg_e35&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDE3OTcuc2RyIn0&_nc_ht=scontent.cdninstagram.com&_nc_cat=108&_nc_ohc=Ef7WIUOHuA0AX9ZJrMI&edm=APs17CUBAAAA&ccb=7-5&ig_cache_key=MzAxNTAzNTIwNDg1Mjk5OTEyMA%3D%3D.2-ccb7-5&oh=00_AfAlE3yo718mOSGDWMNjrjlUElDJ05AYAiYPI88V9PioEQ&oe=65ECC120&_nc_sid=10d13b",
          "https://scontent.cdninstagram.com/v/t51.29350-15/324714156_832609601146947_122471650298851309_n.jpg?stp=dst-jpg_e35&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDE4MDAuc2RyIn0&_nc_ht=scontent.cdninstagram.com&_nc_cat=103&_nc_ohc=53gUEi6U6y4AX8d86pm&edm=APs17CUBAAAA&ccb=7-5&ig_cache_key=MzAxNTAzNTIwNDg2MTI1NDA2MA%3D%3D.2-ccb7-5&oh=00_AfCfMcmZ_Ailti1EoHZceOVyehdXP52oY9UbjddBRdzfpw&oe=65ECECFF&_nc_sid=10d13b",
          "https://scontent.cdninstagram.com/v/t51.29350-15/325309945_197206559553789_8972526338324572962_n.jpg?stp=dst-jpg_e35&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDE4MDAuc2RyIn0&_nc_ht=scontent.cdninstagram.com&_nc_cat=109&_nc_ohc=Q4IaCc_PsR0AX-xJmCL&edm=APs17CUBAAAA&ccb=7-5&ig_cache_key=MzAxNTAzNTIwNDk3ODYxODU1Ng%3D%3D.2-ccb7-5&oh=00_AfDWQ81XldiSzsxeP_AFK67TCT_7supmaus0ynsSq4jHgg&oe=65ECEE76&_nc_sid=10d13b",
        ],
        brandProductPrice: 25000,
      },
      {
        id: 2,
        brandProductName: "NINE TEE",
        brandProductimage:
          "https://scontent.cdninstagram.com/v/t51.29350-15/338783556_238304585318883_979728337319497177_n.jpg?stp=dst-jpg_e35&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDE4MDAuc2RyIn0&_nc_ht=scontent.cdninstagram.com&_nc_cat=103&_nc_ohc=zSOrCzQJtoMAX8PprJQ&edm=APs17CUBAAAA&ccb=7-5&ig_cache_key=MzA3MDg0NDUzNzU1ODY3NTgwOQ%3D%3D.2-ccb7-5&oh=00_AfCnKEysRWByUh0bu3BkocyXCpdMwhUZMCh-KVgIJY_z_w&oe=65EE177A&_nc_sid=10d13b",
        brandProductPrice: 40000,
        images: [
          "https://scontent.cdninstagram.com/v/t51.29350-15/338783556_238304585318883_979728337319497177_n.jpg?stp=dst-jpg_e35&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDE4MDAuc2RyIn0&_nc_ht=scontent.cdninstagram.com&_nc_cat=103&_nc_ohc=zSOrCzQJtoMAX8PprJQ&edm=APs17CUBAAAA&ccb=7-5&ig_cache_key=MzA3MDg0NDUzNzU1ODY3NTgwOQ%3D%3D.2-ccb7-5&oh=00_AfCnKEysRWByUh0bu3BkocyXCpdMwhUZMCh-KVgIJY_z_w&oe=65EE177A&_nc_sid=10d13b",
          "https://scontent.cdninstagram.com/v/t51.29350-15/338424468_916248849589613_2959373525410064803_n.jpg?stp=dst-jpg_e35&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDE4MDAuc2RyIn0&_nc_ht=scontent.cdninstagram.com&_nc_cat=105&_nc_ohc=jvUHUG1tJV8AX8iN3CV&edm=APs17CUBAAAA&ccb=7-5&ig_cache_key=MzA3MDg0NDUzNzQyNDM0NDIzOA%3D%3D.2-ccb7-5&oh=00_AfCoynR_sc7jeTn6w3PskcswDGgYRgj3Z2buUYksUTL_fg&oe=65EC863A&_nc_sid=10d13b",
          "https://scontent.cdninstagram.com/v/t51.29350-15/338774014_941237287321404_4643196181973420550_n.jpg?stp=dst-jpg_e35&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDE4MDAuc2RyIn0&_nc_ht=scontent.cdninstagram.com&_nc_cat=100&_nc_ohc=_z2eTysphysAX8muU1_&edm=APs17CUBAAAA&ccb=7-5&ig_cache_key=MzA3MDg0NDUzNzQyNDM2OTg3MQ%3D%3D.2-ccb7-5&oh=00_AfAbw-Gnj_S3uvlsb-8VTnfeTWV5aFXOR9WtdEFHw-PNCQ&oe=65EC9710&_nc_sid=10d13b",
          "https://scontent.cdninstagram.com/v/t51.29350-15/338449355_1270767673549403_5133979635603399931_n.jpg?stp=dst-jpg_e35&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDE4MDAuc2RyIn0&_nc_ht=scontent.cdninstagram.com&_nc_cat=111&_nc_ohc=89-X5z6ai-QAX8QOFqR&edm=APs17CUBAAAA&ccb=7-5&ig_cache_key=MzA3MDg0NDUzNzQ0MTMwODM3OA%3D%3D.2-ccb7-5&oh=00_AfBbRwEsNGyjYbdhh3xOXvdLVNCHcsUQfTVQbDLK6SQOag&oe=65ED63F5&_nc_sid=10d13b",
        ],
      },

      {
        id: 3,
        brandProductName: "T U R N D A S I X JERSEY",
        brandProductimage:
          "https://scontent.cdninstagram.com/v/t51.29350-15/362552297_605370751703863_4675485624364345211_n.jpg?stp=dst-jpg_e35&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDE4MDAuc2RyIn0&_nc_ht=scontent.cdninstagram.com&_nc_cat=107&_nc_ohc=PEhUBDtfWxAAX_TEB7x&edm=APs17CUBAAAA&ccb=7-5&ig_cache_key=MzE1MjAxNzQ1NjgxMjI4NjAxOQ%3D%3D.2-ccb7-5&oh=00_AfBW-O8pxbNmB6VxkKuXeHRywPGNuNmj5jPF9lk3vxadRg&oe=65EC72AE&_nc_sid=10d13b",
        images: [
          "https://scontent.cdninstagram.com/v/t51.29350-15/362552297_605370751703863_4675485624364345211_n.jpg?stp=dst-jpg_e35&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDE4MDAuc2RyIn0&_nc_ht=scontent.cdninstagram.com&_nc_cat=107&_nc_ohc=PEhUBDtfWxAAX_TEB7x&edm=APs17CUBAAAA&ccb=7-5&ig_cache_key=MzE1MjAxNzQ1NjgxMjI4NjAxOQ%3D%3D.2-ccb7-5&oh=00_AfBW-O8pxbNmB6VxkKuXeHRywPGNuNmj5jPF9lk3vxadRg&oe=65EC72AE&_nc_sid=10d13b",
          "https://scontent.cdninstagram.com/v/t51.29350-15/361979912_660308989030998_5939251106585634781_n.jpg?stp=dst-jpg_e35&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDE3OTcuc2RyIn0&_nc_ht=scontent.cdninstagram.com&_nc_cat=106&_nc_ohc=BCy0JjsyR2MAX_ONYW4&edm=APs17CUBAAAA&ccb=7-5&ig_cache_key=MzE1MjAxNzQ1NjgxMjMxODcwMQ%3D%3D.2-ccb7-5&oh=00_AfD3ldswxXxSUaTcemeaRbt0cUECXsK9M0rIgN5tlPBGNQ&oe=65EE1B0F&_nc_sid=10d13b",
          "https://scontent.cdninstagram.com/v/t51.29350-15/362009648_1706075463166338_8281090697098394845_n.jpg?stp=dst-jpg_e35&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDE4MDAuc2RyIn0&_nc_ht=scontent.cdninstagram.com&_nc_cat=106&_nc_ohc=Sd3HcLy5bRAAX8gTB8B&edm=APs17CUBAAAA&ccb=7-5&ig_cache_key=MzE1MjAxNzQ1NjgxMjM5NDIxNQ%3D%3D.2-ccb7-5&oh=00_AfB4vUsc4NpeW04yWRTHrsFXDxqNb5oAbspuKwRqYJJE_w&oe=65EDDD7A&_nc_sid=10d13b",
        ],
        brandProductPrice: 55000,
      },
      {
        id: 4,
        brandProductName: "T U R N D A S I X RED JERSEY",
        brandProductimage:
          "https://scontent.cdninstagram.com/v/t51.29350-15/397022883_3263820827249289_409417679715336751_n.jpg?stp=dst-jpg_e35&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDE0NDAuc2RyIn0&_nc_ht=scontent.cdninstagram.com&_nc_cat=109&_nc_ohc=N3Ea7q-QgKUAX-ztyRt&edm=APs17CUBAAAA&ccb=7-5&ig_cache_key=MzIyMzYzNTI3NDQyNjk5MjA1OA%3D%3D.2-ccb7-5&oh=00_AfBJeb6eiDge9xQ24_fSqvnyuo7xqHCZdYe7gwQUhWsMFQ&oe=65EE4BA7&_nc_sid=10d13b",
        images: [
          "https://scontent.cdninstagram.com/v/t51.29350-15/397022883_3263820827249289_409417679715336751_n.jpg?stp=dst-jpg_e35&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDE0NDAuc2RyIn0&_nc_ht=scontent.cdninstagram.com&_nc_cat=109&_nc_ohc=N3Ea7q-QgKUAX-ztyRt&edm=APs17CUBAAAA&ccb=7-5&ig_cache_key=MzIyMzYzNTI3NDQyNjk5MjA1OA%3D%3D.2-ccb7-5&oh=00_AfBJeb6eiDge9xQ24_fSqvnyuo7xqHCZdYe7gwQUhWsMFQ&oe=65EE4BA7&_nc_sid=10d13b",
          "https://scontent.cdninstagram.com/v/t51.29350-15/395762275_669723261933103_5362182929555613962_n.jpg?stp=dst-jpg_e35&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDE0NDAuc2RyIn0&_nc_ht=scontent.cdninstagram.com&_nc_cat=107&_nc_ohc=x9OH2sZgCvkAX9xpz9h&edm=APs17CUBAAAA&ccb=7-5&ig_cache_key=MzIyMzYzNTI3NDQzNTE2NjI5MQ%3D%3D.2-ccb7-5&oh=00_AfDEQbzu2xWvx5PSA4FatLP7IL50jfY3Fmhs8GR699aRIg&oe=65ECC5A8&_nc_sid=10d13b",
          "https://scontent.cdninstagram.com/v/t51.29350-15/426743922_1771738203295376_1674661195551706197_n.jpg?stp=dst-jpg_e35&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDE3OTkuc2RyIn0&_nc_ht=scontent.cdninstagram.com&_nc_cat=108&_nc_ohc=H7xtO1E1mrQAX-v9vm8&edm=APs17CUBAAAA&ccb=7-5&ig_cache_key=MzMwMDUxMDc4OTYxOTkzMTU0OA%3D%3D.2-ccb7-5&oh=00_AfAXAaFRDJd32iwx4vtJq0rM8vRzTcsXGFouxGa9boWRRQ&oe=65EE5C09&_nc_sid=10d13b",
        ],
        brandProductPrice: 55000,
      },
    ],
  },

  {
    id: 5,
    slug: "westn0rth",
    brandName: "westn0rth",
    brandCover:
      "https://scontent.cdninstagram.com/v/t51.29350-15/403901468_317243244531299_6376767711093943092_n.jpg?stp=dst-jpg_e35&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDE4MDAuc2RyIn0&_nc_ht=scontent.cdninstagram.com&_nc_cat=111&_nc_ohc=yh0RtXMCmJ8AX-52G7t&edm=APs17CUBAAAA&ccb=7-5&ig_cache_key=MzI0MzMxMzkwODEwNDE3Mjk4MA%3D%3D.2-ccb7-5&oh=00_AfCOM13Em0H8-lqjND8CbJw1Rgxp8X7JKwvcL0olv-IvfQ&oe=65ED00E5&_nc_sid=10d13b",
    logo: "https://scontent-los2-1.cdninstagram.com/v/t51.2885-19/297076084_426520212838420_1656312490370428634_n.jpg?stp=dst-jpg_s320x320&_nc_ht=scontent-los2-1.cdninstagram.com&_nc_cat=104&_nc_ohc=SgiedyHTezwAX-Lglin&edm=AOQ1c0wBAAAA&ccb=7-5&oh=00_AfAxfrLRcXqUUvvj7xGEwvLruXd4-eUflqacX35C08wXhA&oe=65ED0FD4&_nc_sid=8b3546",
    brandMotto: "DARETOBEDIFFERENT!",
    products: [
      {
        id: 1,
        brandProductName: "BRK/WESTNORTH GASOLINE TEE",
        brandProductimage:
          "https://scontent.cdninstagram.com/v/t51.29350-15/416489490_341405625347031_7236190749780014573_n.jpg?stp=dst-jpg_e35&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDE3OTguc2RyIn0&_nc_ht=scontent.cdninstagram.com&_nc_cat=103&_nc_ohc=vkqm0SrKTWsAX__wvhn&edm=APs17CUBAAAA&ccb=7-5&ig_cache_key=MzI3MzgzMzkyNjA5NzA4NDUzNQ%3D%3D.2-ccb7-5&oh=00_AfDguu4j6LysVEBFpYo7FXJNYpRQM26trI12clV06YS-0w&oe=65EC672C&_nc_sid=10d13b",

        images: [
          "https://scontent.cdninstagram.com/v/t51.29350-15/416489490_341405625347031_7236190749780014573_n.jpg?stp=dst-jpg_e35&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDE3OTguc2RyIn0&_nc_ht=scontent.cdninstagram.com&_nc_cat=103&_nc_ohc=vkqm0SrKTWsAX__wvhn&edm=APs17CUBAAAA&ccb=7-5&ig_cache_key=MzI3MzgzMzkyNjA5NzA4NDUzNQ%3D%3D.2-ccb7-5&oh=00_AfDguu4j6LysVEBFpYo7FXJNYpRQM26trI12clV06YS-0w&oe=65EC672C&_nc_sid=10d13b",

          "https://scontent.cdninstagram.com/v/t51.29350-15/416434373_181295925041281_1013504903275337987_n.jpg?stp=dst-jpg_e35&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDE3OTguc2RyIn0&_nc_ht=scontent.cdninstagram.com&_nc_cat=101&_nc_ohc=Ftb6vQcpaa0AX-r25F9&edm=APs17CUBAAAA&ccb=7-5&ig_cache_key=MzI3MzgzMzkyNjA4MDE0NDE5Nw%3D%3D.2-ccb7-5&oh=00_AfDhpVnh30KVTWSLt1xnU2UkByyMDtP7784gfTML38TrGw&oe=65ECF697&_nc_sid=10d13b",

          "https://scontent.cdninstagram.com/v/t51.29350-15/416611110_1336292374437701_3631023857045954592_n.jpg?stp=dst-jpg_e35&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDE3OTguc2RyIn0&_nc_ht=scontent.cdninstagram.com&_nc_cat=105&_nc_ohc=xrW-RFt2Gy0AX_uPd5E&edm=APs17CUBAAAA&ccb=7-5&ig_cache_key=MzI3MzgzMzkyNTc3ODE0MTQ2Nw%3D%3D.2-ccb7-5&oh=00_AfATYAJlKk-mg_5wsoK5yK9ExXzvUo1t93YwjJR74_JydA&oe=65EC1CE5&_nc_sid=10d13b",

          "https://scontent.cdninstagram.com/v/t51.29350-15/416922973_906561627514954_5330843096369107404_n.jpg?stp=dst-jpg_e35&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDE3OTguc2RyIn0&_nc_ht=scontent.cdninstagram.com&_nc_cat=110&_nc_ohc=Y9ONwawPfZQAX8NJNTb&edm=APs17CUBAAAA&ccb=7-5&ig_cache_key=MzI3MzgzMzkyNTc2OTkyOTQ5OA%3D%3D.2-ccb7-5&oh=00_AfBJFdzN8ffShsRqKvTLDBxXOMnJar8YMGhy4demP2B_QQ&oe=65EBF8EC&_nc_sid=10d13b",
        ],
        brandProductPrice: 25000,
      },
      {
        id: 2,
        brandProductName: "WESTNORTH TEE",
        brandProductimage:
          "https://scontent.cdninstagram.com/v/t51.29350-15/403901468_317243244531299_6376767711093943092_n.jpg?stp=dst-jpg_e35&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDE4MDAuc2RyIn0&_nc_ht=scontent.cdninstagram.com&_nc_cat=111&_nc_ohc=yh0RtXMCmJ8AX-52G7t&edm=APs17CUBAAAA&ccb=7-5&ig_cache_key=MzI0MzMxMzkwODEwNDE3Mjk4MA%3D%3D.2-ccb7-5&oh=00_AfCOM13Em0H8-lqjND8CbJw1Rgxp8X7JKwvcL0olv-IvfQ&oe=65ED00E5&_nc_sid=10d13b",
        brandProductPrice: 40000,
        images: [
          "https://scontent.cdninstagram.com/v/t51.29350-15/403901468_317243244531299_6376767711093943092_n.jpg?stp=dst-jpg_e35&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDE4MDAuc2RyIn0&_nc_ht=scontent.cdninstagram.com&_nc_cat=111&_nc_ohc=yh0RtXMCmJ8AX-52G7t&edm=APs17CUBAAAA&ccb=7-5&ig_cache_key=MzI0MzMxMzkwODEwNDE3Mjk4MA%3D%3D.2-ccb7-5&oh=00_AfCOM13Em0H8-lqjND8CbJw1Rgxp8X7JKwvcL0olv-IvfQ&oe=65ED00E5&_nc_sid=10d13b",
          "https://scontent.cdninstagram.com/v/t51.29350-15/404932488_3586202684998504_5355886791866044381_n.jpg?stp=dst-jpg_e35&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDE4MDAuc2RyIn0&_nc_ht=scontent.cdninstagram.com&_nc_cat=104&_nc_ohc=OF0MA_cEAscAX-nz71Y&edm=APs17CUBAAAA&ccb=7-5&ig_cache_key=MzI0MzMxMzkwODEwNDE3MzA2Mw%3D%3D.2-ccb7-5&oh=00_AfDR_QBgvu8nPMujYIBWQpO8DI86PVEqWMLgvY9JBvvcoA&oe=65EC86AA&_nc_sid=10d13b",
          "https://scontent.cdninstagram.com/v/t51.29350-15/403942440_2446242789049380_7029998549486868092_n.jpg?stp=dst-jpg_e35&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDE4MDAuc2RyIn0&_nc_ht=scontent.cdninstagram.com&_nc_cat=100&_nc_ohc=5pztWeDdvjQAX-Vfog6&edm=APs17CUBAAAA&ccb=7-5&ig_cache_key=MzI0MzMxMzkwODEwNDA2NTk1Ng%3D%3D.2-ccb7-5&oh=00_AfByvEa2wNVFKZVOd7XNc7Nyu2xqXGkpuFkbeenUuKIcAw&oe=65ED7815&_nc_sid=10d13b",
          "https://scontent.cdninstagram.com/v/t51.29350-15/403927564_1972671269767864_8769708250107833086_n.jpg?stp=dst-jpg_e35&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDE4MDAuc2RyIn0&_nc_ht=scontent.cdninstagram.com&_nc_cat=104&_nc_ohc=fshEkjauyeMAX8cKhQr&edm=APs17CUBAAAA&ccb=7-5&ig_cache_key=MzI0MzMxMzkwODQxNDU4MjQwMA%3D%3D.2-ccb7-5&oh=00_AfCmAFb-45wyjrQI2Rv2ZL7hMl6SPuYwQHaWFNI8ZX1Biw&oe=65ECBE4D&_nc_sid=10d13b",
        ],
      },

      {
        id: 3,
        brandProductName: "WESTNORTH CIGAR TEE",
        brandProductimage:
          "https://scontent.cdninstagram.com/v/t51.29350-15/346105085_838472287705879_7432816675606820730_n.jpg?stp=dst-jpg_e35&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDE4MTguc2RyIn0&_nc_ht=scontent.cdninstagram.com&_nc_cat=107&_nc_ohc=hDf_q_HtF3EAX8tS4A2&edm=APs17CUBAAAA&ccb=7-5&ig_cache_key=MzEwMTE4MjQwOTA3Njg1MjIwOA%3D%3D.2-ccb7-5&oh=00_AfAHwPSAbyaPq_zzMAiZd-TAZ43OAn1AFxGtRrqDFpyNqA&oe=65ECA875&_nc_sid=10d13b",
        images: [
          "https://scontent.cdninstagram.com/v/t51.29350-15/346666146_905989293808489_979745151117671518_n.jpg?stp=dst-jpg_e35&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDE4MTguc2RyIn0&_nc_ht=scontent.cdninstagram.com&_nc_cat=101&_nc_ohc=52hTiPoISTcAX-ZD8wA&edm=APs17CUBAAAA&ccb=7-5&ig_cache_key=MzEwMjY3NTk1MTgyNTcwNDYzNA%3D%3D.2-ccb7-5&oh=00_AfCTEoHw7FyS18Zs5QqbrfC4Hup224exAzAFfr6DAwiyMg&oe=65EC892B&_nc_sid=10d13b",
          "https://scontent.cdninstagram.com/v/t51.29350-15/346448956_618559150331489_7106275478803614762_n.jpg?stp=dst-jpg_e15&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xMDgweDEzNjMuc2RyIn0&_nc_ht=scontent.cdninstagram.com&_nc_cat=105&_nc_ohc=-O8bqjkcKoUAX8kcVGC&edm=APs17CUBAAAA&ccb=7-5&ig_cache_key=MzEwMjY3NTk1MTc3NTE4NzA1OA%3D%3D.2-ccb7-5&oh=00_AfDWOWwzlh5Q1DQkilJswazX662v9q_hNM37FbI7U8bG7A&oe=65ECFE58&_nc_sid=10d13b",
        ],
        brandProductPrice: 55000,
      },
    ],
  },

  {
    id: 7,
    slug: "bolapsd",
    brandName: "bolapsd",
    brandCover:
      "https://scontent.cdninstagram.com/v/t51.29350-15/418630554_903230494644528_3000810689044176206_n.jpg?stp=dst-jpg_e35&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDE4MDAuc2RyIn0&_nc_ht=scontent.cdninstagram.com&_nc_cat=100&_nc_ohc=7P8_GZ-8p1MAX-behYt&edm=APs17CUBAAAA&ccb=7-5&ig_cache_key=MzI3ODg3NTYzMjE3MDA0OTQ1Mg%3D%3D.2-ccb7-5&oh=00_AfBngRUJYRBme67IDMQQlfHyawxCHBlanYZQAf7eki-x1w&oe=65ED55AA&_nc_sid=10d13b",
    logo: "https://scontent-los2-1.cdninstagram.com/v/t51.2885-19/429342101_1095202821626782_8544184569913626891_n.jpg?stp=dst-jpg_s320x320&_nc_ht=scontent-los2-1.cdninstagram.com&_nc_cat=110&_nc_ohc=mCr7A4-TQrYAX_i6Hdp&edm=AOQ1c0wBAAAA&ccb=7-5&oh=00_AfDFw4apd0tBzSh5RQkBXVI0SKm9SrD13qjic-WmjdkKzg&oe=65EE2E45&_nc_sid=8b3546",
    brandMotto: "THIS LIFE I LIVE IS FOREVER",
    products: [
      {
        id: 1,
        brandProductName: "ROCKSTA JERSEY",
        brandProductimage:
          "https://scontent.cdninstagram.com/v/t51.29350-15/401477478_327090696724276_8390877029931727619_n.jpg?stp=dst-jpg_e35&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDE4MDAuc2RyIn0&_nc_ht=scontent.cdninstagram.com&_nc_cat=104&_nc_ohc=_0L28bRpDvYAX9xxesf&edm=APs17CUBAAAA&ccb=7-5&ig_cache_key=MzIzNDUzNjAyNjIzMDc3MTQ3NA%3D%3D.2-ccb7-5&oh=00_AfDBiWR9EFc7o5MzwK3m9QNNgOT6CwxpzqlBkd4Q-z6U6w&oe=65ED999B&_nc_sid=10d13b",

        images: [
          "https://scontent.cdninstagram.com/v/t51.29350-15/401477478_327090696724276_8390877029931727619_n.jpg?stp=dst-jpg_e35&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDE4MDAuc2RyIn0&_nc_ht=scontent.cdninstagram.com&_nc_cat=104&_nc_ohc=_0L28bRpDvYAX9xxesf&edm=APs17CUBAAAA&ccb=7-5&ig_cache_key=MzIzNDUzNjAyNjIzMDc3MTQ3NA%3D%3D.2-ccb7-5&oh=00_AfDBiWR9EFc7o5MzwK3m9QNNgOT6CwxpzqlBkd4Q-z6U6w&oe=65ED999B&_nc_sid=10d13b",

          "https://scontent.cdninstagram.com/v/t51.29350-15/418614235_322189930793314_2780300446646418115_n.jpg?stp=dst-jpg_e35&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDE4MDAuc2RyIn0&_nc_ht=scontent.cdninstagram.com&_nc_cat=110&_nc_ohc=-g8CkK5Qz-AAX96JNpI&edm=APs17CUBAAAA&ccb=7-5&ig_cache_key=MzI3ODg3NTU0ODk2MzQ1Mjg5Nw%3D%3D.2-ccb7-5&oh=00_AfAGIbwDfouYyoUHZ78jNgwEnYhRDtHlcYrARnV2YDl3bg&oe=65ECF9F0&_nc_sid=10d13b",

          "https://scontent.cdninstagram.com/v/t51.29350-15/418417948_680214327649359_2385093807266536876_n.jpg?stp=dst-jpg_e35&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDE4MDAuc2RyIn0&_nc_ht=scontent.cdninstagram.com&_nc_cat=103&_nc_ohc=YjIjc7hDfZkAX-ei2xW&edm=APs17CUBAAAA&ccb=7-5&ig_cache_key=MzI3ODg3NTU0ODk2MzUyNjM1Mw%3D%3D.2-ccb7-5&oh=00_AfBEPojTRvYDNYr6jgOwqnGr6gXNbb22Mw7kfrIU4lFeSQ&oe=65EE365D&_nc_sid=10d13b",
          "https://scontent.cdninstagram.com/v/t51.29350-15/418748966_730838078711599_4114830826000404606_n.jpg?stp=dst-jpg_e35&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDE3OTkuc2RyIn0&_nc_ht=scontent.cdninstagram.com&_nc_cat=107&_nc_ohc=t33Yc88vt7EAX9LvhUt&edm=APs17CUBAAAA&ccb=7-5&ig_cache_key=MzI3ODg3NTU0ODk0Njc2NDc0OQ%3D%3D.2-ccb7-5&oh=00_AfDxpyl4U1hlZcHXq2jIbmXRVHOJTwoJ-rb4iJd5GSORPQ&oe=65EDB0F0&_nc_sid=10d13b",
        ],
        brandProductPrice: 25000,
      },
      {
        id: 2,
        brandProductName: "BOLLYWOOD POLO",
        brandProductimage:
          "https://scontent.cdninstagram.com/v/t51.29350-15/404902312_2610342192467010_2659254787846887495_n.jpg?stp=dst-jpg_e35&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDE4MDAuc2RyIn0&_nc_ht=scontent.cdninstagram.com&_nc_cat=106&_nc_ohc=_y2TTZNc_L8AX8zNurS&edm=APs17CUBAAAA&ccb=7-5&ig_cache_key=MzI0NTU3MjE1MzI0NzA3MTM4Mw%3D%3D.2-ccb7-5&oh=00_AfBgRpUUD8ru9dYlGA4WfiU_OCZZPRQgx8zPw9GZ3s76bA&oe=65EDEC3F&_nc_sid=10d13b",
        brandProductPrice: 40000,
        images: [
          "https://scontent.cdninstagram.com/v/t51.29350-15/404902312_2610342192467010_2659254787846887495_n.jpg?stp=dst-jpg_e35&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDE4MDAuc2RyIn0&_nc_ht=scontent.cdninstagram.com&_nc_cat=106&_nc_ohc=_y2TTZNc_L8AX8zNurS&edm=APs17CUBAAAA&ccb=7-5&ig_cache_key=MzI0NTU3MjE1MzI0NzA3MTM4Mw%3D%3D.2-ccb7-5&oh=00_AfBgRpUUD8ru9dYlGA4WfiU_OCZZPRQgx8zPw9GZ3s76bA&oe=65EDEC3F&_nc_sid=10d13b",
          "https://scontent.cdninstagram.com/v/t51.29350-15/419298993_681471870545304_7527732205266600401_n.jpg?stp=dst-jpg_e35&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDE3OTkuc2RyIn0&_nc_ht=scontent.cdninstagram.com&_nc_cat=100&_nc_ohc=lYdmerOtaykAX8fZjH4&edm=APs17CUBAAAA&ccb=7-5&ig_cache_key=MzI3ODg3NTYzMjE3ODQ2MDgzNw%3D%3D.2-ccb7-5&oh=00_AfCbepMa4gsTTCFdhqEggqdzVeA_4PlJa4bsxElWL0h98w&oe=65ED23D9&_nc_sid=10d13b",
          "https://scontent.cdninstagram.com/v/t51.29350-15/418626238_761915942636597_8157473624812327256_n.jpg?stp=dst-jpg_e35&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDE3OTkuc2RyIn0&_nc_ht=scontent.cdninstagram.com&_nc_cat=105&_nc_ohc=u3deaLYWg-oAX-j_8m3&edm=APs17CUBAAAA&ccb=7-5&ig_cache_key=MzI3ODg3NTYzMjE2OTk3Nzg1OA%3D%3D.2-ccb7-5&oh=00_AfC7T5mcoljLzvO1iWeCJYx3t37PHkp-pDnSSam1ob3gjA&oe=65ECC188&_nc_sid=10d13b",
          "https://scontent.cdninstagram.com/v/t51.29350-15/418647941_1059235148674743_6111682955011473422_n.jpg?stp=dst-jpg_e35&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDE3OTkuc2RyIn0&_nc_ht=scontent.cdninstagram.com&_nc_cat=103&_nc_ohc=v-I1eATcLlAAX-UbNgH&edm=APs17CUBAAAA&ccb=7-5&ig_cache_key=MzI3ODg3NTYzMjE0NDc2NTY1Ng%3D%3D.2-ccb7-5&oh=00_AfDSevRILV0hrQd0JEse5whRKevhcC19nZ4t68IkIwcjZw&oe=65EDA866&_nc_sid=10d13b",
        ],
      },

      {
        id: 3,
        brandProductName: "BOLLYWOOD FLAG",
        brandProductimage:
          "https://bolapsd.com/cdn/shop/files/rsz_bollywood-flag.jpg?v=1704884000&width=1426",
        images: [
          "https://bolapsd.com/cdn/shop/files/rsz_bollywood-flag.jpg?v=1704884000&width=1426",
        ],
        brandProductPrice: 55000,
      },
    ],
  },
];

const resolvers = {
  Query: {
    brand: () => brand,
    product: (parent, args, ctx) => {
      const productData = brand.find((item) => {
        return item.slug === args.slug;
      });
      return productData;
    },
  },
};

async function main() {
  const server = new ApolloServer({
    typeDefs,
    resolvers,
  });

  const { url } = await startStandaloneServer(server, {
    listen: { port: process.env.PORT || 4200 },
  });

  console.log(`🚀  Server ready at: ${url}`);
}

main().catch((error) => console.error("Error starting server:", error));
