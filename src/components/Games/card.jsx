import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';



export default function MultiActionAreaCard() {
 
    return (
        <>
        <Card sx={{ maxWidth: 345 }}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    height="140"
                    image="https://images.ctfassets.net/wn7ipiv9ue5v/3ktrooKksc4qmuEZZtasm9/a22c31ddb0f5d536b4187aa79f8c4539/RDR2_CompareEditions_Ultimate_1632x831.jpg?w=1280&h=&fm=webp&q="
                    alt="img"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        <h1>Red Dead Redemption 2:</h1>
                        <h1>Ultimate Edition</h1>
                    </Typography>
                    <Typography variant="body2" color="text.secondary">

                        <p><span>✓</span>&nbsp;  Red Dead Redemption 2: Story Mode</p>
                        <p><span>✓</span>&nbsp;  Red Dead Online</p>
                        <p>SPECIAL EDITION CONTENT</p>
                        <p><span>✓</span>&nbsp; Bank Robbery Mission & Gang Hideout</p>
                        <p><span>✓</span>&nbsp; Dappled Black Thoroughbred</p>
                        <p><span>✓</span>&nbsp; Talisman & Trinket Gameplay Bonuses</p>
                        <p><span>✓</span>&nbsp; Gameplay Boosts, Cash Bonuses & Discounts</p>
                        <p><span>✓</span>&nbsp; The Nuevo Paraiso Gunslinger Outfit</p>
                        <p>ULTIMATE EDITION CONTENT</p>
                        <p><span>✓</span>&nbsp; Bonus Outfits</p>
                        <p><span>✓</span>&nbsp; Rank Bonuses</p>
                        <p><span>✓</span>&nbsp; Black Chestnut Thoroughbred</p>
                        <p><span>✓</span>&nbsp; Free access to the Survivor Camp Theme</p>
                        <p><span>✓</span>&nbsp; Plus get free access to Additional Weapons in both Story Mode and Red Dead Online.</p>
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button size="medium" background-color="red">
                    BUY NOW &nbsp; ₹8,329.00
                </Button>
            </CardActions>
        </Card>,
        <Card sx={{ maxWidth: 345 }}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    height="140"
                    image="https://images.ctfassets.net/wn7ipiv9ue5v/7KiWwShT7SENAxfHhRQRcW/6e291380c22de8f2fbd19a2d86cb91b8/RDR2_CompareEditions_Standard_1632x831.jpg?w=1280&h=&fm=webp&q="
                    alt="img"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        <h1>Red Dead Redemption 2</h1>

                    </Typography>
                    <Typography variant="body2" color="text.secondary">

                        <p><span>✓</span>&nbsp;  Red Dead Redemption 2: Story Mode</p>
                        <p><span>✓</span>&nbsp;  Red Dead Online</p>

                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button size="medium" background-color="primary">
                    BUY NOW &nbsp; ₹4,989.00
                </Button>
            </CardActions>
        </Card>,
        <Card sx={{ maxWidth: 345 }}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    height="140"
                    image="https://images.ctfassets.net/wn7ipiv9ue5v/11rRdAJyLl4DuHwVbvahQV/3115ba302a18394399b6206b62555b45/RDO_CompareEditions_1632x831.jpg?w=1280&h=&fm=webp&q="
                    alt="img"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        <h1>Red Dead Online</h1>

                    </Typography>
                    <Typography variant="body2" color="text.secondary">

                        <p><span>✓</span>&nbsp;  Red Dead Online</p>

                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button size="medium" background-color="primary">
                    BUY NOW &nbsp; ₹1659.00
                </Button>
            </CardActions>
        </Card>
        </>
    );
}
