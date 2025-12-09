// MENU DATA
const menuData = {
    birinchi_taom: [
        {
            uz: {name: "Ilik shurva", desc: "Ilik shurva 1-pors", price: "30,000"},
            en: {name: "Marrow soup", desc: "Type of soup", price: "30,000"},
            ru: {name: "Суп из костного мозга", desc: "Вид супа", price: "30,000"},
            img: "/media/ilik_shurva.jpg"
        },
        {
            uz: {name: "Chuchvara", desc: "Xamir taom", price: "30,000"},
            en: {name: "Chuchvara", desc: "Dough dish", price: "30,000"},
            ru: {name: "Чучвара", desc: "Мучное блюдо", price: "30,000"},
            img: "/media/chuchvara.jpg"
        },
        {
            uz: {name: "Lag'mon", desc: "Uzun xamir taom", price: "30,000"},
            en: {name: "Lagman", desc: "Long noodle dish", price: "30,000"},
            ru: {name: "Лагмон", desc: "Блюдо с длинной лапшой", price: "30,000"},
            img: "/media/lagman.jpg"
        },
        {
            uz: {name: "Mastava", desc: "Guruchli sho'rva 1pors", price: "30,000"},
            en: {name: "Mastava", desc: "Soup with rice 1pors", price: "30,000"},
            ru: {name: "Мастава", desc: "Суп с рисом 1pors", price: "30,000"},
            img: "/media/mastava.jpg"
        },
        {
            uz: {name: "Kucha", desc: "Xamir taom", price: "30,000"},
            en: {name: "Kucha", desc: "Dough dish", price: "30,000"},
            ru: {name: "Куча", desc: "Мучное блюдо", price: "30,000"},
            img: "/media/kocha.jpg"
        },
        {
            uz: {name: "Fri kadelka", desc: "fri kadelka", price: "22,000"},
            en: {name: "Kurinna lapsha", desc: "Noodles with chicken", price: "22,000"},
            ru: {name: "Куринная лапша", desc: "Лапша с курицей", price: "22,000"},
            img: "/media/krikadelka.jpg"
        },
        {
            uz: {name: "O'zbegim 1", desc: "Maxsus taom", price: "30,000"},
            en: {name: "O'zbegim 1", desc: "Special dish", price: "30,000"},
            ru: {name: "Узбегим 1", desc: "Специальное блюдо", price: "30,000"},
            img: "/media/ozbegim_suyuq.jpg"
        }
    ],
    ikkinchi_taom: [
        {
            uz: {name: "Osh (Hammabop) 0,5", desc: "An'anaviy osh 0,5 kg", price: "235,000"},
            en: {name: "Osh (Hammabop) 0,5", desc: "Traditional osh 0,5 kg", price: "235,000"},
            ru: {name: "Ош (Хаммабоп) 0,5", desc: "Традиционный ош 0,5 кг", price: "235,000"},
            img: "/media/osh.jpg"
        },
        {
            uz: {name: "Osh (Hammabop) 1 kg", desc: "An'anaviy osh 1 kg", price: "360,000"},
            en: {name: "Osh (Hammabop) 1 kg", desc: "Traditional osh 1 kg", price: "360,000"},
            ru: {name: "Ош (Хаммабоп) 1 кг", desc: "Традиционный ош 1 кг", price: "360,000"},
            img: "/media/osh.jpg"
        },
        {
            uz: {name: "Osh (O'zgan) 0,5", desc: "O'zgan uslubida osh", price: "245,000"},
            en: {name: "Osh (O'zgan) 0,5", desc: "Osh in Uzgan style", price: "245,000"},
            ru: {name: "Ош (Узган) 0,5", desc: "Ош в узганском стиле", price: "245,000"},
            img: "/media/osh_ozgan.jpg"
        },
        {
            uz: {name: "Osh (O'zgan) 1 kg", desc: "O'zgan uslubida osh", price: "375,000"},
            en: {name: "Osh (O'zgan) 1 kg", desc: "Osh in Uzgan style", price: "375,000"},
            ru: {name: "Ош (Узган) 1 кг", desc: "Ош в узганском стиле", price: "375,000"},
            img: "/media/osh_ozgan.jpg"
        },
        {
            uz: {name: "Osh (Kuchli) 0,5", desc: "Achchiq osh", price: "245,000"},
            en: {name: "Osh (Kuchli) 0,5", desc: "Spicy osh", price: "245,000"},
            ru: {name: "Ош (Кучли) 0,5", desc: "Острый ош", price: "245,000"},
            img: "/media/osh_kuchli.jpg"
        },
        {
            uz: {name: "Osh (Kuchli) 1 kg", desc: "Achchiq osh", price: "375,000"},
            en: {name: "Osh (Kuchli) 1 kg", desc: "Spicy osh", price: "375,000"},
            ru: {name: "Ош (Кучли) 1 кг", desc: "Острый ош", price: "375,000"},
            img: "/media/osh_kuchli.jpg"
        },
        {
            uz: {name: "Osh (Boy oshi) 0,5", desc: "Boy oshi kavatak, tuxum, qazilik osh", price: "300,000"},
            en: {name: "Osh (Boy oshi) 0,5", desc: "Rich osh with eggs, horse meat, kavatak", price: "300,000"},
            ru: {name: "Ош (Бой оши) 0,5", desc: "Богатый ош с мясой конь, яйцо, каватак", price: "300,000"},
            img: "/media/osh_boy.jpg"
        },
        {
            uz: {name: "Osh (Boy oshi) 1kg", desc: "Boy oshi kavatak, tuxum, qazilik osh", price: "465,000"},
            en: {name: "Osh (Boy oshi) 1kg", desc: "Rich osh with eggs, horse meat, kavatak", price: "465,000"},
            ru: {name: "Ош (Бой оши) 1kg", desc: "Богатый ош с мясой конь, яйцо, каватак", price: "465,000"},
            img: "/media/osh_boy.jpg"
        },
        {
            uz: {name: "Osh (Toshkent tuy) 1pors", desc: "Toshkent uslubida osh", price: "35,000"},
            en: {name: "Osh (Toshkent tuy) 1pors", desc: "Osh in Tashkent style", price: "35,000"},
            ru: {name: "Ош (Тошкент туй) 1pors", desc: "Ош в ташкентском стиле", price: "35,000"},
            img: "/media/osh.jpg"
        },
        {
            uz: {name: "Pirojok (Qozon kabob) 0,5", desc: "Qozonda pishirilgan pirojok", price: "160,000"},
            en: {name: "Pirojok (Qozon kabob) 0,5", desc: "Pirojok cooked in pot", price: "160,000"},
            ru: {name: "Пирожок (Козон кабоб) 0,5", desc: "Пирожок приготовленный в казане", price: "160,000"},
            img: "/media/pirojok.jpg"
        },
        {
            uz: {name: "Pirojok (Qozon kabob) 1 kg", desc: "Qozonda pishirilgan pirojok", price: "250,000"},
            en: {name: "Pirojok (Qozon kabob) 1 kg", desc: "Pirojok cooked in pot", price: "250,000"},
            ru: {name: "Пирожок (Козон кабоб) 1 кг", desc: "Пирожок приготовленный в казане", price: "250,000"},
            img: "/media/pirojok.jpg"
        },
        {
            uz: {name: "Siltama 0,5", desc: "Siltama taom", price: "155,000"},
            en: {name: "Siltama 0,5", desc: "Siltama dish", price: "155,000"},
            ru: {name: "Силтама 0,5", desc: "Блюдо силтама", price: "155,000"},
            img: "/media/siltama.jpg"
        },
        {
            uz: {name: "Siltama 1 kg", desc: "Siltama taom", price: "230,000"},
            en: {name: "Siltama 1 kg", desc: "Siltama dish", price: "230,000"},
            ru: {name: "Силтама 1 кг", desc: "Блюдо силтама", price: "230,000"},
            img: "/media/siltama.jpg"
        },
        {
            uz: {name: "Siltama (Makka) 0,5", desc: "Makka bilan siltama", price: "165,000"},
            en: {name: "Siltama (Makka) 0,5", desc: "Siltama with corn", price: "165,000"},
            ru: {name: "Силтама (Макка) 0,5", desc: "Силтама с кукурузой", price: "165,000"},
            img: "/media/siltama.jpg"
        },
        {
            uz: {name: "Siltama (Makka) 1kg", desc: "Makka bilan siltama", price: "245,000"},
            en: {name: "Siltama (Makka) 1kg", desc: "Siltama with corn", price: "245,000"},
            ru: {name: "Силтама (Макка) 1kg", desc: "Силтама с кукурузой", price: "245,000"},
            img: "/media/siltama.jpg"
        },
        {
            uz: {name: "Semichka 0,5", desc: "Semichka taom", price: "150,000"},
            en: {name: "Semichka 0,5", desc: "Semichka dish", price: "150,000"},
            ru: {name: "Семичка 0,5", desc: "Блюдо семичка", price: "150,000"},
            img: "/media/semechka.jpg"
        },
        {
            uz: {name: "Semichka 1 kg", desc: "Semichka taom", price: "230,000"},
            en: {name: "Semichka 1 kg", desc: "Semichka dish", price: "230,000"},
            ru: {name: "Семичка 1 кг", desc: "Блюдо семичка", price: "230,000"},
            img: "/media/semechka.jpg"
        },
        {
            uz: {name: "Bosma (Dimlama) 0,5", desc: "Dimlama usulida bosma", price: "200,000"},
            en: {name: "Bosma (Dimlama) 0,5", desc: "Bosma stewed style", price: "200,000"},
            ru: {name: "Босма (Димлама) 0,5", desc: "Босма тушеное", price: "200,000"},
            img: "/media/bosma.jpg"
        },
        {
            uz: {name: "Bosma (Dimlama) 1 kg", desc: "Dimlama usulida bosma", price: "340,000"},
            en: {name: "Bosma (Dimlama) 1 kg", desc: "Bosma stewed style", price: "340,000"},
            ru: {name: "Босма (Димлама) 1 кг", desc: "Босма тушеное", price: "340,000"},
            img: "/media/bosma.jpg"
        },
        {
            uz: {name: "Bosma (Qovurma) 0,5", desc: "Qovurilgan bosma", price: "200,000"},
            en: {name: "Bosma (Qovurma) 0,5", desc: "Fried bosma", price: "200,000"},
            ru: {name: "Босма (Ковурма) 0,5", desc: "Жареное босма", price: "200,000"},
            img: "/media/bosma_qovurma.jpg"
        },
        {
            uz: {name: "Bosma (Qovurma) 1 kg", desc: "Qovurilgan bosma", price: "300,000"},
            en: {name: "Bosma (Qovurma) 1 kg", desc: "Fried bosma", price: "300,000"},
            ru: {name: "Босма (Ковурма) 1 кг", desc: "Жареное босма", price: "300,000"},
            img: "/media/bosma_qovurma.jpg"
        },
        {
            uz: {name: "Jiz (Farg'ona) 0,5", desc: "Farg'ona uslubida jiz", price: "150,000"},
            en: {name: "Jiz (Farg'ona) 0,5", desc: "Jiz in Fergana style", price: "150,000"},
            ru: {name: "Жиз (Фаргона) 0,5", desc: "Жиз в ферганском стиле", price: "150,000"},
            img: "/media/jiz.jpg"
        },
        {
            uz: {name: "Jiz (Farg'ona) 1 kg", desc: "Farg'ona uslubida jiz", price: "210,000"},
            en: {name: "Jiz (Farg'ona) 1 kg", desc: "Jiz in Fergana style", price: "210,000"},
            ru: {name: "Жиз (Фаргона) 1 кг", desc: "Жиз в ферганском стиле", price: "210,000"},
            img: "/media/jiz.jpg"
        },
        {
            uz: {name: "Jiz (Tushyonka) 0,5", desc: "Tushyonka bilan jiz", price: "150,000"},
            en: {name: "Jiz (Tushyonka) 0,5", desc: "Jiz with canned meat", price: "150,000"},
            ru: {name: "Жиз (Тушёнка) 0,5", desc: "Жиз с тушенкой", price: "150,000"},
            img: "/media/jiz.jpg"
        },
        {
            uz: {name: "Jiz (Tushyonka) 1 kg", desc: "Tushyonka bilan jiz", price: "235,000"},
            en: {name: "Jiz (Tushyonka) 1 kg", desc: "Jiz with canned meat", price: "235,000"},
            ru: {name: "Жиз (Тушёнка) 1 кг", desc: "Жиз с тушенкой", price: "235,000"},
            img: "/media/jiz.jpg"
        },
        {
            uz: {name: "Jiz (7 minutda) 0,5", desc: "Tez pishadigan jiz", price: "150,000"},
            en: {name: "Jiz (7 minutda) 0,5", desc: "Quick cooking jiz", price: "150,000"},
            ru: {name: "Жиз (7 минутда) 0,5", desc: "Быстро приготовляемый жизнь", price: "150,000"},
            img: "/media/jiz.jpg"
        },
        {
            uz: {name: "Jiz (7 minutda) 1 kg", desc: "Tez pishadigan jiz", price: "235,000"},
            en: {name: "Jiz (7 minutda) 1 kg", desc: "Quick cooking jiz", price: "235,000"},
            ru: {name: "Жиз (7 минутда) 1 кг", desc: "Быстро приготовляемый жизнь", price: "235,000"},
            img: "/media/jiz.jpg"
        },
        {
            uz: {name: "Chuponcha 0,5", desc: "Chuponcha taom", price: "150,000"},
            en: {name: "Chuponcha 0,5", desc: "Chuponcha dish", price: "150,000"},
            ru: {name: "Чупонча 0,5", desc: "Блюдо чупонча", price: "150,000"},
            img: "/media/chuponcha.jpg"
        },
        {
            uz: {name: "Chuponcha 1 kg", desc: "Chuponcha taom", price: "235,000"},
            en: {name: "Chuponcha 1 kg", desc: "Chuponcha dish", price: "235,000"},
            ru: {name: "Чупонча 1 кг", desc: "Блюдо чупонча", price: "235,000"},
            img: "/media/chuponcha.jpg"
        },
        {
            uz: {name: "O'zbekim 2 (2 kg)", desc: "Maxsus taom 2 kg", price: "520,000"},
            en: {name: "O'zbekim 2 (2 kg)", desc: "Special dish 2 kg", price: "520,000"},
            ru: {name: "Узбегим 2 (2кг)", desc: "Специальное блюдо 2 кг", price: "520,000"},
            img: "/media/ozbegim2.jpg"
        },
        {
            uz: {name: "O'zbekim 3 (1 kg)", desc: "Maxsus taom 3 kg", price: "300,000"},
            en: {name: "O'zbekim 3 (1 kg)", desc: "Special dish 3 kg", price: "300,000"},
            ru: {name: "Узбегим 3 (1кг)", desc: "Специальное блюдо 3 кг", price: "300,000"},
            img: "/media/ozbegim3.jpg"
        },
        {
            uz: {name: "Qozon shakarob 0,5", desc: "Shakarob qozonda", price: "200,000"},
            en: {name: "Qozon shakarob 0,5", desc: "Shakarob in pot", price: "200,000"},
            ru: {name: "Козон шакароп 0,5", desc: "Шакароп в казане", price: "200,000"},
            img: "/media/shakarob.jpg"
        },
        {
            uz: {name: "Qozon shakarob 1 kg", desc: "Shakarob qozonda", price: "280,000"},
            en: {name: "Qozon shakarob 1 kg", desc: "Shakarob in pot", price: "280,000"},
            ru: {name: "Козон шакароп 1 кг", desc: "Шакароп в казане", price: "280,000"},
            img: "/media/shakarob.jpg"
        },
        {
            uz: {name: "Go'sht mahsulotlari asortimenti", desc: "6 kishilik go'sht seti sabzavotlar bilan", price: "420,000"},
            en: {name: "Meats set", desc: "Meat set for 6 people with vegetables", price: "420,000"},
            ru: {name: "Мясо на доске с овощами", desc: "Мясной сет на 6 персон с овощами", price: "420,000"},
            img: "/media/gosht_seti.jpg"
        },
    ],
    shashlik: [
        {
            uz: {name: "Qiyma shashlik", desc: "Maydalangan go'shtdan shashlik", price: "15,000"},
            en: {name: "Minced meat shashlik", desc: "Shashlik from minced meat", price: "15,000"},
            ru: {name: "Шашлык из фарша", desc: "Шашлык из рубленого мяса", price: "15,000"},
            img: "/media/qiyma.jpg"
        },
        {
            uz: {name: "Kuskavoy mol", desc: "Qo'y jigaridan shashlik", price: "25,000"},
            en: {name: "Kuskavoy cow", desc: "kebab (cow) meat", price: "25,000"},
            ru: {name: "Кускавой из говрядиной", desc: "Шашлык из говрядиной", price: "25,000"},
            img: "/media/kuskavoy.jpg"
        },
        {
            uz: {name: "Kuskavoy qoy", desc: "Qo'y jigaridan shashlik", price: "27,000"},
            en: {name: "Kuskavoy sheep", desc: "kebab (sheep) meat", price: "27,000"},
            ru: {name: "Кускавой из бараниной", desc: "Шашлык из бараниной", price: "27,000"},
            img: "/media/kuskavoy.jpg"
        },
        {
            uz: {name: "Dumba shashlik", desc: "shashlik dumba", price: "18,000"},
            en: {name: "Shashlik", desc: "Shashlik from dumba", price: "18,000"},
            ru: {name: "Думба шашлык", desc: "Шашлык", price: "18,000"},
            img: "/media/dumba.jpg"
        },
        {
            uz: {name: "Virezni shashlik", desc: "Virezni shashliki", price: "28,000"},
            en: {name: "virezni kebab", desc: "keabab cuttings", price: "28,000"},
            ru: {name: "Вырезни шашлык", desc: "Шашлык вырезни", price: "28,000"},
            img: "/media/virezki.jpg"
        },
        {
            uz: {name: "Ovoshnie", desc: "Sabzavotli shashlik", price: "10,000"},
            en: {name: "Vegateble kebab", desc: "kebab with vegatable", price: "10,000"},
            ru: {name: "Овощине шашлык", desc: "Овощине", price: "10,000"},
            img: "/media/ovoshnoy.jpg"
        },
        {
            uz: {name: "Pomidor", desc: "pomidor pishirilgan", price: "6,000"},
            en: {name: "Tomato", desc: "Tomato", price: "6,000"},
            ru: {name: "Помидоры", desc: "Приготовлине помидоры", price: "6,000"},
            img: "/media/pomidor.jpg"
        },
        {
            uz: {name: "Tovuq qanot", desc: "Tovuq qanotlaridan shashlik", price: "16,000"},
            en: {name: "Chicken wing", desc: "chicken wing", price: "16,000"},
            ru: {name: "Куриное крылышко", desc: "куриное крылышко", price: "16,000"},
            img: "/media/tovuq_qanot.jpg"
        },
        {
            uz: {name: "Tovuq file", desc: "Tovuq yumshoq go'shti", price: "14,000"},
            en: {name: "Chicken kebab", desc: "kebab chicken", price: "14,000"},
            ru: {name: "Куриное шашлык", desc: "Нежное куриное мясо", price: "14,000"},
            img: "/media/tovuq_file.jpg"
        }
    ],
    salat: [
        {
            uz: {name: "Shakarob", desc: "Shakarob salati", price: "15,000"},
            en: {name: "Shakarob", desc: "Shakarob salad", price: "15,000"},
            ru: {name: "Шакароп", desc: "Салат шакароп", price: "15,000"},
            img: "/media/shakarop.jpg"
        },
        {
            uz: {name: "Suzma", desc: "Suzma salati", price: "8,000"},
            en: {name: "Curd", desc: "Curd salad", price: "8,000"},
            ru: {name: "Сузма", desc: "Салат сузма", price: "8,000"},
            img: "/media/suzma.jpg"
        },
        {
            uz: {name: "Veseniy", desc: "Veseniy salati", price: "15,000"},
            en: {name: "Veseniy", desc: "Veseniy salad", price: "15,000"},
            ru: {name: "Весенний", desc: "Весенний салат", price: "15,000"},
            img: "/media/veseniy.jpg"
        },
        {
            uz: {name: "Suzma (okroshka)", desc: "Suzma okroshka", price: "8,000"},
            en: {name: "Curd (okroshka)", desc: "Curd, Milk okroshka", price: "8,000"},
            ru: {name: "Сузма (окрошка)", desc: "Сузма окрошка", price: "8,000"},
            img: "/media/suzma_okroshka.jpg"
        },
        {
            uz: {name: "Svejiy", desc: "Svejiy salati", price: "15,000"},
            en: {name: "Svejiy", desc: "Svejiy salad", price: "15,000"},
            ru: {name: "Свежий", desc: "Свежий салат", price: "15,000"},
            img: "/media/svejiy.jpg"
        },
        {
            uz: {name: "Kapusta yog'li", desc: "Kapusta salati", price: "15,000"},
            en: {name: "Kapusta yog'li", desc: "Kapusta salad", price: "15,000"},
            ru: {name: "Капуста с масло", desc: "Капустный салат", price: "15,000"},
            img: "/media/kapusta.jpg"
        },
        {
            uz: {name: "Adjika", desc: "Adjika salati", price: "6,000"},
            en: {name: "Adjika", desc: "Adjika salad", price: "6,000"},
            ru: {name: "Аджика", desc: "Салат аджика", price: "6,000"},
            img: "/media/adjika.jpg"
        },
        {
            uz: {name: "Sok pomidor", desc: "Sok salati", price: "15,000"},
            en: {name: "Juice tomato", desc: "Sok salad", price: "15,000"},
            ru: {name: "Сок помидор", desc: "Соковый салат", price: "15,000"},
            img: "/media/sok_pomidor.jpg"
        },
        {
            uz: {name: "Solyonniy kapusta", desc: "Solyonniy kapusta salati", price: "15,000"},
            en: {name: "Solyonniy kapusta", desc: "Solyonniy kapusta salad", price: "15,000"},
            ru: {name: "Солённая капуста", desc: "Салат из соленой капусты", price: "15,000"},
            img: "/media/kapusta.jpg"
        },
        {
            uz: {name: "Grecheskiy", desc: "Grecheskiy salati", price: "40,000"},
            en: {name: "Greece", desc: "Grecheskiy salad", price: "40,000"},
            ru: {name: "Греческий", desc: "Греческий салат", price: "40,000"},
            img: "/media/grekichiski.jpg"
        },
        {
            uz: {name: "Veseniy evro", desc: "Veseniy evro salati", price: "15,000"},
            en: {name: "Veseniy evro", desc: "Veseniy evro salad", price: "15,000"},
            ru: {name: "Весенний евро", desc: "Весенний евро салат", price: "15,000"},
            img: "/media/veseniy_evro.jpg"
        },
        {
            uz: {name: "Olivye", desc: "Olivye salati", price: "42,000"},
            en: {name: "Olivye", desc: "Olivye salad", price: "42,000"},
            ru: {name: "Оливье", desc: "Салат оливье", price: "42,000"},
            img: "/media/olivia.jpg"
        },
        {
            uz: {name: "Frantsuzskiy", desc: "Frantsuzskiy salati", price: "30,000"},
            en: {name: "Frantsuzskiy", desc: "Frantsuzskiy salad", price: "30,000"},
            ru: {name: "Французский", desc: "Французский салат", price: "30,000"},
            img: "/media/fransuzki.jpg"
        },
        {
            uz: {name: "Mimoza", desc: "Mimoza salati", price: "30,000"},
            en: {name: "Mimoza", desc: "Mimoza salad", price: "30,000"},
            ru: {name: "Мимоза", desc: "Салат мимоза", price: "30,000"},
            img: "/media/mimoza.jpg"
        },
        {
            uz: {name: "Kupcheskiy", desc: "Kupcheskiy salati", price: "45,000"},
            en: {name: "Kupcheskiy", desc: "Kupcheskiy salad", price: "45,000"},
            ru: {name: "Купеческий", desc: "Купеческий салат", price: "45,000"},
            img: "/media/kupeceskie.jpg"
        },
        {
            uz: {name: "Ostriy salat iz virezki", desc: "Ostriy salat", price: "48,000"},
            en: {name: "Spice salad", desc: "Spicy salad", price: "48,000"},
            ru: {name: "Острый салат из вырезки", desc: "Острый салат", price: "48,000"},
            img: "/media/ostriy_salat.jpg"
        },
        {
            uz: {name: "Yaponskiy salat s yazikom", desc: "Yaponskiy salat s yazikom", price: "15,000"},
            en: {name: "Japanese salad", desc: "Japanese salad with tongue", price: "15,000"},
            ru: {name: "Японский салат с языком", desc: "Японский салат с языком", price: "15,000"},
            img: "/media/yaponckie.jpg"
        },
        {
            uz: {name: "Fantaziya", desc: "Fantaziya salati", price: "35,000"},
            en: {name: "Fantaziya", desc: "Fantaziya salad", price: "35,000"},
            ru: {name: "Фантазия", desc: "Салат фантазия", price: "35,000"},
            img: "/media/fantaziya.jpg"
        },
        {
            uz: {name: "Qo'zi-qorin", desc: "Gribi salati", price: "35,000"},
            en: {name: "Mushroom", desc: "Mushroom salad", price: "35,000"},
            ru: {name: "Грибы", desc: "Грибной салат", price: "35,000"},
            img: "/media/gribi.jpg"
        },
        {
            uz: {name: "Mujskoy kapriz", desc: "Mujskoy kapriz salati", price: "55,000"},
            en: {name: "Manly salad", desc: "Manly salad", price: "55,000"},
            ru: {name: "Мужской каприз", desc: "Салат мужской каприз", price: "55,000"},
            img: "/media/mujskoy_kapriz.jpg"
        },
        {
            uz: {name: "Medalyon", desc: "Medalyon salati", price: "45,000"},
            en: {name: "Medalyon", desc: "Medalyon salad", price: "45,000"},
            ru: {name: "Медальон", desc: "Салат медальон", price: "45,000"},
            img: "/media/medalyon.jpg"
        },
        {
            uz: {name: "Hammabop", desc: "Hammabop salati", price: "32,000"},
            en: {name: "Hammabop", desc: "Hammabop salad", price: "32,000"},
            ru: {name: "Хаммабоп", desc: "Салат хаммабоп", price: "32,000"},
            img: "/media/xammabop.jpg"
        },
        {
            uz: {name: "Gnezdo gluharya", desc: "Gnezdo gluharya salati", price: "45,000"},
            en: {name: "Gnezdo gluharya", desc: "Gnezdo gluharya salad", price: "45,000"},
            ru: {name: "Гнездо глухаря", desc: "Салат гнездо глухаря", price: "45,000"},
            img: "/media/gnezdo.jpg"
        },
        {
            uz: {name: "Ruleiki iz baklajan", desc: "Ruleiki iz baklajan", price: "30,000"},
            en: {name: "Ruleiki iz baklajan", desc: "Ruleiki iz baklajan", price: "30,000"},
            ru: {name: "Рулетики из баклажан", desc: "Рулетики из баклажан", price: "30,000"},
            img: "/media/ruletki_baklajan.jpg"
        },
        {
            uz: {name: "Rukkola mol go'shtidan", desc: "Rukkola salati", price: "50,000"},
            en: {name: "Rukkola with cow meat", desc: "Rukkola salad", price: "50,000"},
            ru: {name: "Руккола с говядиной", desc: "Салат руккола", price: "50,000"},
            img: "/media/rukkola.jpg"
        },
        {
            uz: {name: "Baklajan Fanaziatskiy", desc: "Baklajan Fanaziatskiy", price: "35,000"},
            en: {name: "Baklajan Fanaziatskiy", desc: "Baklajan Fanaziatskiy", price: "35,000"},
            ru: {name: "Баклажан Фаназиатский", desc: "Баклажан Фаназиатский", price: "35,000"},
            img: "/media/baklajan.jpg"
        },
        {
            uz: {name: "Baklajan v klyare", desc: "Baklajan v klyare", price: "35,000"},
            en: {name: "Baklajan v klyare", desc: "Baklajan v klyare", price: "35,000"},
            ru: {name: "Баклажан в кляре", desc: "Баклажан в кляре", price: "35,000"},
            img: "/media/baklajan_v_klyare.jpg"
        },
        {
            uz: {name: "Sezar", desc: "Sezar salati", price: "40,000"},
            en: {name: "Sezar", desc: "Sezar salad", price: "40,000"},
            ru: {name: "Цезарь", desc: "Салат цезарь", price: "40,000"},
            img: "/media/sezar.jpg"
        },
        {
            uz: {name: "Sochniy tomat", desc: "Pomidor salati", price: "25,000"},
            en: {name: "Tomato", desc: "Tomato salad", price: "25,000"},
            ru: {name: "Сочный томат", desc: "Томатный салат", price: "25,000"},
            img: "/media/socnie_tomat.jpg"
        },
        {
            uz: {name: "Nezhnaya govadina", desc: "Mol go'shti salati", price: "45,000"},
            en: {name: "Nezhnaya govadina", desc: "Beef salad", price: "45,000"},
            ru: {name: "Нежная говядина", desc: "Салат с говядиной", price: "45,000"},
            img: "/media/nejnaya_govyadina.jpg"
        },
        {
            uz: {name: "Vitamin", desc: "Vitamin salati", price: "15,000"},
            en: {name: "Vitamin", desc: "Vitamin salad", price: "15,000"},
            ru: {name: "Витамин", desc: "Витаминный салат", price: "15,000"},
            img: "/media/vitamin.jpg"
        },
        {
            uz: {name: "Hit", desc: "Hit salati", price: "35,000"},
            en: {name: "Hit", desc: "Hit salad", price: "35,000"},
            ru: {name: "Хит", desc: "Салат хит", price: "35,000"},
            img: "/media/xit.jpg"
        }
    ],
    asorti: [
        {
            uz: {name: "Myasnoye assorti (katta)", desc: "Katta go'sht assorti", price: "150,000"},
            en: {name: "Myasnoye assorti (katta)", desc: "Large meat assortment", price: "150,000"},
            ru: {name: "Мясное ассорти (катта)", desc: "Большое мясное ассорти", price: "150,000"},
            img: "/media/gosht_asorti.jpg"
        },
        {
            uz: {name: "Seledka", desc: "Seledka balig'i", price: "35,000"},
            en: {name: "Seledka", desc: "Herring fish", price: "35,000"},
            ru: {name: "Селёдка", desc: "Рыба сельдь", price: "35,000"},
            img: "/media/seledka.jpg"
        },
        {
            uz: {name: "Zelen assorti (Kavkaz)", desc: "Kavkaz ko'katlari", price: "45,000"},
            en: {name: "Zelen assorti (Kavkaz)", desc: "Caucasian greens", price: "45,000"},
            ru: {name: "Зелень ассорти (Кавказ)", desc: "Кавказская зелень", price: "45,000"},
            img: "/media/zelen_asorti.jpg"
        },
        {
            uz: {name: "Solyonnoye assorti", desc: "Solyonniy mahsulotlar", price: "18,000"},
            en: {name: "Solyonnoye assorti", desc: "Salted products", price: "18,000"},
            ru: {name: "Солённое ассорти", desc: "Соленые продукты", price: "18,000"},
            img: "/media/solyoniy_asorti.jpg"
        },
        {
            uz: {name: "Syrnoye assorti", desc: "Turli xil pishloqlar", price: "40,000"},
            en: {name: "Syrnoye assorti", desc: "Various cheeses", price: "40,000"},
            ru: {name: "Сырное ассорти", desc: "Различные сыры", price: "40,000"},
            img: "/media/sirniy_asorti.jpg"
        },
        {
            uz: {name: "Fruktovoye assorti", desc: "Turli xil mevalar", price: "120,000"},
            en: {name: "Fruktovoye assorti", desc: "Various fruits", price: "120,000"},
            ru: {name: "Фруктовое ассорти", desc: "Различные фрукты", price: "120,000"},
            img: "/media/meva_asorti.jpg"
        },
        {
            uz: {name: "Khlebnoye assorti", desc: "Turli xil nonlar", price: "15,000"},
            en: {name: "Khlebnoye assorti", desc: "Various breads", price: "15,000"},
            ru: {name: "Хлебное ассорти", desc: "Различные хлеба", price: "15,000"},
            img: "/media/non_asorti.jpg"
        },
        {
            uz: {name: "Obi non", desc: "Obi non", price: "6,000"},
            en: {name: "Obi non", desc: "Obi non", price: "6,000"},
            ru: {name: "Оби нон", desc: "Оби нон", price: "6,000"},
            img: "/media/ob-non.jpg"
        }
    ],
    ichimlik: [
        {
            uz: {name: "Suv Family 0,5/1/1,5", desc: "Suv", price: "4,000, 6,000, 8,000"},
            en: {name: "Suv Family 0,5/1/1,5", desc: "Water", price: "4,000, 6,000, 8,000"},
            ru: {name: "Сув Family 0,5/1/1,5", desc: "Вода", price: "4,000, 6,000, 8,000"},
            img: "/media/family.jpg"
        },
        {
            uz: {name: "Suv Chortoq 0,33-0,5", desc: "Chortoq suvi", price: "8,000, 13,000"},
            en: {name: "Suv Chortoq 0,33-0,5", desc: "Chortoq water", price: "8,000, 13,000"},
            ru: {name: "Сув чорток 0,33-0,5", desc: "Вода чорток", price: "8,000, 13,000"},
            img: "/media/chortoq.jpg"
        },
        {
            uz: {name: "Pepsi 0,5/1/1,5", desc: "Pepsi", price: "8,000, 14,000, 17,000"},
            en: {name: "Pepsi 0,5/1/1,5", desc: "Pepsi", price: "8,000, 14,000, 17,000"},
            ru: {name: "Пепси 0,5/1/1,5", desc: "Пепси", price: "8,000, 14,000, 17,000"},
            img: "/media/pepsi.jpg"
        },
        {
            uz: {name: "Cola 0,5/1/1,5", desc: "Coca Cola", price: "10,000, 15,000, 20,000"},
            en: {name: "Cola 0,5/1/1,5", desc: "Coca Cola", price: "10,000, 15,000, 20,000"},
            ru: {name: "Кола 0,5/1/1,5", desc: "Кока Кола", price: "10,000, 15,000, 20,000"},
            img: "/media/cola.jpg"
        },
        {
            uz: {name: "Fanta 0,5/1/1,5", desc: "Fanta", price: "10,000, 15,000, 20,000"},
            en: {name: "Fanta 0,5/1/1,5", desc: "Fanta", price: "10,000, 15,000, 20,000"},
            ru: {name: "Фанта 0,5/1/1,5", desc: "Фанта", price: "10,000, 15,000, 20,000"},
            img: "/media/fanta.jpg"
        },
        {
            uz: {name: "Sok 1 l", desc: "Sok", price: "18,000"},
            en: {name: "Sok 1 l", desc: "Juice", price: "18,000"},
            ru: {name: "Сок 1л", desc: "Сок", price: "18,000"},
            img: "/media/sok.jpg"
        },
        {
            uz: {name: "Limonat 0,5 l", desc: "Limonat", price: "23,000"},
            en: {name: "Limonat 0,5 l", desc: "Lemonade", price: "23,000"},
            ru: {name: "Лимонат 0,5л", desc: "Лимонад", price: "23,000"},
            img: "/media/limonad.jpg"
        },
        {
            uz: {name: "AysTea 1,25 l", desc: "AysTea", price: "12,000"},
            en: {name: "AysTea 1,25 l", desc: "AysTea", price: "12,000"},
            ru: {name: "АйсТеа 1,25л", desc: "АйсТеа", price: "12,000"},
            img: "/media/ays.jpg"
        },
        {
            uz: {name: "Kompot", desc: "Kompot", price: "15,000"},
            en: {name: "Kompot", desc: "Compote", price: "15,000"},
            ru: {name: "Компот", desc: "Компот", price: "15,000"},
            img: "/media/kompot.jpg"
        },
        {
            uz: {name: "Choy(ko'k, qora)", desc: "Qora choy", price: "3,000"},
            en: {name: "Choy(ko'k, qora)", desc: "Black tea", price: "3,000"},
            ru: {name: "Чой(ko'k, черные)", desc: "Черный чай", price: "3,000"},
            img: "/media/choy.jpg"
        },
        {
            uz: {name: "Choy (kiyik uti)", desc: "Yovvoyi o't choyi", price: "5,000"},
            en: {name: "Choy (smeels good)", desc: "Wild herb tea", price: "5,000"},
            ru: {name: "Чой (ароматные)", desc: "Чай из диких трав", price: "5,000"},
            img: "/media/choy.jpg"
        },
        {
            uz: {name: "Choy (limon)", desc: "Limon choyi", price: "13,000"},
            en: {name: "Choy (limon)", desc: "Lemon tea", price: "13,000"},
            ru: {name: "Чой (лимон)", desc: "Чай с лимоном", price: "13,000"},
            img: "/media/limon_choy.jpg"
        },
        {
            uz: {name: "Choy (novvot)", desc: "Novvot choyi", price: "13,000"},
            en: {name: "Choy (novvot)", desc: "Novvot tea", price: "13,000"},
            ru: {name: "Чой (новвот)", desc: "Чай с новвот", price: "13,000"},
            img: "/media/novot_choy.jpg"
        }
    ],
    pivo: [
        {
            uz: {name: "Baltika butilka 0,5 l", desc: "Baltika pivo", price: "20,000"},
            en: {name: "Baltika butilka 0,5 l", desc: "Baltika beer", price: "20,000"},
            ru: {name: "Балтика бутыл. 0,5л", desc: "Пиво Балтика", price: "20,000"},
            img: "/media/baltika_butilka.jpg"
        },
        {
            uz: {name: "Baltika banka 0,5 l", desc: "Baltika pivo", price: "20,000"},
            en: {name: "Baltika banka 0,5 l", desc: "Baltika beer", price: "20,000"},
            ru: {name: "Балтика баноч- 0,5л", desc: "Пиво Балтика", price: "20,000"},
            img: "/media/baltika_banka.jpg"
        },
        {
            uz: {name: "Tuborg butilka 0,5 l", desc: "Tuborg pivo", price: "20,000"},
            en: {name: "Tuborg butilka 0,5 l", desc: "Tuborg beer", price: "20,000"},
            ru: {name: "Туборг бутыл. 0,5л", desc: "Пиво Туборг", price: "20,000"},
            img: "/media/tuborg.jpg"
        },
        {
            uz: {name: "Sarbast butilka 1,5 l", desc: "Sarbast pivo", price: "20,000"},
            en: {name: "Sarbast butilka 1,5 l", desc: "Sarbast beer", price: "20,000"},
            ru: {name: "Сарбаст бутьл. 1,5л", desc: "Пиво Сарбаст", price: "20,000"},
            img: "/media/sarbast.jpg"
        },
        {
            uz: {name: "Kuller butilka 0,5 l", desc: "Kuller pivo", price: "20,000"},
            en: {name: "Kuller butilka 0,5 l", desc: "Kuller beer", price: "20,000"},
            ru: {name: "Куллер бутыл. 0,5л", desc: "Пиво Куллер", price: "20,000"},
            img: "/media/kuler_butilka.jpg"
        },
        {
            uz: {name: "Kuller banka 0,5 l", desc: "Kuller pivo", price: "20,000"},
            en: {name: "Kuller banka 0,5 l", desc: "Kuller beer", price: "20,000"},
            ru: {name: "Куллер баноч. 0,5л", desc: "Пиво Куллер", price: "20,000"},
            img: "/media/kuler_banka.jpg"
        },
        {
            uz: {name: "Pivnoye assorti", desc: "Turli xil pivo", price: "50,000"},
            en: {name: "Pivnoye assorti", desc: "Various beers", price: "50,000"},
            ru: {name: "Пивное ассорти", desc: "Различные пива", price: "50,000"},
            img: "/media/pivnoe_asorti.jpg"
        }
    ],
    kolyan: [
        {
            uz: {name: "Kolyan", desc: "kolyan oddiy", price: "150,000"},
            en: {name: "Kolyan", desc: "kolyan simple", price: "150,000"},
            ru: {name: "Кольян", desc: "Kolyan", price: "150,000"},
            img: "/media/kolyan.jpg"
        },
        {
            uz: {name: "Kolyan mevali", desc: "Baltika pivo", price: "250,000"},
            en: {name: "Kolyan with fruits", desc: "", price: "250,000"},
            ru: {name: "Кольян с фруктом", desc: "", price: "250,000"},
            img: "/media/kolyan_fruktoviy.jpg"
        },
    ],
    
};

