import * as React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import TimelineOppositeContent, {
  timelineOppositeContentClasses,
} from '@mui/lab/TimelineOppositeContent';
import { Typography } from '@mui/material';
import LANationalPark from '../public/assets/aboutme/LANationalPark.jpg'
import Image from 'next/image';
import old_focus_view from '../public/assets/gitkraken/launchpad/old_focus_view.png'
import focus_view_concept from '../public/assets/gitkraken/launchpad/focus_view_concept.svg'
import initial_sketches from '../public/assets/gitkraken/launchpad/initial_sketches.svg'
import original_focus_view from '../public/assets/gitkraken/launchpad/original_focus_view.png'
import brainstorming_focus_view from '../public/assets/gitkraken/launchpad/brainstorming_focus_view.svg'
import todo_list from '../public/assets/gitkraken/launchpad/todo_list.svg'
import command_explorations from '../public/assets/gitkraken/launchpad/command_explorations.png'
import erics_experiment_in_VS_Code from '../public/assets/gitkraken/launchpad/erics_experiment_in_VS_Code.png'
import pr_categories from '../public/assets/gitkraken/launchpad/pr_categories.png'
import pr_categories_gk_dev from '../public/assets/gitkraken/launchpad/pr_categories_gk_dev.png'
import cli_launchpad from '../public/assets/gitkraken/launchpad/cli_launchpad.svg'
import browser_extension from '../public/assets/gitkraken/launchpad/browser_extension.png'
import quick_launchpad from '../public/assets/gitkraken/launchpad/quick_launchpad.svg'
import LightboxImage from './lightboxImage';
import launchpad_thumbnail from '../public/assets/gitkraken/launchpad_thumbnail.png'
import Link from 'next/link';
import { Button } from '@mui/material';

