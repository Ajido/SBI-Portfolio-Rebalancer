#!/usr/bin/env node

let content = '';

content += [
  '銘柄コード',
  '銘柄名',
  '現在値',
  '取得単価',
  '保有株数',
  '評価損益',
  '実質額',
  '名目額',
  '実質配当利回り',
  '名目配当利回り',
  '実質優待利回り',
  '名目優待利回り',
  '実質配当優待利回り',
  '名目配当優待利回り',
  '保有株配当金額',
  '保有株優待額',
  'PER',
  'PBR',
  '予想配当',
  'URL',
  '決算',
  '設立',
  '上場',
  '特色',
  '連結事業',
  'コメント１',
  'コメント２',
  '業種',
  '仕入先',
  '販売先',
  '比較会社',
  '本社',
  '支社',
  '従業員',
  '証券',
  '銀行',
  '連結',
  '会社業績修正',
  '浮動株',
  '特定株',
  '四季報URL',
  '時価総額',
  '営業CF',
  '投資CF',
  '財務CF',
  '現金等',
  'ROE',
  '予ROE',
  'ROA',
  '予ROA',
  '総資産',
  '自己資本比率',
  '有利子負債',
  '売上',
  '営業利益',
  '経常利益',
  '純利益',
  '一株利益',
  '一株配当',
  '予想売上',
  '予想営業利益',
  '予想経常利益',
  '予想純利益',
  '予想一株利益',
  '予想一株配当',
  '成長性',
  '割安性',
  '企業規模',
  'テクニカル',
  '財務健全性',
  '市場トレンド'
].join(',') + '\r\n';

JSON.parse(require('fs').readFileSync(process.argv[2], 'utf8')).portfolio.forEach((data) => {
  content += [
    data['銘柄コード'],
    data['銘柄名'],
    data['現在値'],
    data['取得単価'],
    data['保有株数'],
    data['評価損益'],
    data['実質額'],
    data['名目額'],
    data['実質配当利回り'],
    data['名目配当利回り'],
    data['実質優待利回り'],
    data['名目優待利回り'],
    data['実質配当優待利回り'],
    data['名目配当優待利回り'],
    data['保有株配当金額'],
    data['保有株優待額'],
    data['PER'],
    data['PBR'],
    data['予想配当'],
    data['四季報']['ＵＲＬ'],
    data['四季報']['決算'],
    data['四季報']['設立'],
    data['四季報']['上場'],
    data['四季報']['特色'],
    data['四季報']['連結事業'],
    data['四季報']['コメント１'],
    data['四季報']['コメント２'],
    data['四季報']['業種'],
    data['四季報']['仕入先'],
    data['四季報']['販売先'],
    data['四季報']['比較会社'],
    data['四季報']['本社'],
    data['四季報']['支社'],
    data['四季報']['従業員'],
    data['四季報']['証券'],
    data['四季報']['銀行'],
    data['四季報']['連結'],
    data['四季報']['会社業績修正'],
    data['四季報']['浮動株'],
    data['四季報']['特定株'],
    data['四季報']['四季報リンク'],
    data['財務状況']['時価総額'],
    data['財務状況']['営業CF'],
    data['財務状況']['投資CF'],
    data['財務状況']['財務CF'],
    data['財務状況']['現金等'],
    data['財務状況']['ROE'],
    data['財務状況']['予ROE'],
    data['財務状況']['ROA'],
    data['財務状況']['予ROA'],
    data['財務状況']['総資産'],
    data['財務状況']['自己資本比率'],
    data['財務状況']['有利子負債'],
    data['財務状況']['昨年度']['売上'],
    data['財務状況']['昨年度']['営業利益'],
    data['財務状況']['昨年度']['経常利益'],
    data['財務状況']['昨年度']['純利益'],
    data['財務状況']['昨年度']['一株利益'],
    data['財務状況']['昨年度']['一株配当'],
    data['財務状況']['本年度']['予想売上'],
    data['財務状況']['本年度']['予想営業利益'],
    data['財務状況']['本年度']['予想経常利益'],
    data['財務状況']['本年度']['予想純利益'],
    data['財務状況']['本年度']['予想一株利益'],
    data['財務状況']['本年度']['予想一株配当'],
    data['分析']['成長性'],
    data['分析']['割安性'],
    data['分析']['企業規模'],
    data['分析']['テクニカル'],
    data['分析']['財務健全性'],
    data['分析']['市場トレンド']
  ].map((v) => {
    const value = String(v).replace(/"/g, '').replace('undefined', '');
    return (value.indexOf(',') !== -1) ? `"${value}"` : value;
  }).join(',') + '\r\n';
});

console.log(content);

