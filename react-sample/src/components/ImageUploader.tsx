// 3.5.5 useRef p107
// レンダリングに使わない内部で使う変数を保持するために使用する
// 生DOMを参照する使い方
// memo化とstateがあるので、その他の使い方はあまりしないかも

import React, { useState, useRef } from 'react';

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));
const UPLOAD_DELAY = 5000;

export const ImageUploader = () => {
  const inputImageRef = useRef<HTMLInputElement | null>(null);
  const fileRef = useRef<File | null>(null);
  const [message, setMessage] = useState<string | null>('');

  const onClickText = () => {
    if (inputImageRef.current !== null) {
      // input にrefにしているのでcurrentはinput属性
      // textをクリックすることでファイルアップ用の画面が開く
      inputImageRef.current.click();
    }
  }

  const onChangeImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files !== null && files.length > 0) {
      fileRef.current = files[0];
    }
  }

  const onClickUpload = async () => {
    if (fileRef.current !== null) {
      // ここでは通常アップロードが行われる
      await sleep(UPLOAD_DELAY);
      setMessage(`${fileRef.current.name} has benn successfully uploaded`);
    }
  }

  return (
    <div>
      <p style={{ textDecoration: 'underline' }} onClick={onClickText}>
        画像をアップロード
      </p>
      <input
        ref={inputImageRef}
        type='file'
        accept='image/*'
        onChange={onChangeImage}
        style={{ visibility: 'hidden' }}
      />
      <br />
      <button onClick={onClickUpload}>アップロードする</button>
      {message !== null && <p>{message}</p>}
    </div>
  );
}
