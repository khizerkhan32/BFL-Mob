import React, { useState } from 'react';
import { Box, Card, Grid, Collapse, Dialog, DialogContent, IconButton, Typography } from '@mui/material';
import { Close,Add } from '@mui/icons-material';
import MainCard from 'ui-component/cards/MainCard';
import { gridSpacing } from 'store/constant';
import 'assets/scss/style.scss';

const UtilitiesShadow = () => {
  const [investorGuideCollapse, setInvestorGuideCollapse] = useState(false);
  const [monetaryPolicyCollapse, setMonetaryPolicyCollapse] = useState(false);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [dialogContentUrl, setDialogContentUrl] = useState('');
  const [tbillCollapse, setTbillCollapse] = useState(false);
  const [auctionResultCollapse, setAuctionResultCollapse] = useState(false);

  const handleDialogOpen = (contentUrl) => {
    setDialogOpen(true);
    setDialogContentUrl(contentUrl);
  };

  const handleDialogClose = () => {
    setDialogOpen(false);
  };

    const handleInvestorGuideCollapse = () => {
    setInvestorGuideCollapse(!investorGuideCollapse);
    setMonetaryPolicyCollapse(false); // Close other collapse sections
    setTbillCollapse(false);
  };

  const handleMonetaryPolicyCollapse = () => {
    setMonetaryPolicyCollapse(!monetaryPolicyCollapse);
    setInvestorGuideCollapse(false); // Close other collapse sections
    setTbillCollapse(false);
  };

  const handleTbillCollapse = () => {
    setTbillCollapse(!tbillCollapse);
    setInvestorGuideCollapse(false); // Close other collapse sections
    setMonetaryPolicyCollapse(false);
  };

  const handleAuctionResultCollapse = () =>{
    setAuctionResultCollapse(!auctionResultCollapse);
    setTbillCollapse(false);
    setInvestorGuideCollapse(false);
    setMonetaryPolicyCollapse(false);

  }

  return (
    <MainCard
      title="StateBank Communication"
      sx={{
        width: '100%',
        height:'100%',
        border: '1px solid #e0e0e0',
        borderBottom: 'none !important',
        overflow: 'hidden',
        position: 'relative',
        '&:after': {
          content: '""',
          position: 'absolute',
          width: 250,
          height: 290,
          background: 'linear-gradient(210.04deg, #FF6B6B -80.94%, rgba(144, 202, 249, 0) 130.49%)',
          borderRadius: '50%',
          top: -30,
          right: -180,
        },
        '&:before': {
          content: '""',
          position: 'absolute',
          width: 290,
          height: 250,
          background: 'linear-gradient(140.9deg, #FF6B6B -64.02%, rgba(144, 202, 249, 0) 130.50%)',
          borderRadius: '50%',
          top: -160,
          right: -130,
        },
        '@media screen and (max-width: 600px)': {
          width: '100%',
          '&:after': {
            width: '200px',
            height: '250px',
          },
          '&:before': {
            width: '200px',
            height: '220px',
          },
        },
      }}
    >
      <Grid container spacing={gridSpacing} className="grid">
        <Grid item xs={8} sx={{ ml: 20, mr: 1, mt: 3 }}>
          <Grid container spacing={gridSpacing}>
            <Grid item xs={10} sx={{ ml: 5, mr: 1, mt: 2 }}>
              <Card onClick={handleInvestorGuideCollapse}>
                <Box
                  sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    py: 3.0,
                    bgcolor: 'error.dark',
                    color: '#FFFFFF',
                    cursor: 'pointer',
                    fontSize: '20px',
                    paddingX: 4,
                  }}
                >
                  <Typography sx={{ fontSize: '20px', textAlign: 'center',flexGrow:1 }}>Investor Guide</Typography>
                  {investorGuideCollapse ? <Close /> : <Add />}
              
                </Box>
              </Card>

              <Collapse in={investorGuideCollapse}>
                <Grid container spacing={gridSpacing}>
                  <Grid item xs={12} sx={{ ml: 1, mr: 1, mt: 2 }}>
                    <Card onClick={() => handleDialogOpen('https://example.com/market-treasury-bills')}>
                      <Typography
                        component="div"
                        sx={{
                          display: 'flex',
                          justifyContent: 'center',
                          alignItems: 'center',
                          py: 3.0,
                          bgcolor: 'primary.light',
                          color: 'grey.900',
                          cursor: 'pointer',
                          '&:hover': { color: 'red' },
                        }}
                      >
                        <Box sx={{ textAlign: 'center' }}>Market Treasury Bills</Box>
                      </Typography>
                    </Card>
                  </Grid>
                </Grid>
              </Collapse>
              <Collapse in={investorGuideCollapse}>
                <Grid container spacing={gridSpacing}>
                  <Grid item xs={12} sx={{ ml: 1, mr: 1, mt: 2 }}>
                    <Card onClick={() => handleDialogOpen('https://example.com/pakistan-investment-bond')}>
                      <Typography
                        component="div"
                        sx={{
                          display: 'flex',
                          justifyContent: 'center',
                          alignItems: 'center',
                          py: 3.0,
                          bgcolor: 'primary.light',
                          color: 'grey.900',
                          cursor: 'pointer',
                          '&:hover': {
                            color: 'red',
                          },
                        }}
                      >
                        <Box sx={{ textAlign: 'center' }}>Pakistan Investment Bond</Box>
                      </Typography>
                    </Card>
                  </Grid>
                </Grid>
              </Collapse>

              <Collapse in={investorGuideCollapse}>
                <Grid container spacing={gridSpacing}>
                  <Grid item xs={12} sx={{ ml: 1, mr: 1, mt: 2 }}>
                    <Card onClick={() => handleDialogOpen('https://example.com/sukuk')}>
                      <Typography
                        component="div"
                        sx={{
                          display: 'flex',
                          justifyContent: 'center',
                          alignItems: 'center',
                          py: 3.0,
                          bgcolor: 'primary.light',
                          color: 'grey.900',
                          cursor: 'pointer',
                          '&:hover': {
                            color: 'red',
                          },
                        }}
                      >
                        <Box sx={{ textAlign: 'center' }}>Sukuk</Box>
                      </Typography>
                    </Card>
                  </Grid>
                </Grid>
              </Collapse>
            </Grid>
          </Grid>
        </Grid>
      </Grid>

      {/* Monetary Policy Section */}
      <Grid container spacing={gridSpacing} className="grid">
        <Grid item xs={8} sx={{ ml: 20, mr: 1, mt: 3 }}>
          <Grid container spacing={gridSpacing}>
            <Grid item xs={10} sx={{ ml: 5, mr: 1, mt: 2 }}>
              
            <Card onClick={handleMonetaryPolicyCollapse}>
                <Box
                  sx={{
                    display: 'flex',
                    justifyContent: 'space-between', // Align text and icon
                    alignItems: 'center',
                    py: 3.0,
                    bgcolor: 'error.dark',
                    color: '#FFFFFF',
                    cursor: 'pointer',
                    fontSize: '20px',
                    paddingX: 4,
                  }}
                >
                  <Typography sx={{ fontSize: '20px', textAlign: 'center',flexGrow:1 }}>Monetary Policy</Typography>
                  {monetaryPolicyCollapse ? <Close /> : <Add />} {/* Conditionally render icon based on collapse state */}
                </Box>
              </Card>


              <Collapse in={monetaryPolicyCollapse}>
                <Grid container spacing={gridSpacing}>
                  <Grid item xs={12} sx={{ ml: 1, mr: 1, mt: 2 }}>
                    <Card onClick={() => handleDialogOpen('https://example.com/monetary-policy-english')}>
                      <Typography
                        component="div"
                        sx={{
                          display: 'flex',
                          justifyContent: 'center',
                          alignItems: 'center',
                          py: 3.0,
                          bgcolor: 'primary.light',
                          color: 'grey.900',
                          cursor: 'pointer',
                          '&:hover': {
                            color: 'red',
                          },
                        }}
                      >
                        <Box sx={{ textAlign: 'center' }}>Monetary Policy Statement-(English)</Box>
                      </Typography>
                    </Card>
                  </Grid>
                </Grid>
              </Collapse>

              <Collapse in={monetaryPolicyCollapse}>
                <Grid container spacing={gridSpacing}>
                  <Grid item xs={12} sx={{ ml: 1, mr: 1, mt: 2 }}>
                    <Card onClick={() => handleDialogOpen('https://example.com/monetary-policy-urdu')}>
                      <Typography
                        component="div"
                        sx={{
                          display: 'flex',
                          justifyContent: 'center',
                          alignItems: 'center',
                          py: 3.0,
                          bgcolor: 'primary.light',
                          color: 'grey.900',
                          cursor: 'pointer',
                          '&:hover': {
                            color: 'red',
                          },
                        }}
                      >
                        <Box sx={{ textAlign: 'center' }}>Monetary Policy Statement-(Urdu)</Box>
                      </Typography>
                    </Card>
                  </Grid>
                </Grid>
              </Collapse>
            </Grid>
          </Grid>
        </Grid>
      </Grid>

      {/* T-bill Section */}
      <Grid container spacing={gridSpacing} className="grid">
        <Grid item xs={8} sx={{ ml: 20, mr: 1, mt: 2 }}>
          <Grid container spacing={gridSpacing}>
            <Grid item xs={10} sx={{ ml: 5, mr: 1, mt: 1 }}>
              <Card onClick={handleTbillCollapse}>
              <Box
                  sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    py: 3.0,
                    bgcolor: 'error.dark',
                    color: '#FFFFFF',
                    cursor: 'pointer',
                    fontSize: '20px',
                    paddingX: 4,
                  }}
                >
                  <Typography sx={{ fontSize: '20px', textAlign: 'center',flexGrow:1 }}>Callendar wise-Tbill and PIB</Typography>
                  {tbillCollapse ? <Close /> : <Add />}
              
            
                </Box>
              </Card>

              <Collapse in={tbillCollapse}>
                <Grid container spacing={gridSpacing}>
                  <Grid item xs={12} sx={{ ml: 1, mr: 1, mt: 2 }}>
                    <Card onClick={() => handleDialogOpen('https://example.com/tbill-calendar')}>
                      <Typography
                        component="div"
                        sx={{
                          display: 'flex',
                          justifyContent: 'center',
                          alignItems: 'center',
                          py: 3.0,
                          bgcolor: 'primary.light',
                          color: 'grey.900',
                          cursor: 'pointer',
                          '&:hover': { color: 'red' },
                        }}
                      >
                        <Box sx={{ textAlign: 'center' }}>T-bill Calendar </Box>
                      </Typography>
                    </Card>
                  </Grid>
                </Grid>
              </Collapse>

              <Collapse in={tbillCollapse}>
                <Grid container spacing={gridSpacing}>
                  <Grid item xs={12} sx={{ ml: 1, mr: 1, mt: 2 }}>
                    <Card onClick={() => handleDialogOpen('https://example.com/tbill-calendar')}>
                      <Typography
                        component="div"
                        sx={{
                          display: 'flex',
                          justifyContent: 'center',
                          alignItems: 'center',
                          py: 3.0,
                          bgcolor: 'primary.light',
                          color: 'grey.900',
                          cursor: 'pointer',
                          '&:hover': { color: 'red' },
                        }}
                      >
                        <Box sx={{ textAlign: 'center' }}>PIB Calendar </Box>
                      </Typography>
                    </Card>
                  </Grid>
                </Grid>
              </Collapse>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
 
   {/* Auction Result wise-Tbill and PIB */}

      <Grid container spacing={gridSpacing} className="grid">
        <Grid item xs={8} sx={{ ml: 20, mr: 1, mt: 2 }}>
          <Grid container spacing={gridSpacing}>
            <Grid item xs={10} sx={{ ml: 5, mr: 1, mt: 1 }}>
              <Card onClick={handleAuctionResultCollapse}>
              <Box
                  sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    py: 3.0,
                    bgcolor: 'error.dark',
                    color: '#FFFFFF',
                    cursor: 'pointer',
                    fontSize: '20px',
                    paddingX: 4,
                  }}
                >
                  <Typography sx={{ fontSize: '20px', textAlign: 'center',flexGrow:1 }}> Auction Result wise-Tbill and PIB</Typography>
                  {auctionResultCollapse ? <Close /> : <Add />}
              
                </Box>
              </Card>

              <Collapse in={auctionResultCollapse}>
                <Grid container spacing={gridSpacing}>
                  <Grid item xs={12} sx={{ ml: 1, mr: 1, mt: 2 }}>
                    <Card onClick={() => handleDialogOpen('https://example.com/tbill-calendar')}>
                      <Typography
                        component="div"
                        sx={{
                          display: 'flex',
                          justifyContent: 'center',
                          alignItems: 'center',
                          py: 3.0,
                          bgcolor: 'primary.light',
                          color: 'grey.900',
                          cursor: 'pointer',
                          '&:hover': { color: 'red' },
                        }}
                      >
                        <Box sx={{ textAlign: 'center' }}>T-bill Auction Result </Box>
                      </Typography>
                    </Card>
                  </Grid>
                </Grid>
              </Collapse>

              <Collapse in={auctionResultCollapse}>
                <Grid container spacing={gridSpacing}>
                  <Grid item xs={12} sx={{ ml: 1, mr: 1, mt: 2 }}>
                    <Card onClick={() => handleDialogOpen('https://example.com/tbill-calendar')}>
                      <Typography
                        component="div"
                        sx={{
                          display: 'flex',
                          justifyContent: 'center',
                          alignItems: 'center',
                          py: 3.0,
                          bgcolor: 'primary.light',
                          color: 'grey.900',
                          cursor: 'pointer',
                          '&:hover': { color: 'red' },
                        }}
                      >
                        <Box sx={{ textAlign: 'center' }}>PIB Auction Result </Box>
                      </Typography>
                    </Card>
                  </Grid>
                </Grid>
              </Collapse>

              <Collapse in={auctionResultCollapse}>
                <Grid container spacing={gridSpacing}>
                  <Grid item xs={12} sx={{ ml: 1, mr: 1, mt: 2 }}>
                    <Card onClick={() => handleDialogOpen('https://example.com/tbill-calendar')}>
                      <Typography
                        component="div"
                        sx={{
                          display: 'flex',
                          justifyContent: 'center',
                          alignItems: 'center',
                          py: 3.0,
                          bgcolor: 'primary.light',
                          color: 'grey.900',
                          cursor: 'pointer',
                          '&:hover': { color: 'red' },
                        }}
                      >
                        <Box sx={{ textAlign: 'center' }}>Interest Rate Corridor of SBP - History </Box>
                      </Typography>
                    </Card>
                  </Grid>
                </Grid>
              </Collapse>

              <Collapse in={auctionResultCollapse}>
                <Grid container spacing={gridSpacing}>
                  <Grid item xs={12} sx={{ ml: 1, mr: 1, mt: 2 }}>
                    <Card onClick={() => handleDialogOpen('https://example.com/tbill-calendar')}>
                      <Typography
                        component="div"
                        sx={{
                          display: 'flex',
                          justifyContent: 'center',
                          alignItems: 'center',
                          py: 3.0,
                          bgcolor: 'primary.light',
                          color: 'grey.900',
                          
                          cursor: 'pointer',

                          '&:hover': { color: 'red' },
                        }}
                      >
                        <Box sx={{ textAlign: 'center' }}>Open Market Operations(OMO) Results of SBP </Box>
                      </Typography>
                    </Card>
                  </Grid>
                </Grid>
              </Collapse>
            </Grid>
          </Grid>
        </Grid>
      </Grid>

      <Dialog open={dialogOpen} onClose={handleDialogClose} fullWidth maxWidth="md">
        <DialogContent>
          <IconButton sx={{ position: 'absolute', top: 5, right: 5 }} onClick={handleDialogClose}>
            <Close />
          </IconButton>
          <iframe title="URL Content" src={dialogContentUrl} style={{ width: '100%', height: '80vh', border: 'none' }} />
        </DialogContent>
      </Dialog>
    </MainCard>
  );
};

