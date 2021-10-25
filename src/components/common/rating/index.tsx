import React from "react";
import Rating from "@material-ui/lab/Rating";
import Box from "@material-ui/core/Box";

export default function SimpleRating() {
  const [value, setValue] = React.useState<number | null>(2);

  return (
    <div>
      <Box component="fieldset" mb={3} borderColor="transparent">
        <Rating
          name="simple-controlled"
          value={value}
          onChange={(event: any, newValue: any) => {
            setValue(newValue);
          }}
        />
      </Box>
    </div>
  );
}
