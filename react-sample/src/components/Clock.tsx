// リスト 3.16 p102
// useEffectは描画が終わって画面に表示された後に実行される。重い処理など描画に影響が出ないようにuseEffectを使用する

import React, {
  useState,
  useEffect,
  useLayoutEffect,
} from "react";

// 1秒
const UPDATE_CYCLE = 1000;
const kEY_LOCALE = 'KEY_LOCALE';

enum Locale {
  US = 'en-US',
  JP = 'ja-JP',
  IQ = 'ar-iq',
}

const getLocaleFromString = (text: string) => {
  switch (text) {
    case Locale.US:
      return Locale.US;
    case Locale.JP:
      return Locale.JP;
    case Locale.IQ:
      return Locale.IQ;
    default:
      return Locale.US;
  }
}

export const Clock = () => {
  const [timestamp, setTimestampe] = useState(new Date());
  const [locale, setLocale] = useState(Locale.IQ);

  // 第二引数のから配列は初期描画時のみタイマーをセットする
  useEffect(() => {
    const timer = setInterval(() => {
      setTimestampe(new Date());
    }, UPDATE_CYCLE);

    // バグやメモリリークを防ぐため、アンマウント時にタイマーを解除する
    // もう一度このuseEffectが呼ばれた際にも処理が走るが、ここではアンマウント時だけ
    return () => {
      clearInterval(timer);
    }
  }, []);

  // useLayoutEffectはDOM更新後に実行される
  // 画面に出る前にlocaleを取得したいのでuseLayoutEffectにする
  const mounted = React.useRef(false);
  useLayoutEffect(() => {
    // React18から2回呼ばれるので、1回だけ呼ばれるように対応
    if (mounted.current) {
      return;
    }
    mounted.current = true;

    const savedLocale = localStorage.getItem(kEY_LOCALE);
    if (savedLocale !== null) {
      console.log(2, savedLocale);
      setLocale(getLocaleFromString(savedLocale));
      console.log(2.1, locale);
    }
  }, []);

  useEffect(() => {
    // 描画時、上のuseLayoutEffectのsetLocaleより前にデフォルトのlocaleをsetしている
    // 多分use*Effectが終わったタイミングでsetされるのであろう
    console.log(3, locale)
    localStorage.setItem(kEY_LOCALE, locale);
  }, [locale]);

  return (
    <div>
      <p>
        <span id="current-time-label">現在時刻</span>
        <span>: {timestamp.toLocaleString(locale)}</span>
        <select
          value={locale}
          onChange={(e) => setLocale(getLocaleFromString(e.target.value))}
        >
          <option value="en-US">en-US</option>
          <option value="ja-JP">ja-JP</option>
        </select>
      </p>
    </div>
  );
}