export default UtilitiesShadow;




// import React, { useState } from 'react';
// import { Box, Card, Grid, Collapse, Dialog, DialogContent, IconButton, Typography } from '@mui/material';
// import { Close,Add } from '@mui/icons-material';
// import MainCard from 'ui-component/cards/MainCard';
// import { gridSpacing } from 'store/constant';
// import 'assets/scss/style.scss';



// const UtilitiesShadow = () => {
//   const [investorGuideCollapse, setInvestorGuideCollapse] = useState(false);
//   const [monetaryPolicyCollapse, setMonetaryPolicyCollapse] = useState(false);
//   const [dialogOpen, setDialogOpen] = useState(false);
//   const [dialogContentUrl, setDialogContentUrl] = useState('');
//   const [tbillCollapse, setTbillCollapse] = useState(false);
//   const [auctionResultCollapse, setAuctionResultCollapse] = useState(false);

//   const handleDialogOpen = (contentUrl) => {
//     setDialogOpen(true);
//     setDialogContentUrl(contentUrl);
//   };

//   const handleDialogClose = () => {
//     setDialogOpen(false);
//   };

//     const handleInvestorGuideCollapse = () => {
//     setInvestorGuideCollapse(!investorGuideCollapse);
//     setMonetaryPolicyCollapse(false); // Close other collapse sections
//     setTbillCollapse(false);
//   };

