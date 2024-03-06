const { ApolloServer } = require("@apollo/server");
const { startStandaloneServer } = require("@apollo/server/standalone");

const typeDefs = `
  type Brands {
    id: ID
brandName: String
brandCover: String
brandMotto: String
 brandProductName1: String
brandProductName2: String
brandProductName3: String
brandProductName4: String
brandProductimage1: String
brandProductimage2: String
brandProductimage3: String
brandProductimage4: String
brandProduct1image1: String
brandProduct1image2: String
brandProduct1image3: String
brandProduct1image4: String
brandProduct2image1: String
brandProduct2image2: String
brandProduct2image3: String
brandProduct2image4: String
brandProduct3image1: String
brandProduct3image2: String
brandProduct3image3: String
brandProduct3image4: String
brandProduct4image1: String
brandProduct4image2: String
brandProduct4image3: String
brandProduct4image4: String
logo: String
brandProductPrice1:Int
brandProductPrice2:Int
brandProductPrice3:Int
brandProductPrice4:Int
slug:String
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
      "https://scontent.cdninstagram.com/v/t51.29350-15/411922737_743285227662770_4144328263635409229_n.jpg?stp=dst-jpg_e35&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDE4MDAuc2RyIn0&_nc_ht=scontent.cdninstagram.com&_nc_cat=102&_nc_ohc=vZr8uxiv6x0AX-0ENqY&edm=APs17CUBAAAA&ccb=7-5&ig_cache_key=MzI1OTYxNzkwMTQyODE4MjY5Mw%3D%3D.2-ccb7-5&oh=00_AfCpIPNUQF5XN3qqU0l0w-pFMqDotztNC4p_4pB-LWbpVg&oe=65EC3BB4&_nc_sid=10d13b",
    logo: "https://scontent.cdninstagram.com/v/t51.2885-19/275242425_648819119566048_5381673723199894110_n.jpg?stp=dst-jpg_s150x150&_nc_ht=scontent.cdninstagram.com&_nc_cat=104&_nc_ohc=3Jd2_yg9eW4AX-EwjhT&edm=APs17CUBAAAA&ccb=7-5&oh=00_AfAeLYtGHwfahui2zadyGiq9-uRP4Xm8ekjEuoGyyxAw5Q&oe=65EB08F8&_nc_sid=10d13b",
    brandMotto: "United We Stand",
    brandProductName1: "Seek First Thy Kingdom",
    brandProductName2: "Hockey Jersey",
    brandProductName3: "Batman Tee",
    brandProductName4: "Join The Clan",
    brandProductimage1:
      "https://scontent.cdninstagram.com/v/t51.29350-15/421952612_917608806685732_6204640045184986581_n.jpg?stp=dst-jpg_e35&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDE4MDAuc2RyIn0&_nc_ht=scontent.cdninstagram.com&_nc_cat=104&_nc_ohc=yS8xhv-qz4IAX8xcr4S&edm=APs17CUBAAAA&ccb=7-5&ig_cache_key=MzI4ODY1NzEzMjMxNDAzNTY2MA%3D%3D.2-ccb7-5&oh=00_AfDcPgNzJJTTbTil_6D3zXEVb2GqMjQoYnnSjAOURuDqzA&oe=65EC4643&_nc_sid=10d13b",
    brandProductimage2:
      "https://scontent.cdninstagram.com/v/t51.29350-15/405770877_7098168463562450_7112941450232575436_n.jpg?stp=dst-jpg_e35&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDE3OTguc2RyIn0&_nc_ht=scontent.cdninstagram.com&_nc_cat=102&_nc_ohc=dqtS8V2DbOAAX96an-Z&edm=APs17CUBAAAA&ccb=7-5&ig_cache_key=MzI1MDM5NTIxMjg1OTgxMDcyMw%3D%3D.2-ccb7-5&oh=00_AfDxtiT4eXgYRDZJn4VmCENZFpIhbmnpYgbv1eeSfwYnCQ&oe=65EC6064&_nc_sid=10d13b",
    brandProductimage3:
      "https://scontent.cdninstagram.com/v/t51.29350-15/429981125_772482514941927_8281498572439568011_n.jpg?stp=dst-jpg_e35&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDE4MDAuc2RyIn0&_nc_ht=scontent.cdninstagram.com&_nc_cat=103&_nc_ohc=VScAB5gVZToAX-un57R&edm=APs17CUBAAAA&ccb=7-5&ig_cache_key=MzMxMTQ0NTYxNTI4NTY4MTgwNw%3D%3D.2-ccb7-5&oh=00_AfDx4lVP0F9KdWgwfftCsZ6fRqms_N7D4NqUtbCsg3x36Q&oe=65EB4B35&_nc_sid=10d13b",
    brandProductimage4:
      "https://scontent.cdninstagram.com/v/t51.29350-15/193669402_3969986693048962_7777146569669072011_n.jpg?stp=dst-jpg_e35&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDE0Mzkuc2RyIn0&_nc_ht=scontent.cdninstagram.com&_nc_cat=110&_nc_ohc=bQL5oBkm8K0AX-GERGg&edm=APs17CUBAAAA&ccb=7-5&ig_cache_key=MjU4NDQ3MTE5NDI1MzA3NTIyNA%3D%3D.2-ccb7-5&oh=00_AfAIs4NMpLqj8nx16blpBZvTgWv3b3nvN-1YGCOUBE4Ifg&oe=65ECC434&_nc_sid=10d13b",
    brandProduct1image1:
      "https://scontent.cdninstagram.com/v/t51.29350-15/420657147_910649506964034_9143675866023978291_n.jpg?stp=dst-jpg_e35&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDE4MDAuc2RyIn0&_nc_ht=scontent.cdninstagram.com&_nc_cat=106&_nc_ohc=tG965QHDp9EAX8vnJXX&edm=APs17CUBAAAA&ccb=7-5&ig_cache_key=MzI4NjU5NTg4ODQzODUzOTUxNA%3D%3D.2-ccb7-5&oh=00_AfAx5pKjp2ANXHB3c-5USEQ9QvKqKGGSnlvOwTQ0gz7NPg&oe=65EB5503&_nc_sid=10d13b",
    brandProduct1image2:
      "https://scontent.cdninstagram.com/v/t51.29350-15/420499107_753425996304175_6494886621838392795_n.jpg?stp=dst-jpg_e35&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDE4MDAuc2RyIn0&_nc_ht=scontent.cdninstagram.com&_nc_cat=107&_nc_ohc=WbJA5-QzUm4AX8HUZ7S&edm=APs17CUBAAAA&ccb=7-5&ig_cache_key=MzI4NjU5NTg4ODQ0NjgxOTYwNw%3D%3D.2-ccb7-5&oh=00_AfBs50QsvAUyQVe4ysYf1UX-lhw1uVuqh0Ek3AEj0Jz3OA&oe=65EC8817&_nc_sid=10d13b",
    brandProduct1image3:
      "https://scontent.cdninstagram.com/v/t51.29350-15/420493619_268631976057458_2401811498308353828_n.jpg?stp=dst-jpg_e35&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDE4MDAuc2RyIn0&_nc_ht=scontent.cdninstagram.com&_nc_cat=102&_nc_ohc=5PRgL8yYivwAX8J0zBZ&edm=APs17CUBAAAA&ccb=7-5&ig_cache_key=MzI4NjU5NTg4ODc1NzI0ODA0NA%3D%3D.2-ccb7-5&oh=00_AfBfOBCkRLk5egxzH_lhfiU83HFJdhheKljLrkdy2tq4Uw&oe=65EC48A1&_nc_sid=10d13b",
    brandProduct1image4:
      "https://scontent.cdninstagram.com/v/t51.29350-15/420646906_393386226535186_8459946037984059705_n.jpg?stp=dst-jpg_e35&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDE4MDAuc2RyIn0&_nc_ht=scontent.cdninstagram.com&_nc_cat=110&_nc_ohc=XxUrzY74kHMAX_x28mC&edm=APs17CUBAAAA&ccb=7-5&ig_cache_key=MzI4NjU5NTg4ODc0ODY5NTA0MA%3D%3D.2-ccb7-5&oh=00_AfCvKYO_azmFn5oU2Zk0M0vBFapzI4DSsu7mbqPnmFgPnw&oe=65EC0013&_nc_sid=10d13b",
    brandProduct2image1:
      "https://scontent.cdninstagram.com/v/t51.29350-15/407387562_586380436955388_5253753611060446905_n.jpg?stp=dst-jpg_e35&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDE3OTguc2RyIn0&_nc_ht=scontent.cdninstagram.com&_nc_cat=100&_nc_ohc=ckWfikx3o8AAX_5tgN8&edm=APs17CUBAAAA&ccb=7-5&ig_cache_key=MzI1MDM5NTIxMjg1OTgyMTQ0NQ%3D%3D.2-ccb7-5&oh=00_AfCfoNtoYqGCN4kRKiqehdRQFp_ZIfJCvjIbZ4CS9loNCA&oe=65EBC235&_nc_sid=10d13b",
    brandProduct2image2:
      "https://scontent.cdninstagram.com/v/t51.29350-15/405770877_7098168463562450_7112941450232575436_n.jpg?stp=dst-jpg_e35&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDE3OTguc2RyIn0&_nc_ht=scontent.cdninstagram.com&_nc_cat=102&_nc_ohc=dqtS8V2DbOAAX96an-Z&edm=APs17CUBAAAA&ccb=7-5&ig_cache_key=MzI1MDM5NTIxMjg1OTgxMDcyMw%3D%3D.2-ccb7-5&oh=00_AfDxtiT4eXgYRDZJn4VmCENZFpIhbmnpYgbv1eeSfwYnCQ&oe=65EC6064&_nc_sid=10d13b",
    brandProduct2image3:
      "https://scontent.cdninstagram.com/v/t51.29350-15/393113853_365297349513802_5964985318986008049_n.jpg?stp=dst-jpg_e35&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDE3OTguc2RyIn0&_nc_ht=scontent.cdninstagram.com&_nc_cat=110&_nc_ohc=jggCPdLMIq0AX93hDcQ&edm=APs17CUBAAAA&ccb=7-5&ig_cache_key=MzI1MDM5NTIxMzE1MzMyODA4MQ%3D%3D.2-ccb7-5&oh=00_AfCZV1ejronUesKfXcSZePek13DmGW1K8o_BYBV-xUFlNQ&oe=65EB472D&_nc_sid=10d13b",
    brandProduct2image4:
      "https://scontent.cdninstagram.com/v/t51.29350-15/405782755_1390839758224225_2386385641847312853_n.jpg?stp=dst-jpg_e35&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDE3OTguc2RyIn0&_nc_ht=scontent.cdninstagram.com&_nc_cat=101&_nc_ohc=Xrwgoq4dNhkAX9JzMY-&edm=APs17CUBAAAA&ccb=7-5&ig_cache_key=MzI1MDM5NTIxMjk0MzUyNTQ5Mg%3D%3D.2-ccb7-5&oh=00_AfBIQqGAWS_JwCEmOUlMstxJ3nDISMHPkPsLHB8abSCuvA&oe=65EB99FE&_nc_sid=10d13b",
    brandProduct3image1:
      "https://scontent.cdninstagram.com/v/t51.29350-15/429847162_365629143063915_11370214939207338_n.jpg?stp=dst-jpg_e35&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDE4MDAuc2RyIn0&_nc_ht=scontent.cdninstagram.com&_nc_cat=103&_nc_ohc=FjWkXJQWc88AX_jqQ0t&edm=APs17CUBAAAA&ccb=7-5&ig_cache_key=MzMxMTQ0NTYxNTI4NTg5MzM4NA%3D%3D.2-ccb7-5&oh=00_AfAKFU-Bvx7h7Gka0GjtNvYUd_T6khV77UPLTJiU2bSxig&oe=65EC8AD1&_nc_sid=10d13b",
    brandProduct3image2:
      "https://scontent.cdninstagram.com/v/t51.29350-15/429847162_365629143063915_11370214939207338_n.jpg?stp=dst-jpg_e35&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDE4MDAuc2RyIn0&_nc_ht=scontent.cdninstagram.com&_nc_cat=103&_nc_ohc=FjWkXJQWc88AX_jqQ0t&edm=APs17CUBAAAA&ccb=7-5&ig_cache_key=MzMxMTQ0NTYxNTI4NTg5MzM4NA%3D%3D.2-ccb7-5&oh=00_AfAKFU-Bvx7h7Gka0GjtNvYUd_T6khV77UPLTJiU2bSxig&oe=65EC8AD1&_nc_sid=10d13b",
    brandProduct3image3:
      "https://scontent.cdninstagram.com/v/t51.29350-15/429981125_772482514941927_8281498572439568011_n.jpg?stp=dst-jpg_e35&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDE4MDAuc2RyIn0&_nc_ht=scontent.cdninstagram.com&_nc_cat=103&_nc_ohc=VScAB5gVZToAX-un57R&edm=APs17CUBAAAA&ccb=7-5&ig_cache_key=MzMxMTQ0NTYxNTI4NTY4MTgwNw%3D%3D.2-ccb7-5&oh=00_AfDx4lVP0F9KdWgwfftCsZ6fRqms_N7D4NqUtbCsg3x36Q&oe=65EB4B35&_nc_sid=10d13b",
    brandProduct3image4:
      "https://scontent.cdninstagram.com/v/t51.29350-15/429885383_632269745709900_1137097610625239776_n.jpg?stp=dst-jpg_e35&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDE4MDAuc2RyIn0&_nc_ht=scontent.cdninstagram.com&_nc_cat=100&_nc_ohc=L_1zOPSsHKIAX8_jMVj&edm=APs17CUBAAAA&ccb=7-5&ig_cache_key=MzMxMTQ0NTYxNTU4Nzg0NjI2Ng%3D%3D.2-ccb7-5&oh=00_AfBQe0aAnf04x7fIrbXKUd-20KstoGIsHH8PPGB42CZ4yg&oe=65ECBBEC&_nc_sid=10d13b",
    brandProduct4image1:
      "https://scontent.cdninstagram.com/v/t51.29350-15/193669402_3969986693048962_7777146569669072011_n.jpg?stp=dst-jpg_e35&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDE0Mzkuc2RyIn0&_nc_ht=scontent.cdninstagram.com&_nc_cat=110&_nc_ohc=bQL5oBkm8K0AX-GERGg&edm=APs17CUBAAAA&ccb=7-5&ig_cache_key=MjU4NDQ3MTE5NDI1MzA3NTIyNA%3D%3D.2-ccb7-5&oh=00_AfAIs4NMpLqj8nx16blpBZvTgWv3b3nvN-1YGCOUBE4Ifg&oe=65ECC434&_nc_sid=10d13b",
    brandProduct4image2:
      "https://scontent.cdninstagram.com/v/t51.29350-15/193955026_334533838092224_1445683116161041603_n.jpg?stp=dst-jpg_e35&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDE0NDAuc2RyIn0&_nc_ht=scontent.cdninstagram.com&_nc_cat=108&_nc_ohc=EajhM_c6iOUAX9SZpcP&edm=APs17CUBAAAA&ccb=7-5&ig_cache_key=MjU4NDQ3MTE5NDI5NDk4NzA3Nw%3D%3D.2-ccb7-5&oh=00_AfAB8LutZfJkC6cynKQsM9oVdiBXs86BjmO8dJ5zCG9Aqg&oe=65EBA353&_nc_sid=10d13b",
    brandProduct4image3:
      "https://scontent.cdninstagram.com/v/t51.29350-15/194479770_246365257286451_8210419427342959789_n.jpg?stp=dst-jpg_e35&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDE0NDAuc2RyIn0&_nc_ht=scontent.cdninstagram.com&_nc_cat=103&_nc_ohc=_J3BkuTGagIAX-HM1p0&edm=APs17CUBAAAA&ccb=7-5&ig_cache_key=MjU4NDQ3MTE5NDI3ODIzOTk4NQ%3D%3D.2-ccb7-5&oh=00_AfBUaB2XV0zIiuLXq7GI6YqlZkzuZr_LP2McdkKtD1sauw&oe=65ECFA5D&_nc_sid=10d13b",
    brandProduct4image4:
      "https://scontent.cdninstagram.com/v/t51.29350-15/194354933_272632754648865_6138147424899669688_n.jpg?stp=dst-jpg_e35&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDE0NDAuc2RyIn0&_nc_ht=scontent.cdninstagram.com&_nc_cat=109&_nc_ohc=o3oK3cfg6DgAX_4NMFu&edm=APs17CUBAAAA&ccb=7-5&ig_cache_key=MjU4NDQ3MTE5NDI3ODA4NTYyNQ%3D%3D.2-ccb7-5&oh=00_AfCZvtn0OJ7rzVX79groSlQRB3wb5M-1i-5KstXGFr5j1w&oe=65EB6936&_nc_sid=10d13b",
    brandProductPrice1: 10000,
    brandProductPrice2: 10000,
    brandProductPrice3: 10000,
    brandProductPrice4: 10000,
  },
  {
    id: 3,
    slug: "Brk Academy",
    brandName: "Brk Academy",
    brandCover:
      "https://scontent.cdninstagram.com/v/t51.29350-15/420662382_355928010721690_8536763653366393151_n.jpg?stp=dst-jpg_e35&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi45MDB4MTEyNS5zZHIifQ&_nc_ht=scontent.cdninstagram.com&_nc_cat=110&_nc_ohc=6Lc6sD6vIdoAX_B-BMb&edm=APs17CUBAAAA&ccb=7-5&ig_cache_key=MzI4NjE2MzM2NTQ5MzQyOTg0Ng%3D%3D.2-ccb7-5&oh=00_AfArlLC7dq_Xa4RCT7kayL1MqW_ufjEbRfNacubolzG4mQ&oe=65EA946E&_nc_sid=10d13b",
    logo: "https://scontent-los2-1.cdninstagram.com/v/t51.2885-19/194983658_853983801929896_3448874707843458180_n.jpg?stp=dst-jpg_s320x320&_nc_ht=scontent-los2-1.cdninstagram.com&_nc_cat=104&_nc_ohc=6O8azxWLdd0AX_bQgG3&edm=AOQ1c0wBAAAA&ccb=7-5&oh=00_AfCC7tdndzeWe81sMP5GFXrPwxZoI05tKynUTk7v2YiH5g&oe=65EBC0F1&_nc_sid=8b3546",
    brandMotto: "Spread Love And Positivity",
    brandProductName2: "Brk Retro Jersey",
    brandProductName3: "Brk x Revamp Mesh Shorts",
    brandProductName1: "Osadebe Catholic Jersey",
    brandProductName4: "BRK ACADEMY/ WESTNORTH GASOLINE TEE",
    brandProductimage1:
      "https://scontent.cdninstagram.com/v/t51.29350-15/418047157_2624165401092175_4011145983563249332_n.jpg?stp=dst-jpg_e35&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDE3OTguc2RyIn0&_nc_ht=scontent.cdninstagram.com&_nc_cat=107&_nc_ohc=wNr15AxRtoAAX9jKnPo&edm=APs17CUBAAAA&ccb=7-5&ig_cache_key=MzI3NTgzODIyNzA4NjQxMzU3NQ%3D%3D.2-ccb7-5&oh=00_AfBvEzrcmAgObB7HG7jhtB5Gm85jn4coK6kCdTHbd-sM3Q&oe=65EC2CFE&_nc_sid=10d13b",
    brandProductimage2:
      "https://scontent.cdninstagram.com/v/t51.29350-15/417186438_687052410286513_1275783866342726849_n.jpg?stp=dst-jpg_e35&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDE3OTguc2RyIn0&_nc_ht=scontent.cdninstagram.com&_nc_cat=101&_nc_ohc=vTb4uEFDvcMAX9wibOV&edm=APs17CUBAAAA&ccb=7-5&ig_cache_key=MzI3NTI5NzQzMDg4NDc3Mjg0NA%3D%3D.2-ccb7-5&oh=00_AfCwMOiceo5Fb6SW-hV6Gatf_OIennN4jlXJMt6ARN3jzg&oe=65EB86D9&_nc_sid=10d13b",
    brandProductimage3:
      "https://scontent.cdninstagram.com/v/t51.29350-15/417900923_1853048758457732_5320940674269641615_n.jpg?stp=dst-jpg_e35&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDE3OTguc2RyIn0&_nc_ht=scontent.cdninstagram.com&_nc_cat=108&_nc_ohc=lpewR9le3_wAX9ggTCv&edm=APs17CUBAAAA&ccb=7-5&ig_cache_key=MzI3NTgzNzY3MzkzMzExMTgyMA%3D%3D.2-ccb7-5&oh=00_AfChJmsc9M6glfuQcWdZmkwh8O9EuvKTFsHy-2hFDoQ0hQ&oe=65ECE0BC&_nc_sid=10d13b",
    brandProductimage4:
      "https://scontent.cdninstagram.com/v/t51.29350-15/416489490_341405625347031_7236190749780014573_n.jpg?stp=dst-jpg_e35&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDE3OTguc2RyIn0&_nc_ht=scontent.cdninstagram.com&_nc_cat=103&_nc_ohc=vkqm0SrKTWsAX__wvhn&edm=APs17CUBAAAA&ccb=7-5&ig_cache_key=MzI3MzgzMzkyNjA5NzA4NDUzNQ%3D%3D.2-ccb7-5&oh=00_AfDguu4j6LysVEBFpYo7FXJNYpRQM26trI12clV06YS-0w&oe=65EC672C&_nc_sid=10d13b",
    brandProduct1image2:
      "https://scontent.cdninstagram.com/v/t51.29350-15/417728185_1012194916529154_3733672043662903917_n.jpg?stp=dst-jpg_e35&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDE3OTguc2RyIn0&_nc_ht=scontent.cdninstagram.com&_nc_cat=106&_nc_ohc=dW76OVvSE0oAX8jTSh5&edm=APs17CUBAAAA&ccb=7-5&ig_cache_key=MzI3NTgzODIyNzA5NDgzMjM4OA%3D%3D.2-ccb7-5&oh=00_AfBY6w6oaKA97occgwdEvNVBt9gtKSR3WkvHybITlrSerQ&oe=65EB77D4&_nc_sid=10d13b",
    brandProduct1image1:
      "https://scontent.cdninstagram.com/v/t51.29350-15/417385529_729649142430783_1840447346072046918_n.jpg?stp=dst-jpg_e35_p720x720&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDE3OTguc2RyIn0&_nc_ht=scontent.cdninstagram.com&_nc_cat=103&_nc_ohc=c924KU5ZRLAAX9caCop&edm=APs17CUBAAAA&ccb=7-5&ig_cache_key=MzI3NTgzODIyNzA5NDc2MzA1MQ%3D%3D.2-ccb7-5&oh=00_AfByX3PJYtB2dpm6JKWPjPJ3azPm1icg67IIEx83fkp5pA&oe=65ECE2B6&_nc_sid=10d13b",
    brandProduct1image3:
      "https://scontent.cdninstagram.com/v/t51.29350-15/418047157_2624165401092175_4011145983563249332_n.jpg?stp=dst-jpg_e35&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDE3OTguc2RyIn0&_nc_ht=scontent.cdninstagram.com&_nc_cat=107&_nc_ohc=wNr15AxRtoAAX9jKnPo&edm=APs17CUBAAAA&ccb=7-5&ig_cache_key=MzI3NTgzODIyNzA4NjQxMzU3NQ%3D%3D.2-ccb7-5&oh=00_AfBvEzrcmAgObB7HG7jhtB5Gm85jn4coK6kCdTHbd-sM3Q&oe=65EC2CFE&_nc_sid=10d13b",
    brandProduct1image4:
      "https://scontent.cdninstagram.com/v/t51.29350-15/417399098_777653921066639_3780024657751597073_n.jpg?stp=dst-jpg_e35&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDE3OTguc2RyIn0&_nc_ht=scontent.cdninstagram.com&_nc_cat=111&_nc_ohc=Zk2N2BwVnI4AX9kU9U0&edm=APs17CUBAAAA&ccb=7-5&ig_cache_key=MzI3NTgzODIyNzA5NDgwMjEzNA%3D%3D.2-ccb7-5&oh=00_AfDHEDw4HGBQgaidy709eZYtWb6GbOosMLS_WeoNWm9oOQ&oe=65EBADA8&_nc_sid=10d13b",

    brandProduct2image1:
      "https://scontent.cdninstagram.com/v/t51.29350-15/417186438_687052410286513_1275783866342726849_n.jpg?stp=dst-jpg_e35&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDE3OTguc2RyIn0&_nc_ht=scontent.cdninstagram.com&_nc_cat=101&_nc_ohc=vTb4uEFDvcMAX9wibOV&edm=APs17CUBAAAA&ccb=7-5&ig_cache_key=MzI3NTI5NzQzMDg4NDc3Mjg0NA%3D%3D.2-ccb7-5&oh=00_AfCwMOiceo5Fb6SW-hV6Gatf_OIennN4jlXJMt6ARN3jzg&oe=65EB86D9&_nc_sid=10d13b",
    brandProduct2image2:
      "https://scontent.cdninstagram.com/v/t51.29350-15/417194123_1496290384551126_9222081720297168109_n.jpg?stp=dst-jpg_e35&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDE3OTguc2RyIn0&_nc_ht=scontent.cdninstagram.com&_nc_cat=106&_nc_ohc=Qm4NSKVv5h0AX9_T4y9&edm=APs17CUBAAAA&ccb=7-5&ig_cache_key=MzI3NTI5NzQzMDg5MzE2OTgyOA%3D%3D.2-ccb7-5&oh=00_AfA-hBCrXuQXU6dWT8kK49kJFFzy5hLV62NOgdJstr6pHw&oe=65ECC88D&_nc_sid=10d13b",
    brandProduct2image3:
      "https://scontent.cdninstagram.com/v/t51.29350-15/417426714_930793702094220_3300402134744269056_n.jpg?stp=dst-jpg_e35&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDE3OTguc2RyIn0&_nc_ht=scontent.cdninstagram.com&_nc_cat=100&_nc_ohc=ME5JByX-75kAX9wbYfy&edm=APs17CUBAAAA&ccb=7-5&ig_cache_key=MzI3NTI5NzQzMDg4NDY3MDM4NA%3D%3D.2-ccb7-5&oh=00_AfDAltoYeuJiVVWHkue6qJMxagKmQ_zEQbFChwq1GIAUkw&oe=65EBB220&_nc_sid=10d13b",
    brandProduct2image4:
      "https://scontent.cdninstagram.com/v/t51.29350-15/416895460_1112254116451957_2101394281225736064_n.jpg?stp=dst-jpg_e35&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDE3OTguc2RyIn0&_nc_ht=scontent.cdninstagram.com&_nc_cat=101&_nc_ohc=WohPsPfJGYUAX-q90at&edm=APs17CUBAAAA&ccb=7-5&ig_cache_key=MzI3NTI5NzQzMDg4NDgzNjYwMw%3D%3D.2-ccb7-5&oh=00_AfC_WdiqW8YE0XGl0_JWO-nE2SPLOUXdLzCFw2Xrt1IS1g&oe=65ED0BFA&_nc_sid=10d13b",

    brandProduct3image1:
      "https://scontent.cdninstagram.com/v/t51.29350-15/416685704_840868131147234_8451326786865560469_n.jpg?stp=dst-jpg_e35&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDE3OTguc2RyIn0&_nc_ht=scontent.cdninstagram.com&_nc_cat=106&_nc_ohc=l4Gvvb9tVooAX_cN_xA&edm=APs17CUBAAAA&ccb=7-5&ig_cache_key=MzI3NTgzNzY3MzkzMzIyOTQxNw%3D%3D.2-ccb7-5&oh=00_AfA7FRoCQfNKys7zyTOntalKyfCZa7B4CBxu2QzZ6V5Pig&oe=65EC1D1E&_nc_sid=10d13b",
    brandProduct3image2:
      "https://scontent.cdninstagram.com/v/t51.29350-15/417900923_1853048758457732_5320940674269641615_n.jpg?stp=dst-jpg_e35&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDE3OTguc2RyIn0&_nc_ht=scontent.cdninstagram.com&_nc_cat=108&_nc_ohc=lpewR9le3_wAX9ggTCv&edm=APs17CUBAAAA&ccb=7-5&ig_cache_key=MzI3NTgzNzY3MzkzMzExMTgyMA%3D%3D.2-ccb7-5&oh=00_AfChJmsc9M6glfuQcWdZmkwh8O9EuvKTFsHy-2hFDoQ0hQ&oe=65ECE0BC&_nc_sid=10d13b",
    brandProduct3image3:
      "https://scontent.cdninstagram.com/v/t51.29350-15/417476541_213924728455917_4261902348824257256_n.jpg?stp=dst-jpg_e35&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDE3OTguc2RyIn0&_nc_ht=scontent.cdninstagram.com&_nc_cat=109&_nc_ohc=LOXKcspYEOgAX-DLCjW&edm=APs17CUBAAAA&ccb=7-5&ig_cache_key=MzI3NTgzNzY3MzkzMzExNTEwOQ%3D%3D.2-ccb7-5&oh=00_AfCdJKmy9n8yPux7jmL3Dfbu30Q6pfYzM7BjsI-T-jaFHg&oe=65EB7815&_nc_sid=10d13b",
    brandProduct3image4:
      "https://scontent.cdninstagram.com/v/t51.29350-15/417956946_354589350645636_5139097081064022136_n.jpg?stp=dst-jpg_e35_p720x720&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDE3OTguc2RyIn0&_nc_ht=scontent.cdninstagram.com&_nc_cat=100&_nc_ohc=ZXOWPj11AJAAX-obyFK&edm=APs17CUBAAAA&ccb=7-5&ig_cache_key=MzI3NTgzNzY3MzkzMzI4MDgyMw%3D%3D.2-ccb7-5&oh=00_AfDDM9KOy-8SWpg71acJhUK5ZiMxuLQaC_Wdfu0QUsaRWA&oe=65ECA883&_nc_sid=10d13b",
    brandProduct4image1:
      "https://scontent.cdninstagram.com/v/t51.29350-15/416489490_341405625347031_7236190749780014573_n.jpg?stp=dst-jpg_e35&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDE3OTguc2RyIn0&_nc_ht=scontent.cdninstagram.com&_nc_cat=103&_nc_ohc=vkqm0SrKTWsAX__wvhn&edm=APs17CUBAAAA&ccb=7-5&ig_cache_key=MzI3MzgzMzkyNjA5NzA4NDUzNQ%3D%3D.2-ccb7-5&oh=00_AfDguu4j6LysVEBFpYo7FXJNYpRQM26trI12clV06YS-0w&oe=65EC672C&_nc_sid=10d13b",
    brandProduct4image2:
      "https://scontent.cdninstagram.com/v/t51.29350-15/416434373_181295925041281_1013504903275337987_n.jpg?stp=dst-jpg_e35&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDE3OTguc2RyIn0&_nc_ht=scontent.cdninstagram.com&_nc_cat=101&_nc_ohc=Ftb6vQcpaa0AX-r25F9&edm=APs17CUBAAAA&ccb=7-5&ig_cache_key=MzI3MzgzMzkyNjA4MDE0NDE5Nw%3D%3D.2-ccb7-5&oh=00_AfDhpVnh30KVTWSLt1xnU2UkByyMDtP7784gfTML38TrGw&oe=65ECF697&_nc_sid=10d13b",
    brandProduct4image3:
      "https://scontent.cdninstagram.com/v/t51.29350-15/416611110_1336292374437701_3631023857045954592_n.jpg?stp=dst-jpg_e35&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDE3OTguc2RyIn0&_nc_ht=scontent.cdninstagram.com&_nc_cat=105&_nc_ohc=xrW-RFt2Gy0AX_uPd5E&edm=APs17CUBAAAA&ccb=7-5&ig_cache_key=MzI3MzgzMzkyNTc3ODE0MTQ2Nw%3D%3D.2-ccb7-5&oh=00_AfATYAJlKk-mg_5wsoK5yK9ExXzvUo1t93YwjJR74_JydA&oe=65EC1CE5&_nc_sid=10d13b",
    brandProduct4image4:
      "https://scontent.cdninstagram.com/v/t51.29350-15/416922973_906561627514954_5330843096369107404_n.jpg?stp=dst-jpg_e35&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDE3OTguc2RyIn0&_nc_ht=scontent.cdninstagram.com&_nc_cat=110&_nc_ohc=Y9ONwawPfZQAX8NJNTb&edm=APs17CUBAAAA&ccb=7-5&ig_cache_key=MzI3MzgzMzkyNTc2OTkyOTQ5OA%3D%3D.2-ccb7-5&oh=00_AfBJFdzN8ffShsRqKvTLDBxXOMnJar8YMGhy4demP2B_QQ&oe=65EBF8EC&_nc_sid=10d13b",
    brandProductPrice1: 55000,
    brandProductPrice2: 40000,
    brandProductPrice3: 30000,
    brandProductPrice4: 25000,
  },
  {
    id: 2,
    slug: "Clapped Boys",
    brandName: "Clapped Boys",
    brandCover:
      "https://scontent.cdninstagram.com/v/t51.2885-15/64238497_2316472085234261_2923938020012494002_n.jpg?stp=dst-jpg_e35&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi44NjR4MTA4MC5zZHIifQ&_nc_ht=scontent.cdninstagram.com&_nc_cat=105&_nc_ohc=iB76eSiMag0AX_Y2yL6&edm=APs17CUBAAAA&ccb=7-5&ig_cache_key=MjA2NTU5NjM2NjAzNzY0NzI1MQ%3D%3D.2-ccb7-5&oh=00_AfB2TioPZ315RuFztUt9j53RI_vmXa6j14oQESwgmaeOTQ&oe=65EB4417&_nc_sid=10d13b",
    logo: "https://scontent-los2-1.cdninstagram.com/v/t51.2885-19/317428311_684871003074700_4410710922221987957_n.jpg?stp=dst-jpg_s320x320&_nc_ht=scontent-los2-1.cdninstagram.com&_nc_cat=104&_nc_ohc=TDEi3mwvBaIAX9VROia&edm=AOQ1c0wBAAAA&ccb=7-5&oh=00_AfCvXqz-1bqgHXqqhcM9m6b8fooMRr5vu_udWpzHcwEtTA&oe=65EC964B&_nc_sid=8b3546",
    brandMotto: "GO CLAPPED OR GO HOME!",
    brandProductName1: "Join The Mob",
    brandProductName2: "Go Clapped Tee",
    brandProductName3: "Batman Tee",
    brandProductName4: "",
    brandProductimage1:
      "https://scontent.cdninstagram.com/v/t51.29350-15/400519269_2602668563240530_8584301494442865519_n.jpg?stp=dst-jpg_e35_p720x720&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDE4MDAuc2RyIn0&_nc_ht=scontent.cdninstagram.com&_nc_cat=110&_nc_ohc=BZs_jk0m0NEAX9hHa-H&edm=APs17CUBAAAA&ccb=7-5&ig_cache_key=MzIzMzg1NzM0ODM5MTA5MTkxNw%3D%3D.2-ccb7-5&oh=00_AfAFgIIJRkKvVeFvK4leYXLXVSK4L_UXYvcyBDdlKCxvJg&oe=65ECF5FE&_nc_sid=10d13b",
    brandProductimage2:
      "https://scontent.cdninstagram.com/v/t51.29350-15/318008242_146949941432785_6588595156995190736_n.jpg?stp=dst-jpg_e35_p720x720&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDE3OTIuc2RyIn0&_nc_ht=scontent.cdninstagram.com&_nc_cat=101&_nc_ohc=mDOTUtcTspkAX8HbGz5&edm=APs17CUBAAAA&ccb=7-5&ig_cache_key=Mjk4NTMzNDg2MzQ4NDA4Mjk0Mg%3D%3D.2-ccb7-5&oh=00_AfCBQ3Q0RXauBt83V7Gv_OMQIie6f2AMt4gwv9F_q1jueQ&oe=65EC8C53&_nc_sid=10d13b",
    brandProductimage3:
      "https://scontent.cdninstagram.com/v/t51.29350-15/274950048_1550553548657939_1695427210340414493_n.jpg?stp=dst-jpg_e35_p720x720&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDE3NTkuc2RyIn0&_nc_ht=scontent.cdninstagram.com&_nc_cat=111&_nc_ohc=GDKtuxWaFjcAX-6hnMw&edm=APs17CUBAAAA&ccb=7-5&ig_cache_key=Mjc4MzgyNDQzOTk0NzU3NDE4Mw%3D%3D.2-ccb7-5&oh=00_AfDFFC3eElbtZX280nai1BgJrYkE5c3yBCsbYL5QiNHCnA&oe=65EA9641&_nc_sid=10d13b",
    brandProductimage4: "",
    brandProduct1image2:
      "https://scontent.cdninstagram.com/v/t51.29350-15/401278094_1400885524109751_8254365685464817935_n.jpg?stp=dst-jpg_e35_p720x720&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDE4MDAuc2RyIn0&_nc_ht=scontent.cdninstagram.com&_nc_cat=103&_nc_ohc=ZiYgV33P2WEAX-bn8MT&edm=APs17CUBAAAA&ccb=7-5&ig_cache_key=MzIzMzg1NzM0ODcwMTQ2MDI3MA%3D%3D.2-ccb7-5&oh=00_AfDfBV8yVvWyRKVdxX0oulV2DqAlU_TKrJCHiy0RoQrBDQ&oe=65EBBB3A&_nc_sid=10d13b",
    brandProduct1image1:
      "https://scontent.cdninstagram.com/v/t51.29350-15/400519269_2602668563240530_8584301494442865519_n.jpg?stp=dst-jpg_e35_p720x720&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDE4MDAuc2RyIn0&_nc_ht=scontent.cdninstagram.com&_nc_cat=110&_nc_ohc=BZs_jk0m0NEAX9hHa-H&edm=APs17CUBAAAA&ccb=7-5&ig_cache_key=MzIzMzg1NzM0ODM5MTA5MTkxNw%3D%3D.2-ccb7-5&oh=00_AfAFgIIJRkKvVeFvK4leYXLXVSK4L_UXYvcyBDdlKCxvJg&oe=65ECF5FE&_nc_sid=10d13b",
    brandProduct1image3:
      "https://scontent.cdninstagram.com/v/t51.29350-15/400496876_327453263359281_3189870973122964182_n.jpg?stp=dst-jpg_e35&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDE4MDAuc2RyIn0&_nc_ht=scontent.cdninstagram.com&_nc_cat=109&_nc_ohc=j9LArp4euOkAX8gYtRd&edm=APs17CUBAAAA&ccb=7-5&ig_cache_key=MzIzMzg1NzM0ODM4MjY2Njg2Mw%3D%3D.2-ccb7-5&oh=00_AfCZ4g5k_KnOk966tU7hVVBSzHCBDqssaFdpfpFAEgWwJA&oe=65ED0BEA&_nc_sid=10d13b",
    brandProduct1image4:
      "https://scontent.cdninstagram.com/v/t51.29350-15/369953848_996305631445379_8996728414697895194_n.jpg?stp=dst-jpg_e35&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDE4MDAuc2RyIn0&_nc_ht=scontent.cdninstagram.com&_nc_cat=111&_nc_ohc=vlAXK4VKIgwAX9B8ng-&edm=APs17CUBAAAA&ccb=7-5&ig_cache_key=MzIzMzg1NzM0ODM5OTM4NzY0OQ%3D%3D.2-ccb7-5&oh=00_AfD-7yWCL3OIry5u3r3k2ZS_uVMb024mrPaeN6dEprVAUw&oe=65EBDDB1&_nc_sid=10d13b",
    brandProduct2image1:
      "https://scontent.cdninstagram.com/v/t51.29350-15/318008242_146949941432785_6588595156995190736_n.jpg?stp=dst-jpg_e35_p720x720&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDE3OTIuc2RyIn0&_nc_ht=scontent.cdninstagram.com&_nc_cat=101&_nc_ohc=mDOTUtcTspkAX8HbGz5&edm=APs17CUBAAAA&ccb=7-5&ig_cache_key=Mjk4NTMzNDg2MzQ4NDA4Mjk0Mg%3D%3D.2-ccb7-5&oh=00_AfCBQ3Q0RXauBt83V7Gv_OMQIie6f2AMt4gwv9F_q1jueQ&oe=65EC8C53&_nc_sid=10d13b",
    brandProduct2image2:
      "https://scontent.cdninstagram.com/v/t51.29350-15/317755696_207671818322387_6012700860920343948_n.jpg?stp=dst-jpg_e35&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDE3OTIuc2RyIn0&_nc_ht=scontent.cdninstagram.com&_nc_cat=111&_nc_ohc=41x37fIK35oAX8rBQob&edm=APs17CUBAAAA&ccb=7-5&ig_cache_key=Mjk4NTMzNDg2MzYzNDkxNTEzMw%3D%3D.2-ccb7-5&oh=00_AfADe4u1PPI5d8O-0b094Dm9_cUNKxCJ59gB09GMKIu2fQ&oe=65EB7A0F&_nc_sid=10d13b",
    brandProduct2image3:
      "https://scontent.cdninstagram.com/v/t51.29350-15/318140505_708396177109226_509942156864980451_n.jpg?stp=dst-jpg_e35&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDE3OTIuc2RyIn0&_nc_ht=scontent.cdninstagram.com&_nc_cat=102&_nc_ohc=KBaEBY5nm6sAX-YgJbS&edm=APs17CUBAAAA&ccb=7-5&ig_cache_key=Mjk4NTMzNDg2MzU4NDc0MjI0MA%3D%3D.2-ccb7-5&oh=00_AfC6mhsnTtZHTqMtEtg2dRbs-99GQNZjkfq38ylyS4s28w&oe=65EBE2A5&_nc_sid=10d13b",
    brandProduct2image4:
      "https://scontent.cdninstagram.com/v/t51.29350-15/317989495_684630119824363_4636887831826547335_n.jpg?stp=dst-jpg_e35&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDE3OTIuc2RyIn0&_nc_ht=scontent.cdninstagram.com&_nc_cat=107&_nc_ohc=yBT9wNBrUp8AX_6aGeL&edm=APs17CUBAAAA&ccb=7-5&ig_cache_key=Mjk4NTMzMzU0NTMyMzMwNzU3MQ%3D%3D.2-ccb7-5&oh=00_AfCy8eiG8bWoXFmjSwxal0mGijd2RE8M_vCRhszhgp2Dwg&oe=65EB9257&_nc_sid=10d13b",

    brandProduct3image1:
      "https://scontent.cdninstagram.com/v/t51.29350-15/274950048_1550553548657939_1695427210340414493_n.jpg?stp=dst-jpg_e35_p720x720&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDE3NTkuc2RyIn0&_nc_ht=scontent.cdninstagram.com&_nc_cat=111&_nc_ohc=GDKtuxWaFjcAX-6hnMw&edm=APs17CUBAAAA&ccb=7-5&ig_cache_key=Mjc4MzgyNDQzOTk0NzU3NDE4Mw%3D%3D.2-ccb7-5&oh=00_AfDFFC3eElbtZX280nai1BgJrYkE5c3yBCsbYL5QiNHCnA&oe=65EA9641&_nc_sid=10d13b",
    brandProduct3image2:
      "https://scontent.cdninstagram.com/v/t51.29350-15/275014091_284968493745711_2354031003337824854_n.jpg?stp=dst-jpg_e35&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDE3NzUuc2RyIn0&_nc_ht=scontent.cdninstagram.com&_nc_cat=103&_nc_ohc=1Q7gtW1tplYAX_J-RoU&edm=APs17CUBAAAA&ccb=7-5&ig_cache_key=Mjc4MzgyNDg0NzM2NTY4NTY2MQ%3D%3D.2-ccb7-5&oh=00_AfD7n3WO4TiOChnifZDGgBVx6vX_6cwKSsABBZb7stSdkw&oe=65EACC49&_nc_sid=10d13b",
    brandProduct3image3:
      "https://scontent.cdninstagram.com/v/t51.29350-15/275036501_489058302761403_7198760898447684212_n.jpg?stp=dst-jpg_e35&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDE0NDAuc2RyIn0&_nc_ht=scontent.cdninstagram.com&_nc_cat=103&_nc_ohc=unk2S_OTA58AX_-E8Lu&edm=APs17CUBAAAA&ccb=7-5&ig_cache_key=Mjc4MzgyNTE2MjEyMzAwNDc4OA%3D%3D.2-ccb7-5&oh=00_AfA_HoAohTvj2-SRSDQ35Q4WIY-zL9mvH0Wo19XbJJj3MQ&oe=65EC11E3&_nc_sid=10d13b",
    brandProduct3image4:
      "https://scontent.cdninstagram.com/v/t51.29350-15/275100505_436069261649006_8440515060953205994_n.jpg?stp=dst-jpg_e35&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDE0NDAuc2RyIn0&_nc_ht=scontent.cdninstagram.com&_nc_cat=102&_nc_ohc=PjTUpFeJf6EAX9N5NF4&edm=APs17CUBAAAA&ccb=7-5&ig_cache_key=Mjc4MzgyNTE2MjEzOTcyMTM1MQ%3D%3D.2-ccb7-5&oh=00_AfCE5_fkSO0DM6f88y7jFL-zqg1WTUCb7WJEYBrEMn3wyg&oe=65ED0D4C&_nc_sid=10d13b",
    brandProduct4image1: "",
    brandProduct4image2: "",
    brandProduct4image3: "",
    brandProduct4image4: "",
    brandProductPrice1: 10000,
    brandProductPrice2: 10000,
    brandProductPrice3: 10000,
    brandProductPrice4: 10000,
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
