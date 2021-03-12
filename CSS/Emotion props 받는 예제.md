# Emotion Props로 데이터 받기 예제

> Emotion에서 props로 변수를 받을때 유용한 팁을 배워서 기록하고자 합니다.
> 
> 기존에 작성한것은 항상 해당 css 속성의 기본값을 찾아서 넣어주거나 기본값이 없는경우 넣어줄수 없었습니다.
> 
> 하지만 아래의 그림들을 비교해보면 알 수 있듯이 <br />
> 기본적으로 css속성을 넣어주는것이 아닌 조건에 따라서 css 속성 자체를 아에 넣어주지 않는 방법으로 코드를 작성하였습니다.

```javascript
//css속성이 기본값이라도 무조건 들어가야하는 형태
const TitleImage = styled.div<{
thumbnail : string;
}> `
  background-image: url(${({ thumbnail }) => (thumbnail ? thumbnail : '')});
`;


//css속성이 받아오는 변수가 false라면 아에 css 속성자체를 안넣어 주는 형태 
const TitleImage = styled.div<{
  thumbnail : string;
}> `
  ${({thumbnail}) => (thumbnail ? `background-image: url(${thumbnail})` : '')};
`;
```