//   const handleMonetaryPolicyCollapse = () => {
//     setMonetaryPolicyCollapse(!monetaryPolicyCollapse);
//     setInvestorGuideCollapse(false); // Close other collapse sections
//     setTbillCollapse(false);
//   };

//   const handleTbillCollapse = () => {
//     setTbillCollapse(!tbillCollapse);
//     setInvestorGuideCollapse(false); // Close other collapse sections
//     setMonetaryPolicyCollapse(false);
//   };

//   const handleAuctionResultCollapse = () =>{
//     setAuctionResultCollapse(!auctionResultCollapse);
//     setTbillCollapse(false);
//     setInvestorGuideCollapse(false);
//     setMonetaryPolicyCollapse(false);

//   }

//   return (
//     <MainCard
//       title="StateBank Communication"
//       sx={{
//         width: '100%',
//         height:'100%',
//         border: '1px solid #e0e0e0',
//         borderBottom: 'none !important',
//         overflow: 'hidden',
//         position: 'relative',
//         '&:after': {
//           content: '""',
//           position: 'absolute',
//           width: 250,
//           height: 290,
//           background: 'linear-gradient(210.04deg, #FF6B6B -80.94%, rgba(144, 202, 249, 0) 130.49%)',
//           borderRadius: '50%',
//           top: -30,
//           right: -180,
//         },
//         '&:before': {
//           content: '""',
//           position: 'absolute',
//           width: 290,
//           height: 250,
//           background: 'linear-gradient(140.9deg, #FF6B6B -64.02%, rgba(144, 202, 249, 0) 130.50%)',
//           borderRadius: '50%',
//           top: -160,
//           right: -130,
//         },
//         '@media screen and (max-width: 600px)': {
//           width: '100%',
//           '&:after': {
//             width: '200px',
//             height: '250px',
//           },
//           '&:before': {
//             width: '200px',
//             height: '220px',
//           },
//         },
//       }}
//     >
//       <Grid container spacing={gridSpacing} className="grid">
//         <Grid item xs={8} sx={{ ml: 20, mr: 1, mt: 3 }}>
//           <Grid container spacing={gridSpacing}>
//             <Grid item xs={10} sx={{ ml: 5, mr: 1, mt: 2 }}>
//               <Card onClick={handleInvestorGuideCollapse}>
//                 <Box
//                   sx={{
//                     display: 'flex',
//                     justifyContent: 'center',
//                     alignItems: 'center',
//                     py: 3.0,
//                     bgcolor: 'error.dark',
//                     color: '#FFFFFF',
//                     cursor: 'pointer',
//                     fontSize: '20px',
//                     paddingX: 4,
//                   }}
//                 >
//                   <Typography sx={{ fontSize: '20px', textAlign: 'center',flexGrow:1 }}>Investor Guide</Typography>
//                   {investorGuideCollapse ? <Close /> : <Add />}
              
//                 </Box>
//               </Card>

//               <Collapse in={investorGuideCollapse}>
//                 <Grid container spacing={gridSpacing}>
//                   <Grid item xs={12} sx={{ ml: 1, mr: 1, mt: 2 }}>
//                     <Card onClick={() => handleDialogOpen('https://example.com/market-treasury-bills')}>
//                       <Typography
//                         component="div"
//                         sx={{
//                           display: 'flex',
//                           justifyContent: 'center',
//                           alignItems: 'center',
//                           py: 3.0,
//                           bgcolor: 'primary.light',
//                           color: 'grey.900',
//                           cursor: 'pointer',
//                           '&:hover': { color: 'red' },
//                         }}
//                       >
//                         <Box sx={{ textAlign: 'center' }}>Market Treasury Bills</Box>
//                       </Typography>
//                     </Card>
//                   </Grid>
//                 </Grid>
//               </Collapse>
//               <Collapse in={investorGuideCollapse}>
//                 <Grid container spacing={gridSpacing}>
//                   <Grid item xs={12} sx={{ ml: 1, mr: 1, mt: 2 }}>
//                     <Card onClick={() => handleDialogOpen('https://example.com/pakistan-investment-bond')}>
//                       <Typography
//                         component="div"
//                         sx={{
//                           display: 'flex',
//                           justifyContent: 'center',
//                           alignItems: 'center',
//                           py: 3.0,
//                           bgcolor: 'primary.light',
//                           color: 'grey.900',
//                           cursor: 'pointer',
//                           '&:hover': {
//                             color: 'red',
//                           },
//                         }}
//                       >
//                         <Box sx={{ textAlign: 'center' }}>Pakistan Investment Bond</Box>
//                       </Typography>
//                     </Card>
//                   </Grid>
//                 </Grid>
//               </Collapse>

//               <Collapse in={investorGuideCollapse}>
//                 <Grid container spacing={gridSpacing}>
//                   <Grid item xs={12} sx={{ ml: 1, mr: 1, mt: 2 }}>
//                     <Card onClick={() => handleDialogOpen('https://example.com/sukuk')}>
//                       <Typography
//                         component="div"
//                         sx={{
//                           display: 'flex',
//                           justifyContent: 'center',
//                           alignItems: 'center',
//                           py: 3.0,
//                           bgcolor: 'primary.light',
//                           color: 'grey.900',
//                           cursor: 'pointer',
//                           '&:hover': {
//                             color: 'red',
//                           },
//                         }}
//                       >
//                         <Box sx={{ textAlign: 'center' }}>Sukuk</Box>
//                       </Typography>
//                     </Card>
//                   </Grid>
//                 </Grid>
//               </Collapse>
//             </Grid>
//           </Grid>
//         </Grid>
//       </Grid>

//       {/* Monetary Policy Section */}
//       <Grid container spacing={gridSpacing} className="grid">
//         <Grid item xs={8} sx={{ ml: 20, mr: 1, mt: 3 }}>
//           <Grid container spacing={gridSpacing}>
//             <Grid item xs={10} sx={{ ml: 5, mr: 1, mt: 2 }}>
//               <Card onClick={handleMonetaryPolicyCollapse}>
//                 <Box
//                   sx={{
//                     display: 'flex',
//                     justifyContent: 'center',
//                     alignItems: 'center',
//                     py: 3.0,
//                     bgcolor: 'error.dark',
//                     color: '#FFFFFF',
//                     cursor: 'pointer',
//                     fontSize: '20px',
//                   }}
//                 >
//                   <Box
//                     sx={{
//                       fontSize: '20px',
//                       textAlign: 'center',
//                       '@media screen and (max-width: 600px)': { fontSize: '17px', textAlign: 'center' },
//                     }}
//                   >
//                     Monetary Policy
//                   </Box>
//                 </Box>
//               </Card>

//               <Collapse in={monetaryPolicyCollapse}>
//                 <Grid container spacing={gridSpacing}>
//                   <Grid item xs={12} sx={{ ml: 1, mr: 1, mt: 2 }}>
//                     <Card onClick={() => handleDialogOpen('https://example.com/monetary-policy-english')}>
//                       <Typography
//                         component="div"
//                         sx={{
//                           display: 'flex',
//                           justifyContent: 'center',
//                           alignItems: 'center',
//                           py: 3.0,
//                           bgcolor: 'primary.light',
//                           color: 'grey.900',
//                           cursor: 'pointer',
//                           '&:hover': {
//                             color: 'red',
//                           },
//                         }}
//                       >
//                         <Box sx={{ textAlign: 'center' }}>Monetary Policy Statement-(English)</Box>
//                       </Typography>
//                     </Card>
//                   </Grid>
//                 </Grid>
//               </Collapse>

