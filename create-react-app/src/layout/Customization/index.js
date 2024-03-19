import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

// material-ui
import { useTheme } from '@mui/material/styles';
import {
  Drawer,
  Fab,
  FormControl,
  FormControlLabel,
  Grid,
  IconButton,
  Radio,
  RadioGroup,
  Slider,
  Tooltip,
  Typography
} from '@mui/material';
import { IconSettings } from '@tabler/icons';

// project imports
import SubCard from 'ui-component/cards/SubCard';
import AnimateButton from 'ui-component/extended/AnimateButton';
import { SET_BORDER_RADIUS, SET_FONT_FAMILY } from 'store/actions';
import { gridSpacing } from 'store/constant';

// concat 'px'
function valueText(value) {
  return `${value}px`;
}

// ==============================|| LIVE CUSTOMIZATION ||============================== //

const Customization = () => {
  const theme = useTheme();
  const dispatch = useDispatch();
  const customization = useSelector((state) => state.customization);

  // drawer on/off
  const [open, setOpen] = useState(false);
  const handleToggle = () => {
    setOpen(!open);
  };

  // state - border radius
  const [borderRadius, setBorderRadius] = useState(customization.borderRadius);
  const handleBorderRadius = (event, newValue) => {
    setBorderRadius(newValue);
  };

  useEffect(() => {
    dispatch({ type: SET_BORDER_RADIUS, borderRadius });
  }, [dispatch, borderRadius]);

  // state - font family
  const [fontFamily, setFontFamily] = useState('Poppins'); // Default to Poppins font
  useEffect(() => {
    dispatch({ type: SET_FONT_FAMILY, fontFamily });
  }, [dispatch, fontFamily]);

  // Handler to change font family
  const handleFontChange = (event) => {
    const newFontFamily = event.target.value;
    setFontFamily(newFontFamily);

    // Dispatch action to update font family
    dispatch({ type: SET_FONT_FAMILY, fontFamily: newFontFamily });
  };

  return (
    <>
      {/* toggle button */}
      <Tooltip title="Live Customize">
        <Fab
          component="div"
          onClick={handleToggle}
          size="medium"
          variant="circular"
          color="error"
          sx={{
            borderRadius: 0,
            borderTopLeftRadius: '50%',
            borderBottomLeftRadius: '50%',
            borderTopRightRadius: '50%',
            borderBottomRightRadius: '4px',
            top: '25%',
            position: 'fixed',
            right: 10,
            zIndex: theme.zIndex.speedDial,

            backgroundColor: theme.palette.error.dark
          }}
        >
          <AnimateButton type="rotate">
            <IconButton color="inherit" size="large" disableRipple>
              <IconSettings />
            </IconButton>
          </AnimateButton>
        </Fab>
      </Tooltip>

      <Drawer
        anchor="right"
        onClose={handleToggle}
        open={open}
        PaperProps={{
          sx: {
            width: 280
          }
        }}
      >
        <Grid container spacing={gridSpacing} sx={{ p: 3 }}>
          <Grid item xs={12}>
            {/* font family */}
            <SubCard title="Font Family">
              <FormControl>
                <RadioGroup
                  aria-label="font-family"
                  value={fontFamily}
                  onChange={handleFontChange} // Changed event handler
                  name="row-radio-buttons-group"
                >
                  <FormControlLabel
                    value="Roboto"
                    control={<Radio />}
                    label="Roboto"
                    sx={{
                      '& .MuiSvgIcon-root': { fontSize: 28 },
                      '& .MuiFormControlLabel-label': { color: theme.palette.grey[900] }
                    }}
                  />
                  <FormControlLabel
                    value="Poppins"
                    control={<Radio />}
                    label="Poppins"
                    sx={{
                      '& .MuiSvgIcon-root': { fontSize: 28 },
                      '& .MuiFormControlLabel-label': { color: theme.palette.grey[900] }
                    }}
                  />
                  <FormControlLabel
                    value="Inter"
                    control={<Radio />}
                    label="Inter"
                    sx={{
                      '& .MuiSvgIcon-root': { fontSize: 28 },
                      '& .MuiFormControlLabel-label': { color: theme.palette.grey[900] }
                    }}
                  />
                </RadioGroup>
              </FormControl>
            </SubCard>
          </Grid>
          <Grid item xs={12}>
            {/* border radius */}
            <SubCard title="Border Radius">
              <Grid item xs={12} container spacing={2} alignItems="center" sx={{ mt: 2.5 }}>
                <Grid item>
                  <Typography variant="h6" color="error">
                    4px
                  </Typography>
                </Grid>
                <Grid item xs>
                  <Slider
                    size="small"
                    value={borderRadius}
                    onChange={handleBorderRadius}
                    getAriaValueText={valueText}
                    valueLabelDisplay="on"
                    aria-labelledby="discrete-slider-small-steps"
                    marks
                    step={2}
                    min={4}
                    max={24}
                    color="error"
                    sx={{
                      '& .MuiSlider-valueLabel': {
                        color: 'grey',
                        backgroundColor: theme.palette.grey[700]
                      }
                    }}
                  />
                </Grid>
                <Grid item>
                  <Typography variant="h6" color="error">
                    24px
                  </Typography>
                </Grid>
              </Grid>
            </SubCard>
          </Grid>
        </Grid>
      </Drawer>
    </>
  );
};

export default Customization;
