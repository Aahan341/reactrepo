import React, { useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";
import { Pin } from "./Pin";

export const PinTab = ({ length, maxChar, setOtp }) => {
  const [pinTabLength] = useState(new Array(length).fill("0"));
  const [pinTabValue] = useState(new Array(length).fill(""));

  const inputRef = useRef([]);

  const handleChange = (e, index) => {
    pinTabValue[index] = e.target.value;
    if (
      index < length - 1 &&
      inputRef.current[index].value.length === maxChar
    ) {
      inputRef.current[index + 1].focus();
    }
    setOtp(pinTabValue.join(""))
  };


  const handleBackspace = (e,index) => {
    pinTabValue[index] = e.target.value;
    if(index > 0 && e.target.value.length === 0 ){
      inputRef.current[index - 1].focus()
    }
    setOtp(pinTabValue.join(""))
  };

  const handlePaste = (e) => {
    let data = e.clipboardData.getData("text").split("").filter((elem, index)=> index < maxChar * length)

    let values = []
    // for(let i=0;i < (maxChar * length) / 2; i++ ){
    //   value[i] = data[i] + data[i + 1] 
    // }

    // for(let i=0; i < length * maxChar; i += maxChar){
    //   let temp = "";
    //   for(let j=i; j< maxChar + i; j++){
    //     temp +=  data[j]
    //   }
    //   values.push(temp)
    // }

    for(let i = 0; i < length * maxChar; i += maxChar){
      let temp = ""
      for(let j = i; j < maxChar + i; j++){
        temp += data[j]
      }
      values.push(temp)
    }

    console.log(values)

    values.forEach((character, index)=> {
      pinTabValue[index] = character
      inputRef.current[index].value = character
      if(index < length - 1){
        inputRef.current[index + 1].focus()
      }
    })

  }

  useEffect(() => {
    inputRef.current[0].focus();
  }, []);

  return (
    <div data-testid="pin-tab" onPaste={handlePaste} >
      {/* Add Pin component here  */}
      {pinTabLength.map((elem, index) => {
        return (
          <Pin 
          key={index}
          maxChar={maxChar}
          ref={(elem) => {
            inputRef.current[index] = elem;
          }}
          forOnChange={(e) => handleChange(e, index)}
          forBackSpace={(e)=> handleBackspace(e,index)}
          />
        );
      })}
    </div>
  );
};

PinTab.propTypes = {
  length: PropTypes.number.isRequired,
  maxChar: PropTypes.number,
};

// Check length and maxChar props here
