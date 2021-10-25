import React, { useRef, BaseSyntheticEvent, useState, useEffect } from "react";
import { Box, Avatar } from "@mui/material";

// import { getBase64 } from '../../utils/helpers/photo'

import useStyles from "./style";

interface ImageUploaderProps {
  changeAvatar: (e: string) => void;
  file: string;
  id: string;
  name?: string;
}

const PhotoUploader: React.FC<ImageUploaderProps> = ({
  changeAvatar,
  file,
  id,
  name,
}) => {
  const classes = useStyles();
  const [isButtonClick, setIsButtonClick] = useState(false);
  const inputEl = useRef<HTMLInputElement>(null);
  const buttonEl = useRef<HTMLButtonElement>(null);
  const src = `data:image;base64,${file}`;

  const handleChange = (e: BaseSyntheticEvent) => {
    // getBase64(e.target.files[0])
    //   .then((res) => {
    //     const result = res as string
    //     console.log(result.split(',')[1])
    //     changeAvatar(result.split(',')[1])
    //   })
    //   .catch((err) => alert(err))
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (buttonEl.current && buttonEl.current.contains(event.target as Node)) {
      return setIsButtonClick(true);
    }
    setIsButtonClick(false);
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <Box className={classes.root}>
      <Avatar
        className={classes.avatar}
        variant="square"
        alt="Avatar"
        src={src}
      />
      <input
        id={id}
        name={name || id}
        ref={inputEl}
        type="file"
        style={{ display: "none" }}
        onChange={handleChange}
        accept=".png, .jpeg, .jpg"
      />
      <button
        type="submit"
        className={classes.button}
        onClick={(e: BaseSyntheticEvent) => {
          if (isButtonClick) {
            inputEl.current?.click();
          }
          e.preventDefault();
        }}
        ref={buttonEl}
      >
        +
      </button>
    </Box>
  );
};

export default PhotoUploader;
