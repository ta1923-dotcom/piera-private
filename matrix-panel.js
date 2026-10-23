import { checkMatrix } from './app.js';

const panel = document.createElement('section');
panel.style.cssText = 'margin:24px auto;padding:20px;max-width:600px;background:#19372e;color:white;border-radius:14px';
panel.innerHTML = '<h2>Matrix SDK 通信テスト</h2><button id="matrix-sdk-check" style="padding:12px;border-radius:8px">接続確認</button><p id="matrix-sdk-result">未実行</p>';
document.body.appendChild(panel);

document.getElementById('matrix-sdk-check').addEventListener('click', async () => {
  const output = document.getElementById('matrix-sdk-result');
  output.textContent = '接続中...';
  try {
    const versions = await checkMatrix();
    output.textContent = '接続成功：' + versions.slice(-5).join(', ');
  } catch (error) {
    output.textContent = '接続失敗：' + error.message;
  }
});
