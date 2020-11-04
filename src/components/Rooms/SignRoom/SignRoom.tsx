import Door from '../../Door/Door';
import { IRoom } from '../../../types/IRoom';
import { ISign } from '../../../types/ISign';
import { Justification } from '../../../types/Justification.enum';
import React from 'react';
import RoomContent from '../../RoomContent/RoomContent';
import Sign from '../../Sign/Sign';

const SignRoom = ({ roomItems, title, startPosition, endPosition }: IRoom<ISign>) => {
  const length = startPosition - endPosition;
  const numberOfPanels = roomItems.length;
  const panelGap = length / numberOfPanels;
  let currentPosition = startPosition - panelGap;
  let orientation = Justification.LEFT;

  return (
    <>
      <Door title={title} position={currentPosition} />
      {roomItems.map((sign: ISign) => {
        currentPosition = currentPosition - panelGap;
        orientation =
          orientation === Justification.RIGHT ? Justification.LEFT : Justification.RIGHT;
        return (
          <RoomContent position={currentPosition} justification={orientation}>
            <Sign title={sign.title}>
              <img src={sign.image} alt={sign.altText} />
            </Sign>
          </RoomContent>
        );
      })}
    </>
  );
};

export default SignRoom;
