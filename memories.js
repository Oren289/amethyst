const memories = [
  {
    id: 1,
    name: '1.jpeg',
    description: 'Bby kirim foto ini pas lagi di Solok. Sampai sekarang foto ini masih jadi background chat aku &hearts;',
  },
  {
    id: 2,
    name: '2.jpeg',
    description: 'Editan pertamo aku, buat ngerayain ulang tahun bby yang pertamo kali setelah pacaran hihi.',
  },
  {
    id: 3,
    name: '3.jpeg',
    description: 'Zoo date pertamo kito, bucin pertama kali di depan teman-teman wkwkwk.',
  },
  {
    id: 4,
    name: '4.jpeg',
    description: 'Ini pas di bebek monas wkwkwk. Tempat kito hunting suki-suki di Jambi',
  },
  {
    id: 5,
    name: '5.jpeg',
    description: 'Foto ini pas kito nyoba mamam es krim di Megh Savour. Bby sebenernyo kurang suko samo foto ini karena mukonyo keliatan bulatt wkwkw. Padahal aku suko nian loh &hearts;',
  },
  {
    id: 6,
    name: '6.jpeg',
    description: 'Ini pas mamam seblak di tempat favorit kito di Jambi. Dulu hampir tiap minggu kito ke sini wkwkwk',
  },
  {
    id: 7,
    name: '7.jpeg',
    description: 'Ini pas kito foto di kaco Megh Savour. Ini habis aku motoin bby di tanggo hihi',
  },
  {
    id: 8,
    name: '8.jpeg',
    description: 'Foto ini diambil pas kito di Gildak Jambi. Habis nonton film nih kiwkiw. Pas ini jugo kito bikin video "very short girlfriend check"',
  },
  {
    id: 9,
    name: '9.jpeg',
    description: 'Ini foto pas kito nongkrong di kantor walikota habis baikan dari berantem wkwkwk. Paginyo kito mamam bubur ayamm',
  },
  {
    id: 10,
    name: '10.jpeg',
    description: 'Ini foto pas habis main timezonee. Kito dapet hadiah cincin mainan warna mpink, trus aku pasangin ke bby deh wkwkwk',
  },
  {
    id: 11,
    name: '11.jpeg',
    description: 'Ini foto diambil abis mamam selepas main timezone di Jamtos.',
  },
  {
    id: 12,
    name: '12.jpeg',
    description: 'Ini pas kito foto di kaco Megh Savour. Ini habis aku motoin bby di tanggo hihi',
  },
  {
    id: 13,
    name: '13.jpeg',
    description: 'Foto ini pas kito lagi makan Ichiban di Jamtos. Liat seneng nian anak kicik tu mamam beef ramen wkwkwk',
  },
  {
    id: 14,
    name: '14.jpeg',
    description: "Ini foto pas lagi mamam Ichiban. Aku masih kurus nian kek tengkorak berjalan :'D",
  },
  {
    id: 15,
    name: '15.jpeg',
    description: 'Ini pas kito nonton Spiderman: No Way Home. Sebelum ini kito mampir mamam Ichiban duluu',
  },
  {
    id: 16,
    name: '16.jpeg',
    description: 'Ini foto bby pas mau siap-siap aku jemputt',
  },
  {
    id: 17,
    name: '17.jpeg',
    description: 'Ini foto di rumah nur, pas kito ngajak dio jadi nyamuk wkwkwkw. Foto ini jugo yang aku salah kirim ke papa pas papa minta foto KTP &#128557;',
  },
  {
    id: 18,
    name: '18.jpeg',
    description: 'Ini foto di Trona Express hihi. Pas kito dk sengajo couplean baju pas mau mamam saimen wkwkwk',
  },
  {
    id: 19,
    name: '19.jpeg',
    description: 'Bombastic side eye...',
  },
  {
    id: 20,
    name: '20.jpeg',
    description: 'Ini foto pas bby maskerin aku wkwkwk. Buat pamer ke rahma bangke waktu itu',
  },
  {
    id: 21,
    name: '21.jpeg',
    description: 'Ini foto perpisahan pas pertamo kali mau LDR :(. Aku peluk bby yang nangis pas itu, eh dk lamo kemudian aku yang nangis wkwkwk',
  },
  {
    id: 22,
    name: '22.jpeg',
    description: 'Ini foto pas aku pertamo kali nian berkunjung ke Bandung wkwkwk. Ini pas bby jemput aku di stasiun.',
  },
  {
    id: 23,
    name: '23.jpeg',
    description: 'Ini foto pas kito maskeran barengg. Maaf yo pas aku pasangin maskernyo belepotan wkwkwk',
  },
  {
    id: 24,
    name: '24.jpeg',
    description: 'Ini pas pertamo kali aku ke Bandung. Kito lagi ngegrab dari stasiun ke kos bby. Pas itu aku mabok nian mau muntah makonyo rebahan &#128557;',
  },
  {
    id: 25,
    name: '25.jpeg',
    description: 'Ini pas pertamo kali ke Bandung. Muko-muko mabok malah difoto-fotoin &#128557;',
  },
  {
    id: 26,
    name: '26.jpeg',
    description: 'Ini pas pertamo kali ke aku diajak jalan-jalan ke kampus bbyy. Kito habis dari pasar kaget ini, mamam bubur ketan itam campur kacang ijoo',
  },
  {
    id: 27,
    name: '27.jpeg',
    description: 'Foto ini pas kito di Burger King pascal ngerayain ulang tahun akuuu &hearts;',
  },
  {
    id: 28,
    name: '28.jpeg',
    description: 'Ini foto pas pertamo kali nian kito mamam pecel pas di Bandung &hearts;. Waktu itu kito kelaperan jadi cari mamam di luar. Terus pas itu aku panik ditelpon mimi wkwkwk',
  },
  {
    id: 29,
    name: '29.jpeg',
    description: 'Ini aku fotoin bby pas kito jalan-jalan ke pascal. Bby waktu itu gumush liat bando tucin, akhirnyo aku beliin deh. Liat seneng nian mukonyo &hearts;',
  },
  {
    id: 30,
    name: '30.jpeg',
    description: 'Ini kito foto selfie pas di Burger King Pascal, pas aku ke bandung buat ngerayain ulang tahun aku',
  },
  {
    id: 31,
    name: '31.jpeg',
    description: 'Ini foto pas aku mau pulang ke Purwokerto :(. Semalem sebelumnyo kito pasang cincin couple. Fotonyo sengajo gitu biar pamer cincin hahaha',
  },
  {
    id: 32,
    name: '32.jpeg',
    description: 'Ini foto pas kito jalan-jalan ke pascall, kito nyoba-nyobain barang-barang aneh wkwkwk',
  },
  {
    id: 33,
    name: '33.jpeg',
    description: 'Ini foto pas kito mau nontonn. Tapi aku lupo nian kito nonton apo ini &#128557;. Bby inget ndak kito nonton apoo?',
  },
  {
    id: 34,
    name: '34.jpeg',
    description: 'Foto pas kito pertamo kali pulang bareng ke Jambi &hearts;',
  },
  {
    id: 35,
    name: '35.jpeg',
    description: 'Ini foto pas kito habis nontonn. Waktu itu aku bilang pengen nyobain Jajangmyeon jadi kito kesituu. Trus ternyata aku ndak suko &#128557;',
  },
  {
    id: 36,
    name: '36.jpeg',
    description: 'Ini foto sebelum kito nonton film. Tapi aku lupo film apo, kalo bby inget tolong ingetin aku yoo :(. Waktu itu kito gabut jadi foto-foto dulu deh. Liat cantik nian bby di sini &hearts;',
  },
  {
    id: 37,
    name: '37.jpeg',
    description: 'Ini kito foto di Uniqlo. Tapi lupo deh mall mano :(. Waktu itu aku nambah sehari di Bandung gara-gara kito berantem wkwkwk. Trus jalan-jalan baikan lagi deeh',
  },
  {
    id: 38,
    name: '38.jpeg',
    description: 'Our first anniversary &hearts;',
  },
  {
    id: 39,
    name: '39.jpeg',
    description: 'Foto selfie pas kito ngerayain anniversary yang pertamo. Aku beliin bby bunga, waktu itu murah-murah ajo karena aku belum punyo uang &#128557;',
  },
  {
    id: 40,
    name: '40.jpeg',
    description: 'Ini pas kito nonton Top Gun Maverick. Aku waktu itu pengen nian nonton film ini, trus ngajak bby deh. Aku kiro bby bakal bosen, eh ternyata bby jugo sukoo &hearts;',
  },
  {
    id: 41,
    name: '41.jpeg',
    description: 'Bby fotoin aku buat nyari angle foto yang bagus pas anniversary hahaha',
  },
  {
    id: 42,
    name: '42.jpeg',
    description: 'Look how beautiful she is &hearts;',
  },
  {
    id: 43,
    name: '43.jpeg',
    description: 'Ini pas kito FOMO nonton pengabdi setan 2 hahaha',
  },
  {
    id: 44,
    name: '44.jpeg',
    description: 'Ini pas kito jalan-jalan ke Braga abis nonton pengabdi setan',
  },
  {
    id: 45,
    name: '45.jpeg',
    description: 'Lucu nian anak kicik pake filter kodok hahahah',
  },
  {
    id: 46,
    name: '46.jpeg',
    description: 'Ini kito habis nonton, tapi aku lupo nonton apoo :(. Kalo bby inget nanti kasih tau aku yoo',
  },
  {
    id: 47,
    name: '47.jpeg',
    description: 'Ini foto pas kito mamam dimsum favorit kitoo &hearts;',
  },
  {
    id: 48,
    name: '48.jpeg',
    description: 'Membangun rumah tangga bersama mu &hearts;',
  },
  {
    id: 49,
    name: '49.jpeg',
    description: 'Ini foto pas kito ngerayain ulang tahun aku di Burger King. Malah bby yang pake mahkota nyo &#128557;',
  },
  {
    id: 50,
    name: '50.jpeg',
    description: 'Mahkota mu tertinggal queen 👑',
  },
  {
    id: 51,
    name: '51.jpeg',
    description: 'Ini akuu pas difotoin di Gildak malem-malem',
  },
  {
    id: 52,
    name: '52.jpeg',
    description: 'Ini foto kito ngegabut di Gildak malem-malem. Cuma pesen satu tapi duduk lamo nian wkwkwkw',
  },
  {
    id: 53,
    name: '53.jpeg',
    description: 'Tampan dan berani',
  },
  {
    id: 54,
    name: '54.jpeg',
    description: 'Aduuh cantik nian kakak nii &hearts;',
  },
  {
    id: 55,
    name: '55.jpeg',
    description: 'Sok candid, padahal settingan wkwkw',
  },
  {
    id: 56,
    name: '56.jpeg',
    description: 'Ini foto pas pertamo kali nian bby ngajak aku mamam Tom Sushii &hearts;',
  },
  {
    id: 57,
    name: '57.jpeg',
    description: 'HAHAHAH. Ini foto pas kito unboxing kado bby di Haus. Maaf yo ini aku ambil yang aib wkwkwk',
  },
  {
    id: 58,
    name: '58.jpeg',
    description: 'Ini foto behind the scene pas di Kiara Artha Park. Marah-marah teruss anak kicik nii wkwkwk',
  },
  {
    id: 59,
    name: '59.jpeg',
    description: 'Ini foto yang di Kiara Artha Park. Pas kito sibuk keliling nyari-nyari spot foto yang bagus. Trus ini duduk di tepian yang ado rumputnyo jadi seakan-akan lagi piknik, padahal di pinggir jalan diliatin orang wkwkwk',
  },
  {
    id: 60,
    name: '60.jpeg',
    description: 'One of my favorite photo of us &hearts;. Ini diambil pas candid',
  },
  {
    id: 61,
    name: '61.jpeg',
    description: 'WKWKWK. Idung bulatt. Gumush kok, jangan marah yoo wkwkw',
  },
  {
    id: 62,
    name: '62.jpeg',
    description: 'Ini foto pas di Tom Sushi pertamo kali &hearts;',
  },
  {
    id: 63,
    name: '63.jpeg',
    description: 'Ini foto pas kito adventure ke IKEA, jauh-jauh ke parahyangan &hearts;',
  },
  {
    id: 64,
    name: '64.jpeg',
    description: 'Ini foto di depan IKEA, liat seneng nian mukonyo diajak jalan-jalan &hearts;',
  },
  {
    id: 65,
    name: '65.jpeg',
    description: 'Hello >:(',
  },
  {
    id: 66,
    name: '66.jpeg',
    description: 'Ini foto pas kito explore IKEA. Tiap ado kaco pasti foto wkwkw',
  },
  {
    id: 67,
    name: '67.jpeg',
    description: 'Ini foto sebelum mamam baso IKEA yang legendaris. Pas kito datang masih sepi, eh pas kito udah makan rame. Jadi penglaris.',
  },
  {
    id: 68,
    name: '68.jpeg',
    description: 'Foto di kamar IKEA, wisata masa depan',
  },
  {
    id: 69,
    name: '69.jpeg',
    description: 'Ini foto pas kito main troli di gudang IKEA. Hampir beberapo kali numbur &#128557;',
  },
  {
    id: 70,
    name: '70.jpeg',
    description: 'Di mana ada kaca, di situ kita foto',
  },
  {
    id: 71,
    name: '71.jpeg',
    description: 'Hej! Ini pas kito mamam di IKEA. Waktu itu kito nyelundupin coca-cola ke botol bekas mumpung gratisan &#128557;',
  },
  {
    id: 72,
    name: '72.jpeg',
    description: 'Liat anak kicik ni dimamam gurita &hearts;',
  },
  {
    id: 73,
    name: '73.jpeg',
    description: 'Ini foto di gudang IKEA, capek habis lari-lari main troli wkwkwk',
  },
  {
    id: 74,
    name: '74.jpeg',
    description: 'Penguinnn &hearts;',
  },
  {
    id: 75,
    name: '75.jpeg',
    description: 'Anak kicik keboboan',
  },
  {
    id: 76,
    name: '76.jpeg',
    description: 'My #1 favorite photo of all time &hearts;',
  },
  {
    id: 77,
    name: '77.jpeg',
    description: 'Ini foto pas bby ngetes makeup buat konser. Eh pas konser malah lupo dipake &#128557;',
  },
  {
    id: 78,
    name: '78.jpeg',
    description: 'Aduh lucu niann anak kicik satu nii &hearts;',
  },
  {
    id: 79,
    name: '79.jpeg',
    description: 'Ini foto di NPF habis Ziva nyanyii &hearts;',
  },
  {
    id: 80,
    name: '80.jpeg',
    description: 'Ini niatnyo cuma foto random di NPF, eh taunyo bagus wkwkwk',
  },
  {
    id: 81,
    name: '81.jpeg',
    description: 'Nonton konser bareng &hearts;',
  },
  {
    id: 82,
    name: '82.jpeg',
    description: 'Cantiknyo anak kicil satu nii &hearts;',
  },
  {
    id: 83,
    name: '83.jpeg',
    description: 'Aku suko baju bby yang ini. Blackpink!',
  },
  {
    id: 84,
    name: '84.jpeg',
    description: 'Ini cuma niat mau foto bby buat koleksi, eh taunyo bagus, trus bby minta fotoin lagi deh wkwkwk',
  },
  {
    id: 85,
    name: '85.jpeg',
    description: 'Ini foto pas kito berangkat dari Jambi yang kemarinn, aku foto ini buat kirim ke mimi',
  },
  {
    id: 86,
    name: '86.jpeg',
    description: 'Our first photo together &hearts;. Ketika semesta mempertemukan kita kembali di tengah-tengah ketidaksengajaan',
  },
  {
    id: 87,
    name: '87.jpeg',
    description: 'Bobokkk',
  },
  {
    id: 88,
    name: '88.jpeg',
    description: 'ini foto pas bby pertamo kali ke tempat akuu hihi',
  },
  {
    id: 89,
    name: '89.jpeg',
    description: 'Ini foto pas bby semproo. Semangat yoo, semoga lancar sampai lulus. Aku selalu dukung bby, walaupun dari jauh &hearts;',
  },
  {
    id: 90,
    name: '90.jpeg',
    description: 'Ini foto pas bby kesenengan dibeliin permen kelinci sebesak gaban. Liat seneng nian mukonyoo &hearts;',
  },
  {
    id: 91,
    name: '91.jpeg',
    description: 'Ini foto pas bby nemenin aku beli baju di Uniqlo. Permen kelinci nyo dibawa-bawa dong, sampe ado anak kicik iri minta beliin ke bapaknyo &#128557;',
  },
  {
    id: 92,
    name: '92.jpeg',
    description: 'Our second anniversary &hearts;',
  },
  {
    id: 93,
    name: '93.jpeg',
    description: 'Ini foto pas kito mamam stik. Habis foto ini kito main ice skating lagi wkwkwk',
  },
  {
    id: 94,
    name: '94.jpeg',
    description: 'Criminal offensive side eye...',
  },
  {
    id: 95,
    name: '95.jpeg',
    description: 'Ini pas bby minta fotoin di kebun bunga di rooftop PVJ &hearts;',
  },
  {
    id: 96,
    name: '96.jpeg',
    description: 'Ini foto pas bby nemenin aku presentasi kp di diskominfo &hearts;',
  },
  {
    id: 97,
    name: '97.jpeg',
    description: 'Ini foto bby pas main ice skating di PVJ, ini pas kito datang yang keduo kalinyo, udah lumayan biso wkwkwk',
  },
  {
    id: 98,
    name: '98.jpeg',
    description: 'Ini foto di parkiran diskominfo, foto karena helmnyo couple wkwkwk',
  },
  {
    id: 99,
    name: '99.jpeg',
    description: 'Ini waktu aku fotoin bby di WTC Jambi, kito habis sholat. Aku foto buat pamer ke aan jidan wkwkwk',
  },
  {
    id: 100,
    name: '100.jpeg',
    description: 'Ini foto bby pas mau siap-siap aku jemput buat jalan-jalan &hearts;',
  },
];

export { memories };
