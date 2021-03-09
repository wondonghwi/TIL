//async & await
const delay = (ms) => {
  return new Promise(resolve => setTimeout(resolve, ms));
}

const getApple = async () => {
  await delay(1000);
  return '사과'
}

const getBanana = async () => {
  await delay(1000);
  return '바나나'
}
//Promise 일경우
// const getBanana = () => {
//   return delay(2000)
//     .then(() => '바나나')
// }

const pickFruits = async () => {
  const applePromise = getApple();
  const bananaPromise = getBanana();
  const apple = await applePromise;
  const banana = await bananaPromise;
  return `${apple} + ${banana}`;
}

//promise 일경우
// const pickFruits = () => {
//   return getApple().then(apple => {
//     return getBanana().then(banana => `${apple} + ${banana}`);
//   });
// }

pickFruits().then(console.log);