// Kategoriya ma'lumotlari
const categoryInfo = {
    all: {
        uz: { title: "Barcha Taomlar", description: "Hamma kategoriyalardagi mazali taomlar" },
        en: { title: "All Dishes", description: "Delicious dishes from all categories" },
        ru: { title: "Все блюда", description: "Вкусные блюда из всех категорий" }
    },
    taom: {
        uz: { title: "Taomlar", description: "An'anaviy o'zbek taomlari" },
        en: { title: "Dishes", description: "Traditional Uzbek dishes" },
        ru: { title: "Блюда", description: "Традиционные узбекские блюда" }
    },
    salat: {
        uz: { title: "Salatlar", description: "Yangi va sog'lom salatlar" },
        en: { title: "Salads", description: "Fresh and healthy salads" },
        ru: { title: "Салаты", description: "Свежие и полезные салаты" }
    },
    ichimlik: {
        uz: { title: "Ichimliklar", description: "Sovuq va issiq ichimliklar" },
        en: { title: "Drinks", description: "Cold and hot beverages" },
        ru: { title: "Напитки", description: "Холодные и горячие напитки" }
    },
    asorti: {
        uz: { title: "Asorti", description: "Turli xil taomlar aralashmasi" },
        en: { title: "Assorted", description: "Mix of various dishes" },
        ru: { title: "Ассорти", description: "Смесь различных блюд" }
    },
    pivo: {
        uz: { title: "Pivo", description: "Sovuq va tetiklantiruvchi pivo turlari" },
        en: { title: "Beer", description: "Cold and refreshing beer varieties" },
        ru: { title: "Пиво", description: "Холодное и освежающее пиво" }
    },
    shashlik: {
        uz: { title: "Shashliklar", description: "Mazali va yangi pishirilgan shashliklar" },
        en: { title: "Shashliks", description: "Delicious and freshly grilled shashliks" },
        ru: { title: "Шашлыки", description: "Вкусные и свежеприготовленные шашлыки" }
    },
    kolyan: {
        uz: { title: "Shashliklar", description: "Mazali va yangi pishirilgan shashliklar" },
        en: { title: "Shashliks", description: "Delicious and freshly grilled shashliks" },
        ru: { title: "Шашлыки", description: "Вкусные и свежеприготовленные шашлыки" }
    },
};

