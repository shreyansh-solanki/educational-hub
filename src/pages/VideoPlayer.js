/* eslint-disable import/no-cycle */
import React, { useState } from 'react';

import MainGrid from '../components/MainPage/MainGrid';
import { apiGet } from '../context/config';
import { useProfile } from '../context/profile.context';

import '../styles/VideoPlayer.css';

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

const VideoPlayer = () => {
  const [input, setInput] = useState('');
  const [results, setResults] = useState(null);
  const { profile, isLoading } = useProfile();

  const rnE = randomResults[Math.floor(Math.random() * randomResults.length)];
  const rnE1 = randomResults[Math.floor(Math.random() * randomResults.length)];
  const rnE2 = randomResults[Math.floor(Math.random() * randomResults.length)];
  const rnE3 = randomResults[Math.floor(Math.random() * randomResults.length)];
  const rnE4 = randomResults[Math.floor(Math.random() * randomResults.length)];
  const rnE5 = randomResults[Math.floor(Math.random() * randomResults.length)];
  const rnE6 = randomResults[Math.floor(Math.random() * randomResults.length)];
  const rnE7 = randomResults[Math.floor(Math.random() * randomResults.length)];
  const rnE8 = randomResults[Math.floor(Math.random() * randomResults.length)];
  const rnE9 = randomResults[Math.floor(Math.random() * randomResults.length)];
  const rnE10 = randomResults[Math.floor(Math.random() * randomResults.length)];
  const rnE11 = randomResults[Math.floor(Math.random() * randomResults.length)];
  const rnE12 = randomResults[Math.floor(Math.random() * randomResults.length)];
  const rnE13 = randomResults[Math.floor(Math.random() * randomResults.length)];
  const rnE14 = randomResults[Math.floor(Math.random() * randomResults.length)];

  if (isLoading) {
    apiGet(
      `/videos?part=snippet&id=${rnE}&id=${rnE1}&id=${rnE2}&id=${rnE3}&id=${rnE4}&id=${rnE5}&id=${rnE6}&id=${rnE7}&id=${rnE8}&id=${rnE9}&id=${rnE10}&id=${rnE11}&id=${rnE12}&id=${rnE13}&id=${rnE14}&`
    ).then(result => {
      setResults(result);
    });
  }

  const renderResults = () => {
    if (results && input.length === 0) {
      return <MainGrid data={results} />;
      // return <div>No results</div>;
    }
    return null;
  };
  return (
    <div className="video-container">
      <div className="player-part">
        <iframe
          src="https://www.youtube.com/embed/hCrO_cR7kno"
          title="video"
          width="auto"
        />
      </div>
      <div className="list-part">{renderResults}</div>
    </div>
  );
};

export default VideoPlayer;
