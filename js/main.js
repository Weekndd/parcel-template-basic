console.log('hello parcel!!!')

// async를 통한 test라는 비동기함수를 만든 것임
// 바벨에서 async/await을 기본적으로 다뤄주지 않는다는 것을 확인하기 위함
async function test() {
  const promise = Promise.resolve(123)
  console.log(await promise)
}
test()