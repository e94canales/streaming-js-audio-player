import styled from 'styled-components'

const CardStyle = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    

    
    .cardImg {
        width: 100%;
        
        
    }

    .cardInfoContainer{
        color: white;
        padding: 5%;

        @media screen and (max-width: 500px){
                padding: 5% 0;
                
            }
        
        
        
        h3{

            @media screen and (max-width: 500px){
                font-size: 1rem;;
                padding-bottom: 3%;
            }
        }
        h4{
            color: grey;

            @media screen and (max-width: 500px){
                font-size: .8rem;;
                
            }
        }
    }
    
    
    
`

export default CardStyle