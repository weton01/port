import React from 'react';

import './styles.css';

export default function Skill({ data }) {


  const { Icon, title, lvl, colorIcon } = data;


  return (
    <>
      <li className="card text-dark skill">
        <div className="card-header text-center"> <h6 className="font-weight-bold mb-0">{title}</h6> </div>
        <Icon style={{ color: `${colorIcon}` }} className="card-icon mt-2" />
        <div className="card-body" >
          <h6 className="h6 text-center ">LvL: {lvl}</h6>
        </div>
      </li>
    </>
  );
}


Skill.defaultProps = {
  Icon: null,
  title: 'default title',
  lvl: '0'
}