//               <Collapse in={monetaryPolicyCollapse}>
//                 <Grid container spacing={gridSpacing}>
//                   <Grid item xs={12} sx={{ ml: 1, mr: 1, mt: 2 }}>
//                     <Card onClick={() => handleDialogOpen('https://example.com/monetary-policy-urdu')}>
//                       <Typography
//                         component="div"
//                         sx={{
//                           display: 'flex',
//                           justifyContent: 'center',
//                           alignItems: 'center',
//                           py: 3.0,
//                           bgcolor: 'primary.light',
//                           color: 'grey.900',
//                           cursor: 'pointer',
//                           '&:hover': {
//                             color: 'red',
//                           },
//                         }}
//                       >
//                         <Box sx={{ textAlign: 'center' }}>Monetary Policy Statement-(Urdu)</Box>
//                       </Typography>
//                     </Card>
//                   </Grid>
//                 </Grid>
//               </Collapse>
//             </Grid>
//           </Grid>
//         </Grid>
//       </Grid>

//       {/* T-bill Section */}
//       <Grid container spacing={gridSpacing} className="grid">
//         <Grid item xs={8} sx={{ ml: 20, mr: 1, mt: 2 }}>
//           <Grid container spacing={gridSpacing}>
//             <Grid item xs={10} sx={{ ml: 5, mr: 1, mt: 1 }}>
//               <Card onClick={handleTbillCollapse}>
//                 <Box
//                   sx={{
//                     display: 'flex',
//                     justifyContent: 'center',
//                     alignItems: 'center',
//                     py: 3.0,
//                     bgcolor: 'error.dark',
//                     color: '#FFFFFF',
//                     cursor: 'pointer',
//                     fontSize: '20px',
//                   }}
//                 >
//                   <Box
//                     sx={{
//                       fontSize: '20px',
//                       textAlign: 'center',
//                       '@media screen and (max-width: 600px)': { marginLeft: '1rem', fontSize: '17px', textAlign: 'center' },
//                     }}
//                   >
//                     Callendar wise-Tbill and PIB
//                   </Box>
//                 </Box>
//               </Card>

//               <Collapse in={tbillCollapse}>
//                 <Grid container spacing={gridSpacing}>
//                   <Grid item xs={12} sx={{ ml: 1, mr: 1, mt: 2 }}>
//                     <Card onClick={() => handleDialogOpen('https://example.com/tbill-calendar')}>
//                       <Typography
//                         component="div"
//                         sx={{
//                           display: 'flex',
//                           justifyContent: 'center',
//                           alignItems: 'center',
//                           py: 3.0,
//                           bgcolor: 'primary.light',
//                           color: 'grey.900',
//                           cursor: 'pointer',
//                           '&:hover': { color: 'red' },
//                         }}
//                       >
//                         <Box sx={{ textAlign: 'center' }}>T-bill Calendar </Box>
//                       </Typography>
//                     </Card>
//                   </Grid>
//                 </Grid>
//               </Collapse>

//               <Collapse in={tbillCollapse}>
//                 <Grid container spacing={gridSpacing}>
//                   <Grid item xs={12} sx={{ ml: 1, mr: 1, mt: 2 }}>
//                     <Card onClick={() => handleDialogOpen('https://example.com/tbill-calendar')}>
//                       <Typography
//                         component="div"
//                         sx={{
//                           display: 'flex',
//                           justifyContent: 'center',
//                           alignItems: 'center',
//                           py: 3.0,
//                           bgcolor: 'primary.light',
//                           color: 'grey.900',
//                           cursor: 'pointer',
//                           '&:hover': { color: 'red' },
//                         }}
//                       >
//                         <Box sx={{ textAlign: 'center' }}>PIB Calendar </Box>
//                       </Typography>
//                     </Card>
//                   </Grid>
//                 </Grid>
//               </Collapse>
//             </Grid>
//           </Grid>
//         </Grid>
//       </Grid>
 
//    {/* Auction Result wise-Tbill and PIB */}

//       <Grid container spacing={gridSpacing} className="grid">
//         <Grid item xs={8} sx={{ ml: 20, mr: 1, mt: 2 }}>
//           <Grid container spacing={gridSpacing}>
//             <Grid item xs={10} sx={{ ml: 5, mr: 1, mt: 1 }}>
//               <Card onClick={handleAuctionResultCollapse}>
//                 <Box
//                   sx={{
//                     display: 'flex',
//                     justifyContent: 'center',
//                     alignItems: 'center',
//                     py: 3.0,
//                     bgcolor: 'error.dark',
//                     color: '#FFFFFF',
//                     cursor: 'pointer',
//                     fontSize: '20px',
//                   }}
//                 >
//                   <Box
//                     sx={{
//                       fontSize: '20px',
//                       textAlign: 'center',
//                       '@media screen and (max-width: 600px)': { marginLeft: '1rem', fontSize: '17px', textAlign: 'center' },
//                     }}
//                   >
//                     Auction Result wise-Tbill and PIB
//                   </Box>
//                 </Box>
//               </Card>

//               <Collapse in={auctionResultCollapse}>
//                 <Grid container spacing={gridSpacing}>
//                   <Grid item xs={12} sx={{ ml: 1, mr: 1, mt: 2 }}>
//                     <Card onClick={() => handleDialogOpen('https://example.com/tbill-calendar')}>
//                       <Typography
//                         component="div"
//                         sx={{
//                           display: 'flex',
//                           justifyContent: 'center',
//                           alignItems: 'center',
//                           py: 3.0,
//                           bgcolor: 'primary.light',
//                           color: 'grey.900',
//                           cursor: 'pointer',
//                           '&:hover': { color: 'red' },
//                         }}
//                       >
//                         <Box sx={{ textAlign: 'center' }}>T-bill Auction Result </Box>
//                       </Typography>
//                     </Card>
//                   </Grid>
//                 </Grid>
//               </Collapse>

//               <Collapse in={auctionResultCollapse}>
//                 <Grid container spacing={gridSpacing}>
//                   <Grid item xs={12} sx={{ ml: 1, mr: 1, mt: 2 }}>
//                     <Card onClick={() => handleDialogOpen('https://example.com/tbill-calendar')}>
//                       <Typography
//                         component="div"
//                         sx={{
//                           display: 'flex',
//                           justifyContent: 'center',
//                           alignItems: 'center',
//                           py: 3.0,
//                           bgcolor: 'primary.light',
//                           color: 'grey.900',
//                           cursor: 'pointer',
//                           '&:hover': { color: 'red' },
//                         }}
//                       >
//                         <Box sx={{ textAlign: 'center' }}>PIB Auction Result </Box>
//                       </Typography>
//                     </Card>
//                   </Grid>
//                 </Grid>
//               </Collapse>

//               <Collapse in={auctionResultCollapse}>
//                 <Grid container spacing={gridSpacing}>
//                   <Grid item xs={12} sx={{ ml: 1, mr: 1, mt: 2 }}>
//                     <Card onClick={() => handleDialogOpen('https://example.com/tbill-calendar')}>
//                       <Typography
//                         component="div"
//                         sx={{
//                           display: 'flex',
//                           justifyContent: 'center',
//                           alignItems: 'center',
//                           py: 3.0,
//                           bgcolor: 'primary.light',
//                           color: 'grey.900',
//                           cursor: 'pointer',
//                           '&:hover': { color: 'red' },
//                         }}
//                       >
//                         <Box sx={{ textAlign: 'center' }}>Interest Rate Corridor of SBP - History </Box>
//                       </Typography>
//                     </Card>
//                   </Grid>
//                 </Grid>
//               </Collapse>

//               <Collapse in={auctionResultCollapse}>
//                 <Grid container spacing={gridSpacing}>
//                   <Grid item xs={12} sx={{ ml: 1, mr: 1, mt: 2 }}>
//                     <Card onClick={() => handleDialogOpen('https://example.com/tbill-calendar')}>
//                       <Typography
//                         component="div"
//                         sx={{
//                           display: 'flex',
//                           justifyContent: 'center',
//                           alignItems: 'center',
//                           py: 3.0,
//                           bgcolor: 'primary.light',
//                           color: 'grey.900',
                          
//                           cursor: 'pointer',

//                           '&:hover': { color: 'red' },
//                         }}
//                       >
//                         <Box sx={{ textAlign: 'center' }}>Open Market Operations(OMO) Results of SBP </Box>
//                       </Typography>
//                     </Card>
//                   </Grid>
//                 </Grid>
//               </Collapse>
//             </Grid>
//           </Grid>
//         </Grid>
//       </Grid>

