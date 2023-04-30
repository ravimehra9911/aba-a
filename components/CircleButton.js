import React from 'react';
import { MenuData } from '../data/db';

const CircleButton = () => {
  return (
    <div>
      {MenuData.map((cat) => {
        return (
          <React.Fragment key={cat.id}>
            <div className="h-32 w-32 bg-yellowColor rounded-full my-7">
              <div className="h-full w-full flex justify-center items-center relative">
                <p> {cat.name}</p>
                <p className="absolute bottom-2">CEUs</p>
              </div>
            </div>
          </React.Fragment>
        );
      })}
    </div>
  );
};

export default CircleButton;
