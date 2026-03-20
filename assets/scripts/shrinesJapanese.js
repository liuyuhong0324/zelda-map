var AllJapaneseShrines = (function () {
  var shrines = "マ・オーヌの祠|ジャ・バシフの祠|ワ・モダイの祠|トゥミ・ンケの祠|ヴァシ・リャコの祠|モンヤ・トマの祠|シ・ダゴズの祠|ルヨ・タウの祠|ワゴ・カタの祠|ヤカー・マタの祠|ダ・カソーの祠|カタ・チュキの祠|ナミカ・オズの祠|ニア・ネアの祠|サス・コサの祠|キワ・ザタスの祠|シャオ・ヨの祠|モ・ラタニアの祠|マ・ノラの祠|トー・ヤッサの祠|ミッダ・ロキの祠|キヨ・ウーの祠|クン・シダジの祠|ダ・チョカヒの祠|マーム・ラノの祠|キト・ワワイの祠|リ・ダヒの祠|ヒロ・ヒラの祠|ハユ・ダマの祠|タロ・ニヒの祠|サイ・ウートの祠|シベ・ニャスの祠|シベ・ニーロの祠|トト・イサの祠|ショダ・サーの祠|ラーナ・ロキの祠|キュカ・ナタの祠|ミャマ・ガナの祠|ヤオ・マーヨの祠|ムオ・ジームの祠|ダウ・ナエの祠|タワ・ジヌの祠|カム・ユオの祠|チャス・ケタの祠|クグ・チデの祠|マ・カヤの祠|ミーズー・ヨの祠|ターノ・アの祠|ジター・サミの祠|ダタ・クスの祠|サオ・コヒの祠|カヤ・ミワの祠|シェモ・ラタの祠|ネヅ・ヨマの祠|ダ・キキーの祠|ルッコ・マの祠|シ・ヨタの祠|ジノ・ヨーの祠|ケー・ノイの祠|キマ・コササの祠|ササ・カイの祠|キハ・ウの祠|ディラ・マの祠|イオ・ソオの祠|シ・ジトの祠|クイ・タッカの祠|スマ・サマの祠|ジュニ・シの祠|グコ・チセの祠|ハワ・カイの祠|ト・カユーの祠|ダコ・タワの祠|キョシ・オーの祠|ミィ・スゥの祠|キマ・ズースの祠|ラキュ・ウロの祠|ダヒ・シーノの祠|カツ・トサの祠|ジズ・カフィの祠|カ・ムーの祠|ケニィ・シカの祠|リター・ズモの祠|ヅナ・カイの祠|ツツア・ニマの祠|トゥ・カロの祠|モア・キシトの祠|シモ・イトセの祠|ダカ・カの祠|ショラ・ハの祠|キュ・ラムヒの祠|サ・ダージュの祠|ミーロ・ツヒの祠|グ・アチトーの祠|ケハ・ラマの祠|タ・ムールの祠|カオ・マカの祠|プマ・ニットの祠|シ・タタンケの祠|シ・クチョフの祠|ヤ・ナーガの祠|アコ・ヴァータの祠|ラノ・クヒーの祠|ティナ・キョザの祠|カ・オキョの祠|ロナ・カータの祠|ウータ・ドの祠|ヴォリダ・ノの祠|ノッキ・ミヒの祠|シャ・タワの祠|ドゥンバ・タの祠|カマ・ラヒの祠|ヒャ・ミウの祠|ト・クモの祠|シャダ・アダの祠|ガオマ・アサの祠|ラー・クアの祠|ミョス・シノの祠|シャ・ゲマの祠|リ・モナの祠|カザ・トッキの祠".split("|");
  var result = {};
  for (var i = 0; i < shrines.length; i++) {
    result[shrines[i]] = true;
  }
  return result;
})();
var shrinesToJapanese = (function () {
  var shrines = "\
カヤ・ミワの祠|Kaya Wan Shrine|卡亚·米瓦神庙\r\n\
ダタ・クスの祠|Daka Tuss Shrine|达塔·库斯神庙\r\n\
ミーズー・ヨの祠|Mezza Lo Shrine|米兹·耀神庙\r\n\
ルッコ・マの祠|Rucco Maag Shrine|鲁克·玛神庙\r\n\
シ・ヨタの祠|Shai Yota Shrine|希·约塔神庙\r\n\
ワゴ・カタの祠|Wahgo Katta Shrine|瓦果·卡塔神庙\r\n\
ヒロ・ヒラの祠|Hila Rao Shrine|希拉·劳神庙\r\n\
タロ・ニヒの祠|Ta'loh Naeg Shrine|塔罗·尼希神庙\r\n\
ラーナ・ロキの祠|Lakna Rokee Shrine|拉纳·罗基神庙\r\n\
カム・ユオの祠|Kam Urog Shrine|卡姆·尤奥神庙\r\n\
ダウ・ナエの祠|Dow Na'eh Shrine|道·纳埃神庙\r\n\
ジター・サミの祠|Jitan Sa'mi Shrine|吉塔·萨米神庙\r\n\
ターノ・アの祠|Tahno O'ah Shrine|塔诺·阿神庙\r\n\
ヴァシ・リャコの祠|Bosh Kala Shrine|瓦希·利亚科神庙\r\n\
リ・ダヒの祠|Ree Dahee Shrine|利·达希神庙\r\n\
シベ・ニャスの祠|Shee Venath Shrine|希贝·尼亚斯神庙\r\n\
シベ・ニーロの祠|Shee Vaneer Shrine|希贝·尼罗神庙\r\n\
ハユ・ダマの祠|Ha Dahamar Shrine|哈尤·达玛神庙\r\n\
ミャマ・ガナの祠|Myahm Agana Shrine|米亚马·迦纳神庙\r\n\
シ・クチョフの祠|Shae Katha Shrine|希·库乔夫神庙\r\n\
トト・イサの祠|Toto Sah Shrine|托托·伊萨神庙\r\n\
ヤ・ナーガの祠|Ya Naga Shrine|亚·纳迦神庙\r\n\
プマ・ニットの祠|Pumaag Nitae Shrine|普玛·尼特神庙\r\n\
シ・タタンケの祠|Shoqa Tatone Shrine|希·塔塔恩科神庙\r\n\
カオ・マカの祠|Ka'o Makagh Shrine|卡奥·玛卡神庙\r\n\
ショダ・サーの祠|Shoda Sah Shrine|修达·萨尔神庙\r\n\
サイ・ウートの祠|Shai Utoh Shrine|赛·乌托神庙\r\n\
キュカ・ナタの祠|Qukah Nata Shrine|丘卡·纳塔神庙\r\n\
タワ・ジヌの祠|Tawa Jinn Shrine|塔瓦·吉努神庙\r\n\
ヤオ・マーヨの祠|Yah Rin Shrine|雅·玛约神庙\r\n\
マ・カヤの祠|Kah Yah Shrine|玛·卡亚神庙\r\n\
ムオ・ジームの祠|Muwo Jeem Shrine|姆奥·吉姆神庙\r\n\
チャス・ケタの祠|Chaas Qeta Shrine|查斯·科塔神庙\r\n\
クグ・チデの祠|Korgu Chideh Shrine|库格·齐德神庙\r\n\
キマ・コササの祠|Kema Kosassa Shrine|基玛·科萨萨神庙\r\n\
キハ・ウの祠|Keeha Yoog Shrine|基哈·乌神庙\r\n\
クイ・タッカの祠|Kuh Takkar Shrine|库伊·塔卡神庙\r\n\
モ・ラタニアの祠|Mogg Latan Shrine|摩·拉塔尼亚神庙\r\n\
シ・ダゴズの祠|Sheem Dagoze Shrine|希·达戈兹神庙\r\n\
ヤカー・マタの祠|Kaam Ya'tak Shrine|亚卡·玛塔神庙\r\n\
ルヨ・タウの祠|Rota Ooh Shrine|鲁耀·塔乌神庙\r\n\
ジュニ・シの祠|Joloo Nah Shrine|珠尼·希神庙\r\n\
トゥミ・ンケの祠|Keh Namut Shrine|图米·恩科神庙\r\n\
マ・オーヌの祠|Oman Au Shrine|玛·奥努神庙\r\n\
ジャ・バシフの祠|Ja Baij Shrine|贾·巴希夫神庙\r\n\
ワ・モダイの祠|Owa Daim Shrine|瓦·摩达伊神庙\r\n\
ジノ・ヨーの祠|Jee Noh Shrine|吉诺·耀神庙\r\n\
ケー・ノイの祠|Kay Noh Shrine|奇·诺伊神庙\r\n\
ダコ・タワの祠|Dako Tah Shrine|达科·塔瓦神庙\r\n\
ササ・カイの祠|Sasa Kai Shrine|萨萨·卡伊神庙\r\n\
シ・ジトの祠|Sho Dantu Shrine|希·吉托神庙\r\n\
キマ・ズースの祠|Kema Zoos Shrine|基玛·祖斯神庙\r\n\
ト・カユーの祠|Tho Kayu Shrine|托·卡尤神庙\r\n\
ハワ・カイの祠|Hawa Koth Shrine|哈瓦·卡伊神庙\r\n\
グコ・チセの祠|Daqo Chisay Shrine|古科·奇塞神庙\r\n\
ラキュ・ウロの祠|Raqa Zunzo Shrine|拉库·乌罗神庙\r\n\
キョシ・オーの祠|Korsh O'hu Shrine|基奥·希乌神庙\r\n\
ミィ・スゥの祠|Misae Suma Shrine|米伊·苏神庙\r\n\
ディラ・マの祠|Dila Maag Shrine|迪拉·玛神庙\r\n\
スマ・サマの祠|Suma Sahma Shrine|斯玛·萨玛神庙\r\n\
イオ・ソオの祠|Ishto Soh Shrine|伊奥·索奥神庙\r\n\
ト・クモの祠|To Quomo Shrine|托·库摩神庙\r\n\
シャダ・アダの祠|Shada Naw Shrine|夏达·阿达神庙\r\n\
ラー・クアの祠|Rok Uwog Shrine|拉·库亚神庙\r\n\
カザ・トッキの祠|Qaza Tokki Shrine|卡扎·托基神庙\r\n\
ミョス・シノの祠|Mozo Shenno Shrine|妙斯·希诺神庙\r\n\
ガオマ・アサの祠|Goma Asaagh Shrine|高玛·阿萨神庙\r\n\
カマ・ラヒの祠|Maka Rah Shrine|卡玛·拉希神庙\r\n\
シャ・タワの祠|Sha Warvo Shrine|夏·塔瓦神庙\r\n\
ラノ・クヒーの祠|Lanno Kooh Shrine|拉诺·库希神庙\r\n\
ノッキ・ミヒの祠|Gee Ha'rah Shrine|诺基·米希神庙\r\n\
リ・モナの祠|Rin Oyaa Shrine|利·摩纳神庙\r\n\
ロナ・カータの祠|Rona Kachta Shrine|罗纳·卡塔神庙\r\n\
ウータ・ドの祠|Voo Lota Shrine|乌塔·多神庙\r\n\
アコ・ヴァータの祠|Akh Va'quot Shrine|阿科·瓦塔神庙\r\n\
ヴォリダ・ノの祠|Bareeda Naag Shrine|沃里达·诺神庙\r\n\
ドゥンバ・タの祠|Dunba Taag Shrine|杜姆巴·塔神庙\r\n\
マ・ノラの祠|Maag No'rah Shrine|玛·诺拉神庙\r\n\
モンヤ・トマの祠|Monya Toma Shrine|蒙亚·托马神庙\r\n\
カ・オキョの祠|Kah Okeo Shrine|卡·奥科神庙\r\n\
ティナ・キョザの祠|Tena Ko'sah Shrine|提纳·科萨神庙\r\n\
シャオ・ヨの祠|Shae Loya Shrine|晓·约神庙\r\n\
トー・ヤッサの祠|Toh Yahsa Shrine|托·雅萨神庙\r\n\
キワ・ザタスの祠|Zalta Wa Shrine|基瓦·扎塔斯神庙\r\n\
ニア・ネアの祠|Noya Neha Shrine|尼亚·内亚神庙\r\n\
カタ・チュキの祠|Katah Chuki Shrine|卡塔·丘基神庙\r\n\
キト・ワワイの祠|Ketoh Wawai Shrine|基托·瓦瓦伊神庙\r\n\
ショラ・ハの祠|Shora Hah Shrine|修拉·哈神庙\r\n\
グ・アチトーの祠|Gorae Torr Shrine|古·阿奇托神庙\r\n\
ヅナ・カイの祠|Zuna Kai Shrine|兹纳·卡伊神庙\r\n\
ダ・チョカヒの祠|Daag Chokah Shrine|达·乔卡希神庙\r\n\
クン・シダジの祠|Kuhn Sidajj Shrine|库恩·希达吉神庙\r\n\
キヨ・ウーの祠|Keo Ruug Shrine|基耀·乌神庙\r\n\
マーム・ラノの祠|Maag Halan Shrine|玛姆·拉诺神庙\r\n\
シモ・イトセの祠|Shae Mo'sah Shrine|希摩·伊托塞神庙\r\n\
ダカ・カの祠|Daqa Koh Shrine|达卡·卡神庙\r\n\
ケハ・ラマの祠|Kayra Mah Shrine|科哈·拉玛神庙\r\n\
ツツア・ニマの祠|Tutsuwa Nima Shrine|茨茨阿·尼玛神庙\r\n\
カツ・トサの祠|Katosa Aug Shrine|卡茨·托萨神庙\r\n\
リター・ズモの祠|Ritaag Zumo Shrine|利塔·兹莫神庙\r\n\
サス・コサの祠|Saas Ko'sah Shrine|萨斯·科萨神庙\r\n\
ナミカ・オズの祠|Namika Ozz Shrine|娜米卡·奥兹神庙\r\n\
ミーロ・ツヒの祠|Mirro Shaz Shrine|米罗·茨希神庙\r\n\
キュ・ラムヒの祠|Qua Raym Shrine|丘·拉姆希神庙\r\n\
ネヅ・ヨマの祠|Ne'ez Yohma Shrine|奈兹·耀玛神庙\r\n\
サオ・コヒの祠|Soh Kofi Shrine|萨奥·科希神庙\r\n\
カ・ムーの祠|Kah Mael Shrine|卡·姆神庙\r\n\
シェモ・ラタの祠|Sheh Rata Shrine|雪摩·拉塔神庙\r\n\
ダ・キキーの祠|Dagah Keek Shrine|达·基基神庙\r\n\
ジズ・カフィの祠|Ze Kasho Shrine|吉兹·卡菲神庙\r\n\
ダヒ・シーノの祠|Dah Hesho Shrine|达希·希诺神庙\r\n\
ケニィ・シカの祠|Ke'nai Shakah Shrine|克尼·希卡神庙\r\n\
トゥ・カロの祠|Tu Ka'loh Shrine|图·卡罗神庙\r\n\
モア・キシトの祠|Mo'a Keet Shrine|摩阿·基希托神庙\r\n\
サ・ダージュの祠|Sah Dahaj Shrine|萨·达居神庙\r\n\
ヒャ・ミウの祠|Hia Miu Shrine|希亚·米乌神庙\r\n\
シャ・ゲマの祠|Sha Gehma Shrine|夏·格玛神庙\r\n\
ミッダ・ロキの祠|Mijah Rokee Shrine|米达·罗基神庙\r\n\
ダ・カソーの祠|Dah Kaso Shrine|达·卡索神庙\r\n\
タ・ムールの祠|Tah Muhl Shrine|塔·穆尔神庙\r\n\
".split("\r\n");
  var result = {};
  for (var i = 0; i < shrines.length; i++) {
    if (!shrines[i]) continue;
    var shrine = shrines[i].split("|");
    // result[shrine[1]] = shrine[0];  // 原为日文到英文
    result[shrine[1]] = shrine[2]; // 改为英文到中文
  }
  return result;
})();
