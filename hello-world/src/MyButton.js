import Button from '@material-ui/core/Button';

const ChangeText = (event) =>{
  console.log(event.target)
  event.target.innerText = event.target.innerText + "被點了"
};

const multiButton=(num)=>{
  var output = [];
  for (let i = 1; i < (num + 1); ++i) {
    output.push(<Button id={i} variant = "contained" color = "primary" onClick={ChangeText} > 第{i}個按鍵</Button>)
  }
  return output;
};

function MyButton() {
  return multiButton(10);
};

export default MyButton;