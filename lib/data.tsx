type Headings = string;
type Stats = {
  title: string;
  value: string;
  perc?: string;
  date?: string;
  color?: string;
  width?: string;
};
export type teamDetailsType = {
  name: string;
  des: string;
  url: string;
};
export const navLinks: Headings[] = [
  "Crypto Taxes",
  "Free Tools",
  "Resource Center",
];
export const options: Headings[] = [
  "Overview",
  "Fundamentals",
  "News Insights",
  "Sentiments",
  "Team",
  "Technicals",
  "Tokenomics",
];

export const performanceStats: Stats[] = [
  {
    title: "Today’s Low",
    value: "46,930.22",
  },
  {
    title: "Today’s High",
    value: "49,343.83",
  },
  {
    title: "52W Low",
    value: "16,930.22",
  },
  {
    title: "52W High",
    value: "49,743.83",
  },
];

export const fundamentalStats: Stats[] = [
  {
    title: "Bitcoin Price",
    value: "$16,815.46",
  },
  {
    title: "24h Low / 24h High",
    value: "$16,382.07 / $16,874.12",
  },
  {
    title: "7d Low / 7d High",
    value: "$16,382.07 / $16,874.12",
  },
  {
    title: "Trading Volume",
    value: "$23,249,202,782",
  },
  {
    title: "Market Cap Rank",
    value: "#1",
  },
  {
    title: "Market Cap",
    value: "$323,507,290,047",
  },
  {
    title: "Market Cap Dominance",
    value: "38.343%",
  },
  {
    title: "Volume / Market Cap",
    value: "0.0718",
  },
  {
    title: "All-Time High",
    value: "$69,044.77",
    perc: "-75.6",
    date: "Nov 10, 2021 (about 1 year)",
  },
  {
    title: "All-Time Low",
    value: "$67.81",
    perc: "24729.1",
    date: "Jul 06, 2013 (over 9 years)",
  },
];

export const sentiments: Stats[] = [
  {
    title: "Buy",
    value: "76%",
    color: "bg-[#00B386]",
    width: "md:w-96",
  },
  {
    title: "Hold",
    value: "8%",
    color: "bg-[#C7C8CE]",
    width: "md:w-8",
  },
  {
    title: "Sell",
    value: "16%",
    color: "bg-[#F7324C]",
    width: "md:w-16",
  },
];

export const teamDetails: teamDetailsType[] = [
  {
    name: "John Smith",
    des: "Designation here",
    url: "https://s3-alpha-sig.figma.com/img/4612/91fa/f3f7c54a3f2de230e1912a46193c019c?Expires=1710720000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=TWhkWY0ymnH1NiLvSHmxRYtlJ5phA2WjdDIraFpgytQzkZ89RlUPh~2zissn~5hAVow5WpKMEPVob5Gt423VtCBwqYlyU45kaw9w-day36O1ZpDe1KMjMMDhoVJ35kPvGgXXR2eoVhjNVcVWAc3KTGh5SZhRVYqtpoih2SmEye7jFqlGlxWaDMr1XmFajSnX2EFfGN7tZP5IoTYH-sgyqIeYH0UCSRhnmfr8kwV86NmTXY2ZUFhVf2~W7TEtbDoWXztzvi5twaNI4Bv6lrLgUCovNL91d7vh9rlnZQdMSI79DuIaZjniKVKqWksnLLV~F2x8sy~GbRLGZqX0A7PTpA__",
  },
  {
    name: "Elina Williams",
    des: "Designation here",
    url: "https://s3-alpha-sig.figma.com/img/4316/c574/4cca8e430c2d9f50e72234abc8fd1c0c?Expires=1710720000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=jUnx4pEpHDP86AqX4C4LeBbKl8nTXgOiKUaNxSKbr91dmGAECOGF0g~XtM5ImutaSsJd6uuszDw6zkHHr9LZq9xxCL7wXDuuWUzvKfD33neNOFbKaeWBRVrQEG7X1VJy-lSViiTU32cI3RTOUogS5mpo8pAToaDB2F74Wn~IL34QElejmtey-mpAxJ2T2SCSBWohzJGGWNkpGO6wivCDR-cU13T34QGUq-tgRM5yNCRqOePc0wO7QJvwIBKs7zV1RjqLZpRYzrCobbRLnZfb9DL3A9EDchYioriZZ9D8Qq8IRu8hGJt0k0n52QegNVHBBVhf7F75LNBnsPB-S~WPhA__",
  },
  {
    name: "John Smith",
    des: "Designation here",
    url: "https://s3-alpha-sig.figma.com/img/c5f0/f097/f060c63093179c9aa8c4ce86a8cac7f7?Expires=1710720000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=L0TvWkMEpvzWqu3lgSFfn0Cql-W2UPXvIp37Eg58U~jiurGPZoGCpKF81agPfRd2xJ8yG~y9g4x4oOQHjnaklWF-GbwnZz6C5huv0JJd9YZ9u-yHY3pjm5QNg7c-jQY3v6IHQpR1OAY5SmH1i88J6qQQr62qN8I5GVr~qUEQREK9NcscfAE8IWVoqb8laxX99Er2y0bQGvBiJQkVtpKs~wa~Rx05-1MBUHqU4q5bDeeoe4z81IQKSZdU1QJUMM-6XF87IeSF-~y2Tihn7PGmJnO6Hbhuxj9deZLsCoC4sgF3o0VY8eA2pxvOhMe6lfREEUPRik9zSkRy2bDebXMJuQ__",
  },
];

export const lorem100 =
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda vel at voluptates possimus, dolores consequatur ducimus neque commodi incidunt rerum deserunt laborum minus saepe quis. Ratione quos id exercitationem dolorem eveniet saepe possimus minus, fuga labore nobis, reiciendis sequi facere eligendi at doloremque temporibus a perspiciatis eaque repellendus tenetur ipsum vel. Dicta maiores pariatur magnam dolor doloremque in blanditiis illum deserunt iure, corporis culpa eum, sequi eveniet quos iusto? Aperiam minima maiores possimus, blanditiis quibusdam et totam doloribus sapiente numquam reprehenderit aliquid quos omnis deleniti dolor, pariatur in sint accusamus atque eos cumque. Est corrupti ea facilis voluptatibus optio voluptas! ";

export const lorem75 =
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur labore aperiam corporis ipsam nihil sunt praesentium molestiae eos nostrum laudantium molestias quod, laboriosam minus quas. Sequi laboriosam fuga perspiciatis natus hic! Praesentium, facere! Tempora fugit accusamus asperiores, hic corporis mollitia quos perspiciatis adipisci exercitationem ut cum inventore molestiae quaerat fuga labore. Excepturi consequuntur impedit animi numquam necessitatibus, molestiae sunt eos earum quidem suscipit facilis quas temporibus nam iusto. Iure esse voluptates, nisi repellendus mollitia dolor!";

export const lorem40 =
  "Fermentum hendrerit imperdiet nulla viverra faucibus. Sit aliquam massa vel convallis duis ac. Mi adipiscing semper scelerisque porttitor pulvinar nunc risus. Fermentum potenti iaculis lacinia congue ipsum fames amet dui. Purus ultrices tincidunt volutpat in eget. Ullamcorper dui";
