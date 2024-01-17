import React from 'react';
import './Hero.css';
import { Carousel } from 'react-material-ui-carousel';
import { Paper } from '@mui/material';

const Hero = ({movies}) => {
    return(
        <div className='movier-carousel-cotainer'>
            <Carousel>
            {
                movies.map((movie)=>{
                    return(
                        <Paper>
                            <div class="movie-card-container">

                            </div>
                        </Paper>
                    )
                })
            }

            </Carousel>
          
        </div>
    );
}

export default Hero; // Corrige esta línea
