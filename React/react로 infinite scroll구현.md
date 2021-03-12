# infinite scroll

> 오늘은 회사에서 infinite Scroll을 구현했습니다. 현재 리팩토링이 많이 필요해보여서 코드는 모든 수정이 완료된 이후에 추가하려고 합니다.
> 
> 먼저 infinite scroll에 대해서 , 왜 하는지에 대해서 생각하고 배웠습니다. <br />
> infinite scroll은 페이징개념이며 스크롤을 내릴때 특정부분까지 내려가면 그때 데이터를 받아서 뿌려서 랜더링시키기 위해 사용합니다. </br>
> 
> 데이터가 10000개라고 해도 한번에 1만개의 데이터를 전부 받아오는것이 아닌 데이터가 필요한 순간에 데이터를 서버에서 내려주는 것이 가장 바람직한 방법입니다.
> 
```javascript
//스크롤 위치 구하는 함수 
const handleScroll = useCallback(() => {
  const scrollHeight = document.documentElement.scrollHeight;
  // console.log(scrollHeight);
  const scrollTop = document.documentElement.scrollTop;
  // console.log(scrollTop);
  // const clientHeight = document.documentElement.clientHeight;

  if (scrollTop > (scrollHeight * 3) / 4) {
    fetchMoreInstaFeeds();
  }
}, [fetchMoreInstaFeeds]);

//scroll이 동작할때마다 실행하도록 하는 함수
useEffect(() => {
fetchMoreInstaFeeds();
window.addEventListener('scroll', handleScroll);
return () => {
// scroll event listener 해제
window.removeEventListener('scroll', handleScroll);
};
}, [fetchMoreInstaFeeds, handleScroll]);


```