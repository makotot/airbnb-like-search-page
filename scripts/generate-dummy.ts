import faker from "faker";

export type Room = {
  id: number;
  title: string;
  capacity: number;
  price: string;
  dateStart: Date;
  dateEnd: Date;
  country: string;
  prefecture: {
    id: number;
    name: string;
  };
  features: string[];
  rate: number;
};

const prefectures = [
  "北海道",
  "青森県",
  "岩手県",
  "宮城県",
  "秋田県",
  "山形県",
  "福島県",
  "茨城県",
  "栃木県",
  "群馬県",
  "埼玉県",
  "千葉県",
  "東京都",
  "神奈川県",
  "新潟県",
  "富山県",
  "石川県",
  "福井県",
  "山梨県",
  "長野県",
  "岐阜県",
  "静岡県",
  "愛知県",
  "三重県",
  "滋賀県",
  "京都府",
  "大阪府",
  "兵庫県",
  "奈良県",
  "和歌山県",
  "鳥取県",
  "島根県",
  "岡山県",
  "広島県",
  "山口県",
  "徳島県",
  "香川県",
  "愛媛県",
  "高知県",
  "福岡県",
  "佐賀県",
  "長崎県",
  "熊本県",
  "大分県",
  "宮崎県",
  "鹿児島県",
  "沖縄県",
].map((prefecture, index) => ({
  id: index + 1,
  name: prefecture,
}));

const rooms: Room[] = Array(100)
  .fill(0)
  .map((_, index) => {
    return {
      id: index,
      title: faker.lorem.sentence(),
      capacity: faker.random.number(10),
      price: faker.commerce.price(1000, 9999, 0, "¥"),
      dateStart: faker.date.soon(),
      dateEnd: faker.date.future(),
      country: "日本",
      prefecture: faker.random.arrayElement(prefectures),
      features: faker.random.arrayElements([
        "キッチン",
        "Wi-Fi",
        "エアコン",
        "ジム",
        "プール",
        "TV",
        "洗濯機",
        "乾燥機",
        "駐車場",
        "ペットOK",
        "喫煙OK",
      ]),
      rate: faker.random.number(5),
    };
  });

const db = {
  rooms,
  prefectures,
};

console.log(JSON.stringify(db, null, 4));
