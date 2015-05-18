import catData from './cat-data';

function getCatsFromUrlConfig() {
  if (!window.location.hash) { return []; }
  let hashData = window.location.href.split('#')[1];
  if (hashData.indexOf('bought') !== 0) { return []; } //not a 'bought' url

  hashData = hashData.replace('bought', '');
  hashData = hashData.slice(1); //should have '?'
  let data = JSON.parse(new Buffer(hashData, 'base64').toString('utf8'));
  console.log('data from bought URL:');
  console.dir(data);

 //should be cat configs
 let cats = catData.getCatsFromConfigs(data);

 return cats;
}

function getBoughtUrlConfig(cats) {
  let loc = window.location;
  let base = '#bought?';
  let catConfigs = cats.map(function(cat) { return cat.config; });
  let catConfigB64 = new Buffer(JSON.stringify(catConfigs)).toString('base64');
  return loc.origin + loc.pathname + base + catConfigB64;
}

export default {
  getBoughtUrlConfig: getBoughtUrlConfig,
  getCatsFromUrlConfig: getCatsFromUrlConfig
};
