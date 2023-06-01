import { Fragment } from "react";

const InPut = (props) => {
  return (
    <Fragment>
      <input
        type={props.type}
        id={props.id}
        onChange={props.onChange}
        value={props.value}
      />
    </Fragment>
  );
};
export default InPut;