let currentLang = 'uz';
let currentCategory = 'all';

// ===== YANGI FUNKSIYALAR =====

// Kategoriya ma'lumotlarini yangilash
function updateCategoryInfo() {
    const categoryTitle = document.getElementById('categoryTitle');
    const categoryDescription = document.getElementById('categoryDescription');
    const itemsCount = document.getElementById('itemsCount');
    
    if (categoryTitle && categoryDescription && itemsCount) {
        // Tanlangan kategoriya ma'lumotlarini olish
        const categoryData = categoryInfo[currentCategory];
        const info = categoryData ? categoryData[currentLang] : categoryInfo.all[currentLang];
        
        // Elementlarni yangilash
        categoryTitle.textContent = info.title;
        categoryDescription.textContent = info.description;
        
        // Ovqatlar sonini hisoblash
        const items = currentCategory === 'all' 
            ? Object.values(menuData).flat()
            : menuData[currentCategory] || [];
        
        itemsCount.textContent = items.length;
        
        // Til o'zgarishlarini yangilash
        updateCategoryInfoTexts();
    }
}

// Kategoriya info sectionidagi til o'zgarishlarini yangilash
function updateCategoryInfoTexts() {
    const countText = document.querySelector('.count-text');
    if (countText) {
        countText.textContent = countText.getAttribute(`data-${currentLang}`);
    }
}

