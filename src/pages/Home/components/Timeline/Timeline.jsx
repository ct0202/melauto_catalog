import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import TimelineDot from '@mui/lab/TimelineDot';
import CarRentalIcon from '@mui/icons-material/CarRental';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import PaymentIcon from '@mui/icons-material/Payment';
import CelebrationIcon from '@mui/icons-material/Celebration';
import BuildIcon from '@mui/icons-material/Build';
import Typography from '@mui/material/Typography';

import {ThemeProvider} from '@mui/material/styles';

import theme from '../../../../theme.js';

import './styles.css';



export default function WorkFlowTimeline() {
    return (
        <ThemeProvider theme={theme}>
        <Timeline className="timeline" position="right" sx={{ '& .MuiTimelineItem-root': { minHeight: 150 } }}>

            {/* Step 2: Vehicle Selection */}
            <TimelineItem>
                <TimelineSeparator>
                    <TimelineDot color="primary" sx={{ width: 50, height: 50, display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                        <CarRentalIcon sx={{ fontSize: 30, width: 30, height: 30}} />
                    </TimelineDot>
                    <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent sx={{ py: '40px', px: 4 }}>
                    <Typography variant="h5" component="span">
                        Consultation
                    </Typography>
                    <Typography fontSize="1.1rem">Discuss your needs and preferences with our expert advisors.</Typography>
                </TimelineContent>
            </TimelineItem>

            {/* Step 3: Test Drive */}
            <TimelineItem>

                <TimelineSeparator>
                    <TimelineConnector />
                    <TimelineDot color="secondary" sx={{ width: 50, height: 50, display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                        <DirectionsCarIcon sx={{ fontSize: 30, width: 30, height: 30}} />
                    </TimelineDot>
                    <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent sx={{ py: '40px', px: 4 }}>
                    <Typography variant="h5" component="span">
                        Test Drive
                    </Typography>
                    <Typography fontSize="1.1rem">Experience your chosen vehicle on the road.</Typography>
                </TimelineContent>
            </TimelineItem>

            {/* Step 4: Customization & Add-ons */}
            <TimelineItem>
                <TimelineSeparator>
                    <TimelineConnector />
                    <TimelineDot color="primary" sx={{ width: 50, height: 50, display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                        <BuildIcon sx={{ fontSize: 30, width: 30, height: 30}} />
                    </TimelineDot>
                    <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent sx={{ py: '40px', px: 4 }}>
                    <Typography variant="h5" component="span">
                        Customization & Add-ons
                    </Typography>
                    <Typography fontSize="1.1rem">Choose optional upgrades and accessories for your new vehicle.</Typography>
                </TimelineContent>
            </TimelineItem>

            {/* Step 5: Financing & Paperwork */}
            <TimelineItem>
                <TimelineSeparator>
                    <TimelineConnector />
                    <TimelineDot color="primary" variant="outlined" sx={{ width: 50, height: 50, display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                        <PaymentIcon sx={{ fontSize: 30, width: 30, height: 30}} />
                    </TimelineDot>
                    <TimelineConnector sx={{ bgcolor: 'secondary.main' }} />
                </TimelineSeparator>
                <TimelineContent sx={{ py: '40px', px: 4 }}>
                    <Typography variant="h5" component="span">
                        Financing & Paperwork
                    </Typography>
                    <Typography fontSize="1.1rem">Secure your financing and finalize all necessary documents.</Typography>
                </TimelineContent>
            </TimelineItem>

            {/* Step 6: Vehicle Handover */}
            <TimelineItem>
                <TimelineSeparator>
                    <TimelineConnector sx={{ bgcolor: 'secondary.main' }} />
                    <TimelineDot color="accent" sx={{ width: 50, height: 50, display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                        <CelebrationIcon sx={{ fontSize: 30, width: 30, height: 30}} />
                    </TimelineDot>

                </TimelineSeparator>
                <TimelineContent sx={{ py: '40px', px: 4 }}>
                    <Typography variant="h5" component="span">
                        Vehicle Handover
                    </Typography>
                    <Typography fontSize="1.1rem">Drive home in your new car with confidence and excitement!</Typography>
                </TimelineContent>
            </TimelineItem>
        </Timeline>
        </ThemeProvider>
    );
}