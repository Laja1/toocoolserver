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
      "https://scontent-lhr6-1.cdninstagram.com/v/t51.29350-15/398266337_1522490605175349_220684154524778919_n.jpg?stp=dst-jpg_e35&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDE3OTguc2RyIn0&_nc_ht=scontent-lhr6-1.cdninstagram.com&_nc_cat=109&_nc_ohc=VoELyCMxxQUAX_9W2Cu&edm=APs17CUBAAAA&ccb=7-5&ig_cache_key=MzIyNzc5NjQwMjEwMjg4MDk2Mw%3D%3D.2-ccb7-5&oh=00_AfDoL3TdnLynd0DCxSe2VoBIO7dpN2sgB5zAP05qW6Vr9w&oe=65F2F759&_nc_sid=10d13b",
    logo: "https://scontent-los2-1.cdninstagram.com/v/t51.2885-19/275242425_648819119566048_5381673723199894110_n.jpg?stp=dst-jpg_s320x320&_nc_ht=scontent-los2-1.cdninstagram.com&_nc_cat=104&_nc_ohc=aw0rfHN7N8MAX8y3PvK&edm=AOQ1c0wBAAAA&ccb=7-5&oh=00_AfAT6ZbTb02F-OFLmJZiCECGWA-kqWA-Wx2wTrGeZoNFCA&oe=65F2F1F8&_nc_sid=8b3546",
    brandMotto: "United We Stand",
    products: [
      {
        id: 1,
        brandProductName: "Seek First Thy Kingdom Tee",
        brandProductimage:
          "https://scontent.cdninstagram.com/v/t51.29350-15/420646906_393386226535186_8459946037984059705_n.jpg?stp=dst-jpg_e35&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDE4MDAuc2RyIn0&_nc_ht=scontent.cdninstagram.com&_nc_cat=110&_nc_ohc=T3e4xEpO2ywAX_uKb8h&edm=APs17CUBAAAA&ccb=7-5&ig_cache_key=MzI4NjU5NTg4ODc0ODY5NTA0MA%3D%3D.2-ccb7-5&oh=00_AfC6qsNBSCEb-NR4HB991BmSoO_Mc4gCeWnBqshl0vqcVg&oe=65F3E913&_nc_sid=10d13b",
        brandProductPrice: 20000,
        images: [
          "https://scontent.cdninstagram.com/v/t51.29350-15/420657147_910649506964034_9143675866023978291_n.jpg?stp=dst-jpg_e35_p720x720&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDE4MDAuc2RyIn0&_nc_ht=scontent.cdninstagram.com&_nc_cat=106&_nc_ohc=5JdViJap_FgAX_2zUh7&edm=APs17CUBAAAA&ccb=7-5&ig_cache_key=MzI4NjU5NTg4ODQzODUzOTUxNA%3D%3D.2-ccb7-5&oh=00_AfBuJsR0HZ0J9yQyPe28lJuxsN9URRohy2d8IaSQcEcVMA&oe=65F33E03&_nc_sid=10d13b",
          "https://scontent.cdninstagram.com/v/t51.29350-15/420646906_393386226535186_8459946037984059705_n.jpg?stp=dst-jpg_e35&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDE4MDAuc2RyIn0&_nc_ht=scontent.cdninstagram.com&_nc_cat=110&_nc_ohc=T3e4xEpO2ywAX_uKb8h&edm=APs17CUBAAAA&ccb=7-5&ig_cache_key=MzI4NjU5NTg4ODc0ODY5NTA0MA%3D%3D.2-ccb7-5&oh=00_AfC6qsNBSCEb-NR4HB991BmSoO_Mc4gCeWnBqshl0vqcVg&oe=65F3E913&_nc_sid=10d13b",
          "https://scontent.cdninstagram.com/v/t51.29350-15/420499107_753425996304175_6494886621838392795_n.jpg?stp=dst-jpg_e35&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDE4MDAuc2RyIn0&_nc_ht=scontent.cdninstagram.com&_nc_cat=107&_nc_ohc=qsAoIA8VWngAX90-uiz&edm=APs17CUBAAAA&ccb=7-5&ig_cache_key=MzI4NjU5NTg4ODQ0NjgxOTYwNw%3D%3D.2-ccb7-5&oh=00_AfCeida0yHM31qSJSWAkDV_fH1D8cY0HqNqoV9DGIgWjbA&oe=65F47117&_nc_sid=10d13b",
          "https://scontent.cdninstagram.com/v/t51.29350-15/420493619_268631976057458_2401811498308353828_n.jpg?stp=dst-jpg_e35_p720x720&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDE4MDAuc2RyIn0&_nc_ht=scontent.cdninstagram.com&_nc_cat=102&_nc_ohc=pNxBPEnZLlsAX9w9LeY&edm=APs17CUBAAAA&ccb=7-5&ig_cache_key=MzI4NjU5NTg4ODc1NzI0ODA0NA%3D%3D.2-ccb7-5&oh=00_AfAzTvEHigYIsRxqzOu7YUh5q23BNWRI5q7Z9SyKEOr5Fw&oe=65F431A1&_nc_sid=10d13b",
        ],
      },
      {
        id: 2,
        brandProductName: "Hockey Jersey",
        brandProductimage:
          "https://scontent.cdninstagram.com/v/t51.29350-15/405770877_7098168463562450_7112941450232575436_n.jpg?stp=dst-jpg_e35&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDE3OTguc2RyIn0&_nc_ht=scontent.cdninstagram.com&_nc_cat=102&_nc_ohc=9PuK2GiOW3UAX8PLjz6&edm=APs17CUBAAAA&ccb=7-5&ig_cache_key=MzI1MDM5NTIxMjg1OTgxMDcyMw%3D%3D.2-ccb7-5&oh=00_AfDxEBIqrFch_v-nO2pW2_tsHssnwBbhLmxI4PkXslKxjQ&oe=65F44964&_nc_sid=10d13b",
        images: [
          "https://scontent.cdninstagram.com/v/t51.29350-15/407387562_586380436955388_5253753611060446905_n.jpg?stp=dst-jpg_e35&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDE3OTguc2RyIn0&_nc_ht=scontent.cdninstagram.com&_nc_cat=100&_nc_ohc=gSAmMPvuWfIAX8VUIyk&edm=APs17CUBAAAA&ccb=7-5&ig_cache_key=MzI1MDM5NTIxMjg1OTgyMTQ0NQ%3D%3D.2-ccb7-5&oh=00_AfAi7Du947xYeUpesqQlVEHN5b9H5yYo9NBRnOQ_1xNMtQ&oe=65F3AB35&_nc_sid=10d13b",
          "https://scontent.cdninstagram.com/v/t51.29350-15/405770877_7098168463562450_7112941450232575436_n.jpg?stp=dst-jpg_e35&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDE3OTguc2RyIn0&_nc_ht=scontent.cdninstagram.com&_nc_cat=102&_nc_ohc=9PuK2GiOW3UAX8PLjz6&edm=APs17CUBAAAA&ccb=7-5&ig_cache_key=MzI1MDM5NTIxMjg1OTgxMDcyMw%3D%3D.2-ccb7-5&oh=00_AfDxEBIqrFch_v-nO2pW2_tsHssnwBbhLmxI4PkXslKxjQ&oe=65F44964&_nc_sid=10d13b",
          "https://scontent.cdninstagram.com/v/t51.29350-15/405782755_1390839758224225_2386385641847312853_n.jpg?stp=dst-jpg_e35&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDE3OTguc2RyIn0&_nc_ht=scontent.cdninstagram.com&_nc_cat=101&_nc_ohc=TvDFupjXL3cAX94TKta&edm=APs17CUBAAAA&ccb=7-5&ig_cache_key=MzI1MDM5NTIxMjk0MzUyNTQ5Mg%3D%3D.2-ccb7-5&oh=00_AfAUcfZ1kdDyZn6ZONcwj01sKeWKs-HN7m0RJa2jJhrJ1Q&oe=65F382FE&_nc_sid=10d13b",
          "https://scontent.cdninstagram.com/v/t51.29350-15/393113853_365297349513802_5964985318986008049_n.jpg?stp=dst-jpg_e35&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDE3OTguc2RyIn0&_nc_ht=scontent.cdninstagram.com&_nc_cat=110&_nc_ohc=41AkeHq4OwMAX-n91Gl&edm=APs17CUBAAAA&ccb=7-5&ig_cache_key=MzI1MDM5NTIxMzE1MzMyODA4MQ%3D%3D.2-ccb7-5&oh=00_AfC5r8LCU8d7tfZlnmmPJhB9YPAnAAMXwe1fE3N-BAxWqg&oe=65F3302D&_nc_sid=10d13b",
        ],
        brandProductPrice: 25000,
      },
      {
        id: 3,
        brandProductName: "Batman Tee",
        brandProductimage:
          "https://scontent.cdninstagram.com/v/t51.29350-15/429847162_365629143063915_11370214939207338_n.jpg?stp=dst-jpg_e35&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDE4MDAuc2RyIn0&_nc_ht=scontent.cdninstagram.com&_nc_cat=103&_nc_ohc=aT3DSBAN9mkAX91QXVM&edm=APs17CUBAAAA&ccb=7-5&ig_cache_key=MzMxMTQ0NTYxNTI4NTg5MzM4NA%3D%3D.2-ccb7-5&oh=00_AfDaWv0dSRGU5Ru3YF_aOVEUVfWkh22zaYbhnmpB0RtZXA&oe=65F473D1&_nc_sid=10d13b",
        images: [
          "https://scontent.cdninstagram.com/v/t51.29350-15/429847162_365629143063915_11370214939207338_n.jpg?stp=dst-jpg_e35&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDE4MDAuc2RyIn0&_nc_ht=scontent.cdninstagram.com&_nc_cat=103&_nc_ohc=aT3DSBAN9mkAX91QXVM&edm=APs17CUBAAAA&ccb=7-5&ig_cache_key=MzMxMTQ0NTYxNTI4NTg5MzM4NA%3D%3D.2-ccb7-5&oh=00_AfDaWv0dSRGU5Ru3YF_aOVEUVfWkh22zaYbhnmpB0RtZXA&oe=65F473D1&_nc_sid=10d13b",
          "https://scontent.cdninstagram.com/v/t51.29350-15/429659486_340631538314314_9110593400372387122_n.jpg?stp=dst-jpg_e35&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDE4MDAuc2RyIn0&_nc_ht=scontent.cdninstagram.com&_nc_cat=110&_nc_ohc=4Fcl1PLVRb0AX-iDRCl&edm=APs17CUBAAAA&ccb=7-5&ig_cache_key=MzMxMTQ0NTYxNTI4NTcxNzA3OQ%3D%3D.2-ccb7-5&oh=00_AfCP5sHMHgXpkfK1GNVNAUpzUchmlw40g7BkreKTUIy5EA&oe=65F3E650&_nc_sid=10d13b",
          "https://scontent.cdninstagram.com/v/t51.29350-15/429981125_772482514941927_8281498572439568011_n.jpg?stp=dst-jpg_e35&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDE4MDAuc2RyIn0&_nc_ht=scontent.cdninstagram.com&_nc_cat=103&_nc_ohc=uJfQ-6G1RvYAX_tkb_Q&edm=APs17CUBAAAA&ccb=7-5&ig_cache_key=MzMxMTQ0NTYxNTI4NTY4MTgwNw%3D%3D.2-ccb7-5&oh=00_AfAzJ4TBMeA4dJX4gy_E7ta7mqVuL3zgKLK1MJAqE16e8Q&oe=65F33435&_nc_sid=10d13b",
          "https://scontent.cdninstagram.com/v/t51.29350-15/429885383_632269745709900_1137097610625239776_n.jpg?stp=dst-jpg_e35&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDE4MDAuc2RyIn0&_nc_ht=scontent.cdninstagram.com&_nc_cat=100&_nc_ohc=NwJiG7he_34AX85JiP4&edm=APs17CUBAAAA&ccb=7-5&ig_cache_key=MzMxMTQ0NTYxNTU4Nzg0NjI2Ng%3D%3D.2-ccb7-5&oh=00_AfC9nJbOmObKVfXfIqKLEHlw7sQ1nM3g91ZDgf1v9IHQqw&oe=65F4A4EC&_nc_sid=10d13b",
        ],
        brandProductPrice: 30000,
      },
      {
        id: 4,
        brandProductName: "Join The Clan Tee",
        brandProductimage:
          "https://scontent.cdninstagram.com/v/t51.29350-15/193669402_3969986693048962_7777146569669072011_n.jpg?stp=dst-jpg_e35&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDE0Mzkuc2RyIn0&_nc_ht=scontent.cdninstagram.com&_nc_cat=110&_nc_ohc=lX3wX1Gsoz8AX9Ig40B&edm=APs17CUBAAAA&ccb=7-5&ig_cache_key=MjU4NDQ3MTE5NDI1MzA3NTIyNA%3D%3D.2-ccb7-5&oh=00_AfDFrPUF6Ac_LRORzNKDVDLCfNth3w4GSP70GIxPBJBPjA&oe=65F4AD34&_nc_sid=10d13b",

        images: [
          "https://scontent.cdninstagram.com/v/t51.29350-15/193669402_3969986693048962_7777146569669072011_n.jpg?stp=dst-jpg_e35&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDE0Mzkuc2RyIn0&_nc_ht=scontent.cdninstagram.com&_nc_cat=110&_nc_ohc=lX3wX1Gsoz8AX9Ig40B&edm=APs17CUBAAAA&ccb=7-5&ig_cache_key=MjU4NDQ3MTE5NDI1MzA3NTIyNA%3D%3D.2-ccb7-5&oh=00_AfDFrPUF6Ac_LRORzNKDVDLCfNth3w4GSP70GIxPBJBPjA&oe=65F4AD34&_nc_sid=10d13b",

          "https://scontent.cdninstagram.com/v/t51.29350-15/193955026_334533838092224_1445683116161041603_n.jpg?stp=dst-jpg_e35&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDE0NDAuc2RyIn0&_nc_ht=scontent.cdninstagram.com&_nc_cat=108&_nc_ohc=vbiyI-qlgbEAX_GW9RE&edm=APs17CUBAAAA&ccb=7-5&ig_cache_key=MjU4NDQ3MTE5NDI5NDk4NzA3Nw%3D%3D.2-ccb7-5&oh=00_AfBxyVsOFe29CF_s_VySiGNAJPNpcX4J7lDhUuP1dnOcDQ&oe=65F38C53&_nc_sid=10d13b",

          "https://scontent.cdninstagram.com/v/t51.29350-15/194479770_246365257286451_8210419427342959789_n.jpg?stp=dst-jpg_e35&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDE0NDAuc2RyIn0&_nc_ht=scontent.cdninstagram.com&_nc_cat=103&_nc_ohc=PtQec8L4IkQAX99VM93&edm=APs17CUBAAAA&ccb=7-5&ig_cache_key=MjU4NDQ3MTE5NDI3ODIzOTk4NQ%3D%3D.2-ccb7-5&oh=00_AfC3BgfGXVnj5hh4gPyCMbw1LpSGv4OXDqWBrZxpRExD-A&oe=65F2E91D&_nc_sid=10d13b",

          "https://scontent.cdninstagram.com/v/t51.29350-15/194354933_272632754648865_6138147424899669688_n.jpg?stp=dst-jpg_e35&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDE0NDAuc2RyIn0&_nc_ht=scontent.cdninstagram.com&_nc_cat=109&_nc_ohc=dDx4O64oI9sAX8lEng4&edm=APs17CUBAAAA&ccb=7-5&ig_cache_key=MjU4NDQ3MTE5NDI3ODA4NTYyNQ%3D%3D.2-ccb7-5&oh=00_AfAgfPs5lm8SdBTLDNaFUira7key3sOlixAEx_AjndA44Q&oe=65F35236&_nc_sid=10d13b",
        ],
        brandProductPrice: 30000,
      },
    ],
  },

  {
    id: 2,
    slug: "Brk Academy",
    brandName: "Brk Academy",
    brandCover:
      "https://scontent.cdninstagram.com/v/t51.29350-15/394273788_351950023944237_5415049532697276714_n.jpg?stp=dst-jpg_e35&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDA2eDE3NTcuc2RyIn0&_nc_ht=scontent.cdninstagram.com&_nc_cat=109&_nc_ohc=MI1SKpZ10gIAX8MXFqa&edm=APs17CUBAAAA&ccb=7-5&ig_cache_key=MzIxOTMyNjg1MjQzMjY2MTUwOQ%3D%3D.2-ccb7-5&oh=00_AfBpRyi0lrskYaRiFwryjfpLjkfbFTPNBV02nXfUKp6VnA&oe=65F1F873&_nc_sid=10d13b",
    logo: "https://scontent-los2-1.cdninstagram.com/v/t51.2885-19/194983658_853983801929896_3448874707843458180_n.jpg?stp=dst-jpg_s320x320&_nc_ht=scontent-los2-1.cdninstagram.com&_nc_cat=104&_nc_ohc=pRmPb92fZfcAX9Pzlbs&edm=AOQ1c0wBAAAA&ccb=7-5&oh=00_AfA6QVOK5q-r2XsmfyM_gAV1kaLzEYiK8XXThCCOhuIvZQ&oe=65F3A9F1&_nc_sid=8b3546",
    brandMotto: "Spread Love And Positivity",
    products: [
      {
        id: 1,
        brandProductName: "Brk Retro Jersey",
        brandProductimage:
          "https://scontent.cdninstagram.com/v/t51.29350-15/417186438_687052410286513_1275783866342726849_n.jpg?stp=dst-jpg_e35&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDE3OTguc2RyIn0&_nc_ht=scontent.cdninstagram.com&_nc_cat=101&_nc_ohc=l7WpqAx38tYAX95kJc_&edm=APs17CUBAAAA&ccb=7-5&ig_cache_key=MzI3NTI5NzQzMDg4NDc3Mjg0NA%3D%3D.2-ccb7-5&oh=00_AfAFOLfmB6OvZNZq_Y_rq0OolNysHSo0EV7G1fASfdMLrA&oe=65F36FD9&_nc_sid=10d13b",
        brandProductPrice: 40000,
        images: [
          "https://scontent.cdninstagram.com/v/t51.29350-15/417186438_687052410286513_1275783866342726849_n.jpg?stp=dst-jpg_e35&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDE3OTguc2RyIn0&_nc_ht=scontent.cdninstagram.com&_nc_cat=101&_nc_ohc=l7WpqAx38tYAX95kJc_&edm=APs17CUBAAAA&ccb=7-5&ig_cache_key=MzI3NTI5NzQzMDg4NDc3Mjg0NA%3D%3D.2-ccb7-5&oh=00_AfAFOLfmB6OvZNZq_Y_rq0OolNysHSo0EV7G1fASfdMLrA&oe=65F36FD9&_nc_sid=10d13b",
          "https://scontent.cdninstagram.com/v/t51.29350-15/416895460_1112254116451957_2101394281225736064_n.jpg?stp=dst-jpg_e35&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDE3OTguc2RyIn0&_nc_ht=scontent.cdninstagram.com&_nc_cat=101&_nc_ohc=0tlxaTnfl0EAX-69q9l&edm=APs17CUBAAAA&ccb=7-5&ig_cache_key=MzI3NTI5NzQzMDg4NDgzNjYwMw%3D%3D.2-ccb7-5&oh=00_AfBpmcdoHieCFy3zLBaLIpGr_Re7UmquGXEuxtdGD0eg5w&oe=65F2FABA&_nc_sid=10d13b",
        ],
      },

      {
        id: 2,
        brandProductName: "Osadebe Catholic Jersey",
        brandProductimage:
          "https://scontent.cdninstagram.com/v/t51.29350-15/417399098_777653921066639_3780024657751597073_n.jpg?stp=dst-jpg_e35&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDE3OTguc2RyIn0&_nc_ht=scontent.cdninstagram.com&_nc_cat=111&_nc_ohc=jgOHhsr32pwAX-Ix6ge&edm=APs17CUBAAAA&ccb=7-5&ig_cache_key=MzI3NTgzODIyNzA5NDgwMjEzNA%3D%3D.2-ccb7-5&oh=00_AfA6SKO6bGIc9Ep9U7-xv6Lp6cb8vG5tFX9NZxrNt54dQw&oe=65F396A8&_nc_sid=10d13b",
        images: [
          "https://scontent.cdninstagram.com/v/t51.29350-15/417385529_729649142430783_1840447346072046918_n.jpg?stp=dst-jpg_e35&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDE3OTguc2RyIn0&_nc_ht=scontent.cdninstagram.com&_nc_cat=103&_nc_ohc=GanRtHJFKdYAX9ILb02&edm=APs17CUBAAAA&ccb=7-5&ig_cache_key=MzI3NTgzODIyNzA5NDc2MzA1MQ%3D%3D.2-ccb7-5&oh=00_AfB90aWy_jvbdz0cDfa_OS5FYSvHU1oxUjHbWgisBH4fBw&oe=65F2D176&_nc_sid=10d13b",
          "https://scontent.cdninstagram.com/v/t51.29350-15/418047157_2624165401092175_4011145983563249332_n.jpg?stp=dst-jpg_e35&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDE3OTguc2RyIn0&_nc_ht=scontent.cdninstagram.com&_nc_cat=107&_nc_ohc=uIhgNXvFlMEAX8lnkdJ&edm=APs17CUBAAAA&ccb=7-5&ig_cache_key=MzI3NTgzODIyNzA4NjQxMzU3NQ%3D%3D.2-ccb7-5&oh=00_AfDaraB6haEWrW-gwRt02lgUapZ29z37DYtNjxQdwW1PMQ&oe=65F415FE&_nc_sid=10d13b",
          "https://scontent.cdninstagram.com/v/t51.29350-15/417399098_777653921066639_3780024657751597073_n.jpg?stp=dst-jpg_e35&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDE3OTguc2RyIn0&_nc_ht=scontent.cdninstagram.com&_nc_cat=111&_nc_ohc=jgOHhsr32pwAX-Ix6ge&edm=APs17CUBAAAA&ccb=7-5&ig_cache_key=MzI3NTgzODIyNzA5NDgwMjEzNA%3D%3D.2-ccb7-5&oh=00_AfA6SKO6bGIc9Ep9U7-xv6Lp6cb8vG5tFX9NZxrNt54dQw&oe=65F396A8&_nc_sid=10d13b",
          "https://scontent.cdninstagram.com/v/t51.29350-15/417862106_741307981288020_5139913765388538815_n.jpg?stp=dst-jpg_e35&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDE3OTguc2RyIn0&_nc_ht=scontent.cdninstagram.com&_nc_cat=100&_nc_ohc=Gwy7R0OzFWsAX9aBfVx&edm=APs17CUBAAAA&ccb=7-5&ig_cache_key=MzI3NTI5NzQzMDg4NDcxMjc4MQ%3D%3D.2-ccb7-5&oh=00_AfB2zGxaZiSbfDh3wttwmAp9GCdYuqQwwXgdTKBzIpozXA&oe=65F49EA6&_nc_sid=10d13b",
        ],
        brandProductPrice: 55000,
      },
      {
        id: 3,
        brandProductName: "Brk x Revamp Mesh Shorts",
        brandProductimage:
          "https://scontent.cdninstagram.com/v/t51.29350-15/416685704_840868131147234_8451326786865560469_n.jpg?stp=dst-jpg_e35&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDE3OTguc2RyIn0&_nc_ht=scontent.cdninstagram.com&_nc_cat=106&_nc_ohc=nBbC-gE7884AX8BuNee&edm=APs17CUBAAAA&ccb=7-5&ig_cache_key=MzI3NTgzNzY3MzkzMzIyOTQxNw%3D%3D.2-ccb7-5&oh=00_AfAMw0NftWSSLe6DJ9RSGtUL8-RM1PSgzKNiJHsWKBp-jg&oe=65F4061E&_nc_sid=10d13b",
        images: [
          "https://scontent.cdninstagram.com/v/t51.29350-15/416685704_840868131147234_8451326786865560469_n.jpg?stp=dst-jpg_e35&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDE3OTguc2RyIn0&_nc_ht=scontent.cdninstagram.com&_nc_cat=106&_nc_ohc=l4Gvvb9tVooAX_cN_xA&edm=APs17CUBAAAA&ccb=7-5&ig_cache_key=MzI3NTgzNzY3MzkzMzIyOTQxNw%3D%3D.2-ccb7-5&oh=00_AfA7FRoCQfNKys7zyTOntalKyfCZa7B4CBxu2QzZ6V5Pig&oe=65EC1D1E&_nc_sid=10d13b",

          "https://scontent.cdninstagram.com/v/t51.29350-15/417900923_1853048758457732_5320940674269641615_n.jpg?stp=dst-jpg_e35&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDE3OTguc2RyIn0&_nc_ht=scontent.cdninstagram.com&_nc_cat=108&_nc_ohc=nnHir1XfeuQAX96RCx2&edm=APs17CUBAAAA&ccb=7-5&ig_cache_key=MzI3NTgzNzY3MzkzMzExMTgyMA%3D%3D.2-ccb7-5&oh=00_AfDblp6Nx13CoONgeiLQpJz_Na16v9fOGg1_0bF76z04KQ&oe=65F2CF7C&_nc_sid=10d13b",

          "https://scontent.cdninstagram.com/v/t51.29350-15/417476541_213924728455917_4261902348824257256_n.jpg?stp=dst-jpg_e35&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDE3OTguc2RyIn0&_nc_ht=scontent.cdninstagram.com&_nc_cat=109&_nc_ohc=g9nf4FYHrRMAX84I4aU&edm=APs17CUBAAAA&ccb=7-5&ig_cache_key=MzI3NTgzNzY3MzkzMzExNTEwOQ%3D%3D.2-ccb7-5&oh=00_AfDUCs37EX_ceL4bFEUoGZ2hsZiKxrLKQrbenom3s939qQ&oe=65F36115&_nc_sid=10d13b",

          "https://scontent.cdninstagram.com/v/t51.29350-15/417956946_354589350645636_5139097081064022136_n.jpg?stp=dst-jpg_e35_p720x720&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDE3OTguc2RyIn0&_nc_ht=scontent.cdninstagram.com&_nc_cat=100&_nc_ohc=fOU2uTPMDKQAX8gnKML&edm=APs17CUBAAAA&ccb=7-5&ig_cache_key=MzI3NTgzNzY3MzkzMzI4MDgyMw%3D%3D.2-ccb7-5&oh=00_AfCDZb6Zd8Nc6sLN9-7QU-9KID5re9jSKjHDoE9_Dqpldg&oe=65F49183&_nc_sid=10d13b",
        ],
        brandProductPrice: 30000,
      },
      {
        id: 4,
        brandProductName: "BRK/WESTNORTH TEE",
        brandProductimage:
          "https://scontent.cdninstagram.com/v/t51.29350-15/416489490_341405625347031_7236190749780014573_n.jpg?stp=dst-jpg_e35&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDE3OTguc2RyIn0&_nc_ht=scontent.cdninstagram.com&_nc_cat=103&_nc_ohc=_qxp7OQJxyUAX_w_9zK&edm=APs17CUBAAAA&ccb=7-5&ig_cache_key=MzI3MzgzMzkyNjA5NzA4NDUzNQ%3D%3D.2-ccb7-5&oh=00_AfCgQE2Xv1k0kt5Ip2-HGzxTmtzkO7ua9_GqzS9SapGraw&oe=65F4502C&_nc_sid=10d13b",

        images: [
          "https://scontent.cdninstagram.com/v/t51.29350-15/416489490_341405625347031_7236190749780014573_n.jpg?stp=dst-jpg_e35&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDE3OTguc2RyIn0&_nc_ht=scontent.cdninstagram.com&_nc_cat=103&_nc_ohc=_qxp7OQJxyUAX_w_9zK&edm=APs17CUBAAAA&ccb=7-5&ig_cache_key=MzI3MzgzMzkyNjA5NzA4NDUzNQ%3D%3D.2-ccb7-5&oh=00_AfCgQE2Xv1k0kt5Ip2-HGzxTmtzkO7ua9_GqzS9SapGraw&oe=65F4502C&_nc_sid=10d13b",

          "https://scontent.cdninstagram.com/v/t51.29350-15/416434373_181295925041281_1013504903275337987_n.jpg?stp=dst-jpg_e35&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDE3OTguc2RyIn0&_nc_ht=scontent.cdninstagram.com&_nc_cat=101&_nc_ohc=pcHNDORroOIAX9bl6oq&edm=APs17CUBAAAA&ccb=7-5&ig_cache_key=MzI3MzgzMzkyNjA4MDE0NDE5Nw%3D%3D.2-ccb7-5&oh=00_AfAomJETCBwk5ly_IBUNGW143rKUIR18TdO_co7G9uJxkw&oe=65F2E557&_nc_sid=10d13b",

          "https://scontent.cdninstagram.com/v/t51.29350-15/416611110_1336292374437701_3631023857045954592_n.jpg?stp=dst-jpg_e35&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDE3OTguc2RyIn0&_nc_ht=scontent.cdninstagram.com&_nc_cat=105&_nc_ohc=yeCpImkHViIAX-Gnx4B&edm=APs17CUBAAAA&ccb=7-5&ig_cache_key=MzI3MzgzMzkyNTc3ODE0MTQ2Nw%3D%3D.2-ccb7-5&oh=00_AfCi3gZirCh2moQ4fKZt2C9NBc8uiMNUKWm-cmzMboQUgg&oe=65F405E5&_nc_sid=10d13b",

          "https://scontent.cdninstagram.com/v/t51.29350-15/416922973_906561627514954_5330843096369107404_n.jpg?stp=dst-jpg_e35&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDE3OTguc2RyIn0&_nc_ht=scontent.cdninstagram.com&_nc_cat=110&_nc_ohc=Jx9NFizQzKAAX_V4F4b&edm=APs17CUBAAAA&ccb=7-5&ig_cache_key=MzI3MzgzMzkyNTc2OTkyOTQ5OA%3D%3D.2-ccb7-5&oh=00_AfDNWLv4R0sEIXzZMoCYOh_cIYPZk8IeZhVEjZuwblGlcQ&oe=65F3E1EC&_nc_sid=10d13b",
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
      "https://scontent.cdninstagram.com/v/t51.29350-15/411071176_1066048508041854_5909614886409337209_n.jpg?stp=dst-jpg_e35&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDE3OTguc2RyIn0&_nc_ht=scontent.cdninstagram.com&_nc_cat=106&_nc_ohc=weqU7J3FArcAX_dL8RR&edm=APs17CUBAAAA&ccb=7-5&ig_cache_key=MzI1ODUwMDEyMzc0MDc2NTk4OQ%3D%3D.2-ccb7-5&oh=00_AfAnfbt_5WDMHe8YSnxVem0FxYQrsuuQvIcc-rroQ2wghw&oe=65F3B4C5&_nc_sid=10d13b",
    logo: "https://scontent-los2-1.cdninstagram.com/v/t51.2885-19/317428311_684871003074700_4410710922221987957_n.jpg?stp=dst-jpg_s320x320&_nc_ht=scontent-los2-1.cdninstagram.com&_nc_cat=104&_nc_ohc=PtkOGp9i_X4AX8Hpxf1&edm=AOQ1c0wBAAAA&ccb=7-5&oh=00_AfAYOES8XTFgDUK83Pa4KQFuJFZ0v2Xrw0sAwxYwj5PNfQ&oe=65F47F4B&_nc_sid=8b3546",
    brandMotto: "GO CLAPPED OR GO HOME!",
    products: [
      {
        id: 1,
        brandProductName: "Join The Mob TEE",
        brandProductimage:
          "https://scontent.cdninstagram.com/v/t51.29350-15/400519269_2602668563240530_8584301494442865519_n.jpg?stp=dst-jpg_e35&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDE4MDAuc2RyIn0&_nc_ht=scontent.cdninstagram.com&_nc_cat=110&_nc_ohc=TkD2O5-kpIMAX_mF-fB&edm=APs17CUBAAAA&ccb=7-5&ig_cache_key=MzIzMzg1NzM0ODM5MTA5MTkxNw%3D%3D.2-ccb7-5&oh=00_AfBfUuz7XYiUGDIS0ZQQLJ55toBf2wZDEBf42Ra9Ke1mWA&oe=65F2E4BE&_nc_sid=10d13b",
        brandProductPrice: 40000,
        images: [
          "https://scontent.cdninstagram.com/v/t51.29350-15/400519269_2602668563240530_8584301494442865519_n.jpg?stp=dst-jpg_e35&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDE4MDAuc2RyIn0&_nc_ht=scontent.cdninstagram.com&_nc_cat=110&_nc_ohc=TkD2O5-kpIMAX_mF-fB&edm=APs17CUBAAAA&ccb=7-5&ig_cache_key=MzIzMzg1NzM0ODM5MTA5MTkxNw%3D%3D.2-ccb7-5&oh=00_AfBfUuz7XYiUGDIS0ZQQLJ55toBf2wZDEBf42Ra9Ke1mWA&oe=65F2E4BE&_nc_sid=10d13b",
          "https://scontent.cdninstagram.com/v/t51.29350-15/400496876_327453263359281_3189870973122964182_n.jpg?stp=dst-jpg_e35&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDE4MDAuc2RyIn0&_nc_ht=scontent.cdninstagram.com&_nc_cat=109&_nc_ohc=2zwrIVHjPTgAX8Psm6p&edm=APs17CUBAAAA&ccb=7-5&ig_cache_key=MzIzMzg1NzM0ODM4MjY2Njg2Mw%3D%3D.2-ccb7-5&oh=00_AfCm0VCY6ZPImfhBxF2eqKKW8KvZ67v03UMaz-FKhXYa4Q&oe=65F2FAAA&_nc_sid=10d13b",
          "https://scontent.cdninstagram.com/v/t51.29350-15/401278094_1400885524109751_8254365685464817935_n.jpg?stp=dst-jpg_e35&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDE4MDAuc2RyIn0&_nc_ht=scontent.cdninstagram.com&_nc_cat=103&_nc_ohc=w9SacARXcUEAX-N73n6&edm=APs17CUBAAAA&ccb=7-5&ig_cache_key=MzIzMzg1NzM0ODcwMTQ2MDI3MA%3D%3D.2-ccb7-5&oh=00_AfArUU39BSn5mxIVs9EAcMdek6RbSnqO0AsHzO2aueVmWQ&oe=65F3A43A&_nc_sid=10d13b",
          "https://scontent.cdninstagram.com/v/t51.29350-15/369953848_996305631445379_8996728414697895194_n.jpg?stp=dst-jpg_e35&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDE4MDAuc2RyIn0&_nc_ht=scontent.cdninstagram.com&_nc_cat=111&_nc_ohc=9m6qcA0PD5AAX8rVYtG&edm=APs17CUBAAAA&ccb=7-5&ig_cache_key=MzIzMzg1NzM0ODM5OTM4NzY0OQ%3D%3D.2-ccb7-5&oh=00_AfDGIQmbR02YdQ0_zkX5XhP4xATSu2g5yNTUhjMUwWEs7A&oe=65F3C6B1&_nc_sid=10d13b",
        ],
      },

      {
        id: 2,
        brandProductName: "Go Clapped Tee",
        brandProductimage:
          "https://scontent.cdninstagram.com/v/t51.29350-15/318008242_146949941432785_6588595156995190736_n.jpg?stp=dst-jpg_e35&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDE3OTIuc2RyIn0&_nc_ht=scontent.cdninstagram.com&_nc_cat=101&_nc_ohc=Ru1kBErNAIkAX_UJ3FW&edm=APs17CUBAAAA&ccb=7-5&ig_cache_key=Mjk4NTMzNDg2MzQ4NDA4Mjk0Mg%3D%3D.2-ccb7-5&oh=00_AfDm22c8uUBRgDoG2NL7JKKqyUglrQiIITtWWMm211vVvw&oe=65F47553&_nc_sid=10d13b",
        images: [
          "https://scontent.cdninstagram.com/v/t51.29350-15/318008242_146949941432785_6588595156995190736_n.jpg?stp=dst-jpg_e35&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDE3OTIuc2RyIn0&_nc_ht=scontent.cdninstagram.com&_nc_cat=101&_nc_ohc=Ru1kBErNAIkAX_UJ3FW&edm=APs17CUBAAAA&ccb=7-5&ig_cache_key=Mjk4NTMzNDg2MzQ4NDA4Mjk0Mg%3D%3D.2-ccb7-5&oh=00_AfDm22c8uUBRgDoG2NL7JKKqyUglrQiIITtWWMm211vVvw&oe=65F47553&_nc_sid=10d13b",
          "https://scontent.cdninstagram.com/v/t51.29350-15/317755696_207671818322387_6012700860920343948_n.jpg?stp=dst-jpg_e35&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDE3OTIuc2RyIn0&_nc_ht=scontent.cdninstagram.com&_nc_cat=111&_nc_ohc=bpzZrfln22QAX8gcJnj&edm=APs17CUBAAAA&ccb=7-5&ig_cache_key=Mjk4NTMzNDg2MzYzNDkxNTEzMw%3D%3D.2-ccb7-5&oh=00_AfCz-JDd1GJEirmESlmZSms4tKqp33pYxM7P6DZKtUoaGg&oe=65F3630F&_nc_sid=10d13b",
          "https://scontent.cdninstagram.com/v/t51.29350-15/318140505_708396177109226_509942156864980451_n.jpg?stp=dst-jpg_e35&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDE3OTIuc2RyIn0&_nc_ht=scontent.cdninstagram.com&_nc_cat=102&_nc_ohc=Ef7qBjsv93AAX_fD2sO&edm=APs17CUBAAAA&ccb=7-5&ig_cache_key=Mjk4NTMzNDg2MzU4NDc0MjI0MA%3D%3D.2-ccb7-5&oh=00_AfDXzAFfmc9FVWHqLoRWPzYkjXHFmgomsBP7Xa0nTlKvzg&oe=65F3CBA5&_nc_sid=10d13b",
          "https://scontent.cdninstagram.com/v/t51.29350-15/313496793_1186637215267552_1144718091973163135_n.jpg?stp=dst-jpg_e35&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDE3OTQuc2RyIn0&_nc_ht=scontent.cdninstagram.com&_nc_cat=104&_nc_ohc=3RVlcaCSHGYAX_j5zXX&edm=APs17CUBAAAA&ccb=7-5&ig_cache_key=Mjk4NTMzMTUxMzc5NTQwNzM0MA%3D%3D.2-ccb7-5&oh=00_AfDuwlRZ8PaFecjACDPniFYfuBn5qF-Dw0VpSDFFBnjpBQ&oe=65F354BC&_nc_sid=10d13b",
        ],
        brandProductPrice: 55000,
      },
      {
        id: 3,
        brandProductName: "Clapped Shit Tee",
        brandProductimage:
          "https://scontent.cdninstagram.com/v/t51.29350-15/274950048_1550553548657939_1695427210340414493_n.jpg?stp=dst-jpg_e35&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDE3NTkuc2RyIn0&_nc_ht=scontent.cdninstagram.com&_nc_cat=111&_nc_ohc=u32PCSPyFn4AX-W_Qxz&edm=APs17CUBAAAA&ccb=7-5&ig_cache_key=Mjc4MzgyNDQzOTk0NzU3NDE4Mw%3D%3D.2-ccb7-5&oh=00_AfC1XwwxAIP84NckPzHc-L1FavcX4PN3fetZODsBg8Y9yg&oe=65F27F41&_nc_sid=10d13b",
        images: [
          "https://scontent.cdninstagram.com/v/t51.29350-15/274950048_1550553548657939_1695427210340414493_n.jpg?stp=dst-jpg_e35&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDE3NTkuc2RyIn0&_nc_ht=scontent.cdninstagram.com&_nc_cat=111&_nc_ohc=u32PCSPyFn4AX-W_Qxz&edm=APs17CUBAAAA&ccb=7-5&ig_cache_key=Mjc4MzgyNDQzOTk0NzU3NDE4Mw%3D%3D.2-ccb7-5&oh=00_AfC1XwwxAIP84NckPzHc-L1FavcX4PN3fetZODsBg8Y9yg&oe=65F27F41&_nc_sid=10d13b",
          "https://scontent.cdninstagram.com/v/t51.29350-15/275014091_284968493745711_2354031003337824854_n.jpg?stp=dst-jpg_e35&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDE3NzUuc2RyIn0&_nc_ht=scontent.cdninstagram.com&_nc_cat=103&_nc_ohc=1Ne3C77hNrIAX8jAcKw&edm=APs17CUBAAAA&ccb=7-5&ig_cache_key=Mjc4MzgyNDg0NzM2NTY4NTY2MQ%3D%3D.2-ccb7-5&oh=00_AfDiEtCvbZVo4dcU4dJH4JKSFkWLd9wh-kEYI1wzwgZKTA&oe=65F2B549&_nc_sid=10d13b",
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
      "https://scontent.cdninstagram.com/v/t51.29350-15/272987530_136514615522274_7403278329853662113_n.jpg?stp=dst-jpg_e35&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDE3OTYuc2RyIn0&_nc_ht=scontent.cdninstagram.com&_nc_cat=106&_nc_ohc=JVVefZCGoEYAX_DvpjP&edm=APs17CUBAAAA&ccb=7-5&ig_cache_key=Mjc2MjcyMzQyNTA2NjM5MzYzNw%3D%3D.2-ccb7-5&oh=00_AfBeLsof-YTeuAOgdUK0TZlIje5Hv8xl8D3MwW0gAtTJtQ&oe=65F3D979&_nc_sid=10d13b",
    logo: "https://scontent-los2-1.cdninstagram.com/v/t51.2885-19/285897188_969164697084076_6708409492982733118_n.jpg?stp=dst-jpg_s320x320&_nc_ht=scontent-los2-1.cdninstagram.com&_nc_cat=104&_nc_ohc=fsktCDdo5aUAX_33TC3&edm=AOQ1c0wBAAAA&ccb=7-5&oh=00_AfAzpAoFFEeQJ-sMiNRAjmZ_lbA84J4S-yTVHtUSNq-dOg&oe=65F43713&_nc_sid=8b3546",
    brandMotto: "Nature",
    products: [
      {
        id: 1,
        brandProductName: "Severe Nature’s Boxers",
        brandProductimage:
          "https://scontent.cdninstagram.com/v/t39.30808-6/414082706_18294669346145884_5626229249873728893_n.jpg?stp=dst-jpg_e15&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDE4MDAuc2RyIn0&_nc_ht=scontent.cdninstagram.com&_nc_cat=104&_nc_ohc=8vCsdm99hXcAX8SS3n2&edm=APs17CUAAAAA&ccb=7-5&ig_cache_key=MzI2ODYzMjYwMTM5ODgwMTQyNg%3D%3D.2-ccb7-5&oh=00_AfCkPRYovsuN33gXLoX72DqWnqhIJ1DB2YfspYE43NUWWQ&oe=65F37A1D&_nc_sid=10d13b",
        brandProductPrice: 40000,
        images: [
          "https://scontent.cdninstagram.com/v/t39.30808-6/414082706_18294669346145884_5626229249873728893_n.jpg?stp=dst-jpg_e15&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDE4MDAuc2RyIn0&_nc_ht=scontent.cdninstagram.com&_nc_cat=104&_nc_ohc=8vCsdm99hXcAX8SS3n2&edm=APs17CUAAAAA&ccb=7-5&ig_cache_key=MzI2ODYzMjYwMTM5ODgwMTQyNg%3D%3D.2-ccb7-5&oh=00_AfCkPRYovsuN33gXLoX72DqWnqhIJ1DB2YfspYE43NUWWQ&oe=65F37A1D&_nc_sid=10d13b",
          "https://scontent.cdninstagram.com/v/t39.30808-6/415059365_18294669355145884_8202189798822706223_n.jpg?stp=dst-jpg_e15&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDE4MDAuc2RyIn0&_nc_ht=scontent.cdninstagram.com&_nc_cat=104&_nc_ohc=bdsU4D6FxvAAX_9Ehl-&edm=APs17CUAAAAA&ccb=7-5&ig_cache_key=MzI2ODYzMjYwMTM5ODc3NjQzNA%3D%3D.2-ccb7-5&oh=00_AfBkvbFNygl-zoK4aU4UeYmo9Bp38pyCW4ryChhHs58oQA&oe=65F46A60&_nc_sid=10d13b",
          "https://scontent.cdninstagram.com/v/t39.30808-6/415035730_18294669394145884_913080694847436534_n.jpg?stp=dst-jpg_e35_p720x720_sh0.08&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDE4MDAuc2RyIn0&_nc_ht=scontent.cdninstagram.com&_nc_cat=104&_nc_ohc=Xm6imlFtZjQAX_Kk0FX&edm=APs17CUAAAAA&ccb=7-5&ig_cache_key=MzI2ODYzMjYwMTM5ODgyMDc5MA%3D%3D.2-ccb7-5&oh=00_AfCyjoCoETOfNXTNLXfUAhMawGao2KQV5x3zmAWW-VAGQA&oe=65F2F7CD&_nc_sid=10d13b",
          "https://scontent.cdninstagram.com/v/t39.30808-6/415180098_18294755323145884_5268787576379042734_n.jpg?stp=dst-jpg_e35_p720x720_sh0.08&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDE4MDAuc2RyIn0&_nc_ht=scontent.cdninstagram.com&_nc_cat=104&_nc_ohc=Q9n2kCRMJo4AX_9q_e2&edm=APs17CUAAAAA&ccb=7-5&ig_cache_key=MzI2OTE3MDM3OTA4NTgxODI5MQ%3D%3D.2-ccb7-5&oh=00_AfAe0gDY4NF-6mpz7TCPESzlN4dBS03HWuHBnh5NDFXLLg&oe=65F3B41A&_nc_sid=10d13b",
        ],
      },

      {
        id: 2,
        brandProductName: "‘Bushman’ Tee",
        brandProductimage:
          "https://scontent.cdninstagram.com/v/t39.30808-6/377551668_18279121534145884_8267564354243374341_n.jpg?stp=dst-jpg_e15&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDE4MDAuc2RyIn0&_nc_ht=scontent.cdninstagram.com&_nc_cat=104&_nc_ohc=EU1VzT7Ey2YAX_ZWhSD&edm=APs17CUAAAAA&ccb=7-5&ig_cache_key=MzE4NzUwNDgyNTEyODUyMTA0OA%3D%3D.2-ccb7-5&oh=00_AfDQBklYCOAAH-LU3xjWhA70EXkcpJZN5hM13kFga8TuYw&oe=65F2CFC1&_nc_sid=10d13b",
        images: [
          "https://scontent.cdninstagram.com/v/t39.30808-6/377551668_18279121534145884_8267564354243374341_n.jpg?stp=dst-jpg_e15&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDE4MDAuc2RyIn0&_nc_ht=scontent.cdninstagram.com&_nc_cat=104&_nc_ohc=EU1VzT7Ey2YAX_ZWhSD&edm=APs17CUAAAAA&ccb=7-5&ig_cache_key=MzE4NzUwNDgyNTEyODUyMTA0OA%3D%3D.2-ccb7-5&oh=00_AfDQBklYCOAAH-LU3xjWhA70EXkcpJZN5hM13kFga8TuYw&oe=65F2CFC1&_nc_sid=10d13b",
          "https://scontent.cdninstagram.com/v/t39.30808-6/376642365_18279121537145884_4751687362626480211_n.jpg?stp=dst-jpg_e15&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDE4MDAuc2RyIn0&_nc_ht=scontent.cdninstagram.com&_nc_cat=104&_nc_ohc=R45Q8za-7GYAX-xUdB5&edm=APs17CUAAAAA&ccb=7-5&ig_cache_key=MzE4NzUwNDgyNTEyODYwMjkyNw%3D%3D.2-ccb7-5&oh=00_AfBBS5jXoHe3sQtoZSTSNVBkaVTUBDKsAwpI0XCiD3S8bg&oe=65F3925E&_nc_sid=10d13b",
          "https://scontent.cdninstagram.com/v/t39.30808-6/376625079_18279121546145884_3829492912987949178_n.jpg?stp=dst-jpg_e35_p720x720_sh0.08&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDE4MDAuc2RyIn0&_nc_ht=scontent.cdninstagram.com&_nc_cat=104&_nc_ohc=UtJQbVgP8PgAX9utht0&edm=APs17CUAAAAA&ccb=7-5&ig_cache_key=MzE4NzUwNDgyNTEyODUyNTExMQ%3D%3D.2-ccb7-5&oh=00_AfBGVOCk7etC7KJgJUT9wH898M0DwXt6f-qN1C2nJVxJnA&oe=65F41E04&_nc_sid=10d13b",
        ],
        brandProductPrice: 55000,
      },
      {
        id: 3,
        brandProductName: "Forevernature Tee",
        brandProductimage:
          "https://scontent.cdninstagram.com/v/t39.30808-6/362015761_18271942096145884_6873699941854340555_n.jpg?stp=dst-jpg_e15&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDE4MDAuc2RyIn0&_nc_ht=scontent.cdninstagram.com&_nc_cat=104&_nc_ohc=xOvMCuozqS8AX-qtbKI&edm=APs17CUAAAAA&ccb=7-5&ig_cache_key=MzE1MTIwMjQxOTQ4MzAxNzA2Nw%3D%3D.2-ccb7-5&oh=00_AfDFy34-D0jrHTYjUdkAeKBvRts6oSOwYLhFmdborXy4TA&oe=65F44DB3&_nc_sid=10d13b",
        images: [
          "https://scontent.cdninstagram.com/v/t39.30808-6/362015761_18271942096145884_6873699941854340555_n.jpg?stp=dst-jpg_e15&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDE4MDAuc2RyIn0&_nc_ht=scontent.cdninstagram.com&_nc_cat=104&_nc_ohc=xOvMCuozqS8AX-qtbKI&edm=APs17CUAAAAA&ccb=7-5&ig_cache_key=MzE1MTIwMjQxOTQ4MzAxNzA2Nw%3D%3D.2-ccb7-5&oh=00_AfDFy34-D0jrHTYjUdkAeKBvRts6oSOwYLhFmdborXy4TA&oe=65F44DB3&_nc_sid=10d13b",
          "https://scontent.cdninstagram.com/v/t39.30808-6/361972687_18271942111145884_3992280977483759454_n.jpg?stp=dst-jpg_e15&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDE4MDAuc2RyIn0&_nc_ht=scontent.cdninstagram.com&_nc_cat=104&_nc_ohc=-D1i8QZ-I0EAX_65B9w&edm=APs17CUAAAAA&ccb=7-5&ig_cache_key=MzE1MTIwMjQxOTQ4MzAxNzM1Mw%3D%3D.2-ccb7-5&oh=00_AfAPMPqhkQCqx1z9Bzqbr0lOF0vshz-5hhagUyz77ESdmw&oe=65F30F31&_nc_sid=10d13b",
          "https://scontent.cdninstagram.com/v/t39.30808-6/361999155_18271942120145884_5379113747083955513_n.jpg?stp=dst-jpg_e35_p720x720_sh0.08&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDE4MDAuc2RyIn0&_nc_ht=scontent.cdninstagram.com&_nc_cat=104&_nc_ohc=XUHKQeOpUoEAX-ROnWB&edm=APs17CUAAAAA&ccb=7-5&ig_cache_key=MzE1MTIwMjQxOTQ3NDU3NzQ1NA%3D%3D.2-ccb7-5&oh=00_AfBRp3Hj5-uXwS0hYzAFJg8ceGnKon5aOjPwR--CNojidQ&oe=65F49BB2&_nc_sid=10d13b",
          "https://scontent.cdninstagram.com/v/t39.30808-6/361650963_18271942129145884_7365852082347636568_n.jpg?stp=dst-jpg_e35_p720x720_sh0.08&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDE4MDAuc2RyIn0&_nc_ht=scontent.cdninstagram.com&_nc_cat=104&_nc_ohc=jhySnLSNJo4AX9p_zsQ&edm=APs17CUAAAAA&ccb=7-5&ig_cache_key=MzE1MTIwMjQxOTkxMDY3MjA4MA%3D%3D.2-ccb7-5&oh=00_AfCDYu5XTQuyCTdaYU2bffA_PC9gFL1KxgktiN7rT_IiHA&oe=65F39B4B&_nc_sid=10d13b",
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
      "https://scontent.cdninstagram.com/v/t51.29350-15/396144309_725269805606018_2604559034118657150_n.jpg?stp=dst-jpg_e35&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDE0NDAuc2RyIn0&_nc_ht=scontent.cdninstagram.com&_nc_cat=102&_nc_ohc=4iTwK4Q2t3YAX-lija5&edm=APs17CUBAAAA&ccb=7-5&ig_cache_key=MzIyMzYzNTI3NDQyNjkxMjE3OA%3D%3D.2-ccb7-5&oh=00_AfD91urdP-HQDf8tF_-_SRyCAz6sl2IipdTsDp4xjqIExQ&oe=65F3BE21&_nc_sid=10d13b",
    logo: "https://scontent-los2-1.cdninstagram.com/v/t51.2885-19/422234504_1437227286905929_642003909993193857_n.jpg?stp=dst-jpg_s320x320&_nc_ht=scontent-los2-1.cdninstagram.com&_nc_cat=101&_nc_ohc=svFKxJTJemIAX9imz_-&edm=AOQ1c0wBAAAA&ccb=7-5&oh=00_AfB1gFGVuN5xYLex7w7EjQ4xnbOAETodE0XHprsumk-_Fw&oe=65F4BD8A&_nc_sid=8b3546",
    brandMotto: "turndasix!",
    products: [
      {
        id: 1,
        brandProductName: "NINE LIVES",
        brandProductimage:
          "https://scontent.cdninstagram.com/v/t51.29350-15/422375672_1391864471461128_5358354983688765102_n.jpg?stp=dst-jpg_e35&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDE3OTguc2RyIn0&_nc_ht=scontent.cdninstagram.com&_nc_cat=100&_nc_ohc=Ff4lt2alRY0AX9XZTQK&edm=APs17CUBAAAA&ccb=7-5&ig_cache_key=MzI4ODk5ODU1Mjg1Mzg2MDg1MA%3D%3D.2-ccb7-5&oh=00_AfDyWtG5Me8f-eF1-FVuAb-vSea05unoXsBFwYREUfwPWg&oe=65F3C0E6&_nc_sid=10d13b",

        images: [
          "https://scontent.cdninstagram.com/v/t51.29350-15/422375672_1391864471461128_5358354983688765102_n.jpg?stp=dst-jpg_e35&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDE3OTguc2RyIn0&_nc_ht=scontent.cdninstagram.com&_nc_cat=100&_nc_ohc=Ff4lt2alRY0AX9XZTQK&edm=APs17CUBAAAA&ccb=7-5&ig_cache_key=MzI4ODk5ODU1Mjg1Mzg2MDg1MA%3D%3D.2-ccb7-5&oh=00_AfDyWtG5Me8f-eF1-FVuAb-vSea05unoXsBFwYREUfwPWg&oe=65F3C0E6&_nc_sid=10d13b",
          "https://scontent.cdninstagram.com/v/t51.29350-15/423433508_1322911541745134_2065573711757042818_n.jpg?stp=dst-jpg_e35_p720x720&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDE3OTguc2RyIn0&_nc_ht=scontent.cdninstagram.com&_nc_cat=102&_nc_ohc=v0AZMe4ekooAX8YSgCX&edm=APs17CUBAAAA&ccb=7-5&ig_cache_key=MzI4ODk5ODU1MzE3Mjc3ODE0NQ%3D%3D.2-ccb7-5&oh=00_AfCOUfpqf50p9-P9Pqs_XmYe6mI-HmVcvqnZzeUQdybFpw&oe=65F4A83A&_nc_sid=10d13b",
          "https://scontent.cdninstagram.com/v/t51.29350-15/422641613_909067264217235_2327057274589711836_n.jpg?stp=dst-jpg_e35&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDE3OTguc2RyIn0&_nc_ht=scontent.cdninstagram.com&_nc_cat=103&_nc_ohc=qiZLPc8jHhAAX9rLFfG&edm=APs17CUBAAAA&ccb=7-5&ig_cache_key=MzI4ODk5ODU1Mjg2MjMyMjc5MA%3D%3D.2-ccb7-5&oh=00_AfCE0UPtR6UtBZISheEdEOdu8ZBj7SmxFDDeO6wm7pPJlA&oe=65F2F315&_nc_sid=10d13b",
        ],
        brandProductPrice: 25000,
      },
      {
        id: 2,
        brandProductName: "NINE JEAN",
        brandProductimage:
          "https://scontent.cdninstagram.com/v/t51.29350-15/421809011_3585013165050033_7427575247665855514_n.jpg?stp=dst-jpg_e35&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDE3OTguc2RyIn0&_nc_ht=scontent.cdninstagram.com&_nc_cat=109&_nc_ohc=WagTDsr25HAAX9yqV-b&edm=APs17CUBAAAA&ccb=7-5&ig_cache_key=MzI4ODk5ODU1Mjg1Mzg4MTEyNg%3D%3D.2-ccb7-5&oh=00_AfCpsyJSAkva8iTdAawRN7tRhHsGpOBQjLBvLiskCH0I5Q&oe=65F41A73&_nc_sid=10d13b",
        brandProductPrice: 40000,
        images: [
          "https://scontent.cdninstagram.com/v/t51.29350-15/421809011_3585013165050033_7427575247665855514_n.jpg?stp=dst-jpg_e35&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDE3OTguc2RyIn0&_nc_ht=scontent.cdninstagram.com&_nc_cat=109&_nc_ohc=WagTDsr25HAAX9yqV-b&edm=APs17CUBAAAA&ccb=7-5&ig_cache_key=MzI4ODk5ODU1Mjg1Mzg4MTEyNg%3D%3D.2-ccb7-5&oh=00_AfCpsyJSAkva8iTdAawRN7tRhHsGpOBQjLBvLiskCH0I5Q&oe=65F41A73&_nc_sid=10d13b",
          "https://scontent.cdninstagram.com/v/t51.29350-15/423417197_395012369851547_641763985005228359_n.jpg?stp=dst-jpg_e35&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDE3OTguc2RyIn0&_nc_ht=scontent.cdninstagram.com&_nc_cat=111&_nc_ohc=tHOnfX6j4ewAX8w-6vf&edm=APs17CUBAAAA&ccb=7-5&ig_cache_key=MzI4ODk5ODU1MzE1NTg2NDY0Nw%3D%3D.2-ccb7-5&oh=00_AfDb8eqqAmG78mDCxqBuO_mokclFTyWVbganj_DBpDtx2w&oe=65F3CCE1&_nc_sid=10d13b",
          "https://scontent.cdninstagram.com/v/t51.29350-15/422128532_1376809023205322_455000421887652778_n.jpg?stp=dst-jpg_e35&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDE3OTguc2RyIn0&_nc_ht=scontent.cdninstagram.com&_nc_cat=102&_nc_ohc=4Bn5JjuP-kgAX8tvogt&edm=APs17CUBAAAA&ccb=7-5&ig_cache_key=MzI4ODk5ODU1Mjg2MjI1ODE5MQ%3D%3D.2-ccb7-5&oh=00_AfBVYycz6knvZ0JS7MA1ryrm82buJ1f8eHcKRjSz9gG7Jg&oe=65F3F234&_nc_sid=10d13b",
          "https://scontent.cdninstagram.com/v/t51.29350-15/422641613_909067264217235_2327057274589711836_n.jpg?stp=dst-jpg_e35&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDE3OTguc2RyIn0&_nc_ht=scontent.cdninstagram.com&_nc_cat=103&_nc_ohc=qiZLPc8jHhAAX9rLFfG&edm=APs17CUBAAAA&ccb=7-5&ig_cache_key=MzI4ODk5ODU1Mjg2MjMyMjc5MA%3D%3D.2-ccb7-5&oh=00_AfCE0UPtR6UtBZISheEdEOdu8ZBj7SmxFDDeO6wm7pPJlA&oe=65F2F315&_nc_sid=10d13b",
        ],
      },

      {
        id: 3,
        brandProductName: "T U R N D A S I X JERSEY",
        brandProductimage:
          "https://scontent.cdninstagram.com/v/t51.29350-15/362552297_605370751703863_4675485624364345211_n.jpg?stp=dst-jpg_e35&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDE4MDAuc2RyIn0&_nc_ht=scontent.cdninstagram.com&_nc_cat=107&_nc_ohc=QVxsRyiD0GkAX-vXKhe&edm=APs17CUBAAAA&ccb=7-5&ig_cache_key=MzE1MjAxNzQ1NjgxMjI4NjAxOQ%3D%3D.2-ccb7-5&oh=00_AfCm2MGzmrZSSfEmBy4ay1gt3h1CeIPkskrpy_G0LqaR1A&oe=65F45BAE&_nc_sid=10d13b",
        images: [
          "https://scontent.cdninstagram.com/v/t51.29350-15/362552297_605370751703863_4675485624364345211_n.jpg?stp=dst-jpg_e35&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDE4MDAuc2RyIn0&_nc_ht=scontent.cdninstagram.com&_nc_cat=107&_nc_ohc=QVxsRyiD0GkAX-vXKhe&edm=APs17CUBAAAA&ccb=7-5&ig_cache_key=MzE1MjAxNzQ1NjgxMjI4NjAxOQ%3D%3D.2-ccb7-5&oh=00_AfCm2MGzmrZSSfEmBy4ay1gt3h1CeIPkskrpy_G0LqaR1A&oe=65F45BAE&_nc_sid=10d13b",
          "https://scontent.cdninstagram.com/v/t51.29350-15/362009648_1706075463166338_8281090697098394845_n.jpg?stp=dst-jpg_e35&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDE4MDAuc2RyIn0&_nc_ht=scontent.cdninstagram.com&_nc_cat=106&_nc_ohc=SWaTnrfSM2QAX8Qg1TZ&edm=APs17CUBAAAA&ccb=7-5&ig_cache_key=MzE1MjAxNzQ1NjgxMjM5NDIxNQ%3D%3D.2-ccb7-5&oh=00_AfBZ0YEiKwpJDERV9pYTH9oWMC73sidhX1cM447iuSlzOg&oe=65F3CC3A&_nc_sid=10d13b",
          "https://scontent.cdninstagram.com/v/t51.29350-15/361792668_269041022402739_8837214034991423944_n.jpg?stp=dst-jpg_e35_p720x720&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDE3OTcuc2RyIn0&_nc_ht=scontent.cdninstagram.com&_nc_cat=103&_nc_ohc=lHTbhdupxmcAX9gyZ1L&edm=APs17CUBAAAA&ccb=7-5&ig_cache_key=MzE1MjAxNzQ1NjgwMzkxMTg3MA%3D%3D.2-ccb7-5&oh=00_AfCiUMPE2T1Il0cklNE4FIapVxI7HaNxIl-p4E88yyP7_Q&oe=65F3209E&_nc_sid=10d13b",
          "https://scontent.cdninstagram.com/v/t51.29350-15/361979912_660308989030998_5939251106585634781_n.jpg?stp=dst-jpg_e35_p720x720&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDE3OTcuc2RyIn0&_nc_ht=scontent.cdninstagram.com&_nc_cat=106&_nc_ohc=9Sw7e56lw24AX8rGNyT&edm=APs17CUBAAAA&ccb=7-5&ig_cache_key=MzE1MjAxNzQ1NjgxMjMxODcwMQ%3D%3D.2-ccb7-5&oh=00_AfBCJQ7OTa9Nlpzwrtw3VDboyY4abZCiw0eYgeIP735WlQ&oe=65F409CF&_nc_sid=10d13b",
        ],
        brandProductPrice: 55000,
      },
      {
        id: 4,
        brandProductName: "TURNDASIX RED JERSEY",
        brandProductimage:
          "https://scontent.cdninstagram.com/v/t51.29350-15/426743922_1771738203295376_1674661195551706197_n.jpg?stp=dst-jpg_e35&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDE3OTkuc2RyIn0&_nc_ht=scontent.cdninstagram.com&_nc_cat=108&_nc_ohc=2Sa4C8hPSFsAX-OsVjm&edm=APs17CUBAAAA&ccb=7-5&ig_cache_key=MzMwMDUxMDc4OTYxOTkzMTU0OA%3D%3D.2-ccb7-5&oh=00_AfDPUW7_INVYUcD6wGdWT5a2LWfMdraGuHcX7zCgUltQyQ&oe=65F44AC9&_nc_sid=10d13b",
        images: [
          "https://scontent.cdninstagram.com/v/t51.29350-15/426743922_1771738203295376_1674661195551706197_n.jpg?stp=dst-jpg_e35&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDE3OTkuc2RyIn0&_nc_ht=scontent.cdninstagram.com&_nc_cat=108&_nc_ohc=2Sa4C8hPSFsAX-OsVjm&edm=APs17CUBAAAA&ccb=7-5&ig_cache_key=MzMwMDUxMDc4OTYxOTkzMTU0OA%3D%3D.2-ccb7-5&oh=00_AfDPUW7_INVYUcD6wGdWT5a2LWfMdraGuHcX7zCgUltQyQ&oe=65F44AC9&_nc_sid=10d13b",
          "https://scontent.cdninstagram.com/v/t51.29350-15/395762275_669723261933103_5362182929555613962_n.jpg?stp=dst-jpg_e35&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDE0NDAuc2RyIn0&_nc_ht=scontent.cdninstagram.com&_nc_cat=107&_nc_ohc=Wj4FgVFtLIMAX_hxYnU&edm=APs17CUBAAAA&ccb=7-5&ig_cache_key=MzIyMzYzNTI3NDQzNTE2NjI5MQ%3D%3D.2-ccb7-5&oh=00_AfApYWo0UG6oGI42O1ZB7P4Z6B97ptZzh376JdbWWmq5PA&oe=65F4AEA8&_nc_sid=10d13b",
          "https://scontent.cdninstagram.com/v/t51.29350-15/397022883_3263820827249289_409417679715336751_n.jpg?stp=dst-jpg_e35&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDE0NDAuc2RyIn0&_nc_ht=scontent.cdninstagram.com&_nc_cat=109&_nc_ohc=yqrHw6sHdJUAX8PSGke&edm=APs17CUBAAAA&ccb=7-5&ig_cache_key=MzIyMzYzNTI3NDQyNjk5MjA1OA%3D%3D.2-ccb7-5&oh=00_AfDwfbF638THcZ8_8tHia-Hpe6UQl61DAtgWO0dYlsXpkg&oe=65F43A67&_nc_sid=10d13b",
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
      "https://scontent.cdninstagram.com/v/t51.29350-15/403901468_317243244531299_6376767711093943092_n.jpg?stp=dst-jpg_e35&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDE4MDAuc2RyIn0&_nc_ht=scontent.cdninstagram.com&_nc_cat=111&_nc_ohc=t2DV4VEaL1kAX9RbQQW&edm=APs17CUBAAAA&ccb=7-5&ig_cache_key=MzI0MzMxMzkwODEwNDE3Mjk4MA%3D%3D.2-ccb7-5&oh=00_AfDGAIxDOYyNegaas6yMKqqXwCkWgSUwkheLrHTFi1MIDQ&oe=65F2EFA5&_nc_sid=10d13b",
    logo: "https://scontent-los2-1.cdninstagram.com/v/t51.2885-19/297076084_426520212838420_1656312490370428634_n.jpg?stp=dst-jpg_s320x320&_nc_ht=scontent-los2-1.cdninstagram.com&_nc_cat=104&_nc_ohc=BVAO2C58gKYAX_N04E_&edm=AOQ1c0wBAAAA&ccb=7-5&oh=00_AfDq4rmhvDoFXAUWwgrvGfRSm-x3LLETxkftrDuYjvZIcw&oe=65F2FE94&_nc_sid=8b3546",
    brandMotto: "DARETOBEDIFFERENT!",
    products: [
      {
        id: 1,
        brandProductName: "BRK/WESTNORTH TEE",
        brandProductimage:
          "https://scontent.cdninstagram.com/v/t51.29350-15/416489490_341405625347031_7236190749780014573_n.jpg?stp=dst-jpg_e35&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDE3OTguc2RyIn0&_nc_ht=scontent.cdninstagram.com&_nc_cat=103&_nc_ohc=_qxp7OQJxyUAX_w_9zK&edm=APs17CUBAAAA&ccb=7-5&ig_cache_key=MzI3MzgzMzkyNjA5NzA4NDUzNQ%3D%3D.2-ccb7-5&oh=00_AfCgQE2Xv1k0kt5Ip2-HGzxTmtzkO7ua9_GqzS9SapGraw&oe=65F4502C&_nc_sid=10d13b",

        images: [
          "https://scontent.cdninstagram.com/v/t51.29350-15/416489490_341405625347031_7236190749780014573_n.jpg?stp=dst-jpg_e35&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDE3OTguc2RyIn0&_nc_ht=scontent.cdninstagram.com&_nc_cat=103&_nc_ohc=_qxp7OQJxyUAX_w_9zK&edm=APs17CUBAAAA&ccb=7-5&ig_cache_key=MzI3MzgzMzkyNjA5NzA4NDUzNQ%3D%3D.2-ccb7-5&oh=00_AfCgQE2Xv1k0kt5Ip2-HGzxTmtzkO7ua9_GqzS9SapGraw&oe=65F4502C&_nc_sid=10d13b",

          "https://scontent.cdninstagram.com/v/t51.29350-15/416434373_181295925041281_1013504903275337987_n.jpg?stp=dst-jpg_e35&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDE3OTguc2RyIn0&_nc_ht=scontent.cdninstagram.com&_nc_cat=101&_nc_ohc=pcHNDORroOIAX9bl6oq&edm=APs17CUBAAAA&ccb=7-5&ig_cache_key=MzI3MzgzMzkyNjA4MDE0NDE5Nw%3D%3D.2-ccb7-5&oh=00_AfAomJETCBwk5ly_IBUNGW143rKUIR18TdO_co7G9uJxkw&oe=65F2E557&_nc_sid=10d13b",

          "https://scontent.cdninstagram.com/v/t51.29350-15/416611110_1336292374437701_3631023857045954592_n.jpg?stp=dst-jpg_e35&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDE3OTguc2RyIn0&_nc_ht=scontent.cdninstagram.com&_nc_cat=105&_nc_ohc=yeCpImkHViIAX-Gnx4B&edm=APs17CUBAAAA&ccb=7-5&ig_cache_key=MzI3MzgzMzkyNTc3ODE0MTQ2Nw%3D%3D.2-ccb7-5&oh=00_AfCi3gZirCh2moQ4fKZt2C9NBc8uiMNUKWm-cmzMboQUgg&oe=65F405E5&_nc_sid=10d13b",

          "https://scontent.cdninstagram.com/v/t51.29350-15/416922973_906561627514954_5330843096369107404_n.jpg?stp=dst-jpg_e35&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDE3OTguc2RyIn0&_nc_ht=scontent.cdninstagram.com&_nc_cat=110&_nc_ohc=Jx9NFizQzKAAX_V4F4b&edm=APs17CUBAAAA&ccb=7-5&ig_cache_key=MzI3MzgzMzkyNTc2OTkyOTQ5OA%3D%3D.2-ccb7-5&oh=00_AfDNWLv4R0sEIXzZMoCYOh_cIYPZk8IeZhVEjZuwblGlcQ&oe=65F3E1EC&_nc_sid=10d13b",
        ],
        brandProductPrice: 25000,
      },
      {
        id: 2,
        brandProductName: "WESTNORTH TEE",
        brandProductimage:
          "https://scontent.cdninstagram.com/v/t51.29350-15/403901468_317243244531299_6376767711093943092_n.jpg?stp=dst-jpg_e35&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDE4MDAuc2RyIn0&_nc_ht=scontent.cdninstagram.com&_nc_cat=111&_nc_ohc=t2DV4VEaL1kAX9RbQQW&edm=APs17CUBAAAA&ccb=7-5&ig_cache_key=MzI0MzMxMzkwODEwNDE3Mjk4MA%3D%3D.2-ccb7-5&oh=00_AfDGAIxDOYyNegaas6yMKqqXwCkWgSUwkheLrHTFi1MIDQ&oe=65F2EFA5&_nc_sid=10d13b",
        brandProductPrice: 40000,
        images: [
          "https://scontent.cdninstagram.com/v/t51.29350-15/403901468_317243244531299_6376767711093943092_n.jpg?stp=dst-jpg_e35&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDE4MDAuc2RyIn0&_nc_ht=scontent.cdninstagram.com&_nc_cat=111&_nc_ohc=t2DV4VEaL1kAX9RbQQW&edm=APs17CUBAAAA&ccb=7-5&ig_cache_key=MzI0MzMxMzkwODEwNDE3Mjk4MA%3D%3D.2-ccb7-5&oh=00_AfDGAIxDOYyNegaas6yMKqqXwCkWgSUwkheLrHTFi1MIDQ&oe=65F2EFA5&_nc_sid=10d13b",
          "https://scontent.cdninstagram.com/v/t51.29350-15/404932488_3586202684998504_5355886791866044381_n.jpg?stp=dst-jpg_e35&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDE4MDAuc2RyIn0&_nc_ht=scontent.cdninstagram.com&_nc_cat=104&_nc_ohc=ZLilXtaxqkcAX_toO16&edm=APs17CUBAAAA&ccb=7-5&ig_cache_key=MzI0MzMxMzkwODEwNDE3MzA2Mw%3D%3D.2-ccb7-5&oh=00_AfBDB_ZhzJPqfQgWKsl-TudAZPqoW19ctRDdi1oT2UimTQ&oe=65F46FAA&_nc_sid=10d13b",
          "https://scontent.cdninstagram.com/v/t51.29350-15/403942440_2446242789049380_7029998549486868092_n.jpg?stp=dst-jpg_e35&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDE4MDAuc2RyIn0&_nc_ht=scontent.cdninstagram.com&_nc_cat=100&_nc_ohc=tRwFr4xJGcAAX8xxAXh&edm=APs17CUBAAAA&ccb=7-5&ig_cache_key=MzI0MzMxMzkwODEwNDA2NTk1Ng%3D%3D.2-ccb7-5&oh=00_AfAxsFl9NOth5d5XfUcDIJyicll0_AVsZLO7I0EUpfu_zA&oe=65F366D5&_nc_sid=10d13b",
          "https://scontent.cdninstagram.com/v/t51.29350-15/403928263_175484845647812_5439169225463986714_n.jpg?stp=dst-jpg_e35&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDE4MDAuc2RyIn0&_nc_ht=scontent.cdninstagram.com&_nc_cat=108&_nc_ohc=4T33bWqwQVoAX9M0f8j&edm=APs17CUBAAAA&ccb=7-5&ig_cache_key=MzI0MzMxMzkwODEwNDIyMTk1NA%3D%3D.2-ccb7-5&oh=00_AfB0Jfb7Nt4RwBs0ebNyqf7cVExnw9hewRmWsQSVSC4Uiw&oe=65F351BC&_nc_sid=10d13b",
        ],
      },

      {
        id: 3,
        brandProductName: "WESTNORTH CIGAR TEE",
        brandProductimage:
          "https://scontent.cdninstagram.com/v/t51.29350-15/346105085_838472287705879_7432816675606820730_n.jpg?stp=dst-jpg_e35&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDE4MTguc2RyIn0&_nc_ht=scontent.cdninstagram.com&_nc_cat=107&_nc_ohc=S_Afkb5BMY8AX9oJfoE&edm=APs17CUBAAAA&ccb=7-5&ig_cache_key=MzEwMTE4MjQwOTA3Njg1MjIwOA%3D%3D.2-ccb7-5&oh=00_AfDXv2xWmWGCq2fn3LJVRkh9R2PEp3r7PvJvKLiuqxtbkw&oe=65F49175&_nc_sid=10d13b",
        images: [
          "https://scontent.cdninstagram.com/v/t51.29350-15/346666146_905989293808489_979745151117671518_n.jpg?stp=dst-jpg_e35&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDE4MTguc2RyIn0&_nc_ht=scontent.cdninstagram.com&_nc_cat=101&_nc_ohc=23aNqozmwIQAX9mM0Bz&edm=APs17CUBAAAA&ccb=7-5&ig_cache_key=MzEwMjY3NTk1MTgyNTcwNDYzNA%3D%3D.2-ccb7-5&oh=00_AfDH91XQy0rnemwJSLpClJ0RCE-gRrYmRe9MLcON6JU5FA&oe=65F4722B&_nc_sid=10d13b",
          "https://scontent.cdninstagram.com/v/t51.29350-15/346448956_618559150331489_7106275478803614762_n.jpg?stp=dst-jpg_e15&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xMDgweDEzNjMuc2RyIn0&_nc_ht=scontent.cdninstagram.com&_nc_cat=105&_nc_ohc=DrBQzZYH5nsAX_2ySOe&edm=APs17CUBAAAA&ccb=7-5&ig_cache_key=MzEwMjY3NTk1MTc3NTE4NzA1OA%3D%3D.2-ccb7-5&oh=00_AfCJqBj12jT7o-hRMI3Hmfw4QEahthBB1kdlTooHanxH8w&oe=65F2ED18&_nc_sid=10d13b",
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
      "https://scontent.cdninstagram.com/v/t51.29350-15/419298993_681471870545304_7527732205266600401_n.jpg?stp=dst-jpg_e35&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDE3OTkuc2RyIn0&_nc_ht=scontent.cdninstagram.com&_nc_cat=100&_nc_ohc=27K04n2fVHMAX-VdKN4&edm=APs17CUBAAAA&ccb=7-5&ig_cache_key=MzI3ODg3NTYzMjE3ODQ2MDgzNw%3D%3D.2-ccb7-5&oh=00_AfB1Kr7lACINbn9ElU3BTSNMcyqkz8cSVxnvWfiR2iEH3g&oe=65F31299&_nc_sid=10d13b",
    logo: "https://scontent-los2-1.cdninstagram.com/v/t51.2885-19/429342101_1095202821626782_8544184569913626891_n.jpg?stp=dst-jpg_s320x320&_nc_ht=scontent-los2-1.cdninstagram.com&_nc_cat=110&_nc_ohc=eg782uX6CBMAX8yDq3U&edm=AOQ1c0wBAAAA&ccb=7-5&oh=00_AfByBBmowcuvCD2Jg_1dGpziQThDEa-Ntm34JgPeGPzcNg&oe=65F41D05&_nc_sid=8b3546",
    brandMotto: "THIS LIFE I LIVE IS FOREVER",
    products: [
      {
        id: 1,
        brandProductName: "ROCKSTA JERSEY",
        brandProductimage:
          "https://scontent.cdninstagram.com/v/t51.29350-15/401477478_327090696724276_8390877029931727619_n.jpg?stp=dst-jpg_e35&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDE4MDAuc2RyIn0&_nc_ht=scontent.cdninstagram.com&_nc_cat=104&_nc_ohc=LrwutSjEHywAX8BA9g2&edm=APs17CUBAAAA&ccb=7-5&ig_cache_key=MzIzNDUzNjAyNjIzMDc3MTQ3NA%3D%3D.2-ccb7-5&oh=00_AfAxexxrLQle1svuz-FwoGQFxTnhV-oyi8CRrwOZ6nkyqA&oe=65F3885B&_nc_sid=10d13b",

        images: [
          "https://scontent.cdninstagram.com/v/t51.29350-15/401477478_327090696724276_8390877029931727619_n.jpg?stp=dst-jpg_e35&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDE4MDAuc2RyIn0&_nc_ht=scontent.cdninstagram.com&_nc_cat=104&_nc_ohc=LrwutSjEHywAX8BA9g2&edm=APs17CUBAAAA&ccb=7-5&ig_cache_key=MzIzNDUzNjAyNjIzMDc3MTQ3NA%3D%3D.2-ccb7-5&oh=00_AfAxexxrLQle1svuz-FwoGQFxTnhV-oyi8CRrwOZ6nkyqA&oe=65F3885B&_nc_sid=10d13b",
          "https://scontent.cdninstagram.com/v/t51.29350-15/418614235_322189930793314_2780300446646418115_n.jpg?stp=dst-jpg_e35&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDE4MDAuc2RyIn0&_nc_ht=scontent.cdninstagram.com&_nc_cat=110&_nc_ohc=SR_izNYHlfQAX8k2T9A&edm=APs17CUBAAAA&ccb=7-5&ig_cache_key=MzI3ODg3NTU0ODk2MzQ1Mjg5Nw%3D%3D.2-ccb7-5&oh=00_AfBOJyq9q_c_ZI0zkWoN4B6Ij74Ww5CuL6qSHftTZVm_pQ&oe=65F2E8B0&_nc_sid=10d13b",
          "https://scontent.cdninstagram.com/v/t51.29350-15/418748966_730838078711599_4114830826000404606_n.jpg?stp=dst-jpg_e35_p720x720&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDE3OTkuc2RyIn0&_nc_ht=scontent.cdninstagram.com&_nc_cat=107&_nc_ohc=n4ZpOtnQZN8AX8V_jVU&edm=APs17CUBAAAA&ccb=7-5&ig_cache_key=MzI3ODg3NTU0ODk0Njc2NDc0OQ%3D%3D.2-ccb7-5&oh=00_AfCo0XBk5SAtGveuO3wEsBNUK1gUKlp_6bbBm7CRl-J47g&oe=65F39FB0&_nc_sid=10d13b",
          "https://scontent.cdninstagram.com/v/t51.29350-15/418417948_680214327649359_2385093807266536876_n.jpg?stp=dst-jpg_e35&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDE4MDAuc2RyIn0&_nc_ht=scontent.cdninstagram.com&_nc_cat=103&_nc_ohc=Y8G05mz_uc8AX_NSp0Q&edm=APs17CUBAAAA&ccb=7-5&ig_cache_key=MzI3ODg3NTU0ODk2MzUyNjM1Mw%3D%3D.2-ccb7-5&oh=00_AfB8eh1-ulx7qnXdM5X8m5GoEY2L3xOSAl95wcdXXeXRkQ&oe=65F4251D&_nc_sid=10d13b",
          "",
        ],
        brandProductPrice: 25000,
      },
      {
        id: 2,
        brandProductName: "BOLLYWOOD POLO",
        brandProductimage:
          "https://scontent.cdninstagram.com/v/t51.29350-15/404902312_2610342192467010_2659254787846887495_n.jpg?stp=dst-jpg_e35&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDE4MDAuc2RyIn0&_nc_ht=scontent.cdninstagram.com&_nc_cat=106&_nc_ohc=hklzlBjZHq8AX-1jBw9&edm=APs17CUBAAAA&ccb=7-5&ig_cache_key=MzI0NTU3MjE1MzI0NzA3MTM4Mw%3D%3D.2-ccb7-5&oh=00_AfAAneBr0hWMyXaHpOu87-cOiv3Ul_t9FcZFIIg_f1ppQA&oe=65F3DAFF&_nc_sid=10d13b",
        brandProductPrice: 40000,
        images: [
          "https://scontent.cdninstagram.com/v/t51.29350-15/404902312_2610342192467010_2659254787846887495_n.jpg?stp=dst-jpg_e35&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDE4MDAuc2RyIn0&_nc_ht=scontent.cdninstagram.com&_nc_cat=106&_nc_ohc=hklzlBjZHq8AX-1jBw9&edm=APs17CUBAAAA&ccb=7-5&ig_cache_key=MzI0NTU3MjE1MzI0NzA3MTM4Mw%3D%3D.2-ccb7-5&oh=00_AfAAneBr0hWMyXaHpOu87-cOiv3Ul_t9FcZFIIg_f1ppQA&oe=65F3DAFF&_nc_sid=10d13b",
          "https://scontent.cdninstagram.com/v/t51.29350-15/418626238_761915942636597_8157473624812327256_n.jpg?stp=dst-jpg_e35&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDE3OTkuc2RyIn0&_nc_ht=scontent.cdninstagram.com&_nc_cat=105&_nc_ohc=mm1gvpnNs-MAX9DT7LX&edm=APs17CUBAAAA&ccb=7-5&ig_cache_key=MzI3ODg3NTYzMjE2OTk3Nzg1OA%3D%3D.2-ccb7-5&oh=00_AfBKN_enTJBkZHfmt6vgourH0tIIhm8q2w7is_gebmiYhg&oe=65F4AA88&_nc_sid=10d13b",
          "https://scontent.cdninstagram.com/v/t51.29350-15/419461813_1104229530600012_2681420149899385458_n.jpg?stp=dst-jpg_e35&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDE3OTkuc2RyIn0&_nc_ht=scontent.cdninstagram.com&_nc_cat=100&_nc_ohc=JuCEeFmm5YQAX_Bhuic&edm=APs17CUBAAAA&ccb=7-5&ig_cache_key=MzI3ODg3NTYzMjE2OTk0MTkwNw%3D%3D.2-ccb7-5&oh=00_AfANB1b0dGdpFaJ6lAwFBMtmqLaMld1JQBWGl4KKjCBzwQ&oe=65F2F892&_nc_sid=10d13b",
          "https://scontent.cdninstagram.com/v/t51.29350-15/418647941_1059235148674743_6111682955011473422_n.jpg?stp=dst-jpg_e35&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDE3OTkuc2RyIn0&_nc_ht=scontent.cdninstagram.com&_nc_cat=103&_nc_ohc=SJ0Pt_hTuLkAX_JMIQV&edm=APs17CUBAAAA&ccb=7-5&ig_cache_key=MzI3ODg3NTYzMjE0NDc2NTY1Ng%3D%3D.2-ccb7-5&oh=00_AfDBzB5OiL62p3WY0Z88dkpv7rAuhhXGgw8D0_bdJOZ_lw&oe=65F39726&_nc_sid=10d13b",
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