//       <Dialog open={dialogOpen} onClose={handleDialogClose} fullWidth maxWidth="md">
//         <DialogContent>
//           <IconButton sx={{ position: 'absolute', top: 5, right: 5 }} onClick={handleDialogClose}>
//             <Close />
//           </IconButton>
//           <iframe title="URL Content" src={dialogContentUrl} style={{ width: '100%', height: '80vh', border: 'none' }} />
//         </DialogContent>
//       </Dialog>
//     </MainCard>
//   );
// };

// export default UtilitiesShadow;




{/* 
// import { useState } from 'react';
// import { Box, Card, Grid, Collapse, Dialog, DialogContent, IconButton, Typography } from '@mui/material';
// import { Close } from '@mui/icons-material'; // Import Close icon from Material-UI
// import MainCard from 'ui-component/cards/MainCard';
// import { gridSpacing } from 'store/constant';
// import 'assets/scss/style.scss';

// const UtilitiesShadow = () => { */}
{/* //   const [investorGuideCollapse, setInvestorGuideCollapse] = useState(false);
//   const [monetaryPolicyCollapse, setMonetaryPolicyCollapse] = useState(false);
//   const [tbillCollapse, setTbillCollapse] = useState(false);
//   const [auctionResultCollapse, setAuctionResultCollapse] = useState(false);
//   const [dialogOpen, setDialogOpen] = useState(false);
//   const dialogUrl = 'rapid.bankalfalah.com';

//   const handleDialogOpen = () => { */}
//     setDialogOpen(true);
//   };

//   const handleDialogClose = () => {
//     setDialogOpen(false);
//   };

//   const handleInvestorGuideCollapse = () => {
//     setInvestorGuideCollapse(!investorGuideCollapse);
//     setMonetaryPolicyCollapse(false); // Close other collapse sections
//     setTbillCollapse(false);
//   };

//   const handleMonetaryPolicyCollapse = () => {
//     setMonetaryPolicyCollapse(!monetaryPolicyCollapse);
//     setInvestorGuideCollapse(false); // Close other collapse sections
//     setTbillCollapse(false);
//   };

//   const handleTbillCollapse = () => {
//     setTbillCollapse(!tbillCollapse);
//     setInvestorGuideCollapse(false); // Close other collapse sections
//     setMonetaryPolicyCollapse(false);
//   };

//   const handleAuctionResultCollapse = () =>{
//     setAuctionResultCollapse(!auctionResultCollapse);
//     setTbillCollapse(false);
//     setInvestorGuideCollapse(false);
//     setMonetaryPolicyCollapse(false);

//   }
//   return (
//     <MainCard
//       title="StateBank Communication"
//       sx={{
//         width: '100%',
//         border: '1px solid #e0e0e0',
//         overflow: 'hidden',
//         position: 'relative',
//         '&:after': {
//           content: '""',
//           position: 'absolute',
//           width: 250,
//           height: 290,
//           background: 'linear-gradient(210.04deg, #FF6B6B -80.94%, rgba(144, 202, 249, 0) 130.49%)',
//           borderRadius: '50%',
//           top: -30,
//           right: -180
//         },
//         '&:before': {
//           content: '""',
//           position: 'absolute',
//           width: 290,
//           height: 250,
//           background: 'linear-gradient(140.9deg, #FF6B6B -64.02%, rgba(144, 202, 249, 0) 130.50%)',
//           borderRadius: '50%',
//           top: -160,
//           right: -130
//         },
//         '@media screen and (max-width: 600px)': {
//           width: '100%',
//           '&:after': {
//             width: '200px',
//             height: '250px'
//           },
//           '&:before': {
//             width: '200px',
//             height: '220px'
//           }
//         }
//       }}
//     >
//       {/* Investor Guide Section */}
//       <Grid container spacing={gridSpacing} className="grid">
//   <Grid item xs={8} sx={{ ml: 20, mr: 1, mt: 3 }}>
//     <Grid container spacing={gridSpacing}>
//       <Grid item xs={10} sx={{ ml: 5, mr: 1, mt: 2 }}>
//         <Card onClick={ handleInvestorGuideCollapse}>
//           <Box
//             sx={{
//               display: 'flex',
//               justifyContent: 'center',
//               alignItems: 'center',
//               py: 3.0,
//               bgcolor: 'error.dark',
//               color: '#FFFFFF',
//               cursor: 'pointer',
//               fontSize: '20px'
//             }}
//           >
//             <Box
//               sx={{
//                 fontSize: '20px',
//                 textAlign: 'center',
//                 '@media screen and (max-width: 600px)': { fontSize: '17px', textAlign: 'center' }
//               }}
//             >
//               Investor Guide
//             </Box>
//           </Box>
//         </Card>

//         <Collapse in={investorGuideCollapse}>
//           <Grid container spacing={gridSpacing}>
//             <Grid item xs={12} sx={{ ml: 1, mr: 1, mt: 2 }}>
//               <Card onClick={handleDialogOpen}>
//                 <Typography
//                   component="div"
//                   sx={{
//                     display: 'flex',
//                     justifyContent: 'center',
//                     alignItems: 'center',
//                     py: 3.0,
//                     bgcolor: 'primary.light',
//                     color: 'grey.900',
//                     cursor: 'pointer',
//                     '&:hover': {
//                       color: 'red',
//                     },
//                   }}
//                 >
//                   <Box sx={{ textAlign: 'center' }}>Market Treasury Bills</Box>
//                 </Typography>
//               </Card>
//             </Grid>
//           </Grid>
//         </Collapse>

//         <Collapse in={investorGuideCollapse}>
//           <Grid container spacing={gridSpacing}>
//             <Grid item xs={12} sx={{ ml: 1, mr: 1, mt: 2 }}>
//               <Card onClick={handleDialogOpen}>
//                 <Typography
//                   component="div"
//                   sx={{
//                     display: 'flex',
//                     justifyContent: 'center',
//                     alignItems: 'center',
//                     py: 3.0,
//                     bgcolor: 'primary.light',
//                     color: 'grey.900',
//                     cursor: 'pointer',
//                     '&:hover': {
//                       color: 'red',
//                     },
//                   }}
//                 >
//                   <Box sx={{ textAlign: 'center' }}>Pakistan Investment Bond</Box>
//                 </Typography>
//               </Card>
//             </Grid>
//           </Grid>
//         </Collapse>

//         <Collapse in={investorGuideCollapse}>
//           <Grid container spacing={gridSpacing}>
//             <Grid item xs={12} sx={{ ml: 1, mr: 1, mt: 2 }}>
//               <Card onClick={handleDialogOpen}>
//                 <Typography
//                   component="div"
//                   sx={{
//                     display: 'flex',
//                     justifyContent: 'center',
//                     alignItems: 'center',
//                     py: 3.0,
//                     bgcolor: 'primary.light',
//                     color: 'grey.900',
//                     cursor: 'pointer',
//                     '&:hover': {
//                       color: 'red',
//                     },
//                   }}
//                 >
//                   <Box sx={{ textAlign: 'center' }}>Sukuk</Box>
//                 </Typography>
//               </Card>
//             </Grid>
//           </Grid>
//         </Collapse>
//       </Grid>
//     </Grid>
//   </Grid>
// </Grid>

//  {/* Monetary Policy Section */}

// <Gri container spacing={gridSpacing} className="grid">
//   <Grid item xs={8} sx={{ ml: 20, mr: 1, mt: 3 }}>
//     <Grid container spacing={gridSpacing}>
//       <Grid item xs={10} sx={{ ml: 5, mr: 1, mt: 2 }}>
//         <Card onClick={handleMonetaryPolicyCollapse}>
//           <Box
//             sx={{
//               display: 'flex',
//               justifyContent: 'center',
//               alignItems: 'center',
//               py: 3.0,
//               bgcolor: 'error.dark',
//               color: '#FFFFFF',
//               cursor: 'pointer',
//               fontSize: '20px'
//             }}
//           >
//             <Box
//               sx={{
//                 fontSize: '20px',
//                 textAlign: 'center',
//                 '@media screen and (max-width: 600px)': { fontSize: '17px', textAlign: 'center' }
//               }}
//             >
//               Monetary Policy
//             </Box>
//           </Box>
//         </Card>

