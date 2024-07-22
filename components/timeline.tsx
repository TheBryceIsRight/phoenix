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


export default function LeftAlignedTimeline() {
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
        <Image
            src={old_focus_view}
            alt="The original Focus View"
            style={{ borderRadius: 6 }}
            loading="eager"
        />
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
         <Image
            src={focus_view_concept}
            alt="Rough concept when pitching the feature"
            style={{ borderRadius: 6 }}
            loading="eager"
        />
        <br/>
        <Typography variant='h6'>First attempt at fitting every content type into one table</Typography>
        <br/>
        <Image
            src={initial_sketches}
            alt="Focus view concept"
            style={{ borderRadius: 6 }}
            loading="eager"
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
          <Image
            src={original_focus_view}
            alt="Focus view initial launch"
            style={{ borderRadius: 6 }}
            loading="eager"
        />
          <br/>
          <Typography>• Places a greater emphasis on individual dev productivity as opposed to tables of information</Typography>
          <Typography>• Combines Work in Progress, Pull Requests, and Issues into a standardized user itnerface for the first time</Typography>
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
        <Image
            src={brainstorming_focus_view}
            alt="Focus view 2nd redesign brainstorming"
            style={{ borderRadius: 6 }}
            loading="eager"
        />
        <br/>
        <Image
            src={todo_list}
            alt="Focus view todo list concept"
            style={{ borderRadius: 6 }}
            loading="eager"
        />
        <br/>
         <Typography>• Focus shifts to Pull Requests. I explore possibilities of bringing Focus View to a smaller form factor, like the GitKraken Desktop command palette.</Typography>
         <br/>
         <Image
            src={command_explorations}
            alt="Focus view in the command palette concept"
            style={{ borderRadius: 6 }}
            loading="eager"
        />
        <br/>
        <Typography>• This inspires Eric Amodio to try to build Launchpad into the VS Code Quick Pick UI so that it can be called from anywhere.</Typography>
        <br/>
        <Image
            src={erics_experiment_in_VS_Code}
            alt="This inspired Eric Amodio to see if Launchpad could be built into the VS Code Quick Pick UI"
            style={{ borderRadius: 6 }}
            loading="eager"
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
         </TimelineSeparator>
         <TimelineContent sx={{ py: '12px', px: 2 }}>
          <Typography variant="h5" component="span">
            GitKraken 10.0 Release
          </Typography>
          <br/>
          <Typography component="span">
            Largest coordinated release in the company's recent history
          </Typography>
          <br/>

            <br/>
            <Typography variant='h6'>GitKraken Desktop</Typography>
            <br/>
            <Image
                src={pr_categories}
                alt="Focus View, now Launchpad, with categories Pull Requests"
                style={{ borderRadius: 6 }}
                loading="eager"
            />
            <br/>
            <Typography variant='h6'>GitKraken.dev</Typography>
            <br/>
            <Image
                src={pr_categories_gk_dev}
                alt="Focus View, now Launchpad, with categories Pull Requests"
                style={{ borderRadius: 6 }}
                loading="eager"
            />
            <br/>
            <Typography variant='h6'>GitKraken Command Line Interface</Typography>
            <br/>
            <Image
                src={cli_launchpad}
                alt="Focus View, now Launchpad, with categories Pull Requests"
                style={{ borderRadius: 6 }}
                loading="eager"
            />
            <br/>
            <br/>
            <Typography variant='h6'>GitKraken Browser Extension</Typography>
            <br/>
            <Image
                src={browser_extension}
                alt="Focus View, now Launchpad, with categories Pull Requests"
                style={{ borderRadius: 6 }}
                loading="eager"
            />
            <br/>
            <br/>
            <Typography variant='h6'>GitLens in VS Code</Typography>
            <br/>
            <Image
                src={quick_launchpad}
                alt="Focus View, now Launchpad, with categories Pull Requests"
                style={{ borderRadius: 6 }}
                loading="eager"
            />
            <br/>
          <Typography variant='h6'>Release notes</Typography>
          <Typography>• Condensed view of Launchpad within VS Code released. Can open a PR to see its details and take action</Typography>
          <Typography>• PRs categorization released, PRs are grouped based on actions a user needs to take in GitKraken Desktop, GitKraken.dev, and the GitKraken CLI</Typography>
          <Typography>• A condensed version of Launchpad arrives in the GitKraken Browser Extension</Typography>
          <Typography>• Launchpad in the CLI reaches parity with the other versions of the product</Typography>
        </TimelineContent>
       </TimelineItem>
     </Timeline>
  );
}