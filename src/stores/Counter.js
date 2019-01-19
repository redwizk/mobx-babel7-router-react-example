import { observable, action, computed, reaction, autorun } from "mobx";
import { observer } from "mobx-react";

export default class CounterStore {
  @observable number = {
      data : {
          number : 0
      }
  };

  func = () => {
    console.log("just func()");this.number.data.number++
  }

  // @action : 내부의 안의 값의 변경 처리를 transaction 처리해줌
  @action increase = () => {
    this.number.data.number++;
  }

  @action decrease = () => {
    this.number.data.number--;
  }
  
  // 임시로 계산된 값을 저장하고 값의 변경이 없으면 저장된 값 리턴
  @computed get getNumber(){
    console.log("computed get : " + this.number);
    return "[" +this.number.data.number + "]";
  }
  @computed get getNumber2(){
    console.log("computed get : " + this.number);
    return "[" +this.number.data.number + "]";
  }

  // 값에 변화가 일어날 때 반응
  reaction1 = reaction(
    () => this.number.data.number,
    (number) => console.log("reaction : " + number)
  );

  autorun1 = autorun( // 안에서 사용된 값을 주시하여 변경되면 동작
    () => {this.number.data.number; console.log("autorun");
     },
  ); 
  //@observer는 autorun(render) 개념

}