//         <Collapse in={monetaryPolicyCollapse}>
//           <Grid container spacing={gridSpacing}>
//             <Grid item xs={12} sx={{ ml: 1, mr: 1, mt: 2 }}>
//               <Card onClick={handleDialogOpen}>
//                 <Typography
//                   component="div"
//                   sx={{
//                     display: 'flex',
//                     justifyContent: 'center',
//                     alignItems: 'center',
//                     py: 3.0,
//                     bgcolor: 'primary.light',
//                     color: 'grey.900',
//                     cursor: 'pointer',
//                     '&:hover': {
//                       color: 'red',
//                     },
//                   }}
//                 >
//                   <Box sx={{ textAlign: 'center' }}>Monetry Policy Statement-(English)</Box>
//                 </Typography>
//               </Card>
//             </Grid>
//           </Grid>
//         </Collapse>

//         <Collapse in={monetaryPolicyCollapse}>
//           <Grid container spacing={gridSpacing}>
//             <Grid item xs={12} sx={{ ml: 1, mr: 1, mt: 2 }}>
//               <Card onClick={handleDialogOpen}>
//                 <Typography
//                   component="div"
//                   sx={{
//                     display: 'flex',
//                     justifyContent: 'center',
//                     alignItems: 'center',
//                     py: 3.0,
//                     bgcolor: 'primary.light',
//                     color: 'grey.900',
//                     cursor: 'pointer',
//                     '&:hover': {
//                       color: 'red',
//                     },
//                   }}
//                 >
//                   <Box sx={{ textAlign: 'center' }}>Monetry Policy Statement-(Urdu)</Box>
//                 </Typography>
//               </Card>
//             </Grid>
//           </Grid>
//         </Collapse>

//       </Grid>
//     </Grid>
//   </Grid>
// </Gri

//                   sx={{
//                     display: 'flex',
//                     justifyContent: 'center',
//                     alignItems: 'center',
//                     py: 3.0,
//                     bgcolor: 'primary.light',
//                     color: 'grey.900',
//                     cursor: 'pointer',
//                     '&:hover': {
//                       color: 'red',
//                     },
//                   }}
//                 >
//                   <Box sx={{ textAlign: 'center' }}>PIB Calendar</Box>
//                 </Typography>
//               </Card>
//             </Grid>
//           </Grid>
//         </Collapse>

//         <Collapse in={tbillCollapse}>
//           <Grid container spacing={gridSpacing}>
//             <Grid item xs={12} sx={{ ml: 1, mr: 1, mt: 2 }}>
//               <Card onClick={handleDialogOpen}>
//                 <Typography
//                   component="div"
//                   sx={{
//                     display: 'flex',
//                     justifyContent: 'center',
//                     alignItems: 'center',
//                     py: 3.0,
//                     bgcolor: 'primary.light',
//                     color: 'grey.900',
//                     cursor: 'pointer',
//                     '&:hover': {
//                       color: 'red',
//                     },
//                   }}
//                 >
//                   <Box sx={{ textAlign: 'center' }}>T-Bill Auction Result</Box>
//                 </Typography>
//               </Card>
//             </Grid>
//           </Grid>
//         </Collapse>
//       </Grid>
//     </Grid>
//   </Grid>
// </Grid>

// {/* Auction Result wise-Tbill and PIB */}

// <Grid container spacing={gridSpacing} className="grid">
//   <Grid item xs={8} sx={{ ml: 20, mr: 1, mt: 3 }}>
//     <Grid container spacing={gridSpacing}>
//       <Grid item xs={10} sx={{ ml: 5, mr: 1, mt: 2 }}>
//         <Card onClick={ handleAuctionResultCollapse}>
//           <Box
//             sx={{
//               display: 'flex',
//               justifyContent: 'center',
//               alignItems: 'center',
//               py: 3.0,
//               bgcolor: 'error.dark',
//               color: '#FFFFFF',
//               cursor: 'pointer',
//               fontSize: '20px'
//             }}
//           >
//             <Box
//               sx={{
//                 fontSize: '20px',
//                 textAlign: 'center',
//                 '@media screen and (max-width: 600px)': { fontSize: '17px', textAlign: 'center' }
//               }}
//             >
//               Auction Result wise-Tbill and PIB
//             </Box>
//           </Box>
//         </Card>

//         <Collapse in={auctionResultCollapse}>
//           <Grid container spacing={gridSpacing}>
//             <Grid item xs={12} sx={{ ml: 1, mr: 1, mt: 2 }}>
//               <Card onClick={handleDialogOpen}>
//                 <Typography
//                   component="div"
//                   sx={{
//                     display: 'flex',
//                     justifyContent: 'center',
//                     alignItems: 'center',
//                     py: 3.0,
//                     bgcolor: 'primary.light',
//                     color: 'grey.900',
//                     cursor: 'pointer',
//                     '&:hover': {
//                       color: 'red',
//                     },
//                   }}
//                 >
//                   <Box sx={{ textAlign: 'center' }}>T-Bill Auction Result</Box>
//                 </Typography>
//               </Card>
//             </Grid>
//           </Grid>
//         </Collapse>

//         <Collapse in={auctionResultCollapse}>
//           <Grid container spacing={gridSpacing}>
//             <Grid item xs={12} sx={{ ml: 1, mr: 1, mt: 2 }}>
//               <Card onClick={handleDialogOpen}>
//                 <Typography
//                   component="div"
//                   sx={{
//                     display: 'flex',
//                     justifyContent: 'center',
//                     alignItems: 'center',
//                     py: 3.0,
//                     bgcolor: 'primary.light',
//                     color: 'grey.900',
//                     cursor: 'pointer',
//                     '&:hover': {
//                       color: 'red',
//                     },
//                   }}
//                 >
//                   <Box sx={{ textAlign: 'center' }}> PIB Auction Result</Box>
//                 </Typography>
//               </Card>
//             </Grid>
//           </Grid>
//         </Collapse>

//         <Collapse in={investorGuideCollapse}>
//           <Grid container spacing={gridSpacing}>
//             <Grid item xs={12} sx={{ ml: 1, mr: 1, mt: 2 }}>
//               <Card onClick={handleDialogOpen}>
//                 <Typography
//                   component="div"
//                   sx={{
//                     display: 'flex',
//                     justifyContent: 'center',
//                     alignItems: 'center',
//                     py: 3.0,
//                     bgcolor: 'primary.light',
//                     color: 'grey.900',
//                     cursor: 'pointer',
//                     '&:hover': {
//                       color: 'red',
//                     },
//                   }}
//                 >
//                   <Box sx={{ textAlign: 'center' }}>Interest Rate Of Corridor Of SBP -History</Box>
//                 </Typography>
//               </Card>
//             </Grid>
//           </Grid>
//         </Collapse>
//         <Collapse in={auctionResultCollapse}>
//           <Grid container spacing={gridSpacing}>
//             <Grid item xs={12} sx={{ ml: 1, mr: 1, mt: 2 }}>
//               <Card onClick={handleDialogOpen}>
//                 <Typography
//                   component="div"
//                   sx={{
//                     display: 'flex',
//                     justifyContent: 'center',
//                     alignItems: 'center',
//                     py: 3.0,
//                     bgcolor: 'primary.light',
//                     color: 'grey.900',
//                     cursor: 'pointer',
//                     '&:hover': {
//                       color: 'red',
//                     },
//                   }}
//                 >
//                   <Box sx={{ textAlign: 'center' }}> Open Market Operations(OMO) Result of SBP</Box>
//                 </Typography>
//               </Card>
//             </Grid>
//           </Grid>
//         </Collapse>
//       </Grid>
//     </Grid>
//   </Grid>
// </Grid>

//       <Dialog open={dialogOpen} onClose={handleDialogClose} fullWidth maxWidth="md">
//         <DialogContent>
//           <IconButton sx={{ position: 'absolute', top: 5, right: 5 }} onClick={handleDialogClose}>
//             <Close />
//           </IconButton>
//           <iframe title="URL Content" src={dialogUrl} style={{ width: '100%', height: '80vh', border: 'none' }} />
//         </DialogContent>
//       </Dialog>
//     </MainCard>
//   );
// };

// export default UtilitiesShadow;

// import PropTypes from 'prop-types';

// import { useState } from 'react';
// import { Box, Card, Grid, Collapse } from '@mui/material';
// import MainCard from 'ui-component/cards/MainCard';
// import { gridSpacing } from 'store/constant';
// import { Typography } from '@mui/material';
// import 'assets/scss/style.scss';

