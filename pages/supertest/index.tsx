import {NextPage} from 'next';
import styled from 'styled-components'
import {useState} from 'react';

import { Main } from '../components'

const StyledButton = styled.div`
  display: inline-block;
  color: white;
  background-color: gray;
  padding: 20px;
  margin: 20px;
  cursor: pointer;
  &:hover {
    background-color: black;
  }
`

const StyledResult = styled.div`
  border: 1px solid black;
  padding: 20px;
  margin: 20px;
`

const INITIAL_VALUE = 'initial value'

// 메서드가 화살표함수로 만들어졌다면 상속받은 곳에서 어떻게 super.method를 부를 수 있을까?
// 화살표함수는 super 바인딩을 하지 않는다.
// 화살표함수를 상속받은곳에서 오버라이딩하면서 부를수는 없는걸까

const SuperTest: NextPage = () => {
  const [str, setStr] = useState<string>(INITIAL_VALUE)

  abstract class Root {
    public abstract func (): void
  }

  class Base extends Root{
    public func = (value: string = 'Base!!'): void => {
      setStr(value)
    }

    public func2 (value: string = 'Base2222!!!!') {
      setStr(value)
    }
  }

  class Branch extends Base {
    public override func = (): void => {
      // super.func('Branch!!')
      setStr('Branch!!');
    }

    public override func2 () {
      super.func2('Branch2222!!!!')
    }
  }

  const reset = () => setStr(INITIAL_VALUE)

  const BaseInst = new Base();
  const BranchInst = new Branch();

  return <Main>
    <div>오류가 나는 상황</div>
    <StyledResult>{str}</StyledResult>

    <StyledButton onClick={() => BaseInst.func()}>Base</StyledButton>
    <StyledButton onClick={() => BranchInst.func()}>Branch</StyledButton>
    <br />

    <StyledButton onClick={() => BaseInst.func2()}>Base2</StyledButton>
    <StyledButton onClick={() => BranchInst.func2()}>Branch2</StyledButton>
    <br />

    <StyledButton onClick={() => reset()}>reset</StyledButton>
  </Main>
}

export default SuperTest