import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';


const SimpleAccordion = () => {
    return (
        <div>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <Typography>How do I download my digital purchase from the Rockstar Store?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Rockstar Store digital game purchases and their contents will be applied to the Rockstar Games Social Club account making the purchase and are available via the Rockstar Games Launcher.
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2a-content"
                    id="panel2a-header"
                >
                    <Typography>Where can I find my virtual currency purchases from the Rockstar Store?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Virtual currency purchases are applied to the in-game account balance of the Rockstar Games Social Club account making the purchase and should appear the next time you restart the game.
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <Typography>Where can I find the Rockstar Store refund policy?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                    You can find more information in our Refunds and Returns FAQ.
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <Typography>Where can I find the receipt for my order?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                    Receipts for all purchases are sent to the email address for your Rockstar Games Social Club account. 
                    </Typography>
                </AccordionDetails>
            </Accordion>
        </div>
    );
}

export default SimpleAccordion