// const ShadowBox = ({ shadow }) => (
//   <Card sx={{ mb: 3, boxShadow: shadow }}>
//     <Box
//       sx={{
//         display: 'flex',
//         justifyContent: 'center',
//         alignItems: 'center',
//         py: 4.5,
//         bgcolor: 'primary.light',
//         color: 'grey.800'
//       }}
//     >
//       <Box sx={{ color: 'inherit' }}>boxShadow: {shadow}</Box>
//     </Box>
//   </Card>
// );

// ShadowBox.propTypes = {
//   shadow: PropTypes.string.isRequired
// };

// const UtilitiesShadow = () => {
//   const [investorGuideCollapse, setInvestorGuideCollapse] = useState(false);
//   const [monetaryPolicyCollapse, setMonetaryPolicyCollapse] = useState(false);
//   const [tbillCollapse, setTbillCollapse] = useState(false);
//   const [auctionResultCollapse, setAuctionResultCollapse] = useState(false);

//   return (
//     <MainCard
//       title="StateBank Communication"
//       sx={{
//         width: '100%',
//         border: '1px solid #e0e0e0',
//         overflow: 'hidden',
//         position: 'relative',
//         '&:after': {
//           content: '""',
//           position: 'absolute',
//           width: 250,
//           height: 290,
//           background: 'linear-gradient(210.04deg, #FF6B6B -80.94%, rgba(144, 202, 249, 0) 130.49%)',
//           borderRadius: '50%',
//           top: -30,
//           right: -180
//         },
//         '&:before': {
//           content: '""',
//           position: 'absolute',
//           width: 290,
//           height: 250,
//           background: 'linear-gradient(140.9deg, #FF6B6B -64.02%, rgba(144, 202, 249, 0) 130.50%)',
//           borderRadius: '50%',
//           top: -160,
//           right: -130
//         },
//         '@media screen and (max-width: 600px)': {
//           width: '100%', // Adjust width for smaller screens
//           '&:after': {
//             width: '200px', // Reduce width of the pseudo-element after
//             height: '250px' // Reduce height of the pseudo-element after
//           },
//           '&:before': {
//             width: '200px', // Reduce width of the pseudo-element before
//             height: '220px' // Reduce height of the pseudo-element before
//           }
//         }
//       }}
//     >
//       {/* Investor Guide Section */}
//       <Grid container spacing={gridSpacing} className="grid">
//         <Grid item xs={8} sx={{ ml: 20, mr: 1, mt: 3 }}>
//           <Grid container spacing={gridSpacing}>
//             <Grid item xs={10} sx={{ ml: 5, mr: 1, mt: 2 }}>
//               <Card onClick={() => setInvestorGuideCollapse(!investorGuideCollapse)}>
//                 <Box
//                   sx={{
//                     display: 'flex',
//                     justifyContent: 'center',
//                     alignItems: 'center',
//                     py: 3.0,
//                     bgcolor: 'error.dark',
//                     color: '#FFFFFF',
//                     cursor: 'pointer',
//                     fontSize: '20px'
//                   }}
//                 >
//                   <Box
//                     sx={{
//                       fontSize: '20px',
//                       textAlign: 'center',
//                       '@media screen and (max-width: 600px)': { fontSize: '17px', textAlign: 'center' }
//                     }}
//                   >
//                     Investor Guide
//                   </Box>
//                 </Box>
//               </Card>

//               <Collapse in={investorGuideCollapse}>
//                 <Grid container spacing={gridSpacing}>
//                   <Grid item xs={12} sx={{ ml: 1, mr: 1, mt: 2 }}>
//                     <Typography
//                       component="a"

//                       target="_blank"
//                       rel="noopener noreferrer"
//                       className="responsive-text"
//                       sx={{
//                         display: 'flex',
//                         justifyContent: 'center',
//                         alignItems: 'center',
//                         py: 3.0,
//                         bgcolor: 'primary.light',
//                         color: 'grey.900',
//                         cursor: 'pointer',
//                         textDecoration: 'none',
//                         '&:hover': {
//                           color: 'red',
//                           textDecoration: 'none'
//                         }
//                       }}
//                       onClick={(event) => {
//                         event.preventDefault(); // Prevents default behavior (navigation)
//                         const url = 'https://icons8.com/icons/set/sale';
//                         alert(`Opening URL: ${url}`);
//                         window.location.href = url;
//                     }}

//                     >
//                       Market Treasury Bills
//                     </Typography>
//                   </Grid>
//                   <Grid item xs={12} sx={{ ml: 1, mr: 1 }}>
//                     <Typography
//                       component="a"
//                       href="https://icons8.com/icons/set/sale"
//                       target="_blank"
//                       rel="noopener noreferrer"
//                       sx={{
//                         display: 'flex',
//                         justifyContent: 'center',
//                         alignItems: 'center',
//                         py: 3.0,
//                         bgcolor: 'primary.light',
//                         color: 'grey.900',
//                         cursor: 'pointer',
//                         textDecoration: 'none',
//                         '&:hover': {
//                           color: 'red',
//                           textDecoration: 'none'
//                         }
//                       }}
//                     >
//                       Pakistan Investment Bond
//                     </Typography>
//                   </Grid>
//                   <Grid item xs={12} sx={{ ml: 1, mr: 1 }}>
//                     <Typography
//                       component="a"
//                       href="https://icons8.com/icons/set/sale"
//                       target="_blank"
//                       rel="noopener noreferrer"
//                       sx={{
//                         display: 'flex',
//                         justifyContent: 'center',
//                         alignItems: 'center',
//                         py: 3.0,
//                         bgcolor: 'primary.light',
//                         color: 'grey.900',
//                         cursor: 'pointer',
//                         textDecoration: 'none',
//                         '&:hover': {
//                           color: 'red',
//                           textDecoration: 'none'
//                         }
//                       }}
//                     >
//                       Sukok
//                     </Typography>
//                   </Grid>
//                 </Grid>
//               </Collapse>
//             </Grid>
//           </Grid>
//         </Grid>
//       </Grid>

//       {/* Monetary Policy Section */}
//       <Grid container spacing={gridSpacing} className="grid">
//         <Grid item xs={8} sx={{ ml: 20, mr: 1, mt: 2 }}>
//           <Grid container spacing={gridSpacing}>
//             <Grid item xs={10} sx={{ ml: 5, mr: 1, mt: 1 }}>
//               <Card onClick={() => setMonetaryPolicyCollapse(!monetaryPolicyCollapse)}>
//                 <Box
//                   sx={{
//                     display: 'flex',
//                     justifyContent: 'center',
//                     alignItems: 'center',
//                     py: 3.0,
//                     bgcolor: 'error.dark',
//                     color: '#FFFFFF',
//                     cursor: 'pointer',
//                     fontSize: '20px'
//                   }}
//                 >
//                   <Box
//                     sx={{
//                       fontSize: '20px',
//                       textAlign: 'center',
//                       '@media screen and (max-width: 600px)': { fontSize: '17px', textAlign: 'center' }
//                     }}
//                   >
//                     Monetary Policy
//                   </Box>
//                 </Box>
//               </Card>

