import Container from './container'
import { EXAMPLE_PATH } from '../lib/constants'
import { Button, Typography } from '@mui/material'
import GitHubIcon from '@mui/icons-material/GitHub';
import Link from 'next/link';

const Footer = () => {
  return ( <footer>
      <Container>
        <div className="py-28 flex flex-col lg:flex-row items-center">
          <Typography variant="h4">Bryce Watson&#39;s Design Portfolio</Typography>
          <br/>
          <div className="flex flex-col lg:flex-row justify-center items-center lg:pl-4 lg:w-1/2">
            <Link href="https://github.com/TheBryceIsRight/phoenix" target="_blank" passHref>
              <Button
                size="large"
                color="secondary"
                aria-label="View the code on GitHub"
                sx={{ mr: 2 }}
                startIcon={<GitHubIcon />}
              >
                View the code on GitHub
              </Button>
            </Link>
          </div>
          <br/>
          <div>
          <Typography variant="caption">© {new Date().getFullYear()} · Bryce Watson · All Rights Reserved </Typography>
          </div>
        </div>
      </Container>
      </footer>
  )
}

export default Footer
