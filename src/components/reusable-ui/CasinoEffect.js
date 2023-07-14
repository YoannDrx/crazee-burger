import {TransitionGroup, CSSTransition} from "react-transition-group"
import styled from "styled-components";

export default function CasinoEffect({count, className}) {
  return (
<TransitionGroup component={CasinoEffectStyled} className={"transition-group"}>
<CSSTransition classNames={"count-animated"} timeout={300} key={count}>
        <span className={className}>{count}</span>
</CSSTransition>  
</TransitionGroup>    )
}


const CasinoEffectStyled = styled.div`
position: relative;
overflow-y: hidden;

span{
display: inline-block
}

/* Mounting */
.count-animated-enter {
  transform: translateY(100%);
}

.count-animated-enter-done {
  transform: translateY(0%);
  transition: 300ms;
}

/* Unmounting */
.count-animated-exit {
  transform: translateY(0%);
  position: absolute;
  bottom: 0;
  right: 0;
}

.count-animated-exit-active{
  transform: translateY(-100%);
  transition: 300ms;
}
  
`;