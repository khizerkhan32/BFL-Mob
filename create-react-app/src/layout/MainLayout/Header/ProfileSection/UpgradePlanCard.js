// material-ui
import { styled } from '@mui/material/styles';
import { Button, Card, CardContent, Grid, Stack, Typography } from '@mui/material';

// project imports
import AnimateButton from 'ui-component/extended/AnimateButton';

// styles
const CardStyle = styled(Card)(({ theme }) => ({
  background: theme.palette.grey[300],
  marginTop: '16px',
  marginBottom: '16px',
  overflow: 'hidden',
  position: 'relative',
  '&:after': {
    content: '""',
    position: 'absolute',
    width: '200px',
    height: '200px',
    border: '19px solid ',
    borderColor: theme.palette.error.dark,
    borderRadius: '50%',
    top: '65px',
    right: '-150px'
  },
  '&:before': {
    content: '""',
    position: 'absolute',
    width: '200px',
    height: '200px',
    border: '3px solid ',
    borderColor: theme.palette.error.dark,
    borderRadius: '50%',
    top: '145px',
    right: '-70px'
  }
}));

// ==============================|| PROFILE MENU - UPGRADE PLAN CARD ||============================== //

const UpgradePlanCard = () => (
  <CardStyle>
    <CardContent>
      <Grid container direction="column" spacing={2}>
        <Grid item>
          <Typography variant="h4">Upgrade your Investment</Typography>
        </Grid>
        <Grid item>
          <Typography variant="subtitle2" color="grey.900" sx={{ opacity: 0.6 }}>
            Invest in Bank Alfalah <br />
          </Typography>
        </Grid>
        <Grid item>
          <Stack direction="row">
            <AnimateButton>
              <Button variant="contained" color="error" sx={{ boxShadow: 'none' }}>
                Invest
              </Button>
            </AnimateButton>
          </Stack>
        </Grid>
      </Grid>
    </CardContent>
  </CardStyle>
);

export default UpgradePlanCard;
