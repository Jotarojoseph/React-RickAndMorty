import FemaleIcon from '@mui/icons-material/Female';
import MaleIcon from '@mui/icons-material/Male';
import { CardActionArea, CardActions } from '@mui/material';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import styled from "styled-components";

export default function CardDesign({ name, image, gender, specie, status }: any) {
    return (
        <CardBox>
            <CardActionArea>
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {name}
                    </Typography>
                    <Details>
                        <CardMedia
                            sx={{
                                width: 150,
                                borderRadius: 4
                            }}
                            component="img"
                            height="140"
                            image={image}
                            alt={name}/>
                        <DetailsBox>
                            <Paragraph>
                                {gender}
                                {gender == 'Male' && <MaleIcon />}
                                {gender == 'Female' && <FemaleIcon />}
                            </Paragraph>
                            <Paragraph>
                                {specie}
                            </Paragraph>
                            <Paragraph>
                                {status}
                            </Paragraph>
                        </DetailsBox>
                    </Details>

                </CardContent>
            </CardActionArea >
            <CardActions
                sx={{
                    paddingLeft: 2,
                }}>
                <ButtonCard >
                    Detalhes
                </ButtonCard>
            </CardActions>
        </CardBox >

    );
}
export const Paragraph = styled.p`
       display: flex;
    align-items: center;
    width: 30%;
    `
export const DetailsBox = styled.div`
    display: flex;
    width: 40%;
    -webkit-box-pack: end;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    `
export const Details = styled.div`
    color: white;
    font-size: 12pt;
    display: flex;
    `
export const CardBox = styled.div`
    background-color: rgb(109 178 205);
    color: rgba(0, 0, 0, 0.87);
    -webkit-transition: box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
    transition: box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
    border-radius: 12px;
    box-shadow: rgb(104 123 131) 0px 2px 4px 2px;
    overflow: hidden;
    width: 45ch;
    height: 32ch    ;
    color: white;
`;
export const ButtonCard = styled.button`
    cursor: pointer;
    padding: 15px;
    border-radius: 10px;
    border: none;
    box-shadow: 0px 1px 2px 2px white ;
    background-color: rgb(255 255 255 / 67%);
    :focus-visible{
        outline: none;
    }
    :hover{
        scale: 1.05;
    }
`;
