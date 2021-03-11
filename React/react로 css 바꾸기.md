# React로 CSS의 속성을 변경시키기 -> Emotion

> input에 포커스가 되었을때 input을 감싸고 있는 포커스의 width값을 바꿔야하는 상황을 경험했습니다.
> 
>  해결법으로 저는 useState훅을 이용해 focus가 되었을때 true로, 반대인 onBlur false, state값을 바꾸어 준뒤
> 
> 해당Input을 감싸고 있는 부모인 SearchBar에 width값을 변경해주어 해결하였습니다.
```javascript
const [focusBoolean, setFocusBoolean] = useState<boolean>(false);

<Input
  onFocus={() => setFocusBoolean(true)}
  onBlur={() => setFocusBoolean(false)}
/>

// Emotion
const SearchBar = styled.div<{
  focusBoolean: boolean;
}>`
  width: ${({ focusBoolean }) => (focusBoolean ? '350px' : '300px')}
  `;
  
  const Input = styled.input``;
```