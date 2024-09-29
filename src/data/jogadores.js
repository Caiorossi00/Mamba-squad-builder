const jogadores = [
  {
    imagem:
      "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/8de53f77-9015-499a-bca3-a3d5d1a8196e/dhcbd38-cdfe62cc-274f-4966-b91e-63b7f377507c.png/v1/fill/w_256,h_256/lionel_messi__fc_mobile_23_toty_by_lyonelmehssi10_dhcbd38-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MjU2IiwicGF0aCI6IlwvZlwvOGRlNTNmNzctOTAxNS00OTlhLWJjYTMtYTNkNWQxYTgxOTZlXC9kaGNiZDM4LWNkZmU2MmNjLTI3NGYtNDk2Ni1iOTFlLTYzYjdmMzc3NTA3Yy5wbmciLCJ3aWR0aCI6Ijw9MjU2In1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0._YNQpQJMWLkxNvMH8ylYSvgF_Fd73tTadNDzc4MSXHY",
    nome: "Lionel Messi",
    nivelDePoder: 519,
    codigo: "Messi",
  },
  {
    imagem:
      "https://static.wixstatic.com/media/a7f17b_07c217b0609a45f2bd4ea31808bae7a3~mv2.png/v1/fill/w_256,h_256,al_c/C.%20Ronaldo_fc24_download%20(3).png",
    nome: "Cristiano Ronaldo",
    nivelDePoder: 511,
    codigo: "Cristiano Ronaldo",
  },
  {
    imagem:
      "https://preview.redd.it/hall-of-legends-100-bergkamp-or-99-copa-america-zico-what-v0-eav13vxrixed1.png?width=256&format=png&auto=webp&s=2bcb5ccb36fa1486ea7c051c75e8cd1a69d7f772",
    nome: "Zico",
    nivelDePoder: 499,
    codigo: "Zico",
  },
  {
    imagem:
      "https://static.wixstatic.com/media/a7f17b_ac62958f0ab34a9ea4347df261edf814~mv2.png/v1/fill/w_256,h_256,al_c/Gullit_fc24_download%20(1).png",
    nome: "Gullit",
    nivelDePoder: 487,
    codigo: "Gullit",
  },
  {
    imagem:
      "https://i.redd.it/rate-these-card-arts-out-of-10-v0-1rtovd4nnvoa1.png?width=1024&format=png&auto=webp&s=5a7ae59fc1b467b3026602ba0a7769b54a82105b",
    nome: "Diego Maradona",
    nivelDePoder: 515,
    codigo: "Maradona",
  },
  {
    imagem:
      "https://preview.redd.it/founder-event-dynamic-image-and-messi-and-pel%C3%A9-card-v0-ug4cj2pcu2kb1.png?width=640&crop=smart&auto=webp&s=03901752b865d0a4e7b9c0e591f48f2001bfdf32",
    nome: "Pelé",
    nivelDePoder: 516,
    codigo: "Pelé",
  },
  {
    imagem:
      "https://static.wixstatic.com/media/a7f17b_a6c63d2711a0425bb9de28c41f36a5f9~mv2.png/v1/fill/w_256,h_256,al_c/Cruyff_fc24_download.png",
    nome: "Johan Cruyff",
    nivelDePoder: 492,
    codigo: "Cruyff",
  },
  {
    imagem:
      "https://static.wixstatic.com/media/a7f17b_1b25914cc99a4a7da0c1aaa214905eb8~mv2.png/v1/fill/w_256,h_256,al_c/M%C3%BCller_fc24_download.png",
    nome: "Gerd Müller",
    nivelDePoder: 478,
    codigo: "Muller",
  },
  {
    imagem:
      "https://static.wixstatic.com/media/a7f17b_e368f72cf86b4862932b6d4848b7c95f~mv2.png/v1/fill/w_256,h_256,al_c/van%20Basten_fc24_download%20(1).png",
    nome: "Marco van Basten",
    nivelDePoder: 467,
    codigo: "van Basten",
  },
  {
    imagem:
      "https://static.wixstatic.com/media/a7f17b_3afd15217b90495bba2b897115d883f3~mv2.png/v1/fill/w_256,h_256,al_c/Ronaldinho_fc24_download%20(1).png",
    nome: "Ronaldinho",
    nivelDePoder: 483,
    codigo: "Ronaldinho",
  },
  {
    imagem:
      "https://static.wixstatic.com/media/a7f17b_412b113c05614ecba0af9b4e64ecb92e~mv2.png/v1/fill/w_256,h_256,al_c/Xavi_fc24_download%20(1).png",
    nome: "Xavi Hernández",
    nivelDePoder: 455,
    codigo: "Xavi",
  },
  {
    imagem:
      "https://preview.redd.it/i-made-a-fc-mobile-card-for-iniesta-v0-1650fyl47swc1.png?auto=webp&s=98fd5502bb8ef905591e994bc341298dfaa72481",
    nome: "Andrés Iniesta",
    nivelDePoder: 456,
    codigo: "Iniesta",
  },
  {
    imagem:
      "https://static.wixstatic.com/media/a7f17b_2c3804a4af25487c89ec713b6374f892~mv2.png/v1/fill/w_256,h_256,al_c/Matth%C3%A4us_fc24_download.png",
    nome: "Lothar Matthäus",
    nivelDePoder: 462,
    codigo: "Matthaus",
  },
  {
    imagem:
      "https://i.pinimg.com/originals/70/e4/3f/70e43f136fa1d5430607e417adca4103.jpg",
    nome: "Franz Beckenbauer",
    nivelDePoder: 482,
    codigo: "Beckenbauer",
  },
  {
    imagem:
      "https://static.wixstatic.com/media/eb4d03_ca4b48c9cbf940bb8c8dd1657af58f59~mv2.png/v1/fill/w_256,h_256,al_c/Ronaldo_fc24_download.png",
    nome: "Ronaldo Fenômeno",
    nivelDePoder: 493,
    codigo: "Ronaldo",
  },
  {
    imagem:
      "https://static.wixstatic.com/media/a7f17b_ec47bb8ee48d4c11ace79678a94a3278~mv2.png/v1/fill/w_256,h_256,al_c/Baggio_fc24_download.png",
    nome: "Roberto Baggio",
    nivelDePoder: 471,
    codigo: "Baggio",
  },
  {
    imagem:
      "https://static.wixstatic.com/media/eb4d03_25d19c91b1654aa98b19015624c52532~mv2.png/v1/fill/w_256,h_256,al_c/Best_fc24_download%20(1).png",
    nome: "George Best",
    nivelDePoder: 444,
    codigo: "Best",
  },
  {
    imagem:
      "https://static.wixstatic.com/media/eb4d03_391db1af6d784e10a5abc496d2453b82~mv2.png/v1/fill/w_256,h_256,al_c/Beckham_fc24_download.png",
    nome: "David Beckham",
    nivelDePoder: 438,
    codigo: "Beckham",
  },
];

export default jogadores;
