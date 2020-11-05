import Door from '../../Door/Door';
import FloorPanel from '../../FloorPanel/FloorPanel';
import { IFloorPanel } from '../../../types/IFloorPanel';
import { IRoom } from '../../../types/IRoom';
import { Justification } from '../../../types/Justification.enum';
import React from 'react';
import RoomContent from '../../RoomContent/RoomContent';

const FloorPanelRoom = ({ title, roomItems, startPosition, endPosition }: IRoom<IFloorPanel>) => {
  const length = startPosition - endPosition;
  const numberOfPanels = roomItems.length;
  const panelGap = Math.floor(length / numberOfPanels);
  let currentPosition = startPosition;
  let justification = Justification.LEFT;

  return (
    <>
      <Door title={title} position={currentPosition} />
      {roomItems.map((floorPanel: IFloorPanel) => {
        currentPosition = currentPosition - panelGap;
        justification =
          justification === Justification.RIGHT ? Justification.LEFT : Justification.RIGHT;
        return (
          <RoomContent
            key={floorPanel.id.toString()}
            position={currentPosition}
            justification={justification}
          >
            <FloorPanel
              id={floorPanel.id}
              justification={justification}
              title={floorPanel.title}
              subHeading={floorPanel.subHeading}
              superHeading={floorPanel.superHeading}
            />
          </RoomContent>
        );
      })}
    </>
  );
};

export default FloorPanelRoom;
