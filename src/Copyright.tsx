import MuiLink from '@mui/material/Link';
import Typography from '@mui/material/Typography';

export default function Copyright() {
  return (
    <Typography variant="body2"  color="#FFFFFFB3" align="center">
      <MuiLink color="#FFFFFFB3" href="https://beian.miit.gov.cn/">
      陇ICP备2024006160号-1
      </MuiLink>
      {'\u00A0'}
      <MuiLink color="#FFFFFFB3" href="https://www.beian.gov.cn/">
        公安网备xxxx号
        </MuiLink>
      <br />
      {'Copyright © '}
      <MuiLink color="#FFFFFFB3" href="https://aehxy.com/">
      Aehxy
      </MuiLink>{' '}
      {new Date().getFullYear()}.
    </Typography>
  );
}