//               <Collapse in={monetaryPolicyCollapse}>
//                 <Grid container spacing={gridSpacing}>
//                   <Grid item xs={12} sx={{ ml: 1, mr: 1, mt: 2 }}>
//                     <Typography
//                       component="a"
//                       href="https://icons8.com/icons/set/sale"
//                       target="_blank"
//                       rel="noopener noreferrer"
//                       sx={{
//                         display: 'flex',
//                         justifyContent: 'center',
//                         alignItems: 'center',
//                         py: 3.0,
//                         bgcolor: 'primary.light',
//                         color: 'grey.900',
//                         cursor: 'pointer',
//                         textDecoration: 'none',
//                         '&:hover': {
//                           color: 'red',
//                           textDecoration: 'none'
//                         }
//                       }}
//                     >
//                       Monetary Policy Statement-(English)
//                     </Typography>
//                   </Grid>
//                   <Grid item xs={12} sx={{ ml: 1, mr: 1 }}>
//                     <Typography
//                       component="a"
//                       href="https://icons8.com/icons/set/sale"
//                       target="_blank"
//                       rel="noopener noreferrer"
//                       sx={{
//                         display: 'flex',
//                         justifyContent: 'center',
//                         alignItems: 'center',
//                         py: 3.0,
//                         bgcolor: 'primary.light',
//                         color: 'grey.900',
//                         cursor: 'pointer',
//                         textDecoration: 'none',
//                         '&:hover': {
//                           color: 'red',
//                           textDecoration: 'none'
//                         }
//                       }}
//                     >
//                       Monetary Policy Statement-(Urdu)
//                     </Typography>
//                   </Grid>
//                 </Grid>
//               </Collapse>
//             </Grid>
//           </Grid>
//         </Grid>
//       </Grid>
//       {/* T-bill Section */}
//       <Grid container spacing={gridSpacing} className="grid">
//         <Grid item xs={8} sx={{ ml: 20, mr: 1, mt: 2 }}>
//           <Grid container spacing={gridSpacing}>
//             <Grid item xs={10} sx={{ ml: 5, mr: 1, mt: 1 }}>
//               <Card onClick={() => setTbillCollapse(!tbillCollapse)}>
//                 <Box
//                   sx={{
//                     display: 'flex',
//                     justifyContent: 'center',
//                     alignItems: 'center',
//                     py: 3.0,
//                     bgcolor: 'error.dark',
//                     color: '#FFFFFF',
//                     cursor: 'pointer',
//                     fontSize: '20px'
//                   }}
//                 >
//                   <Box
//                     sx={{
//                       fontSize: '20px',
//                       textAlign: 'center',
//                       '@media screen and (max-width: 600px)': { marginLeft: '1rem', fontSize: '17px', textAlign: 'center' }
//                     }}
//                   >
//                     Callendar wise-Tbill and PIB
//                   </Box>
//                 </Box>
//               </Card>

//               <Collapse in={tbillCollapse}>
//                 <Grid container spacing={gridSpacing}>
//                   <Grid item xs={12} sx={{ ml: 1, mr: 1, mt: 2 }}>
//                     <Typography
//                       component="a"
//                       href="https://icons8.com/icons/set/sale"
//                       target="_blank"
//                       rel="noopener noreferrer"
//                       sx={{
//                         display: 'flex',
//                         justifyContent: 'center',
//                         alignItems: 'center',
//                         py: 3.0,
//                         bgcolor: 'primary.light',
//                         color: 'grey.900',
//                         cursor: 'pointer',
//                         textDecoration: 'none',
//                         '&:hover': {
//                           color: 'red',
//                           textDecoration: 'none'
//                         }
//                       }}
//                     >
//                       T-Bill Calendar
//                     </Typography>
//                   </Grid>
//                   <Grid item xs={12} sx={{ ml: 1, mr: 1 }}>
//                     <Typography
//                       component="a"
//                       href="https://icons8.com/icons/set/sale"
//                       target="_blank"
//                       rel="noopener noreferrer"
//                       sx={{
//                         display: 'flex',
//                         justifyContent: 'center',
//                         alignItems: 'center',
//                         py: 3.0,
//                         bgcolor: 'primary.light',
//                         color: 'grey.900',
//                         cursor: 'pointer',
//                         textDecoration: 'none',
//                         '&:hover': {
//                           color: 'red',
//                           textDecoration: 'none'
//                         }
//                       }}
//                     >
//                       PIB Calendar
//                     </Typography>
//                   </Grid>
//                   <Grid item xs={12} sx={{ ml: 1, mr: 1 }}>
//                     <Typography
//                       component="a"
//                       href="https://icons8.com/icons/set/sale"
//                       target="_blank"
//                       rel="noopener noreferrer"
//                       sx={{
//                         display: 'flex',
//                         justifyContent: 'center',
//                         alignItems: 'center',
//                         py: 3.0,
//                         bgcolor: 'primary.light',
//                         color: 'grey.900',
//                         cursor: 'pointer',
//                         textDecoration: 'none',
//                         '&:hover': {
//                           color: 'red',
//                           textDecoration: 'none'
//                         }
//                       }}
//                     >
//                       T-Bill Auction Result
//                     </Typography>
//                   </Grid>
//                 </Grid>
//               </Collapse>
//             </Grid>
//           </Grid>
//         </Grid>
//       </Grid>
//       {/* Auction Result wise-Tbill and PIB */}
//       <Grid container spacing={gridSpacing} className="grid">
//         <Grid item xs={8} sx={{ ml: 20, mr: 1, mt: 2, mb: 5 }}>
//           <Grid container spacing={gridSpacing}>
//             <Grid item xs={10} sx={{ ml: 5, mr: 1, mt: 1 }}>
//               <Card onClick={() => setAuctionResultCollapse(!auctionResultCollapse)}>
//                 <Box
//                   sx={{
//                     display: 'flex',
//                     justifyContent: 'center',
//                     alignItems: 'center',
//                     py: 3.0,
//                     bgcolor: 'error.dark',
//                     color: '#FFFFFF',
//                     cursor: 'pointer',
//                     fontSize: '20px'
//                   }}
//                 >
//                   <Box
//                     sx={{
//                       fontSize: '20px',
//                       textAlign: 'center',
//                       '@media screen and (max-width: 600px)': { marginLeft: '1rem', fontSize: '17px', textAlign: 'center' }
//                     }}
//                   >
//                     Auction Result wise-Tbill and PIB
//                   </Box>
//                 </Box>
//               </Card>

//               <Collapse in={auctionResultCollapse}>
//                 <Grid container spacing={gridSpacing}>
//                   <Grid item xs={12} sx={{ ml: 1, mr: 1, mt: 2 }}>
//                     <Typography
//                       component="a"
//                       href="https://icons8.com/icons/set/sale"
//                       target="_blank"
//                       rel="noopener noreferrer"
//                       sx={{
//                         display: 'flex',
//                         justifyContent: 'center',
//                         alignItems: 'center',
//                         py: 3.0,
//                         bgcolor: 'primary.light',
//                         color: 'grey.900',
//                         cursor: 'pointer',
//                         textDecoration: 'none',
//                         '&:hover': {
//                           color: 'red',
//                           textDecoration: 'none'
//                         }
//                       }}
//                     >
//                       T-Bill Auction Result
//                     </Typography>
//                   </Grid>
//                   <Grid item xs={12} sx={{ ml: 1, mr: 1 }}>
//                     <Typography
//                       component="a"
//                       href="https://icons8.com/icons/set/sale"
//                       target="_blank"
//                       rel="noopener noreferrer"
//                       sx={{
//                         display: 'flex',
//                         justifyContent: 'center',
//                         alignItems: 'center',
//                         py: 3.0,
//                         bgcolor: 'primary.light',
//                         color: 'grey.900',
//                         cursor: 'pointer',
//                         textDecoration: 'none',
//                         '&:hover': {
//                           color: 'red',
//                           textDecoration: 'none'
//                         }
//                       }}
//                     >
//                       PIB Auction Result
//                     </Typography>
//                   </Grid>
//                   <Grid item xs={12} sx={{ ml: 1, mr: 1 }}>
//                     <Typography
//                       component="a"
//                       href="https://icons8.com/icons/set/sale"
//                       target="_blank"
//                       rel="noopener noreferrer"
//                       sx={{
//                         display: 'flex',
//                         justifyContent: 'center',
//                         alignItems: 'center',
//                         py: 3.0,
//                         bgcolor: 'primary.light',
//                         color: 'grey.900',
//                         cursor: 'pointer',
//                         textDecoration: 'none',
//                         '&:hover': {
//                           color: 'red',
//                           textDecoration: 'none'
//                         }
//                       }}
//                     >
//                       Interest Rate Of Corridor Of SBP -History
//                     </Typography>
//                   </Grid>
//                   <Grid item xs={12} sx={{ ml: 1, mr: 1 }}>
//                     <Typography
//                       component="a"
//                       href="https://icons8.com/icons/set/sale"
//                       target="_blank"
//                       rel="noopener noreferrer"
//                       sx={{
//                         display: 'flex',
//                         justifyContent: 'center',
//                         alignItems: 'center',
//                         py: 3.0,
//                         bgcolor: 'primary.light',
//                         color: 'grey.900',
//                         cursor: 'pointer',
//                         textDecoration: 'none',
//                         '&:hover': {
//                           color: 'red',
//                           textDecoration: 'none'
//                         }
//                       }}
//                     >
//                       Open Market Operations(OMO) Result of SBP

//                     </Typography>
//                   </Grid>
//                 </Grid>
//               </Collapse>
//             </Grid>
//           </Grid>
//         </Grid>
//       </Grid>
//     </MainCard>
//   );
// };

// export default UtilitiesShadow;
