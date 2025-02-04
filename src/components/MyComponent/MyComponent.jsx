import { useId } from 'react';
const MuComponent = () => {
  const id = useId();
  console.log(id);
  return (
      <div>
      <label htmlFor={id}>Text field label</label>
      <input type="text" id={id} />
    </div>
  );
};

export default MuComponent;
