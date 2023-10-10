import React, {Component} from 'react';
import powerButton from "../../components/assets/image/png/power.png"
import {
    Remotes, InsideCircles2, Down, SmallCircles2,Contains,
    MainCircle, DID, IM, InsideCircles, Down2, LongButton, SmallDot, ButtonPic, Pack, SmallCircles, Down3
} from './styles/header';
import back  from "../assets/image/png/back.png"
import screen from "../assets/image/png/screen.png"
import mute from "../assets/image/png/mute.png"
import playpause from "../assets/image/png/playpause.png"
import plus from "../assets/image/png/plus.png"
import minus from "../assets/image/png/minus.png"
class Remote extends Component {

  constructor(props) {
      super(props);
  }

    render() {
        return (
            <Remotes>
                <DID>
                  <SmallDot></SmallDot>
                  <IM src={powerButton}></IM>
                </DID>
                <MainCircle>
                    <InsideCircles>.</InsideCircles>
                    <InsideCircles2>.</InsideCircles2>
                </MainCircle>
                <Down>
                  <SmallCircles><ButtonPic src={back}></ButtonPic></SmallCircles>
                  <SmallCircles > <ButtonPic src={screen}></ButtonPic></SmallCircles>
                </Down>
                <Contains>
                   <Down3 >
                       <SmallCircles2 ><ButtonPic src={playpause}></ButtonPic></SmallCircles2>
                       <SmallCircles2><ButtonPic src={mute}></ButtonPic></SmallCircles2>
                   </Down3>

                   <Down2>
                       <LongButton>

                          <Down3 >
                              <ButtonPic src={plus}></ButtonPic>
                              {/*<ButtonPic src={minus}></ButtonPic>*/}
                          </Down3>
                       </LongButton>
                   </Down2>
            </Contains>
            </Remotes>
        )

    }
}
export default Remote;