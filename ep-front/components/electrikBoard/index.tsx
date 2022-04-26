import React, { ComponentType, useState, useEffect } from 'react';
import ButtonRotation from '../buttonRotation';
import SElectrikBoard from './style';

const defaultPanel: { type: string; pos: number }[][] = [
  [
    { type: 'A', pos: 0 },
    { type: 'B', pos: 180 },
    { type: 'A', pos: 90 },
  ],
  [
    { type: 'C', pos: 180 },
    { type: 'Z', pos: 1 },
    { type: 'A', pos: 270 },
  ],
  [
    { type: 'B', pos: 90 },
    { type: 'A', pos: 270 },
    { type: 'C', pos: 0 },
  ],
];

const ElectrikBoard: ComponentType = () => {
  const [panel] = useState<typeof defaultPanel>(defaultPanel);
  const [circuitPos, setCircuitPos] = useState<{ type: string; pos: number }>({
    type: '',
    pos: 0,
  });

  return (
    <SElectrikBoard>
      {panel.map((row, index) => {
        return (
          <div key={index}>
            {row.map((circuit) => {
              return (
                <ButtonRotation
                  setCircuitPos={setCircuitPos}
                  circuit={circuit}
                />
              );
            })}
          </div>
        );
      })}
    </SElectrikBoard>
  );
};

export default ElectrikBoard;
