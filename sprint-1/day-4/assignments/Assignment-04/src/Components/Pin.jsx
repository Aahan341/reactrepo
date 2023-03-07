import React,{forwardRef} from "react";
import PropTypes from "prop-types"

export const Pin = forwardRef(({ maxChar, forOnChange, forBackSpace}, ref) => {
  
  const handleKeyUp = (e) => {
    if(e.keyCode==8){
      forBackSpace(e)
    }
    else{
      forOnChange(e)
    }
  }
  
  return (
    <input
      data-testid="pin-input"
      maxLength={maxChar}
      ref={ref}
      onKeyUp={handleKeyUp}

      // onChange={forOnChange}
    />
  );
});

// Check maxChar prop here
Pin.propTypes = {
  maxChar: PropTypes.number.isRequired,
}