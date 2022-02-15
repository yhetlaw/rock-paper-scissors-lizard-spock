import { useState } from 'react';

const Rules = () => {
  const { modal, setModal } = useState();

  const onClickHandler = () => {};

  return (
    <div className='rules' onClick={onClickHandler}>
      Rules
    </div>
  );
};

export default Rules;
