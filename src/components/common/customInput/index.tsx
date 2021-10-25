import React from 'react'
import classNames from 'classnames'
import {
  Box,
  InputBaseProps,
  OutlinedInput,
  Typography
} from '@mui/material'

import useStyles from './style'

interface IProps {
  label?: string | React.ReactElement
  adornment?: React.ReactNode
  startAdornment?: React.ReactNode
  errorText?: string | null 
}

const CustomInput: React.FC<IProps & InputBaseProps> = ({
  id,
  name,
  label,
  className,
  adornment,
  startAdornment,
  errorText,
  ...props
}) => {
  const classes = useStyles()

  return (
    <Box className={classNames(classes.root, className)}>
      {label && (
        <Box component={'label'} className={classes.subTitle}>
          {label}
        </Box>
      )}
      <OutlinedInput
        startAdornment={startAdornment}
        id={id}
        name={name || id}
        endAdornment={adornment}
        {...props}
      />
      {errorText ? (
        <Typography className={classes.error}>{errorText}</Typography>
      ) : null}
    </Box>
  )
}

export default CustomInput
