import React from 'react';
import FlickItemLayer from './FlickItemLayer';
import { ReactComponent as VertdotsIcon } from '../icons/VertdotsIcon.svg';

function Vert(props: any) {
  const [open, setOpen] = React.useState(false);

  return (
    <div style={{ cursor: "pointer" }} >
      <div onClick={ () => setOpen(!open) }>
        <FlickItemLayer
          elementItem={
            <VertdotsIcon />
          }
        />
      </div>
      { open && props.children }
    </div>
  );
}

export default Vert;