// ===== MAVJUD FUNKSIYALARNI YANGILASH =====

// INIT - sahifa yuklanganda
window.addEventListener('load', () => {
    setTimeout(() => {
        document.getElementById('loader').classList.add('hidden');
    }, 1000);
    
    // Kategoriya ma'lumotlarini yangilash
    updateCategoryInfo();
    
    // Menyuni yuklash
    renderMenu();
    
    // Scroll to top funksiyasini ishga tushurish
    initScrollToTop();
});

// SCROLL TO TOP FUNCTIONALITY (YANGILANGAN VERSIYA)
function initScrollToTop() {
    const scrollToTopBtn = document.getElementById('scrollToTop');
    
    if (scrollToTopBtn) {
        // Show/hide button based on scroll position
        window.addEventListener('scroll', () => {
            if (window.pageYOffset > 300) {
                scrollToTopBtn.classList.add('visible');
            } else {
                scrollToTopBtn.classList.remove('visible');
            }
        });
        
        // Scroll to top when button is clicked
        scrollToTopBtn.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
}

// CHANGE LANGUAGE - tilni o'zgartirish
function changeLang(lang) {
    currentLang = lang;
    
    // Til tugmalarini yangilash
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    event.target.classList.add('active');
    
    // Barcha til o'zgarishlarini yangilash
    document.querySelectorAll('[data-uz]').forEach(el => {
        el.textContent = el.getAttribute(`data-${lang}`);
    });
    
    // Kategoriya ma'lumotlarini yangilash
    updateCategoryInfo();
    
    // Menyuni yangilash
    renderMenu();
}

// FILTER CATEGORY - kategoriyani filtrlash (YANGILANGAN VERSIYA)
function filterCategory(cat) {
    currentCategory = cat;
    
    // Kategoriya kartalarini yangilash
    document.querySelectorAll('.category-card').forEach(card => {
        card.classList.remove('active');
    });
    event.target.closest('.category-card').classList.add('active');
    
    // Kategoriya ma'lumotlarini yangilash
    updateCategoryInfo();
    
    // Menyuni yangilash
    renderMenu();
    
    // ✅ YANGI: Scroll to menu section after filter change
    setTimeout(() => {
        const menuSection = document.getElementById('menuSection');
        if (menuSection) {
            menuSection.scrollIntoView({ 
                behavior: 'smooth',
                block: 'start'
            });
        }
    }, 300); // 300ms kutamiz, filter amalga oshishi uchun
}

// RENDER MENU - menyuni ko'rsatish
function renderMenu() {
    const grid = document.getElementById('menuGrid');
    
    if (!grid) {
        console.error("menuGrid element topilmadi!");
        return;
    }
    
    grid.innerHTML = '';
    
    // Tanlangan kategoriyaga mos ovqatlarni olish
    const items = currentCategory === 'all' 
        ? Object.values(menuData).flat()
        : menuData[currentCategory] || [];
    
    console.log("Tanlangan kategoriya:", currentCategory);
    console.log("Ovqatlar soni:", items.length);
    console.log("Ovqatlar:", items);
    
    // Agar ovqatlar mavjud bo'lmasa
    if (items.length === 0) {
        grid.innerHTML = `
            <div class="no-items">
                <p data-uz="Bu bo'limda hozircha mahsulotlar mavjud emas" 
                   data-en="No items available in this category" 
                   data-ru="В этой категории пока нет товаров">
                   Bu bo'limda hozircha mahsulotlar mavjud emas
                </p>
            </div>
        `;
        
        // Til o'zgarishlarini yangilash
        const noItemsText = document.querySelector('.no-items p');
        if (noItemsText) {
            noItemsText.textContent = noItemsText.getAttribute(`data-${currentLang}`);
        }
        return;
    }
    
    // Ovqatlarni ko'rsatish
    items.forEach(item => {
        const data = item[currentLang];
        const menuItem = document.createElement('div');
        menuItem.className = 'menu-item';
        menuItem.innerHTML = `
            <img src="${item.img}" alt="${data.name}" loading="lazy">
            <div class="menu-item-content">
                <div class="menu-item-title">${data.name}</div>
                <div class="menu-item-desc">${data.desc}</div>
                <div class="menu-item-price">${data.price} so'm</div>
            </div>
        `;
        grid.appendChild(menuItem);
    });
}