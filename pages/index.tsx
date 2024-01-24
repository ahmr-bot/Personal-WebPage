import { AppBar, Avatar, Box, Card, CardContent, CardHeader, Container, CssBaseline, Divider, Grid, Link, Switch, Toolbar, Typography, styled, useMediaQuery } from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import React from 'react';
import Copyright from '../src/Copyright';
const IndexPage = () => {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
  const [mode, setMode] = React.useState<'dark' | 'light'>(prefersDarkMode ? 'dark' : 'light');

  const toggleColorMode = () => {
    setMode(prevMode => (prevMode === 'light' ? 'dark' : 'light'));
  };

  const Theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode,
        },
      }),
    [mode]
  );

  const DarkmodeSwitch = styled(Switch)(({ theme }) => ({
    width: 62,
    height: 34,
    padding: 7,
    '& .MuiSwitch-switchBase': {
      margin: 1,
      padding: 0,
      transform: 'translateX(6px)',
      '&.Mui-checked': {
        color: '#fff',
        transform: 'translateX(22px)',
        '& .MuiSwitch-thumb:before': {
          backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
            '#fff',
          )}" d="M4.2 2.5l-.7 1.8-1.8.7 1.8.7.7 1.8.6-1.8L6.7 5l-1.9-.7-.6-1.8zm15 8.3a6.7 6.7 0 11-6.6-6.6 5.8 5.8 0 006.6 6.6z"/></svg>')`,
        },
        '& + .MuiSwitch-track': {
          opacity: 1,
          backgroundColor: theme.palette.mode === 'dark' ? '#8796A5' : '#aab4be',
        },
      },
    },
    '& .MuiSwitch-thumb': {
      backgroundColor: theme.palette.mode === 'dark' ? '#003892' : '#001e3c',
      width: 32,
      height: 32,
      '&::before': {
        content: "''",
        position: 'absolute',
        width: '100%',
        height: '100%',
        left: 0,
        top: 0,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
          '#fff',
        )}" d="M9.305 1.667V3.75h1.389V1.667h-1.39zm-4.707 1.95l-.982.982L5.09 6.072l.982-.982-1.473-1.473zm10.802 0L13.927 5.09l.982.982 1.473-1.473-.982-.982zM10 5.139a4.872 4.872 0 00-4.862 4.86A4.872 4.872 0 0010 14.862 4.872 4.872 0 0014.86 10 4.872 4.872 0 0010 5.139zm0 1.389A3.462 3.462 0 0113.471 10a3.462 3.462 0 01-3.473 3.472A3.462 3.462 0 016.527 10 3.462 3.462 0 0110 6.528zM1.665 9.305v1.39h2.083v-1.39H1.666zm14.583 0v1.39h2.084v-1.39h-2.084zM5.09 13.928L3.616 15.4l.982.982 1.473-1.473-.982-.982zm9.82 0l-.982.982 1.473 1.473.982-.982-1.473-1.473zM9.305 16.25v2.083h1.389V16.25h-1.39z"/></svg>')`,
      },
    },
    '& .MuiSwitch-track': {
      opacity: 1,
      backgroundColor: theme.palette.mode === 'dark' ? '#8796A5' : '#aab4be',
      borderRadius: 20 / 2,
    },
  }));
  

  
  return (
    <ThemeProvider theme={Theme}>
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      {/* AppBar */}
      <AppBar position="absolute">
        <Toolbar sx={{ pr: '24px', }}>
          <Typography component="h1" variant="h6" color="inherit" noWrap sx={{ flexGrow: 1 }}>
            Aehxy 的个人小站
            </Typography>
            <DarkmodeSwitch checked={mode === 'dark'} onChange={toggleColorMode} />
        </Toolbar>
      </AppBar>

      <Box component="main"
        sx={{ backgroundImage: "url(./6nky9qcg.png)", 
        flexGrow: 1, height: '100vh', overflow: 'auto', 
        //首页背景img，还得去部署个Bing每日一图
        }}>
          <Container maxWidth={ "md"} sx={{ 
                          minHeight: "calc(100vh - 16px)",
                          display: "flex",
                          flexDirection: "column",
                          alignContent: "center",
                          justifyContent: "center",
            }}>

      {/* Card */}
      <Card>
        <CardHeader
        avatar={
          <Avatar alt="Profile Picture" src="/avatar.jpg" />
        }
        title="嗨，我是 Aehxy。"
        subheader="来自甘肃省金昌市，高二学生、AS151673 主要维护者、ME Frp 站长……"
      />
         <CardContent>
          {/* Links */}
          <Grid container spacing={2}>
            <Grid item xs={4}>
              {/* Link 1 */}
              <Link href="https://blog.aehxy.com">Blog</Link>
              {/* Add your link content here */}
            </Grid>
            <Grid item xs={4}>
              {/* Link 2 */}
              <Link href="https://space.bilibili.com/495073821">哔哩哔哩</Link>
              {/* Add your link content here */}
            </Grid>
            <Divider />
            <Grid item xs={4}>
              {/* Link 1 */}
              <Link href="http://wpa.qq.com/msgrd?v=3&uin=1878832948&site=qq&menu=yes">QQ</Link>
              {/* Add your link content here */}
            </Grid>
            <Grid item xs={4}>
              {/* Link 2 */}

              <Link href="mailto:im@aehxy.com">邮箱</Link>
              {/* Add your link content here */}
            </Grid>
          </Grid>
         </CardContent>
        </Card>
       </Container>
      </Box>
    </Box>
    <Box
  component="footer"
  sx={{
    py: 3,
    px: 2,
    position: 'fixed',
    left: 0,
    bottom: 0,
    width: '100%'
  }}
>
        <Container maxWidth="sm">
          <Copyright />
        </Container>
      </Box>
    </ThemeProvider>
  );
};

export default IndexPage;