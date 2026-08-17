import https from 'https';

https.get('https://dbsm.dbtech.in/', (res) => {
  let data = '';
  res.on('data', chunk => data += chunk);
  res.on('end', () => {
    const matches = data.match(/[^"'\s>]+\.(jpg|jpeg|png|webp)/gi) || [];
    console.log('Official DBTech Images:', Array.from(new Set(matches)));
  });
});
