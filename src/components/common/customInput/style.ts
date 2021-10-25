import { makeStyles } from '@mui/styles'
import { Colors } from '../../../types/enums';

const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
    flexDirection: 'column'
  },
  subTitle: {
    fontFamily: 'Montserrat',
    fontWeight: 600,
    fontSize: 16,
    color: '#132C4A'
  },
  error: {
    color: Colors.red,
    fontSize: '12px'
  }
}))

export default useStyles
