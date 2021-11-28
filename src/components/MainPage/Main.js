import React, { useEffect, useState } from 'react';
import { apiGet } from '../../context/config';
import { useProfile } from '../../context/profile.context';
import MainGrid from './MainGrid';

const randomResults = [
  'N89PN_uyelU',
  'Db8OmMfzwl8',
  '5g7K86jYto8',
  'JqvobBKLHwU',
  'BHphhqL9EOE',
  'MD3mFgFwqBE',
  'JlZX7xIBjl0',
  'CkXjf6_8DLU',
  'SCjfVE3bFik',
  '47sNttolDNE',
  'AT14lCXuMKI',
  '4Rll-_e9-0M',
  '6wXZ_m3SbEs',
  'DWpVGpNfDmM',
  'dq3F3e9o2DM',
  'ClvYytk5Rlg',
  'nquQ_fYGGA4',
  '_6JI9XdO8nM',
  'fmfx1C4TTxw',
  'bxRVz8zklWM',
  'RY4GkLahbCI',
  'WHs-wSo33MM',
  'dn01XST9-bI',
  'WJres9mgiAk',
  'cySVml6e_Fc',
  '_8qqlVH5NC0',
  'qMmqOHr75b8',
  'aZjYr87r1b8',
  'pcKY4hjDrxk',
  'qul0f79gxGs',
  'SZ2a668G6vA',
  'f8luGFRtshY',
  '7ffDUDjwz5E',
  'UmnCZ7-9yDY',
  'a199KZGMNxk',
  'qiSCMNBIP2g',
  'MikphENIrOo',
  '-pEs-Bss8Wc',
  'kqtD5dpn9C8',
  'W6NZfCO5SIk',
  'B7wHpNUUT4Y',
  'l1EssrLxt7E',
  '2QR11oDukn4',
  'eIrMbAQSU34',
  'vLnPwxZdW4Y',
  'Umm1ZQ5ltZw',
  'GQp1zzTwrIg',
  'mUQZ1qmKlLY',
  'eN7qAu9dTFQ',
  '8KaJRw-rfn8',
  'vgEVfaDmfTk',
  'GLk7-imcjiI',
  'kjBvQWHk_KI',
  'SccSCuHhOw0',
  'L72fhGm1tfE',
  'fBNz5xF-Kx4',
  'PoRJizFvM7s',
  'rRgD1yVwIvE',
  'Oe421EPjeBE',
  'ENrzD9HAZK4',
  '4UZrsTqkcW4',
  'Tn6-PIqc4UM',
  'nhBVL41-_Cw',
  'KJgsSFOSQv0',
  '4sosXZsdy-s',
  'yalxT0PEx8c',
  'dgKSqz3it50',
  '_QATN8Jej50',
  '1z1S_VnGYF0',
  'KpG5FGgNUJo',
];

const Main = () => {
  const [results, setResults] = useState(null);
  // const [results2, setResults2] = useState(null);
  // const [results3, setResults3] = useState(null);
  // const [results4, setResults4] = useState(null);

  const { profile, isLoading } = useProfile();

  //   const objResults = [];
  for (let i = 0; i < 5; i++) {
    const randomElement =
      randomResults[Math.floor(Math.random() * randomResults.length)];
    console.log(randomElement);
    // if (objResults[randomElement]) {
    //   objResults[randomElement]++;
    // } else {
    //   objResults[randomElement] = 1;
    // }
    //   objResults[i] = randomElement;
    if (isLoading) {
      apiGet(`/videos?part=snippet&id=${randomElement}&`).then(result => {
        setResults(result);
        console.log(result);
      });
    }
    // if (isLoading && profile) {
    //   apiGet(`/search?part=snippet&id=${randomElement}&`).then(result => {
    //     setResults2(result);
    //     console.log(result);
    //   });
    // }
    // if (isLoading && profile) {
    //   apiGet(`/search?part=snippet&id=${randomElement}&`).then(result => {
    //     setResults3(result);
    //     console.log(result);
    //   });
    // }
    // if (isLoading && profile) {
    //   apiGet(`/search?part=snippet&id=${randomElement}&`).then(result => {
    //     setResults4(result);
    //     console.log(result);
    //   });
    // }
  }
  console.log(results.items);

  const renderResults = () => {
    return (
      <MainGrid
        data1={results.items}
        // data2={results2.items}
        // data3={results3.items}
        // data4={results4.items}
      />
    );
  };

  return <div>{renderResults}</div>;
};

export default Main;