export default function LaunchpadTimeline() {
  return ( <Timeline
      sx={{
        [`& .${timelineOppositeContentClasses.root}`]: {
          flex: 0.2,
        },
      }}
    >
    <TimelineItem>
         <TimelineOppositeContent color="textSecondary">
           <Typography variant='h5'>Apr 2023</Typography>
         </TimelineOppositeContent>
         <TimelineSeparator>
           <TimelineDot />
           <TimelineConnector />
         </TimelineSeparator>
         <TimelineContent>
         <Typography variant='h5'>Focus view redesign begins</Typography>
         <br/>
         <Typography>When I joined GitKraken, there were several intitiatives in motion to make developers more productive in their work. I was assigned to Focus View (later named Launchpad), which was intended to be developer focused dashboard.</Typography>
         <br/>
         <Typography>As part of the redesign effort, Focus View would gain its own dedicated backend service so that it could live in 4 different surfaces instead of just one - GitKraken Desktop, GitKraken.dev, VS Code via GitLens, and the GitKraken CLI. I worked on this project primarily with Justin Roberts, Senior Director of Product at GitKraken. </Typography>
         <br/>
         <Typography>At the time of writing, Launchpad supports integrations with GitHub, GitHub Enterprise, GitLab, GitLab Self-mananged, BitBucket, BitBucket Server, Jira Cloud, Jira Data Center, Trello, and Azure DevOps</Typography>
          <br/>
          <LightboxImage 
          image={old_focus_view.src} 
          imageName='Focus view first iteration' 
          width={old_focus_view.width} 
          height={old_focus_view.height} 
          caption='The first version of the Focus View' 
          alt='Focus view initial launch'
          />
          <Typography>Focus view started out as a home page for GitKraken Workspaces - there was a table for Pull Requests, Issues, and Work In Progress.</Typography>
          <br/>
          <Typography>User research suggested that while somewhat useful in this state, much would need to be done to try to make this a tool developers would want to use on daily basis.</Typography>
      </TimelineContent>
       </TimelineItem>
      <br/>
       <TimelineItem>
         <TimelineOppositeContent color="textSecondary">
           <Typography variant='h5'>May - Jun</Typography>
         </TimelineOppositeContent>
         <TimelineSeparator>
           <TimelineDot />
           <TimelineConnector />
         </TimelineSeparator>
         <TimelineContent>
         <Typography variant='h5'>Initial concepts</Typography>
         <br/>
         <LightboxImage 
                image={focus_view_concept.src} 
                imageName='Focus view concept' 
                width={focus_view_concept.width} 
                height={focus_view_concept.height} 
                caption="This design was mostly used as a conceptual tool to explain that Focus View needed capture more of the developer's flow then just git actions."
                alt='Focus view concept'
            />
        <br/>
        <br/>
        <Typography variant='h6'>First attempt at fitting every content type into one table</Typography>
        <br/>
        <LightboxImage 
              image={initial_sketches.src} 
              imageName='Focus view concept' 
              width={initial_sketches.width} 
              height={initial_sketches.height} 
              caption='Originally there were ideas about other item types Launchpad could have - here there is cloud patches in addition to to do items' 
              alt='Focus view concept'
          />
         </TimelineContent>
       </TimelineItem>
       <br/>
       <TimelineItem>
         <TimelineOppositeContent color="textSecondary">
         <Typography variant='h5'>Jul</Typography>
         </TimelineOppositeContent>
         <TimelineSeparator>
           <TimelineDot />
           <TimelineConnector />
         </TimelineSeparator>
         <TimelineContent>          
            <Typography variant="h5" component="span">
            First major redesign of Focus view released
          </Typography>
          <br/>
          <br/>
        <LightboxImage 
              image={original_focus_view.src} 
              imageName='Focus view initial launch' 
              width={original_focus_view.width} 
              height={original_focus_view.height} 
              caption='Version 1 of the new Focus View' 
              alt='Focus view initial launch'
          />
          <br/>
          <Typography>Combines Work in Progress, Pull Requests, and Issues into a standardized user itnerface for the first time</Typography>
          </TimelineContent>
       </TimelineItem>
       <br/>
       <TimelineItem>
         <TimelineOppositeContent color="textSecondary">
         <Typography variant='h5'>Dec - Feb 2024</Typography>
         </TimelineOppositeContent>
         <TimelineSeparator>
           <TimelineDot />
           <TimelineConnector />    
         </TimelineSeparator>
         <TimelineContent>
        <Typography variant='h6'>2nd major redesign effort begins </Typography>
        <br/>
        <br/>
        <LightboxImage 
              image={brainstorming_focus_view.src} 
              imageName='Focus view 2nd redesign brainstorming' 
              width={brainstorming_focus_view.width} 
              height={brainstorming_focus_view.height} 
              caption='Focus view 2nd redesign brainstorming' 
              alt='Focus view 2nd redesign brainstorming'
          />
        <br/>
        <LightboxImage 
              image={todo_list.src} 
              imageName='Focus view todo list concept' 
              width={todo_list.width} 
              height={todo_list.height} 
              caption='Focus view todo list concept' 
              alt='Focus view todo list concept'
          />
        <br/>
         <Typography>Focus shifts to Pull Requests. I explore possibilities of bringing Focus View to a smaller form factor, like the GitKraken Desktop command palette.</Typography>
         <br/>
         <LightboxImage 
              image={command_explorations.src} 
              imageName='Focus view in the command palette concept' 
              width={command_explorations.width} 
              height={command_explorations.height} 
              caption='Focus view in the command palette concept' 
              alt='Focus view in the command palette concept'
          />
        <br/>
        <Typography>This inspired Eric Amodio to start building Launchpad into the VS Code Quick Pick UI so that it can be called from anywhere.</Typography>
        <br/>
        <LightboxImage 
              image={erics_experiment_in_VS_Code.src} 
              imageName='Launchpad in VS Code' 
              width={erics_experiment_in_VS_Code.width} 
              height={erics_experiment_in_VS_Code.height} 
              caption='' 
              alt='This inspired Eric Amodio to see if Launchpad could be built into the VS Code Quick Pick UI'
          />
         </TimelineContent>
       </TimelineItem>
       <br/>
       <TimelineItem>
         <TimelineOppositeContent color="textSecondary">
         <Typography variant='h5'>May</Typography>
         </TimelineOppositeContent>
         <TimelineSeparator>
           <TimelineDot />
           <TimelineConnector />    
         </TimelineSeparator>
         <TimelineContent sx={{ py: '12px', px: 2 }}>
          <Typography variant="h5" component="span">
            GitKraken 10.0
          </Typography>
          <br/>
          <Typography component="span">
            Launchpad was a major component of this release
          </Typography>
          <br/>
            <br/>
            <Typography variant='h6'>Release notes</Typography>
            <Typography>• Pull Request categorization - PRs are grouped based on actions a user needs to take in GitKraken Desktop, GitKraken.dev, and the GitKraken CLI</Typography>
            <Typography>• A condensed version of Launchpad arrives in the GitKraken Browser Extension</Typography>
            <Typography>• Launchpad in the CLI reaches parity with the other versions of the product</Typography>
            <Typography>• Condensed view of Launchpad within VS Code released. Can open a PR to see its details and take action</Typography>
            <br/>
            <Typography variant='h6'>GitKraken Desktop</Typography>
            <br/>
            <LightboxImage 
              image={pr_categories.src} 
              imageName='Launchpad in GK Desktop' 
              width={pr_categories.width} 
              height={pr_categories.height} 
              caption='Focus View, now Launchpad, with categorized Pull Requests' 
              alt='Focus View, now Launchpad, with categorized Pull Requests'
          />
            <br/>
            <Typography variant='h6'>GitKraken.dev</Typography>
            <br/>
            <LightboxImage 
              image={pr_categories_gk_dev.src} 
              imageName='Launchpad in GK Dev' 
              width={pr_categories_gk_dev.width} 
              height={pr_categories_gk_dev.height} 
              caption='' 
              alt='Focus View, now Launchpad, with categorized Pull Requests'
          />
            <br/>
            <Typography variant='h6'>GitKraken Command Line Interface</Typography>
            <br/>
            <LightboxImage 
              image={cli_launchpad.src} 
              imageName='Launchpad in GK CLI' 
              width={cli_launchpad.width} 
              height={cli_launchpad.height} 
              caption='' 
              alt='Focus View, now Launchpad, with categorized Pull Requests'
          />
            <br/>
            <br/>
            <Typography variant='h6'>GitKraken Browser Extension</Typography>
            <br/>
            <LightboxImage 
              image={browser_extension.src} 
              imageName='Launchpad in GK Browser Extension' 
              width={browser_extension.width} 
              height={browser_extension.height} 
              caption='' 
              alt='Focus View, now Launchpad, with categorized Pull Requests'
          />
            <br/>
            <br/>
            <Typography variant='h6'>GitLens in VS Code</Typography>
            <br/>
            <LightboxImage 
              image={quick_launchpad.src} 
              imageName='Launchpad in VS Code with GitLens' 
              width={quick_launchpad.width} 
              height={quick_launchpad.height} 
              caption='' 
              alt='Focus View, now Launchpad, with categorized Pull Requests'
          />
            <br/>
        </TimelineContent>
       </TimelineItem>
       <TimelineItem>
         <TimelineOppositeContent color="textSecondary">
         <Typography variant='h5'>The Future</Typography>
         </TimelineOppositeContent>
         <TimelineSeparator>
           <TimelineDot />
         </TimelineSeparator>
         <TimelineContent>          
            <Typography variant="h5" component="span">
            Cooking up something cool at GitKraken! 🐙
          </Typography>
          <br/>
          <br/>
          <Link href='https://www.gitkraken.com/solutions/launchpad' passHref target="_blank" tabIndex={-1}>
          <Button variant='text'
            aria-label={'External link to the GitKraken.com page on'}
            style={{
              justifyContent: 'flex-start' , 
              alignContent: 'flex-start', 
              flexDirection: 'column', 
              textTransform: 'none', 
              gap: '8px',
              paddingTop: '16px',
              paddingBottom: '16px'
              }}
          >
              <Image
                src={launchpad_thumbnail}
                alt="External link to feature spotlight on GitKraken.com"
                style={{ borderRadius: 6 }}
              />
            </Button>
          </Link>
          <br/>
          <Typography>Checkout the feature spotlight page on GitKraken.com</Typography>
          </TimelineContent>
       </TimelineItem>
     </Timeline>
  );
}