// 2.5.8 非同期のAsync/Await p63

function fetchFromServer(id: string): Promise<{success: boolean}> {
  return new Promise(resolve => {
    setTimeout(() => resolve({success: true}), 100);
  });
}