import { AppBar, Avatar, Box, Card, CardContent, CardHeader, Container, CssBaseline, Divider, Grid, Link, Toolbar, Typography } from '@mui/material';
import React from 'react';
import Copyright from '../src/Copyright';
const IndexPage = () => {
  return (
    <React.Fragment>
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      {/* AppBar */}
      <AppBar position="absolute">
        <Toolbar sx={{ pr: '24px', }}>
          <Typography component="h1" variant="h6" color="inherit" noWrap sx={{ flexGrow: 1 }}>
            Aehxy 的个人小站
            </Typography>
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
    </React.Fragment>
  );
};

export default IndexPage;