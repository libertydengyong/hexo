const bcrypt = require('bcrypt');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('请输入你的密码：', async (password) => {
  const hash = await bcrypt.hash(password, 10);
  console.log('你的 password_hash 是：\n' + hash);
  rl.close();
});

